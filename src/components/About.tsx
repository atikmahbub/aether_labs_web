const highlights = [
  { icon: "⚡", title: "Speed-First", desc: "Structured sprints with weekly demos. No bloat, no hand-offs." },
  { icon: "🔒", title: "End-to-End Ownership", desc: "The person you talk to is the person who builds your product." },
  { icon: "🤝", title: "Transparent Process", desc: "You're always in the loop — async-friendly, zero black boxes." },
  { icon: "🧠", title: "AI-First by Default", desc: "We integrate intelligence where it actually adds value, not hype." },
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="wrap">
        <div className="about-lead">
          <div className="reveal">
            <span className="label"><span className="n">07</span> About us</span>
            <h2 className="about-title">A studio built for ambitious products.</h2>
          </div>
          <div className="reveal about-copy">
            <p>Aether Labs is a boutique software studio built around one principle — the best products come from senior engineers who take full ownership. No bloated teams, no account managers, no hand-offs to juniors.</p>
            <p>With <strong>6+ years</strong> of deep expertise across MERN, React Native, AI agent systems, and SaaS architecture, our team takes your product from whiteboard to production — <strong>end-to-end, with full accountability.</strong></p>
          </div>
        </div>

        <div className="highlights-grid">
          {highlights.map((h) => (
            <div className="reveal highlight-card" key={h.title}>
              <div className="highlight-icon">{h.icon}</div>
              <h3 className="highlight-title">{h.title}</h3>
              <p className="highlight-desc">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about-lead {
          display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 54px;
          align-items: start; margin-bottom: 68px;
        }
        .about-title {
          font-size: clamp(30px, 3.5vw, 42px); font-weight: 800;
          text-transform: uppercase; line-height: 1.05; letter-spacing: -0.02em; margin-top: 16px;
        }
        .about-copy { display: flex; flex-direction: column; gap: 20px; }
        .about-copy p { font-family: var(--font-body); font-size: 16px; line-height: 1.7; color: rgba(255,255,255,0.76); }
        .about-copy strong { color: var(--white); font-weight: 700; }

        .highlights-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .highlight-card {
          padding: 28px; background: var(--card); border: 1px solid var(--border);
          border-radius: 12px;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .highlight-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,92,26,0.15);
          box-shadow: 0 8px 24px -10px rgba(0,0,0,0.5), 0 0 18px -8px var(--accent-glow);
        }
        .highlight-icon { font-size: 24px; margin-bottom: 16px; display: block; }
        .highlight-title {
          font-family: var(--font-head); font-weight: 800; font-size: 16px;
          color: var(--white); text-transform: uppercase; letter-spacing: -0.01em;
          margin-bottom: 10px;
        }
        .highlight-desc { font-family: var(--font-body); font-size: 16px; color: rgba(255,255,255,0.76); line-height: 1.7; }

        @media (max-width: 980px) {
          .about-lead { grid-template-columns: 1fr; gap: 26px; margin-bottom: 48px; }
          .highlights-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        }
        @media (max-width: 600px) {
          .highlights-grid { grid-template-columns: 1fr; gap: 14px; }
          .highlight-card { padding: 24px 22px; }
        }
      `}</style>
    </section>
  );
}
