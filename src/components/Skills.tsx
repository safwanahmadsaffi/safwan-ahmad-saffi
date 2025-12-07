import { motion } from "framer-motion";

const skillsData = {
  "Technical Skills": [
    "Python", "FastAPI", "TensorFlow", "PyTorch", "OpenAI API", "LangChain",
    "Docker", "React", "TypeScript", "Streamlit", "PostgreSQL", "MongoDB",
    "Google Cloud", "Hugging Face", "RAG", "TailwindCSS",
    "Vercel", "Git"
  ],
  "Prompt Engineering": []
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
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
            Technical Arsenal
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-foreground">Skills & </span>
            <span className="text-gradient-primary">Technologies</span>
          </h2>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3"
        >
          {skillsData["Technical Skills"].map((skill, index) => (
            <motion.span
              key={skill}
              variants={itemVariants}
              className="px-4 py-2 text-sm font-medium bg-card/50 border border-border/50 text-foreground rounded-full hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Prompt Engineering label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-8"
        >
          <span className="px-4 py-2 text-sm font-medium bg-primary/10 border border-primary/20 text-primary rounded-full">
            Prompt Engineering
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
