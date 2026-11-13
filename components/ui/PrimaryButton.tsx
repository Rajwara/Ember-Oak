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

export default function PrimaryButton({ label, href, variant, wId }: Props) {
  return (
    <a data-w-id={wId} href={href} className={`primary-button ${variant} w-inline-block`}>
      <div>{label}</div>
      <div className={`primary-button-icon-block ${variant}`}>
        {[0, 1].map((i) => (
          <img
            key={i}
            src="/assets/images/icon-arrow-right.svg"
            loading="lazy"
            style={{ transform: ARROW_REST }}
            alt=""
            className="primary-button-icon"
          />
        ))}
      </div>
    </a>
  );
}
