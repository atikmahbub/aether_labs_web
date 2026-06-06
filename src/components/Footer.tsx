"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-top">
          {/* Brand */}
          <div className="foot-brand">
            <a href="#top" className="brand foot-brand-link">
              <svg className="brand-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                <path d="M20 3 35 11.5 35 28.5 20 37 5 28.5 5 11.5Z" stroke="#ff5a1f" strokeWidth="2" fill="rgba(255,90,31,0.06)" />
                <path d="M20 12 28 27 12 27Z" stroke="#ff5a1f" strokeWidth="2" fill="none" />
              </svg>
              <span className="brand-name">Aether&nbsp;Labs<span style={{ color: "var(--accent)" }}>®</span></span>
            </a>
            <p className="foot-tagline">We Build What&apos;s Next — full-stack engineering for the products defining tomorrow.</p>
          </div>

          {/* Nav */}
          <div className="foot-col">
            <h4 className="foot-col-head">Navigate</h4>
            {[["#services", "Services"], ["#work", "Selected Work"], ["#about", "About"], ["#faq", "FAQ"], ["#contact", "Contact"]].map(([href, label]) => (
              <a key={href} href={href} className="foot-link">{label}</a>
            ))}
          </div>

          {/* Social */}
          <div className="foot-col">
            <h4 className="foot-col-head">Connect</h4>
            <div className="socials">
              {[
                { label: "GitHub", path: "M12 2C6.5 2 2 6.6 2 12.3c0 4.5 2.9 8.3 6.8 9.7.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 3.9-1.4 6.8-5.2 6.8-9.7C22 6.6 17.5 2 12 2Z" },
                { label: "LinkedIn", path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-.9 1.8-1.9 3.6-1.9 3.9 0 4.6 2.5 4.6 5.8V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9Z" },
                { label: "X", path: "M18.2 2H21l-6.5 7.4L22 22h-6l-4.7-6.1L5.9 22H3l7-8L2 2h6.2l4.2 5.6L18.2 2Zm-1 18h1.7L7.9 3.8H6.1L17.2 20Z" },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label} className="social-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="foot-bottom">
          <span>© {year} Aether Labs®. All rights reserved.</span>
          <span>We Build What&apos;s Next</span>
        </div>
      </div>

      <style>{`
        .footer {
          border-top: 1px solid var(--border);
          padding: 60px 0 34px; position: relative;
        }
        .foot-top {
          display: grid; grid-template-columns: 1.4fr 1fr 1fr;
          gap: 40px; align-items: start; margin-bottom: 48px;
        }
        .foot-brand-link { display: flex; align-items: center; gap: 11px; margin-bottom: 18px; }
        .foot-tagline { font-family: var(--font-mono); font-size: 14px; color: var(--muted); max-width: 280px; line-height: 1.6; }
        .foot-col-head {
          font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.04em;
          color: var(--dim); margin-bottom: 18px; font-weight: 400;
        }
        .foot-link {
          display: block; font-family: var(--font-mono); font-size: 14px;
          color: var(--muted); margin-bottom: 12px; transition: color 0.2s;
        }
        .foot-link:hover { color: var(--accent); }
        .socials { display: flex; gap: 12px; }
        .social-icon {
          width: 40px; height: 40px; border: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          color: var(--muted); transition: color 0.25s, border-color 0.25s, background 0.25s;
        }
        .social-icon:hover {
          color: var(--white); border-color: var(--accent);
          background: rgba(255,90,31,0.06);
        }
        .foot-bottom {
          border-top: 1px solid var(--border); padding-top: 28px;
          display: flex; justify-content: space-between; align-items: center;
          flex-wrap: wrap; gap: 14px;
        }
        .foot-bottom span { font-family: var(--font-mono); font-size: 12.5px; color: var(--dim); }

        @media (max-width: 980px) { .foot-top { grid-template-columns: 1fr 1fr; gap: 32px; } }
        @media (max-width: 600px) {
          .foot-top { grid-template-columns: 1fr; gap: 28px; }
          .footer { padding: 48px 0 28px; }
          .foot-top { margin-bottom: 32px; }
          .foot-bottom { flex-direction: column; align-items: flex-start; gap: 8px; }
        }
      `}</style>
    </footer>
  );
}
