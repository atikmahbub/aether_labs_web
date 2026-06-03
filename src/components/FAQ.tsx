"use client";

import { useState } from "react";

const faqs = [
  ["How long does a typical project take?", "Most MVPs ship in 8–12 weeks. Larger platforms run longer, but we break everything into 1–2 week sprints with a working demo at the end of each — so you see real progress continuously, never a black box."],
  ["How do you price your work?", "Project-based work is fixed-scope and fixed-price after a short discovery. Ongoing work runs on a monthly retainer, and team extension is billed per engineer. You'll always know the cost before we start — no surprise invoices."],
  ["Who owns the code and IP?", "You do — fully. All code, designs, and intellectual property transfer to you. We deliver clean, documented repositories and hand over every credential and account at the end of an engagement."],
  ["How do we stay in the loop during the build?", "You get a shared Slack channel, a live project board, and a weekly demo of working software. We're async-friendly across time zones, and you can reach the actual engineers on your project — not a middle layer."],
  ["Do you work with non-technical founders?", "Often. A large share of our clients are non-technical founders. We translate technical decisions into plain language, advise on trade-offs, and act as your engineering team until you're ready to build one in-house."],
  ["What happens after launch?", "We don't disappear at launch. We offer monitoring, maintenance, and ongoing development retainers — and if you'd rather take it in-house, we'll document everything and onboard your team properly."],
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="section-pad">
      <div className="wrap-inner">
        <div className="reveal sec-head-mb faq-head">
          <span className="section-label">
            <span className="label-n">10</span>FAQ
          </span>
          <h2 className="sec-h2">Questions, answered.</h2>
        </div>

        <div className="reveal faq-wrap">
          {faqs.map(([question, answer], i) => (
            <div className={`faq-item${open === i ? " open" : ""}`} key={question}>
              <button type="button" className="faq-question" onClick={() => setOpen(open === i ? -1 : i)}>
                {question}
                <span className="faq-plus" />
              </button>
              <div className="faq-answer">
                <p>{answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .faq-head { max-width: 680px; margin-left: auto; margin-right: auto; text-align: center; }
        .faq-head .section-label { justify-content: center; }
        .faq-wrap { max-width: 860px; margin: 0 auto; border-top: 1px solid var(--border); }
        .faq-item { border-bottom: 1px solid var(--border); }
        .faq-question {
          width: 100%; text-align: left; background: none; border: 0; cursor: pointer;
          padding: 26px 0; display: flex; justify-content: space-between; gap: 24px; align-items: center;
          font-family: var(--font-head); font-weight: 600; font-size: 19px; color: var(--heading);
          transition: color 0.2s;
        }
        .faq-question:hover { color: var(--cyan); }
        .faq-plus { position: relative; width: 18px; height: 18px; flex-shrink: 0; }
        .faq-plus::before, .faq-plus::after {
          content: ""; position: absolute; background: var(--cyan); transition: transform 0.3s;
        }
        .faq-plus::before { top: 8px; left: 0; width: 18px; height: 2px; }
        .faq-plus::after { left: 8px; top: 0; width: 2px; height: 18px; }
        .faq-item.open .faq-plus::after { transform: scaleY(0); }
        .faq-answer { max-height: 0; overflow: hidden; transition: max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
        .faq-item.open .faq-answer { max-height: 320px; }
        .faq-answer p { padding: 0 40px 28px 0; font-size: 15.5px; line-height: 1.65; color: var(--body); }
        @media (max-width: 600px) {
          .faq-question { font-size: 17px; padding: 22px 0; }
          .faq-answer p { padding-right: 0; font-size: 15px; }
        }
      `}</style>
    </section>
  );
}
