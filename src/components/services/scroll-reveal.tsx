"use client";

import { useEffect } from "react";

/**
 * Mount once per page. Observes every `[data-reveal]` element and reveals it as
 * it scrolls into view.
 *
 * The hidden state lives behind `html[data-reveal-ready]`, which is only set
 * here — so with JavaScript disabled (or before hydration) all content stays
 * fully visible instead of being stuck at opacity 0.
 */
export function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") {
      return;
    }

    root.setAttribute("data-reveal-ready", "");

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]")
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    for (const target of targets) {
      // Anything already on screen at load reveals immediately — no flash.
      if (target.getBoundingClientRect().top < window.innerHeight) {
        target.classList.add("is-revealed");
        continue;
      }
      observer.observe(target);
    }

    return () => {
      observer.disconnect();
      root.removeAttribute("data-reveal-ready");
    };
  }, []);

  return null;
}
