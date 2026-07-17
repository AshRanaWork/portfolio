"use client";
// Section.jsx — a reusable wrapper every section uses.
// It gives each section: an anchor id (for nav links), the SQL-style
// eyebrow label, a title, and a fade-up animation that triggers the
// first time the section scrolls into view.

import { motion } from "framer-motion";

export default function Section({ id, eyebrow, title, sub, children }) {
  return (
    <section id={id}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          {title && <h2 className="section-title">{title}</h2>}
          {sub && <p className="section-sub">{sub}</p>}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
