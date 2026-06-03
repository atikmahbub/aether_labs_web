export default function BgFx() {
  return (
    <>
      {/* Fixed atmosphere layer — sits behind everything */}
      <div aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none", overflow: "hidden" }}>
        {/* Aurora blobs */}
        <div className="aur aur1" />
        <div className="aur aur2" />
        <div className="aur aur3" />
        {/* Cinematic vignette */}
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 100% 80% at 50% 30%, transparent 40%, rgba(2,4,9,0.55) 100%)" }} />
        {/* Film grain */}
        <div className="grain" />
      </div>

      {/* Editorial column guides */}
      <div aria-hidden="true" className="guides" />

      <style>{`
        .aur {
          position: absolute;
          border-radius: 50%;
          filter: blur(130px);
          opacity: 0.20;
          will-change: transform;
        }
        .aur1 {
          width: 60vw; height: 60vw;
          background: radial-gradient(circle, #00e5cc, transparent 62%);
          top: -18vw; left: -14vw;
          animation: aurd1 34s ease-in-out infinite;
        }
        .aur2 {
          width: 55vw; height: 55vw;
          background: radial-gradient(circle, #7b5eff, transparent 62%);
          top: 38%; right: -18vw;
          animation: aurd2 40s ease-in-out infinite;
        }
        .aur3 {
          width: 50vw; height: 50vw;
          background: radial-gradient(circle, #0a84ff, transparent 62%);
          bottom: -16vw; left: 30%;
          animation: aurd3 46s ease-in-out infinite;
        }
        @keyframes aurd1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(8vw, 6vw); }
        }
        @keyframes aurd2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(-7vw, -5vw); }
        }
        @keyframes aurd3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(5vw, -7vw); }
        }
        .grain {
          position: absolute;
          inset: -50%;
          opacity: 0.05;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 170px 170px;
          animation: grain 7s steps(6) infinite;
        }
        @keyframes grain {
          0%   { transform: translate(0, 0); }
          20%  { transform: translate(-4%, 3%); }
          40%  { transform: translate(3%, -4%); }
          60%  { transform: translate(-3%, 2%); }
          80%  { transform: translate(4%, -2%); }
          100% { transform: translate(0, 0); }
        }
        .guides {
          position: fixed;
          top: 0; bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 1200px;
          z-index: -1;
          pointer-events: none;
        }
        .guides::before, .guides::after {
          content: "";
          position: absolute;
          top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(180deg, transparent, rgba(255,255,255,0.05) 12%, rgba(255,255,255,0.05) 88%, transparent);
        }
        .guides::before { left: 0; }
        .guides::after { right: 0; }
        @media (max-width: 1264px) { .guides { display: none; } }
        @media (prefers-reduced-motion: reduce) {
          .aur, .grain { animation: none !important; }
        }
      `}</style>
    </>
  );
}
