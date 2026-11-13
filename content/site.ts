import { responsiveImage } from "@/lib/images";

/**
 * All of the site's text and business details live here, so updating the
 * restaurant name, contact info, menu or reviews never means touching markup.
 */

export const site = {
  name: "The Rib & Bone",
  monogram: ["R", "&", "B"],
  description: "Western modern smokehouse and comfort kitchen.",
  email: "hello@8AM.DESIGN",
  phone: "+1234567890",
  address: "Jl. Panglima Polim No. 21, Jakarta Selatan",
  hours: ["Mon–Fri: 11:00 AM – 10:00 PM", "Sat–Sun: 9:00 AM – 11:00 PM"],
  newsletterPrompt: "Subscribe to our monthly grillletter (specials + recipes!)",
  bookingUrl: "#",
  menuUrl: "#",
  credit: { label: "8AM", url: "https://8am.design/" },
  copyrightYear: 2025,
};

export const navLinks = [
  { label: "About", href: "#About" },
  { label: "DISHES", href: "#Dish" },
  { label: "GALLERY", href: "#Gallery" },
  { label: "RESERVATION", href: "#Order" },
];

export const footerLinks = [
  { label: "HOME", href: "#Home" },
  { label: "ABOUT", href: "#About" },
  { label: "DISHES", href: "#Dish" },
  { label: "CONTACT", href: "#Order" },
];

export const socialLinks = [
  { label: "INSTAGRAM", href: "https://www.instagram.com" },
  { label: "FACEBOOK", href: "https://www.facebook.com/" },
  { label: "TIKTOK", href: "https://www.tiktok.com" },
];

export const legalLinks = [
  {
    label: "License",
    href: "https://smokehouse-restaurant.webflow.io/license",
    wId: "a0816ac4-9de2-1d0a-fb40-38aa833c07cf",
  },
  {
    label: "Style Guide",
    href: "https://smokehouse-restaurant.webflow.io/style-guide",
    wId: "a0816ac4-9de2-1d0a-fb40-38aa833c07d1",
  },
  {
    label: "404",
    href: "https://smokehouse-restaurant.webflow.io/404",
    wId: "a0816ac4-9de2-1d0a-fb40-38aa833c07d3",
  },
  {
    label: "Changelog",
    href: "https://smokehouse-restaurant.webflow.io/changelog",
    wId: "a0816ac4-9de2-1d0a-fb40-38aa833c07d5",
  },
];

export const hero = {
  lines: ["WESTERN", "Modern", "SMOKEHOUSE"],
  tagline: "Comfort KITCHEN!",
};

export const about = {
  heading: "THE RIB & BONE IS A TRIBUTE TO THE TIMELIESS TRADITION OF WESTERN HOSPITALITY",
};

const dishSizes = "(max-width: 767px) 100vw, (max-width: 991px) 727.9921875px, 915px";

export const signatureDishes = {
  eyebrow: "CHEF PICK’S",
  heading: "Our Signature Cuts",
  left: responsiveImage("dish-pork-ribs-with-sauce", {
    widths: [500, 800],
    fullWidth: 915,
    sizes: dishSizes,
  }),
  center: responsiveImage("dish-grilled-chicken-potatoes"),
  right: responsiveImage("dish-festive-plate", {
    widths: [500, 800],
    fullWidth: 915,
    sizes: dishSizes,
  }),
};

const menuSizes = "(max-width: 767px) 100vw, (max-width: 991px) 727.4140625px, 939.9375px";
const menuImage = (name: string, fullWidth = 1110) =>
  responsiveImage(name, { widths: [500, 800, 1080], fullWidth, sizes: menuSizes });

const porkBelly = menuImage("menu-pork-belly-bacon");
const steaks = menuImage("menu-grilled-steaks");
const ribs = menuImage("menu-pork-ribs-with-sauce", 1280);

/** Each menu item shows three photos that fan out on hover. */
export const menuItems = [
  {
    name: "Tomahawk Ribeye",
    slug: "tomahawk-ribeye",
    href: "https://smokehouse-restaurant.webflow.io/menu/tomahawk-ribeye",
    images: [porkBelly, steaks, ribs],
  },
  {
    name: "Baby Back Ribs",
    slug: "baby-back-ribs",
    href: "https://smokehouse-restaurant.webflow.io/menu/baby-back-ribs",
    images: [ribs, steaks, porkBelly],
  },
  {
    name: "Truffle Mac & Cheese",
    slug: "truffle-mac-cheese",
    href: "https://smokehouse-restaurant.webflow.io/menu/truffle-mac-cheese",
    images: [
      menuImage("menu-cheese-sauce"),
      menuImage("menu-mac-and-cheese-closeup"),
      menuImage("menu-mac-and-cheese"),
    ],
  },
];

export const reservation = {
  heading: "RESERVATION BOOK",
  features: ["Online reservation system", "Delivery via website & apps", "Phone booking available"],
  secondHeading: "Come Hungry, Leave Happy",
  paragraphs: [
    "Whether it's date night, a team lunch, or your next family feast — we've got a table for you.",
    "Too cozy at home? Order online and enjoy our flavors wherever you are.",
  ],
};

export const testimonials = {
  heading: "REAL TALK FROM REAL DINERS",
  items: [
    {
      name: "DANIEL K.",
      rating: 5,
      paragraphs: [
        "An unforgettable dining experience from start to finish. The moment we walked in, we were greeted like old friends, which set the tone for the night. The cocktails were balanced and creative, the kind that makes you want to try more than one.",
        "When the food arrived, it exceeded expectations. Every dish was plated beautifully and tasted even better than it looked. The dessert was the perfect sweet ending to a perfect evening. I’ve already recommended Oak & Ember to half my friends.",
      ],
    },
    {
      name: "Michelle A.",
      rating: 5,
      paragraphs: [
        "Our new favorite spot for Sunday brunch with the family. The space is cozy but still feels sophisticated, and it instantly puts you in a relaxed weekend mood. The staff was warm, attentive, and made sure everyone — even the kids — had a great time.",
        "And the food? Absolutely out of this world. The ribs were smoky, fall-off-the-bone tender, and the sauces were just right — not too sweet, not too heavy. It’s rare to find a place where both adults and kids are this happy. We’ll be back for sure.",
      ],
    },
    {
      name: "RENDY T.",
      rating: 5,
      paragraphs: [
        "Hands down the best steak I’ve had in Jakarta. The cut was perfectly cooked, juicy, and full of flavor. It felt like every bite was crafted with precision, from the perfect sear to the way it was seasoned. You can really taste the difference when a restaurant takes quality this seriously.",
        "Even the sides were incredible — buttery mashed potatoes and crisp veggies that complemented the steak beautifully. I left completely satisfied and already planning my next visit. This is officially my go-to spot when I’m craving a great steak night.",
      ],
    },
  ],
};

const gallerySizes = "(max-width: 767px) 100vw, (max-width: 991px) 728px, 800px";
const galleryImage = (name: string) =>
  responsiveImage(name, { widths: [500], fullWidth: 800, sizes: gallerySizes });

export const galleryImages = {
  ribs: galleryImage("gallery-pork-ribs-with-sauce"),
  beef: galleryImage("gallery-braised-beef"),
  sausage: galleryImage("gallery-smoked-sausage"),
  steaks: galleryImage("gallery-grilled-steaks"),
};

export const gallery = {
  heading: "WHAT’S COOKING",
  items: [
    { label: "ROAST", image: galleryImages.ribs },
    { label: "PRIME", image: galleryImages.beef },
    { label: "BRAISED", image: galleryImages.sausage },
    { label: "SMOKE", image: galleryImages.steaks },
  ],
};

export const location = {
  heading: "JOIN US FIRESIDE",
  images: [galleryImages.steaks, galleryImages.ribs, galleryImages.beef],
};
