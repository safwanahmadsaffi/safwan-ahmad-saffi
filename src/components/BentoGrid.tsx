import { motion } from "framer-motion";
import { ExternalLink, Github, Bot, TrendingUp, MessageSquare, Video } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  icon: React.ComponentType<{ className?: string }>;
  github?: string;
  demo?: string;
}

const projects: Project[] = [
  {
    id: "shell-ai",
    title: "Shell.ai Hackathon 2025",
    description: "Predict fuel blend properties from 55 input features. Optimize sustainable aviation fuel through mathematical models.",
    techStack: ["Python", "ML", "Data Science"],
    icon: TrendingUp,
    github: "https://github.com/safwanahmadsaffi/Shell.ai-Hackathon-2025",
  },
  {
    id: "datavue",
    title: "DataVue",
    description: "Data science learning ecosystem with AI-powered EDA, dynamic visualizations, and 24/7 AI assistant.",
    techStack: ["Python", "AI", "Visualization"],
    icon: Bot,
    github: "https://github.com/safwanahmadsaffi/DataVue",
  },
  {
    id: "infraseek360",
    title: "InfraSeek360",
    description: "Infrastructure search and analysis tool for comprehensive monitoring and insights.",
    techStack: ["TypeScript", "Infrastructure"],
    icon: Video,
    github: "https://github.com/safwanahmadsaffi/InfraSeek360",
  },
  {
    id: "nextedge",
    title: "NextEdge LabLab Hackathon",
    description: "Tool-calling chatbot that interacts with database info and answers without hallucinations.",
    techStack: ["Jupyter", "LLM", "RAG"],
    icon: MessageSquare,
    github: "https://github.com/safwanahmadsaffi/NextEdge-LabLab-Hackathon",
  },
];

const BentoGrid = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-semibold text-center mb-14"
        >
          <span className="text-foreground">Featured </span>
          <span className="text-gradient-primary">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group glass-card rounded-xl p-5 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg glass flex items-center justify-center">
                  <project.icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.techStack.map((tech) => (
                  <span key={tech} className="px-2.5 py-0.5 text-[11px] font-medium text-primary/70 bg-primary/[0.08] rounded-full border border-primary/10">
                    {tech}
                  </span>
                ))}
              </div>

              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1.5"
                >
                  <Github className="h-3.5 w-3.5" />
                  View Project
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
