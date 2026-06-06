export default function BgFx() {
  return (
    <>
      <div aria-hidden="true" style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none", overflow: "hidden" }}>
        <div className="grain" />
      </div>

      <style>{`
        .grain {
          position: absolute;
          inset: -50%;
          opacity: 0.06;
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
        @media (prefers-reduced-motion: reduce) {
          .grain { animation: none !important; }
        }
      `}</style>
    </>
  );
}
