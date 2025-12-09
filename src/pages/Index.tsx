import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Skills from "@/components/Skills";
import Achievements3D from "@/components/Achievements3D";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import IntroAnimation from "@/components/IntroAnimation";

const Index = () => {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      {showIntro && <IntroAnimation onComplete={() => setShowIntro(false)} />}
      <Navigation />
      <main className="min-h-screen ml-20">
        <section id="hero">
          <Hero />
        </section>
        <section id="projects">
          <BentoGrid />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <Achievements3D />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Index;
