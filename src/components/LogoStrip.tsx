const logos = ["Loomstack", "Northpeak", "Vela Health", "Cobalt", "Meridian", "Vantage"];

export default function LogoStrip() {
  return (
    <section className="logos-section">
      <div className="wrap">
        <p className="logos-cap reveal">[ Trusted by founders and product teams at ]</p>
        <div className="logos-row reveal">
          {logos.map((logo) => (
            <span className="logo-word" key={logo}>{logo}</span>
          ))}
        </div>
      </div>

      <style>{`
        .logos-section { padding: 56px 0; }
        .logos-cap {
          font-family: var(--font-mono); font-size: 12.5px; color: var(--dim); margin-bottom: 30px;
        }
        .logos-row {
          display: flex; flex-wrap: wrap; align-items: center; gap: 18px 46px;
        }
        .logo-word {
          font-family: var(--font-head); font-weight: 800; font-size: 23px;
          color: var(--muted); opacity: 0.6; letter-spacing: -0.01em;
          text-transform: uppercase;
          transition: opacity 0.3s, color 0.3s;
        }
        .logo-word:hover { opacity: 1; color: var(--white); }
        @media (max-width: 760px) {
          .logos-section { padding: 40px 0; }
          .logos-row { gap: 14px 28px; }
          .logo-word { font-size: 18px; }
        }
      `}</style>
    </section>
  );
}
