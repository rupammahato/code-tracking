"use client";
import HeroSection from "@/components/HeroSection";
import Events from "@/components/Events";
import About from "@/components/About";
import FAQs from "@/components/FAQs";
import Gallery from "@/components/Gallery";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-black flex flex-col items-center justify-center">
      <HeroSection />
      <About />
      <Events />
      <Gallery />
      <FAQs />
    </div>
  );
}
