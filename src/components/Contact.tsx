"use client";

import { useEffect, useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [note, setNote] = useState("");
  const [noteColor, setNoteColor] = useState("var(--cyan)");
  const [formData, setFormData] = useState({ name: "", email: "", ptype: "Web App", msg: "" });

  useEffect(() => {
    const els = document.querySelectorAll("#contact .reveal");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); observer.unobserve(e.target); }
      }),
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!formData.name.trim() || !formData.email.trim() || !emailRe.test(formData.email)) {
      setNoteColor("#ff6b6b");
      setNote("Please enter your name and a valid email.");
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setNoteColor("var(--cyan)");
      setNote(`Thanks, ${formData.name}! We'll be in touch within 24 hours.`);
      setFormData({ name: "", email: "", ptype: "Web App", msg: "" });
      setTimeout(() => setStatus("idle"), 2600);
    }, 800);
  };

  return (
    <section id="contact" className="section-pad contact-section">
      <div className="wrap-inner">
        <div className="reveal contact-panel">
          {/* Glow orbs */}
          <div style={{ position: "absolute", inset: 0, zIndex: 0, pointerEvents: "none" }}>
            <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle,rgba(0,229,204,0.18),transparent 60%)", top: -260, right: -120, filter: "blur(40px)" }} />
            <div style={{ position: "absolute", width: 520, height: 520, borderRadius: "50%", background: "radial-gradient(circle,rgba(123,94,255,0.18),transparent 60%)", bottom: -260, left: -100, filter: "blur(40px)" }} />
          </div>

          <div className="contact-grid">
            <div>
              <span className="section-label">
                <span style={{ width: 22, height: 1, background: "linear-gradient(90deg,transparent,var(--cyan))", display: "inline-block", flexShrink: 0 }} />
                <span className="label-n">11</span>Get in Touch
              </span>
              <h2 className="contact-h2">Ready to Build Something Great?</h2>
              <p style={{ fontSize: 18, color: "var(--body)", maxWidth: 380, lineHeight: 1.6 }}>Tell us about your project. We&apos;ll get back to you within 24 hours.</p>
              <div className="contact-direct">
                Or reach us directly at{" "}
                <a href="mailto:hello@aetherlabs.dev" style={{ color: "var(--cyan)" }}>hello@aetherlabs.dev</a>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate className="contact-form">
              <div className="form-row-2">
                <div>
                  <label className="field-label">Name</label>
                  <input
                    type="text" placeholder="Jane Cooper" required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="field-input"
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--cyan)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(0,229,204,0.1)"; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.target as HTMLElement).style.boxShadow = ""; }}
                  />
                </div>
                <div>
                  <label className="field-label">Email</label>
                  <input
                    type="email" placeholder="jane@company.com" required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="field-input"
                    onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--cyan)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(0,229,204,0.1)"; }}
                    onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.target as HTMLElement).style.boxShadow = ""; }}
                  />
                </div>
              </div>

              <div>
                <label className="field-label">Project Type</label>
                <select
                  value={formData.ptype}
                  onChange={(e) => setFormData({ ...formData, ptype: e.target.value })}
                  className="field-input field-select"
                >
                  {["Web App", "Mobile App", "AI System", "SaaS", "Other"].map((o) => (
                    <option key={o} value={o} style={{ background: "#0a0f1c" }}>{o}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="field-label">Message</label>
                <textarea
                  placeholder="A few sentences about what you're building…"
                  rows={5}
                  value={formData.msg}
                  onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                  className="field-input field-textarea"
                  onFocus={(e) => { (e.target as HTMLElement).style.borderColor = "var(--cyan)"; (e.target as HTMLElement).style.boxShadow = "0 0 0 3px rgba(0,229,204,0.1)"; }}
                  onBlur={(e) => { (e.target as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"; (e.target as HTMLElement).style.boxShadow = ""; }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="submit-btn"
                onMouseEnter={(e) => { if (status !== "sending") (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; }}
              >
                {status === "sending" ? "Sending…" : status === "sent" ? "Message Sent ✓" : "Send Message →"}
              </button>

              {note && <p style={{ fontSize: 13, color: noteColor, textAlign: "center", marginTop: 4 }}>{note}</p>}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section { padding-bottom: 130px; }
        .contact-panel {
          position: relative; border-radius: 30px; overflow: hidden;
          padding: 80px 64px;
          background: linear-gradient(160deg,#0a1020,#070b16);
          border: 1px solid rgba(255,255,255,0.08);
        }
        .contact-grid {
          position: relative; z-index: 2;
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start;
        }
        .contact-h2 {
          font-size: clamp(28px, 4.4vw, 50px); font-weight: 700; margin: 18px 0 16px;
        }
        .contact-direct {
          margin-top: 34px; font-family: var(--font-mono); font-size: 14px; color: var(--body);
        }
        .contact-form { display: flex; flex-direction: column; gap: 16px; }
        .form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .field-label {
          display: block; font-family: var(--font-mono); font-size: 11px;
          letter-spacing: 0.14em; text-transform: uppercase; color: var(--body-dim); margin-bottom: 8px;
        }
        .field-input {
          width: 100%; background: rgba(5,8,16,0.6); border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px; padding: 14px 16px; color: var(--heading);
          font-family: var(--font-body); font-size: 15.5px;
          transition: border-color 0.25s, box-shadow 0.25s; outline: none;
        }
        .field-input::placeholder { color: var(--body-dim); }
        .field-textarea { resize: vertical; min-height: 120px; }
        .field-select {
          appearance: none; -webkit-appearance: none; cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%238a9bb5' d='M6 8 0 0h12z'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 16px center;
        }
        .submit-btn {
          font-family: var(--font-body); font-weight: 600; font-size: 15.5px;
          border-radius: 100px; padding: 14px 26px; border: none; cursor: pointer;
          background: linear-gradient(180deg,#00f5da,#00c4af); color: #021712;
          box-shadow: 0 6px 30px -8px rgba(0,229,204,0.55);
          width: 100%; display: flex; align-items: center; justify-content: center; gap: 9px;
          transition: transform 0.25s, box-shadow 0.25s;
        }
        .submit-btn:disabled { opacity: 0.7; }

        /* tablet */
        @media (max-width: 980px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
          .contact-panel { padding: 60px 48px; }
        }
        /* mobile */
        @media (max-width: 760px) {
          .contact-panel { padding: 40px 24px; border-radius: 20px; }
          .form-row-2 { grid-template-columns: 1fr; gap: 16px; }
          .contact-section { padding-bottom: 80px; }
        }
        /* small phones */
        @media (max-width: 480px) {
          .contact-panel { padding: 30px 18px; border-radius: 16px; }
          .field-input { font-size: 16px; } /* prevent iOS zoom */
          .contact-direct { font-size: 13px; }
        }
      `}</style>
    </section>
  );
}
