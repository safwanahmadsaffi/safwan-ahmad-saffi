import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, ChevronDown, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 relative">
      {/* Gradient background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_hsl(260_80%_50%_/_0.3)_0%,_transparent_70%)] blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_hsl(220_100%_57%_/_0.25)_0%,_transparent_70%)] blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,_hsl(186_100%_50%_/_0.1)_0%,_transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        {/* "that's me!" label */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-secondary font-medium mb-2 italic"
        >
          that's me!
        </motion.span>

        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mb-8"
        >
          <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-4 border-primary/30 shadow-[0_0_60px_hsl(220_100%_57%_/_0.3)]">
            <img
              src={profileImg}
              alt="Muhammad Safwan Ahmad Saffi"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full border-2 border-secondary/20 animate-pulse-slow scale-110" />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 tracking-tight"
        >
          <span className="text-foreground">Muhammad Safwan</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-xl sm:text-2xl font-semibold text-gradient-primary mb-4"
        >
          GenAI Developer & Data Science Enthusiast
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="text-base sm:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed"
        >
          Passionate about GenAI, Data Science & Python development. Experienced in generative AI, chatbot integration, web scraping, and solving real-world problems.
        </motion.p>

        {/* CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-10"
        >
          <Button
            size="lg"
            variant="outline"
            className="group px-8 py-6 text-base font-semibold border-foreground/20 hover:bg-primary/10 hover:border-primary rounded-full"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Code className="mr-2 h-5 w-5" />
            View My Work
          </Button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex items-center gap-5"
        >
          {[
            { href: "mailto:safwanahmadsaffi836@gmail.com", icon: Mail, label: "Email" },
            { href: "https://www.linkedin.com/in/safwan-ahmad-saffi/", icon: Linkedin, label: "LinkedIn" },
            { href: "https://github.com/safwanahmadsaffi", icon: Github, label: "GitHub" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("mailto") ? undefined : "_blank"}
              rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              aria-label={social.label}
              className="w-14 h-14 rounded-full bg-card/60 border border-border/50 flex items-center justify-center hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 backdrop-blur-sm"
            >
              <social.icon className="w-6 h-6 text-muted-foreground" />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
