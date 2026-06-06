export default function Statement() {
  return (
    <section className="statement section-pad">
      <div className="wrap">
        <span className="label reveal"><span className="n">00</span> Studio</span>
        <h2 className="stmt-big reveal">
          We craft digital experiences that <em>connect brands with people.</em>
        </h2>
        <div className="stmt-cols">
          <p className="reveal">We are a multidisciplinary software studio working with startups, founders, and growing companies worldwide. From strategy to design and engineering, we help companies stand out and grow with confidence.</p>
          <p className="reveal">Aether Labs helps teams define their product, build strong technical foundations, and launch meaningful digital experiences that support real business growth.</p>
        </div>
        <div className="stmt-meta reveal">Global · Remote-first &nbsp;•&nbsp; Est. 2020</div>
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
