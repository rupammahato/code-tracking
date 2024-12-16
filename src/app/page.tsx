import HeroSection from "@/components/HeroSection";
import Events from "@/components/Events";
import About from "@/components/About";
import FAQs from "@/components/FAQs";
import Footer from "@/components/Footer";
import Gallery  from "@/components/Gallery";



export default function Home() {
  return (
    <div className="bg-black flex flex-col items-center justify-center">
      <HeroSection />
      <About />
      <Events />
      <Gallery />
      <FAQs />
      <Footer />
    </div>
  );
}