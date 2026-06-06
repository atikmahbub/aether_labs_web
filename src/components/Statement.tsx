export default function Statement() {
  return (
    <section className="statement section-pad">
      <div className="wrap">
        <span className="label reveal"><span className="n">00</span> Studio</span>
        <h2 className="stmt-big reveal">
          We build elite AI systems &amp; software for <em>ambitious companies.</em>
        </h2>
        <div className="stmt-cols">
          <p className="reveal">We are an elite software and AI product studio partnering with high-growth startups and visionary founders. We design, prototype, and build production-grade web systems, mobile platforms, and autonomous agent workflows.</p>
          <p className="reveal">Aether Labs bridges the gap between complex model orchestration and intuitive product interfaces. We help teams establish solid technical architecture and deploy products that generate actual business value.</p>
        </div>
        <div className="stmt-meta reveal">MERN &amp; React Native Specialists &nbsp;•&nbsp; AI Agent Integrations &nbsp;•&nbsp; Built to Scale</div>
      </div>

      <style>{`
        .stmt-big {
          font-size: clamp(40px, 6.6vw, 98px);
          font-weight: 900; text-transform: uppercase; color: var(--white);
          line-height: 0.93; letter-spacing: -0.03em; max-width: 14ch;
          margin: 22px 0 48px;
        }
        .stmt-big em { font-style: normal; color: var(--accent); }
        .stmt-cols {
          display: grid; grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 48px; max-width: 760px;
        }
        .stmt-cols p {
          font-family: var(--font-mono); font-size: 14.5px; color: var(--muted); line-height: 1.75;
        }
        .stmt-meta {
          margin-top: 44px; font-family: var(--font-mono); font-size: 13px; color: var(--dim);
        }
        @media (max-width: 760px) {
          .stmt-cols { grid-template-columns: 1fr; gap: 24px; }
          .stmt-big { font-size: clamp(32px, 10vw, 64px); margin-bottom: 32px; }
        }
      `}</style>
    </section>
  );
}
