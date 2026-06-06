"use client";

const stats = [
  { big: "6–7 Years", desc: "Deep MERN & full-stack expertise across dozens of shipped products." },
  { big: "3 Platforms", desc: "Web, Mobile (iOS / Android), and AI systems — one team, full coverage." },
  { big: "End-to-End", desc: "From idea to deployed product, we own the full stack and the outcome." },
];

const diffs = [
  { m: "01 / Speed", title: "Fast Delivery", desc: "Structured sprints, weekly demos, no fluff." },
  { m: "02 / Quality", title: "Production-Grade Code", desc: "Clean architecture, tested, documented." },
  { m: "03 / Trust", title: "Collaborative Process", desc: "You're never out of the loop." },
  { m: "04 / Reach", title: "Global Clients", desc: "We work across time zones, async-friendly." },
  { m: "05 / Intelligence", title: "AI-First Thinking", desc: "We integrate AI where it adds real value." },
  { m: "06 / Growth", title: "Scalability Focus", desc: "Built to grow with your business." },
];

export default function WhyUs() {
  return (
    <section id="why" className="section-pad">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="label"><span className="n">06</span> Why us</span>
          <h2>Serious engineers who care about craft</h2>
        </div>

        <div className="why-stats">
          {stats.map((s) => (
            <div key={s.big} className="reveal why-stat">
              <div className="stat-big">{s.big}</div>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="why-diffs reveal">
          {diffs.map((d) => (
            <div
              key={d.title}
              className="diff-item"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--card)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "var(--card-2)"; }}
            >
              <span className="diff-m">{d.m}</span>
              <h3 className="diff-title">{d.title}</h3>
              <p className="diff-desc">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .why-stats { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; margin-bottom: 18px; }
        .why-stat {
          padding: 42px 34px; background: var(--card); border: 1px solid var(--border);
          position: relative; overflow: hidden;
        }
        .why-stat::after {
          content: ""; position: absolute; top: 0; left: 0;
          width: 100%; height: 3px; background: var(--accent);
        }
        .stat-big {
          font-family: var(--font-head); font-weight: 900;
          font-size: clamp(28px, 3.4vw, 44px); color: var(--white);
          letter-spacing: -0.03em; line-height: 1.05; margin-bottom: 16px; text-transform: uppercase;
        }
        .stat-big span { color: var(--accent); }
        .why-stat p { font-family: var(--font-mono); font-size: 14px; color: var(--muted); line-height: 1.65; }
        .why-diffs {
          display: grid; grid-template-columns: repeat(3,1fr);
          gap: 1px; background: var(--border); border: 1px solid var(--border);
        }
        .diff-item { background: var(--card-2); padding: 32px 30px; transition: background 0.3s; }
        .diff-m { font-family: var(--font-mono); font-size: 12px; color: var(--accent); display: block; margin-bottom: 14px; letter-spacing: 0.04em; }
        .diff-title { font-size: 17px; font-weight: 800; margin-bottom: 8px; text-transform: uppercase; letter-spacing: -0.01em; color: var(--white); }
        .diff-desc { font-family: var(--font-head); font-size: 14px; color: var(--muted); line-height: 1.65; }

        @media (max-width: 980px) {
          .why-stats { grid-template-columns: repeat(2,1fr); }
          .why-diffs { grid-template-columns: repeat(2,1fr); }
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
