"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [note, setNote] = useState("");
  const [noteColor, setNoteColor] = useState("var(--accent)");
  const [formData, setFormData] = useState({ name: "", email: "", ptype: "Web App", msg: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailRe = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!formData.name.trim() || !formData.email.trim() || !emailRe.test(formData.email)) {
      setNoteColor("#ff6b4a");
      setNote("Please enter your name and a valid email.");
      return;
    }
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setNoteColor("var(--accent)");
      setNote(`Thanks, ${formData.name}! We'll be in touch within 24 hours.`);
      setFormData({ name: "", email: "", ptype: "Web App", msg: "" });
      setTimeout(() => setStatus("idle"), 2600);
    }, 800);
  };

  return (
    <section id="contact" className="section-pad contact-section">
      <div className="wrap">
        <div className="reveal contact-panel">
          <div className="contact-glow">
            <div className="glow-orb" />
          </div>
          <div className="contact-grid">
            <div className="contact-copy">
              <span className="label"><span className="n">11</span> Contact us</span>
              <h2 className="contact-h2">Transform your brand</h2>
              <p className="contact-sub">Ready to start a project? Tell us about it and we&apos;ll get back to you within 24 hours.</p>
              <div className="contact-direct">
                Or reach us directly at{" "}
                <a href="mailto:hello@aetherlabs.dev" style={{ color: "var(--accent)" }}>hello@aetherlabs.dev</a>
              </div>
            </div>

            <form onSubmit={handleSubmit} noValidate className="contact-form">
              <div className="form-row-2">
                <div className="field">
                  <label className="field-label" htmlFor="cf-name">Name</label>
                  <input
                    id="cf-name" type="text" placeholder="Your name" required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="field-input"
                    onFocus={(e) => { e.target.style.borderColor = "var(--accent)"; e.target.style.boxShadow = "0 0 0 3px rgba(255,90,31,0.12)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = ""; }}
                  />
                </div>
                <div className="field">
                  <label className="field-label" htmlFor="cf-email">E-mail</label>
                  <input
                    id="cf-email" type="email" placeholder="Your e-mail" required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="field-input"
                    onFocus={(e) => { e.target.style.borderColor = "var(--accent)"; e.target.style.boxShadow = "0 0 0 3px rgba(255,90,31,0.12)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = ""; }}
                  />
                </div>
              </div>

              <div className="field">
                <label className="field-label" htmlFor="cf-ptype">Project Type</label>
                <select
                  id="cf-ptype"
                  value={formData.ptype}
                  onChange={(e) => setFormData({ ...formData, ptype: e.target.value })}
                  className="field-input field-select"
                >
                  {["Web App", "Mobile App", "AI System", "SaaS", "Other"].map((o) => (
                    <option key={o} value={o} style={{ background: "#100d0a" }}>{o}</option>
                  ))}
                </select>
              </div>

              <div className="field">
                <label className="field-label" htmlFor="cf-msg">Message</label>
                <textarea
                  id="cf-msg" placeholder="Your message" rows={5}
                  value={formData.msg}
                  onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                  className="field-input field-textarea"
                  onFocus={(e) => { e.target.style.borderColor = "var(--accent)"; e.target.style.boxShadow = "0 0 0 3px rgba(255,90,31,0.12)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.boxShadow = ""; }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="submit-btn"
                onMouseEnter={(e) => { if (status !== "sending") (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = ""; }}
              >
                {status === "sending" ? "Sending…" : status === "sent" ? "Message Sent ✓" : "Send message →"}
              </button>

              {note && <p style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: noteColor, textAlign: "center", marginTop: 4 }}>{note}</p>}
            </form>
          </div>
        </div>
      </div>

      <style>{`
        .contact-section { padding-bottom: 120px; }
        .contact-panel {
          position: relative; overflow: hidden; padding: 80px 60px;
          background: #100d0a; border: 1px solid var(--border);
        }
        .contact-glow { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
        .glow-orb {
          position: absolute; width: 720px; height: 720px; border-radius: 50%;
          background: radial-gradient(circle, rgba(255,90,31,0.28), transparent 60%);
          bottom: -360px; right: -160px; filter: blur(30px);
        }
        .contact-grid {
          position: relative; z-index: 2;
          display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: start;
        }
        .contact-h2 {
          font-size: clamp(34px, 4.8vw, 60px); font-weight: 900;
          text-transform: uppercase; line-height: 0.96; margin: 18px 0 18px;
        }
        .contact-sub { font-family: var(--font-mono); font-size: 15px; color: var(--muted); max-width: 380px; line-height: 1.7; }
        .contact-direct { margin-top: 34px; font-family: var(--font-mono); font-size: 14px; color: var(--muted); }
        .contact-form { display: flex; flex-direction: column; gap: 16px; }
        .form-row-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .field-label {
          display: block; font-family: var(--font-mono); font-size: 12px;
          letter-spacing: 0.04em; color: var(--dim); margin-bottom: 9px;
        }
        .field-input {
          width: 100%; background: var(--bg); border: 1px solid var(--border);
          padding: 14px 16px; color: var(--white);
          font-family: var(--font-mono); font-size: 14.5px;
          transition: border-color 0.25s, box-shadow 0.25s; outline: none;
        }
        .field-input::placeholder { color: var(--dim); }
        .field-textarea { resize: vertical; min-height: 118px; }
        .field-select {
          appearance: none; -webkit-appearance: none; cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath fill='%23948c81' d='M6 8 0 0h12z'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 16px center;
        }
        .submit-btn {
          font-family: var(--font-mono); font-weight: 700; font-size: 14px;
          border-radius: 100px; padding: 15px 28px; border: none; cursor: pointer;
          background: var(--accent); color: #160a03;
          box-shadow: 0 10px 34px -12px rgba(255,90,31,0.8);
          width: 100%; display: flex; align-items: center; justify-content: center; gap: 9px;
          transition: transform 0.25s, box-shadow 0.25s, background 0.25s;
        }
        .submit-btn:hover { background: #ff6a33; box-shadow: 0 16px 44px -12px rgba(255,90,31,0.95); }
        .submit-btn:disabled { opacity: 0.7; }

        @media (max-width: 980px) {
          .contact-grid { grid-template-columns: 1fr; gap: 40px; }
          .contact-panel { padding: 60px 48px; }
        }
        @media (max-width: 760px) {
          .contact-panel { padding: 48px 26px; }
          .form-row-2 { grid-template-columns: 1fr; }
          .contact-section { padding-bottom: 80px; }
        }
        @media (max-width: 480px) {
          .contact-panel { padding: 32px 18px; }
          .field-input { font-size: 16px; }
        }
      `}</style>
    </section>
  );
}
