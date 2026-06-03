"use client";

import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

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
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "background 0.35s, border-color 0.35s",
        background: scrolled ? "rgba(5,8,16,0.72)" : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : undefined,
        WebkitBackdropFilter: scrolled ? "blur(18px)" : undefined,
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: scrolled ? "14px 28px" : "20px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "padding 0.35s",
        }}
      >
        {/* Brand */}
        <a href="#top" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <svg width="34" height="34" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="navlg" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0" stopColor="#00e5cc" />
                <stop offset="1" stopColor="#7b5eff" />
              </linearGradient>
            </defs>
            <path d="M20 2 36 11 36 29 20 38 4 29 4 11Z" stroke="url(#navlg)" strokeWidth="1.6" fill="rgba(0,229,204,0.05)" />
            <path d="M20 11 28 27 12 27Z" stroke="url(#navlg)" strokeWidth="1.6" fill="none" />
            <circle cx="20" cy="22" r="2.4" fill="#00e5cc" />
          </svg>
          <span style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 20, color: "var(--heading)", letterSpacing: "-0.02em" }}>
            Aether Labs
          </span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: "flex", alignItems: "center", gap: 34 }} className="hidden-mobile">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="nav-link"
              style={{ fontSize: 15, color: "var(--body)", transition: "color 0.2s" }}
              onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--heading)")}
              onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--body)")}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Right */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <a
            href="#contact"
            className="btn-desktop"
            style={{
              fontFamily: "var(--font-body)",
              fontWeight: 600,
              fontSize: 15.5,
              borderRadius: 100,
              padding: "14px 26px",
              background: "linear-gradient(180deg,#00f5da,#00c4af)",
              color: "#021712",
              boxShadow: "0 6px 30px -8px rgba(0,229,204,0.55)",
              transition: "transform 0.25s, box-shadow 0.25s",
              whiteSpace: "nowrap",
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px -8px rgba(0,229,204,0.7)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 30px -8px rgba(0,229,204,0.55)";
            }}
          >
            Get a Quote
          </a>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="menu-btn-visible"
            style={{
              background: "none",
              border: 0,
              cursor: "pointer",
              flexDirection: "column",
              gap: 5,
              padding: 6,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  width: 24,
                  height: 2,
                  background: "var(--heading)",
                  borderRadius: 2,
                  display: "block",
                  transition: "0.3s",
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(5,8,16,0.96)",
            backdropFilter: "blur(18px)",
            borderBottom: "1px solid var(--border)",
            padding: "8px 28px 22px",
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "13px 0",
                borderBottom: "1px solid var(--border)",
                fontSize: 15,
                color: "var(--body)",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        .hidden-mobile { display: flex; }
        .btn-desktop { display: inline-flex; }
        .menu-btn-visible { display: none; }
        @media (max-width: 860px) {
          .hidden-mobile { display: none !important; }
          .btn-desktop { display: none !important; }
          .menu-btn-visible { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
