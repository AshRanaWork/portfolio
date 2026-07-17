"use client";
// Nav.jsx — fixed glass bar at the top. On mobile the links collapse
// to just the logo + a "Contact" pill to keep it clean.

import { motion } from "framer-motion";
import { site } from "@/data/content";

const links = [
  { href: "#work", label: "What I Do" },
  { href: "#stack", label: "Stack" },
  { href: "#timeline", label: "Journey" },
  { href: "#projects", label: "Projects" },
];

export default function Nav() {
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, delay: 0.2 }}
      style={{
        position: "fixed",
        top: 14,
        left: 0,
        right: 0,
        zIndex: 50,
        display: "flex",
        justifyContent: "center",
        padding: "0 16px",
      }}
    >
      <nav
        className="glass"
        style={{
          display: "flex",
          alignItems: "center",
          gap: 26,
          padding: "10px 22px",
          borderRadius: 999,
        }}
      >
        <a href="#top" style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}>
          {site.name.split(" ")[0]}
          <span style={{ color: "var(--violet-bright)" }}>.</span>
        </a>
        <div className="nav-links" style={{ display: "flex", gap: 22, fontSize: "0.9rem" }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{ color: "var(--muted)" }}>
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          style={{
            fontSize: "0.85rem",
            fontWeight: 600,
            color: "var(--violet-bright)",
          }}
        >
          Contact →
        </a>
      </nav>
    </motion.header>
  );
}
