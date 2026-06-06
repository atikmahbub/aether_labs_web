"use client";

const services = [
  {
    num: "01",
    name: "AI & Agentic Systems",
    desc: "Autonomous agents, multi-agent frameworks, custom LLM fine-tuning, and vector-grounded RAG pipelines built for enterprise automation.",
    capabilities: ["LangChain & LlamaIndex", "Semantic Search & RAG", "Custom Agent Orchestrators"],
    icon: "🧠"
  },
  {
    num: "02",
    name: "Full-Stack Web",
    desc: "High-performance web applications built on Next.js. Engineered for speed, strict SEO guidelines, and infinite scale.",
    capabilities: ["Server Components (RSC)", "Dynamic Edge Caching", "Tailwind & Headless UI"],
    icon: "🌐"
  },
  {
    num: "03",
    name: "Mobile Apps",
    desc: "Cross-platform iOS and Android experiences built with React Native. Native performance, animations, and fluid gesture handling.",
    capabilities: ["React Native / Expo", "Offline Synchronization", "Biometrics & Push Services"],
    icon: "📱"
  },
  {
    num: "04",
    name: "SaaS Products",
    desc: "End-to-end SaaS development from scratch. Robust databases, subscription billing models, multi-tenancy, and admin command centers.",
    capabilities: ["Stripe Core Integration", "Multi-Tenant Architecture", "Analytics & Usage Audits"],
    icon: "📊"
  },
  {
    num: "05",
    name: "API & Integrations",
    desc: "High-throughput GraphQL/REST APIs, secure OAuth authorization services, webhook handlers, and serverless background workers.",
    capabilities: ["GraphQL & tRPC", "Distributed Rate Limiting", "AWS / Cloudflare Edge"],
    icon: "🔌"
  },
  {
    num: "06",
    name: "UI/UX Design Systems",
    desc: "Pixel-perfect, interactive prototypes and tokenized Figma design systems that map 1:1 to production code structures.",
    capabilities: ["Component tokenization", "Micro-interactions", "High-fidelity prototypes"],
    icon: "✨"
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="label"><span className="n">01</span> Services</span>
          <h2>Elite Capabilities</h2>
          <p>We build production-ready digital products and intelligence engines engineered to scale.</p>
        </div>

        <div className="services-grid">
          {services.map((s) => (
            <div className="svc-card reveal" key={s.num}>
              <div className="card-glow" />
              <div className="card-header">
                <span className="svc-num">{s.num}</span>
                <span className="svc-icon">{s.icon}</span>
              </div>
              <h3 className="svc-title">{s.name}</h3>
              <p className="svc-desc">{s.desc}</p>
              <div className="svc-capabilities">
                {s.capabilities.map((cap, i) => (
                  <span className="cap-tag" key={i}>
                    <span className="cap-dot" /> {cap}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-top: 48px;
        }
        .svc-card {
          position: relative;
          background: rgba(11, 11, 10, 0.4);
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
          background: radial-gradient(circle 200px at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--accent-glow) 0%, transparent 100%);
          opacity: 0;
          transition: opacity 0.4s;
          pointer-events: none;
          z-index: 1;
        }
        .svc-card:hover {
          border-color: var(--border-2);
          transform: translateY(-4px);
          background: rgba(11, 11, 10, 0.75);
          box-shadow: 0 12px 30px -10px rgba(0, 0, 0, 0.6),
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
      `}</style>
    </section>
  );
}
