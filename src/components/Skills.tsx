import { motion } from "framer-motion";
import { Sparkles, Code, Database, Brain, Wrench } from "lucide-react";

const skillsData = {
  "Programming": {
    icon: Code,
    color: "cosmic-purple",
    skills: ["Python", "C Programming", "TypeScript", "JavaScript", "Jupyter Notebook"],
  },
  "Data Science": {
    icon: Database,
    color: "cosmic-blue",
    skills: ["Data Analysis", "Data Modeling", "EDA", "Statistics", "Web Scraping", "APIs"],
  },
  "AI/ML": {
    icon: Brain,
    color: "cosmic-pink",
    skills: ["Generative AI", "Chatbots", "LangChain", "Hugging Face", "OpenAI API", "Tool Calling"],
  },
  "Other": {
    icon: Wrench,
    color: "cosmic-orange",
    skills: ["Database Systems (SQL)", "DSA", "Operating Systems", "Web Development", "Networking", "Git", "OOP"],
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative section-cosmic">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full cosmic-badge">
            <Sparkles className="w-4 h-4 text-cosmic-purple" />
            <span className="text-sm font-medium">Technical Arsenal</span>
            <Sparkles className="w-4 h-4 text-cosmic-pink" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="text-gradient-cosmic">Technologies</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills grid by category */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(skillsData).map(([category, data], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-10 h-10 rounded-xl bg-${data.color}/20 flex items-center justify-center`}>
                  <data.icon className={`w-5 h-5 text-${data.color}`} />
                </div>
                <h3 className="text-lg font-semibold">{category}</h3>
              </div>

              {/* Skills list */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {data.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className="px-3 py-1.5 text-sm font-medium bg-muted/50 text-foreground/90 rounded-full border border-border/50 hover:border-cosmic-purple/50 hover:bg-cosmic-purple/10 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Prompt Engineering highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-8"
        >
          <div className="px-6 py-3 text-base font-semibold bg-gradient-to-r from-cosmic-purple/20 via-cosmic-pink/20 to-cosmic-blue/20 border border-cosmic-purple/30 text-cosmic-purple rounded-full">
            ✨ Prompt Engineering Expert
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;