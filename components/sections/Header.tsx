import { navLinks, site } from "@/content/site";
import NewsletterForm from "@/components/ui/NewsletterForm";

/**
 * Fixed top bar. The left icon opens the navigation panel and the right icon
 * opens the contact panel; Webflow's interaction runtime handles the toggling.
 */
export default function Header() {
  return (
    <section className="navbar-section">
      <div className="w-layout-blockcontainer navbar-container w-container">
        <div className="navbar-block">
          <div data-w-id="b282e5de-5251-110e-ab09-7c872357a00d" className="navbar-menu-icon-block">
            <img
              src="/assets/images/icon-menu.svg"
              loading="lazy"
              alt=""
              className="navbar-menu-icon-1 open"
            />
            <img
              src="/assets/images/icon-close.svg"
              loading="lazy"
              alt=""
              className="navbar-menu-icon-1 close"
            />
          </div>

          <div className="navbar-inner-block">
            {site.monogram.map((letter) => (
              <div key={letter} className="navbar-text-block">
                <div className="text-block">{letter}</div>
              </div>
            ))}
          </div>

          <div data-w-id="b282e5de-5251-110e-ab09-7c872357a01a" className="navbar-menu-icon-block">
            <img
              src="/assets/images/icon-phone.svg"
              loading="lazy"
              alt=""
              className="navbar-menu-icon-2 open"
            />
            <img
              src="/assets/images/icon-close.svg"
              loading="lazy"
              alt=""
              className="navbar-menu-icon-2 close"
            />
          </div>

          <div className="navbar-menu-block">
            {navLinks.map((link, i) => {
              const position = i === 0 ? " first" : i === navLinks.length - 1 ? " last" : "";
              return (
                <a key={link.href} href={link.href} className={`navbar-link${position}`}>
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="navbar-cta-block">
            <NewsletterForm placement="navbar" />
          </div>
        </div>
      </div>
    </section>
  );
}
