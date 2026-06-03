import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const StarHero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-10 py-16"
    >
      {/* Starfield + auroras */}
      <div className="starfield" />
      <div className="aurora-blob bg-primary/40 w-[480px] h-[480px] -top-32 -left-32" />
      <div
        className="aurora-blob bg-secondary/40 w-[520px] h-[520px] -bottom-32 -right-24"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="aurora-blob bg-accent/30 w-[360px] h-[360px] top-1/3 right-1/4"
        style={{ animationDelay: "8s" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Eyebrow chip */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full surface-card text-xs font-medium text-muted-foreground"
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          AI Engineer · Data · Full-Stack
        </motion.div>

        {/* H1 — 96 / 80 / 64 per spec */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display font-bold leading-[1.05] tracking-tight text-[64px] sm:text-[80px] lg:text-[96px]"
        >
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-gradient-primary">Safwan</span>
        </motion.h1>

        {/* Body — 14 / 20 line-height per spec */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 max-w-2xl mx-auto text-[14px] leading-[20px] text-muted-foreground sm:text-base sm:leading-7"
        >
          Computer Science graduate building generative-AI tools, data products, and
          delightful interfaces. Cerebral, focused, shipping at the speed of curiosity.
        </motion.p>

        {/* CTAs — 44px+ touch target, 16px radius, cyan glow on hover */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            onClick={() => scrollTo("projects")}
            className="h-12 px-7 rounded-2xl text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 hover:cyan-glow-strong transition-all"
          >
            View Work
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            asChild
            variant="outline"
            className="h-12 px-7 rounded-2xl text-base font-medium surface-card text-foreground hover:bg-card/90"
          >
            <a href="/Safwan_Ahmad_CV.pdf" download>
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </a>
          </Button>
        </motion.div>

        {/* Vibe / status cards — 120px, 16px radius, per spec */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
        >
          {[
            { label: "Building", value: "GenAI Apps", emoji: "🤖" },
            { label: "Studying", value: "CS @ NTU", emoji: "🎓" },
            { label: "Open to", value: "Collabs", emoji: "✨" },
          ].map((card) => (
            <div
              key={card.label}
              className="surface-card h-[120px] p-5 flex flex-col justify-between text-left cursor-default"
            >
              <span className="text-2xl">{card.emoji}</span>
              <div>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {card.label}
                </p>
                <p className="text-base font-semibold text-foreground mt-1">
                  {card.value}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Scroll skip */}
        <button
          onClick={() => scrollTo("about")}
          className="mt-16 text-xs text-muted-foreground/60 hover:text-muted-foreground hover:underline transition-colors"
        >
          scroll to explore ↓
        </button>
      </div>
    </section>
  );
};

export default StarHero;
