import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin, Twitter, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title text-gradient-primary">Get in Touch</h2>
          <p className="section-subtitle">Let's build something amazing together.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm always interested in hearing about new projects, collaborations, or opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            <div className="space-y-4">
              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground">Faisalabad, Pakistan</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <a
                  href="tel:+923187426639"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  +92 318 7426639
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <a
                  href="mailto:safwanahmadsaffi836@gmail.com"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  safwanahmadsaffi836@gmail.com
                </a>
              </div>
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-4">
              <a
                href="https://github.com/safwanahmadsaffi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/safwan-ahmad-saffi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/SafwanAhmadSaf1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-primary/50 hover:text-primary transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card border border-border rounded-2xl p-6 md:p-8"
          >
            <form className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="bg-background border-border focus:border-primary h-12 rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="bg-background border-border focus:border-primary h-12 rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="bg-background border-border focus:border-primary resize-none rounded-xl"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl"
              >
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
