import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink, Github, Video, Bot, TrendingUp, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  icon: React.ComponentType<{ className?: string }>;
  github?: string;
  demo?: string;
  iconColor: string;
}

const projects: Project[] = [
  {
    id: "shell-ai-hackathon",
    title: "Shell.ai Hackathon 2025",
    description: "Addresses Shell.ai Hackathon 2025 challenge to predict 10 fuel blend properties from 55 input features. Optimizes sustainable aviation fuel through mathematical models and prototypes.",
    techStack: ["Python", "ML", "Data Science", "Optimization"],
    icon: TrendingUp,
    github: "https://github.com/safwanahmadsaffi/Shell.ai-Hackathon-2025",
    iconColor: "text-primary",
  },
  {
    id: "datavue",
    title: "DataVue",
    description: "Revolutionary ecosystem for data science learning with AI-powered EDA, dynamic visualizations, and 24/7 AI assistant for learning and applying data science.",
    techStack: ["Python", "AI", "Visualization", "EDA"],
    icon: Bot,
    github: "https://github.com/safwanahmadsaffi/DataVue",
    iconColor: "text-secondary",
  },
  {
    id: "infraseek360",
    title: "InfraSeek360",
    description: "Infrastructure-related search or analysis tool built with TypeScript for comprehensive infrastructure monitoring and insights.",
    techStack: ["TypeScript", "Infrastructure", "Analysis"],
    icon: Video,
    github: "https://github.com/safwanahmadsaffi/InfraSeek360",
    iconColor: "text-primary",
  },
  {
    id: "nextedge-hackathon",
    title: "NextEdge LabLab Hackathon",
    description: "Toolcalling chatbot that interacts with database info, answers questions without hallucinations. Developed for NextEdge-LabLab Hackathon.",
    techStack: ["Jupyter Notebook", "LLM", "RAG", "Chatbot"],
    icon: MessageSquare,
    github: "https://github.com/safwanahmadsaffi/NextEdge-LabLab-Hackathon",
    iconColor: "text-secondary",
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
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
            Featured Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-foreground">Projects that push</span>
            <br />
            <span className="text-gradient-primary">boundaries</span>
          </h2>
        </motion.div>

        {/* Bento grid layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              variants={itemVariants}
              className="group relative rounded-2xl p-6 bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center mb-5 ${project.iconColor}`}>
                <project.icon className="h-6 w-6" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Tech stack */}
              {project.techStack.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-muted/50 text-muted-foreground rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center gap-4 mt-auto">
                {project.demo && project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    View Demo
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    GitHub
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
