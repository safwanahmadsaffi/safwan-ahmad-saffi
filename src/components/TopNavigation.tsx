import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Mail, Download, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const AnimatedLogo = () => {
  return (
    <motion.div
      className="relative w-10 h-10 cursor-pointer group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary via-secondary to-primary opacity-80"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
        style={{ backgroundSize: '200% 200%' }}
      />
      
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-secondary blur-md opacity-50"
        animate={{
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Logo text */}
      <div className="relative w-full h-full flex items-center justify-center rounded-xl overflow-hidden">
        <motion.span
          className="font-bold text-sm text-white font-mono tracking-tighter"
          animate={{
            textShadow: [
              '0 0 4px rgba(255,255,255,0.5)',
              '0 0 8px rgba(255,255,255,0.8)',
              '0 0 4px rgba(255,255,255,0.5)',
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          SA
        </motion.span>
      </div>
      
      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white/30 rounded-tl-lg" />
      <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white/30 rounded-br-lg" />
    </motion.div>
  );
};

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
    { name: 'Experience', id: 'experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  const achievementsLink = { name: 'Achievements', path: '/achievements' };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Animated SA Logo */}
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <AnimatedLogo />
          <span className="font-bold text-lg tracking-tight hidden md:block">Safwan Ahmad</span>
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
          <Link
            to={achievementsLink.path}
            className="text-sm font-medium text-muted-foreground hover:text-secondary transition-colors flex items-center gap-1"
          >
            <Trophy className="w-4 h-4" />
            {achievementsLink.name}
          </Link>
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
          <Link
            to={achievementsLink.path}
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-left text-lg font-medium text-muted-foreground hover:text-secondary transition-colors flex items-center gap-2"
          >
            <Trophy className="w-5 h-5" />
            {achievementsLink.name}
          </Link>
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
