import MoncyHero from "@/components/MoncyHero";
import Scene3DSection from "@/components/Scene3DSection";
import BentoGrid from "@/components/BentoGrid";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const IndexNew = () => {
  return (
    <div className="relative overflow-x-hidden min-h-screen" style={{ background: "#e8e4ec" }}>
      <MoncyHero />

      <Scene3DSection id="about" title="ABOUT" subtitle="WHO I AM" accent="#a78bfa" />

      <ScrollReveal><Experience /></ScrollReveal>
      <Scene3DSection id="projects" title="WORK" subtitle="SELECTED PROJECTS" accent="#ec4899" />
      <ScrollReveal><BentoGrid /></ScrollReveal>

      <Scene3DSection title="SKILLS" subtitle="STACK & TOOLS" accent="#1a1a1a" />
      <ScrollReveal><Skills /></ScrollReveal>

      <ScrollReveal><Achievements /></ScrollReveal>

      <Scene3DSection id="contact" title="LET'S TALK" subtitle="GET IN TOUCH" accent="#a78bfa" />
      <ScrollReveal><Contact /></ScrollReveal>

      <Footer />
    </div>
  );
};

export default IndexNew;
