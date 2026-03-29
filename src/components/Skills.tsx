import { motion } from "framer-motion";

const skillsData: Record<string, string[]> = {
  "Languages": ["Python", "C Programming", "TypeScript", "JavaScript"],
  "AI / ML": ["Generative AI", "Chatbots", "LangChain", "Hugging Face", "OpenAI API", "Tool Calling"],
  "Data Science": ["Data Analysis", "EDA", "Statistics", "Web Scraping", "APIs"],
  "Web Dev": ["React", "Node.js", "HTML", "CSS", "Git"],
  "Fundamentals": ["SQL", "DSA", "Operating Systems", "Networking", "OOP"],
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-semibold text-center mb-14"
        >
          <span className="text-foreground">Skills & </span>
          <span className="text-gradient-primary">Technologies</span>
        </motion.h2>

        <div className="space-y-7">
          {Object.entries(skillsData).map(([category, skills], idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.06 }}
            >
              <h3 className="text-xs font-medium text-muted-foreground uppercase tracking-widest mb-3">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-[13px] font-medium rounded-full glass-card text-foreground/80 hover:text-foreground hover:border-primary/20 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
