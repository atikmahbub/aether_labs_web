"use client";

const testimonials = [
  {
    quote: "Working with Aether Labs was a standout experience — communicative, reliable, and I could always trust their output. The work was solid enough that I brought them back to consult on my next startup.",
    name: "Lucas Novak",
    role: "Senior Staff Engineer",
    initials: "LN",
  },
  {
    quote: "Very professional work. Super helpful — they asked the right questions upfront and delivered exactly as promised. Will work with Aether Labs again without hesitation.",
    name: "Matthew W.",
    role: "Founder, United States",
    initials: "MW",
  },
  {
    quote: "Collaborating with Aether Labs across multiple projects has been a pleasure every time. Their commitment, analytical thinking, and technical depth consistently stand out. A proactive team that meets every deadline with high-quality work.",
    name: "Alican Çamlıbel",
    role: "Frontend Lead",
    initials: "AC",
  },
];

const StarIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15">
    <path d="M12 2l3 6.3 6.9.9-5 4.8 1.2 6.8L12 17.8 5.9 20.8 7.1 14 2 9.2 9 8.3 12 2Z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-pad">
      <div className="wrap">
        <div className="testi-top">
          <div className="reveal">
            <span className="label"><span className="n">08</span> Reviews</span>
            <h2 className="testi-h2">Our clients say</h2>
          </div>
          <div className="avatars reveal" aria-label="Trusted by 20+ clients">
            {["LN", "MW", "AC", "DM"].map((av) => (
              <div key={av} className="av">{av}</div>
            ))}
            <div className="av more">+20</div>
          </div>
        </div>

        <div className="testi-grid">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="reveal testi-card"
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "translateY(-4px)";
                el.style.borderColor = "rgba(255,92,26,0.15)";
                el.style.boxShadow = "0 12px 30px -10px rgba(0,0,0,0.5), 0 0 24px -10px rgba(255,92,26,0.15)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.transform = "";
                el.style.borderColor = "var(--border)";
                el.style.boxShadow = "";
              }}
            >
              <div className="testi-stars" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
              </div>
              <p className="testi-quote">{t.quote}</p>
              <div className="testi-who">
                <div className="testi-avatar">{t.initials}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .testi-top {
          display: flex; align-items: flex-end; justify-content: space-between;
          gap: 30px; margin-bottom: 54px; flex-wrap: wrap;
        }
        .testi-h2 { font-size: clamp(30px, 3.5vw, 42px); text-transform: uppercase; font-weight: 800; line-height: 1.05; letter-spacing: -0.02em; margin-top: 16px; }
        .avatars { display: flex; align-items: center; }
        .av {
          width: 46px; height: 46px; border-radius: 50%; border: 2px solid var(--bg);
          margin-left: -12px; display: flex; align-items: center; justify-content: center;
          font-family: var(--font-head); font-weight: 800; font-size: 14px; color: #160a03;
          background: linear-gradient(135deg, #ff7a3d, #d8430a);
        }
        .av:first-child { margin-left: 0; }
        .av.more { background: var(--accent); color: #160a03; font-family: var(--font-mono); font-size: 13px; }
        .testi-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; }
        .testi-card {
          position: relative; display: flex; flex-direction: column;
          padding: 28px; background: var(--card); border: 1px solid var(--border);
          border-radius: 12px;
          transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .testi-stars { display: flex; gap: 3px; margin-bottom: 18px; color: var(--accent); }
        .testi-quote { font-family: var(--font-body); font-size: 17px; line-height: 1.6; color: rgba(255,255,255,0.86); flex: 1; }
        .testi-who {
          display: flex; align-items: center; gap: 14px;
          margin-top: 24px; padding-top: 22px; border-top: 1px solid var(--border);
        }
        .testi-avatar {
          width: 44px; height: 44px; border-radius: 50%; flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-head); font-weight: 800; font-size: 15px;
          color: #160a03; background: var(--accent);
        }
        .testi-name { font-family: var(--font-head); font-weight: 800; font-size: 14px; color: var(--white); text-transform: uppercase; }
        .testi-role { font-family: var(--font-mono); font-size: 11.5px; color: var(--dim); margin-top: 3px; }

        @media (max-width: 980px) { .testi-grid { grid-template-columns: repeat(2,1fr); gap: 16px; } }
        @media (max-width: 600px) {
          .testi-grid { grid-template-columns: 1fr; gap: 14px; }
          .testi-card { padding: 26px 22px 22px; }
          .testi-top { align-items: flex-start; }
        }
      `}</style>
    </section>
  );
}
