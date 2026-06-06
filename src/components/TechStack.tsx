"use client";

const row1 = ["React", "Node.js", "MongoDB", "Express", "TypeScript", "Next.js", "React Native", "PostgreSQL"];
const row2 = ["OpenAI API", "LangChain", "AWS", "Docker", "Redis", "Prisma", "TailwindCSS", "Firebase"];

export default function TechStack() {
  return (
    <section id="tech" className="section-pad tech-section">
      <div className="wrap">
        <div className="sec-head reveal" style={{ maxWidth: 560 }}>
          <span className="label"><span className="n">04</span> Tech stack</span>
          <h2>Modern, battle-tested, built to scale</h2>
        </div>
      </div>

      <div className="marquee-mask reveal tech-marquee">
        <MarqueeRow items={row1} dir="left" />
        <MarqueeRow items={row2} dir="right" />
      </div>

      <style>{`
        .tech-section { overflow: hidden; }
        .tech-marquee { display: flex; flex-direction: column; gap: 14px; margin-top: 50px; }
        @media (max-width: 760px) { .tech-marquee { gap: 10px; } }
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
      {doubled.map((item, i) => <Pill key={i} label={item} />)}
    </div>
  );
}

function Pill({ label }: { label: string }) {
  return (
    <div
      className="tech-pill"
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--accent)";
        el.style.color = "var(--white)";
        el.style.background = "rgba(255,90,31,0.06)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--border)";
        el.style.color = "var(--muted)";
        el.style.background = "var(--card)";
      }}
    >
      <span className="pill-dot" />
      {label}

      <style>{`
        .tech-pill {
          flex-shrink: 0; display: flex; align-items: center; gap: 11px;
          padding: 13px 22px; background: var(--card); border: 1px solid var(--border);
          font-family: var(--font-mono); font-size: 14px; color: var(--muted);
          transition: border-color 0.3s, color 0.3s, background 0.3s;
          cursor: default; white-space: nowrap;
        }
        .pill-dot { width: 7px; height: 7px; border-radius: 50%; background: var(--accent); flex-shrink: 0; }
        @media (max-width: 760px) { .tech-pill { font-size: 13px; padding: 10px 18px; } }
      `}</style>
    </div>
  );
}
