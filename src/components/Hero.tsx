import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Bot, MessageSquare, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 relative">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(220_100%_57%_/_0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(186_100%_50%_/_0.1)_0%,_transparent_50%)]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-center pt-20">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-3 px-5 py-2.5 mb-10 rounded-full glass-card"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
          </span>
          <span className="text-sm font-medium text-muted-foreground">Open for Internships & Collabs</span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight"
        >
          <span className="text-foreground">I build </span>
          <span className="text-gradient-primary">intelligence</span>
          <br />
          <span className="text-foreground">that </span>
          <span className="text-gradient-primary">interacts</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed"
        >
          <span className="text-foreground font-semibold">Safwan Ahmad Saffi</span> — AI Engineer crafting 
          <span className="text-primary font-medium"> chatbots</span>, 
          <span className="text-secondary font-medium"> interactive video systems</span>, and 
          <span className="text-primary font-medium"> high-impact ML solutions</span>
        </motion.p>

        {/* Intro cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card">
            <Bot className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">AI Agents</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card">
            <MessageSquare className="h-4 w-4 text-secondary" />
            <span className="text-sm font-medium">Chatbots</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full glass-card">
            <Video className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Interactive Video</span>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          <Button 
            size="lg" 
            className="group px-8 py-6 text-base font-semibold bg-gradient-to-r from-primary to-secondary text-primary-foreground rounded-full"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            See My Work
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="px-8 py-6 text-base font-semibold border-2 border-primary/50 hover:bg-primary/10 rounded-full"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Connect with Me
          </Button>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center justify-center gap-8"
        >
          <a
            href="https://github.com/safwanahmadsaffi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary transition-all duration-300"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/safwan-ahmad-saffi/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-card text-muted-foreground hover:text-secondary transition-all duration-300"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:safwanahmadsaffi836@gmail.com"
            className="p-3 rounded-full glass-card text-muted-foreground hover:text-primary transition-all duration-300"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
