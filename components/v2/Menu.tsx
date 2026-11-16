import { menuItems } from "@/content/site";

const IMAGE_POSITIONS = ["", " _2nd", " _3rd"];

export default function Menu() {
  return (
    <div id="Dish" data-w-id="b2583d93-7815-817c-7ee9-dd800dba0e67" className="menu-scroll-block">
      <section className="menu-section">
        <div className="w-layout-blockcontainer menu-container w-container">
          <div className="menu-block">
            <div className="menu-collection-list-wrapper w-dyn-list">
              <div role="list" className="menu-collection-list w-dyn-items">
                {menuItems.map((item) => (
                  <div key={item.slug} role="listitem" className="menu-collection-item w-dyn-item">
                    <div className="menu-item-name">{item.name}</div>
                    {item.images.map((image, i) => (
                      <img
                        key={i}
                        {...image}
                        loading="lazy"
                        alt={item.slug}
                        className={`menu-item-image${IMAGE_POSITIONS[i]}`}
                      />
                    ))}
                    <a
                      aria-label="Menu Item Link"
                      href={item.href}
                      className="menu-item-link-block w-inline-block"
                    >
                      <div className="menu-item-link-text">{item.name}</div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
