"use client";

import { useEffect, useState } from "react";

const cases = [
  {
    cls: "c1",
    metric: "$2.4M",
    metricText: "processed in first 3 months",
    sector: "Fintech · Loomstack",
    title: "B2B Payments Dashboard",
    desc: "A real-time reconciliation and payouts platform that cut manual finance work by 60% and scaled to hundreds of merchants.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    type: "fintech"
  },
  {
    cls: "c2",
    metric: "58%",
    metricText: "of support tickets auto-resolved",
    sector: "AI Systems · Northpeak",
    title: "RAG Support Agent",
    desc: "An LLM agent grounded in their knowledge base that resolves most tickets instantly — saving the team roughly 30 hours a week.",
    tags: ["Anthropic", "LangChain", "RAG", "Python"],
    type: "ai"
  },
  {
    cls: "c3",
    metric: "8K+",
    metricText: "patients onboarded · 4.7★ app",
    sector: "HealthTech · Vela Health",
    title: "Patient Care Platform",
    desc: "A HIPAA-compliant web platform and cross-platform mobile app connecting patients with care teams in real time.",
    tags: ["React Native", "AWS", "HIPAA", "MongoDB"],
    type: "health"
  },
];

export default function Work() {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => !p);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="work" className="section-pad">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="label"><span className="n">02</span> Case Studies</span>
          <h2>Outcomes, not just output</h2>
          <p>A look at the elite software systems and digital products we have engineered and deployed.</p>
        </div>

        <div className="work-grid">
          {cases.map((item) => (
            <article className={`reveal case-card ${item.cls}`} key={item.title}>
              {/* Premium Dashboard Visualization per project */}
              <div className="case-visualizer">
                {item.type === "fintech" && (
                  <div className="vis-fintech">
                    <div className="vis-chart-bar" style={{ height: "45%" }} />
                    <div className="vis-chart-bar" style={{ height: "70%" }} />
                    <div className="vis-chart-bar" style={{ height: "55%" }} />
                    <div className="vis-chart-bar active" style={{ height: "90%" }} />
                    <div className="vis-chart-bar" style={{ height: "65%" }} />
                    <div className="vis-payout-toast">
                      <span className="toast-dot" /> Payout Succeeded (+$14,250)
                    </div>
                  </div>
                )}

                {item.type === "ai" && (
                  <div className="vis-ai">
                    <div className="vis-chat-bubble system">Incoming support inquiry...</div>
                    <div className="vis-chat-bubble agent">
                      <span className="bot-tag">Agent</span> Auto-resolved via vector search.
                    </div>
                  </div>
                )}

                {item.type === "health" && (
                  <div className="vis-health">
                    <div className="vis-pulse-container">
                      <div className={`vis-pulse-line ${pulse ? "pulse" : ""}`} />
                    </div>
                    <div className="vis-telemetry">
                      <span>Heart Rate: 72 bpm</span>
                      <span>Telemetry: Active</span>
                    </div>
                  </div>
                )}

                <div className="case-metric">
                  {item.metric}
                  <small>{item.metricText}</small>
                </div>
              </div>

              <div className="case-body">
                <span className="case-sector">{item.sector}</span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="case-tags">
                  {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <style>{`
        .work-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        
        .case-card {
          border: 1px solid var(--border);
          overflow: hidden;
          background: rgba(11, 11, 10, 0.4);
          display: flex;
          flex-direction: column;
          border-radius: 12px;
          transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        
        .case-card:hover {
          transform: translateY(-6px);
          border-color: var(--border-2);
          background: rgba(11, 11, 10, 0.75);
          box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.7),
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
          background: rgba(0, 0, 0, 0.3);
          border-bottom: 1px solid var(--border);
        }
        
        /* Grid background effect */
        .case-visualizer::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(240, 106, 37, 0.03) 1px, transparent 1px);
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
          background: #0f0f0e;
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
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .toast-dot {
          width: 6px; height: 6px; background: #10b981; border-radius: 50%;
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
          background: rgba(224, 90, 31, 0.08);
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
          color: #000;
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
          background: linear-gradient(90deg, transparent 0%, var(--accent) 50%, transparent 100%);
          background-size: 200% 100%;
          animation: pulseScan 2s infinite linear;
        }
        @keyframes pulseScan {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
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
        
        .case-body { padding: 26px; display: flex; flex-direction: column; flex: 1; }
        
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
        
        .case-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 24px; }
        
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
          .work-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        }
        @media (max-width: 640px) {
          .work-grid { grid-template-columns: 1fr; gap: 16px; }
          .case-visualizer { height: 180px; }
          .case-body { padding: 20px; }
        }
      `}</style>
    </section>
  );
}
