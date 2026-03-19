import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,_hsl(260_80%_50%_/_0.1)_0%,_transparent_70%)] blur-3xl" />

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-foreground">Get In </span>
            <span className="text-gradient-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Let's discuss opportunities, collaborations, or just connect!
          </p>
        </motion.div>

        {/* Contact info cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card/40 border border-border/40 rounded-2xl p-8 backdrop-blur-sm"
        >
          <h3 className="text-lg font-semibold mb-6">Contact Information</h3>

          <div className="space-y-5">
            <a
              href="mailto:safwanahmadsaffi836@gmail.com"
              className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <span>safwanahmadsaffi836@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/safwan-ahmad-saffi/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-primary" />
              </div>
              <span>linkedin.com/in/safwan-ahmad-saffi</span>
            </a>

            <a
              href="https://github.com/safwanahmadsaffi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Github className="w-5 h-5 text-primary" />
              </div>
              <span>github.com/safwanahmadsaffi</span>
            </a>

            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span>Faisalabad, Pakistan</span>
            </div>

            <a
              href="tel:+923187426639"
              className="flex items-center gap-4 text-muted-foreground hover:text-primary transition-colors group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <span>+92 318 7426639</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
