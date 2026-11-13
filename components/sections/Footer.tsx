import { footerLinks, legalLinks, site, socialLinks } from "@/content/site";
import NewsletterForm from "@/components/ui/NewsletterForm";

function LinkColumn({
  links,
  external,
}: {
  links: { label: string; href: string }[];
  external?: boolean;
}) {
  return (
    <div className="footer-flex-2">
      {links.map((link, i) => (
        <a
          key={link.label}
          href={link.href}
          {...(external ? { target: "_blank" } : {})}
          className={`footer-link${i === links.length - 1 ? " last" : ""} w-inline-block`}
        >
          <div>{link.label}</div>
        </a>
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <section className="footer-section">
      <div className="w-layout-blockcontainer footer-container w-container">
        <div className="footer-block">
          <div className="footer-inner-block-1">
            <div className="footer-flex-1">
              <LinkColumn links={footerLinks} />
              <LinkColumn links={socialLinks} external />
            </div>
            <div className="footer-flex-3">
              <NewsletterForm placement="footer" />
            </div>
          </div>
          <div className="footer-inner-block-2">
            <div className="footer-text-3">
              © {site.copyrightYear} {site.name}. Crafted with fire by{" "}
              <a href={site.credit.url} className="link">
                {site.credit.label}
              </a>
              .
            </div>
            <div className="footer-flex-4">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  data-w-id={link.wId}
                  href={link.href}
                  className="footer-menu-link"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
