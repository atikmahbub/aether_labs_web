"use client";

import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav
      className={`site-nav${scrolled ? " scrolled" : ""}`}
      id="nav"
    >
      <div className="nav-inner">
        {/* Brand */}
        <a className="brand" href="#top" aria-label="Aether Labs home">
          <svg className="brand-mark" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <path d="M20 3 35 11.5 35 28.5 20 37 5 28.5 5 11.5Z" stroke="#FF5C1A" strokeWidth="2" fill="rgba(255,92,26,0.06)" />
            <path d="M20 12 28 27 12 27Z" stroke="#FF5C1A" strokeWidth="2" fill="none" />
          </svg>
          <span className="brand-name">
            Aether&nbsp;Labs<span style={{ color: "var(--accent)" }}>®</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="nav-links" id="navLinks">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav-link-item">
              {l.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div className="nav-meta">
          <a href="#contact" className="nav-cta">Contact us</a>
          <button
            className="menu-btn"
            id="menuBtn"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="mobile-link"
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a href="#contact" className="mobile-link" style={{ color: "var(--accent)" }} onClick={() => setMenuOpen(false)}>
            Contact us
          </a>
        </div>
      )}

      <style>{`
        .site-nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          transition: background 0.35s, backdrop-filter 0.35s, border-color 0.35s;
          border-bottom: 1px solid transparent;
        }
        .site-nav.scrolled {
          background: rgba(13,5,0,0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          max-width: var(--maxw); margin: 0 auto;
          padding: 22px 32px;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
          transition: padding 0.35s;
        }
        .site-nav.scrolled .nav-inner { padding: 15px 32px; }
        .brand { display: flex; align-items: center; gap: 11px; }
        .brand-mark { width: 26px; height: 26px; flex-shrink: 0; }
        .brand-name {
          font-family: var(--font-head); font-weight: 900; font-size: 18px;
          color: var(--white); letter-spacing: -0.01em; text-transform: uppercase;
        }
        .nav-links { display: flex; align-items: center; gap: 30px; }
        .nav-link-item {
          font-family: var(--font-mono); font-size: 14px; color: var(--muted);
          transition: color 0.2s;
        }
        .nav-link-item:hover { color: var(--white); }
        .nav-meta { display: flex; align-items: center; gap: 26px; }
        .nav-email {
          font-family: var(--font-mono); font-size: 13.5px; color: var(--muted);
          transition: color 0.2s;
        }
        .nav-email:hover { color: var(--white); }
        .nav-cta {
          font-family: var(--font-mono); font-size: 14px; color: var(--white);
          position: relative; padding-bottom: 3px;
          display: inline-flex; align-items: center; gap: 8px;
        }
        .nav-cta::after {
          content: ""; position: absolute; left: 0; bottom: 0;
          width: 100%; height: 1px; background: currentColor;
          transform-origin: left; transition: transform 0.3s;
        }
        .nav-cta:hover::after { transform: scaleX(0.4); }
        .menu-btn {
          display: none; background: none; border: 0; cursor: pointer;
          flex-direction: column; gap: 5px; padding: 6px;
        }
        .menu-btn span {
          width: 24px; height: 2px; background: var(--white);
          border-radius: 2px; display: block; transition: 0.3s;
        }
        .mobile-menu {
          background: rgba(13,5,0,0.97);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          padding: 8px 32px 22px;
        }
        .mobile-link {
          display: block; padding: 13px 0;
          border-bottom: 1px solid var(--border);
          font-family: var(--font-mono); font-size: 14px; color: var(--muted);
          transition: color 0.2s;
        }
        .mobile-link:hover { color: var(--white); }

        @media (max-width: 860px) {
          .nav-links, .nav-email { display: none !important; }
          .menu-btn { display: flex !important; }
          .nav-cta { display: none !important; }
        }
        @media (max-width: 480px) {
          .nav-inner { padding: 16px 20px !important; }
          .site-nav.scrolled .nav-inner { padding: 12px 20px !important; }
          .mobile-menu { padding: 8px 20px 18px; }
        }
      `}</style>
    </nav>
  );
}
