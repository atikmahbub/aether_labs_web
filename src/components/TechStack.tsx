"use client";

import { useEffect } from "react";

const row1 = ["React", "Node.js", "MongoDB", "Express", "TypeScript", "Next.js", "React Native", "PostgreSQL"];
const row2 = ["OpenAI API", "LangChain", "AWS", "Docker", "Redis", "Prisma", "TailwindCSS", "Firebase"];

export default function TechStack() {
  useEffect(() => {
    const els = document.querySelectorAll("#tech .reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); observer.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="tech" className="section-pad tech-section">
      <div className="wrap-inner">
        <div className="reveal" style={{ maxWidth: 560, margin: "0 auto", textAlign: "center", marginBottom: 56 }}>
          <span className="section-label" style={{ justifyContent: "center" }}>
            <span className="label-n">04</span>Our Tech Stack
          </span>
          <h2 className="sec-h2" style={{ marginTop: 18 }}>Modern, battle-tested, built to scale.</h2>
        </div>
      </div>

      <div className="marquee-mask reveal tech-marquee">
        <MarqueeRow items={row1} dir="left" />
        <MarqueeRow items={row2} dir="right" />
      </div>

      <style>{`
        .tech-section { overflow: hidden; }
        .tech-marquee { display: flex; flex-direction: column; gap: 16px; }
        @media (max-width: 760px) {
          .tech-marquee { gap: 12px; }
        }
      `}</style>
    </section>
  );
}

function MarqueeRow({ items, dir }: { items: string[]; dir: "left" | "right" }) {
  const doubled = [...items, ...items];
  return (
    <div
      className={dir === "left" ? "track-left" : "track-right"}
      style={{ display: "flex", gap: 14, width: "max-content", willChange: "transform" }}
    >
      {doubled.map((item, i) => (
        <Pill key={i} label={item} violet={i % 2 === 1} />
      ))}
    </div>
  );
}

function Pill({ label, violet }: { label: string; violet: boolean }) {
  return (
    <div
      className="tech-pill"
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(0,229,204,0.4)";
        el.style.color = "var(--heading)";
        el.style.background = "rgba(0,229,204,0.04)";
        el.style.boxShadow = "0 0 24px -6px rgba(0,229,204,0.3)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(255,255,255,0.08)";
        el.style.color = "var(--body)";
        el.style.background = "rgba(255,255,255,0.02)";
        el.style.boxShadow = "";
      }}
    >
      <span style={{
        width: 8, height: 8, borderRadius: "50%", flexShrink: 0,
        background: violet ? "var(--violet)" : "var(--cyan)",
        boxShadow: violet ? "0 0 10px var(--violet)" : "0 0 10px var(--cyan)",
      }} />
      {label}

      <style>{`
        .tech-pill {
          flex-shrink: 0; display: flex; align-items: center; gap: 11px;
          padding: 12px 22px; border-radius: 100px;
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08);
          font-family: var(--font-mono); font-size: 14px; color: var(--body);
          transition: border-color 0.3s, color 0.3s, background 0.3s;
          cursor: default; white-space: nowrap;
        }
        @media (max-width: 760px) {
          .tech-pill { font-size: 13px; padding: 10px 18px; }
        }
      `}</style>
    </div>
  );
}
