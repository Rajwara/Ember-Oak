/** Outlined "BOOK A TABLE" button whose background fills on hover (Webflow interaction). */
type Props = {
  label: string;
  href: string;
  variant: "hero" | "order";
  /** Webflow interaction id that drives the hover animation. */
  wId: string;
};

export default function SecondaryButton({ label, href, variant, wId }: Props) {
  return (
    <a data-w-id={wId} href={href} className={`secondary-button ${variant} w-inline-block`}>
      {variant === "hero" ? (
        <div style={{ width: "0%" }} className="secondary-button-block"></div>
      ) : (
        <div className="secondary-button-block order"></div>
      )}
      <div className="secondary-button-text">{label}</div>
    </a>
  );
}
