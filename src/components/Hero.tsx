"use client";

import { useEffect, useRef, useState } from "react";

const WORDS = ["AI Systems.", "Agent Workflows.", "SaaS Platforms.", "Elite Software."];

const LOG_STEPS = [
  { level: "sys", text: "Initializing Aether Orchestrator v4.2.0..." },
  { level: "agent", text: "Planner Agent: Formulating execution trajectory." },
  { level: "tool", text: "Web Search: Scraping documentation for API schema." },
  { level: "agent", text: "Executor Agent: Synthesizing clean TypeScript components." },
  { level: "sys", text: "Running verification suite: 12 tests passed." },
  { level: "success", text: "Deployment finalized. Live at aether-app-92.prod" },
];

export default function Hero() {
  const [typeText, setTypeText] = useState("");
  const [cursorBlink, setCursorBlink] = useState(false);
  const typeRef = useRef({ w: 0, c: 0, deleting: false });
  
  // Dashboard states
  const [activeNode, setActiveNode] = useState(0);
  const [logs, setLogs] = useState<typeof LOG_STEPS>([]);
  const [progress, setProgress] = useState(0);
  const [metrics, setMetrics] = useState({ tokens: 385, latency: 120, total: 12840 });

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
      if (!s.deleting && s.c === word.length) { delay = 2000; s.deleting = true; blink = true; }
      else if (s.deleting && s.c === 0) { s.deleting = false; s.w = (s.w + 1) % WORDS.length; delay = 350; }
      setCursorBlink(blink);
      timer = setTimeout(tick, delay);
    }
    tick();
    return () => clearTimeout(timer);
  }, []);

  // Dashboard animation loop
  useEffect(() => {
    let logIdx = 0;
    const logInterval = setInterval(() => {
      setLogs(prev => {
        const nextLogs = [...prev, LOG_STEPS[logIdx]];
        if (nextLogs.length > 4) nextLogs.shift();
        return nextLogs;
      });
      
      // Rotate active node
      setActiveNode(logIdx % 4);
      
      // Update metrics slightly for dynamism
      setMetrics(prev => ({
        tokens: Math.floor(350 + Math.random() * 80),
        latency: Math.floor(100 + Math.random() * 40),
        total: prev.total + 1
      }));

      logIdx = (logIdx + 1) % LOG_STEPS.length;
    }, 2800);

    // Progress bar loop
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 1;
      });
    }, 80);

    // Initial logs load
    setLogs([LOG_STEPS[0], LOG_STEPS[1]]);

    return () => {
      clearInterval(logInterval);
      clearInterval(progressInterval);
    };
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
            <span className="label reveal mb-4"><span className="n">★</span> AETHER ORCHESTRATION STUDIO</span>
            <h1 className="reveal hero-h1">
              We build<br />what&rsquo;s <span className="hero-accent">next.</span>
            </h1>
            <p className="hero-sub reveal">
              We build web apps, mobile apps, AI agents &amp; SaaS platforms &mdash; end-to-end, from architecture to launch.
            </p>
            <div className="typewriter-container reveal">
              <span className="terminal-prompt">&gt;</span> engineering_status:{" "}
              <span className="type-text" id="typeText">{typeText}</span>
              <span className={`type-caret${cursorBlink ? " type-caret-blink" : ""}`} />
            </div>
            <div className="hero-ctas reveal">
              <a href="#contact" className="btn btn-primary">Partner With Us</a>
              <a href="#work" className="btn btn-ghost">Explore Work</a>
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
                  <path d="M20,0 L20,80" stroke="var(--border-2)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle cx="20" cy={progress * 0.8} r="3" fill="var(--accent)" />
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
                  <path d="M20,0 L20,80" stroke="var(--border-2)" strokeWidth="1.5" strokeDasharray="4 4" />
                  <circle cx="20" cy={progress * 0.8} r="3" fill="var(--accent)" />
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
              <b>{t.bold}</b>{t.rest}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          overflow: hidden;
          background: linear-gradient(176deg, #0f0703 0%, #4a1904 45%, #8c2f06 85%, #b53d07 100%);
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
          background: linear-gradient(135deg, #e05a1f 0%, #ff8a58 100%);
          -webkit-background-clip: text;
          background-clip: text;
        }
        .hero-sub {
          font-family: var(--font-head);
          font-size: clamp(16px, 1.8vw, 20px);
          font-weight: 500;
          color: var(--muted);
          max-width: 520px;
          margin-bottom: 24px;
          line-height: 1.5;
        }
        .typewriter-container {
          font-family: var(--font-mono);
          font-size: 13px;
          background: rgba(5, 5, 5, 0.92);
          border: 1px solid rgba(224, 90, 31, 0.22);
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
                      0 0 0 1px rgba(224, 90, 31, 0.08) inset,
                      0 0 18px -6px rgba(224, 90, 31, 0.18);
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
          font-size: 10px;
          color: var(--dim);
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
          font-size: 12px;
          color: var(--muted);
        }
        .flow-indicator {
          position: absolute;
          top: 22px;
          right: 24px;
          width: 8px;
          height: 8px;
          border-radius: 50%;
        }
        .flow-indicator.success { background: #10b981; }
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
          font-family: var(--font-mono); font-size: 13px;
          color: var(--muted); padding-left: 24px;
          border-left: 1px solid rgba(255, 255, 255, 0.15);
        }
        .trust-badge b { color: var(--white); font-weight: 700; }
        .trust-badge.first { padding-left: 0; border-left: 0; }

        /* === RESPONSIVE === */
        @media (max-width: 1040px) {
          .hero-grid { grid-template-columns: 1fr; gap: 50px; }
          .orchestrator-flow { max-width: 560px; margin: 0 auto; }
        }
        @media (max-width: 760px) {
          .hero { padding: 120px 0 70px; }
          .hero-trust { gap: 16px; }
          .trust-badge { padding-left: 16px; }
          .typewriter-container {
            width: 100%;
            font-size: 12px;
            padding: 9px 16px;
          }
        }
        @media (max-width: 600px) {
          .hero-h1 { font-size: clamp(38px, 10vw, 56px); }
          .hero-ctas { flex-direction: column; align-items: stretch; gap: 12px; }
          .hero-ctas .btn { justify-content: center; }
          .orchestrator-flow { max-width: 100%; }
          .trust-badge { font-size: 12px; border-left: none; padding-left: 0; width: 100%; }
          .typewriter-container {
            width: 100%;
            font-size: 11.5px;
            padding: 9px 16px;
            gap: 6px;
          }
        }
      `}</style>
    </header>
  );
}
