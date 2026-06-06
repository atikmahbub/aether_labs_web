const services = [
  { num: "01", name: "Full-Stack Web", desc: "MERN stack (MongoDB, Express, React, Node.js) — scalable, modern web applications built for performance and growth.", tag: "Web · Performance · Scale" },
  { num: "02", name: "Mobile Apps", desc: "Cross-platform iOS & Android apps built with React Native. Native feel, shared codebase, faster delivery.", tag: "iOS · Android · React Native" },
  { num: "03", name: "AI & Agentic Systems", desc: "Custom AI agents, LLM integrations, RAG pipelines, and intelligent automation — powered by OpenAI, Anthropic, and more.", tag: "LLMs · RAG · Agents" },
  { num: "04", name: "SaaS Products", desc: "End-to-end SaaS architecture — from database design to subscription billing, dashboards, and multi-tenancy.", tag: "Billing · Dashboards · Multi-tenant" },
  { num: "05", name: "API & Integration", desc: "RESTful and GraphQL APIs. Third-party integrations, payment gateways, auth systems, and cloud infrastructure.", tag: "REST · GraphQL · Cloud" },
  { num: "06", name: "UI/UX Design", desc: "Figma-based design systems, interactive prototypes, and pixel-perfect implementation. Design that converts.", tag: "Figma · Systems · Prototypes" },
];

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="label"><span className="n">01</span> Services</span>
          <h2>What we build</h2>
          <p>End-to-end engineering across web, mobile, and AI — from architecture to launch. Hover a service to learn more.</p>
        </div>

        <div className="svc-list">
          {services.map((s) => (
            <div className="svc-row reveal" key={s.num}>
              <div className="svc-num">{s.num}</div>
              <h3 className="svc-name">{s.name}</h3>
              <div className="svc-desc">
                {s.desc}
                <span className="svc-tag">{s.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .svc-list { border-top: 1px solid var(--border); }
        .svc-row {
          display: grid;
          grid-template-columns: 58px 1fr 1.05fr;
          gap: 0 28px; padding: 30px 0;
          border-bottom: 1px solid var(--border);
          align-items: start;
          transition: padding 0.3s;
          cursor: default;
        }
        .svc-num {
          font-family: var(--font-mono); font-size: 13px; color: var(--dim); padding-top: 16px;
        }
        .svc-name {
          font-size: clamp(30px, 5vw, 62px); text-transform: uppercase;
          color: rgba(245,240,233,0.20); letter-spacing: -0.02em; line-height: 0.96;
          font-weight: 900; transition: color 0.3s;
        }
        .svc-desc {
          font-family: var(--font-mono); font-size: 14px; color: var(--muted);
          line-height: 1.7; max-width: 480px;
          max-height: 0; opacity: 0; overflow: hidden;
          transition: max-height 0.45s cubic-bezier(0.2,0.8,0.2,1), opacity 0.4s, margin 0.4s;
        }
        .svc-tag {
          display: block; margin-top: 12px; color: var(--accent);
          font-size: 11.5px; letter-spacing: 0.1em; text-transform: uppercase;
        }
        .svc-row:hover { padding-left: 8px; }
        .svc-row:hover .svc-name { color: var(--accent); }
        .svc-row:hover .svc-desc { max-height: 160px; opacity: 1; }

        @media (max-width: 980px) {
          .svc-row {
            grid-template-columns: 46px 1fr;
            gap: 0 18px;
          }
          .svc-desc {
            grid-column: 2; max-height: none; opacity: 1; margin-top: 14px;
          }
          .svc-name { font-size: clamp(26px, 5vw, 48px); }
        }
        @media (max-width: 600px) {
          .svc-row { grid-template-columns: 40px 1fr; gap: 0 12px; padding: 22px 0; }
          .svc-num { padding-top: 10px; font-size: 12px; }
          .svc-name { font-size: clamp(24px, 8vw, 38px); }
          .svc-desc { font-size: 13px; }
        }
      `}</style>
    </section>
  );
}
