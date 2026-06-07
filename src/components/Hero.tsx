"use client";

import { useEffect, useRef, useState } from "react";

const WORDS = [
  "AI Systems.",
  "Agent Workflows.",
  "SaaS Platforms.",
  "Elite Software.",
];


export default function Hero() {
  const [typeText, setTypeText] = useState("");
  const [cursorBlink, setCursorBlink] = useState(false);
  const typeRef = useRef({ w: 0, c: 0, deleting: false });

  const [progress, setProgress] = useState(0);

  // Typewriter
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    function tick() {
      const s = typeRef.current;
      const word = WORDS[s.w];
      s.c += s.deleting ? -1 : 1;
      setTypeText(word.slice(0, s.c));
      let delay = s.deleting ? 45 : 95;
      let blink = false;
      if (!s.deleting && s.c === word.length) {
        delay = 2000;
        s.deleting = true;
        blink = true;
      } else if (s.deleting && s.c === 0) {
        s.deleting = false;
        s.w = (s.w + 1) % WORDS.length;
        delay = 350;
      }
      setCursorBlink(blink);
      timer = setTimeout(tick, delay);
    }
    tick();
    return () => clearTimeout(timer);
  }, []);

  // Progress bar animation for connector dots
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 80);
    return () => clearInterval(progressInterval);
  }, []);

  // Reveal hero elements
  useEffect(() => {
    const els = document.querySelectorAll(".hero .reveal");
    els.forEach((el, i) => {
      setTimeout(() => el.classList.add("in"), 100 + i * 100);
    });
  }, []);

  return (
    <header className="hero">
      <div className="hero-noise" />
      <div className="hero-glow" />
      <div className="hero-dotgrid" />
      <div className="wrap">
        <div className="hero-grid">
          {/* Left Panel */}
          <div className="hero-left">
            <span className="label reveal mb-4">
              <span className="n">★</span> AETHER ORCHESTRATION STUDIO
            </span>
            <h1 className="reveal hero-h1">
              We build
              <br />
              what&rsquo;s <span className="hero-accent">next.</span>
            </h1>
            <p className="hero-sub reveal">
              We build web apps, mobile apps, AI agents &amp; SaaS platforms
              &mdash; end-to-end, from architecture to launch.
            </p>
            <div className="typewriter-container reveal">
              <span className="terminal-prompt">&gt;</span> engineering_status:{" "}
              <span className="type-text" id="typeText">
                {typeText}
              </span>
              <span
                className={`type-caret${cursorBlink ? " type-caret-blink" : ""}`}
              />
            </div>
            <div className="hero-ctas reveal desktop-ctas">
              <a href="#contact" className="btn btn-primary">
                Partner With Us
              </a>
              <a href="#work" className="btn btn-ghost">
                Explore Work
              </a>
            </div>
          </div>

          {/* Right Panel — Sleek Minimalist Orchestrator Diagram */}
          <div className="hero-right reveal">
            <div className="orchestrator-flow">
              {/* Trigger Card */}
              <div className="flow-card">
                <span className="card-badge">01 / Prompt</span>
                <h4>User Intent</h4>
                <p>Deploy SaaS pipeline on AWS</p>
                <div className="flow-indicator success" />
              </div>

              {/* Connector line 1 */}
              <div className="flow-connector">
                <svg viewBox="0 0 40 80" className="connector-svg">
                  <path
                    d="M20,0 L20,80"
                    stroke="var(--border-2)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <circle
                    cx="20"
                    cy={progress * 0.8}
                    r="3"
                    fill="var(--accent)"
                  />
                </svg>
              </div>

              {/* Orchestrator Center Card */}
              <div className="flow-card active">
                <span className="card-badge highlight">02 / Engine</span>
                <h4>Aether Core</h4>
                <p>Multi-agent plan & verify</p>
                <div className="flow-indicator warning animate-pulse" />
              </div>

              {/* Connector line 2 */}
              <div className="flow-connector">
                <svg viewBox="0 0 40 80" className="connector-svg">
                  <path
                    d="M20,0 L20,80"
                    stroke="var(--border-2)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />
                  <circle
                    cx="20"
                    cy={progress * 0.8}
                    r="3"
                    fill="var(--accent)"
                  />
                </svg>
              </div>

              {/* Target Card */}
              <div className="flow-card">
                <span className="card-badge">03 / Target</span>
                <h4>Production</h4>
                <p>Compiled edge serverless</p>
                <div className="flow-indicator active-node" />
              </div>
            </div>
          </div>
        </div>

        {/* Trust metrics */}
        <div className="hero-trust reveal">
          {[
            { bold: "MERN Stack", rest: " Specialists" },
            { bold: "Autonomous", rest: " AI Agents" },
            { bold: "SaaS Product", rest: " Architecture" },
            { bold: "React Native", rest: " Mobile" },
            { bold: "End-to-End", rest: " Delivery" },
          ].map((t, i) => (
            <div key={i} className={`trust-badge${i === 0 ? " first" : ""}`}>
              <b>{t.bold}</b>
              {t.rest}
            </div>
          ))}
        </div>

        {/* Mobile CTAs (visible only on mobile) */}
        <div className="hero-ctas reveal mobile-ctas">
          <a href="#contact" className="btn btn-primary">
            Partner With Us
          </a>
          <a href="#work" className="btn btn-ghost">
            Explore Work
          </a>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          overflow: hidden;
          background: linear-gradient(176deg, #1a0d05 0%, #6b2909 45%, #b8430a 85%, #e6590f 100%);
          padding: 160px 0 100px;
          margin: 0 12px;
          border-radius: 0 0 16px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }
        .hero-noise {
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0.04;
          mix-blend-mode: overlay;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        }
        .hero-glow {
          position: absolute;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
          top: 15%;
          right: 5%;
          pointer-events: none;
          z-index: 1;
          filter: blur(60px);
          animation: floatGlow 12s ease-in-out infinite;
        }
        @keyframes floatGlow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 20px) scale(1.1); }
        }
        .hero-dotgrid {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image: radial-gradient(circle, rgba(0, 0, 0, 0.22) 1px, transparent 1px);
          background-size: 32px 32px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, #000 30%, transparent 90%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, #000 30%, transparent 90%);
        }
        .hero-grid {
          position: relative; z-index: 2;
          display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 64px; align-items: center;
        }
        .hero-h1 {
          font-size: clamp(44px, 6vw, 88px);
          font-weight: 800; text-transform: uppercase; color: var(--white);
          letter-spacing: -0.03em; line-height: 0.94; margin-bottom: 24px;
        }
        .hero-accent {
          color: transparent;
          background: linear-gradient(135deg, #FF5C1A 0%, #ff8a58 100%);
          -webkit-background-clip: text;
          background-clip: text;
        }
        .hero-sub {
          font-family: var(--font-body);
          font-size: 17px;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.78);
          max-width: 520px;
          margin-bottom: 24px;
          line-height: 1.62;
        }
        .typewriter-container {
          font-family: var(--font-mono);
          font-size: 13.5px;
          background: rgba(5, 5, 5, 0.92);
          border: 1px solid rgba(255, 92, 26, 0.22);
          padding: 11px 20px;
          border-radius: 100px;
          width: fit-content;
          max-width: 100%;
          margin-bottom: 36px;
          color: var(--white);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 24px -4px rgba(0, 0, 0, 0.6),
                      0 0 0 1px rgba(255, 92, 26, 0.08) inset,
                      0 0 18px -6px rgba(255, 92, 26, 0.18);
          white-space: nowrap;
          overflow: hidden;
        }
        .terminal-prompt {
          color: var(--accent);
          font-weight: bold;
          flex-shrink: 0;
        }
        .type-caret {
          display: inline-block; width: 7px; height: 15px;
          background: var(--accent); margin-left: 2px; vertical-align: middle;
          flex-shrink: 0;
          border-radius: 1px;
        }
        .type-caret-blink { animation: tblink 1s step-end infinite; }
        @keyframes tblink { 0%,100% { opacity:1; } 50% { opacity:0; } }
        .type-text {
          color: var(--white); font-weight: 600;
          display: inline-block;
          flex: 1;
          min-width: 0;
          overflow: hidden;
          text-overflow: clip;
          white-space: nowrap;
        }
        .hero-ctas { display: flex; gap: 18px; align-items: center; flex-wrap: wrap; }
        .hero-ctas .btn-ghost {
          background: transparent;
          border-color: transparent;
          color: var(--muted);
          font-weight: 500;
          padding: 10px 16px;
        }
        .hero-ctas .btn-ghost:hover {
          background: transparent;
          color: var(--white);
          transform: translateX(3px);
        }
        .mobile-ctas { display: none; }

        /* === INTERACTIVE DASHBOARD ===        /* === MINIMALIST ORCHESTRATOR FLOW === */
        .orchestrator-flow {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          max-width: 380px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }
        .flow-card {
          width: 100%;
          background: rgba(11, 11, 10, 0.65);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 20px 24px;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          backdrop-filter: blur(8px);
        }
        .flow-card:hover {
          border-color: var(--border-2);
          transform: translateY(-2px);
          box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.5), 
                      0 0 24px -10px var(--accent-glow);
        }
        .flow-card.active {
          border-color: var(--accent);
          background: rgba(15, 12, 10, 0.75);
          box-shadow: 0 0 35px -10px var(--accent-glow);
        }
        .card-badge {
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: rgba(255, 255, 255, 0.55);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 6px;
        }
        .card-badge.highlight {
          color: var(--accent);
        }
        .flow-card h4 {
          font-family: var(--font-head);
          font-size: 18px;
          font-weight: 700;
          color: var(--white);
          margin-bottom: 4px;
        }
        .flow-card p {
          font-family: var(--font-mono);
          font-size: 12.5px;
          color: rgba(255, 255, 255, 0.72);
        }
        .flow-indicator {
          position: absolute;
          top: 22px;
          right: 24px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .flow-indicator.success { background: var(--accent); }
        .flow-indicator.warning { background: var(--accent); }
        .flow-indicator.active-node { background: var(--dim); }
        .flow-connector {
          height: 48px;
          width: 40px;
          display: flex;
          justify-content: center;
        }
        .connector-svg {
          height: 100%;
          width: 100%;
        }

        .panel-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 10px;
          color: var(--dim);
          border-top: 1px solid var(--border);
          padding-top: 14px;
        }   }
        .status-progress-container { display: flex; align-items: center; gap: 8px; flex: 1; }
        .progress-bg { height: 4px; background: var(--border); border-radius: 2px; flex: 0.8; overflow: hidden; }
        .progress-fill { height: 100%; background: var(--accent); transition: width 0.1s linear; }

        /* === TRUST BADGES === */
        .hero-trust {
          display: flex; flex-wrap: wrap; gap: 24px; align-items: center;
          margin-top: 64px; position: relative; z-index: 2;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          padding-top: 32px;
        }
        .trust-badge {
          font-family: var(--font-body); font-size: 13px;
          color: rgba(255,255,255,0.74); padding-left: 24px;
          border-left: 1px solid rgba(255, 255, 255, 0.15);
        }
        .trust-badge b { color: var(--white); font-weight: 700; }
        .trust-badge.first { padding-left: 0; border-left: 0; }

        /* === RESPONSIVE === */
        @media (max-width: 900px) {
          .desktop-ctas { display: none !important; }
          .mobile-ctas { display: flex; margin-top: 36px; margin-bottom: 8px; justify-content: flex-start; gap: 16px; }
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .hero-trust {
            margin-top: 40px;
            padding-top: 24px;
            gap: 16px;
          }
          .orchestrator-flow {
            max-width: 100%;
            flex-direction: row;
            align-items: stretch;
            gap: 0;
            justify-content: center;
          }
          .flow-card {
            flex: 1;
            padding: 16px 14px;
            border-radius: 12px;
            min-width: 0;
          }
          .flow-card h4 { font-size: 15px; margin-bottom: 2px; line-height: 1.2; }
          .flow-card p { font-size: 11px; line-height: 1.3; }
          .card-badge { font-size: 9px; margin-bottom: 4px; letter-spacing: 0.03em; }
          .flow-indicator { top: 12px; right: 12px; width: 6px; height: 6px; }
          .flow-connector {
            height: auto;
            width: 24px;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            align-self: center;
          }
          .connector-svg {
            width: 24px;
            height: 40px;
            transform: rotate(90deg);
          }
        }
        @media (max-width: 760px) {
          .hero { padding: 90px 0 40px; margin: 0; border-radius: 0; }
          .hero-trust { margin-top: 30px; padding-top: 16px; }
          .trust-badge { padding-left: 14px; }
          .typewriter-container {
            width: 100%;
            font-size: 12px;
            padding: 9px 16px;
          }
        }
        @media (max-width: 600px) {
          .mobile-ctas { flex-direction: column; align-items: stretch; gap: 12px; margin-top: 24px; }
          .mobile-ctas .btn { justify-content: center; }
          .hero-h1 { font-size: clamp(38px, 10vw, 56px); }

          /* --- Extra compact horizontal orchestrator flow on mobile --- */
          .flow-card {
            padding: 10px 8px;
            border-radius: 8px;
          }
          .flow-card h4 { font-size: 12px; }
          .flow-card p { font-size: 9.5px; }
          .card-badge { font-size: 8px; }
          .flow-indicator { top: 8px; right: 8px; width: 5px; height: 5px; }
          .flow-connector { width: 16px; }
          .connector-svg { width: 16px; height: 30px; }

          /* --- Compact trust badges: 2-col pill grid --- */
          .hero-trust {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6px;
            margin-top: 20px;
            padding-top: 14px;
            border-top: 1px solid rgba(255,255,255,0.12);
          }
          .trust-badge {
            font-size: 10.5px;
            border-left: none;
            padding: 6px 10px;
            background: rgba(255,255,255,0.04);
            border: 1px solid rgba(255,255,255,0.08);
            border-radius: 6px;
            width: 100%;
            text-align: left;
          }
          .trust-badge.first { padding: 6px 10px; border-left: none; padding-left: 10px; }
          .typewriter-container {
            width: 100%;
            font-size: 11px;
            padding: 8px 14px;
            gap: 4px;
            margin-bottom: 24px;
          }
        }
      `}</style>
    </header>
  );
}
