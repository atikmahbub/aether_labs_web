"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    const revealEls = Array.from(document.querySelectorAll(".reveal"));

    const show = (el: Element, i: number) => {
      if (el.classList.contains("in")) return;
      (el as HTMLElement).style.transitionDelay = `${Math.min(i, 5) * 70}ms`;
      el.classList.add("in");
    };

    let io: IntersectionObserver | null = null;
    try {
      io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e, i) => {
            if (e.isIntersecting) {
              show(e.target, i);
              io?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
      );
      revealEls.forEach((el) => io?.observe(el));
    } catch {
      io = null;
    }

    function revealInView() {
      const h = window.innerHeight || document.documentElement.clientHeight;
      revealEls.forEach((el, i) => {
        if (el.getBoundingClientRect().top < h * 0.92) show(el, i);
      });
    }

    revealInView();
    window.addEventListener("scroll", revealInView, { passive: true });
    window.addEventListener("resize", revealInView, { passive: true });
    const timer = setTimeout(() => revealEls.forEach((el, i) => show(el, i)), 1200);

    return () => {
      io?.disconnect();
      window.removeEventListener("scroll", revealInView);
      window.removeEventListener("resize", revealInView);
      clearTimeout(timer);
    };
  }, []);

  return null;
}
