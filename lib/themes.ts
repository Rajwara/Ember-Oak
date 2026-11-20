/**
 * Colour palettes for the floating colour switcher. Each palette swaps the
 * template's two brand colours: `base` (page background) and `accent`
 * (buttons, panels, footer). "Original" is the template's own palette.
 * White text stays readable on both colours in every palette.
 */
export type Palette = { id: string; name: string; base: string; accent: string };

export const palettes: Palette[] = [
  { id: "original", name: "Original", base: "#114b3a", accent: "#d03b4d" },
  { id: "oxblood-charcoal", name: "Oxblood & Charcoal", base: "#1a1412", accent: "#7d1d17" },
  { id: "dry-aged-wine", name: "Dry-Aged Wine", base: "#16110f", accent: "#6e1a24" },
  { id: "ember-copper", name: "Ember Copper", base: "#1c1613", accent: "#a2461f" },
  { id: "butcher-red", name: "Butcher Red", base: "#161111", accent: "#e3262c" },
  { id: "charcoal-ember", name: "Charcoal & Ember", base: "#1f1b18", accent: "#c4501f" },
  { id: "smoked-oak", name: "Smoked Oak", base: "#33241b", accent: "#a86f2c" },
  { id: "midnight-copper", name: "Midnight & Copper", base: "#15223a", accent: "#b85a2e" },
  { id: "burgundy-brass", name: "Burgundy & Brass", base: "#4a1822", accent: "#9c7a2e" },
  { id: "olive-terracotta", name: "Olive & Terracotta", base: "#323a24", accent: "#b5532f" },
  { id: "ink-saffron", name: "Ink & Saffron", base: "#0f1d2b", accent: "#b07a12" },
];

export const THEME_STORAGE_KEY = "eo-theme";

/**
 * Runs in <head> before the page paints, so a saved palette applies without a
 * flash of the default colours. Kept as a string because it is inlined.
 */
export const themeBootScript = `(function(){try{var t=JSON.parse(localStorage.getItem("${THEME_STORAGE_KEY}")||"null");if(!t||!t.base||!t.accent)return;var s=document.documentElement.style;s.setProperty("--base-color--base",t.base);s.setProperty("--primary-color--p-100",t.accent);s.setProperty("--primary-color--p-200","color-mix(in srgb, "+t.accent+" 65%, black)");}catch(e){}})();`;
