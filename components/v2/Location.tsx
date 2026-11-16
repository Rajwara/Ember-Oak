import { location, site } from "@/content/site";

// Webflow gave each detail line its own class (text-block-8 … text-block-11).
const FIRST_DETAIL_CLASS = 8;

export default function Location() {
  const details = [site.address, site.phone, ...site.hours];
  return (
    <section data-w-id="66d4db47-fd19-81ce-c94f-53f304640d85" className="location-section">
      <div className="w-layout-blockcontainer location-container w-container">
        <div className="location-block">
          <h2 className="location-heading">{location.heading}</h2>
          <div className="location-image-block">
            {location.images.map((image, i) => (
              <img
                key={i}
                {...image}
                loading="lazy"
                alt=""
                className={`location-image _${i + 1}`}
              />
            ))}
          </div>
          <div className="location-inner-block">
            {details.map((text, i) => (
              <div
                key={text}
                className={`location-item-block${i === details.length - 1 ? " last" : ""}`}
              >
                <div className={`text-block-${FIRST_DETAIL_CLASS + i}`}>{text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
