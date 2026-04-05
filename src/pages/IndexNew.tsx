import TopNavigation from "@/components/TopNavigation";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import BentoGrid from "@/components/BentoGrid";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import LiveStats from "@/components/LiveStats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import WaveDivider from "@/components/WaveDivider";
import { useTheme } from "@/hooks/useTheme";

const IndexNew = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative overflow-x-hidden bg-background min-h-screen">
      <TopNavigation theme={theme} onToggleTheme={toggleTheme} />
      <Hero />

      <div className="relative z-20">
        <ScrollReveal>
          <AboutSection />
        </ScrollReveal>

        <WaveDivider variant="purple" />

        <ScrollReveal delay={0.05}>
          <Experience />
        </ScrollReveal>

        <WaveDivider variant="pink" />

        <ScrollReveal>
          <BentoGrid />
        </ScrollReveal>

        <WaveDivider variant="cyan" />

        <ScrollReveal delay={0.05}>
          <Skills />
        </ScrollReveal>

        <WaveDivider variant="purple" />

        <ScrollReveal>
          <Achievements />
        </ScrollReveal>

        <WaveDivider variant="pink" />

        <ScrollReveal delay={0.1}>
          <LiveStats />
        </ScrollReveal>

        <ScrollReveal direction="right">
          <Contact />
        </ScrollReveal>

        <Footer />
      </div>
    </div>
  );
};

export default IndexNew;
