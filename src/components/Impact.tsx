const stats = [
  ["50+", "Products designed, built & shipped"],
  ["30+", "Clients across 12 time zones"],
  ["6+", "Years of full-stack delivery"],
  ["99.9%", "Uptime across deployed systems"],
];

export default function Impact() {
  return (
    <section className="impact-band">
      <div className="wrap-inner">
        <div className="reveal impact-grid">
          {stats.map(([value, label]) => (
            <div className="impact-cell" key={value}>
              <div className="impact-number"><span>{value}</span></div>
              <div className="impact-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .impact-band { padding: 70px 0; }
        .impact-grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px;
          background: var(--border); border: 1px solid var(--border);
          border-radius: var(--r); overflow: hidden; backdrop-filter: blur(14px);
        }
        .impact-cell { background: var(--bg-2); padding: 44px 36px; transition: background 0.3s; }
        .impact-cell:hover { background: #0c1320; }
        .impact-number {
          font-family: var(--font-head); font-weight: 700; font-size: clamp(38px, 4.4vw, 52px);
          letter-spacing: -0.03em; line-height: 1; color: var(--heading);
        }
        .impact-number span {
          background: linear-gradient(120deg, var(--cyan), var(--violet));
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
        }
        .impact-label { font-size: 14.5px; color: var(--body); margin-top: 12px; }
        @media (max-width: 980px) { .impact-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) {
          .impact-band { padding: 46px 0; }
          .impact-grid { grid-template-columns: 1fr; }
          .impact-cell { padding: 30px 24px; }
        }
      `}</style>
    </section>
  );
}
