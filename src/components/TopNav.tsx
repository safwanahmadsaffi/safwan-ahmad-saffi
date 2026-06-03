import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const TopNav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-nav py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 group"
        >
          <span className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold text-primary-foreground shadow-[0_0_16px_hsl(var(--primary)/0.4)]">
            S
          </span>
          <span className="text-sm font-semibold text-foreground hidden sm:inline">
            Safwan Ahmad
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors rounded-lg"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <Button
          asChild
          size="sm"
          className="h-10 px-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 hover:cyan-glow transition-all text-sm"
        >
          <a href="/Safwan_Ahmad_CV.pdf" download>
            <Download className="mr-2 h-4 w-4" />
            CV
          </a>
        </Button>
      </div>
    </motion.header>
  );
};

export default TopNav;
