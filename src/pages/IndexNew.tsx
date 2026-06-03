import TopNav from "@/components/TopNav";
import StarHero from "@/components/StarHero";
import BentoGrid from "@/components/BentoGrid";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const IndexNew = () => {
  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <TopNav />
      <StarHero />

      <div id="about" />
      <ScrollReveal><BentoGrid /></ScrollReveal>
      <ScrollReveal><Skills /></ScrollReveal>
      <ScrollReveal><Experience /></ScrollReveal>
      <ScrollReveal><Achievements /></ScrollReveal>
      <ScrollReveal><Contact /></ScrollReveal>

      <Footer />
    </div>
  );
};

export default IndexNew;
