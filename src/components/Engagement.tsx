"use client";

const models = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22">
        <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M8 4v16" />
      </svg>
    ),
    title: "Project-Based",
    desc: "Fixed scope, timeline, and budget. Ideal for MVPs and defined products.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22">
        <path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 4v5h-5" />
      </svg>
    ),
    title: "Retainer / Ongoing",
    desc: "Monthly hours for continuous development, maintenance, and growth.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="22" height="22">
        <circle cx="9" cy="8" r="3" /><path d="M3 20a6 6 0 0 1 12 0M16 6h5M18.5 3.5v5" />
      </svg>
    ),
    title: "Team Extension",
    desc: "Embed our engineers into your team. Flexible, fast, and senior-level.",
  },
];

export default function Engagement() {
  return (
    <section id="engage" className="section-pad">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="label"><span className="n">09</span> How to work with us</span>
          <h2>Engagement models that fit</h2>
          <p>Flexible ways to bring Aether Labs into your roadmap.</p>
        </div>

        <div className="eng-grid">
          {models.map((m) => (
            <div
              key={m.title}
              className="reveal eng-card"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border-2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
              }}
            >
              <div className="eng-ic">{m.icon}</div>
              <h3 className="eng-title">{m.title}</h3>
              <p className="eng-desc">{m.desc}</p>
              <a href="#contact" className="eng-more">Learn More →</a>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .eng-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }
        .eng-card {
          padding: 36px 32px; background: var(--card); border: 1px solid var(--border);
          transition: transform 0.3s, border-color 0.3s; display: flex; flex-direction: column;
        }
        .eng-ic {
          width: 44px; height: 44px; display: flex; align-items: center; justify-content: center;
          background: rgba(255,90,31,0.08); border: 1px solid rgba(255,90,31,0.22);
          margin-bottom: 24px; color: var(--accent);
        }
        .eng-title { font-size: 21px; font-weight: 800; margin-bottom: 12px; text-transform: uppercase; }
        .eng-desc { font-family: var(--font-mono); font-size: 13.5px; color: var(--muted); line-height: 1.65; flex: 1; margin-bottom: 24px; }
        .eng-more {
          font-family: var(--font-mono); font-size: 13px; color: var(--accent);
          display: inline-flex; align-items: center; gap: 8px; transition: gap 0.25s;
        }
        .eng-card:hover .eng-more { gap: 13px; }

        @media (max-width: 980px) { .eng-grid { grid-template-columns: repeat(2,1fr); gap: 16px; } }
        @media (max-width: 600px) {
          .eng-grid { grid-template-columns: 1fr; gap: 14px; }
          .eng-card { padding: 26px 22px; }
        }
      `}</style>
    </section>
  );
}
