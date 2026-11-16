import { signatureDishes as d } from "@/content/site";

export default function SignatureDishes() {
  return (
    <div data-w-id="39387224-46fb-1c97-fcbc-e44b07edd095" className="dish-scroll-block">
      <section className="dish-section">
        <div className="w-layout-blockcontainer dish-container w-container">
          <div className="dish-block">
            <div className="dish-circle-block"></div>
            <div className="dish-text-1 _1st">{d.eyebrow}</div>
            <div className="dish-text-1 _2nd">{d.eyebrow}</div>
            <div className="dish-text-2">{d.heading}</div>
            <div className="dish-inner-block">
              <img {...d.left} loading="lazy" alt="" className="dish-image-1 _1st" />
              <img {...d.center} loading="lazy" alt="" className="dish-image-2" />
              <img {...d.right} loading="lazy" alt="" className="dish-image-1 _2nd" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
