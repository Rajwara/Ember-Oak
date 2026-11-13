# Ember Oak

Restaurant website built with Next.js (App Router, TypeScript), converted from a Webflow template.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build` makes a production build; Vercel deploys it automatically on every push.

## Where things are

| Path | What it holds |
|---|---|
| `content/site.ts` | **All text and business details**: name, email, phone, address, opening hours, menu items, reviews, gallery, links. Edit this file to change what the site says. |
| `app/layout.tsx` | Page shell: page title, stylesheets, favicon, Webflow animation script |
| `app/page.tsx` | The homepage: lists the sections in order |
| `components/sections/` | One component per section: `Header`, `Hero`, `About`, `SignatureDishes`, `Menu`, `Reservation`, `Testimonials`, `Gallery`, `Location`, `Footer` |
| `components/ui/` | Reusable pieces: `PrimaryButton`, `SecondaryButton`, `StarRating`, `NewsletterForm`, `BackgroundVideo` |
| `lib/images.ts` | Helper that builds responsive image sources |
| `public/assets/` | CSS, fonts, images, video and `js/webflow-bundle.js` |

## Images

Images live in `public/assets/images/`, named by what they show. Prefixes match the section that uses them (`icon-`, `dish-`, `menu-`, `gallery-`). A `-500`, `-800` or `-1080` suffix marks a smaller copy the browser picks on narrower screens. To swap a photo, replace the files with the same names, or add new ones and point to them in `content/site.ts`.

## Animations

Scroll animations, the intro animation and the menu panels are run by Webflow's runtime (`public/assets/js/webflow-bundle.js`, jQuery + Webflow). It finds elements through their `data-w-id` attributes and class names, so keep those when editing components. The script is loaded with a plain `defer` tag so it runs before the page's load event; loading it later (e.g. `next/script` afterInteractive) breaks the intro animation.

## Not done yet

- The newsletter forms don't send anywhere; submitting shows "This form is not connected yet."
- Menu item links, License, Style Guide and Changelog still point to the original Webflow site.
