import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Code, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import ShootingStars from "@/components/ShootingStars";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative">
      <ShootingStars />

      {/* Ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/[0.08] blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Big bold name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-foreground mb-6 leading-[0.9]"
        >
          SAFWAN
          <br />
          <span className="text-gradient">AHMAD</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base sm:text-lg text-muted-foreground max-w-xl mb-4 leading-relaxed"
        >
          Builder. Developer. I build GenAI apps, win hackathons, and ship data-driven solutions.
        </motion.p>

        {/* Role line */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-sm text-muted-foreground/70 mb-10"
        >
          GenAI Developer · Data Science Enthusiast · Stanford Code-In-Place '24
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <Button
            className="px-7 py-5 text-sm font-semibold rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Code className="mr-2 h-4 w-4" />
            View Work
          </Button>
          <Button
            variant="outline"
            className="px-7 py-5 text-sm font-semibold rounded-full border-border/60 hover:bg-foreground/5"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Let's Talk
          </Button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex items-center gap-4"
        >
          {[
            { href: "https://www.linkedin.com/in/safwan-ahmad-saffi/", icon: Linkedin, label: "LinkedIn" },
            { href: "https://github.com/safwanahmadsaffi", icon: Github, label: "GitHub" },
            { href: "mailto:safwanahmadsaffi836@gmail.com", icon: Mail, label: "Email" },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              aria-label={s.label}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 rounded-full border border-border/40 flex items-center justify-center hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              <s.icon className="w-4 h-4 text-muted-foreground" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border border-border/40 flex items-start justify-center pt-2"
        >
          <motion.div className="w-1 h-2 rounded-full bg-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
