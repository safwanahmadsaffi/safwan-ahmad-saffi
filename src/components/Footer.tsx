import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold mb-2">
              <span className="text-gradient">Safwan Ahmad</span>
            </div>
            <p className="text-sm text-muted-foreground font-mono">
              GenAI Engineer • Problem Solver • Builder
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/safwanahmadsaffi"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/safwan-ahmad-saffi/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-card border border-border hover:border-secondary/50 hover:bg-secondary/10 text-muted-foreground hover:text-secondary transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:safwanahmadsaffi836@gmail.com"
              className="p-2 rounded-lg bg-card border border-border hover:border-accent/50 hover:bg-accent/10 text-muted-foreground hover:text-accent transition-all"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm text-muted-foreground text-center md:text-right">
            <div className="flex items-center gap-1">
              <span>© {currentYear} Built with</span>
              <Heart className="h-4 w-4 text-accent fill-accent animate-pulse" />
              <span>by Safwan</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
