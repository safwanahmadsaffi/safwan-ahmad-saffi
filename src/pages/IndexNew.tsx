import TopNavigation from "@/components/TopNavigation";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const IndexNew = () => {
  return (
    <div className="relative overflow-x-hidden">
      <TopNavigation />
      <Hero />
      
      <div className="relative z-20">
        <div className="bg-background">
          <section id="about">
            <About />
          </section>
          
          <section id="projects">
            <BentoGrid />
          </section>
          
          <section id="skills">
            <Skills />
          </section>
          
          <section id="experience">
            <Experience />
          </section>
          
          <section>
            <Testimonials />
          </section>
          
          <section id="contact">
            <Contact />
          </section>
          
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default IndexNew;
