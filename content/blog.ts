import { responsiveImage, type ResponsiveImage } from "@/lib/images";

/**
 * Blog posts. To add one, copy an entry, give it a unique `slug` (used in the
 * URL: /blog/<slug>) and fill in the fields. Newest posts go first.
 */
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string }
  | { type: "list"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  /** ISO date, e.g. 2026-10-28 */
  date: string;
  readMinutes: number;
  image: ResponsiveImage;
  imageAlt: string;
  body: Block[];
};

const wide = (name: string, fullWidth: number) =>
  responsiveImage(name, {
    widths: [500, 800, 1080],
    fullWidth,
    sizes: "(max-width: 991px) 100vw, 1100px",
  });

export const posts: Post[] = [
  {
    slug: "low-and-slow-how-we-smoke-our-ribs",
    title: "Low & Slow: How We Smoke Our Baby Back Ribs",
    excerpt:
      "Twelve hours, one oak fire and a lot of patience. A look inside the process behind our most-ordered dish.",
    category: "Behind the Fire",
    date: "2026-10-28",
    readMinutes: 5,
    image: wide("menu-pork-ribs-with-sauce", 1280),
    imageAlt: "Smoked pork ribs being finished with a herb sauce",
    body: [
      {
        type: "p",
        text: "Ask anyone on our team which dish defines Ember Oak and you will hear the same answer: the baby back ribs. They are the first thing on the smoker every morning and, on a busy night, the first thing to sell out. Here is what happens between the butcher's block and your plate.",
      },
      { type: "h2", text: "It starts the night before" },
      {
        type: "p",
        text: "Every rack is trimmed by hand, the membrane removed so the smoke can reach the meat, and then coated in our house rub: brown sugar, smoked paprika, black pepper, garlic and a little mustard powder for bite. The racks rest overnight so the salt can work its way in.",
      },
      { type: "h2", text: "Fire, then patience" },
      {
        type: "p",
        text: "We light the smoker with oak before sunrise and keep it steady at around 110°C. Oak burns clean and slow and gives a mellow, nutty smoke that never turns bitter. The ribs go in bone-side down and stay there for most of the day.",
      },
      {
        type: "list",
        items: [
          "Hours 1–5: smoke builds the colour and the bark.",
          "Hours 5–8: a light spritz of apple cider vinegar keeps the surface from drying out.",
          "Hours 8–11: the racks are wrapped to push through to fall-off-the-bone tenderness.",
          "Final hour: unwrapped, glazed and set over the fire.",
        ],
      },
      {
        type: "quote",
        text: "You can't rush smoke. The day you try is the day the ribs tell on you.",
      },
      { type: "h2", text: "The finish" },
      {
        type: "p",
        text: "Just before serving, each rack is brushed with our house glaze and kissed over open flame so the sugars catch. Then it is sliced, plated with a bright herb sauce to cut through the richness and sent straight out while the bark still crackles.",
      },
      {
        type: "p",
        text: "It is a lot of work for one plate. We would not have it any other way.",
      },
    ],
  },
  {
    slug: "guide-to-our-signature-cuts",
    title: "Ribeye, Tomahawk or Striploin? A Guide to Our Signature Cuts",
    excerpt:
      "Not sure which steak to order? Here's how our cuts differ in flavour, texture and how we cook them.",
    category: "Guides",
    date: "2026-10-09",
    readMinutes: 6,
    image: wide("menu-grilled-steaks", 1110),
    imageAlt: "Sliced grilled steaks with fresh thyme",
    body: [
      {
        type: "p",
        text: "A good steak starts long before it hits the grill. Choosing the right cut for your taste makes all the difference, so we asked our grill team to break down the cuts you will find on our menu.",
      },
      { type: "h2", text: "Tomahawk Ribeye" },
      {
        type: "p",
        text: "The showstopper. A thick, bone-in ribeye with the full rib bone left on, made for sharing. Rich marbling keeps it juicy and the bone adds flavour as it cooks. We reverse-sear it: slowly in the smoker first, then a hard finish over the fire.",
      },
      { type: "h2", text: "Ribeye" },
      {
        type: "p",
        text: "If you love flavour above all else, this is your steak. The fat running through the ribeye melts as it cooks, basting the meat from the inside. Best enjoyed medium-rare to medium.",
      },
      { type: "h2", text: "Striploin" },
      {
        type: "p",
        text: "Leaner than the ribeye with a firmer bite and a strip of fat along one edge that crisps up beautifully. A great choice if you like a cleaner, beefier taste.",
      },
      { type: "h2", text: "How to choose your doneness" },
      {
        type: "list",
        items: [
          "Rare: cool red centre. Very soft.",
          "Medium-rare: warm red centre. Our recommendation for most cuts.",
          "Medium: warm pink centre. Firmer, still juicy.",
          "Medium-well and beyond: little or no pink. We'll cook it gently so it stays tender.",
        ],
      },
      {
        type: "quote",
        text: "Let it rest. Five minutes off the fire is the difference between a juicy steak and a juicy plate.",
      },
      {
        type: "p",
        text: "Still undecided? Ask your server. We are always happy to talk steak.",
      },
    ],
  },
  {
    slug: "story-behind-our-truffle-mac-and-cheese",
    title: "Comfort Done Right: Our Truffle Mac & Cheese",
    excerpt:
      "Four cheeses, smoked pancetta and a drizzle of truffle. How a side dish became a main event.",
    category: "From the Kitchen",
    date: "2026-09-17",
    readMinutes: 4,
    image: wide("menu-mac-and-cheese", 1110),
    imageAlt: "Truffle mac and cheese with pancetta and parsley",
    body: [
      {
        type: "p",
        text: "It was supposed to be a side. A little something to go with the brisket. Then guests started ordering it on its own, then ordering two. Our truffle mac & cheese has quietly become one of the most loved dishes on the menu.",
      },
      { type: "h2", text: "The sauce is everything" },
      {
        type: "p",
        text: "We start with a classic béchamel and build it up with four cheeses: sharp cheddar for punch, gruyère for nuttiness, mozzarella for stretch and a little parmesan for depth. A splash of the smoker's drippings goes in too, which is where the quiet smoky note comes from.",
      },
      {
        type: "list",
        items: [
          "Short, ridged pasta that holds on to the sauce.",
          "Crispy smoked pancetta folded through.",
          "Fresh parsley for brightness.",
          "Truffle oil added right at the end, so the aroma hits the table first.",
        ],
      },
      {
        type: "quote",
        text: "Comfort food should taste like someone took their time. That's the whole recipe.",
      },
      { type: "h2", text: "Best enjoyed with" },
      {
        type: "p",
        text: "Order it alongside the baby back ribs or the tomahawk for the full Ember Oak experience, or enjoy a bowl on its own on a quiet weeknight. We won't judge.",
      },
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((post) => post.slug === slug);
}

export function formatDate(iso: string) {
  return new Date(`${iso}T12:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
