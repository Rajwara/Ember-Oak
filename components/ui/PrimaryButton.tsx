/** Pink "VIEW MENU" style button whose arrow slides on hover (Webflow interaction). */
const ARROW_REST =
  "translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)";

type Props = {
  label: string;
  href: string;
  variant: "hero" | "gallery";
  /** Webflow interaction id that drives the hover animation. */
  wId: string;
};

// Drawn inline (not an <img>) so the arrow follows the colour theme.
function Arrow() {
  return (
    <svg
      viewBox="0 0 50 51"
      fill="none"
      aria-hidden="true"
      style={{ transform: ARROW_REST }}
      className="primary-button-icon"
    >
      <path
        d="M26.1719 11.6797L40.2344 25.7422L26.1719 39.8047M38.2812 25.7422H9.76562"
        stroke="var(--primary-color--p-100)"
        strokeWidth="4"
        strokeMiterlimit="10"
        strokeLinecap="square"
      />
    </svg>
  );
}

export default function PrimaryButton({ label, href, variant, wId }: Props) {
  return (
    <a data-w-id={wId} href={href} className={`primary-button ${variant} w-inline-block`}>
      <div>{label}</div>
      <div className={`primary-button-icon-block ${variant}`}>
        <Arrow />
        <Arrow />
      </div>
    </a>
  );
}
