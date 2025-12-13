import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin, Twitter, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
            Get in Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-foreground">Let's build something</span>
            <br />
            <span className="text-gradient-primary">amazing</span>
          </h2>
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
              I'm always interested in hearing about new projects, collaborations, or opportunities. Whether you have a question or just want to say hi, feel free to reach out!
            </p>

            {/* Location */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground">Faisalabad, Pakistan</span>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
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
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <a
                href="mailto:safwanahmadsaffi836@gmail.com"
                className="text-foreground hover:text-primary transition-colors"
              >
                safwanahmadsaffi836@gmail.com
              </a>
            </div>

            {/* Social links */}
            <div className="flex gap-3 pt-4">
              <a
                href="https://github.com/safwanahmadsaffi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-card/50 border border-border/50 flex items-center justify-center hover:border-primary/50 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/safwan-ahmad-saffi/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-card/50 border border-border/50 flex items-center justify-center hover:border-primary/50 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/SafwanAhmadSaf1"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-card/50 border border-border/50 flex items-center justify-center hover:border-primary/50 transition-all duration-300"
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
          >
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
                  Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="bg-card/50 border-border/50 focus:border-primary h-11 rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  className="bg-card/50 border-border/50 focus:border-primary h-11 rounded-xl"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="bg-card/50 border-border/50 focus:border-primary resize-none rounded-xl"
                />
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-xl"
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
