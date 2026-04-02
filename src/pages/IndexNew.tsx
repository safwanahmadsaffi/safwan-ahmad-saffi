import TopNavigation from "@/components/TopNavigation";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import LiveStats from "@/components/LiveStats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { useTheme } from "@/hooks/useTheme";

const IndexNew = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative overflow-x-hidden bg-background min-h-screen">
      <TopNavigation theme={theme} onToggleTheme={toggleTheme} />
      <Hero />
      
      <div className="relative z-20">
        <ScrollReveal>
          <section id="projects">
            <BentoGrid />
          </section>
        </ScrollReveal>
        
        <ScrollReveal delay={0.05}>
          <section id="skills">
            <Skills />
          </section>
        </ScrollReveal>
        
        <ScrollReveal delay={0.05} direction="left">
          <section id="experience">
            <Experience />
          </section>
        </ScrollReveal>
        
        <ScrollReveal>
          <section id="achievements">
            <Achievements />
          </section>
        </ScrollReveal>
        
        <ScrollReveal delay={0.1}>
          <LiveStats />
        </ScrollReveal>
        
        <ScrollReveal direction="right">
          <section id="contact">
            <Contact />
          </section>
        </ScrollReveal>
        
        <Footer />
      </div>
    </div>
  );
};

export default IndexNew;
