"use client";

import { useEffect } from "react";

const stats = [
  { big: "6–7 Years", desc: "Deep MERN & full-stack expertise across dozens of shipped products." },
  { big: "3 Platforms", desc: "Web, Mobile (iOS / Android), and AI systems — one team, full coverage." },
  { big: "End-to-End", desc: "From idea to deployed product, we own the full stack and the outcome." },
];

const diffs = [
  { icon: "⚡", title: "Fast Delivery", desc: "Structured sprints, weekly demos, no fluff." },
  { icon: "🔒", title: "Production-Grade Code", desc: "Clean architecture, tested, documented." },
  { icon: "🤝", title: "Collaborative Process", desc: "You're never out of the loop." },
  { icon: "🌐", title: "Global Clients", desc: "We work across time zones, async-friendly." },
  { icon: "🧠", title: "AI-First Thinking", desc: "We integrate AI where it adds real value." },
  { icon: "📈", title: "Scalability Focus", desc: "Built to grow with your business." },
];

export default function WhyUs() {
  useEffect(() => {
    const els = document.querySelectorAll("#why .reveal");
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
    <section id="why" className="section-pad">
      <div className="wrap-inner">
        <div className="reveal sec-head-mb" style={{ maxWidth: 680 }}>
          <span className="section-label">
            <span style={{ width: 22, height: 1, background: "linear-gradient(90deg,transparent,var(--cyan))", display: "inline-block", flexShrink: 0 }} />
            <span className="label-n">06</span>Why Aether Labs?
          </span>
          <h2 className="sec-h2">Serious engineers who care about craft.</h2>
        </div>

        {/* Stats */}
        <div className="why-stats">
          {stats.map((s) => (
            <div key={s.big} className="reveal stat-card why-stat">
              <div className="stat-big">{s.big}</div>
              <p style={{ fontSize: 16, color: "var(--body)" }}>{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Differentiators */}
        <div className="reveal why-diffs">
          {diffs.map((d) => (
            <div
              key={d.title}
              className="diff-item"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#0c1320"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--bg-2)"; }}
            >
              <span style={{ fontSize: 24, marginBottom: 14, display: "block" }}>{d.icon}</span>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 7 }}>{d.title}</h3>
              <p style={{ fontSize: 14.5, color: "var(--body)", lineHeight: 1.55 }}>{d.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-stats {
          display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; margin-bottom: 24px;
        }
        .why-stat {
          padding: 44px 36px; border-radius: var(--r);
          background: var(--surface); border: 1px solid var(--border); backdrop-filter: blur(14px);
        }
        .stat-big {
          font-family: var(--font-head); font-weight: 700;
          font-size: clamp(36px, 5vw, 58px); letter-spacing: -0.03em; line-height: 1; margin-bottom: 14px;
          background: linear-gradient(120deg, var(--cyan), var(--violet));
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
        }
        .why-diffs {
          display: grid; grid-template-columns: repeat(3,1fr); gap: 1px;
          background: var(--border); border: 1px solid var(--border);
          border-radius: var(--r); overflow: hidden; margin-top: 20px;
        }
        .diff-item {
          background: var(--bg-2); padding: 28px; transition: background 0.3s;
        }
        @media (max-width: 980px) {
          .why-stats { grid-template-columns: repeat(2,1fr); }
          .why-diffs { grid-template-columns: repeat(2,1fr); }
          .why-stat { padding: 32px 28px; }
        }
        @media (max-width: 600px) {
          .why-stats { grid-template-columns: 1fr; gap: 14px; }
          .why-diffs { grid-template-columns: 1fr; }
          .why-stat { padding: 28px 22px; }
          .diff-item { padding: 22px; }
        }
      `}</style>
    </section>
  );
}
