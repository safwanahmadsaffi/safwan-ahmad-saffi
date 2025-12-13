import { motion } from "framer-motion";
import { ExternalLink, TrendingUp, Bot, Video, MessageSquare } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: { name: string; icon?: string }[];
  image?: string;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: "shell-ai-hackathon",
    title: "Shell.ai Hackathon 2025",
    description: "Addresses Shell.ai Hackathon 2025 challenge to predict 10 fuel blend properties from 55 input features. Optimizes sustainable aviation fuel through mathematical models and prototypes.",
    techStack: [
      { name: "Python" },
      { name: "ML" },
      { name: "Data Science" },
    ],
    github: "https://github.com/safwanahmadsaffi/Shell.ai-Hackathon-2025",
  },
  {
    id: "datavue",
    title: "DataVue",
    description: "Revolutionary ecosystem for data science learning with AI-powered EDA, dynamic visualizations, and 24/7 AI assistant for learning and applying data science.",
    techStack: [
      { name: "Python" },
      { name: "AI" },
      { name: "Visualization" },
    ],
    github: "https://github.com/safwanahmadsaffi/DataVue",
  },
  {
    id: "infraseek360",
    title: "InfraSeek360",
    description: "Infrastructure-related search or analysis tool built with TypeScript for comprehensive infrastructure monitoring and insights.",
    techStack: [
      { name: "TypeScript" },
      { name: "Infrastructure" },
    ],
    github: "https://github.com/safwanahmadsaffi/InfraSeek360",
  },
  {
    id: "nextedge-hackathon",
    title: "NextEdge LabLab Hackathon",
    description: "Toolcalling chatbot that interacts with database info, answers questions without hallucinations. Developed for NextEdge-LabLab Hackathon.",
    techStack: [
      { name: "Jupyter" },
      { name: "LLM" },
      { name: "RAG" },
    ],
    github: "https://github.com/safwanahmadsaffi/NextEdge-LabLab-Hackathon",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BentoGrid = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title text-gradient-primary">What I've been working on</h2>
          <p className="section-subtitle">Highlighted Projects</p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="group relative rounded-2xl p-6 bg-card border border-border hover:border-primary/30 transition-all duration-300 card-hover"
            >
              {/* Title */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full"
                  >
                    {tech.name}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    View Project
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;
