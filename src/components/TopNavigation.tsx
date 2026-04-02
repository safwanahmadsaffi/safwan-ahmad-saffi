import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Download, Sun, Moon } from "lucide-react";

interface TopNavigationProps {
  theme?: "dark" | "light";
  onToggleTheme?: () => void;
}

const TopNavigation: React.FC<TopNavigationProps> = ({ theme = "dark", onToggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? "glass-nav py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        <div
          className="cursor-pointer text-sm font-semibold tracking-tight text-foreground"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Safwan Ahmad
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground hover:text-foreground rounded-full transition-colors duration-200"
            >
              {link.name}
            </button>
          ))}
          <Link
            to="/achievements"
            className="px-3.5 py-1.5 text-[13px] font-medium text-muted-foreground hover:text-foreground rounded-full transition-colors duration-200"
          >
            Achievements
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-2">
          {/* Theme toggle */}
          <button
            onClick={onToggleTheme}
            className="w-9 h-9 rounded-full glass-card flex items-center justify-center hover:border-primary/30 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-muted-foreground" />
            ) : (
              <Moon className="w-4 h-4 text-muted-foreground" />
            )}
          </button>

          <a
            href="/Safwan_Ahmad_CV.pdf"
            download
            className="px-4 py-1.5 rounded-full glass-card text-[13px] font-medium text-muted-foreground hover:text-foreground hover:border-primary/30 transition-all duration-300 flex items-center gap-1.5"
          >
            <Download size={14} />
            CV
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="w-9 h-9 rounded-full glass-card flex items-center justify-center"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-muted-foreground" />
            ) : (
              <Moon className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
          <button className="text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full glass-nav border-t border-border/30 p-5 flex flex-col gap-1 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-sm font-medium text-muted-foreground hover:text-foreground py-2.5 px-3 rounded-lg hover:bg-foreground/5 transition-colors"
            >
              {link.name}
            </button>
          ))}
          <Link
            to="/achievements"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-sm font-medium text-muted-foreground hover:text-foreground py-2.5 px-3 rounded-lg hover:bg-foreground/5 transition-colors"
          >
            Achievements
          </Link>
          <a
            href="/Safwan_Ahmad_CV.pdf"
            download
            className="mt-3 px-4 py-2.5 rounded-full glass-card text-center text-sm font-medium flex items-center justify-center gap-2"
          >
            <Download size={14} />
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default TopNavigation;
