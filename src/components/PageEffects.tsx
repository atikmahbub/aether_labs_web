"use client";

import { useEffect } from "react";

export default function PageEffects() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Page load fade-in
    const reveal = () => document.body.classList.add("loaded");
    if (document.readyState === "complete") reveal();
    else window.addEventListener("load", reveal, { once: true });
    const fadeTimer = setTimeout(reveal, 1200);

    // External links open in new tab
    document.querySelectorAll<HTMLAnchorElement>('a[href^="http"]').forEach((a) => {
      if (a.hostname !== location.hostname) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
    });

    // Back to top button
    const toTop = document.createElement("button");
    toTop.id = "toTop";
    toTop.setAttribute("aria-label", "Back to top");
    toTop.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
    document.body.appendChild(toTop);
    toTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: reduce ? "instant" : "smooth" })
    );
    const onTopScroll = () => toTop.classList.toggle("show", window.scrollY > 500);
    window.addEventListener("scroll", onTopScroll, { passive: true });
    onTopScroll();

    // Scrollspy: highlight active nav link
    const links = Array.from(document.querySelectorAll<HTMLAnchorElement>(".nav-link-item"));
    const sectionIds = links.map((l) => (l.getAttribute("href") ?? "").slice(1));
    const sections = sectionIds.map((id) => (id ? document.getElementById(id) : null));

    let spyRaf: number | null = null;
    const spy = () => {
      spyRaf = null;
      const pos = window.scrollY + 120;
      let active = -1;
      sections.forEach((s, i) => {
        if (s && s.offsetTop <= pos) active = i;
      });
      links.forEach((l, i) => l.classList.toggle("active", i === active));
    };
    const onSpy = () => {
      if (!spyRaf) spyRaf = requestAnimationFrame(spy);
    };
    window.addEventListener("scroll", onSpy, { passive: true });
    window.addEventListener("resize", onSpy, { passive: true });
    spy();

    return () => {
      clearTimeout(fadeTimer);
      window.removeEventListener("scroll", onTopScroll);
      window.removeEventListener("scroll", onSpy);
      window.removeEventListener("resize", onSpy);
      toTop.remove();
    };
  }, []);

  return null;
}
