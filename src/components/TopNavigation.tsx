import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react';

const TopNavigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Projects', id: 'projects' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span className="font-bold text-secondary-foreground font-mono">S</span>
          </div>
          <span className="font-bold text-lg tracking-tight hidden md:block">Safwan Ahmad Saffi</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Socials & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a 
            href="https://github.com/safwanahmadsaffi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/safwanahmadsaffi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="/Safwan_Ahmad_CV.pdf"
            download
            className="px-5 py-2 rounded-full border border-foreground/10 hover:bg-primary/10 hover:border-primary hover:text-secondary transition-all duration-300 text-sm font-medium flex items-center gap-2"
          >
            <Download size={16} />
            CV
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full glass-nav border-t border-foreground/10 p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="text-left text-lg font-medium text-muted-foreground hover:text-secondary transition-colors"
            >
              {link.name}
            </button>
          ))}
          <div className="flex gap-4 mt-4 pt-4 border-t border-foreground/10">
            <a href="https://github.com/safwanahmadsaffi" className="text-muted-foreground hover:text-foreground">
              <Github />
            </a>
            <a href="https://linkedin.com/in/safwanahmadsaffi" className="text-muted-foreground hover:text-foreground">
              <Linkedin />
            </a>
            <a href="mailto:safwanahmadsaffi@gmail.com" className="text-muted-foreground hover:text-foreground">
              <Mail />
            </a>
          </div>
          <a
            href="/Safwan_Ahmad_CV.pdf"
            download
            className="mt-2 px-5 py-3 rounded-full bg-primary text-primary-foreground text-center font-medium flex items-center justify-center gap-2"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default TopNavigation;
