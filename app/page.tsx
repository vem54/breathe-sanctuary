import Header from "@/app/components/layout/Header";
import Hero from "@/app/components/sections/Hero";
import Experiences from "@/app/components/sections/Experiences";
import Gallery from "@/app/components/sections/Gallery";
import FoodDrink from "@/app/components/sections/FoodDrink";
import Pricing from "@/app/components/sections/Pricing";
import Location from "@/app/components/sections/Location";
import Contact from "@/app/components/sections/Contact";
import Footer from "@/app/components/layout/Footer";
import FloatingInstagram from "@/app/components/ui/FloatingInstagram";

export default function Home() {
  return (
    <>
      <Header />
      <FloatingInstagram />
      <main>
        <Hero />
        <Experiences />
        <Gallery />
        <FoodDrink />
        <Pricing />
        <Location />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
