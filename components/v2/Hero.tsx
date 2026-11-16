import { hero, site } from "@/content/site";
import PrimaryButton from "@/components/ui/PrimaryButton";
import SecondaryButton from "@/components/ui/SecondaryButton";

// Starting positions for the intro animation; Webflow animates them into place on load.
const enter = (y: string, rotate = "0") =>
  `translate3d(0, ${y}, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(${rotate}) skew(0, 0)`;

export default function Hero() {
  const [line1, line2, line3] = hero.lines;
  return (
    <section className="hero-section">
      <div className="w-layout-blockcontainer hero-container w-container">
        <div className="hero-block">
          <div style={{ transform: enter("70vh") }} className="hero-inner-block-1">
            <div className="hero-heading-block">
              <h1 style={{ transform: enter("100%", "-4deg") }} className="hero-heading _2nd">
                {line1}
              </h1>
              <h1 className="hero-heading _3rd">{line2}</h1>
            </div>
            <div className="hero-heading-block">
              <h1 className="hero-heading">{line3}</h1>
              <div style={{ transform: enter("40vh", "0deg") }} className="hero-text-1">
                {hero.tagline}
              </div>
            </div>
          </div>

          <div style={{ opacity: "0" }} className="hero-inner-block-2">
            <SecondaryButton
              label="BOOK A TABLE"
              href={site.bookingUrl}
              variant="hero"
              wId="051066d1-56c2-7b8a-c37e-999de36af08f"
            />
            <PrimaryButton
              label="VIEW MENU"
              href={site.menuUrl}
              variant="hero"
              wId="568069dc-87c5-9bea-04f8-9231a44ff57b"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
