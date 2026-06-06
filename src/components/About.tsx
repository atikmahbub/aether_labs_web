const team = [
  ["AM", "Arjun Mehta", "Founder & Principal Engineer"],
  ["EV", "Elena Voss", "Head of Design"],
  ["MR", "Marcus Reed", "Lead Full-Stack Engineer"],
  ["PN", "Priya Nair", "AI & Data Lead"],
];

export default function About() {
  return (
    <section id="about" className="section-pad">
      <div className="wrap">
        <div className="about-lead">
          <div className="reveal">
            <span className="label"><span className="n">07</span> About us</span>
            <h2 className="about-title">A small senior team that ships like a big one</h2>
          </div>
          <div className="reveal about-copy">
            <p>Aether Labs is a boutique software studio founded by senior engineers who got tired of bloated agencies and missed deadlines. We stay deliberately small so the people you meet are the people who build your product.</p>
            <p>Since <strong>2020</strong> we&apos;ve partnered with founders and product teams to take ideas from whiteboard to launch — and then scale them. No account managers, no hand-offs to junior teams. Just <strong>experienced builders</strong> who care about the outcome as much as you do.</p>
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
          display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 54px;
          align-items: start; margin-bottom: 68px;
        }
        .about-title {
          font-size: clamp(30px, 4.2vw, 52px); font-weight: 900;
          text-transform: uppercase; line-height: 0.98; margin-top: 18px;
        }
        .about-copy { display: flex; flex-direction: column; gap: 20px; }
        .about-copy p { font-family: var(--font-mono); font-size: 15px; line-height: 1.8; color: var(--muted); }
        .about-copy strong { color: var(--white); font-weight: 700; }
        .team-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .member-card {
          padding: 30px 26px; background: var(--card); border: 1px solid var(--border);
          transition: transform 0.3s, border-color 0.3s;
        }
        .member-card:hover { transform: translateY(-3px); border-color: var(--border-2); }
        .member-avatar {
          width: 60px; height: 60px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-head); font-weight: 800; font-size: 20px;
          color: #160a03; background: var(--accent); margin-bottom: 20px;
        }
        .member-name {
          font-family: var(--font-head); font-weight: 800; font-size: 17px;
          color: var(--white); text-transform: uppercase; letter-spacing: -0.01em;
        }
        .member-role { font-family: var(--font-mono); font-size: 12px; color: var(--dim); margin-top: 6px; line-height: 1.4; }

        @media (max-width: 980px) {
          .about-lead { grid-template-columns: 1fr; gap: 26px; margin-bottom: 48px; }
          .team-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
        }
        @media (max-width: 600px) {
          .team-grid { grid-template-columns: 1fr; gap: 14px; }
          .member-card { padding: 24px 22px; }
        }
      `}</style>
    </section>
  );
}
