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
import ParticleField from "@/components/ParticleField";
import WaveDivider from "@/components/WaveDivider";
import { useTheme } from "@/hooks/useTheme";

const IndexNew = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="relative overflow-x-hidden min-h-screen" style={{ background: 'transparent' }}>
      <ParticleField />

      {/* Floating glow blobs for extra ambient movement */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="floating-blob w-[500px] h-[500px] bg-purple-600/20 top-[10%] left-[-10%]" style={{ animationDelay: '0s' }} />
        <div className="floating-blob-alt w-[400px] h-[400px] bg-pink-500/15 top-[40%] right-[-5%]" style={{ animationDelay: '5s' }} />
        <div className="floating-blob w-[350px] h-[350px] bg-cyan-500/10 bottom-[20%] left-[20%]" style={{ animationDelay: '10s' }} />
        <div className="floating-blob-alt w-[450px] h-[450px] bg-indigo-600/15 top-[60%] left-[50%]" style={{ animationDelay: '3s' }} />
        <div className="floating-blob w-[300px] h-[300px] bg-fuchsia-500/10 top-[80%] right-[30%]" style={{ animationDelay: '7s' }} />
      </div>

      <div className="relative z-10">
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
    </div>
  );
};

export default IndexNew;
