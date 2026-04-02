import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-4 sm:px-6 lg:px-8 border-t border-border/40">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Safwan Ahmad. Built with care.
        </p>
        <div className="flex items-center gap-3">
          {[
            { href: "https://github.com/safwanahmadsaffi", icon: Github },
            { href: "https://www.linkedin.com/in/safwan-ahmad-saffi/", icon: Linkedin },
            { href: "mailto:safwanahmadsaffi836@gmail.com", icon: Mail },
          ].map((s) => (
            <motion.a
              key={s.href}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="w-8 h-8 rounded-lg glass flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <s.icon className="h-3.5 w-3.5" />
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
