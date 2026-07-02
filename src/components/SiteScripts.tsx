"use client";

import { useEffect } from "react";

/**
 * Ports the two interaction scripts from the Doodle Dash Labs design:
 * nav scrolled state, mobile menu, scroll reveal, hero typewriter, FAQ
 * accordion, service-card cursor glow, contact form, smooth anchor scroll,
 * page fade-in, external-link handling, back-to-top button and scrollspy.
 * Written to be idempotent / StrictMode-safe with full listener cleanup.
 */
export default function SiteScripts() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cleanups: Array<() => void> = [];
    const on = (
      target: Window | Document | Element,
      type: string,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      handler: any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      opts?: any
    ) => {
      target.addEventListener(type, handler, opts);
      cleanups.push(() => target.removeEventListener(type, handler, opts));
    };

    /* ---------- Nav: scrolled state ---------- */
    const nav = document.getElementById("nav");
    const onScroll = () => {
      if (!nav) return;
      if (window.scrollY > 24) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    on(window, "scroll", onScroll, { passive: true });
    onScroll();

    /* ---------- Mobile menu ---------- */
    const menuBtn = document.getElementById("menuBtn");
    const navLinksEl = document.getElementById("navLinks");
    void navLinksEl;
    let mobileMenu: HTMLDivElement | null = null;
    let menuOpen = false;
    const buildMobile = () => {
      if (mobileMenu) return mobileMenu;
      mobileMenu = document.createElement("div");
      mobileMenu.className = "mobile-menu";
      mobileMenu.style.display = "none";
      const items: [string, string][] = [
        ["#services", "Services"],
        ["#work", "Work"],
        ["#about", "About"],
        ["#testimonials", "Reviews"],
        ["#faq", "FAQ"],
        ["#contact", "Contact us"],
      ];
      mobileMenu.innerHTML = items
        .map((i) => '<a class="mobile-link" href="' + i[0] + '">' + i[1] + "</a>")
        .join("");
      nav?.appendChild(mobileMenu);
      mobileMenu.addEventListener("click", (e) => {
        if ((e.target as HTMLElement).classList.contains("mobile-link")) closeMobile();
      });
      return mobileMenu;
    };
    const openMobile = () => {
      buildMobile();
      if (mobileMenu) mobileMenu.style.display = "block";
      menuOpen = true;
      menuBtn?.classList.add("open");
    };
    const closeMobile = () => {
      if (mobileMenu) mobileMenu.style.display = "none";
      menuOpen = false;
      menuBtn?.classList.remove("open");
    };
    if (menuBtn) on(menuBtn, "click", () => (menuOpen ? closeMobile() : openMobile()));
    cleanups.push(() => {
      mobileMenu?.remove();
      mobileMenu = null;
    });

    /* ---------- Scroll reveal ---------- */
    const reveals = Array.prototype.slice.call(
      document.querySelectorAll(".reveal")
    ) as HTMLElement[];
    if (reduce) {
      reveals.forEach((el) => el.classList.add("in"));
    } else {
      const checkReveals = () => {
        const vh = window.innerHeight || document.documentElement.clientHeight;
        for (let i = reveals.length - 1; i >= 0; i--) {
          const el = reveals[i];
          if (el.getBoundingClientRect().top < vh * 0.92) {
            el.classList.add("in");
            reveals.splice(i, 1);
          }
        }
      };
      let raf: number | null = null;
      const onReveal = () => {
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = null;
          checkReveals();
        });
      };
      on(window, "scroll", onReveal, { passive: true });
      on(window, "resize", onReveal, { passive: true });
      checkReveals();
      const t = window.setTimeout(checkReveals, 400);
      cleanups.push(() => window.clearTimeout(t));
      on(window, "load", checkReveals);
    }

    /* ---------- Hero typewriter ---------- */
    const typeEl = document.getElementById("typeText");
    if (typeEl && !reduce) {
      const words = [
        "Agent Workflow",
        "SaaS Platform",
        "Mobile App",
        "RAG Pipeline",
        "Web System",
        "AI Orchestration",
      ];
      let wi = 0;
      let ci = 0;
      let deleting = false;
      let timer: number;
      const tick = () => {
        const word = words[wi];
        if (!deleting) {
          ci++;
          typeEl.textContent = word.slice(0, ci);
          if (ci === word.length) {
            deleting = true;
            timer = window.setTimeout(tick, 1600);
            return;
          }
          timer = window.setTimeout(tick, 70);
        } else {
          ci--;
          typeEl.textContent = word.slice(0, ci);
          if (ci === 0) {
            deleting = false;
            wi = (wi + 1) % words.length;
            timer = window.setTimeout(tick, 320);
            return;
          }
          timer = window.setTimeout(tick, 34);
        }
      };
      timer = window.setTimeout(tick, 900);
      cleanups.push(() => window.clearTimeout(timer));
    }

    /* ---------- FAQ accordion ---------- */
    document.querySelectorAll(".faq-q").forEach((btn) => {
      on(btn, "click", () => {
        const item = btn.closest(".faq-item");
        if (!item) return;
        const isOpen = item.classList.contains("open");
        document
          .querySelectorAll(".faq-item.open")
          .forEach((o) => {
            if (o !== item) o.classList.remove("open");
          });
        item.classList.toggle("open", !isOpen);
      });
    });

    /* ---------- Service card cursor glow ---------- */
    document.querySelectorAll(".svc-card").forEach((card) => {
      on(card, "pointermove", (e: PointerEvent) => {
        const r = (card as HTMLElement).getBoundingClientRect();
        (card as HTMLElement).style.setProperty("--mouse-x", e.clientX - r.left + "px");
        (card as HTMLElement).style.setProperty("--mouse-y", e.clientY - r.top + "px");
      });
    });

    /* ---------- Contact form (sends via /api/contact) ---------- */
    const form = document.querySelector(".contact-form") as HTMLFormElement | null;
    if (form) {
      on(form, "submit", async (e: Event) => {
        e.preventDefault();
        const btn = form.querySelector(".submit-btn") as HTMLButtonElement | null;
        if (!btn || btn.disabled) return;
        const orig = btn.textContent;
        const val = (id: string) =>
          (document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null)?.value.trim() || "";

        const payload = {
          name: val("cf-name"),
          email: val("cf-email"),
          projectType: val("cf-ptype"),
          message: val("cf-msg"),
        };

        const restore = (delay = 2600) =>
          window.setTimeout(() => {
            btn.textContent = orig;
            btn.disabled = false;
          }, delay);

        if (!payload.name || !payload.email || !payload.message) {
          btn.textContent = "Fill in all fields";
          restore(1800);
          return;
        }

        btn.disabled = true;
        btn.textContent = "Sending…";
        try {
          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          const data = await res.json().catch(() => ({}));
          if (res.ok && data.ok) {
            btn.textContent = "Message sent ✓";
            form.reset();
            restore();
          } else {
            btn.textContent = "Failed — try again";
            restore();
          }
        } catch {
          btn.textContent = "Network error — retry";
          restore();
        }
      });
    }

    /* ---------- Smooth anchor scrolling ---------- */
    document.querySelectorAll('a[href^="#"]').forEach((a) => {
      on(a, "click", (e: Event) => {
        const id = a.getAttribute("href") || "";
        if (id.length < 2) return;
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          window.scrollTo({
            top: target.getBoundingClientRect().top + window.scrollY - 70,
            behavior: reduce ? "auto" : "smooth",
          });
        }
      });
    });

    /* ---------- Page load fade-in ---------- */
    const revealBody = () => document.body.classList.add("loaded");
    if (document.readyState === "complete") revealBody();
    else on(window, "load", revealBody);
    const fadeT = window.setTimeout(revealBody, 1200);
    cleanups.push(() => window.clearTimeout(fadeT));

    /* ---------- External links open in a new tab ---------- */
    document.querySelectorAll('a[href^="http"]').forEach((a) => {
      const anchor = a as HTMLAnchorElement;
      if (anchor.hostname !== location.hostname) {
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
      }
    });

    /* ---------- Back to top ---------- */
    let toTop = document.getElementById("toTop") as HTMLButtonElement | null;
    if (!toTop) {
      toTop = document.createElement("button");
      toTop.id = "toTop";
      toTop.setAttribute("aria-label", "Back to top");
      toTop.innerHTML =
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
      document.body.appendChild(toTop);
    }
    const toTopEl = toTop;
    on(toTopEl, "click", () =>
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" })
    );
    const onTopScroll = () => toTopEl.classList.toggle("show", window.scrollY > 500);
    on(window, "scroll", onTopScroll, { passive: true });
    onTopScroll();
    cleanups.push(() => toTopEl.remove());

    /* ---------- Scrollspy: active nav link ---------- */
    const links = Array.prototype.slice.call(
      document.querySelectorAll(".nav-link-item")
    ) as HTMLAnchorElement[];
    const spySections = links.map((l) => {
      const id = (l.getAttribute("href") || "").slice(1);
      return id ? document.getElementById(id) : null;
    });
    let spyRaf: number | null = null;
    const spy = () => {
      spyRaf = null;
      const pos = window.scrollY + 120;
      let active = -1;
      for (let i = 0; i < spySections.length; i++) {
        const s = spySections[i];
        if (s && s.offsetTop <= pos) active = i;
      }
      links.forEach((l, i) => l.classList.toggle("active", i === active));
    };
    const onSpy = () => {
      if (!spyRaf) spyRaf = requestAnimationFrame(spy);
    };
    on(window, "scroll", onSpy, { passive: true });
    on(window, "resize", onSpy, { passive: true });
    spy();

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
