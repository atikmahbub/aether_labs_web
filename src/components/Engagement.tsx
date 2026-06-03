"use client";

import { useEffect } from "react";

const models = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="23" height="23">
        <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 4v16" />
      </svg>
    ),
    title: "Project-Based",
    desc: "Fixed scope, timeline, and budget. Ideal for MVPs and defined products.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="23" height="23">
        <path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 4v5h-5" />
      </svg>
    ),
    title: "Retainer / Ongoing",
    desc: "Monthly hours for continuous development, maintenance, and growth.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="23" height="23">
        <circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0M16 6h5M18.5 3.5v5" />
      </svg>
    ),
    title: "Team Extension",
    desc: "Embed our engineers into your team. Flexible, fast, and senior-level.",
  },
];

export default function Engagement() {
  useEffect(() => {
    const els = document.querySelectorAll("#engage .reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("in"), i * 80);
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="engage" className="section-pad">
      <div className="wrap-inner">
        <div className="reveal sec-head-mb" style={{ maxWidth: 680 }}>
          <span className="section-label">
            <span style={{ width: 22, height: 1, background: "linear-gradient(90deg,transparent,var(--cyan))", display: "inline-block", flexShrink: 0 }} />
            <span className="label-n">09</span>How to Work With Us
          </span>
          <h2 className="sec-h2">Engagement models that fit.</h2>
          <p className="sec-p">Flexible ways to bring Aether Labs into your roadmap.</p>
        </div>

        <div className="eng-grid">
          {models.map((m) => (
            <EngCard key={m.title} {...m} />
          ))}
        </div>
      </div>

      <style>{`
        .eng-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        @media (max-width: 980px) { .eng-grid { grid-template-columns: repeat(2,1fr); gap: 16px; } }
        @media (max-width: 600px) { .eng-grid { grid-template-columns: 1fr; gap: 14px; } }
      `}</style>
    </section>
  );
}

function EngCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div
      className="reveal eng-card"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.transform = "";
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
      }}
    >
      <div style={{
        width: 46, height: 46, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center",
        background: "rgba(123,94,255,0.1)", border: "1px solid rgba(123,94,255,0.25)", marginBottom: 24, color: "var(--violet)",
        flexShrink: 0,
      }}>
        {icon}
      </div>
      <h3 style={{ fontSize: 22, fontWeight: 700, marginBottom: 12 }}>{title}</h3>
      <p style={{ fontSize: 15.5, color: "var(--body)", lineHeight: 1.6, flex: 1, marginBottom: 24 }}>{desc}</p>
      <a href="#contact" className="eng-more">Learn More →</a>

      <style>{`
        .eng-card {
          padding: 38px 34px; border-radius: var(--r);
          background: var(--surface); border: 1px solid var(--border);
          backdrop-filter: blur(14px); transition: transform 0.3s, border-color 0.3s;
          display: flex; flex-direction: column;
        }
        .eng-more {
          font-family: var(--font-mono); font-size: 13px; letter-spacing: 0.06em;
          color: var(--cyan); display: inline-flex; align-items: center; gap: 7px;
          transition: gap 0.25s;
        }
        .eng-card:hover .eng-more { gap: 12px; }
        @media (max-width: 600px) {
          .eng-card { padding: 26px 22px; }
        }
      `}</style>
    </div>
  );
}
