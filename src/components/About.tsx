import { motion } from "framer-motion";
import { Code2, Rocket, Sparkles, Heart, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const About = () => {
  const traits = [
    {
      icon: Code2,
      title: "Problem Solver",
      description: "Love tackling complex DSA problems and building AI solutions",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Rocket,
      title: "Hackathon Winner",
      description: "Won National WordPress Hackathon, Top 10 National teams",
      gradient: "from-secondary to-primary",
    },
    {
      icon: Sparkles,
      title: "Open Source",
      description: "Active contributor to open-source projects worldwide",
      gradient: "from-primary/80 to-secondary/80",
    },
    {
      icon: Heart,
      title: "Community Leader",
      description: "TCF Baghbaan volunteer, Aspire Leadership Program member",
      gradient: "from-secondary/80 to-primary/80",
    },
  ];

  return (
    <section id="about" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_hsl(220_100%_57%_/_0.08)_0%,_transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(186_100%_50%_/_0.05)_0%,_transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-primary bg-primary/10 rounded-full border border-primary/20">
            Who I Am
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building the future of AI, one intelligent system at a time
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Profile image with premium effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group order-2 lg:order-1"
          >
            <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden relative">
              {/* Gradient border effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary via-secondary to-primary opacity-50 blur-sm group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Image container */}
              <div className="absolute inset-[3px] rounded-3xl overflow-hidden bg-background">
                <img 
                  src={profileImage} 
                  alt="Safwan Ahmad" 
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-6 glass-card rounded-2xl p-4 hidden sm:block"
            >
              <div className="text-3xl font-bold text-gradient">3+</div>
              <div className="text-sm text-muted-foreground">Years Building AI</div>
            </motion.div>
          </motion.div>

          {/* Story content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-1 lg:order-2"
          >
            <h3 className="text-3xl font-bold">
              Hey, I'm <span className="text-gradient">Safwan</span> 👋
            </h3>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a <span className="text-primary font-semibold">Computer Scientist</span> from 
              National Textile University, Faisalabad, passionate about AI, Machine Learning & Agentic AI.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently working on <span className="text-secondary font-semibold">LLM Projects</span> and 
              diving deep into Data Science. I've participated in Shell, NASA, and 5x Intel Hackathons, 
              winning the National WordPress Hackathon.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Competed in MIT Informatics Tournament, Calico by Berkeley, 2x Harvard CS50x Puzzle Day, 
              2x Meta Hacker Cup. Selected for Stanford's Code-In-Place program.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 rounded-full glass-card text-sm font-medium">🎯 DSA Enthusiast</span>
              <span className="px-4 py-2 rounded-full glass-card text-sm font-medium">⚡ GenAI Developer</span>
              <span className="px-4 py-2 rounded-full glass-card text-sm font-medium">🚀 Open Source Contributor</span>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 rounded-full"
                asChild
              >
                <a href="/Safwan_Ahmad_CV.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </a>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Personality traits grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {traits.map((trait, index) => (
            <motion.div
              key={trait.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-2xl p-6 hover:border-primary/30 transition-all duration-500 group card-hover"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${trait.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <trait.icon className="h-7 w-7 text-white" />
              </div>
              <h4 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{trait.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{trait.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
