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

export default function Home() {
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
