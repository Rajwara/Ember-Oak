"use client";

import { useEffect } from "react";

/**
 * Behaviour for MeatHero (ported from the banner's original script.js):
 * starts the intro when the banner is on screen, counts the stats up, plays
 * the cleaver impact, adds mouse parallax, runs the dropdown menu and the
 * button ripple. Renders nothing itself.
 */
export default function HeroMotion() {
  useEffect(() => {
    const hero = document.getElementById("mm-hero");
    if (!hero) return;

    const cleanups: (() => void)[] = [];
    const on = <K extends keyof HTMLElementEventMap>(
      target: HTMLElement | Document,
      type: K,
      handler: (e: HTMLElementEventMap[K]) => void,
    ) => {
      target.addEventListener(type, handler as EventListener);
      cleanups.push(() => target.removeEventListener(type, handler as EventListener));
    };

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

    /* ---------- Counters ---------- */
    const counters = [...hero.querySelectorAll<HTMLElement>("[data-count]")].map((el) => {
      const target = parseFloat(el.dataset.count ?? "0");
      const decimals = parseInt(el.dataset.decimals ?? "0", 10);
      const suffix = el.dataset.suffix ?? "";
      const format = (v: number) => v.toFixed(decimals) + suffix;
      return { el, target, format };
    });
    if (!reduceMotion) counters.forEach(({ el, format }) => (el.textContent = format(0)));

    const timers: number[] = [];
    let rafs: number[] = [];
    const startCounters = (delay: number) => {
      counters.forEach(({ el, target, format }) => {
        if (reduceMotion) {
          el.textContent = format(target);
          return;
        }
        timers.push(
          window.setTimeout(() => {
            const t0 = performance.now();
            const tick = (now: number) => {
              const p = Math.min((now - t0) / 1600, 1);
              el.textContent = format(target * (1 - Math.pow(1 - p, 3)));
              if (p < 1) rafs.push(requestAnimationFrame(tick));
            };
            rafs.push(requestAnimationFrame(tick));
          }, delay),
        );
      });
    };

    /* ---------- Start the intro when the banner is in view ---------- */
    let started = false;
    const start = () => {
      if (started) return;
      started = true;
      hero.classList.add("is-in");
      startCounters(reduceMotion ? 0 : 2300);
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          start();
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(hero);
    cleanups.push(() => io.disconnect());

    /* ---------- Cleaver impact: shake, squish, ring, flying bits ---------- */
    const knifeDrop = hero.querySelector<HTMLElement>(".mm-knife__drop");
    const impact = hero.querySelector<HTMLElement>(".mm-impact");
    const spawnChips = () => {
      if (!impact) return;
      const accent = getComputedStyle(hero).getPropertyValue("--mm-red").trim() || "#e3262c";
      const colors = ["#ffffff", "#ffd2cf", accent, "#5c0609"];
      for (let i = 0; i < 16; i++) {
        const chip = document.createElement("span");
        chip.className = "mm-chip";
        const angle = (-160 + Math.random() * 140) * (Math.PI / 180); // mostly upward
        const dist = 60 + Math.random() * 120;
        chip.style.setProperty("--x", `${Math.cos(angle) * dist}px`);
        chip.style.setProperty("--y", `${Math.sin(angle) * dist}px`);
        chip.style.setProperty("--r", `${Math.random() * 540 - 270}deg`);
        chip.style.setProperty("--s", `${3 + Math.random() * 6}px`);
        chip.style.setProperty("--c", colors[i % colors.length]);
        chip.style.animationDelay = `${Math.random() * 60}ms`;
        impact.appendChild(chip);
        chip.addEventListener("animationend", () => chip.remove());
      }
    };
    if (knifeDrop && !reduceMotion) {
      on(knifeDrop, "animationend", (e) => {
        if (e.animationName !== "mmKnifeDrop") return;
        hero.classList.add("is-impact");
        spawnChips();
      });
    }

    /* ---------- Mouse parallax (smoothed) ---------- */
    if (canHover && !reduceMotion) {
      let tx = 0,
        ty = 0,
        cx = 0,
        cy = 0,
        raf = 0;
      const loop = () => {
        cx += (tx - cx) * 0.08;
        cy += (ty - cy) * 0.08;
        hero.style.setProperty("--px", cx.toFixed(4));
        hero.style.setProperty("--py", cy.toFixed(4));
        raf =
          Math.abs(tx - cx) > 0.001 || Math.abs(ty - cy) > 0.001 ? requestAnimationFrame(loop) : 0;
      };
      const kick = () => {
        if (!raf) raf = requestAnimationFrame(loop);
      };
      on(hero, "pointermove", (e) => {
        const r = hero.getBoundingClientRect();
        tx = ((e.clientX - r.left) / r.width - 0.5) * 2; // -1 … 1
        ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
        kick();
      });
      on(hero, "pointerleave", () => {
        tx = 0;
        ty = 0;
        kick();
      });
      cleanups.push(() => cancelAnimationFrame(raf));
    }

    /* ---------- Dropdown menu ---------- */
    const toggle = hero.querySelector<HTMLButtonElement>(".mm-menu__toggle");
    const panel = hero.querySelector<HTMLElement>(".mm-menu__panel");
    if (toggle && panel) {
      const setOpen = (open: boolean) => {
        toggle.setAttribute("aria-expanded", String(open));
        toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
        panel.classList.toggle("is-open", open);
      };
      on(toggle, "click", (e) => {
        e.stopPropagation();
        setOpen(toggle.getAttribute("aria-expanded") !== "true");
      });
      on(document, "click", (e) => {
        if (!panel.contains(e.target as Node)) setOpen(false);
      });
      on(document, "keydown", (e) => {
        if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
          setOpen(false);
          toggle.focus();
        }
      });
      // Close after following an in-page link (e.g. "Our Dishes").
      on(panel, "click", (e) => {
        if ((e.target as HTMLElement).closest("a")) setOpen(false);
      });
    }

    /* ---------- Ripple on the menu button ---------- */
    const shop = hero.querySelector<HTMLElement>(".mm-shop");
    if (shop && !reduceMotion) {
      on(shop, "pointerdown", (e) => {
        const r = shop.getBoundingClientRect();
        const size = Math.max(r.width, r.height);
        const ripple = document.createElement("span");
        ripple.className = "mm-ripple";
        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - r.left - size / 2}px`;
        ripple.style.top = `${e.clientY - r.top - size / 2}px`;
        shop.appendChild(ripple);
        ripple.addEventListener("animationend", () => ripple.remove());
      });
    }

    return () => {
      cleanups.forEach((fn) => fn());
      timers.forEach((t) => clearTimeout(t));
      rafs.forEach((r) => cancelAnimationFrame(r));
      rafs = [];
    };
  }, []);

  return null;
}
