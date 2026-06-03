const industries = [
  { title: "Fintech & Payments", desc: "Dashboards, billing, payouts, and compliance-ready infrastructure.", icon: <><path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6" /></> },
  { title: "Health & Wellness", desc: "HIPAA-aware platforms, patient apps, and care-team tooling.", icon: <><path d="M19 14c1.5-1.6 3-3.5 3-5.5A3.5 3.5 0 0 0 12 6 3.5 3.5 0 0 0 2 8.5C2 10.5 3.5 12.4 5 14l7 7 7-7Z" /></> },
  { title: "E-commerce & Retail", desc: "Storefronts, checkout, and inventory systems built to convert.", icon: <><circle cx="9" cy="20" r="1.4" /><circle cx="18" cy="20" r="1.4" /><path d="M2 3h3l2.5 13h11l2-9H6" /></> },
  { title: "SaaS & B2B Tools", desc: "Multi-tenant apps, admin consoles, and subscription billing.", icon: <><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M3 9h18M7 14h5" /></> },
  { title: "Logistics & Mobility", desc: "Real-time tracking, routing, and operations dashboards.", icon: <><path d="M1 16V8h13v8M14 11h4l3 3v2h-7M3.5 19a1.8 1.8 0 1 0 0-3.6M17.5 19a1.8 1.8 0 1 0 0-3.6" /></> },
  { title: "AI & Data Platforms", desc: "RAG pipelines, agents, and intelligent automation at scale.", icon: <><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></> },
];

export default function Industries() {
  return (
    <section id="industries" className="section-pad">
      <div className="wrap-inner">
        <div className="reveal sec-head-mb" style={{ maxWidth: 680 }}>
          <span className="section-label">
            <span style={{ width: 22, height: 1, background: "linear-gradient(90deg,transparent,var(--cyan))", display: "inline-block", flexShrink: 0 }} />
            <span className="label-n">05</span>Industries We Serve
          </span>
          <h2 className="sec-h2">Domain depth, not just code.</h2>
          <p className="sec-p">We&apos;ve shipped production systems across regulated, high-stakes, and fast-moving industries.</p>
        </div>

        <div className="industries-grid">
          {industries.map((item) => (
            <div className="reveal industry-card" key={item.title}>
              <div className="industry-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22">{item.icon}</svg>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .industries-grid {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px;
          background: var(--border); border: 1px solid var(--border);
          border-radius: var(--r); overflow: hidden;
        }
        .industry-card {
          background: var(--bg-2); padding: 32px 30px; display: flex;
          align-items: flex-start; gap: 18px; transition: background 0.3s;
        }
        .industry-card:hover { background: #0c1320; }
        .industry-icon {
          width: 44px; height: 44px; flex-shrink: 0; border-radius: 11px;
          display: flex; align-items: center; justify-content: center;
          background: rgba(0,229,204,0.07); border: 1px solid rgba(0,229,204,0.18);
          color: var(--cyan);
        }
        .industry-card h3 { font-size: 17.5px; font-weight: 700; margin-bottom: 6px; }
        .industry-card p { font-size: 14px; color: var(--body); line-height: 1.5; }
        @media (max-width: 980px) { .industries-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) {
          .industries-grid { grid-template-columns: 1fr; }
          .industry-card { padding: 24px 22px; }
        }
      `}</style>
    </section>
  );
}
