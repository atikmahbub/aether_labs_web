"use client";

import { useEffect } from "react";

const steps = [
  { num: "01", icon: "🔍", title: "Discovery", desc: "Understand your goals, users, and constraints." },
  { num: "02", icon: "🎨", title: "Design", desc: "Wireframes, prototypes, and design systems." },
  { num: "03", icon: "🛠️", title: "Build", desc: "Iterative development with weekly demos." },
  { num: "04", icon: "🧪", title: "Test & QA", desc: "Rigorous testing across devices and edge cases." },
  { num: "05", icon: "🚀", title: "Launch & Scale", desc: "Deployment, monitoring, and ongoing support." },
];

export default function Process() {
  useEffect(() => {
    const els = document.querySelectorAll("#process .reveal");
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
    <section id="process" className="section-pad">
      <div className="wrap-inner">
        <div className="reveal sec-head-mb" style={{ maxWidth: 680 }}>
          <span className="section-label">
            <span style={{ width: 22, height: 1, background: "linear-gradient(90deg,transparent,var(--cyan))", display: "inline-block", flexShrink: 0 }} />
            <span className="label-n">03</span>How We Work
          </span>
          <h2 className="sec-h2">A clear process. Zero surprises.</h2>
          <p className="sec-p">A structured engagement from first call to long-term scale.</p>
        </div>

        <div className="process-timeline">
          <div className="process-line" />
          {steps.map((s) => (
            <div key={s.num} className="reveal process-step">
              <div
                className="step-num"
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--cyan)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 4px rgba(0,229,204,0.08)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "";
                }}
              >
                {s.num}
              </div>
              <span className="step-icon">{s.icon}</span>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .process-timeline {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 18px;
          margin-top: 20px;
        }
        .process-line {
          position: absolute;
          top: 27px; left: 5%; right: 5%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.14), rgba(255,255,255,0.14), transparent);
          z-index: 1;
        }
        .process-step { position: relative; }
        .step-num {
          width: 56px; height: 56px; border-radius: 50%;
          background: var(--bg-2); border: 1px solid rgba(255,255,255,0.14);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-head); font-weight: 700; font-size: 20px; color: var(--heading);
          position: relative; z-index: 2; margin-bottom: 24px;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .step-icon { font-size: 22px; margin-bottom: 10px; display: block; }
        .step-title { font-size: 19px; font-weight: 700; margin-bottom: 8px; }
        .step-desc { font-size: 14.5px; color: var(--body); line-height: 1.55; }

        @media (max-width: 980px) {
          .process-timeline { grid-template-columns: repeat(2, 1fr); gap: 36px 18px; }
          .process-line { display: none; }
        }
        @media (max-width: 600px) {
          .process-timeline { grid-template-columns: 1fr; gap: 24px; }
          .process-step { display: flex; gap: 16px; align-items: flex-start; }
          .step-num { width: 44px; height: 44px; font-size: 16px; margin-bottom: 0; flex-shrink: 0; }
          .step-icon { display: none; }
          .step-title { font-size: 17px; margin-bottom: 4px; }
        }
      `}</style>
    </section>
  );
}
