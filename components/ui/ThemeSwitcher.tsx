"use client";

import { useEffect, useState } from "react";
import { palettes, THEME_STORAGE_KEY, type Palette } from "@/lib/themes";

type Theme = { id: string; base: string; accent: string };

const ORIGINAL = palettes[0];

function toRgb(hex: string) {
  const n = parseInt(hex.slice(1), 16);
  return `rgb(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255})`;
}

/**
 * Webflow's animations write colours inline (e.g. the menu icon boxes) using the
 * palette active at the time. Swap those leftovers to the new palette so the
 * page doesn't mix old and new colours until the next animation runs.
 */
function recolourInlineStyles(from: Theme, to: Theme) {
  const swaps = new Map([
    [toRgb(from.base), to.base],
    [toRgb(from.accent), to.accent],
  ]);
  document.querySelectorAll<HTMLElement>("[style*='rgb']").forEach((el) => {
    for (const prop of ["backgroundColor", "color", "borderColor"] as const) {
      const next = swaps.get(el.style[prop]);
      if (next) el.style[prop] = next;
    }
  });
}

function applyTheme(theme: Theme, previous: Theme) {
  const style = document.documentElement.style;
  if (theme.id === ORIGINAL.id) {
    // Fall back to the colours defined in the Webflow stylesheet.
    style.removeProperty("--base-color--base");
    style.removeProperty("--primary-color--p-100");
    style.removeProperty("--primary-color--p-200");
  } else {
    style.setProperty("--base-color--base", theme.base);
    style.setProperty("--primary-color--p-100", theme.accent);
    style.setProperty("--primary-color--p-200", `color-mix(in srgb, ${theme.accent} 65%, black)`);
  }
  recolourInlineStyles(previous, theme);
}

function readSaved(): Theme | null {
  try {
    const saved = JSON.parse(localStorage.getItem(THEME_STORAGE_KEY) ?? "null");
    return saved?.base && saved?.accent ? saved : null;
  } catch {
    return null;
  }
}

function save(theme: Theme) {
  try {
    if (theme.id === ORIGINAL.id) localStorage.removeItem(THEME_STORAGE_KEY);
    else localStorage.setItem(THEME_STORAGE_KEY, JSON.stringify(theme));
  } catch {
    // Storage can be blocked (private mode); the colours still change for this visit.
  }
}

function Swatch({ base, accent }: { base: string; accent: string }) {
  return (
    <span className="eo-theme-swatch" aria-hidden="true">
      <span style={{ background: base }} />
      <span style={{ background: accent }} />
    </span>
  );
}

/** Floating button (bottom right) for trying out colour palettes on the live site. */
export default function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>(ORIGINAL);

  useEffect(() => {
    const saved = readSaved();
    if (saved) setTheme(saved);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const choose = (next: Theme) => {
    applyTheme(next, theme);
    setTheme(next);
    save(next);
  };

  const pickPalette = (p: Palette) => choose({ id: p.id, base: p.base, accent: p.accent });
  const pickCustom = (part: "base" | "accent", value: string) =>
    choose({ ...theme, id: "custom", [part]: value });

  return (
    <div className="eo-theme">
      {open && (
        <div className="eo-theme-panel" role="dialog" aria-label="Colour themes">
          <p className="eo-theme-title">Site colours</p>
          <p className="eo-theme-hint">
            Preview a palette. Your choice is remembered on this device.
          </p>
          <div className="eo-theme-list">
            {palettes.map((p) => (
              <button
                key={p.id}
                type="button"
                className="eo-theme-option"
                aria-pressed={theme.id === p.id}
                onClick={() => pickPalette(p)}
              >
                <Swatch base={p.base} accent={p.accent} />
                <span>
                  <span className="eo-theme-name">{p.name}</span>
                  <span className="eo-theme-hex">
                    {p.base} · {p.accent}
                  </span>
                </span>
              </button>
            ))}
          </div>
          <div className="eo-theme-custom">
            <label>
              Background
              <input
                type="color"
                value={theme.base}
                onChange={(e) => pickCustom("base", e.target.value)}
              />
              <span className="eo-theme-hex">{theme.base}</span>
            </label>
            <label>
              Accent
              <input
                type="color"
                value={theme.accent}
                onChange={(e) => pickCustom("accent", e.target.value)}
              />
              <span className="eo-theme-hex">{theme.accent}</span>
            </label>
          </div>
        </div>
      )}
      <button
        type="button"
        className="eo-theme-toggle"
        aria-expanded={open}
        aria-label={open ? "Close colour themes" : "Change site colours"}
        onClick={() => setOpen((v) => !v)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round">
          {open ? (
            <path d="M6 6l12 12M18 6L6 18" />
          ) : (
            <path d="M12 3a9 9 0 1 0 0 18c1.1 0 1.8-.9 1.8-1.8 0-.5-.2-.9-.5-1.2-.3-.3-.5-.7-.5-1.2 0-1 .8-1.8 1.8-1.8H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8zM7.5 12.5h.01M9.5 8h.01M14.5 8h.01M17 11.5h.01" />
          )}
        </svg>
      </button>
    </div>
  );
}
