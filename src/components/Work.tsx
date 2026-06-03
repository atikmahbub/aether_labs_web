const cases = [
  {
    cls: "c1",
    metric: "$40M",
    metricText: "processed in first 6 months",
    sector: "Fintech · Loomstack",
    title: "B2B Payments Dashboard",
    desc: "A real-time reconciliation and payouts platform that cut manual finance work by 80% and scaled to thousands of merchants.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    cls: "c2",
    metric: "62%",
    metricText: "of support tickets auto-resolved",
    sector: "AI Systems · Northpeak",
    title: "RAG Support Agent",
    desc: "An LLM agent grounded in their knowledge base that resolves most tickets instantly — saving an estimated $300K per year.",
    tags: ["Anthropic", "LangChain", "RAG", "Python"],
  },
  {
    cls: "c3",
    metric: "120K",
    metricText: "patients onboarded · 4.8★ app",
    sector: "HealthTech · Vela Health",
    title: "Patient Care Platform",
    desc: "A HIPAA-compliant web platform and cross-platform mobile app connecting patients with care teams in real time.",
    tags: ["React Native", "AWS", "HIPAA", "MongoDB"],
  },
];

export default function Work() {
  return (
    <section id="work" className="section-pad">
      <div className="wrap-inner">
        <div className="reveal sec-head-mb" style={{ maxWidth: 680 }}>
          <span className="section-label">
            <span style={{ width: 22, height: 1, background: "linear-gradient(90deg,transparent,var(--cyan))", display: "inline-block", flexShrink: 0 }} />
            <span className="label-n">02</span>Selected Work
          </span>
          <h2 className="sec-h2">Outcomes, not just output.</h2>
          <p className="sec-p">A look at what we&apos;ve shipped — and the measurable results that followed.</p>
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
        .work-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
        .case-card {
          border: 1px solid var(--border); border-radius: var(--r); overflow: hidden;
          background: var(--surface); backdrop-filter: blur(14px); display: flex; flex-direction: column;
          transition: transform 0.3s, border-color 0.3s;
        }
        .case-card:hover { transform: translateY(-4px); border-color: var(--border-strong); }
        .case-cover {
          height: 158px; position: relative; display: flex; flex-direction: column;
          justify-content: flex-end; padding: 24px; overflow: hidden;
        }
        .case-cover::before { content: ""; position: absolute; inset: 0; opacity: 0.9; }
        .case-cover::after {
          content: ""; position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px);
          background-size: 18px 18px; opacity: 0.4;
        }
        .case-card.c1 .case-cover::before { background: linear-gradient(135deg, #063b39, #0a6b5f); }
        .case-card.c2 .case-cover::before { background: linear-gradient(135deg, #2b1d5e, #4a3a9e); }
        .case-card.c3 .case-cover::before { background: linear-gradient(135deg, #0a3a5e, #0e6b8f); }
        .case-metric {
          position: relative; z-index: 2; font-family: var(--font-head); font-weight: 700;
          font-size: 40px; color: #fff; letter-spacing: -0.02em; line-height: 1;
        }
        .case-metric small {
          display: block; font-family: var(--font-mono); font-size: 11.5px; font-weight: 400;
          color: rgba(255,255,255,0.78); margin-top: 8px; letter-spacing: 0.03em;
        }
        .case-body { padding: 26px 26px 28px; display: flex; flex-direction: column; flex: 1; }
        .case-sector {
          font-family: var(--font-mono); font-size: 11px; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--cyan);
        }
        .case-body h3 { font-size: 20px; font-weight: 700; margin: 11px 0 10px; }
        .case-body p { font-size: 15px; color: var(--body); line-height: 1.6; flex: 1; }
        .case-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 20px; }
        .case-tags span {
          font-family: var(--font-mono); font-size: 11px; color: var(--body);
          padding: 5px 11px; border: 1px solid var(--border); border-radius: 100px;
        }
        @media (max-width: 980px) { .work-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } }
        @media (max-width: 600px) {
          .work-grid { grid-template-columns: 1fr; gap: 14px; }
          .case-cover { height: 144px; }
          .case-body { padding: 22px; }
        }
      `}</style>
    </section>
  );
}
