const logos = ["Loomstack", "Northpeak", "Vela Health", "Cobalt", "Meridian", "Vantage"];

export default function LogoStrip() {
  return (
    <section className="logos-strip">
      <div className="wrap-inner">
        <p className="reveal logos-cap">Trusted by founders and product teams at</p>
        <div className="reveal logos-row">
          {logos.map((logo) => (
            <span className="logo-word" key={logo}>
              <span className="logo-dot" />
              {logo}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        .logos-strip { padding: 70px 0 30px; }
        .logos-cap {
          text-align: center; font-family: var(--font-mono); font-size: 12px;
          letter-spacing: 0.2em; text-transform: uppercase; color: var(--body-dim);
          margin-bottom: 38px;
        }
        .logos-row {
          display: flex; flex-wrap: wrap; justify-content: center; align-items: center;
          gap: 20px 52px;
        }
        .logo-word {
          font-family: var(--font-head); font-weight: 700; font-size: 21px;
          color: var(--body); opacity: 0.55; letter-spacing: -0.01em;
          transition: opacity 0.3s, color 0.3s; display: flex; align-items: center; gap: 10px;
        }
        .logo-word:hover { opacity: 1; color: var(--heading); }
        .logo-dot {
          width: 11px; height: 11px; border-radius: 3px;
          background: linear-gradient(135deg, var(--cyan), var(--violet));
        }
        .logo-word:nth-child(2n) .logo-dot { border-radius: 50%; }
        .logo-word:nth-child(3n) .logo-dot { transform: rotate(45deg); border-radius: 2px; }
        @media (max-width: 760px) {
          .logos-strip { padding: 42px 0 20px; }
          .logos-row { gap: 16px 28px; }
          .logo-word { font-size: 18px; }
        }
      `}</style>
    </section>
  );
}
