import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.ogImageAlt;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background:
            "radial-gradient(900px 520px at 82% -10%, rgba(59,130,246,0.45), transparent 60%), linear-gradient(135deg, #0C1B38 0%, #122B52 100%)",
          color: "#FFFFFF",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand lockup */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 76,
              height: 76,
              borderRadius: 20,
              background: "linear-gradient(150deg, #2563EB, #1E3A8A)",
              boxShadow: "0 16px 40px -12px rgba(37,99,235,0.8)",
              fontSize: 38,
              fontWeight: 800,
              letterSpacing: -2,
            }}
          >
            DD
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 26,
              fontWeight: 700,
              letterSpacing: 6,
              color: "rgba(255,255,255,0.92)",
            }}
          >
            DOODLE DASH LABS
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              fontSize: 108,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -4,
            }}
          >
            <span>We build what&#39;s&nbsp;</span>
            <span
              style={{
                background: "linear-gradient(135deg, #60A5FA, #FFFFFF)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              next.
            </span>
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 32,
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.78)",
              maxWidth: 900,
            }}
          >
            Web apps, mobile apps, AI agents &amp; SaaS platforms — engineered
            end-to-end, from architecture to launch.
          </div>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 600,
              color: "#93C5FD",
            }}
          >
            doodledash.uk
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            {["Web", "Mobile", "AI Agents", "SaaS"].map((t) => (
              <div
                key={t}
                style={{
                  display: "flex",
                  padding: "10px 20px",
                  borderRadius: 100,
                  fontSize: 22,
                  color: "rgba(255,255,255,0.9)",
                  background: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
