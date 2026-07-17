"use client";
// TechStack.jsx — the showpiece. A field of glassy violet orbs, one per
// skill, floating in 3D space. You can grab and throw them; they spring
// back home and push each other apart when they collide.
//
// How the "physics" works (no physics engine needed — ~40 lines):
//  • Every orb has a HOME position and a VELOCITY.
//  • 60 times/second (useFrame) we apply three forces:
//      1. a spring pulling the orb toward home (+ a gentle sine-wave
//         bob so they never sit still),
//      2. repulsion: if two orbs overlap, push them apart,
//      3. friction, so motion settles instead of oscillating forever.
//  • While you drag an orb, its target becomes your pointer instead
//    of home — release, and the spring takes over again.

import { useRef, useMemo, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import * as THREE from "three";
import Section from "./Section";
import { techStack } from "@/data/content";

// Spread the orbs into a loose ring so they don't spawn overlapping.
function homePositions(count, radius) {
  return Array.from({ length: count }, (_, i) => {
    const a = (i / count) * Math.PI * 2;
    return new THREE.Vector3(
      Math.cos(a) * radius * (0.75 + (i % 3) * 0.18),
      Math.sin(a) * radius * 0.55,
      (i % 2 === 0 ? 1 : -1) * 0.6
    );
  });
}

function Orbs() {
  const { camera, pointer } = useThree();
  const [dragIndex, setDragIndex] = useState(null);
  const [hovered, setHovered] = useState(null);

  // Per-orb state lives in refs (not React state) because it changes
  // every frame — re-rendering React 60×/sec would be wasteful.
  const meshRefs = useRef([]);
  const sim = useMemo(() => {
    const homes = homePositions(techStack.length, 3.1);
    return techStack.map((t, i) => ({
      home: homes[i],
      pos: homes[i].clone(),
      vel: new THREE.Vector3(),
      radius: t.size * 0.62,
      phase: i * 1.7, // offsets the bobbing so orbs move out of sync
    }));
  }, []);

  // Helper: where is the mouse, projected onto the orbs' plane (z = 0)?
  const dragTarget = useMemo(() => new THREE.Vector3(), []);
  const raycaster = useMemo(() => new THREE.Raycaster(), []);
  const plane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), []);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const dt = Math.min(delta, 0.05); // clamp so a lag spike can't explode the sim

    // Update drag target from the pointer
    if (dragIndex !== null) {
      raycaster.setFromCamera(pointer, camera);
      raycaster.ray.intersectPlane(plane, dragTarget);
    }

    sim.forEach((o, i) => {
      // 1) spring toward target (home + bob, or the pointer if dragged)
      const target =
        i === dragIndex
          ? dragTarget
          : new THREE.Vector3(
              o.home.x,
              o.home.y + Math.sin(t * 0.9 + o.phase) * 0.28,
              o.home.z + Math.cos(t * 0.7 + o.phase) * 0.2
            );
      const stiffness = i === dragIndex ? 40 : 6;
      o.vel.addScaledVector(target.clone().sub(o.pos), stiffness * dt);

      // 2) repulsion between overlapping orbs
      sim.forEach((other, j) => {
        if (j === i) return;
        const diff = o.pos.clone().sub(other.pos);
        const dist = diff.length();
        const minDist = o.radius + other.radius + 0.12;
        if (dist < minDist && dist > 0.0001) {
          o.vel.addScaledVector(diff.normalize(), (minDist - dist) * 25 * dt);
        }
      });

      // 3) friction + integrate velocity into position
      o.vel.multiplyScalar(1 - Math.min(3.5 * dt, 1));
      o.pos.addScaledVector(o.vel, dt);
      meshRefs.current[i]?.position.copy(o.pos);
    });
  });

  return (
    <group>
      {techStack.map((tech, i) => (
        <group
          key={tech.name}
          ref={(el) => (meshRefs.current[i] = el)}
          onPointerDown={(e) => {
            e.stopPropagation();
            e.target.setPointerCapture(e.pointerId);
            setDragIndex(i);
          }}
          onPointerUp={() => setDragIndex(null)}
          onPointerOver={() => setHovered(i)}
          onPointerOut={() => setHovered(null)}
        >
          <mesh scale={hovered === i ? 1.12 : 1}>
            <sphereGeometry args={[techStack[i].size * 0.62, 48, 48]} />
            <meshStandardMaterial
              color={i % 2 === 0 ? "#7c3aed" : "#4c1d95"}
              roughness={0.25}
              metalness={0.55}
              emissive={"#8b5cf6"}
              emissiveIntensity={hovered === i ? 0.55 : 0.18}
            />
          </mesh>
          <Text
            position={[0, 0, techStack[i].size * 0.62 + 0.02]}
            fontSize={tech.size * 0.24}
            color="#ecebff"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.008}
            outlineColor="#1e1235"
          >
            {tech.name}
          </Text>
        </group>
      ))}
    </group>
  );
}

export default function TechStack() {
  return (
    <Section
      id="stack"
      eyebrow="SELECT skill FROM stack ORDER BY usage DESC;"
      title="Tech stack"
      sub="Grab an orb and throw it — they always find their way home. Bigger orb = more daily use."
    >
      <div
        className="glass"
        style={{
          height: "min(540px, 70vh)",
          borderRadius: 24,
          overflow: "hidden",
          cursor: "grab",
          touchAction: "pan-y", // lets phones still scroll past the canvas
        }}
      >
        <Canvas
          camera={{ position: [0, 0, 8.5], fov: 45 }}
          dpr={[1, 1.75]} // cap pixel density → smooth on high-res phones
        >
          <ambientLight intensity={0.5} />
          <pointLight position={[6, 6, 6]} intensity={90} color="#c4b5fd" />
          <pointLight position={[-6, -4, 4]} intensity={50} color="#7c3aed" />
          <Suspense fallback={null}>
            <Orbs />
          </Suspense>
        </Canvas>
      </div>
    </Section>
  );
}
