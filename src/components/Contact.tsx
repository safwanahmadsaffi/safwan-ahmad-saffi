import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold mb-4"
        >
          Let's build something.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground mb-10 max-w-lg mx-auto"
        >
          Whether it's a collaboration, hackathon team, or just want to talk AI and data, I'm one message away.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <Button
            className="px-7 py-5 text-sm font-semibold rounded-full bg-primary hover:bg-primary/90 text-primary-foreground"
            asChild
          >
            <a href="mailto:safwanahmadsaffi836@gmail.com">
              <Mail className="mr-2 h-4 w-4" />
              Send Email
            </a>
          </Button>
          <Button
            variant="outline"
            className="px-7 py-5 text-sm font-semibold rounded-full border-border/60"
            asChild
          >
            <a href="https://www.linkedin.com/in/safwan-ahmad-saffi/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-4 w-4" />
              LinkedIn
            </a>
          </Button>
        </motion.div>

        {/* Social row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-5 text-sm text-muted-foreground"
        >
          {[
            { href: "https://www.linkedin.com/in/safwan-ahmad-saffi/", label: "LinkedIn", icon: Linkedin },
            { href: "https://github.com/safwanahmadsaffi", label: "GitHub", icon: Github },
            { href: "mailto:safwanahmadsaffi836@gmail.com", label: "Email", icon: Mail },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <s.icon className="w-4 h-4" />
              {s.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
