import TopNavigation from "@/components/TopNavigation";
import Hero from "@/components/Hero";
import GitHubContributions from "@/components/GitHubContributions";
import WhatIBuild from "@/components/WhatIBuild";
import BentoGrid from "@/components/BentoGrid";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const IndexNew = () => {
  return (
    <div className="relative overflow-x-hidden bg-background min-h-screen">
      <TopNavigation />
      <Hero />
      
      <div className="relative z-20">
        {/* GitHub Contributions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <GitHubContributions username="safwanahmadsaffi" />
          </div>
        </section>
        
        {/* What I Build */}
        <WhatIBuild />
        
        {/* Projects */}
        <section id="projects">
          <BentoGrid />
        </section>
        
        {/* Skills */}
        <section id="skills">
          <Skills />
        </section>
        
        {/* Experience */}
        <section id="experience">
          <Experience />
        </section>
        
        {/* Contact */}
        <section id="contact">
          <Contact />
        </section>
        
        <Footer />
      </div>
    </div>
  );
};

export default IndexNew;
