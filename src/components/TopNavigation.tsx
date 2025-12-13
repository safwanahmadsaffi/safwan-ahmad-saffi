import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon, Trophy } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AnimatedLogo = () => {
  return (
    <motion.div
      className="relative flex items-center gap-3 cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Logo icon */}
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
          <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            className="w-6 h-6"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path 
              d="M12 4C8 4 4 8 4 12s4 8 8 8 8-4 8-8-4-8-8-8z" 
              className="text-primary-foreground"
            />
            <path 
              d="M8 12c0-2 2-4 4-4s4 2 4 4-2 4-4 4" 
              className="text-primary-foreground"
            />
          </svg>
        </div>
      </div>
      
      {/* Name */}
      <span className="font-bold text-lg tracking-tight hidden sm:block">Safwan Ahmad</span>
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
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Blogs', id: 'experience' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-3xl">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="nav-floating rounded-full px-6 py-3 flex justify-between items-center"
        >
          {/* Logo */}
          <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <AnimatedLogo />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/achievements"
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
              title="Achievements"
            >
              <Trophy className="w-5 h-5" />
            </Link>
            <button
              className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
              title="Toggle theme"
            >
              <Sun className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </motion.div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-3xl nav-floating rounded-2xl p-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.id)}
                  className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {link.name}
                </button>
              ))}
              <Link
                to="/achievements"
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-left text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 flex items-center gap-2"
              >
                <Trophy className="w-5 h-5" />
                Achievements
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TopNavigation;
