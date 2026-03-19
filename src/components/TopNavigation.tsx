import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Download, Trophy, Home, User, Briefcase, Code, Award, MessageSquare } from 'lucide-react';

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
    { name: 'Home', id: 'hero', icon: Home },
    { name: 'Experience', id: 'experience', icon: Briefcase },
    { name: 'Projects', id: 'projects', icon: Code },
    { name: 'Skills', id: 'skills', icon: Award },
    { name: 'Contact', id: 'contact', icon: MessageSquare },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div
          className="cursor-pointer font-bold text-lg tracking-tight italic text-foreground"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Safwan Ahmad
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-full transition-all duration-200"
            >
              <link.icon className="w-4 h-4" />
              {link.name}
            </button>
          ))}
          <Link
            to="/achievements"
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5 rounded-full transition-all duration-200"
          >
            <Trophy className="w-4 h-4" />
            Achievements
          </Link>
        </div>

        {/* Desktop right side */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/Safwan_Ahmad_CV.pdf"
            download
            className="px-5 py-2 rounded-full border border-foreground/10 hover:bg-primary/10 hover:border-primary hover:text-primary transition-all duration-300 text-sm font-medium flex items-center gap-2"
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
        <div className="absolute top-full left-0 w-full glass-nav border-t border-foreground/10 p-6 flex flex-col gap-3 md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className="flex items-center gap-3 text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
            >
              <link.icon className="w-5 h-5" />
              {link.name}
            </button>
          ))}
          <Link
            to="/achievements"
            onClick={() => setIsMobileMenuOpen(false)}
            className="flex items-center gap-3 text-base font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            <Trophy className="w-5 h-5" />
            Achievements
          </Link>
          <div className="flex gap-4 mt-4 pt-4 border-t border-foreground/10">
            <a href="https://github.com/safwanahmadsaffi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
              <Github />
            </a>
            <a href="https://linkedin.com/in/safwanahmadsaffi" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
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
