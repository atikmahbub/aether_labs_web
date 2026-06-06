const stats = [
  ["30+", "Products designed, built & shipped"],
  ["20+", "Clients across 8+ time zones"],
  ["6+", "Years of full-stack delivery"],
  ["100%", "On-time delivery rate"],
];

export default function Impact() {
  return (
    <section className="impact-band">
      <div className="wrap">
        <div className="reveal impact-grid">
          {stats.map(([value, label]) => (
            <div className="impact-cell" key={value}>
              <div className="impact-num"><span>{value}</span></div>
              <div className="impact-lbl">{label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .impact-band { padding: 60px 0; }
        .impact-grid {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 1px; background: var(--border); border: 1px solid var(--border);
        }
        .impact-cell { background: var(--card-2); padding: 42px 32px; transition: background 0.3s; }
        .impact-cell:hover { background: var(--card); }
        .impact-num {
          font-family: var(--font-head); font-weight: 900;
          font-size: clamp(40px, 4.6vw, 58px); letter-spacing: -0.03em; line-height: 1; color: var(--white);
        }
        .impact-num span { color: var(--accent); }
        .impact-lbl { font-family: var(--font-mono); font-size: 13px; color: var(--muted); margin-top: 14px; line-height: 1.55; }
        @media (max-width: 980px) { .impact-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) {
          .impact-band { padding: 40px 0; }
          .impact-grid { grid-template-columns: 1fr; }
          .impact-cell { padding: 30px 24px; }
        }
      `}</style>
    </section>
  );
}
