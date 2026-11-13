# Ember Oak

Next.js (App Router) version of the Smokehouse restaurant homepage, converted from a Webflow export.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Layout

- `app/layout.tsx`: page shell, Webflow CSS and the Webflow runtime script
- `app/page.tsx`: puts the homepage sections in order
- `components/`: one file per section (`NavbarHero`, `About`, `Dishes`, `Menu`, `Order`, `Testimonials`, `Gallery`, `Location`, `Footer`)
- `public/assets/`: CSS, fonts, video, images and `js/webflow-bundle.js` (jQuery + Webflow interactions)

## Notes

- Images go in `public/assets/images/` with their original file names.
- Scroll animations and the mobile menu come from Webflow's runtime, which uses the `data-w-id` attributes in the components. Keep those attributes if you edit the markup.
- The newsletter forms are not connected to anything yet; submitting shows "This form is not connected yet."
