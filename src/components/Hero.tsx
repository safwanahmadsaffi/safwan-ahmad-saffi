import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Rocket, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 relative pt-20">
      {/* Star field background */}
      <div className="stars-bg opacity-40" />
      
      {/* Cosmic gradient overlays */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(139,92,246,0.15)_0%,_transparent_50%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-[radial-gradient(ellipse_at_bottom,_rgba(236,72,153,0.1)_0%,_transparent_50%)]" />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,_rgba(56,189,248,0.08)_0%,_transparent_60%)]" />
      </div>

      {/* Floating planets */}
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] w-24 h-24 planet planet-orange hidden lg:block"
      />
      <motion.div
        animate={{ y: [10, -15, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 right-[25%] w-8 h-8 planet planet-blue hidden lg:block"
      />
      <motion.div
        animate={{ y: [-5, 15, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-48 right-[15%] w-4 h-4 planet planet-pink hidden lg:block"
      />
      <motion.div
        animate={{ y: [8, -8, 8] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-[5%] w-6 h-6 planet planet-blue hidden lg:block"
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-8 rounded-full cosmic-badge"
        >
          <Sparkles className="w-4 h-4 text-cosmic-purple" />
          <span className="text-sm font-medium tracking-wide uppercase">AI Product Developer</span>
          <Sparkles className="w-4 h-4 text-cosmic-pink" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-[1.1] tracking-tight"
        >
          <span className="text-gradient-pink">Safwan</span>
          <br />
          <span className="text-foreground">Ahmad</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Crafting digital experiences across the universe of{" "}
          <span className="text-foreground font-medium">GenAI</span>,{" "}
          <span className="text-foreground font-medium">Data Science</span>, and{" "}
          <span className="text-foreground font-medium">Python Development</span>{" "}
          with a passion for solving real-world problems.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button 
            size="lg" 
            className="group px-8 py-6 text-base font-semibold btn-cosmic rounded-full"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Rocket className="mr-2 h-5 w-5" />
            Explore My Universe
          </Button>
          <Button 
            size="lg" 
            className="px-8 py-6 text-base font-medium btn-cosmic-outline rounded-full"
            onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Services
          </Button>
          <Button 
            size="lg" 
            className="px-8 py-6 text-base font-medium btn-cosmic-outline rounded-full"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Connect with Me
          </Button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 mt-16 pt-16 border-t border-border/30"
        >
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient-cosmic">10+</div>
            <div className="text-sm text-muted-foreground mt-1">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-gradient-cosmic">5+</div>
            <div className="text-sm text-muted-foreground mt-1">Hackathons</div>
          </div>
          <div className="text-3xl sm:text-4xl font-bold text-gradient-cosmic text-center">
            <div>3+</div>
            <div className="text-sm text-muted-foreground mt-1 font-normal">Years Experience</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-cosmic-purple rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;