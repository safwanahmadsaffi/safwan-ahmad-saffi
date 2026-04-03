import { motion } from "framer-motion";

const skills = [
  "Python", "GenAI", "LangChain", "Data Science", "Machine Learning",
  "React", "TypeScript", "Web Scraping", "Chatbots", "APIs",
  "DSA", "SQL", "OpenAI",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold mb-8"
        >
          About.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-5 text-muted-foreground leading-relaxed"
        >
          <p>
            I'm Safwan, a <span className="text-foreground font-medium">Computer Science student</span> at National Textile University, Faisalabad. I build <span className="text-primary font-medium">Generative AI applications</span>, win hackathons, and turn complex data into actionable insights.
          </p>

          <p>
            I was a <span className="text-foreground font-medium">GenAI Developer</span> at{" "}
            <span className="text-primary">Vast Art</span>, where I built AI apps, integrated chatbots, and automated web data collection. Selected for{" "}
            <span className="text-foreground font-medium">Stanford Code-In-Place 2024</span>, won the{" "}
            <span className="text-foreground font-medium">National WordPress Hackathon</span>, and competed in{" "}
            <span className="text-foreground font-medium">Shell.ai Hackathon 2025</span>.
          </p>

          <p>
            I've supervised <span className="text-foreground font-medium">15 staff members</span> and evaluated projects from <span className="text-foreground font-medium">150+ teams</span> as a Judge & SME Lead. Active in open-source and community building through <span className="text-primary">TCF Baghbaan</span> and the <span className="text-primary">Aspire Leadership Program</span>.
          </p>
        </motion.div>

        {/* Skill tags */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mt-8"
        >
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.03 }}
              className="px-4 py-1.5 text-sm font-medium text-foreground/80 rounded-full border border-border/50 bg-card/50 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
