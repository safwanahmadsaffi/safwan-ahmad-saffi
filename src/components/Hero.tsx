import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 relative pt-20">
      {/* Subtle ambient glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/[0.07] blur-[120px]" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl mx-auto">
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative mb-8"
        >
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden glass-card p-1">
            <img
              src={profileImg}
              alt="Muhammad Safwan Ahmad Saffi"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-semibold mb-3 tracking-tight text-foreground"
        >
          Muhammad Safwan
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg sm:text-xl font-medium text-gradient-primary mb-5"
        >
          GenAI Developer & Data Science Enthusiast
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-muted-foreground max-w-lg mb-8 leading-relaxed"
        >
          Passionate about GenAI, Data Science & Python development.
          Experienced in generative AI, chatbot integration, web scraping,
          and solving real-world problems.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mb-10"
        >
          <Button
            variant="outline"
            className="group px-7 py-5 text-sm font-medium border-border/60 hover:bg-primary/10 hover:border-primary/40 rounded-full glass-card"
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Code className="mr-2 h-4 w-4" />
            View My Work
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
            { href: "mailto:safwanahmadsaffi836@gmail.com", icon: Mail, label: "Email" },
            { href: "https://www.linkedin.com/in/safwan-ahmad-saffi/", icon: Linkedin, label: "LinkedIn" },
            { href: "https://github.com/safwanahmadsaffi", icon: Github, label: "GitHub" },
          ].map((s) => (
            <motion.a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              aria-label={s.label}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-full glass-card flex items-center justify-center hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              <s.icon className="w-[18px] h-[18px] text-muted-foreground" />
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
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
