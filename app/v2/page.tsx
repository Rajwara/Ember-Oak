import type { Metadata } from "next";
import MeatHero from "@/components/v2/hero/MeatHero";
import About from "@/components/v2/About";
import SignatureDishes from "@/components/v2/SignatureDishes";
import Menu from "@/components/v2/Menu";
import Reservation from "@/components/v2/Reservation";
import Testimonials from "@/components/v2/Testimonials";
import Gallery from "@/components/v2/Gallery";
import Location from "@/components/v2/Location";
import Footer from "@/components/v2/Footer";

// Version 2 of the homepage, at /v2. It renders its own copies of the sections
// (components/v2/), so changes here never affect the live homepage (app/page.tsx).
// Hidden from search engines so it doesn't compete with the real homepage.
export const metadata: Metadata = {
  title: "Home v2",
  robots: { index: false, follow: false },
};

/**
 * v2 palette, matching the butcher-red banner: near-black background with a
 * bright red accent. Applies to this page only; the colour switcher can still
 * override it for previewing.
 */
const V2_PALETTE = `:root {
  --base-color--base: #161111;
  --primary-color--p-100: #e3262c;
  --primary-color--p-200: #9b1419;
}`;

export default function HomeV2() {
  return (
    <>
      <style>{V2_PALETTE}</style>
      <MeatHero />
      <About />
      <SignatureDishes />
      <Menu />
      <Reservation />
      <Testimonials />
      <Gallery />
      <Location />
      <Footer />
    </>
  );
}
