"use client";
// Projects.jsx — each project renders inside a "browser frame" mockup
// (three dots + address bar), which makes a Power BI screenshot look
// like a real product, not a pasted image.
//
// If a project has an embedUrl (Power BI → File → Embed report →
// "Publish to web"), a LIVE interactive dashboard loads in an iframe
// instead of the screenshot. Screenshot is the safe default — never
// publish-to-web anything with confidential data.

import { motion } from "framer-motion";
import Section from "./Section";
import { projects, site } from "@/data/content";

function BrowserFrame({ project }) {
  return (
    <div
      style={{
        borderRadius: "14px 14px 0 0",
        overflow: "hidden",
        border: "1px solid var(--border)",
        borderBottom: "none",
      }}
    >
      {/* Fake browser chrome */}
      <div
        style={{
          display: "flex", alignItems: "center", gap: 8,
          padding: "10px 14px",
          background: "rgba(255,255,255,0.05)",
        }}
      >
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <span key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
        ))}
        <span
          style={{
            marginLeft: 10, flex: 1, fontSize: "0.7rem",
            color: "var(--muted)", background: "rgba(0,0,0,0.3)",
            borderRadius: 6, padding: "3px 10px",
            fontFamily: "ui-monospace, monospace",
            whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
          }}
        >
          {project.title.toLowerCase().replaceAll(" ", "-")}.app
        </span>
      </div>

      {/* Live embed if provided, otherwise the screenshot */}
      {project.embedUrl ? (
        <iframe
          src={project.embedUrl}
          title={project.title}
          loading="lazy"
          style={{ width: "100%", aspectRatio: "16/9", border: "none", display: "block" }}
          allowFullScreen
        />
      ) : (
        <img
          src={project.image}
          alt={`${project.title} dashboard`}
          loading="lazy"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="SELECT * FROM projects WHERE impact = true;"
      title="Featured projects"
      sub="Real dashboards, real pipelines. Code on GitHub where it can be shared."
    >
      <div style={{ display: "grid", gap: 34 }}>
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            className="glass"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.08 }}
            whileHover={{ y: -6, borderColor: "rgba(167,139,250,0.45)" }}
            style={{ overflow: "hidden", borderRadius: 20 }}
          >
            <div style={{ padding: "22px 22px 0" }}>
              <BrowserFrame project={p} />
            </div>
            <div style={{ padding: "22px 26px 28px" }}>
              <h3 style={{ fontSize: "1.3rem", marginBottom: 8 }}>{p.title}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.95rem", marginBottom: 14 }}>
                {p.body}
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 18 }}>
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: "0.72rem",
                      fontFamily: "ui-monospace, monospace",
                      color: "var(--violet-bright)",
                      border: "1px solid var(--border)",
                      borderRadius: 999,
                      padding: "4px 12px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                {p.liveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                    style={{ padding: "9px 20px", fontSize: "0.88rem" }}
                  >
                    Try it live ↗
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-ghost"
                    style={{ padding: "9px 20px", fontSize: "0.88rem" }}
                  >
                    View on GitHub ↗
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ textAlign: "center", marginTop: 36 }}
      >
        <a href={site.github} target="_blank" rel="noreferrer" style={{ color: "var(--muted)" }}>
          More on GitHub <span style={{ color: "var(--violet-bright)" }}>→</span>
        </a>
      </motion.div>
    </Section>
  );
}
