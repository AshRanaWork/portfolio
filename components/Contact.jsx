"use client";
// Contact.jsx — the closer. Big invitation, two clear actions,
// and a small footer. The paragraph text comes from
// data/content.js (site.contactBlurb) so you never edit this file.

import { motion } from "framer-motion";
import { site } from "@/data/content";

export default function Contact() {
  return (
    <section id="contact" style={{ paddingBottom: 40 }}>
      <div className="container">
        <motion.div
          className="glass"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: "center",
            padding: "clamp(48px, 8vw, 90px) 24px",
            borderRadius: 28,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute", inset: 0,
              background:
                "radial-gradient(ellipse at 50% 120%, rgba(139,92,246,0.22), transparent 60%)",
            }}
          />
          <span className="eyebrow">INSERT INTO inbox (message) VALUES (yours);</span>
          <h2 className="section-title" style={{ marginBottom: 14 }}>
            Let's build something with your data
          </h2>
          <p style={{ color: "var(--muted)", maxWidth: 500, margin: "0 auto 34px" }}>
            {site.contactBlurb}
          </p>
          <div
            style={{
              display: "flex", gap: 14, justifyContent: "center",
              flexWrap: "wrap", position: "relative",
            }}
          >
            <a href={`mailto:${site.email}`} className="btn btn-primary">
              Email me
            </a>
            <a href={site.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
              LinkedIn ↗
            </a>
          </div>
        </motion.div>

        <footer
          style={{
            textAlign: "center",
            padding: "44px 0 30px",
            color: "var(--muted)",
            fontSize: "0.82rem",
            fontFamily: "ui-monospace, monospace",
          }}
        >
          © {new Date().getFullYear()} {site.name} · built with Next.js, R3F & too much coffee
        </footer>
      </div>
    </section>
  );
}
