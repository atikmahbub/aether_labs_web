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
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="label"><span className="n">05</span> Industries</span>
          <h2>Domain depth, not just code</h2>
          <p>We&apos;ve shipped production systems across regulated, high-stakes, and fast-moving industries.</p>
        </div>

        <div className="ind-grid">
          {industries.map((item) => (
            <div className="reveal ind-card" key={item.title}>
              <div className="ind-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="21" height="21">
                  {item.icon}
                </svg>
              </div>
              <div>
                <h3 className="ind-title">{item.title}</h3>
                <p className="ind-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .ind-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: var(--border); border: 1px solid var(--border);
        }
        .ind-card {
          background: var(--card-2); padding: 32px 30px;
          display: flex; align-items: flex-start; gap: 18px; transition: background 0.3s;
        }
        .ind-card:hover { background: var(--card); }
        .ind-icon {
          width: 42px; height: 42px; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,90,31,0.08); border: 1px solid rgba(255,90,31,0.22);
          color: var(--accent);
        }
        .ind-title { font-size: 15px; font-weight: 800; margin-bottom: 8px; text-transform: uppercase; letter-spacing: -0.01em; color: var(--white); }
        .ind-desc { font-family: var(--font-mono); font-size: 13px; color: var(--muted); line-height: 1.6; }
        @media (max-width: 980px) { .ind-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) {
          .ind-grid { grid-template-columns: 1fr; }
          .ind-card { padding: 24px 22px; }
        }
      `}</style>
    </section>
  );
}
