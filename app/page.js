// page.js — the homepage. Just stacks the sections in order.
//
// Performance note: the 3D section (Three.js ≈ 600KB of JS) is loaded
// with next/dynamic, which means the page paints instantly and the 3D
// code downloads in the background — this is what keeps Lighthouse happy.

"use client";

import dynamic from "next/dynamic";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatIDo from "@/components/WhatIDo";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const TechStack = dynamic(() => import("@/components/TechStack"), {
  ssr: false, // Three.js needs the browser; skip it on the server
  loading: () => (
    <div style={{ minHeight: 300 }} aria-hidden />
  ),
});

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <WhatIDo />
      <TechStack />
      <Timeline />
      <Projects />
      <Contact />
    </main>
  );
}
