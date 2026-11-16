import type { Metadata } from "next";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import SignatureDishes from "@/components/sections/SignatureDishes";
import Menu from "@/components/sections/Menu";
import Reservation from "@/components/sections/Reservation";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import Location from "@/components/sections/Location";
import Footer from "@/components/sections/Footer";

// Copy of the homepage (app/page.tsx) at /home-2, for trying out changes
// without touching the live homepage. Hidden from search engines so it doesn't
// compete with the real homepage.
export const metadata: Metadata = {
  title: "Home 2",
  robots: { index: false, follow: false },
};

export default function HomeCopy() {
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
