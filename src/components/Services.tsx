"use client";

import { useEffect } from "react";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
        <rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    name: "Full-Stack Web Development",
    desc: "MERN stack (MongoDB, Express, React, Node.js) — scalable, modern web applications built for performance and growth.",
    tag: "Web · Performance · Scale",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
        <rect x="6" y="2" width="12" height="20" rx="2.5" /><path d="M10 18h4" />
      </svg>
    ),
    name: "Mobile App Development",
    desc: "Cross-platform iOS & Android apps built with React Native. Native feel, shared codebase, faster delivery.",
    tag: "iOS · Android · React Native",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
      </svg>
    ),
    name: "AI & Agentic Systems",
    desc: "Custom AI agents, LLM integrations, RAG pipelines, and intelligent automation — powered by OpenAI, Anthropic, and more.",
    tag: "LLMs · RAG · Agents",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
        <path d="M3 7l9-4 9 4-9 4-9-4Z" /><path d="M3 12l9 4 9-4M3 17l9 4 9-4" />
      </svg>
    ),
    name: "SaaS Product Development",
    desc: "End-to-end SaaS architecture — from database design to subscription billing, dashboards, and multi-tenancy.",
    tag: "Billing · Dashboards · Multi-tenant",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
        <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />
        <circle cx="12" cy="12" r="2.5" />
      </svg>
    ),
    name: "API Design & Integration",
    desc: "RESTful and GraphQL APIs. Third-party integrations, payment gateways, auth systems, and cloud infrastructure.",
    tag: "REST · GraphQL · Cloud",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="24" height="24">
        <path d="M3 3h18v14H3z" /><path d="M3 9h18M7 13h6" />
        <circle cx="6" cy="6" r="0.6" fill="currentColor" />
      </svg>
    ),
    name: "UI/UX Design & Prototyping",
    desc: "Figma-based design systems, interactive prototypes, and pixel-perfect implementation. Design that converts.",
    tag: "Figma · Systems · Prototypes",
  },
];

export default function Services() {
  useEffect(() => {
    const els = document.querySelectorAll("#services .reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add("in"), i * 70);
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="section-pad">
      <div className="wrap-inner">
        <div className="reveal sec-head-mb" style={{ maxWidth: 680 }}>
          <span className="section-label">
            <span style={{ width: 22, height: 1, background: "linear-gradient(90deg,transparent,var(--cyan))", display: "inline-block", flexShrink: 0 }} />
            <span className="label-n">01</span>What We Build
          </span>
          <h2 className="sec-h2">Engineering for ambitious products.</h2>
          <p className="sec-p">End-to-end engineering across web, mobile, and AI — from architecture to launch.</p>
        </div>

        <div className="svc-grid">
          {services.map((s) => (
            <ServiceCard key={s.name} {...s} />
          ))}
        </div>
      </div>

      <style>{`
        .svc-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        @media (max-width: 980px) { .svc-grid { grid-template-columns: repeat(2,1fr); gap: 16px; } }
        @media (max-width: 600px) { .svc-grid { grid-template-columns: 1fr; gap: 14px; } }
      `}</style>
    </section>
  );
}

function ServiceCard({ icon, name, desc, tag }: { icon: React.ReactNode; name: string; desc: string; tag: string }) {
  return (
    <div
      className="reveal svc-card"
      style={{
        position: "relative", padding: "34px 32px 30px", borderRadius: "var(--r)",
        background: "var(--surface)", border: "1px solid var(--border)",
        backdropFilter: "blur(14px)", overflow: "hidden",
        transition: "border-color 0.3s, transform 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
        (e.currentTarget as HTMLElement).style.transform = "";
      }}
      onMouseMove={(e) => {
        const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
        (e.currentTarget as HTMLElement).style.setProperty("--mx", `${e.clientX - r.left}px`);
        (e.currentTarget as HTMLElement).style.setProperty("--my", `${e.clientY - r.top}px`);
      }}
    >
      <div style={{ width: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,229,204,0.08)", border: "1px solid rgba(0,229,204,0.2)", marginBottom: 22, color: "var(--cyan)" }}>
        {icon}
      </div>
      <h3 style={{ fontSize: "clamp(18px,2.4vw,23px)", fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
        <span>{name}</span>
        <span className="svc-arr" style={{ color: "var(--cyan)", fontFamily: "var(--font-body)", opacity: 0, transform: "translateX(-6px)", transition: "0.3s", flexShrink: 0 }}>→</span>
      </h3>
      <p style={{ fontSize: 15, lineHeight: 1.6, color: "var(--body)" }}>{desc}</p>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--violet)", marginTop: 18, display: "block" }}>{tag}</span>

      <style>{`
        .svc-card:hover .svc-arr { opacity: 1 !important; transform: none !important; }
        @media (max-width: 600px) {
          .svc-card { padding: 24px 20px 22px !important; }
        }
      `}</style>
    </div>
  );
}
