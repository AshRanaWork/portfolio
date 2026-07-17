"use client";
// Hero.jsx — the first screen. Three layers:
//  1. An "aurora": two huge blurred violet blobs that drift slowly (pure CSS,
//     costs almost nothing to render — no 3D needed up here).
//  2. Your name, revealed word by word with a spring, then title + tagline.
//  3. A scroll cue at the bottom.

import { motion } from "framer-motion";
import { site } from "@/data/content";

// Animation "recipes". Framer Motion reads these objects:
// hidden = start state, show = end state. staggerChildren makes each
// child element start 0.12s after the previous one — the cascade effect.
const parent = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};
const child = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 90, damping: 16 } },
};

export default function Hero() {
  const words = site.name.split(" ");

  return (
    <section
      id="top"
      style={{
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: 0,
      }}
    >
      {/* Layer 1 — drifting aurora blobs */}
      <motion.div
        aria-hidden
        animate={{ x: [0, 60, -30, 0], y: [0, -40, 30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", width: 560, height: 560, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.35), transparent 65%)",
          top: "-10%", right: "-8%", filter: "blur(60px)",
        }}
      />
      <motion.div
        aria-hidden
        animate={{ x: [0, -50, 40, 0], y: [0, 50, -20, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute", width: 480, height: 480, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(76,29,149,0.45), transparent 65%)",
          bottom: "-15%", left: "-10%", filter: "blur(70px)",
        }}
      />

      {/* Layer 2 — the text */}
      <div className="container">
        <motion.div variants={parent} initial="hidden" animate="show">
          <motion.span variants={child} className="eyebrow">
            SELECT insight FROM data; <span style={{ opacity: 0.5 }}>-- hello, I'm</span>
          </motion.span>

          <h1 style={{ fontSize: "clamp(2.8rem, 9vw, 5.5rem)", marginBottom: 22 }}>
            {words.map((w, i) => (
              <motion.span
                key={i}
                variants={child}
                style={{ display: "inline-block", marginRight: "0.28em" }}
              >
                {i === words.length - 1 ? (
                  <span
                    style={{
                      background: "linear-gradient(120deg, #a78bfa, #8b5cf6 55%, #6d28d9)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    {w}
                  </span>
                ) : (
                  w
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            variants={child}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.05rem, 2.5vw, 1.4rem)",
              color: "var(--ink)",
              marginBottom: 14,
            }}
          >
            {site.title}
          </motion.p>

          <motion.p
            variants={child}
            style={{ color: "var(--muted)", maxWidth: 520, marginBottom: 36 }}
          >
            {site.tagline}
          </motion.p>

          <motion.div variants={child} style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#projects" className="btn btn-primary">View my work</a>
            <a href={`mailto:${site.email}`} className="btn btn-ghost">Get in touch →</a>
          </motion.div>
        </motion.div>
      </div>

      {/* Layer 3 — scroll cue */}
      <motion.div
        aria-hidden
        animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        style={{
          position: "absolute", bottom: 28, left: "50%", x: "-50%",
          color: "var(--muted)", fontSize: "1.4rem",
        }}
      >
        ↓
      </motion.div>
    </section>
  );
}
