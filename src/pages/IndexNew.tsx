import TopNavigation from "@/components/TopNavigation";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import LiveStats from "@/components/LiveStats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const IndexNew = () => {
  return (
    <div className="relative overflow-x-hidden bg-background min-h-screen">
      <TopNavigation />
      <Hero />
      
      <div className="relative z-20">
        <section id="projects">
          <BentoGrid />
        </section>
        
        <section id="skills">
          <Skills />
        </section>
        
        <section id="experience">
          <Experience />
        </section>
        
        <LiveStats />
        
        <section id="contact">
          <Contact />
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default IndexNew;
