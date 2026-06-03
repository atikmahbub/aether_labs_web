"use client";

import { useEffect, useRef, useState } from "react";

const WORDS = ["Web Apps.", "Mobile Apps.", "AI Agents.", "SaaS Products."];

export default function Hero() {
  const [typeText, setTypeText] = useState("");
  const stateRef = useRef({ w: 0, c: 0, deleting: false });

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    function tick() {
      const s = stateRef.current;
      const word = WORDS[s.w];
      s.c += s.deleting ? -1 : 1;
      setTypeText(word.slice(0, s.c));
      let delay = s.deleting ? 45 : 95;
      if (!s.deleting && s.c === word.length) { delay = 1500; s.deleting = true; }
      else if (s.deleting && s.c === 0) { s.deleting = false; s.w = (s.w + 1) % WORDS.length; delay = 350; }
      timer = setTimeout(tick, delay);
    }
    tick();
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll(".hero .reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("in"), i * 70);
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    setTimeout(() => els.forEach((el) => el.classList.add("in")), 400);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="hero">
      {/* Blobs */}
      <div className="hero-mesh">
        <div className="blob-1 hero-blob" style={{ background: "radial-gradient(circle,rgba(0,229,204,0.55),transparent 65%)", top: -180, left: -120 }} />
        <div className="blob-2 hero-blob" style={{ background: "radial-gradient(circle,rgba(123,94,255,0.55),transparent 65%)", top: -60, right: -160 }} />
        <div className="blob-3 hero-blob" style={{ background: "radial-gradient(circle,rgba(0,150,255,0.35),transparent 65%)", bottom: -220, left: "40%" }} />
      </div>

      {/* Dot grid */}
      <div className="hero-dotgrid" />

      <div className="wrap-inner" style={{ position: "relative", zIndex: 2 }}>
        <div className="hero-inner">
          <span className="reveal hero-label">
            <span style={{ width: 22, height: 1, background: "linear-gradient(90deg,transparent,var(--cyan))", display: "inline-block", flexShrink: 0 }} />
            Software Development Studio
          </span>

          <h1 className="reveal hero-h1">
            We design, build, and scale{" "}
            <span className="hero-em">digital products</span>{" "}
            that define the future.
          </h1>

          <p className="reveal hero-sub">
            Full-stack web apps. Mobile experiences. AI-powered systems. From idea to launch — we engineer excellence. We build{" "}
            <span style={{ display: "inline-flex", alignItems: "baseline" }}>
              <span style={{ color: "var(--cyan)" }}>{typeText}</span>
              <span className="caret-blink" style={{ display: "inline-block", width: 3, height: "0.92em", background: "var(--cyan)", marginLeft: 4, transform: "translateY(3px)" }} />
            </span>
          </p>

          <div className="reveal hero-ctas">
            <a href="#contact" className="btn-primary-pill"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 40px -8px rgba(0,229,204,0.7)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 30px -8px rgba(0,229,204,0.55)"; }}
            >
              Start a Project <span>→</span>
            </a>
            <a href="#services" className="btn-ghost-pill"
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.06)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"; (e.currentTarget as HTMLElement).style.transform = ""; }}
            >
              See Our Services
            </a>
          </div>

          {/* Trust badges */}
          <div className="reveal trust-row">
            {[
              { bold: "6+ Years", rest: " Experience" },
              { bold: "MERN", rest: " Specialists" },
              { bold: "React Native", rest: "" },
              { bold: "AI Systems", rest: "" },
              { bold: "End-to-End", rest: " Delivery" },
            ].map((t, i) => (
              <div key={i} className={`trust-badge${i === 0 ? " trust-badge--first" : ""}`}>
                <b style={{ color: "var(--heading)", fontWeight: 400 }}>{t.bold}</b>{t.rest}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .hero {
          padding: 180px 0 120px;
          position: relative;
          overflow: hidden;
        }
        .hero-mesh {
          position: absolute; inset: 0; z-index: 0; overflow: hidden; pointer-events: none;
        }
        .hero-blob {
          position: absolute; border-radius: 50%; filter: blur(90px); opacity: 0.5; will-change: transform;
        }
        .blob-1.hero-blob { width: 620px; height: 620px; }
        .blob-2.hero-blob { width: 560px; height: 560px; }
        .blob-3.hero-blob { width: 480px; height: 480px; }
        .hero-dotgrid {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image: radial-gradient(circle, rgba(255,255,255,0.09) 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 75%);
          -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 30%, #000 30%, transparent 75%);
        }
        .hero-inner { max-width: 920px; }
        .hero-label {
          font-family: var(--font-mono); font-size: 12px; letter-spacing: 0.22em;
          text-transform: uppercase; color: var(--cyan);
          display: inline-flex; align-items: center; gap: 10px; margin-bottom: 26px;
        }
        .hero-h1 {
          font-size: clamp(36px, 6.4vw, 82px);
          font-weight: 700; letter-spacing: -0.03em; margin-bottom: 28px;
        }
        .hero-em {
          background: linear-gradient(120deg, var(--cyan), var(--violet));
          -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
        }
        .hero-sub {
          font-size: clamp(16px, 2.4vw, 20px);
          color: var(--body); max-width: 640px; margin-bottom: 40px; line-height: 1.6;
        }
        .hero-ctas {
          display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 48px; align-items: center;
        }
        .btn-primary-pill {
          font-family: var(--font-body); font-weight: 600; font-size: 15.5px;
          border-radius: 100px; padding: 13px 24px;
          background: linear-gradient(180deg, #00f5da, #00c4af); color: #021712;
          box-shadow: 0 6px 30px -8px rgba(0,229,204,0.55);
          display: inline-flex; align-items: center; gap: 9px;
          transition: transform 0.25s, box-shadow 0.25s; white-space: nowrap;
        }
        .btn-ghost-pill {
          font-family: var(--font-body); font-weight: 500; font-size: 15.5px;
          border-radius: 100px; padding: 13px 24px;
          background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.14);
          color: var(--heading); display: inline-flex; align-items: center; gap: 9px;
          transition: transform 0.25s, background 0.25s; white-space: nowrap;
        }
        .trust-row {
          display: flex; flex-wrap: wrap; align-items: center; gap: 4px 0;
        }
        .trust-badge {
          font-family: var(--font-mono); font-size: 12.5px; color: var(--body-dim);
          padding: 4px 16px; border-left: 1px solid var(--border);
        }
        .trust-badge--first { padding-left: 0; border-left: 0; }

        /* tablet */
        @media (max-width: 980px) {
          .hero { padding: 150px 0 100px; }
          .blob-1.hero-blob { width: 440px; height: 440px; }
          .blob-2.hero-blob { width: 400px; height: 400px; }
          .blob-3.hero-blob { width: 360px; height: 360px; }
        }
        /* mobile */
        @media (max-width: 760px) {
          .hero { padding: 130px 0 80px; }
          .hero-h1 { margin-bottom: 20px; }
          .hero-sub { margin-bottom: 32px; }
          .hero-ctas { margin-bottom: 36px; }
          .blob-1.hero-blob, .blob-2.hero-blob, .blob-3.hero-blob { display: none; }
          .trust-badge { padding: 4px 12px; font-size: 11.5px; }
        }
        /* small phones */
        @media (max-width: 480px) {
          .hero { padding: 110px 0 64px; }
          .btn-primary-pill, .btn-ghost-pill { font-size: 14.5px; padding: 12px 20px; width: 100%; justify-content: center; }
          .hero-ctas { flex-direction: column; gap: 10px; }
          .trust-row { gap: 6px 0; }
          .trust-badge { font-size: 11px; padding: 4px 10px; }
        }
      `}</style>
    </header>
  );
}
