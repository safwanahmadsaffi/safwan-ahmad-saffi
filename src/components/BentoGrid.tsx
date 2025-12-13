import { motion } from "framer-motion";
import { ExternalLink, Github, Sparkles, Bot, TrendingUp, MessageSquare, Video, Star } from "lucide-react";
import { Link } from "react-router-dom";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  icon: React.ComponentType<{ className?: string }>;
  github?: string;
  demo?: string;
  constellation?: string;
  stars?: number;
}

const projects: Project[] = [
  {
    id: "shell-ai-hackathon",
    title: "Shell.ai Hackathon 2025",
    description: "Predicts 10 fuel blend properties from 55 input features. Optimizes sustainable aviation fuel through mathematical models.",
    techStack: ["Python", "ML", "Data Science", "Optimization"],
    icon: TrendingUp,
    github: "https://github.com/safwanahmadsaffi/Shell.ai-Hackathon-2025",
    constellation: "Orion",
    stars: 87,
  },
  {
    id: "datavue",
    title: "DataVue",
    description: "Revolutionary ecosystem for data science learning with AI-powered EDA, dynamic visualizations, and 24/7 AI assistant.",
    techStack: ["Python", "AI", "Visualization", "EDA"],
    icon: Bot,
    github: "https://github.com/safwanahmadsaffi/DataVue",
    constellation: "Andromeda",
    stars: 156,
  },
  {
    id: "infraseek360",
    title: "InfraSeek360",
    description: "Infrastructure-related search and analysis tool built with TypeScript for comprehensive monitoring and insights.",
    techStack: ["TypeScript", "Infrastructure", "Analysis"],
    icon: Video,
    github: "https://github.com/safwanahmadsaffi/InfraSeek360",
    constellation: "Cassiopeia",
    stars: 124,
  },
  {
    id: "nextedge-hackathon",
    title: "NextEdge LabLab Hackathon",
    description: "Toolcalling chatbot that interacts with database info, answers questions without hallucinations using RAG.",
    techStack: ["Jupyter Notebook", "LLM", "RAG", "Chatbot"],
    icon: MessageSquare,
    github: "https://github.com/safwanahmadsaffi/NextEdge-LabLab-Hackathon",
    constellation: "Lyra",
    stars: 98,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const BentoGrid = () => {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative section-cosmic">
      <div className="max-w-6xl mx-auto relative z-10">
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
            <span className="text-sm font-medium">AI Solutions</span>
            <Sparkles className="w-4 h-4 text-cosmic-pink" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My Product <span className="text-gradient-cosmic">Universe</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover my constellation of intelligent tools designed to automate, enhance, and revolutionize your digital experience.
          </p>
        </motion.div>

        {/* Bento grid layout */}
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
              className="group glass-card rounded-2xl p-6 sm:p-8"
            >
              {/* Header with constellation */}
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cosmic-purple/20 to-cosmic-pink/20 border border-cosmic-purple/30 flex items-center justify-center">
                  <project.icon className="h-7 w-7 text-cosmic-purple" />
                </div>
                {project.constellation && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 text-cosmic-orange" />
                    <span>{project.constellation}</span>
                    {project.stars && <span className="text-cosmic-pink">{project.stars}</span>}
                  </div>
                )}
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 group-hover:text-gradient-cosmic transition-all">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Cosmic Features label */}
              <div className="mb-4">
                <h4 className="text-xs uppercase tracking-wider text-cosmic-purple font-semibold mb-3">
                  Cosmic Features
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-medium bg-muted/50 text-foreground/80 rounded-full border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/30 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-cosmic-blue hover:text-cosmic-purple transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </a>
                )}
                <button className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-cosmic-pink transition-colors ml-auto">
                  Want to Know More?
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* View all projects button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Ready to explore the infinite cosmos of possibilities?</p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 btn-cosmic rounded-full text-base font-semibold"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BentoGrid;