const steps = [
  { num: "01", title: "Discovery", desc: "Understand your goals, users, and constraints." },
  { num: "02", title: "Design", desc: "Wireframes, prototypes, and design systems." },
  { num: "03", title: "Build", desc: "Iterative development with weekly demos." },
  { num: "04", title: "Test & QA", desc: "Rigorous testing across devices and edge cases." },
  { num: "05", title: "Launch & Scale", desc: "Deployment, monitoring, and ongoing support." },
];

export default function Process() {
  return (
    <section id="process" className="section-pad">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="label"><span className="n">03</span> Process</span>
          <h2>A clear process. Zero surprises.</h2>
          <p>A structured engagement from first call to long-term scale.</p>
        </div>

        <div className="proc-timeline">
          <div className="proc-line" />
          {steps.map((s) => (
            <div key={s.num} className="reveal proc-step">
              <div className="proc-num">{s.num}</div>
              <div className="proc-info">
                <h3 className="proc-title">{s.title}</h3>
                <p className="proc-desc">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .proc-timeline {
          position: relative; display: grid; grid-template-columns: repeat(5, 1fr);
          gap: 24px; margin-top: 40px;
        }
        .proc-line {
          position: absolute; top: 28px; left: 5%; right: 5%;
          height: 1px; background: linear-gradient(90deg, var(--border), var(--accent), var(--border));
          opacity: 0.6; z-index: 1;
        }
        .proc-step { position: relative; }
        .proc-num {
          width: 56px; height: 56px; border-radius: 50%;
          background: var(--card); border: 1px solid var(--border-2);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-head); font-weight: 800; font-size: 18px; color: var(--accent);
          position: relative; z-index: 2; margin-bottom: 24px;
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .proc-step:hover .proc-num {
          border-color: var(--accent);
          color: #000;
          background: var(--accent);
          box-shadow: 0 0 20px var(--accent-glow);
          transform: scale(1.1);
        }
        .proc-title { font-size: 17px; font-weight: 800; margin-bottom: 9px; text-transform: uppercase; letter-spacing: -0.01em; color: var(--white); }
        .proc-desc { font-family: var(--font-head); font-size: 14px; color: var(--muted); line-height: 1.65; }

        @media (max-width: 980px) {
          .proc-timeline { grid-template-columns: repeat(2, 1fr); gap: 36px 18px; }
          .proc-line { display: none; }
        }
        @media (max-width: 600px) {
          .proc-timeline { grid-template-columns: 1fr; gap: 24px; }
          .proc-step { display: flex; gap: 16px; align-items: flex-start; }
          .proc-num { width: 44px; height: 44px; font-size: 16px; margin-bottom: 0; flex-shrink: 0; }
          .proc-title { font-size: 16px; margin-bottom: 4px; }
        }
      `}</style>
    </section>
  );
}
