import type { Metadata } from "next";
import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/layout/PageHero";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Book a table, plan an event or get in touch with ${site.name}.`,
};

export default function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Get in touch"
        title="Book a table"
        intro="Reserve a table, ask about private dining or just say hello. We usually reply within one working day."
      />

      <section className="eo-section tight">
        <div className="eo-container eo-contact-grid">
          <div className="eo-info-list">
            <div className="eo-info-item">
              <div className="eo-info-label">Email</div>
              <a className="eo-info-value" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
            <div className="eo-info-item">
              <div className="eo-info-label">Phone</div>
              <a className="eo-info-value" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                {site.phone}
              </a>
            </div>
            <div className="eo-info-item">
              <div className="eo-info-label">Address</div>
              <div className="eo-info-value">{site.address}</div>
            </div>
            <div className="eo-info-item">
              <div className="eo-info-label">Opening hours</div>
              {site.hours.map((line) => (
                <div key={line} className="eo-info-value">
                  {line}
                </div>
              ))}
            </div>
          </div>

          {/* Not connected to a booking or email service yet: submitting shows a notice
              (see the form guard in public/assets/js/webflow-bundle.js). */}
          <form className="eo-form" data-local-preview="true" aria-label="Reservation request">
            <div className="eo-field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" autoComplete="name" required placeholder="Your name" />
            </div>
            <div className="eo-field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
              />
            </div>
            <div className="eo-field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Optional" />
            </div>
            <div className="eo-field">
              <label htmlFor="guests">Guests</label>
              <select id="guests" name="guests" defaultValue="2">
                {["1", "2", "3", "4", "5", "6", "7", "8+"].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>
            <div className="eo-field">
              <label htmlFor="date">Date</label>
              <input id="date" name="date" type="date" />
            </div>
            <div className="eo-field">
              <label htmlFor="time">Time</label>
              <input id="time" name="time" type="time" />
            </div>
            <div className="eo-field full">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Allergies, celebrations, private dining…"
              />
            </div>
            <div className="eo-field full">
              <button type="submit" className="eo-button solid">
                Send request
              </button>
            </div>
          </form>
        </div>
      </section>
    </PageShell>
  );
}
