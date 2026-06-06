const cases = [
  {
    cls: "c1",
    metric: "$2.4M",
    metricText: "processed in first 3 months",
    sector: "Fintech · Loomstack",
    title: "B2B Payments Dashboard",
    desc: "A real-time reconciliation and payouts platform that cut manual finance work by 60% and scaled to hundreds of merchants.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    cls: "c2",
    metric: "58%",
    metricText: "of support tickets auto-resolved",
    sector: "AI Systems · Northpeak",
    title: "RAG Support Agent",
    desc: "An LLM agent grounded in their knowledge base that resolves most tickets instantly — saving the team roughly 30 hours a week.",
    tags: ["Anthropic", "LangChain", "RAG", "Python"],
  },
  {
    cls: "c3",
    metric: "8K+",
    metricText: "patients onboarded · 4.7★ app",
    sector: "HealthTech · Vela Health",
    title: "Patient Care Platform",
    desc: "A HIPAA-compliant web platform and cross-platform mobile app connecting patients with care teams in real time.",
    tags: ["React Native", "AWS", "HIPAA", "MongoDB"],
  },
];

export default function Work() {
  return (
    <section id="work" className="section-pad">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="label"><span className="n">02</span> Our works</span>
          <h2>Outcomes, not just output</h2>
          <p>A look at what we&apos;ve shipped — and the measurable results that followed.</p>
        </div>

        <div className="work-grid">
          {cases.map((item) => (
            <article className={`reveal case-card ${item.cls}`} key={item.title}>
              <div className="case-cover">
                <div className="case-metric">
                  {item.metric}
                  <small>{item.metricText}</small>
                </div>
              </div>
              <div className="case-body">
                <span className="case-sector">{item.sector}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="case-tags">
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .work-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .case-card {
          border: 1px solid var(--border); overflow: hidden;
          background: var(--card); display: flex; flex-direction: column;
          transition: transform 0.3s, border-color 0.3s;
        }
        .case-card:hover { transform: translateY(-4px); border-color: var(--border-2); }
        .case-cover {
          height: 170px; position: relative; display: flex; flex-direction: column;
          justify-content: flex-end; padding: 26px; overflow: hidden;
        }
        .case-cover::before { content: ""; position: absolute; inset: 0; }
        .case-cover::after {
          content: ""; position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px);
          background-size: 18px 18px; opacity: 0.5;
        }
        .case-card.c1 .case-cover::before { background: linear-gradient(150deg, #1a0f08, #7a2f0c); }
        .case-card.c2 .case-cover::before { background: linear-gradient(150deg, #120d09, #3a2a16); }
        .case-card.c3 .case-cover::before { background: linear-gradient(150deg, #160d07, #5e3410); }
        .case-metric {
          position: relative; z-index: 2; font-family: var(--font-head);
          font-weight: 900; font-size: 42px; color: #fff; letter-spacing: -0.03em; line-height: 1;
        }
        .case-metric small {
          display: block; font-family: var(--font-mono); font-size: 11.5px; font-weight: 400;
          color: rgba(255,255,255,0.74); margin-top: 9px; letter-spacing: 0.02em;
        }
        .case-body { padding: 26px; display: flex; flex-direction: column; flex: 1; }
        .case-sector {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--accent);
        }
        .case-body h3 { font-size: 21px; font-weight: 800; margin: 12px 0 10px; text-transform: uppercase; letter-spacing: -0.01em; }
        .case-body p { font-family: var(--font-mono); font-size: 13.5px; color: var(--muted); line-height: 1.65; flex: 1; }
        .case-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
        .case-tags span {
          font-family: var(--font-mono); font-size: 11px; color: var(--muted);
          padding: 5px 11px; border: 1px solid var(--border);
        }
        @media (max-width: 980px) { .work-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } }
        @media (max-width: 600px) {
          .work-grid { grid-template-columns: 1fr; gap: 14px; }
          .case-cover { height: 150px; }
          .case-body { padding: 22px; }
          .case-metric { font-size: 34px; }
        }
      `}</style>
    </section>
  );
}
