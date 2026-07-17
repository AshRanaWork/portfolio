"use client";
// WhatIDo.jsx — three glass cards that rise into view one after
// another and lift with a violet glow on hover.

import { motion } from "framer-motion";
import Section from "./Section";
import { services } from "@/data/content";

export default function WhatIDo() {
  return (
    <Section
      id="work"
      eyebrow="SELECT * FROM services;"
      title="What I do"
      sub="Three ways I make data useful — from the first query to the finished decision."
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 22,
        }}
      >
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            className="glass"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: i * 0.13 }}
            whileHover={{
              y: -8,
              boxShadow: "0 18px 50px rgba(139, 92, 246, 0.22)",
              borderColor: "rgba(167,139,250,0.5)",
            }}
            style={{ padding: "34px 28px" }}
          >
            <div style={{ fontSize: "1.8rem", marginBottom: 16 }}>{s.icon}</div>
            <h3 style={{ fontSize: "1.25rem", marginBottom: 10 }}>{s.title}</h3>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem" }}>{s.body}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
