import { reservation as r, site } from "@/content/site";
import SecondaryButton from "@/components/ui/SecondaryButton";

export default function Reservation() {
  return (
    <div data-w-id="d613e21a-3e10-0707-34e9-187aa7b4098d" className="order-scroll-block">
      <div id="Order" className="order-trigger"></div>
      <section className="order-section">
        <div className="w-layout-blockcontainer order-container w-container">
          <div className="order-block">
            <div className="order-inner-block">
              <div className="order-page-block-1">
                <h3 className="order-heading">{r.heading}</h3>
                <div className="order-flex-1">
                  {r.features.map((feature) => (
                    <div key={feature} className="order-text-block">
                      <div className="order-text-background"></div>
                      <div className="order-text-1">{feature}</div>
                    </div>
                  ))}
                </div>
                <SecondaryButton
                  label="BOOK A TABLE"
                  href={site.bookingUrl}
                  variant="order"
                  wId="4ef7b3f1-10db-febc-b4a7-a668932e5fab"
                />
              </div>
              <div className="order-page-block-2">
                <div className="order-background-block"></div>
                <h3 className="order-heading _2nd">{r.secondHeading}</h3>
                <div className="order-flex-2">
                  {r.paragraphs.map((text) => (
                    <div key={text} className="order-text-2">
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
