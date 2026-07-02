// Doodle Dash Labs — exact design markup imported from claude.ai/design.
// Rendered via dangerouslySetInnerHTML in page.tsx; interactions live in
// SiteScripts.tsx. Includes inline <style> blocks + trailing override layers
// in their original DOM order so the CSS cascade matches the source exactly.
export const siteMarkup = String.raw`
    
    <div
      aria-hidden="true"
      style="
        position: fixed;
        inset: 0;
        z-index: -1;
        pointer-events: none;
        overflow: hidden;
      "
    >
      <div class="grain"></div>
      <div class="glow-sphere sphere-1"></div>
      <div class="glow-sphere sphere-2"></div>
    </div>
    <style>
      .grain {
        position: absolute;
        inset: -50%;
        opacity: 0.05;
        mix-blend-mode: overlay;
        background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
        background-size: 170px 170px;
        animation: grain 7s steps(6) infinite;
      }
      .glow-sphere {
        position: absolute;
        border-radius: 50%;
        background: radial-gradient(
          circle,
          rgba(29,78,216,0.05) 0%,
          transparent 70%
        );
        filter: blur(80px);
        pointer-events: none;
      }
      .sphere-1 {
        width: 700px;
        height: 700px;
        top: -200px;
        left: -200px;
        animation: float1 25s ease-in-out infinite alternate;
      }
      .sphere-2 {
        width: 600px;
        height: 600px;
        bottom: -150px;
        right: -150px;
        animation: float2 30s ease-in-out infinite alternate;
      }
      @keyframes float1 {
        0% {
          transform: translate(0, 0) scale(1);
        }
        100% {
          transform: translate(120px, 90px) scale(1.1);
        }
      }
      @keyframes float2 {
        0% {
          transform: translate(0, 0) scale(1);
        }
        100% {
          transform: translate(-100px, -60px) scale(0.9);
        }
      }
      @keyframes grain {
        0% {
          transform: translate(0, 0);
        }
        20% {
          transform: translate(-4%, 3%);
        }
        40% {
          transform: translate(3%, -4%);
        }
        60% {
          transform: translate(-3%, 2%);
        }
        80% {
          transform: translate(4%, -2%);
        }
        100% {
          transform: translate(0, 0);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .grain,
        .sphere-1,
        .sphere-2 {
          animation: none !important;
        }
      }</style
    ><span id="top"></span>
    <nav class="site-nav" id="nav">
      <div class="nav-inner">
        <a class="brand" href="#top" aria-label="Doodle Dash Labs home"
          ><svg
            class="brand-mark"
            viewBox="0 0 140 100"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <clipPath id="ddNavTop"><rect x="34" y="0" width="72" height="46"></rect></clipPath>
            </defs>
            <path d="M62 14 A52 38 0 0 1 62 86 Z" stroke="#2563EB" stroke-width="11" stroke-linejoin="round"></path>
            <path d="M78 14 A52 38 0 0 0 78 86 Z" stroke="#60A5FA" stroke-width="11" stroke-linejoin="round"></path>
            <path d="M62 14 A52 38 0 0 1 62 86 Z" stroke="#2563EB" stroke-width="11" stroke-linejoin="round" clip-path="url(#ddNavTop)"></path></svg
          ><span class="brand-name"
            >Doodle&nbsp;Dash&nbsp;Labs<span style="color: var(--accent)">®</span></span
          ></a
        >
        <div class="nav-links" id="navLinks">
          <a href="#services" class="nav-link-item">Services</a
          ><a href="#work" class="nav-link-item">Work</a
          ><a href="#about" class="nav-link-item">About</a
          ><a href="#testimonials" class="nav-link-item">Reviews</a
          ><a href="#faq" class="nav-link-item">FAQ</a>
        </div>
        <div class="nav-meta">
          <a href="#contact" class="nav-cta">Contact us</a
          ><button class="menu-btn" id="menuBtn" aria-label="Toggle menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <style>
        .site-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition:
            background 0.35s,
            backdrop-filter 0.35s,
            border-color 0.35s;
          border-bottom: 1px solid transparent;
        }
        .site-nav.scrolled {
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
        }
        .nav-inner {
          max-width: var(--maxw);
          margin: 0 auto;
          padding: 22px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          transition: padding 0.35s;
        }
        .site-nav.scrolled .nav-inner {
          padding: 15px 32px;
        }
        .brand {
          display: flex;
          align-items: center;
          gap: 11px;
        }
        .brand-mark {
          width: 42px;
          height: 30px;
          flex-shrink: 0;
        }
        .brand-name {
          font-family: var(--font-head);
          font-weight: 900;
          font-size: 18px;
          color: var(--white);
          letter-spacing: -0.01em;
          text-transform: uppercase;
        }
        .nav-links {
          display: flex;
          align-items: center;
          gap: 30px;
        }
        .nav-link-item {
          font-family: var(--font-mono);
          font-size: 14px;
          color: var(--muted);
          transition: color 0.2s;
        }
        .nav-link-item:hover {
          color: var(--white);
        }
        .nav-meta {
          display: flex;
          align-items: center;
          gap: 26px;
        }
        .nav-email {
          font-family: var(--font-mono);
          font-size: 13.5px;
          color: var(--muted);
          transition: color 0.2s;
        }
        .nav-email:hover {
          color: var(--white);
        }
        .nav-cta {
          font-family: var(--font-mono);
          font-size: 14px;
          color: var(--white);
          position: relative;
          padding-bottom: 3px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .nav-cta::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          background: currentColor;
          transform-origin: left;
          transition: transform 0.3s;
        }
        .nav-cta:hover::after {
          transform: scaleX(0.4);
        }
        .menu-btn {
          display: none;
          background: none;
          border: 0;
          cursor: pointer;
          flex-direction: column;
          gap: 5px;
          padding: 6px;
        }
        .menu-btn span {
          width: 24px;
          height: 2px;
          background: var(--white);
          border-radius: 2px;
          display: block;
          transition: 0.3s;
        }
        .mobile-menu {
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border);
          padding: 8px 32px 22px;
        }
        .mobile-link {
          display: block;
          padding: 13px 0;
          border-bottom: 1px solid var(--border);
          font-family: var(--font-mono);
          font-size: 14px;
          color: var(--muted);
          transition: color 0.2s;
        }
        .mobile-link:hover {
          color: var(--white);
        }

        @media (max-width: 860px) {
          .nav-links,
          .nav-email {
            display: none !important;
          }
          .menu-btn {
            display: flex !important;
          }
          .nav-cta {
            display: none !important;
          }
        }
        @media (max-width: 480px) {
          .nav-inner {
            padding: 16px 20px !important;
          }
          .site-nav.scrolled .nav-inner {
            padding: 12px 20px !important;
          }
          .mobile-menu {
            padding: 8px 20px 18px;
          }
        }
      </style>
    </nav>
    <header class="hero">
      <div class="hero-noise"></div>
      <div class="hero-glow"></div>
      <div class="hero-dotgrid"></div>
      <div class="hero-vectors" aria-hidden="true">
        <svg class="hv hv-hex" viewBox="0 0 60 60" fill="none"><path d="M30 4 52 17 52 43 30 56 8 43 8 17Z" stroke="rgba(29,78,216,0.22)" stroke-width="2"/></svg>
        <svg class="hv hv-tri" viewBox="0 0 60 60" fill="none"><path d="M30 8 54 50 6 50Z" stroke="rgba(29,78,216,0.18)" stroke-width="2"/></svg>
        <span class="hv hv-ring"></span>
        <span class="hv hv-plus">+</span>
        <span class="hv hv-plus hv-plus-2">+</span>
        <span class="hv hv-sq"></span>
      </div>
      <div class="wrap">
        <div class="hero-grid">
          <div class="hero-left">
            <h1 class="reveal hero-h1" style="transition-delay: 70ms">
              We build<br />what’s <span class="hero-accent">next.</span>
            </h1>
            <p class="hero-sub reveal" style="transition-delay: 140ms">
              We build web apps, mobile apps, AI agents &amp; SaaS platforms —
              end-to-end, from architecture to launch.
            </p>
            <div
              class="typewriter-container reveal"
              style="transition-delay: 210ms"
            >
              <span class="terminal-prompt">&gt;</span>
              engineering_status:<!-- -->
              <span class="type-text" id="typeText">Agent Workflow</span
              ><span class="type-caret"></span>
            </div>
            <div
              class="hero-ctas reveal desktop-ctas"
              style="transition-delay: 280ms"
            >
              <a href="#contact" class="btn btn-primary">Partner With Us</a
              ><a href="#work" class="btn btn-ghost">Explore Work</a>
            </div>
          </div>
          <div class="hero-right reveal" style="transition-delay: 350ms">
            <div class="hero-art" aria-hidden="true">
              <span class="art-blob"></span>
              <span class="art-blob art-blob-2"></span>
              <svg class="art-hex" viewBox="0 0 120 120" fill="none"><path d="M60 6 110 35 110 85 60 114 10 85 10 35Z" stroke="rgba(29,78,216,0.22)" stroke-width="2"></path></svg>
              <span class="art-ring"></span>
              <span class="art-dotgrid"></span>
              <div class="art-stack">
                <span class="art-panel p1"></span>
                <span class="art-panel p2"></span>
                <span class="art-panel p3">
                  <span class="panel-top">
                    <span class="panel-glyph">
                      <svg viewBox="0 0 24 24" fill="none"><path d="M5 13 q1.8 -3.6 3.6 0 t3.6 0 L18 13" stroke="#fff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.4 10.4 L18 13 L15.4 15.6" stroke="#fff" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </span>
                    <span class="panel-live"><i></i>Shipping</span>
                  </span>
                  <span class="panel-title">Product build</span>
                  <span class="panel-sub">idea → launch</span>
                  <span class="panel-bars"><i style="width:82%"></i><i style="width:64%"></i><i style="width:91%"></i></span>
                </span>
              </div>
              <span class="art-chip chip-1"><i></i>Web</span>
              <span class="art-chip chip-2"><i></i>AI Agents</span>
              <span class="art-chip chip-3"><i></i>Mobile</span>
              <span class="art-orb o1"></span>
              <span class="art-orb o2"></span>
              <span class="art-orb o3"></span>
            </div>
          </div>
        </div>
        <div class="hero-trust reveal">
          <div class="trust-badge first"><b>MERN Stack</b> Specialists</div>
          <div class="trust-badge"><b>Autonomous</b> AI Agents</div>
          <div class="trust-badge"><b>SaaS Product</b> Architecture</div>
          <div class="trust-badge"><b>React Native</b> Mobile</div>
          <div class="trust-badge"><b>End-to-End</b> Delivery</div>
        </div>
        <div class="hero-ctas reveal mobile-ctas">
          <a href="#contact" class="btn btn-primary">Partner With Us</a
          ><a href="#work" class="btn btn-ghost">Explore Work</a>
        </div>
      </div>
      <style>
        .hero {
          position: relative;
          overflow: hidden;
          background: linear-gradient(180deg, #FFFFFF 0%, #EEF3FB 55%, #E2EBF8 100%);
          padding: 160px 0 100px;
          margin: 0 12px;
          border-radius: 0 0 16px 16px;
          border-bottom: 1px solid rgba(15,23,42,0.08);
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
          background-image: radial-gradient(circle, rgba(29,78,216,0.10) 1px, transparent 1px);
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
          background: linear-gradient(135deg, #1D4ED8 0%, #3B82F6 100%);
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
          background: #FFFFFF;
          border: 1px solid rgba(29,78,216,0.16);
          padding: 11px 20px;
          border-radius: 100px;
          width: fit-content;
          max-width: 100%;
          margin-bottom: 36px;
          color: var(--white);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 24px -4px rgba(15,23,42,0.10),
                      0 0 0 1px rgba(29,78,216,0.10) inset,
                      0 0 18px -6px rgba(29,78,216,0.18);
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
          flex: none;
          width: 17ch;
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
          background: #FFFFFF;
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
          box-shadow: 0 12px 30px -10px rgba(15,23,42,0.08),
                      0 0 24px -10px var(--accent-glow);
        }
        .flow-card.active {
          border-color: var(--accent);
          background: #EFF4FC;
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
          border-top: 1px solid rgba(15,23,42,0.12);
          padding-top: 32px;
        }
        .trust-badge {
          font-family: var(--font-mono); font-size: 13px;
          color: var(--muted); padding-left: 24px;
          border-left: 1px solid rgba(15,23,42,0.12);
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
          /* On mobile, lead with the visual card, then the copy */
          .hero-right { order: -1; }
          .hero-left { order: 0; }
          /* Let grid columns shrink below content width (nowrap console etc.)
             so nothing forces horizontal overflow on narrow screens */
          .hero-grid, .hero-left, .hero-right { min-width: 0; }
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
          .hero { padding: 90px 0 40px; }
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
            border-top: 1px solid rgba(15,23,42,0.10);
          }
          .trust-badge {
            font-size: 10.5px;
            border-left: none;
            padding: 6px 10px;
            background: rgba(15,23,42,0.04);
            border: 1px solid rgba(15,23,42,0.08);
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
      </style>
    </header>
    <section class="statement section-pad">
      <div class="wrap">
        <span class="label reveal" style="transition-delay: 350ms"
          ><span class="n">00</span> Studio</span
        >
        <h2 class="stmt-big reveal" style="transition-delay: 350ms">
          We build elite AI systems &amp; software for
          <em>ambitious companies.</em>
        </h2>
        <div class="stmt-cols">
          <p class="reveal" style="transition-delay: 350ms">
            We are an elite software and AI product studio partnering with
            high-growth startups and visionary founders. We design, prototype,
            and build production-grade web systems, mobile platforms, and
            autonomous agent workflows.
          </p>
          <p class="reveal" style="transition-delay: 350ms">
            Doodle Dash Labs bridges the gap between complex model orchestration and
            intuitive product interfaces. We help teams establish solid
            technical architecture and deploy products that generate actual
            business value.
          </p>
        </div>
        <div class="stmt-meta reveal" style="transition-delay: 350ms">
          MERN &amp; React Native Specialists &nbsp;•&nbsp; AI Agent
          Integrations &nbsp;•&nbsp; Built to Scale
        </div>
      </div>
      <style>
        .stmt-big {
          font-size: clamp(40px, 6.6vw, 98px);
          font-weight: 900;
          text-transform: uppercase;
          color: var(--white);
          line-height: 0.93;
          letter-spacing: -0.03em;
          max-width: 14ch;
          margin: 22px 0 48px;
        }
        .stmt-big em {
          font-style: normal;
          color: var(--accent);
        }
        .stmt-cols {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 48px;
          max-width: 760px;
        }
        .stmt-cols p {
          font-family: var(--font-mono);
          font-size: 14.5px;
          color: var(--muted);
          line-height: 1.75;
        }
        .stmt-meta {
          margin-top: 44px;
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--dim);
        }
        @media (max-width: 760px) {
          .stmt-cols {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .stmt-big {
            font-size: clamp(32px, 10vw, 64px);
            margin-bottom: 32px;
          }
        }
      </style>
    </section>
    <section class="logos-section">
      <div class="wrap">
        <p class="logos-cap reveal" style="transition-delay: 350ms">
          [ Trusted by founders and product teams at ]
        </p>
        <div class="logos-row reveal" style="transition-delay: 350ms">
          <span class="logo-word">Loomstack</span
          ><span class="logo-word">Northpeak</span
          ><span class="logo-word">Vela Health</span
          ><span class="logo-word">Cobalt</span
          ><span class="logo-word">Meridian</span
          ><span class="logo-word">Vantage</span>
        </div>
      </div>
      <style>
        .logos-section {
          padding: 56px 0;
        }
        .logos-cap {
          font-family: var(--font-mono);
          font-size: 12.5px;
          color: var(--dim);
          margin-bottom: 30px;
        }
        .logos-row {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 18px 46px;
        }
        .logo-word {
          font-family: var(--font-head);
          font-weight: 800;
          font-size: 23px;
          color: var(--muted);
          opacity: 0.6;
          letter-spacing: -0.01em;
          text-transform: uppercase;
          transition:
            opacity 0.3s,
            color 0.3s;
        }
        .logo-word:hover {
          opacity: 1;
          color: var(--white);
        }
        @media (max-width: 760px) {
          .logos-section {
            padding: 40px 0;
          }
          .logos-row {
            gap: 14px 28px;
          }
          .logo-word {
            font-size: 18px;
          }
        }
      </style>
    </section>
    <hr class="divider" />
    <section id="services" class="section-pad">
      <div class="wrap">
        <div class="sec-head reveal" style="transition-delay: 350ms">
          <span class="label"><span class="n">01</span> Services</span>
          <h2>Elite Capabilities</h2>
          <p>
            We build production-ready digital products and intelligence engines
            engineered to scale.
          </p>
        </div>
        <div class="services-grid">
          <div class="svc-card reveal" style="transition-delay: 350ms">
            <div class="card-glow"></div>
            <div class="card-header">
              <span class="svc-num">01</span><span class="svc-icon">🧠</span>
            </div>
            <h3 class="svc-title">AI &amp; Agentic Systems</h3>
            <p class="svc-desc">
              Autonomous agents, multi-agent frameworks, custom LLM fine-tuning,
              and vector-grounded RAG pipelines built for enterprise automation.
            </p>
            <div class="svc-capabilities">
              <span class="cap-tag"
                ><span class="cap-dot"></span>
                <!-- -->LangChain &amp; LlamaIndex</span
              ><span class="cap-tag"
                ><span class="cap-dot"></span>
                <!-- -->Semantic Search &amp; RAG</span
              ><span class="cap-tag"
                ><span class="cap-dot"></span>
                <!-- -->Custom Agent Orchestrators</span
              >
            </div>
          </div>
          <div class="svc-card reveal" style="transition-delay: 350ms">
            <div class="card-glow"></div>
            <div class="card-header">
              <span class="svc-num">02</span><span class="svc-icon">🌐</span>
            </div>
            <h3 class="svc-title">Full-Stack Web</h3>
            <p class="svc-desc">
              High-performance web applications built on Next.js. Engineered for
              speed, strict SEO guidelines, and infinite scale.
            </p>
            <div class="svc-capabilities">
              <span class="cap-tag"
                ><span class="cap-dot"></span>
                <!-- -->Server Components (RSC)</span
              ><span class="cap-tag"
                ><span class="cap-dot"></span>
                <!-- -->Dynamic Edge Caching</span
              ><span class="cap-tag"
                ><span class="cap-dot"></span>
                <!-- -->Tailwind &amp; Headless UI</span
              >
            </div>
          </div>
          <div class="svc-card reveal" style="transition-delay: 350ms">
            <div class="card-glow"></div>
            <div class="card-header">
              <span class="svc-num">03</span><span class="svc-icon">📱</span>
            </div>
            <h3 class="svc-title">Mobile Apps</h3>
            <p class="svc-desc">
              Cross-platform iOS and Android experiences built with React
              Native. Native performance, animations, and fluid gesture
              handling.
            </p>
            <div class="svc-capabilities">
              <span class="cap-tag"
                ><span class="cap-dot"></span>
                <!-- -->React Native / Expo</span
              ><span class="cap-tag"
                ><span class="cap-dot"></span>
                <!-- -->Offline Synchronization</span
              ><span class="cap-tag"
                ><span class="cap-dot"></span>
                <!-- -->Biometrics &amp; Push Services</span
              >
            </div>
          </div>
          <div class="svc-card reveal" style="transition-delay: 350ms">
            <div class="card-glow"></div>
            <div class="card-header">
              <span class="svc-num">04</span><span class="svc-icon">📊</span>
            </div>
            <h3 class="svc-title">SaaS Products</h3>
            <p class="svc-desc">
              End-to-end SaaS development from scratch. Robust databases,
              subscription billing models, multi-tenancy, and admin command
              centers.
            </p>
            <div class="svc-capabilities">
              <span class="cap-tag"
                ><span class="cap-dot"></span>
                <!-- -->Stripe Core Integration</span
              ><span class="cap-tag"
                ><span class="cap-dot"></span>
                <!-- -->Multi-Tenant Architecture</span
              ><span class="cap-tag"
                ><span class="cap-dot"></span>
                <!-- -->Analytics &amp; Usage Audits</span
              >
            </div>
          </div>
          <div class="svc-card reveal" style="transition-delay: 350ms">
            <div class="card-glow"></div>
            <div class="card-header">
              <span class="svc-num">05</span><span class="svc-icon">🔌</span>
            </div>
            <h3 class="svc-title">API &amp; Integrations</h3>
            <p class="svc-desc">
              High-throughput GraphQL/REST APIs, secure OAuth authorization
              services, webhook handlers, and serverless background workers.
            </p>
            <div class="svc-capabilities">
              <span class="cap-tag"
                ><span class="cap-dot"></span>
                <!-- -->GraphQL &amp; tRPC</span
              ><span class="cap-tag"
                ><span class="cap-dot"></span>
                <!-- -->Distributed Rate Limiting</span
              ><span class="cap-tag"
                ><span class="cap-dot"></span>
                <!-- -->AWS / Cloudflare Edge</span
              >
            </div>
          </div>
          <div class="svc-card reveal" style="transition-delay: 350ms">
            <div class="card-glow"></div>
            <div class="card-header">
              <span class="svc-num">06</span><span class="svc-icon">✨</span>
            </div>
            <h3 class="svc-title">UI/UX Design Systems</h3>
            <p class="svc-desc">
              Pixel-perfect, interactive prototypes and tokenized Figma design
              systems that map 1:1 to production code structures.
            </p>
            <div class="svc-capabilities">
              <span class="cap-tag"
                ><span class="cap-dot"></span>
                <!-- -->Component tokenization</span
              ><span class="cap-tag"
                ><span class="cap-dot"></span>
                <!-- -->Micro-interactions</span
              ><span class="cap-tag"
                ><span class="cap-dot"></span>
                <!-- -->High-fidelity prototypes</span
              >
            </div>
          </div>
        </div>
      </div>
      <style>
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        .svc-card {
          position: relative;
          background: #FFFFFF;
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 32px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
          display: flex;
          flex-direction: column;
        }
        .card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(
            circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%),
            var(--accent-glow) 0%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.4s;
          pointer-events: none;
          z-index: 1;
        }
        .svc-card:hover {
          border-color: var(--border-2);
          transform: translateY(-4px);
          background: #FFFFFF;
          box-shadow:
            0 12px 30px -10px rgba(15,23,42,0.10),
            0 0 24px -10px var(--accent-glow);
        }
        .svc-card:hover .card-glow {
          opacity: 1;
        }
        .card-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          position: relative;
          z-index: 2;
        }
        .svc-num {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--accent);
          letter-spacing: 0.1em;
          border: 1px solid var(--border);
          padding: 2px 8px;
          border-radius: 4px;
        }
        .svc-icon {
          font-size: 20px;
        }
        .svc-title {
          font-size: 22px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          margin-bottom: 14px;
          color: var(--white);
          position: relative;
          z-index: 2;
        }
        .svc-desc {
          font-family: var(--font-head);
          font-size: 14px;
          color: var(--muted);
          line-height: 1.6;
          margin-bottom: 24px;
          flex: 1;
          position: relative;
          z-index: 2;
        }
        .svc-capabilities {
          display: flex;
          flex-direction: column;
          gap: 10px;
          border-top: 1px solid var(--border);
          padding-top: 20px;
          position: relative;
          z-index: 2;
        }
        .cap-tag {
          font-family: var(--font-mono);
          font-size: 11.5px;
          color: var(--muted);
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .cap-dot {
          width: 4px;
          height: 4px;
          background: var(--accent);
          border-radius: 50%;
        }
        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .svc-card {
            padding: 24px;
          }
        }
      </style>
    </section>
    <hr class="divider" />
    <section id="work" class="section-pad">
      <div class="wrap">
        <div class="sec-head reveal" style="transition-delay: 350ms">
          <span class="label"><span class="n">02</span> Case Studies</span>
          <h2>Outcomes, not just output</h2>
          <p>
            A look at the elite software systems and digital products we have
            engineered and deployed.
          </p>
        </div>
        <div class="work-grid">
          <article
            class="reveal case-card c1"
            style="transition-delay: 350ms"
          >
            <div class="case-visualizer">
              <div class="vis-fintech">
                <div class="vis-chart-bar" style="height: 45%"></div>
                <div class="vis-chart-bar" style="height: 70%"></div>
                <div class="vis-chart-bar" style="height: 55%"></div>
                <div class="vis-chart-bar active" style="height: 90%"></div>
                <div class="vis-chart-bar" style="height: 65%"></div>
                <div class="vis-payout-toast">
                  <span class="toast-dot"></span> Payout Succeeded (+$14,250)
                </div>
              </div>
              <div class="case-metric">
                $2.4M<small>processed in first 3 months</small>
              </div>
            </div>
            <div class="case-body">
              <span class="case-sector">Fintech · Loomstack</span>
              <h3>B2B Payments Dashboard</h3>
              <p>
                A real-time reconciliation and payouts platform that cut manual
                finance work by 60% and scaled to hundreds of merchants.
              </p>
              <div class="case-tags">
                <span>React</span><span>Node.js</span><span>PostgreSQL</span
                ><span>Stripe</span>
              </div>
            </div>
          </article>
          <article
            class="reveal case-card c2"
            style="transition-delay: 350ms"
          >
            <div class="case-visualizer">
              <div class="vis-ai">
                <div class="vis-chat-bubble system">
                  Incoming support inquiry...
                </div>
                <div class="vis-chat-bubble agent">
                  <span class="bot-tag">Agent</span> Auto-resolved via vector
                  search.
                </div>
              </div>
              <div class="case-metric">
                58%<small>of support tickets auto-resolved</small>
              </div>
            </div>
            <div class="case-body">
              <span class="case-sector">AI Systems · Northpeak</span>
              <h3>RAG Support Agent</h3>
              <p>
                An LLM agent grounded in their knowledge base that resolves most
                tickets instantly — saving the team roughly 30 hours a week.
              </p>
              <div class="case-tags">
                <span>Anthropic</span><span>LangChain</span><span>RAG</span
                ><span>Python</span>
              </div>
            </div>
          </article>
          <article
            class="reveal case-card c3"
            style="transition-delay: 350ms"
          >
            <div class="case-visualizer">
              <div class="vis-health">
                <div class="vis-pulse-container">
                  <div class="vis-pulse-line"></div>
                </div>
                <div class="vis-telemetry">
                  <span>Heart Rate: 72 bpm</span><span>Telemetry: Active</span>
                </div>
              </div>
              <div class="case-metric">
                8K+<small>patients onboarded · 4.7★ app</small>
              </div>
            </div>
            <div class="case-body">
              <span class="case-sector">HealthTech · Vela Health</span>
              <h3>Patient Care Platform</h3>
              <p>
                A HIPAA-compliant web platform and cross-platform mobile app
                connecting patients with care teams in real time.
              </p>
              <div class="case-tags">
                <span>React Native</span><span>AWS</span><span>HIPAA</span
                ><span>MongoDB</span>
              </div>
            </div>
          </article>
        </div>
      </div>
      <style>
        .work-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .case-card {
          border: 1px solid var(--border);
          overflow: hidden;
          background: #FFFFFF;
          display: flex;
          flex-direction: column;
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .case-card:hover {
          transform: translateY(-6px);
          border-color: var(--border-2);
          background: #FFFFFF;
          box-shadow:
            0 20px 40px -15px rgba(15,23,42,0.12),
            0 0 30px -15px var(--accent-glow);
        }

        /* Vis Header styling */
        .case-visualizer {
          height: 200px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 24px;
          overflow: hidden;
          background: #EFF4FC;
          border-bottom: 1px solid var(--border);
        }

        /* Grid background effect */
        .case-visualizer::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(
            circle,
            rgba(29,78,216,0.04) 1px,
            transparent 1px
          );
          background-size: 16px 16px;
          pointer-events: none;
          z-index: 0;
        }

        /* Fintech Visual */
        .vis-fintech {
          display: flex;
          align-items: flex-end;
          gap: 8px;
          height: 80px;
          position: relative;
          z-index: 1;
        }
        .vis-chart-bar {
          flex: 1;
          background: var(--border-2);
          border-radius: 4px;
          transition: height 0.5s;
        }
        .vis-chart-bar.active {
          background: var(--accent);
          box-shadow: 0 0 12px var(--accent-glow);
        }
        .vis-payout-toast {
          position: absolute;
          top: 10px;
          right: 0;
          background: #FFFFFF;
          border: 1px solid var(--border-2);
          padding: 6px 12px;
          border-radius: 6px;
          font-family: var(--font-mono);
          font-size: 10px;
          color: var(--white);
          display: flex;
          align-items: center;
          gap: 6px;
          animation: floatToast 3s infinite ease-in-out;
        }
        @keyframes floatToast {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        .toast-dot {
          width: 6px;
          height: 6px;
          background: var(--accent);
          border-radius: 50%;
        }

        /* AI Visual */
        .vis-ai {
          display: flex;
          flex-direction: column;
          gap: 8px;
          position: relative;
          z-index: 1;
        }
        .vis-chat-bubble {
          font-family: var(--font-mono);
          font-size: 10px;
          padding: 6px 10px;
          border-radius: 6px;
          max-width: 80%;
        }
        .vis-chat-bubble.system {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          color: var(--muted);
          align-self: flex-start;
        }
        .vis-chat-bubble.agent {
          background: rgba(29,78,216,0.10);
          border: 1px solid var(--accent-deep);
          color: var(--white);
          align-self: flex-end;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .bot-tag {
          font-size: 8px;
          background: var(--accent);
          color: #FFFFFF;
          padding: 1px 4px;
          border-radius: 3px;
          font-weight: bold;
        }

        /* Health Visual */
        .vis-health {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 80px;
          position: relative;
          z-index: 1;
        }
        .vis-pulse-container {
          height: 30px;
          background: rgba(255, 255, 255, 0.01);
          border: 1px solid var(--border);
          border-radius: 6px;
          overflow: hidden;
          position: relative;
        }
        .vis-pulse-line {
          height: 100%;
          width: 100%;
          background: linear-gradient(
            90deg,
            transparent 0%,
            var(--accent) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: pulseScan 2s infinite linear;
        }
        @keyframes pulseScan {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        .vis-telemetry {
          display: flex;
          justify-content: space-between;
          font-family: var(--font-mono);
          font-size: 9px;
          color: var(--dim);
        }

        .case-metric {
          position: relative;
          z-index: 2;
          font-family: var(--font-head);
          font-weight: 800;
          font-size: 36px;
          color: var(--white);
          letter-spacing: -0.02em;
          line-height: 1;
        }

        .case-metric small {
          display: block;
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 400;
          color: var(--muted);
          margin-top: 6px;
          letter-spacing: 0.02em;
        }

        .case-body {
          padding: 26px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .case-sector {
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--accent);
        }

        .case-body h3 {
          font-size: 22px;
          font-weight: 700;
          margin: 12px 0 10px;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          color: var(--white);
        }

        .case-body p {
          font-family: var(--font-head);
          font-size: 14px;
          color: var(--muted);
          line-height: 1.6;
          flex: 1;
        }

        .case-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 24px;
        }

        .case-tags span {
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--muted);
          padding: 4px 10px;
          border: 1px solid var(--border);
          border-radius: 4px;
          background: rgba(255, 255, 255, 0.01);
        }

        @media (max-width: 980px) {
          .work-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }
        @media (max-width: 640px) {
          .work-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .case-visualizer {
            height: 180px;
          }
          .case-body {
            padding: 20px;
          }
        }
      </style>
    </section>
    <section class="impact-band">
      <div class="wrap">
        <div class="reveal impact-grid" style="transition-delay: 350ms">
          <div class="impact-cell">
            <div class="impact-num"><span>30+</span></div>
            <div class="impact-lbl">Products designed, built &amp; shipped</div>
          </div>
          <div class="impact-cell">
            <div class="impact-num"><span>20+</span></div>
            <div class="impact-lbl">Clients across 8+ time zones</div>
          </div>
          <div class="impact-cell">
            <div class="impact-num"><span>6+</span></div>
            <div class="impact-lbl">Years of full-stack delivery</div>
          </div>
          <div class="impact-cell">
            <div class="impact-num"><span>100%</span></div>
            <div class="impact-lbl">On-time delivery rate</div>
          </div>
        </div>
      </div>
      <style>
        .impact-band {
          padding: 60px 0;
        }
        .impact-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
        }
        .impact-cell {
          background: var(--card-2);
          padding: 42px 32px;
          transition: background 0.3s;
        }
        .impact-cell:hover {
          background: var(--card);
        }
        .impact-num {
          font-family: var(--font-head);
          font-weight: 900;
          font-size: clamp(40px, 4.6vw, 58px);
          letter-spacing: -0.03em;
          line-height: 1;
          color: var(--white);
        }
        .impact-num span {
          color: var(--accent);
        }
        .impact-lbl {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--muted);
          margin-top: 14px;
          line-height: 1.55;
        }
        @media (max-width: 980px) {
          .impact-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .impact-band {
            padding: 40px 0;
          }
          .impact-grid {
            grid-template-columns: 1fr;
          }
          .impact-cell {
            padding: 30px 24px;
          }
        }
      </style>
    </section>
    <hr class="divider" />
    <section id="process" class="section-pad">
      <div class="wrap">
        <div class="sec-head reveal" style="transition-delay: 350ms">
          <span class="label"><span class="n">03</span> Process</span>
          <h2>A clear process. Zero surprises.</h2>
          <p>A structured engagement from first call to long-term scale.</p>
        </div>
        <div class="proc-timeline">
          <div class="proc-line"></div>
          <div class="reveal proc-step" style="transition-delay: 350ms">
            <div class="proc-num">01</div>
            <h3 class="proc-title">Discovery</h3>
            <p class="proc-desc">
              Understand your goals, users, and constraints.
            </p>
          </div>
          <div class="reveal proc-step" style="transition-delay: 350ms">
            <div class="proc-num">02</div>
            <h3 class="proc-title">Design</h3>
            <p class="proc-desc">Wireframes, prototypes, and design systems.</p>
          </div>
          <div class="reveal proc-step" style="transition-delay: 350ms">
            <div class="proc-num">03</div>
            <h3 class="proc-title">Build</h3>
            <p class="proc-desc">Iterative development with weekly demos.</p>
          </div>
          <div class="reveal proc-step" style="transition-delay: 350ms">
            <div class="proc-num">04</div>
            <h3 class="proc-title">Test &amp; QA</h3>
            <p class="proc-desc">
              Rigorous testing across devices and edge cases.
            </p>
          </div>
          <div class="reveal proc-step" style="transition-delay: 350ms">
            <div class="proc-num">05</div>
            <h3 class="proc-title">Launch &amp; Scale</h3>
            <p class="proc-desc">
              Deployment, monitoring, and ongoing support.
            </p>
          </div>
        </div>
      </div>
      <style>
        .proc-timeline {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 24px;
          margin-top: 40px;
        }
        .proc-line {
          position: absolute;
          top: 28px;
          left: 5%;
          right: 5%;
          height: 1px;
          background: linear-gradient(
            90deg,
            var(--border),
            var(--accent),
            var(--border)
          );
          opacity: 0.6;
          z-index: 1;
        }
        .proc-step {
          position: relative;
        }
        .proc-num {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: var(--card);
          border: 1px solid var(--border-2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-head);
          font-weight: 800;
          font-size: 18px;
          color: var(--accent);
          position: relative;
          z-index: 2;
          margin-bottom: 24px;
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .proc-step:hover .proc-num {
          border-color: var(--accent);
          color: #FFFFFF;
          background: var(--accent);
          box-shadow: 0 0 20px var(--accent-glow);
          transform: scale(1.1);
        }
        .proc-title {
          font-size: 17px;
          font-weight: 800;
          margin-bottom: 9px;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          color: var(--white);
        }
        .proc-desc {
          font-family: var(--font-head);
          font-size: 14px;
          color: var(--muted);
          line-height: 1.65;
        }

        @media (max-width: 980px) {
          .proc-timeline {
            grid-template-columns: repeat(2, 1fr);
            gap: 36px 18px;
          }
          .proc-line {
            display: none;
          }
        }
        @media (max-width: 600px) {
          .proc-timeline {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .proc-step {
            display: flex;
            gap: 16px;
            align-items: flex-start;
          }
          .proc-num {
            width: 44px;
            height: 44px;
            font-size: 16px;
            margin-bottom: 0;
            flex-shrink: 0;
          }
          .proc-title {
            font-size: 16px;
            margin-bottom: 4px;
          }
        }
      </style>
    </section>
    <hr class="divider" />
    <section id="tech" class="section-pad tech-section">
      <div class="wrap">
        <div
          class="sec-head reveal"
          style="max-width: 560px; transition-delay: 350ms"
        >
          <span class="label"><span class="n">04</span> Tech stack</span>
          <h2>Modern, battle-tested, built to scale</h2>
        </div>
      </div>
      <div
        class="marquee-mask reveal tech-marquee"
        style="transition-delay: 350ms"
      >
        <div
          class="track-left"
          style="
            display: flex;
            gap: 14px;
            width: max-content;
            will-change: transform;
          "
        >
          <div class="tech-pill">
            <span class="pill-dot"></span>React<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>Node.js<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>MongoDB<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>Express<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>TypeScript<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>Next.js<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>React Native<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>PostgreSQL<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>React<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>Node.js<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>MongoDB<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>Express<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>TypeScript<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>Next.js<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>React Native<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>PostgreSQL<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
        </div>
        <div
          class="track-right"
          style="
            display: flex;
            gap: 14px;
            width: max-content;
            will-change: transform;
          "
        >
          <div class="tech-pill">
            <span class="pill-dot"></span>OpenAI API<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>LangChain<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>AWS<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>Docker<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>Redis<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>Prisma<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>TailwindCSS<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>Firebase<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>OpenAI API<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>LangChain<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>AWS<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>Docker<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>Redis<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>Prisma<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>TailwindCSS<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
          <div class="tech-pill">
            <span class="pill-dot"></span>Firebase<style>
              .tech-pill {
                flex-shrink: 0;
                display: flex;
                align-items: center;
                gap: 11px;
                padding: 13px 22px;
                background: var(--card);
                border: 1px solid var(--border);
                font-family: var(--font-mono);
                font-size: 14px;
                color: var(--muted);
                transition:
                  border-color 0.3s,
                  color 0.3s,
                  background 0.3s;
                cursor: default;
                white-space: nowrap;
              }
              .pill-dot {
                width: 7px;
                height: 7px;
                border-radius: 50%;
                background: var(--accent);
                flex-shrink: 0;
              }
              @media (max-width: 760px) {
                .tech-pill {
                  font-size: 13px;
                  padding: 10px 18px;
                }
              }
            </style>
          </div>
        </div>
      </div>
      <style>
        .tech-section {
          overflow: hidden;
        }
        .tech-marquee {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-top: 50px;
        }
        @media (max-width: 760px) {
          .tech-marquee {
            gap: 10px;
          }
        }
      </style>
    </section>
    <hr class="divider" />
    <section id="industries" class="section-pad">
      <div class="wrap">
        <div class="sec-head reveal" style="transition-delay: 350ms">
          <span class="label"><span class="n">05</span> Industries</span>
          <h2>Domain depth, not just code</h2>
          <p>
            We've shipped production systems across regulated, high-stakes, and
            fast-moving industries.
          </p>
        </div>
        <div class="ind-grid">
          <div class="reveal ind-card" style="transition-delay: 350ms">
            <div class="ind-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                width="21"
                height="21"
              >
                <path d="M3 21h18M5 21V8l7-5 7 5v13M9 21v-6h6v6"></path>
              </svg>
            </div>
            <div>
              <h3 class="ind-title">Fintech &amp; Payments</h3>
              <p class="ind-desc">
                Dashboards, billing, payouts, and compliance-ready
                infrastructure.
              </p>
            </div>
          </div>
          <div class="reveal ind-card" style="transition-delay: 350ms">
            <div class="ind-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                width="21"
                height="21"
              >
                <path
                  d="M19 14c1.5-1.6 3-3.5 3-5.5A3.5 3.5 0 0 0 12 6 3.5 3.5 0 0 0 2 8.5C2 10.5 3.5 12.4 5 14l7 7 7-7Z"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="ind-title">Health &amp; Wellness</h3>
              <p class="ind-desc">
                HIPAA-aware platforms, patient apps, and care-team tooling.
              </p>
            </div>
          </div>
          <div class="reveal ind-card" style="transition-delay: 350ms">
            <div class="ind-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                width="21"
                height="21"
              >
                <circle cx="9" cy="20" r="1.4"></circle>
                <circle cx="18" cy="20" r="1.4"></circle>
                <path d="M2 3h3l2.5 13h11l2-9H6"></path>
              </svg>
            </div>
            <div>
              <h3 class="ind-title">E-commerce &amp; Retail</h3>
              <p class="ind-desc">
                Storefronts, checkout, and inventory systems built to convert.
              </p>
            </div>
          </div>
          <div class="reveal ind-card" style="transition-delay: 350ms">
            <div class="ind-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                width="21"
                height="21"
              >
                <rect x="3" y="4" width="18" height="14" rx="2"></rect>
                <path d="M3 9h18M7 14h5"></path>
              </svg>
            </div>
            <div>
              <h3 class="ind-title">SaaS &amp; B2B Tools</h3>
              <p class="ind-desc">
                Multi-tenant apps, admin consoles, and subscription billing.
              </p>
            </div>
          </div>
          <div class="reveal ind-card" style="transition-delay: 350ms">
            <div class="ind-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                width="21"
                height="21"
              >
                <path
                  d="M1 16V8h13v8M14 11h4l3 3v2h-7M3.5 19a1.8 1.8 0 1 0 0-3.6M17.5 19a1.8 1.8 0 1 0 0-3.6"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="ind-title">Logistics &amp; Mobility</h3>
              <p class="ind-desc">
                Real-time tracking, routing, and operations dashboards.
              </p>
            </div>
          </div>
          <div class="reveal ind-card" style="transition-delay: 350ms">
            <div class="ind-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                width="21"
                height="21"
              >
                <ellipse cx="12" cy="6" rx="8" ry="3"></ellipse>
                <path
                  d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"
                ></path>
              </svg>
            </div>
            <div>
              <h3 class="ind-title">AI &amp; Data Platforms</h3>
              <p class="ind-desc">
                RAG pipelines, agents, and intelligent automation at scale.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>
        .ind-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
        }
        .ind-card {
          background: var(--card-2);
          padding: 32px 30px;
          display: flex;
          align-items: flex-start;
          gap: 18px;
          transition: background 0.3s;
        }
        .ind-card:hover {
          background: var(--card);
        }
        .ind-icon {
          width: 42px;
          height: 42px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(29,78,216,0.10);
          border: 1px solid rgba(29,78,216,0.16);
          color: var(--accent);
        }
        .ind-title {
          font-size: 15px;
          font-weight: 800;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          color: var(--white);
        }
        .ind-desc {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--muted);
          line-height: 1.6;
        }
        @media (max-width: 980px) {
          .ind-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .ind-grid {
            grid-template-columns: 1fr;
          }
          .ind-card {
            padding: 24px 22px;
          }
        }
      </style>
    </section>
    <hr class="divider" />
    <section id="why" class="section-pad">
      <div class="wrap">
        <div class="sec-head reveal" style="transition-delay: 350ms">
          <span class="label"><span class="n">06</span> Why us</span>
          <h2>Serious engineers who care about craft</h2>
        </div>
        <div class="why-stats">
          <div class="reveal why-stat" style="transition-delay: 350ms">
            <div class="stat-big">6–7 Years</div>
            <p>
              Deep MERN &amp; full-stack expertise across dozens of shipped
              products.
            </p>
          </div>
          <div class="reveal why-stat" style="transition-delay: 350ms">
            <div class="stat-big">3 Platforms</div>
            <p>
              Web, Mobile (iOS / Android), and AI systems — one team, full
              coverage.
            </p>
          </div>
          <div class="reveal why-stat" style="transition-delay: 350ms">
            <div class="stat-big">End-to-End</div>
            <p>
              From idea to deployed product, we own the full stack and the
              outcome.
            </p>
          </div>
        </div>
        <div class="why-diffs reveal" style="transition-delay: 350ms">
          <div class="diff-item">
            <span class="diff-m">01 / Speed</span>
            <h3 class="diff-title">Fast Delivery</h3>
            <p class="diff-desc">Structured sprints, weekly demos, no fluff.</p>
          </div>
          <div class="diff-item">
            <span class="diff-m">02 / Quality</span>
            <h3 class="diff-title">Production-Grade Code</h3>
            <p class="diff-desc">Clean architecture, tested, documented.</p>
          </div>
          <div class="diff-item">
            <span class="diff-m">03 / Trust</span>
            <h3 class="diff-title">Collaborative Process</h3>
            <p class="diff-desc">You're never out of the loop.</p>
          </div>
          <div class="diff-item">
            <span class="diff-m">04 / Reach</span>
            <h3 class="diff-title">Global Clients</h3>
            <p class="diff-desc">We work across time zones, async-friendly.</p>
          </div>
          <div class="diff-item">
            <span class="diff-m">05 / Intelligence</span>
            <h3 class="diff-title">AI-First Thinking</h3>
            <p class="diff-desc">We integrate AI where it adds real value.</p>
          </div>
          <div class="diff-item">
            <span class="diff-m">06 / Growth</span>
            <h3 class="diff-title">Scalability Focus</h3>
            <p class="diff-desc">Built to grow with your business.</p>
          </div>
        </div>
      </div>
      <style>
        .why-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          margin-bottom: 18px;
        }
        .why-stat {
          padding: 42px 34px;
          background: var(--card);
          border: 1px solid var(--border);
          position: relative;
          overflow: hidden;
        }
        .why-stat::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: var(--accent);
        }
        .stat-big {
          font-family: var(--font-head);
          font-weight: 900;
          font-size: clamp(28px, 3.4vw, 44px);
          color: var(--white);
          letter-spacing: -0.03em;
          line-height: 1.05;
          margin-bottom: 16px;
          text-transform: uppercase;
        }
        .stat-big span {
          color: var(--accent);
        }
        .why-stat p {
          font-family: var(--font-mono);
          font-size: 14px;
          color: var(--muted);
          line-height: 1.65;
        }
        .why-diffs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          border: 1px solid var(--border);
        }
        .diff-item {
          background: var(--card-2);
          padding: 32px 30px;
          transition: background 0.3s;
        }
        .diff-m {
          font-family: var(--font-mono);
          font-size: 12px;
          color: var(--accent);
          display: block;
          margin-bottom: 14px;
          letter-spacing: 0.04em;
        }
        .diff-title {
          font-size: 17px;
          font-weight: 800;
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          color: var(--white);
        }
        .diff-desc {
          font-family: var(--font-head);
          font-size: 14px;
          color: var(--muted);
          line-height: 1.65;
        }

        @media (max-width: 980px) {
          .why-stats {
            grid-template-columns: repeat(2, 1fr);
          }
          .why-diffs {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .why-stats {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .why-diffs {
            grid-template-columns: 1fr;
          }
          .why-stat {
            padding: 28px 22px;
          }
          .diff-item {
            padding: 22px;
          }
        }
      </style>
    </section>
    <hr class="divider" />
    <section id="about" class="section-pad">
      <div class="wrap">
        <div class="about-lead">
          <div class="reveal" style="transition-delay: 350ms">
            <span class="label"><span class="n">07</span> About us</span>
            <h2 class="about-title">A studio built for ambitious products.</h2>
          </div>
          <div class="reveal about-copy" style="transition-delay: 350ms">
            <p>
              Doodle Dash Labs is a boutique software studio built around one
              principle — the best products come from senior engineers who take
              full ownership. No bloated teams, no account managers, no
              hand-offs to juniors.
            </p>
            <p>
              With <strong>6+ years</strong> of deep expertise across MERN,
              React Native, AI agent systems, and SaaS architecture, our team
              takes your product from whiteboard to production —
              <strong>end-to-end, with full accountability.</strong>
            </p>
          </div>
        </div>
        <div class="highlights-grid">
          <div class="reveal highlight-card" style="transition-delay: 350ms">
            <div class="highlight-icon">⚡</div>
            <h3 class="highlight-title">Speed-First</h3>
            <p class="highlight-desc">
              Structured sprints with weekly demos. No bloat, no hand-offs.
            </p>
          </div>
          <div class="reveal highlight-card" style="transition-delay: 350ms">
            <div class="highlight-icon">🔒</div>
            <h3 class="highlight-title">End-to-End Ownership</h3>
            <p class="highlight-desc">
              The person you talk to is the person who builds your product.
            </p>
          </div>
          <div class="reveal highlight-card" style="transition-delay: 350ms">
            <div class="highlight-icon">🤝</div>
            <h3 class="highlight-title">Transparent Process</h3>
            <p class="highlight-desc">
              You're always in the loop — async-friendly, zero black boxes.
            </p>
          </div>
          <div class="reveal highlight-card" style="transition-delay: 350ms">
            <div class="highlight-icon">🧠</div>
            <h3 class="highlight-title">AI-First by Default</h3>
            <p class="highlight-desc">
              We integrate intelligence where it actually adds value, not hype.
            </p>
          </div>
        </div>
      </div>
      <style>
        .about-lead {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 54px;
          align-items: start;
          margin-bottom: 68px;
        }
        .about-title {
          font-size: clamp(30px, 3.5vw, 42px);
          font-weight: 800;
          text-transform: uppercase;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin-top: 16px;
        }
        .about-copy {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .about-copy p {
          font-family: var(--font-mono);
          font-size: 15px;
          line-height: 1.8;
          color: var(--muted);
        }
        .about-copy strong {
          color: var(--white);
          font-weight: 700;
        }

        .highlights-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }
        .highlight-card {
          padding: 30px 26px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 10px;
          transition:
            transform 0.3s,
            border-color 0.3s,
            box-shadow 0.3s;
        }
        .highlight-card:hover {
          transform: translateY(-3px);
          border-color: var(--border-2);
          box-shadow:
            0 8px 24px -10px rgba(15,23,42,0.08),
            0 0 18px -8px var(--accent-glow);
        }
        .highlight-icon {
          font-size: 24px;
          margin-bottom: 16px;
          display: block;
        }
        .highlight-title {
          font-family: var(--font-head);
          font-weight: 800;
          font-size: 16px;
          color: var(--white);
          text-transform: uppercase;
          letter-spacing: -0.01em;
          margin-bottom: 10px;
        }
        .highlight-desc {
          font-family: var(--font-mono);
          font-size: 12.5px;
          color: var(--dim);
          line-height: 1.6;
        }

        @media (max-width: 980px) {
          .about-lead {
            grid-template-columns: 1fr;
            gap: 26px;
            margin-bottom: 48px;
          }
          .highlights-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }
        @media (max-width: 600px) {
          .highlights-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .highlight-card {
            padding: 24px 22px;
          }
        }
      </style>
    </section>
    <hr class="divider" />
    <section id="testimonials" class="section-pad">
      <div class="wrap">
        <div class="testi-top">
          <div class="reveal" style="transition-delay: 350ms">
            <span class="label"><span class="n">08</span> Reviews</span>
            <h2 class="testi-h2">Our clients say</h2>
          </div>
          <div
            class="avatars reveal"
            aria-label="Trusted by 20+ clients"
            style="transition-delay: 350ms"
          >
            <div class="av">LN</div>
            <div class="av">MW</div>
            <div class="av">AC</div>
            <div class="av">DM</div>
            <div class="av more">+20</div>
          </div>
        </div>
        <div class="testi-grid">
          <div class="reveal testi-card" style="transition-delay: 350ms">
            <div class="testi-stars" aria-label="5 out of 5 stars">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="15"
                height="15"
              >
                <path
                  d="M12 2l3 6.3 6.9.9-5 4.8 1.2 6.8L12 17.8 5.9 20.8 7.1 14 2 9.2 9 8.3 12 2Z"
                ></path></svg
              ><svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="15"
                height="15"
              >
                <path
                  d="M12 2l3 6.3 6.9.9-5 4.8 1.2 6.8L12 17.8 5.9 20.8 7.1 14 2 9.2 9 8.3 12 2Z"
                ></path></svg
              ><svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="15"
                height="15"
              >
                <path
                  d="M12 2l3 6.3 6.9.9-5 4.8 1.2 6.8L12 17.8 5.9 20.8 7.1 14 2 9.2 9 8.3 12 2Z"
                ></path></svg
              ><svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="15"
                height="15"
              >
                <path
                  d="M12 2l3 6.3 6.9.9-5 4.8 1.2 6.8L12 17.8 5.9 20.8 7.1 14 2 9.2 9 8.3 12 2Z"
                ></path></svg
              ><svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="15"
                height="15"
              >
                <path
                  d="M12 2l3 6.3 6.9.9-5 4.8 1.2 6.8L12 17.8 5.9 20.8 7.1 14 2 9.2 9 8.3 12 2Z"
                ></path>
              </svg>
            </div>
            <p class="testi-quote">
              Working with Doodle Dash Labs was a standout experience —
              communicative, reliable, and I could always trust their output.
              The work was solid enough that I brought them back to consult on
              my next startup.
            </p>
            <div class="testi-who">
              <div class="testi-avatar">LN</div>
              <div>
                <div class="testi-name">Lucas Novak</div>
                <div class="testi-role">Senior Staff Engineer</div>
              </div>
            </div>
          </div>
          <div class="reveal testi-card" style="transition-delay: 350ms">
            <div class="testi-stars" aria-label="5 out of 5 stars">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="15"
                height="15"
              >
                <path
                  d="M12 2l3 6.3 6.9.9-5 4.8 1.2 6.8L12 17.8 5.9 20.8 7.1 14 2 9.2 9 8.3 12 2Z"
                ></path></svg
              ><svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="15"
                height="15"
              >
                <path
                  d="M12 2l3 6.3 6.9.9-5 4.8 1.2 6.8L12 17.8 5.9 20.8 7.1 14 2 9.2 9 8.3 12 2Z"
                ></path></svg
              ><svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="15"
                height="15"
              >
                <path
                  d="M12 2l3 6.3 6.9.9-5 4.8 1.2 6.8L12 17.8 5.9 20.8 7.1 14 2 9.2 9 8.3 12 2Z"
                ></path></svg
              ><svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="15"
                height="15"
              >
                <path
                  d="M12 2l3 6.3 6.9.9-5 4.8 1.2 6.8L12 17.8 5.9 20.8 7.1 14 2 9.2 9 8.3 12 2Z"
                ></path></svg
              ><svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="15"
                height="15"
              >
                <path
                  d="M12 2l3 6.3 6.9.9-5 4.8 1.2 6.8L12 17.8 5.9 20.8 7.1 14 2 9.2 9 8.3 12 2Z"
                ></path>
              </svg>
            </div>
            <p class="testi-quote">
              Very professional work. Super helpful — they asked the right
              questions upfront and delivered exactly as promised. Will work
              with Doodle Dash Labs again without hesitation.
            </p>
            <div class="testi-who">
              <div class="testi-avatar">MW</div>
              <div>
                <div class="testi-name">Matthew W.</div>
                <div class="testi-role">Founder, United States</div>
              </div>
            </div>
          </div>
          <div class="reveal testi-card" style="transition-delay: 350ms">
            <div class="testi-stars" aria-label="5 out of 5 stars">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="15"
                height="15"
              >
                <path
                  d="M12 2l3 6.3 6.9.9-5 4.8 1.2 6.8L12 17.8 5.9 20.8 7.1 14 2 9.2 9 8.3 12 2Z"
                ></path></svg
              ><svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="15"
                height="15"
              >
                <path
                  d="M12 2l3 6.3 6.9.9-5 4.8 1.2 6.8L12 17.8 5.9 20.8 7.1 14 2 9.2 9 8.3 12 2Z"
                ></path></svg
              ><svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="15"
                height="15"
              >
                <path
                  d="M12 2l3 6.3 6.9.9-5 4.8 1.2 6.8L12 17.8 5.9 20.8 7.1 14 2 9.2 9 8.3 12 2Z"
                ></path></svg
              ><svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="15"
                height="15"
              >
                <path
                  d="M12 2l3 6.3 6.9.9-5 4.8 1.2 6.8L12 17.8 5.9 20.8 7.1 14 2 9.2 9 8.3 12 2Z"
                ></path></svg
              ><svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="15"
                height="15"
              >
                <path
                  d="M12 2l3 6.3 6.9.9-5 4.8 1.2 6.8L12 17.8 5.9 20.8 7.1 14 2 9.2 9 8.3 12 2Z"
                ></path>
              </svg>
            </div>
            <p class="testi-quote">
              Collaborating with Doodle Dash Labs across multiple projects has been a
              pleasure every time. Their commitment, analytical thinking, and
              technical depth consistently stand out. A proactive team that
              meets every deadline with high-quality work.
            </p>
            <div class="testi-who">
              <div class="testi-avatar">AC</div>
              <div>
                <div class="testi-name">Alican Çamlıbel</div>
                <div class="testi-role">Frontend Lead</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>
        .testi-top {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 54px;
          flex-wrap: wrap;
        }
        .testi-h2 {
          font-size: clamp(30px, 3.5vw, 42px);
          text-transform: uppercase;
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin-top: 16px;
        }
        .avatars {
          display: flex;
          align-items: center;
        }
        .av {
          width: 46px;
          height: 46px;
          border-radius: 50%;
          border: 2px solid var(--bg);
          margin-left: -12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-head);
          font-weight: 800;
          font-size: 14px;
          color: #FFFFFF;
          background: linear-gradient(135deg, #ff7a3d, #d8430a);
        }
        .av:first-child {
          margin-left: 0;
        }
        .av.more {
          background: var(--accent);
          color: #FFFFFF;
          font-family: var(--font-mono);
          font-size: 13px;
        }
        .testi-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .testi-card {
          position: relative;
          display: flex;
          flex-direction: column;
          padding: 34px 30px 28px;
          background: var(--card);
          border: 1px solid var(--border);
          transition:
            transform 0.3s,
            border-color 0.3s;
        }
        .testi-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 18px;
          color: var(--accent);
        }
        .testi-quote {
          font-family: var(--font-mono);
          font-size: 14px;
          line-height: 1.7;
          color: var(--white);
          flex: 1;
        }
        .testi-who {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 24px;
          padding-top: 22px;
          border-top: 1px solid var(--border);
        }
        .testi-avatar {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-head);
          font-weight: 800;
          font-size: 15px;
          color: #FFFFFF;
          background: var(--accent);
        }
        .testi-name {
          font-family: var(--font-head);
          font-weight: 800;
          font-size: 14px;
          color: var(--white);
          text-transform: uppercase;
        }
        .testi-role {
          font-family: var(--font-mono);
          font-size: 11.5px;
          color: var(--dim);
          margin-top: 3px;
        }

        @media (max-width: 980px) {
          .testi-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }
        @media (max-width: 600px) {
          .testi-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .testi-card {
            padding: 26px 22px 22px;
          }
          .testi-top {
            align-items: flex-start;
          }
        }
      </style>
    </section>
    <hr class="divider" />
    <section id="engage" class="section-pad">
      <div class="wrap">
        <div class="sec-head reveal" style="transition-delay: 350ms">
          <span class="label"
            ><span class="n">09</span> How to work with us</span
          >
          <h2>Engagement models that fit</h2>
          <p>Flexible ways to bring Doodle Dash Labs into your roadmap.</p>
        </div>
        <div class="eng-grid">
          <div class="reveal eng-card" style="transition-delay: 350ms">
            <div class="eng-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                width="22"
                height="22"
              >
                <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                <path d="M3 9h18M8 4v16"></path>
              </svg>
            </div>
            <h3 class="eng-title">Project-Based</h3>
            <p class="eng-desc">
              Fixed scope, timeline, and budget. Ideal for MVPs and defined
              products.
            </p>
            <a href="#contact" class="eng-more">Learn More →</a>
          </div>
          <div class="reveal eng-card" style="transition-delay: 350ms">
            <div class="eng-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                width="22"
                height="22"
              >
                <path d="M21 12a9 9 0 1 1-3-6.7"></path>
                <path d="M21 4v5h-5"></path>
              </svg>
            </div>
            <h3 class="eng-title">Retainer / Ongoing</h3>
            <p class="eng-desc">
              Monthly hours for continuous development, maintenance, and growth.
            </p>
            <a href="#contact" class="eng-more">Learn More →</a>
          </div>
          <div class="reveal eng-card" style="transition-delay: 350ms">
            <div class="eng-ic">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="1.6"
                width="22"
                height="22"
              >
                <circle cx="9" cy="8" r="3"></circle>
                <path d="M3 20a6 6 0 0 1 12 0M16 6h5M18.5 3.5v5"></path>
              </svg>
            </div>
            <h3 class="eng-title">Team Extension</h3>
            <p class="eng-desc">
              Embed our engineers into your team. Flexible, fast, and
              senior-level.
            </p>
            <a href="#contact" class="eng-more">Learn More →</a>
          </div>
        </div>
      </div>
      <style>
        .eng-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }
        .eng-card {
          padding: 36px 32px;
          background: var(--card);
          border: 1px solid var(--border);
          transition:
            transform 0.3s,
            border-color 0.3s;
          display: flex;
          flex-direction: column;
        }
        .eng-ic {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(29,78,216,0.10);
          border: 1px solid rgba(29,78,216,0.16);
          margin-bottom: 24px;
          color: var(--accent);
        }
        .eng-title {
          font-size: 18px;
          font-weight: 800;
          margin-bottom: 12px;
          text-transform: uppercase;
          letter-spacing: -0.01em;
          color: var(--white);
        }
        .eng-desc {
          font-family: var(--font-head);
          font-size: 14px;
          color: var(--muted);
          line-height: 1.65;
          flex: 1;
          margin-bottom: 24px;
        }
        .eng-more {
          font-family: var(--font-mono);
          font-size: 13px;
          color: var(--accent);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: gap 0.25s;
        }
        .eng-card:hover .eng-more {
          gap: 13px;
        }

        @media (max-width: 980px) {
          .eng-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
        }
        @media (max-width: 600px) {
          .eng-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }
          .eng-card {
            padding: 26px 22px;
          }
        }
      </style>
    </section>
    <section id="faq" class="section-pad">
      <div class="wrap">
        <div class="reveal faq-head" style="transition-delay: 350ms">
          <span class="label" style="justify-content: center"
            ><span class="n">10</span> FAQ</span
          >
          <h2 class="faq-h2">Questions, answered</h2>
        </div>
        <div class="reveal faq-wrap" style="transition-delay: 350ms">
          <div class="faq-item open">
            <button type="button" class="faq-q">
              How long does a typical project take?<span class="faq-pl"></span>
            </button>
            <div class="faq-a">
              <p>
                Most MVPs ship in 8–12 weeks. Larger platforms run longer, but
                we break everything into 1–2 week sprints with a working demo at
                the end of each — so you see real progress continuously, never a
                black box.
              </p>
            </div>
          </div>
          <div class="faq-item">
            <button type="button" class="faq-q">
              How do you price your work?<span class="faq-pl"></span>
            </button>
            <div class="faq-a">
              <p>
                Project-based work is fixed-scope and fixed-price after a short
                discovery. Ongoing work runs on a monthly retainer, and team
                extension is billed per engineer. You'll always know the cost
                before we start — no surprise invoices.
              </p>
            </div>
          </div>
          <div class="faq-item">
            <button type="button" class="faq-q">
              Who owns the code and IP?<span class="faq-pl"></span>
            </button>
            <div class="faq-a">
              <p>
                You do — fully. All code, designs, and intellectual property
                transfer to you. We deliver clean, documented repositories and
                hand over every credential and account at the end of an
                engagement.
              </p>
            </div>
          </div>
          <div class="faq-item">
            <button type="button" class="faq-q">
              How do we stay in the loop during the build?<span
                class="faq-pl"
              ></span>
            </button>
            <div class="faq-a">
              <p>
                You get a shared Slack channel, a live project board, and a
                weekly demo of working software. We're async-friendly across
                time zones, and you can reach the actual engineers on your
                project — not a middle layer.
              </p>
            </div>
          </div>
          <div class="faq-item">
            <button type="button" class="faq-q">
              Do you work with non-technical founders?<span
                class="faq-pl"
              ></span>
            </button>
            <div class="faq-a">
              <p>
                Often. A large share of our clients are non-technical founders.
                We translate technical decisions into plain language, advise on
                trade-offs, and act as your engineering team until you're ready
                to build one in-house.
              </p>
            </div>
          </div>
          <div class="faq-item">
            <button type="button" class="faq-q">
              What happens after launch?<span class="faq-pl"></span>
            </button>
            <div class="faq-a">
              <p>
                We don't disappear at launch. We offer monitoring, maintenance,
                and ongoing development retainers — and if you'd rather take it
                in-house, we'll document everything and onboard your team
                properly.
              </p>
            </div>
          </div>
        </div>
      </div>
      <style>
        .faq-head {
          max-width: 880px;
          margin: 0 auto;
          text-align: center;
          margin-bottom: 60px;
        }
        .faq-h2 {
          font-size: clamp(28px, 3.5vw, 42px);
          text-transform: uppercase;
          font-weight: 800;
          line-height: 1.05;
          margin-top: 16px;
        }
        .faq-wrap {
          max-width: 880px;
          margin: 0 auto;
          border-top: 1px solid var(--border);
        }
        .faq-item {
          border-bottom: 1px solid var(--border);
        }
        .faq-q {
          width: 100%;
          text-align: left;
          background: none;
          border: 0;
          cursor: pointer;
          padding: 24px 0;
          display: flex;
          justify-content: space-between;
          gap: 24px;
          align-items: center;
          font-family: var(--font-head);
          font-weight: 800;
          font-size: 17px;
          color: var(--white);
          text-transform: uppercase;
          letter-spacing: -0.01em;
          transition: color 0.2s;
        }
        .faq-q:hover {
          color: var(--accent);
        }
        .faq-pl {
          position: relative;
          width: 18px;
          height: 18px;
          flex-shrink: 0;
        }
        .faq-pl::before,
        .faq-pl::after {
          content: "";
          position: absolute;
          background: var(--accent);
          transition: transform 0.3s;
        }
        .faq-pl::before {
          top: 8px;
          left: 0;
          width: 18px;
          height: 2px;
        }
        .faq-pl::after {
          left: 8px;
          top: 0;
          width: 2px;
          height: 18px;
        }
        .faq-item.open .faq-pl::after {
          transform: scaleY(0);
        }
        .faq-a {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .faq-item.open .faq-a {
          max-height: 320px;
        }
        .faq-a p {
          padding: 0 40px 26px 0;
          font-family: var(--font-mono);
          font-size: 14px;
          line-height: 1.7;
          color: var(--muted);
        }

        @media (max-width: 760px) {
          .faq-q {
            font-size: 15px;
            padding: 20px 0;
          }
          .faq-a p {
            padding-right: 0;
            font-size: 13.5px;
          }
        }
      </style>
    </section>
    <hr class="divider" />
    <section id="contact" class="section-pad contact-section">
      <div class="wrap">
        <div class="reveal contact-panel" style="transition-delay: 350ms">
          <div class="contact-glow"><div class="glow-orb"></div></div>
          <div class="contact-grid">
            <div class="contact-copy">
              <span class="label"><span class="n">11</span> Contact us</span>
              <h2 class="contact-h2">Transform your brand</h2>
              <p class="contact-sub">
                Ready to start a project? Tell us about it and we'll get back to
                you within 24 hours.
              </p>
              <div class="contact-direct">
                Or reach us directly at<!-- -->
                <a
                  href="mailto:hello@doodledash.uk"
                  style="color: var(--accent)"
                  >hello@doodledash.uk</a
                >
              </div>
            </div>
            <form novalidate="" class="contact-form">
              <div class="form-row-2">
                <div class="field">
                  <label class="field-label" for="cf-name">Name</label
                  ><input
                    id="cf-name"
                    type="text"
                    placeholder="Your name"
                    required=""
                    class="field-input"
                    value=""
                  />
                </div>
                <div class="field">
                  <label class="field-label" for="cf-email">E-mail</label
                  ><input
                    id="cf-email"
                    type="email"
                    placeholder="Your e-mail"
                    required=""
                    class="field-input"
                    value=""
                  />
                </div>
              </div>
              <div class="field">
                <label class="field-label" for="cf-ptype">Project Type</label
                ><select id="cf-ptype" class="field-input field-select">
                  <option
                    value="Web App"
                    style="background: #FFFFFF"
                    selected=""
                  >
                    Web App
                  </option>
                  <option value="Mobile App" style="background: #FFFFFF">
                    Mobile App
                  </option>
                  <option value="AI System" style="background: #FFFFFF">
                    AI System
                  </option>
                  <option value="SaaS" style="background: #FFFFFF">SaaS</option>
                  <option value="Other" style="background: #FFFFFF">
                    Other
                  </option>
                </select>
              </div>
              <div class="field">
                <label class="field-label" for="cf-msg">Message</label
                ><textarea
                  id="cf-msg"
                  placeholder="Your message"
                  rows="5"
                  class="field-input field-textarea"
                ></textarea>
              </div>
              <button type="submit" class="submit-btn">Send message →</button>
            </form>
          </div>
        </div>
      </div>
      <style>
        .contact-section {
          padding-bottom: 120px;
        }
        .contact-panel {
          position: relative;
          overflow: hidden;
          padding: 80px 60px;
          background: var(--card);
          border: 1px solid var(--border);
          border-radius: 16px;
        }
        .contact-glow {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }
        .glow-orb {
          position: absolute;
          width: 720px;
          height: 720px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(29,78,216,0.16),
            transparent 60%
          );
          bottom: -360px;
          right: -160px;
          filter: blur(30px);
        }
        .contact-grid {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: start;
        }
        .contact-h2 {
          font-size: clamp(30px, 3.5vw, 42px);
          font-weight: 800;
          text-transform: uppercase;
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 16px 0 16px;
        }
        .contact-sub {
          font-family: var(--font-mono);
          font-size: 15px;
          color: var(--muted);
          max-width: 380px;
          line-height: 1.7;
        }
        .contact-direct {
          margin-top: 34px;
          font-family: var(--font-mono);
          font-size: 14px;
          color: var(--muted);
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .form-row-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .field-label {
          display: block;
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.04em;
          color: var(--dim);
          margin-bottom: 9px;
        }
        .field-input {
          width: 100%;
          background: var(--bg);
          border: 1px solid var(--border);
          padding: 14px 16px;
          color: var(--white);
          font-family: var(--font-mono);
          font-size: 14.5px;
          transition:
            border-color 0.25s,
            box-shadow 0.25s;
          outline: none;
        }
        .field-input::placeholder {
          color: var(--dim);
        }
        .field-textarea {
          resize: vertical;
          min-height: 118px;
        }
        .field-select {
          appearance: none;
          -webkit-appearance: none;
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23948c81' d='M6 8 0 0h12z'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 16px center;
        }
        .submit-btn {
          font-family: var(--font-mono);
          font-weight: 700;
          font-size: 14px;
          border-radius: 100px;
          padding: 15px 28px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          cursor: pointer;
          background: var(--accent);
          color: #FFFFFF;
          box-shadow:
            0 8px 24px -8px rgba(29,78,216,0.30),
            inset 0 1px 0 rgba(255, 255, 255, 0.25);
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          transition:
            transform 0.25s,
            box-shadow 0.25s,
            background 0.25s;
        }
        .submit-btn:hover {
          background: #1E40AF;
          box-shadow:
            0 12px 32px -8px rgba(29,78,216,0.42),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
        }
        .submit-btn:disabled {
          opacity: 0.7;
        }

        @media (max-width: 980px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }
          .contact-panel {
            padding: 60px 48px;
          }
        }
        @media (max-width: 760px) {
          .contact-panel {
            padding: 48px 26px;
          }
          .form-row-2 {
            grid-template-columns: 1fr;
          }
          .contact-section {
            padding-bottom: 80px;
          }
        }
        @media (max-width: 480px) {
          .contact-panel {
            padding: 32px 18px;
          }
          .field-input {
            font-size: 16px;
          }
        }
      </style>
    </section>
    <footer class="footer">
      <div class="wrap">
        <div class="foot-top">
          <div class="foot-brand">
            <a href="#top" class="brand foot-brand-link"
              ><svg
                class="brand-mark"
                viewBox="0 0 140 100"
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <clipPath id="ddFootTop"><rect x="34" y="0" width="72" height="46"></rect></clipPath>
                </defs>
                <path d="M62 14 A52 38 0 0 1 62 86 Z" stroke="#3B82F6" stroke-width="11" stroke-linejoin="round"></path>
                <path d="M78 14 A52 38 0 0 0 78 86 Z" stroke="#93C5FD" stroke-width="11" stroke-linejoin="round"></path>
                <path d="M62 14 A52 38 0 0 1 62 86 Z" stroke="#3B82F6" stroke-width="11" stroke-linejoin="round" clip-path="url(#ddFootTop)"></path></svg
              ><span class="brand-name"
                >Doodle&nbsp;Dash&nbsp;Labs<span style="color: var(--accent)"
                  >®</span
                ></span
              ></a
            >
            <p class="foot-tagline">
              We Build What's Next — full-stack engineering for the products
              defining tomorrow.
            </p>
          </div>
          <div class="foot-col">
            <h4 class="foot-col-head">Navigate</h4>
            <a href="#services" class="foot-link">Services</a
            ><a href="#work" class="foot-link">Selected Work</a
            ><a href="#about" class="foot-link">About</a
            ><a href="#faq" class="foot-link">FAQ</a
            ><a href="#contact" class="foot-link">Contact</a>
          </div>
          <div class="foot-col">
            <h4 class="foot-col-head">Connect</h4>
            <div class="socials">
              <a href="#" aria-label="GitHub" class="social-icon"
                ><svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="18"
                  height="18"
                >
                  <path
                    d="M12 2C6.5 2 2 6.6 2 12.3c0 4.5 2.9 8.3 6.8 9.7.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1a9.3 9.3 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 3.9-1.4 6.8-5.2 6.8-9.7C22 6.6 17.5 2 12 2Z"
                  ></path></svg></a
              ><a href="#" aria-label="LinkedIn" class="social-icon"
                ><svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="18"
                  height="18"
                >
                  <path
                    d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-.9 1.8-1.9 3.6-1.9 3.9 0 4.6 2.5 4.6 5.8V21h-4v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9V21h-4V9Z"
                  ></path></svg></a
              ><a href="#" aria-label="X" class="social-icon"
                ><svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="18"
                  height="18"
                >
                  <path
                    d="M18.2 2H21l-6.5 7.4L22 22h-6l-4.7-6.1L5.9 22H3l7-8L2 2h6.2l4.2 5.6L18.2 2Zm-1 18h1.7L7.9 3.8H6.1L17.2 20Z"
                  ></path></svg
              ></a>
            </div>
          </div>
        </div>
        <div class="foot-bottom">
          <span
            >©
            <!-- -->2026<!-- -->
            Doodle Dash Labs®. All rights reserved.</span
          ><span>We Build What's Next</span>
        </div>
      </div>
      <style>
        .footer {
          border-top: 1px solid var(--border);
          padding: 60px 0 34px;
          position: relative;
        }
        .foot-top {
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 40px;
          align-items: start;
          margin-bottom: 48px;
        }
        .foot-brand-link {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-bottom: 18px;
        }
        .foot-tagline {
          font-family: var(--font-mono);
          font-size: 14px;
          color: var(--muted);
          max-width: 280px;
          line-height: 1.6;
        }
        .foot-col-head {
          font-family: var(--font-mono);
          font-size: 12px;
          letter-spacing: 0.04em;
          color: var(--dim);
          margin-bottom: 18px;
          font-weight: 400;
        }
        .foot-link {
          display: block;
          font-family: var(--font-mono);
          font-size: 14px;
          color: var(--muted);
          margin-bottom: 12px;
          transition: color 0.2s;
        }
        .foot-link:hover {
          color: var(--accent);
        }
        .socials {
          display: flex;
          gap: 12px;
        }
        .social-icon {
          width: 40px;
          height: 40px;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--muted);
          transition:
            color 0.25s,
            border-color 0.25s,
            background 0.25s;
        }
        .social-icon:hover {
          color: var(--white);
          border-color: var(--accent);
          background: rgba(29,78,216,0.07);
        }
        .foot-bottom {
          border-top: 1px solid var(--border);
          padding-top: 28px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 14px;
        }
        .foot-bottom span {
          font-family: var(--font-mono);
          font-size: 12.5px;
          color: var(--dim);
        }

        @media (max-width: 980px) {
          .foot-top {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
        }
        @media (max-width: 600px) {
          .foot-top {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .footer {
            padding: 48px 0 28px;
          }
          .foot-top {
            margin-bottom: 32px;
          }
          .foot-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      </style>
    </footer>
    <!--$--><!--/$-->
<style>
  /* caret blink for hero typewriter */
  .type-caret{ animation: tblink 1s step-end infinite; }
  @keyframes tblink{ 0%,100%{opacity:1} 50%{opacity:0} }
  .menu-btn.open span:nth-child(1){ transform: translateY(7px) rotate(45deg); }
  .menu-btn.open span:nth-child(2){ opacity: 0; }
  .menu-btn.open span:nth-child(3){ transform: translateY(-7px) rotate(-45deg); }
  @media (prefers-reduced-motion: reduce){ .type-caret{ animation:none; } }
</style>
<style id="brand-audit">
  /* ============ DOODLE DASH LABS — BRAND CONSISTENCY LAYER ============ */

  /* Container width to brand spec */
  :root {
    --maxw: 1200px;
    /* Legibility: brighter body + secondary text for clearer reading */
    --muted: #475569;
    --dim: #5A6B85;
  }

  /* Dot-grid texture on all dark sections (fixed) — hero gradient paints over it */
  html {
    background-color: var(--bg);
    background-image: radial-gradient(rgba(15,23,42,0.05) 1px, transparent 1.4px);
    background-size: 22px 22px;
    background-position: -1px -1px;
    background-attachment: fixed;
  }

  /* Typography: body prose → IBM Plex Sans; headings → Archivo; labels → Space Mono */
  body { font-family: var(--font-body); }

  /* Professional heading refinement for the clean theme:
     Archivo, sentence case, tighter tracking — no industrial all-caps */
  h1, h2, h3, h4, h5, h6,
  .hero-h1, .sec-head h2, .svc-title, .case-title, .diff-title,
  .highlight-title, .proc-title, .about-title, .testi-h2, .contact-h2,
  .faq-h2, .faq-q, .stat-big, .why-title, .ind-title, .eng-title,
  .stmt-big, .brand-name, .work-h2 {
    font-family: var(--font-head);
    text-transform: none;
    letter-spacing: -0.022em;
    font-weight: 700;
  }
  .hero-h1, .stmt-big { font-weight: 800; letter-spacing: -0.03em; }
  .svc-title, .case-title, .diff-title, .highlight-title,
  .why-title, .ind-title, .eng-title, .faq-q { font-weight: 600; letter-spacing: -0.015em; }
  /* Keep small eyebrow / mono labels uppercase for structure */
  .label, .card-badge, .case-sector, .testi-role, .nav-link-item,
  .nav-cta, .proc-num, .impact-lbl { text-transform: uppercase; }
  /* Broad sweep: all running text + form controls → IBM Plex Sans */
  p, li, dd, dt, blockquote, figcaption, address,
  input, textarea, select, option,
  .svc-desc, .case-card p, .diff-desc, .highlight-desc, .proc-desc,
  .why-desc, .ind-desc, .engage-desc, .eng-desc, .about-body, .about-lead p,
  .testi-quote, .testi-role, .faq-a, .contact-sub, .foot-tagline,
  .foot-link, .stmt-cols p, .case-summary, .case-desc, .hero-sub,
  .sec-head p, .impact-sub, .trust-badge, .cap-tag {
    font-family: var(--font-body);
  }
  /* Keep intentional accents on their own fonts */
  h1, h2, h3, h4, h5, h6,
  .hero-h1, .sec-head h2, .svc-title, .case-title, .diff-title,
  .highlight-title, .proc-title, .about-title, .testi-h2, .contact-h2,
  .brand-name, .stmt-big { font-family: var(--font-head); }
  .label, .label .n, .diff-m, .case-sector, .svc-num,
  .proc-num, .impact-lbl, .nav-link-item, .nav-cta { font-family: var(--font-mono); }
  /* Form fields → IBM Plex Sans (beat the class-level mono rule) */
  .field-input, .field-input.field-select, .field-input.field-textarea,
  input.field-input, select.field-input, textarea.field-input { font-family: var(--font-body); }
  .sec-head p, .hero-sub, .svc-desc, .stmt-cols p, .foot-tagline,
  .testi-quote, .faq-a, .contact-sub, .about-body, .about-lead p,
  .why-desc, .ind-desc, .case-desc, .case-summary, .engage-desc, .proc-desc {
    font-family: var(--font-body);
    letter-spacing: 0;
  }

  /* ============================================================
     CONSISTENT TYPE SCALE (readable, professional)
     Lead/subtitle ...... 17px / 1.62
     Body paragraph ..... 16px / 1.7
     Quote .............. 17px / 1.6
     Nav / CTA .......... 15px
     Tags / pills ....... 13px
     Footer links ....... 14.5px
     Eyebrow label ...... 11.5px
     ============================================================ */

  /* Lead text / section subtitles */
  .sec-head p, .hero-sub, .contact-sub, .about-lead p {
    font-size: 17px; line-height: 1.62; color: #475569;
  }
  /* Standard body paragraphs */
  .svc-desc, .case-body p, .proc-desc, .ind-desc, .why-desc,
  .engage-desc, .eng-desc, .about-body, .diff-desc, .highlight-desc, .faq-a {
    font-size: 16px; line-height: 1.7; color: #475569;
  }
  .stmt-cols p { font-size: 16px; line-height: 1.76; }
  .faq-a { color: #52607A; }
  /* Pull-quote testimonials read slightly larger */
  .testi-quote { font-size: 17px; line-height: 1.6; color: #334155; }
  /* Nav + interactive mono text */
  .nav-link-item, .nav-cta, .mobile-link { font-size: 15px; }
  .btn { font-size: 14.5px; }
  /* Mono tags / pills / metric labels \u2014 unified */
  .case-tags span, .cap-tag, .impact-lbl, .trust-badge,
  .tech-pill, .case-sector, .testi-role { font-size: 13px; }
  .svc-num, .case-sector { letter-spacing: 0.08em; }
  /* Footer */
  .foot-link, .foot-col-head, .foot-tagline { font-size: 14.5px; color: #52607A; }
  .foot-tagline { line-height: 1.6; }
  /* Hero status console + mini dashboard cards (decorative, kept compact but legible) */
  .flow-card p { font-size: 12.5px; color: #475569; }
  .card-badge { font-size: 10.5px; color: #5A6B85; }
  .typewriter-container { font-size: 13.5px; }

  @media (max-width: 760px){
    .sec-head p, .hero-sub, .contact-sub, .about-lead p { font-size: 16px; }
    .svc-desc, .case-body p, .proc-desc, .ind-desc, .why-desc,
    .engage-desc, .eng-desc, .about-body, .diff-desc, .highlight-desc, .faq-a,
    .stmt-cols p { font-size: 15.5px; }
    .testi-quote { font-size: 16px; }
  }
  h1, h2, h3, h4, .brand-name, .hero-h1, .sec-head h2,
  .svc-title, .case-title, .testi-h2, .contact-h2, .about-title {
    font-family: var(--font-head);
  }

  /* Section labels — Space Mono · 11.5px · accent · 0.15em · uppercase */
  .label {
    font-family: var(--font-mono);
    font-size: 11.5px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--accent);
    gap: 7px;
  }
  .label .n { color: rgba(29,78,216,0.55); }

  /* Card consistency: #FFFFFF bg · 12px radius · 0.08 border · 28px pad · -4px hover */
  .svc-card.svc-card { background: #FFFFFF; border-radius: 12px; padding: 28px; border: 1px solid var(--border); box-shadow: 0 1px 2px rgba(15,23,42,0.04), 0 6px 18px -12px rgba(15,23,42,0.18); transition: transform .2s ease, border-color .2s ease, box-shadow .2s ease, background .2s ease; }
  .svc-card:hover { transform: translateY(-4px); background: #FFFFFF; box-shadow: 0 10px 30px -12px rgba(15,23,42,0.22), 0 0 0 1px rgba(29,78,216,0.12); }

  /* Structured & confident: soft elevation on key cards + light surfaces */
  .case-card, .testi-card, .eng-card, .flow-card, .vis-card, .why-card, .ind-card, .diff, .highlight, .contact-card {
    box-shadow: 0 1px 2px rgba(15,23,42,0.04), 0 6px 18px -14px rgba(15,23,42,0.16);
  }
  .typewriter-container { box-shadow: inset 0 0 0 1px rgba(29,78,216,0.08); color: #1E293B; }
  .typewriter-container .type-text, #typeText { color: var(--accent); }
  .site-nav { border-bottom: 1px solid transparent; }
  /* On-accent text stays white for contrast */
  .btn-primary, .submit-btn, #toTop, .nav-cta.btn-primary { color: #FFFFFF; }

  /* Active nav link — orange underline (scrollspy) */
  .nav-link-item { position: relative; }
  .nav-link-item.active { color: var(--white); }
  .nav-link-item.active::after {
    content: ""; position: absolute; left: 0; right: 0; bottom: -7px;
    height: 2px; background: var(--accent); border-radius: 2px;
  }

  /* Page load fade-in */
  body { opacity: 0; transition: opacity .4s ease; }
  body.loaded { opacity: 1; }

  /* Back-to-top button */
  #toTop {
    position: fixed; right: 26px; bottom: 26px; z-index: 200;
    width: 48px; height: 48px; border-radius: 50%; border: 0;
    background: var(--accent); color: #FFFFFF; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    opacity: 0; transform: translateY(14px) scale(.85); pointer-events: none;
    transition: opacity .25s ease, transform .25s ease, background .2s ease;
    box-shadow: 0 8px 22px -8px rgba(29,78,216,0.45);
  }
  #toTop.show { opacity: 1; transform: none; pointer-events: auto; }
  #toTop:hover { background: var(--accent-deep); }
  #toTop svg { width: 20px; height: 20px; }
  @media (max-width: 600px){ #toTop { right: 16px; bottom: 16px; } }
</style>
<noscript><style>body{opacity:1 !important}</style></noscript>
<style id="depth-theme">
  /* ============================================================
     DEPTH LAYER — rhythm, richness, grounding (still clean/light)
     ============================================================ */

  /* Section rhythm: alternating textured-tint vs clean-white bands.
     The bands replace the flat single-color page so it stops feeling sterile. */
  #services, #process, #industries, #about, #engage {
    background: #FFFFFF;
  }
  #work, #testimonials, #faq, .tech-section, #why {
    background:
      radial-gradient(rgba(15,23,42,0.04) 1px, transparent 1.5px) 0 0 / 24px 24px,
      linear-gradient(180deg, #E7EEFA 0%, #DDE7F6 100%);
    box-shadow: inset 0 1px 0 rgba(255,255,255,0.7), inset 0 -1px 0 rgba(15,23,42,0.05);
  }
  .statement, .logos-section { background: transparent; }
  /* Bands separate sections now — retire the hairline dividers */
  hr.divider { display: none; }

  /* Richer hero: layered accent glow + deeper wash + crisper base */
  .hero {
    background:
      radial-gradient(900px 520px at 78% -8%, rgba(29,78,216,0.16), transparent 60%),
      radial-gradient(700px 460px at 12% 8%, rgba(59,130,246,0.12), transparent 62%),
      linear-gradient(180deg, #FFFFFF 0%, #E9F0FB 55%, #DCE7F8 100%) !important;
    border-bottom: 1px solid rgba(15,23,42,0.08);
  }

  /* Eyebrow labels → accent pill chips (more designed, adds depth) */
  .label {
    background: rgba(29,78,216,0.09);
    border: 1px solid rgba(29,78,216,0.18);
    padding: 6px 13px 6px 11px;
    border-radius: 100px;
    gap: 8px;
    font-size: 11px;
    color: var(--accent);
  }
  .label::before { content: ""; width: 6px; height: 6px; border-radius: 50%; background: var(--accent); display: inline-block; }
  .label::after { content: none; }
  .label .n { color: rgba(29,78,216,0.6); }

  /* Section headings: a touch more presence + clearer hierarchy */
  .sec-head h2, .testi-h2, .faq-h2, .about-title, .contact-h2 { color: #0B1220; }
  .sec-head p, .hero-sub, .contact-sub, .about-lead p { color: #3F4D63; }

  /* Cards: subtle sheen + more confident elevation + accent keyline */
  .svc-card.svc-card,
  .case-card, .testi-card, .eng-card, .why-card, .ind-card, .diff, .highlight {
    background: linear-gradient(180deg, #FFFFFF 0%, #FBFCFE 100%);
    box-shadow: 0 1px 2px rgba(15,23,42,0.05), 0 10px 26px -16px rgba(15,23,42,0.22);
  }
  .svc-card.svc-card { position: relative; }
  .svc-card.svc-card::after {
    content: ""; position: absolute; left: 0; top: 0; height: 3px; width: 100%;
    background: linear-gradient(90deg, var(--accent), #60A5FA);
    border-radius: 12px 12px 0 0; opacity: 0; transition: opacity .22s ease;
  }
  .svc-card.svc-card:hover::after { opacity: 1; }
  .svc-card.svc-card:hover {
    box-shadow: 0 16px 38px -18px rgba(29,78,216,0.40), 0 0 0 1px rgba(29,78,216,0.22);
  }

  /* Tech pills → clean chips that read on the tinted band */
  .tech-pill {
    background: #FFFFFF !important;
    border: 1px solid rgba(15,23,42,0.10) !important;
    box-shadow: 0 1px 2px rgba(15,23,42,0.05);
  }

  /* ---- Navy stat band (mid-page anchor) ---- */
  .impact-band {
    background:
      radial-gradient(600px 300px at 85% 0%, rgba(59,130,246,0.28), transparent 60%),
      linear-gradient(135deg, #0C1B38 0%, #122B52 100%);
    border-radius: 16px;
    margin: 8px 12px;
    overflow: hidden;
  }
  .impact-band .impact-num span,
  .impact-band .impact-num { color: #FFFFFF; }
  .impact-band .impact-num span { background: linear-gradient(135deg,#93C5FD,#FFFFFF); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; }
  .impact-band .impact-grid { background: rgba(255,255,255,0.12) !important; border: 1px solid rgba(255,255,255,0.14) !important; }
  .impact-band .impact-cell { background: transparent !important; }
  .impact-band .impact-cell:hover { background: rgba(255,255,255,0.05) !important; }
  .impact-band .impact-lbl { color: rgba(255,255,255,0.72) !important; }

  /* ---- Navy footer (page anchor) ---- */
  .footer {
    background:
      radial-gradient(700px 360px at 88% 120%, rgba(59,130,246,0.20), transparent 60%),
      linear-gradient(180deg, #0C1B38 0%, #0A152C 100%);
    border-top: 1px solid rgba(15,23,42,0.12);
    margin-top: 8px;
    color: rgba(255,255,255,0.62);
  }
  .footer .brand-name { color: #FFFFFF !important; }
  .footer .foot-tagline { color: rgba(255,255,255,0.6) !important; }
  .footer .foot-col-head { color: rgba(255,255,255,0.45) !important; }
  .footer .foot-link { color: rgba(255,255,255,0.66) !important; }
  .footer .foot-link:hover { color: #93C5FD !important; }
  .footer .social-icon { border-color: rgba(255,255,255,0.16); color: rgba(255,255,255,0.7); }
  .footer .social-icon:hover { color: #FFFFFF; border-color: #3B82F6; background: rgba(59,130,246,0.16); }
  .footer .foot-bottom { border-top-color: rgba(255,255,255,0.12); }
  .footer .foot-bottom span { color: rgba(255,255,255,0.45); }
  .footer .foot-brand-logo svg path[stroke] { stroke: #93C5FD; }

  @media (max-width: 600px){
    .impact-band, .footer { margin-left: 0; margin-right: 0; border-radius: 0; }
  }

  /* ============================================================
     HERO VISUAL — abstract vector composition (layered glass + shapes)
     ============================================================ */
  .hero-art { position: relative; width: 100%; max-width: 460px; margin: 0 auto; aspect-ratio: 1 / 1.04; }
  .art-blob { position:absolute; border-radius:50%; filter:blur(46px); pointer-events:none; }
  .art-blob { width:64%; height:64%; top:6%; left:12%; background:radial-gradient(circle at 40% 35%, rgba(37,99,235,0.55), rgba(37,99,235,0) 70%); animation:artFloat 16s ease-in-out infinite; }
  .art-blob-2 { width:50%; height:50%; bottom:4%; right:6%; background:radial-gradient(circle at 50% 50%, rgba(96,165,250,0.5), rgba(96,165,250,0) 70%); animation:artFloat 20s ease-in-out infinite reverse; }
  .art-hex { position:absolute; width:80%; height:80%; top:10%; left:10%; animation:artSpin 64s linear infinite; }
  .art-ring { position:absolute; width:30%; height:30%; top:13%; right:9%; border:2px solid rgba(29,78,216,0.18); border-radius:50%; animation:artFloat 14s ease-in-out infinite; }
  .art-dotgrid { position:absolute; width:118px; height:118px; bottom:9%; left:5%; background-image:radial-gradient(rgba(29,78,216,0.28) 1.6px, transparent 1.6px); background-size:16px 16px; transform:rotate(-12deg); opacity:.7; }
  .art-stack { position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:52%; height:60%; }
  .art-panel { position:absolute; inset:0; border-radius:28px; border:1px solid rgba(255,255,255,0.5); will-change:transform; transform-style:preserve-3d; -webkit-backface-visibility:hidden; backface-visibility:hidden; }
  .art-panel.p1 { background:linear-gradient(150deg,#2563EB,#1E3A8A); box-shadow:0 32px 64px -22px rgba(29,78,216,0.6); transform:rotate(-9deg) translate(-6%,4%); animation:artTilt1 9s ease-in-out infinite; }
  .art-panel.p2 { background:linear-gradient(150deg, rgba(112,178,252,0.94), rgba(37,99,235,0.86)); transform:rotate(7deg) translate(8%,-3%); animation:artTilt2 11s ease-in-out infinite; }
  .art-panel.p3 { background:linear-gradient(150deg, rgba(255,255,255,0.97), rgba(226,236,250,0.9)); transform:rotate(-2deg); box-shadow:0 26px 54px -24px rgba(15,23,42,0.4); animation:artTilt3 10s ease-in-out infinite; }
  /* Content on the front glass panel */
  .art-panel.p3 { display:flex; flex-direction:column; padding:22px 22px 20px; gap:9px; z-index:4; }
  .panel-top { display:flex; align-items:center; justify-content:space-between; }
  .panel-glyph { width:38px; height:38px; border-radius:11px; background:linear-gradient(150deg,#2563EB,#1E3A8A); display:flex; align-items:center; justify-content:center; box-shadow:0 8px 18px -8px rgba(29,78,216,0.7); }
  .panel-glyph svg { width:21px; height:21px; }
  .panel-live { display:inline-flex; align-items:center; gap:6px; font-family:var(--font-mono); font-size:9.5px; letter-spacing:0.12em; text-transform:uppercase; color:#1E40AF; background:rgba(29,78,216,0.10); border:1px solid rgba(29,78,216,0.20); padding:4px 9px; border-radius:100px; }
  .panel-live i { width:6px; height:6px; border-radius:50%; background:#1D4ED8; box-shadow:0 0 0 0 rgba(29,78,216,0.5); animation:panelPulse 2s ease-out infinite; }
  @keyframes panelPulse { 0%{box-shadow:0 0 0 0 rgba(29,78,216,0.5)} 70%{box-shadow:0 0 0 7px rgba(29,78,216,0)} 100%{box-shadow:0 0 0 0 rgba(29,78,216,0)} }
  .panel-title { font-family:var(--font-head); font-weight:700; font-size:22px; letter-spacing:-0.02em; color:#0B1220; margin-top:6px; }
  .panel-sub { font-family:var(--font-mono); font-size:11px; letter-spacing:0.06em; color:#5A6B85; text-transform:uppercase; }
  .panel-bars { display:flex; flex-direction:column; gap:7px; margin-top:8px; }
  .panel-bars i { height:7px; border-radius:100px; background:linear-gradient(90deg,#2563EB,#60A5FA); display:block; transform-origin:left; animation:panelGrow 1.1s cubic-bezier(.2,.7,.2,1) both; }
  .panel-bars i:nth-child(2){ animation-delay:.15s; opacity:.72; }
  .panel-bars i:nth-child(3){ animation-delay:.3s; opacity:.5; }
  @keyframes panelGrow { from{ transform:scaleX(0);} to{ transform:scaleX(1);} }
  /* Floating capability chips around the panel */
  .art-chip { position:absolute; z-index:6; display:inline-flex; align-items:center; gap:7px; white-space:nowrap; background:#fff; border:1px solid rgba(15,23,42,0.10); border-radius:100px; padding:7px 13px; font-family:var(--font-mono); font-size:11.5px; color:#0F172A; font-weight:500; box-shadow:0 10px 24px -12px rgba(15,23,42,0.4); will-change:transform; -webkit-backface-visibility:hidden; backface-visibility:hidden; }
  .art-chip i { width:7px; height:7px; border-radius:50%; background:var(--accent); }
  .art-chip.chip-1 { top:12%; left:-2%; animation:artFloat 8s ease-in-out infinite; }
  .art-chip.chip-2 { top:44%; right:-6%; animation:artFloat 10s ease-in-out infinite reverse; }
  .art-chip.chip-3 { bottom:9%; left:6%; animation:artFloat 9s ease-in-out infinite; }
  .art-orb { position:absolute; border-radius:50%; background:radial-gradient(circle at 35% 35%, #fff, #2563EB); box-shadow:0 6px 16px -4px rgba(29,78,216,0.6); z-index:5; will-change:transform; -webkit-backface-visibility:hidden; backface-visibility:hidden; }
  .art-orb.o1 { width:18px; height:18px; top:15%; left:19%; animation:artFloat 7s ease-in-out infinite; }
  .art-orb.o2 { width:12px; height:12px; bottom:19%; left:25%; animation:artFloat 9s ease-in-out infinite reverse; }
  .art-orb.o3 { width:22px; height:22px; bottom:13%; right:15%; animation:artFloat 8s ease-in-out infinite; }
  @keyframes artFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }
  @keyframes artSpin { to { transform:rotate(360deg); } }
  @keyframes artTilt1 { 0%,100%{transform:rotate(-9deg) translate(-6%,4%)} 50%{transform:rotate(-12deg) translate(-6%,1%)} }
  @keyframes artTilt2 { 0%,100%{transform:rotate(7deg) translate(8%,-3%)} 50%{transform:rotate(10deg) translate(8%,-6%)} }
  @keyframes artTilt3 { 0%,100%{transform:rotate(-2deg)} 50%{transform:rotate(1deg)} }

  /* Floating decorative vectors across the hero */
  .hero-vectors { position: absolute; inset: 0; z-index: 1; pointer-events: none; }
  .hero-vectors .hv { position: absolute; opacity: 0.9; }
  .hv-hex  { width: 56px; height: 56px; top: 20%;  left: 7%;  animation: hvFloat 14s ease-in-out infinite; }
  .hv-tri  { width: 46px; height: 46px; bottom: 16%; left: 18%; animation: hvFloat 18s ease-in-out infinite reverse; }
  .hv-ring { width: 70px; height: 70px; border: 2px solid rgba(29,78,216,0.14); border-radius: 50%; top: 12%; right: 30%; animation: hvFloat 16s ease-in-out infinite; }
  .hv-sq   { width: 26px; height: 26px; border: 2px solid rgba(29,78,216,0.16); border-radius: 7px; bottom: 22%; right: 8%; transform: rotate(18deg); animation: hvFloat 20s ease-in-out infinite reverse; }
  .hv-plus { font-family: var(--font-mono); font-size: 30px; font-weight: 700; color: rgba(29,78,216,0.18); top: 62%; left: 6%; animation: hvFloat 15s ease-in-out infinite; }
  .hv-plus-2 { top: 16%; right: 6%; font-size: 22px; animation-duration: 19s; }
  @keyframes hvFloat { 0%,100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-18px) rotate(8deg); } }
  .hv-sq { animation-name: hvFloatSq; }
  @keyframes hvFloatSq { 0%,100% { transform: translateY(0) rotate(18deg); } 50% { transform: translateY(-16px) rotate(30deg); } }

  @media (max-width: 900px){
    .hero-vectors { display: none; }
    .hero-art { max-width: 360px; }
  }
  @media (prefers-reduced-motion: reduce){
    .hero-art *, .hero-vectors .hv { animation: none !important; }
  }
</style>`;
