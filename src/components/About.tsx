const team = [
  ["AM", "Arjun Mehta", "Founder & Principal Engineer"],
  ["EV", "Elena Voss", "Head of Design"],
  ["MR", "Marcus Reed", "Lead Full-Stack Engineer"],
  ["PN", "Priya Nair", "AI & Data Lead"],
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="wrap-inner">
        <div className="about-lead">
          <div className="reveal">
            <span className="section-label">
              <span style={{ width: 22, height: 1, background: "linear-gradient(90deg,transparent,var(--cyan))", display: "inline-block", flexShrink: 0 }} />
              <span className="label-n">07</span>About Us
            </span>
            <h2 className="about-title">A small senior team that ships like a big one.</h2>
          </div>
          <div className="reveal about-copy">
            <p>Aether Labs is a boutique software studio founded by senior engineers who got tired of bloated agencies and missed deadlines. We stay deliberately small so the people you meet are the people who build your product.</p>
            <p>For <strong>6+ years</strong> we&apos;ve partnered with founders and product teams to take ideas from whiteboard to launch — and then scale them. No account managers, no hand-offs to junior teams. Just <strong>experienced builders</strong> who care about the outcome as much as you do.</p>
          </div>
        </div>

        <div className="team-grid">
          {team.map(([initials, name, role]) => (
            <div className="reveal member-card" key={name}>
              <div className="member-avatar">{initials}</div>
              <div className="member-name">{name}</div>
              <div className="member-role">{role}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .about-lead {
          display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 54px;
          align-items: start; margin-bottom: 72px;
        }
        .about-title {
          font-size: clamp(32px, 4.4vw, 52px); font-weight: 700;
          letter-spacing: -0.02em; margin-top: 18px;
        }
        .about-copy { display: flex; flex-direction: column; gap: 20px; }
        .about-copy p { font-size: 17.5px; line-height: 1.7; color: var(--body); }
        .about-copy strong { color: var(--heading); font-weight: 500; }
        .team-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .member-card {
          padding: 30px 26px; border-radius: var(--r); background: var(--surface);
          border: 1px solid var(--border); backdrop-filter: blur(14px);
          transition: transform 0.3s, border-color 0.3s;
        }
        .member-card:hover { transform: translateY(-3px); border-color: var(--border-strong); }
        .member-avatar {
          width: 64px; height: 64px; border-radius: 50%; display: flex; align-items: center; justify-content: center;
          font-family: var(--font-head); font-weight: 700; font-size: 21px; color: #021712;
          background: linear-gradient(135deg, var(--cyan), var(--violet)); margin-bottom: 20px;
        }
        .member-name {
          font-family: var(--font-head); font-weight: 600; font-size: 18px;
          color: var(--heading); letter-spacing: -0.01em;
        }
        .member-role {
          font-family: var(--font-mono); font-size: 12px; color: var(--body-dim);
          margin-top: 5px; line-height: 1.4;
        }
        @media (max-width: 980px) {
          .about-lead { grid-template-columns: 1fr; gap: 24px; margin-bottom: 48px; }
          .team-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        }
        @media (max-width: 600px) {
          .team-grid { grid-template-columns: 1fr; gap: 14px; }
          .member-card { padding: 24px 22px; }
          .about-copy p { font-size: 16px; }
        }
      `}</style>
    </section>
  );
}
