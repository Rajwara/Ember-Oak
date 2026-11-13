# Ember Oak

Website for Ember Oak, a Western smokehouse restaurant. Built with Next.js (App Router, TypeScript), converted from a Webflow template.

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
| `app/about`, `app/contact`, `app/blog`, `app/terms`, `app/privacy` | Inner pages (`/about`, `/contact`, `/blog`, `/terms`, `/privacy`) |
| `app/blog/[slug]/page.tsx` | Single blog post page, one per post in `content/blog.ts` |
| `app/pages.css` | Styles for the inner pages and the colour switcher |
| `content/blog.ts` | **Blog posts.** Copy an entry to add a post. |
| `content/legal.ts` | Terms & Conditions and Privacy Policy text |
| `lib/themes.ts` | Colour palettes offered by the colour switcher |
| `components/sections/` | One component per section: `Header`, `Hero`, `About`, `SignatureDishes`, `Menu`, `Reservation`, `Testimonials`, `Gallery`, `Location`, `Footer` |
| `components/layout/` | Frame for inner pages: `PageShell` (header + footer), `PageHero`, `LegalPage` |
| `components/ui/` | Reusable pieces: `PrimaryButton`, `SecondaryButton`, `StarRating`, `NewsletterForm`, `BackgroundVideo`, `ThemeSwitcher` |
| `lib/images.ts` | Helper that builds responsive image sources |
| `public/assets/` | CSS, fonts, images, video and `js/webflow-bundle.js` |

## Images

Images live in `public/assets/images/`, named by what they show. Prefixes match the section that uses them (`icon-`, `dish-`, `menu-`, `gallery-`). A `-500`, `-800` or `-1080` suffix marks a smaller copy the browser picks on narrower screens. To swap a photo, replace the files with the same names, or add new ones and point to them in `content/site.ts`.

## Animations

Scroll animations, the intro animation and the menu panels are run by Webflow's runtime (`public/assets/js/webflow-bundle.js`, jQuery + Webflow). It finds elements through their `data-w-id` attributes and class names, so keep those when editing components. The script is loaded with a plain `defer` tag so it runs before the page's load event; loading it later (e.g. `next/script` afterInteractive) breaks the intro animation.

## Colour switcher

The round button on the right edge of every page lets you preview other colour
palettes, or pick your own background and accent colours. The choice is saved in
the visitor's browser only. It works by overriding the template's CSS variables
`--base-color--base` (background) and `--primary-color--p-100` (accent).

To make a palette the permanent default, change those two variables in
`public/assets/css/smokehouse-restaurant.webflow.shared.ee2cd7ae9.css` (in `:root`).
To remove the switcher before launch, delete `<ThemeSwitcher />` from `app/layout.tsx`.

## Images to generate

`docs/image-prompts.md` has AI image prompts and file names for photos that would
replace the reused homepage images on the inner pages and blog.

## Not done yet

- The contact form and newsletter forms don't send anywhere yet.
- Address, phone number and opening hours in `content/site.ts` are still the template's placeholders.
- Terms & Conditions and Privacy Policy are a starting point; have them reviewed before launch.
