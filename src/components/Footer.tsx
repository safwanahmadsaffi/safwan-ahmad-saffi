import { Github, Linkedin, Mail, Heart, Star } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/30 relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cosmic-purple to-cosmic-pink flex items-center justify-center">
              <Star className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-gradient-cosmic">Safwan Ahmad</div>
              <p className="text-xs text-muted-foreground">AI Product Developer</p>
            </div>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a href="https://github.com/safwanahmadsaffi" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-muted/50 hover:bg-cosmic-purple/20 flex items-center justify-center transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/safwanahmad99" target="_blank" rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-muted/50 hover:bg-cosmic-blue/20 flex items-center justify-center transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:safwanahmadsaffi836@gmail.com"
              className="w-10 h-10 rounded-xl bg-muted/50 hover:bg-cosmic-pink/20 flex items-center justify-center transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground flex items-center gap-1">
            <span>© {currentYear} Built with</span>
            <Heart className="h-4 w-4 text-cosmic-pink fill-cosmic-pink" />
            <span>by Safwan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;