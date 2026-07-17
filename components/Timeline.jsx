"use client";
// Timeline.jsx — a vertical violet line that literally draws itself as
// you scroll (useScroll tracks how far through the section you are, and
// scaleY grows the line to match). Entries slide in from alternating
// sides on desktop; on mobile everything sits in one clean column.

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Section from "./Section";
import { timeline } from "@/data/content";

export default function Timeline() {
  const ref = useRef(null);

  // scrollYProgress = 0 when the section enters the screen, 1 when it
  // leaves. useSpring smooths it so the line grows fluidly, not in steps.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const lineScale = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });

  return (
    <Section
      id="timeline"
      eyebrow="SELECT role, org FROM career ORDER BY year DESC;"
      title="The journey so far"
    >
      <div ref={ref} style={{ position: "relative", paddingLeft: 0 }}>
        {/* The growing line */}
        <motion.div
          aria-hidden
          style={{
            position: "absolute",
            left: "clamp(11px, 50%, 50%)",
            top: 0,
            bottom: 0,
            width: 2,
            transformOrigin: "top",
            scaleY: lineScale,
            background: "linear-gradient(to bottom, #a78bfa, #4c1d95)",
            boxShadow: "0 0 18px rgba(139,92,246,0.6)",
          }}
          className="tl-line"
        />

        {timeline.map((item, i) => {
          const left = i % 2 === 0; // alternate sides on desktop
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: left ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className={`tl-item ${left ? "tl-left" : "tl-right"}`}
            >
              {/* Dot on the line */}
              <span className="tl-dot" aria-hidden />
              <div className="glass" style={{ padding: "24px 26px" }}>
                <span
                  className="eyebrow"
                  style={{ marginBottom: 6, fontSize: "0.75rem" }}
                >
                  {item.period}
                </span>
                <h3 style={{ fontSize: "1.15rem" }}>{item.role}</h3>
                <p style={{ color: "var(--violet-bright)", fontSize: "0.9rem", marginBottom: 8 }}>
                  {item.org}
                </p>
                <p style={{ color: "var(--muted)", fontSize: "0.92rem" }}>{item.body}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
