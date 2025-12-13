import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const FloatingDot = ({ 
  color, 
  size, 
  position, 
  delay 
}: { 
  color: string; 
  size: string; 
  position: { top?: string; right?: string; bottom?: string; left?: string }; 
  delay: number;
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay }}
    className={`absolute ${size} rounded-full ${color} animate-float`}
    style={{ 
      ...position, 
      animationDelay: `${delay}s`,
      animationDuration: `${3 + Math.random() * 2}s`
    }}
  />
);

const Hero = () => {
  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/safwanahmadsaffi", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/safwanahmadsaffi", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/safwanahmadsaffi", label: "Instagram" },
    { icon: MessageCircle, href: "https://wa.me/923001234567", label: "WhatsApp" },
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative pt-32 pb-20">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="order-2 lg:order-1">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-secondary"></span>
              </span>
              <span className="text-sm font-medium text-muted-foreground">Available for online projects</span>
            </motion.div>

            {/* Main headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mb-6"
            >
              <p className="text-xl sm:text-2xl text-muted-foreground mb-2">Hi, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1]">
                <span className="text-gradient-primary">Safwan Ahmad</span>
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground/90 mt-2">
                Software Engineer
              </h2>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base sm:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed"
            >
              Full-stack Engineer turning complex challenges into polished web & mobile solutions. 
              I craft clean code with pixel-perfect precision to build applications users adore.
            </motion.p>

            {/* CTA button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mb-10"
            >
              <Button 
                size="lg" 
                className="group px-6 py-6 text-base font-semibold bg-foreground hover:bg-foreground/90 text-background rounded-full"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                More About Me
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex items-center gap-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right side - Profile image with decorative elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2 relative flex justify-center"
          >
            <div className="relative">
              {/* Floating dots */}
              <FloatingDot 
                color="bg-orange-500" 
                size="w-3 h-3" 
                position={{ top: '10%', right: '-10%' }} 
                delay={0.5} 
              />
              <FloatingDot 
                color="bg-primary" 
                size="w-2 h-2" 
                position={{ top: '15%', right: '-5%' }} 
                delay={0.7} 
              />
              <FloatingDot 
                color="bg-yellow-500" 
                size="w-4 h-4" 
                position={{ top: '60%', right: '-15%' }} 
                delay={0.9} 
              />
              <FloatingDot 
                color="bg-yellow-400" 
                size="w-2 h-2" 
                position={{ top: '40%', left: '-10%' }} 
                delay={1.1} 
              />
              <FloatingDot 
                color="bg-pink-500" 
                size="w-2 h-2" 
                position={{ bottom: '30%', left: '-8%' }} 
                delay={1.3} 
              />
              <FloatingDot 
                color="bg-secondary" 
                size="w-3 h-3" 
                position={{ bottom: '20%', right: '-5%' }} 
                delay={1.5} 
              />

              {/* Profile image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Gradient ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-primary/50 to-transparent p-1">
                  <div className="w-full h-full rounded-full bg-background p-1">
                    {/* Image */}
                    <img
                      src={profileImage}
                      alt="Safwan Ahmad"
                      className="w-full h-full rounded-full object-cover profile-glow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
