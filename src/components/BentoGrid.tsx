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
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold mb-12"
        >
          Projects.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group glass-card rounded-xl p-6 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <project.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
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
                  className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 group/link"
                >
                  <Github className="h-4 w-4" />
                  View Project
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
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
