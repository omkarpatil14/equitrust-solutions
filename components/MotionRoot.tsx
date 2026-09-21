"use client";

import { useEffect } from "react";

export default function MotionRoot() {
  useEffect(() => {
    document.documentElement.classList.add("js");
    const header = document.querySelector(".site-header");
    const progress = document.querySelector<HTMLElement>(".scroll-progress");
    const glow = document.querySelector<HTMLElement>(".pointer-glow");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onScroll = () => {
      const y = window.scrollY;
      header?.classList.toggle("is-scrolled", y > 8);
      if (progress) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      }
    };

    const onMove = (e: PointerEvent) => {
      if (!glow || reduce) return;
      glow.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });

    const nodes = document.querySelectorAll("[data-reveal]");
    if (reduce || !("IntersectionObserver" in window)) {
      nodes.forEach((el) => el.classList.add("is-in"));
    } else {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-in");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
      );
      nodes.forEach((el) => io.observe(el));
      return () => {
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("pointermove", onMove);
        io.disconnect();
      };
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <div className="pointer-glow" aria-hidden="true" />
    </>
  );
}
