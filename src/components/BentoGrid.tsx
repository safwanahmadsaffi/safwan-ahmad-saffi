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
    id: "interactive-video-chatbot",
    title: "Interactive Video Chatbot",
    description: "A multimodal conversational AI with deep-speech-to-video model, that ingests recognition, retrieval LLMs, and advanced video processing for seamless human-like interactions.",
    techStack: ["Real Time", "Video Analysis", "NLP", "React"],
    icon: Video,
    github: "https://github.com/safwanahmadsaffi",
    demo: "#",
    iconColor: "text-primary",
  },
  {
    id: "scholarship-finder-rag",
    title: "Scholarship Finder RAG",
    description: "A RAG-based assistant that ingests thorny, funding data lists and retrieves scholarship to help students find the scholarships with high accuracy rate.",
    techStack: ["LLM Inference", "Fine-tuning", "Retrieval", "FastAPI"],
    icon: Bot,
    github: "https://github.com/safwanahmadsaffi",
    iconColor: "text-secondary",
  },
  {
    id: "psx-market-analyzer",
    title: "PSX Market Analyzer",
    description: "Financial analytics tool leveraging ML models analysis and weighted scoring algorithms to predict trends in the Pakistan Stock Exchange.",
    techStack: ["Sentiment Analysis", "Pandas", "Matplotlib", "Plotly"],
    icon: TrendingUp,
    github: "https://github.com/safwanahmadsaffi",
    iconColor: "text-primary",
  },
  {
    id: "watson-style-research-assistant",
    title: "Watson-Style Research Assistant",
    description: "In Development",
    techStack: [],
    icon: MessageSquare,
    iconColor: "text-muted-foreground",
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
