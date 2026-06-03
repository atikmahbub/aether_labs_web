"use client";

import { useEffect } from "react";

const testimonials = [
  {
    quote: "Aether Labs took our half-formed idea and shipped a production SaaS in eleven weeks. The weekly demos kept us in control the entire way — no surprises, no silence.",
    name: "Maya Rodriguez",
    role: "Founder & CEO, Loomstack",
    initials: "MR",
  },
  {
    quote: "Their AI team integrated a RAG pipeline into our support stack that actually resolves tickets. Clean architecture, fully documented, and handed over without a hitch.",
    name: "David Chen",
    role: "VP Engineering, Northpeak",
    initials: "DC",
  },
  {
    quote: "We embedded two of their senior engineers into our team for a quarter. They onboarded in days and lifted the whole team's bar for code quality. Genuinely senior people.",
    name: "Sara Patel",
    role: "Head of Product, Vela Health",
    initials: "SP",
  },
];

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
    <path d="M12 2l3 6.3 6.9.9-5 4.8 1.2 6.8L12 17.8 5.9 20.8 7.1 14 2 9.2 9 8.3 12 2Z" />
  </svg>
);

export default function Testimonials() {
  useEffect(() => {
    const els = document.querySelectorAll("#testimonials .reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("in"), i * 90);
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials" className="section-pad">
      <div className="wrap-inner">
        <div className="reveal sec-head-mb" style={{ maxWidth: 680 }}>
          <span className="section-label">
            <span style={{ width: 22, height: 1, background: "linear-gradient(90deg,transparent,var(--cyan))", display: "inline-block", flexShrink: 0 }} />
            <span className="label-n">08</span>Client Feedback
          </span>
          <h2 className="sec-h2">Trusted by teams who ship.</h2>
          <p className="sec-p">What founders and product leaders say after working with Aether Labs.</p>
        </div>

        <div className="testi-grid">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="reveal testi-card"
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              <div style={{ fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 64, lineHeight: 0.6, color: "var(--cyan)", opacity: 0.25, marginBottom: 8 }}>&ldquo;</div>
              <div style={{ display: "flex", gap: 3, marginBottom: 18, color: "var(--cyan)" }} aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--heading)", flex: 1 }}>{t.quote}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginTop: 26, paddingTop: 22, borderTop: "1px solid var(--border)" }}>
                <div style={{
                  width: 46, height: 46, borderRadius: "50%", flexShrink: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontFamily: "var(--font-head)", fontWeight: 700, fontSize: 16, color: "#021712",
                  background: "linear-gradient(135deg,var(--cyan),var(--violet))",
                }}>
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-head)", fontWeight: 600, fontSize: 15.5, color: "var(--heading)", letterSpacing: "-0.01em" }}>{t.name}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11.5, letterSpacing: "0.04em", color: "var(--body-dim)", marginTop: 2 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testi-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        .testi-card {
          position: relative; display: flex; flex-direction: column;
          padding: 36px 32px 30px; border-radius: var(--r);
          background: var(--surface); border: 1px solid var(--border);
          backdrop-filter: blur(14px); transition: transform 0.3s, border-color 0.3s;
        }
        @media (max-width: 980px) { .testi-grid { grid-template-columns: repeat(2,1fr); gap: 16px; } }
        @media (max-width: 600px) {
          .testi-grid { grid-template-columns: 1fr; gap: 14px; }
          .testi-card { padding: 26px 22px 22px; }
        }
      `}</style>
    </section>
  );
}
