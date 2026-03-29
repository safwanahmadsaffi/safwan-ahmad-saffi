import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

const contactLinks = [
  { href: "mailto:safwanahmadsaffi836@gmail.com", icon: Mail, label: "safwanahmadsaffi836@gmail.com" },
  { href: "https://www.linkedin.com/in/safwan-ahmad-saffi/", icon: Linkedin, label: "linkedin.com/in/safwan-ahmad-saffi", external: true },
  { href: "https://github.com/safwanahmadsaffi", icon: Github, label: "github.com/safwanahmadsaffi", external: true },
  { href: "tel:+923187426639", icon: Phone, label: "+92 318 7426639" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-semibold text-center mb-4"
        >
          <span className="text-foreground">Get In </span>
          <span className="text-gradient-primary">Touch</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm text-muted-foreground text-center mb-10"
        >
          Let's discuss opportunities, collaborations, or just connect.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-xl p-6 space-y-4"
        >
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.external ? "_blank" : undefined}
              rel={item.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <div className="w-9 h-9 rounded-lg glass flex items-center justify-center group-hover:border-primary/20 transition-colors">
                <item.icon className="w-4 h-4 text-primary/70" />
              </div>
              <span className="text-sm">{item.label}</span>
            </a>
          ))}
          <div className="flex items-center gap-3 text-muted-foreground">
            <div className="w-9 h-9 rounded-lg glass flex items-center justify-center">
              <MapPin className="w-4 h-4 text-primary/70" />
            </div>
            <span className="text-sm">Faisalabad, Pakistan</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
