import type { Metadata } from "next";
import Header from "@/components/v2/Header";
import Hero from "@/components/v2/Hero";
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

export default function HomeV2() {
  return (
    <>
      <div id="Home" className="navbar-hero">
        <Header />
        <Hero />
      </div>
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
