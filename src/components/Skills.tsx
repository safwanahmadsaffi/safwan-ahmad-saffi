import { motion } from "framer-motion";

const skillsData = {
  "Programming Languages": [
    "Python", "C Programming", "TypeScript", "JavaScript", "Jupyter Notebook"
  ],
  "AI / Machine Learning": [
    "Generative AI", "Chatbots", "LangChain", "Hugging Face", "OpenAI API", "Tool Calling"
  ],
  "Data Science & Analytics": [
    "Data Analysis", "Data Modeling", "EDA", "Statistics", "Web Scraping", "APIs"
  ],
  "Web Development": [
    "React", "Node.js", "HTML", "CSS", "Git"
  ],
  "Other": [
    "Database Systems (SQL)", "Data Structures & Algorithms", "Operating Systems",
    "Networking", "Compiler", "Object Oriented Programming", "Prompt Engineering"
  ]
};

const categoryColors: Record<string, string> = {
  "Programming Languages": "border-primary/30 bg-primary/5",
  "AI / Machine Learning": "border-secondary/30 bg-secondary/5",
  "Data Science & Analytics": "border-accent/30 bg-accent/5",
  "Web Development": "border-primary/30 bg-primary/5",
  "Other": "border-muted-foreground/20 bg-muted/20",
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_hsl(186_100%_50%_/_0.08)_0%,_transparent_70%)] blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-foreground">Skills & </span>
            <span className="text-gradient-primary">Technologies</span>
          </h2>
        </motion.div>

        {/* Skills by category */}
        <div className="space-y-8">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.08 }}
            >
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={`px-4 py-2 text-sm font-medium rounded-full border transition-all duration-300 hover:scale-105 cursor-default ${categoryColors[category] || "border-border/50 bg-card/50"} text-foreground`}
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
