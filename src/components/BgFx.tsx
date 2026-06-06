export default function BgFx() {
  return (
    <>
      <div aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none", overflow: "hidden" }}>
        <div className="grain" />
        <div className="glow-sphere sphere-1" />
        <div className="glow-sphere sphere-2" />
      </div>

      <style>{`
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
          background: radial-gradient(circle, rgba(224, 90, 31, 0.035) 0%, transparent 70%);
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
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(120px, 90px) scale(1.1); }
        }
        @keyframes float2 {
          0% { transform: translate(0, 0) scale(1); }
          100% { transform: translate(-100px, -60px) scale(0.9); }
        }
        @keyframes grain {
          0%   { transform: translate(0, 0); }
          20%  { transform: translate(-4%, 3%); }
          40%  { transform: translate(3%, -4%); }
          60%  { transform: translate(-3%, 2%); }
          80%  { transform: translate(4%, -2%); }
          100% { transform: translate(0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .grain, .sphere-1, .sphere-2 { animation: none !important; }
        }
      `}</style>
    </>
  );
}
