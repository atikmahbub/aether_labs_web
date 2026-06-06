"use client";

import { useEffect, useRef, useState } from "react";

const WORDS = ["Web Apps.", "Mobile Apps.", "AI Agents.", "SaaS Products."];

const K = "kw", T = "ty", F = "fn", S = "str", C = "cm", V = "va", P = "pr", X = "p";
const CODE = [
  [[K, "import"], [X, " { "], [T, "Agent"], [X, " } "], [K, "from"], [X, " "], [S, '"@aether/core"'], [X, ";"]],
  [[K, "import"], [X, " { "], [F, "anthropic"], [X, " } "], [K, "from"], [X, " "], [S, '"@aether/llm"'], [X, ";"]],
  [],
  [[C, "// Spin up an autonomous research agent"]],
  [[K, "export"], [X, " "], [K, "const"], [X, " "], [V, "agent"], [X, " = "], [K, "new"], [X, " "], [T, "Agent"], [X, "({"]],
  [[X, "  "], [P, "model"], [X, ": "], [F, "anthropic"], [X, "("], [S, '"claude-sonnet-4-6"'], [X, "),"]],
  [[X, "  "], [P, "tools"], [X, ": ["], [V, "search"], [X, ", "], [V, "summarize"], [X, ", "], [V, "ship"], [X, "],"]],
  [[X, "  "], [P, "memory"], [X, ": "], [K, "true"], [X, ","]],
  [[X, "});"]],
  [],
  [[K, "const"], [X, " "], [V, "result"], [X, " = "], [K, "await"], [X, " "], [V, "agent"], [X, "."], [F, "run"], [X, "("]],
  [[X, "  "], [S, '"Design the next big thing."'], [X, ")"]],
] as [string, string][][];

function esc(s: string) { return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function lineLen(toks: [string, string][]) { return toks.reduce((n, t) => n + t[1].length, 0); }
function lineHTML(toks: [string, string][], limit?: number) {
  let out = "", used = 0;
  for (const [cls, text] of toks) {
    let t = text;
    if (limit != null) {
      if (used >= limit) break;
      const remain = limit - used;
      if (remain < text.length) t = text.slice(0, remain);
    }
    out += `<span class="tk-${cls}">${esc(t)}</span>`;
    used += t.length;
    if (limit != null && used >= limit) break;
  }
  return out;
}
function rowHTML(i: number, codeHTML: string) {
  return `<div class="ln"><span class="g">${i + 1}</span><span class="c">${codeHTML}</span></div>`;
}

export default function Hero() {
  const [typeText, setTypeText] = useState("");
  const [cursorBlink, setCursorBlink] = useState(false);
  const typeRef = useRef({ w: 0, c: 0, deleting: false });
  const editorBlinkRef = useRef(false);

  const preRef = useRef<HTMLPreElement>(null);
  const statRef = useRef<HTMLSpanElement>(null);
  const posRef = useRef<HTMLSpanElement>(null);

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
      if (!s.deleting && s.c === word.length) { delay = 1500; s.deleting = true; blink = true; }
      else if (s.deleting && s.c === 0) { s.deleting = false; s.w = (s.w + 1) % WORDS.length; delay = 350; }
      setCursorBlink(blink);
      timer = setTimeout(tick, delay);
    }
    tick();
    return () => clearTimeout(timer);
  }, []);

  // Code editor animation
  useEffect(() => {
    const pre = preRef.current!;
    if (!pre) return;
    const statEl = statRef.current;
    const posEl = posRef.current;

    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      let html = "";
      for (let i = 0; i < CODE.length; i++) html += rowHTML(i, lineHTML(CODE[i]));
      pre.innerHTML = html;
      if (statEl) { statEl.textContent = "✓ saved"; statEl.className = "ok"; }
      if (posEl) posEl.textContent = `Ln ${CODE.length}, Col 1`;
      return;
    }

    let li = 0, ci = 0;
    let timer: ReturnType<typeof setTimeout>;

    function render() {
      let html = "";
      for (let i = 0; i <= li && i < CODE.length; i++) {
        if (i < li) { html += rowHTML(i, lineHTML(CODE[i])); }
        else { html += rowHTML(i, lineHTML(CODE[i], ci) + `<span class="editor-caret${editorBlinkRef.current ? " blinking" : ""}"></span>`); }
      }
      pre.innerHTML = html;
      if (posEl) posEl.textContent = `Ln ${li + 1}, Col ${ci + 1}`;
    }

    function finish() {
      editorBlinkRef.current = true;
      render();
      if (statEl) { statEl.textContent = "✓ saved"; statEl.className = "ok"; }
      timer = setTimeout(() => {
        li = 0; ci = 0;
        editorBlinkRef.current = false;
        if (statEl) { statEl.textContent = "● typing…"; statEl.className = "dot"; }
        render();
        schedule(500);
      }, 3400);
    }

    function tick() {
      const len = lineLen(CODE[li]);
      if (ci < len) { ci++; render(); schedule(20 + Math.random() * 45); }
      else if (li < CODE.length - 1) { li++; ci = 0; render(); schedule(CODE[li - 1].length === 0 ? 90 : 150); }
      else { finish(); }
    }

    function schedule(ms: number) { timer = setTimeout(tick, ms); }
    render();
    schedule(900);
    return () => clearTimeout(timer);
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
      <div className="hero-dotgrid" />
      <div className="wrap">
        <div className="hero-grid">
          {/* Left */}
          <div className="hero-left">
            <h1 className="reveal hero-h1">
              We build<br />what&rsquo;s <span className="hero-accent">next.</span>
            </h1>
            <p className="hero-sub reveal">
              We design, build, and scale digital products that define the future.
              Full-stack web, mobile &amp; AI — from idea to launch.<br />
              We engineer{" "}
              <span className="type-text" id="typeText">{typeText}</span>
              <span className={`type-caret${cursorBlink ? " type-caret-blink" : ""}`} />
            </p>
            <div className="hero-ctas reveal">
              <a href="#contact" className="btn btn-primary">Start a project →</a>
              <a href="#services" className="hero-link-u on-orange">See our services</a>
            </div>
          </div>

          {/* Right — Code Editor */}
          <div className="hero-right reveal">
            <div className="shot">
              <div className="shot-bar">
                <div className="shot-lights">
                  <i /><i /><i />
                </div>
                <div className="shot-tabs">
                  <div className="shot-tab active"><span className="badge ts">TS</span>agent.ts</div>
                  <div className="shot-tab"><span className="badge js">JS</span>server.js</div>
                </div>
              </div>
              <div className="shot-body">
                <pre ref={preRef} id="editorCode" aria-hidden="true" />
              </div>
              <div className="shot-status">
                <div className="sl"><span className="ok">✓ 0 errors</span><span>⎇ main</span></div>
                <div className="sr">
                  <span ref={statRef} id="editorStat" className="dot">● typing…</span>
                  <span ref={posRef} id="editorPos">Ln 1, Col 1</span>
                  <span>UTF-8</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust badges */}
        <div className="hero-trust reveal">
          {[
            { bold: "6+ Years", rest: " Experience" },
            { bold: "MERN", rest: " Specialists" },
            { bold: "React Native", rest: "" },
            { bold: "AI Systems", rest: "" },
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
          position: relative; overflow: hidden;
          background: linear-gradient(176deg, #180d06 0%, #7d300d 36%, #d8500f 72%, #ff7a26 100%);
          padding: 150px 0 86px;
          margin: 0 12px;
          border-radius: 0 0 4px 4px;
        }
        .hero-dotgrid {
          position: absolute; inset: 0; z-index: 0; pointer-events: none;
          background-image: radial-gradient(circle, rgba(0,0,0,0.18) 1px, transparent 1px);
          background-size: 26px 26px;
          mask-image: radial-gradient(ellipse 90% 80% at 30% 30%, #000 20%, transparent 80%);
          -webkit-mask-image: radial-gradient(ellipse 90% 80% at 30% 30%, #000 20%, transparent 80%);
          opacity: 0.5;
        }
        .hero-grid {
          position: relative; z-index: 2;
          display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: center;
        }
        .hero-h1 {
          font-size: clamp(48px, 7.4vw, 104px);
          font-weight: 900; text-transform: uppercase; color: #fff;
          letter-spacing: -0.03em; line-height: 0.92; margin-bottom: 26px;
          text-shadow: 0 2px 30px rgba(0,0,0,0.22);
        }
        .hero-accent { color: #160a03; }
        .hero-sub {
          font-family: var(--font-mono); font-size: 15.5px;
          color: #160a03; max-width: 460px; margin-bottom: 30px; line-height: 1.75;
        }
        .type-caret {
          display: inline-block; width: 2px; height: 0.92em;
          background: #160a03; margin-left: 3px; vertical-align: -2px;
        }
        .type-caret-blink { animation: tblink 1s step-end infinite; }
        @keyframes tblink { 0%,100% { opacity:1; } 50% { opacity:0; } }
        .type-text {
          color: #160a03; font-weight: 700; display: inline-block; min-width: 140px; text-align: left;
        }
        .hero-ctas { display: flex; gap: 24px; align-items: center; flex-wrap: wrap; }
        .hero-link-u {
          font-family: var(--font-mono); font-size: 14px; color: var(--white);
          display: inline-flex; align-items: center; gap: 8px;
          position: relative; padding-bottom: 3px;
        }
        .hero-link-u::after {
          content: ""; position: absolute; left: 0; bottom: 0;
          width: 100%; height: 1px; background: currentColor;
          transform-origin: left; transition: transform 0.3s;
        }
        .hero-link-u:hover::after { transform: scaleX(0.4); }
        .hero-link-u.on-orange { color: #160a03; }

        /* === CODE EDITOR === */
        .shot {
          position: relative; border-radius: 12px; overflow: hidden;
          background: #0d0c0a; border: 1px solid rgba(0,0,0,0.4);
          box-shadow: 0 40px 90px -34px rgba(0,0,0,0.72);
          font-family: var(--font-mono);
        }
        .shot-bar {
          height: 40px; background: #15130f; border-bottom: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: stretch; gap: 16px; padding-left: 14px;
        }
        .shot-lights { display: flex; gap: 7px; align-items: center; }
        .shot-lights i { width: 11px; height: 11px; border-radius: 50%; }
        .shot-lights i:nth-child(1) { background: #ff5f57; }
        .shot-lights i:nth-child(2) { background: #febc2e; }
        .shot-lights i:nth-child(3) { background: #28c840; }
        .shot-tabs { display: flex; align-items: stretch; }
        .shot-tab {
          display: flex; align-items: center; gap: 8px; padding: 0 16px;
          font-size: 12px; color: var(--dim);
          border-bottom: 2px solid transparent; border-right: 1px solid rgba(255,255,255,0.04);
        }
        .shot-tab.active { color: var(--white); background: #0d0c0a; border-bottom-color: var(--accent); }
        .badge {
          width: 15px; height: 15px; border-radius: 3px; font-size: 8px; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-head); color: #fff;
        }
        .badge.ts { background: #3178c6; }
        .badge.js { background: #e8b339; color: #160a03; }
        .shot-body { min-height: 300px; padding: 14px 0; overflow: hidden; }
        .shot-body pre { margin: 0; font-family: var(--font-mono); font-size: 13px; line-height: 1.72; }
        .ln { display: flex; }
        .ln .g { width: 46px; flex-shrink: 0; text-align: right; padding-right: 18px; color: #4a443c; user-select: none; }
        .ln .c { white-space: pre; color: #cfc8bd; }
        .editor-caret {
          display: inline-block; width: 7px; height: 14px; background: var(--accent);
          vertical-align: -2px; margin-left: 1px;
        }
        .editor-caret.blinking { animation: eblink 1.05s step-end infinite; }
        @keyframes eblink { 0%,100% { opacity:1; } 50% { opacity:0; } }
        .shot-status {
          height: 30px; background: #15130f; border-top: 1px solid rgba(255,255,255,0.06);
          display: flex; align-items: center; justify-content: space-between;
          padding: 0 14px; font-size: 11px; color: var(--muted);
        }
        .sl, .sr { display: flex; align-items: center; gap: 16px; }
        .dot { color: var(--accent); }
        .ok { color: #28c840; }
        /* syntax tokens */
        .tk-kw  { color: #ff8a4d; }
        .tk-ty  { color: #5fc9b8; }
        .tk-fn  { color: #e6c07b; }
        .tk-str { color: #9fd88f; }
        .tk-cm  { color: #6f675c; font-style: italic; }
        .tk-va  { color: #f0ece4; }
        .tk-pr  { color: #d98f6a; }
        .tk-num { color: #c79bf0; }
        .tk-p   { color: #8c857a; }

        /* === TRUST === */
        .hero-trust {
          display: flex; flex-wrap: wrap; gap: 0; align-items: center;
          margin-top: 46px; position: relative; z-index: 2;
        }
        .trust-badge {
          font-family: var(--font-mono); font-size: 12.5px;
          color: rgba(22,10,3,0.62); padding: 0 18px;
          border-left: 1px solid rgba(22,10,3,0.22);
        }
        .trust-badge b { color: #160a03; font-weight: 700; }
        .trust-badge.first { padding-left: 0; border-left: 0; }

        /* === RESPONSIVE === */
        @media (max-width: 1040px) {
          .hero-grid { grid-template-columns: 1fr; gap: 40px; }
          .shot { max-width: 560px; }
        }
        @media (max-width: 760px) {
          .hero { padding: 128px 0 70px; margin: 0 6px; }
          .trust-badge { padding: 0 14px; }
        }
        @media (max-width: 600px) {
          .hero-h1 { font-size: clamp(38px, 11vw, 64px); }
          .hero-sub { font-size: 15px; }
          .hero-ctas { flex-direction: column; align-items: flex-start; gap: 14px; }
          .shot { max-width: 100%; }
          .shot-body { min-height: 240px; }
          .shot-body pre { font-size: 11px; }
          .trust-badge { font-size: 11.5px; padding: 0 10px; }
        }
        @media (max-width: 400px) {
          .hero { margin: 0 4px; }
          .hero-h1 { font-size: 36px; }
        }
      `}</style>
    </header>
  );
}
