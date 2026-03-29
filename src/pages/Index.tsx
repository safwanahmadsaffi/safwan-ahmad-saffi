import { useState, useEffect } from "react";
import TopNavigation from "@/components/TopNavigation";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import BentoGrid from "@/components/BentoGrid";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import IntroAnimation, { hasViewedIntro } from "@/components/IntroAnimation";

const Index = () => {
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    if (!hasViewedIntro()) {
      setShowIntro(true);
    }
  }, []);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      <TopNavigation />
      <main className="min-h-screen">
        <Hero />
        <Experience />
        <BentoGrid />
        <Skills />
        <Achievements />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
