import NavbarHero from "@/components/NavbarHero";
import About from "@/components/About";
import Dishes from "@/components/Dishes";
import Menu from "@/components/Menu";
import Order from "@/components/Order";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavbarHero />
      <About />
      <Dishes />
      <Menu />
      <Order />
      <Testimonials />
      <Gallery />
      <Location />
      <Footer />
    </>
  );
}
