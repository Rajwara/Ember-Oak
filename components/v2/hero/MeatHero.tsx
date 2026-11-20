import { Archivo_Black, Poppins } from "next/font/google";
import { heroV2 as hero, site, testimonials } from "@/content/site";
import HeroMotion from "./HeroMotion";
import "./meat-hero.css";

const archivo = Archivo_Black({ weight: "400", subsets: ["latin"], variable: "--mm-font-display" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--mm-font-body",
});

const STAR_PATH = "M12 2.5l2.9 6 6.6.8-4.9 4.6 1.3 6.5L12 17.2 6.1 20.4l1.3-6.5L2.5 9.3l6.6-.8z";

function initials(name: string) {
  return name
    .replace(/\./g, "")
    .split(/\s+/)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

/**
 * Animated banner for /v2: the title rises in, a cleaver drops onto the steak,
 * counters tick up and the scene follows the mouse. Interactions live in
 * HeroMotion; colours follow the site theme (--primary-color--p-100).
 */
export default function MeatHero() {
  const telHref = `tel:${site.phone.replace(/\s/g, "")}`;

  return (
    <section
      className={`mm-hero ${archivo.variable} ${poppins.variable}`}
      id="mm-hero"
      aria-label={`${site.name} ${hero.title.toLowerCase()}`}
    >
      {/* Gives the big title its rough, chopped-edge look */}
      <svg className="mm-svg-defs" aria-hidden="true" focusable="false">
        <filter id="mm-distress" x="-5%" y="-10%" width="110%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.045"
            numOctaves={3}
            seed={4}
            result="warp"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="warp"
            scale={7}
            xChannelSelector="R"
            yChannelSelector="G"
            result="rough"
          />
          <feTurbulence
            type="turbulence"
            baseFrequency="0.035 0.11"
            numOctaves={2}
            seed={21}
            result="holes"
          />
          <feColorMatrix
            in="holes"
            type="matrix"
            values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  -14 0 0 0 7.2"
            result="holesMask"
          />
          <feComposite in="rough" in2="holesMask" operator="in" />
        </filter>
      </svg>

      <div className="mm-hero__bg" aria-hidden="true">
        <span className="mm-hero__glow"></span>
        <span className="mm-hero__grain"></span>
      </div>

      {/* ---------- Nav ---------- */}
      <header className="mm-nav">
        <a
          href="/v2"
          className="mm-logo mm-nav__item"
          style={{ "--d-in": ".15s" } as React.CSSProperties}
          aria-label={`${site.name} home`}
        >
          <span className="mm-logo__mark" aria-hidden="true">
            <span>E</span>
            <span className="mm-logo__amp">&amp;</span>
            <span>O</span>
          </span>
        </a>

        <nav
          className="mm-menu mm-nav__item"
          style={{ "--d-in": ".25s" } as React.CSSProperties}
          aria-label="Main"
        >
          <button
            className="mm-menu__toggle"
            type="button"
            aria-label="Open menu"
            aria-expanded="false"
            aria-controls="mm-menu-panel"
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className="mm-menu__links">
            {hero.links.map((link, i) => (
              <li key={link.href}>
                <a href={link.href} className={i === 0 ? "is-active" : undefined}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a className="mm-menu__call" href={telHref} aria-label={`Call ${site.phone}`}>
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
            </svg>
          </a>

          <div className="mm-menu__panel" id="mm-menu-panel">
            {hero.links.map((link) => (
              <a key={link.href} href={link.href} className="mm-panel-main">
                {link.label}
              </a>
            ))}
            {hero.moreLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </nav>

        <a
          href={hero.cta.href}
          className="mm-login mm-nav__item"
          style={{ "--d-in": ".35s" } as React.CSSProperties}
          aria-label={hero.cta.label}
        >
          <span>{hero.cta.label}</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3.5" y="5" width="17" height="15.5" rx="2" />
            <path d="M3.5 10h17M8 3v4M16 3v4" />
          </svg>
        </a>
      </header>

      {/* ---------- Title ---------- */}
      <div className="mm-title plx" style={{ "--d": -8 } as React.CSSProperties}>
        <p className="mm-title__eyebrow">{hero.eyebrow}</p>
        <div className="mm-title__shake">
          <h1 className="mm-title__main" aria-label={hero.title}>
            {hero.title.split("").map((char, i) => (
              <span
                key={i}
                className="ch"
                style={{ "--i": i } as React.CSSProperties}
                aria-hidden="true"
              >
                {char}
              </span>
            ))}
          </h1>
        </div>
      </div>

      {/* ---------- Visual stage ---------- */}
      <div className="mm-stage">
        <div className="mm-table plx" style={{ "--d": 4 } as React.CSSProperties}>
          <div className="mm-table__in">
            <div className="mm-img mm-img--table">
              <img src="/assets/images/hero-wood-table.webp" alt="" width={2000} height={436} />
            </div>
          </div>
        </div>

        <div className="mm-knife plx" style={{ "--d": 22 } as React.CSSProperties}>
          <div className="mm-knife__drop">
            <div className="mm-knife__recoil">
              <div className="mm-img mm-img--knife">
                <img
                  src="/assets/images/hero-cleaver.webp"
                  alt="Butcher cleaver with a walnut handle"
                  width={548}
                  height={1500}
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mm-meat plx" style={{ "--d": 12 } as React.CSSProperties}>
          <div className="mm-meat__rise">
            <div className="mm-meat__squish">
              <div className="mm-img">
                <img
                  src="/assets/images/hero-raw-steak.webp"
                  alt="Thick marbled raw beef steak"
                  width={1399}
                  height={760}
                  fetchPriority="high"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mm-impact" aria-hidden="true"></div>

        {hero.badges.map((badge, i) => (
          <div
            key={badge}
            className={`mm-badge-wrap mm-badge-wrap--${i === 0 ? "left" : "right"} plx`}
            style={{ "--d": i === 0 ? 18 : 16 } as React.CSSProperties}
          >
            <div
              className="mm-float"
              style={{ "--float-delay": `${i * -2}s` } as React.CSSProperties}
            >
              <span
                className="mm-badge"
                style={{ "--d-in": `${2.35 + i * 0.15}s` } as React.CSSProperties}
              >
                <span className="mm-badge__icon">
                  {i === 0 ? (
                    // flame
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2c.6 3.2-1.3 5-2.9 6.8C7.6 10.5 6 12.3 6 15a6 6 0 0 0 12 0c0-2.2-1-4-2.2-5.3.1 1.6-.4 3-1.6 3.6.3-3.4-.6-7.6-2.2-11.3zM12 21a3 3 0 0 1-3-3c0-1.6 1.2-2.7 2.2-3.8.3 1.3 1.1 2 1.9 2.4.6-.6.9-1.4.9-2.3A3 3 0 0 1 15 18a3 3 0 0 1-3 3z" />
                    </svg>
                  ) : (
                    // rosette
                    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <circle cx="12" cy="9" r="6.5" />
                      <path d="M8 14.2 6.5 22l5.5-2.8 5.5 2.8L16 14.2a8 8 0 0 1-8 0z" />
                      <circle cx="12" cy="9" r="3" fill="#fff" />
                    </svg>
                  )}
                </span>
                {badge}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ---------- Stats / contact / CTA ---------- */}
      <div className="mm-info">
        <div className="mm-rating mm-reveal" style={{ "--d-in": "2.3s" } as React.CSSProperties}>
          <div className="mm-stat__num">
            <span data-count={hero.rating.value} data-decimals="1">
              {hero.rating.value.toFixed(1)}
            </span>
          </div>
          <div className="mm-stars" aria-label={`Rated ${hero.rating.value} out of 5`}>
            {[0, 1, 2, 3, 4].map((i) => (
              <svg
                key={i}
                style={{ "--i": i } as React.CSSProperties}
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d={STAR_PATH} />
              </svg>
            ))}
          </div>
          <p className="mm-stat__label">{hero.rating.label}</p>
        </div>

        <div className="mm-customers mm-reveal" style={{ "--d-in": "2.4s" } as React.CSSProperties}>
          <div className="mm-stat__num">
            <span data-count={hero.guests.value} data-suffix={hero.guests.suffix}>
              {hero.guests.value}
              {hero.guests.suffix}
            </span>
          </div>
          <div className="mm-avatars" aria-hidden="true">
            {testimonials.items.map((review, i) => (
              <span
                key={review.name}
                className="mm-avatar"
                style={{ "--i": i } as React.CSSProperties}
              >
                {initials(review.name)}
              </span>
            ))}
          </div>
          <p className="mm-stat__label">{hero.guests.label}</p>
        </div>

        <div className="mm-contact mm-reveal" style={{ "--d-in": "2.6s" } as React.CSSProperties}>
          <p className="mm-contact__label">{hero.contactLabel}</p>
          <div className="mm-contact__btns">
            <a href="/contact" className="mm-round-btn" aria-label="Find us">
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2a7 7 0 0 0-7 7c0 5.2 7 13 7 13s7-7.8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
              </svg>
            </a>
            <a
              href={telHref}
              className="mm-round-btn mm-round-btn--ping"
              aria-label={`Call ${site.phone}`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
              </svg>
            </a>
            <a
              href={`mailto:${site.email}`}
              className="mm-round-btn"
              aria-label={`Email ${site.email}`}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M3 5.5h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-11a1 1 0 0 1 1-1zm1.4 2 7.6 5.6 7.6-5.6H4.4zM20 9.3l-7.4 5.4a1 1 0 0 1-1.2 0L4 9.3v7.2h16V9.3z" />
              </svg>
            </a>
          </div>
        </div>

        <a
          href={hero.menuButton.href}
          className="mm-shop mm-reveal"
          style={{ "--d-in": "2.7s" } as React.CSSProperties}
        >
          <span>{hero.menuButton.label}</span>
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </a>
      </div>

      <HeroMotion />
    </section>
  );
}
