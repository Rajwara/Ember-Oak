import { gallery, site } from "@/content/site";
import PrimaryButton from "@/components/ui/PrimaryButton";

// Webflow gave each label its own class (text-block-4 … text-block-7).
const FIRST_LABEL_CLASS = 4;

export default function Gallery() {
  return (
    <section id="Gallery" className="gallery-section">
      <div className="w-layout-blockcontainer gallery-container w-container">
        <div className="gallery-block">
          <div className="gallery-inner-block-1">
            <h2 className="gallery-heading">{gallery.heading}</h2>
            <PrimaryButton
              label="VIEW MENU"
              href={site.menuUrl}
              variant="gallery"
              wId="019ec7f2-597e-d2c2-2db2-0e516f116d4e"
            />
          </div>
          <div className="gallery-inner-block-2">
            {gallery.items.map((item, i) => (
              <div key={item.label} className="gallery-item-block">
                <div className="gallery-item-flex-1">
                  <div className={`text-block-${FIRST_LABEL_CLASS + i}`}>{item.label}</div>
                </div>
                <img {...item.image} loading="lazy" alt="" className="gallery-item-image" />
                <div className="gallery-item-background"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
