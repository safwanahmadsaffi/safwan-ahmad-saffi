import { motion } from "framer-motion";

const skillsData = {
  "Programming": [
    "Python", "C Programming", "TypeScript", "JavaScript", "Jupyter Notebook"
  ],
  "Data Science": [
    "Data Analysis", "Data Modeling", "EDA", "Statistics", "Web Scraping", "APIs"
  ],
  "AI/ML": [
    "Generative AI", "Chatbots", "LangChain", "Hugging Face", "OpenAI API", "Tool Calling"
  ],
  "Other": [
    "Database Systems (SQL)", "DSA", "Operating Systems", 
    "Web Development", "Networking", "Git", "OOP"
  ]
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Skills = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title text-gradient-primary">Skills & Technologies</h2>
          <p className="section-subtitle">Technologies I work with daily.</p>
        </motion.div>

        {/* Skills by category */}
        <div className="space-y-8">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-primary mb-4">{category}</h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-2"
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className="px-4 py-2 text-sm font-medium bg-card border border-border text-foreground rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}

          {/* Prompt Engineering label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="px-4 py-2 text-sm font-medium bg-primary/10 border border-primary/30 text-primary rounded-full inline-block">
              Prompt Engineering
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
