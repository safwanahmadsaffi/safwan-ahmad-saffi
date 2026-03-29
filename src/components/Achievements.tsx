import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface Competition {
  title: string;
  placement: string;
  year: string;
  description: string;
  badges: string[];
  link?: string;
}

const competitions: Competition[] = [
  {
    title: "National WordPress Hackathon",
    placement: "Winner",
    year: "2024",
    description: "Won the national WordPress hackathon competing against teams from across the country with an innovative web solution.",
    badges: ["1st Place", "National"],
    link: "https://github.com/safwanahmadsaffi",
  },
  {
    title: "National Hackathon",
    placement: "Top 10 Teams",
    year: "2024",
    description: "Secured position among the top 10 teams in a national-level hackathon, demonstrating strong problem-solving skills.",
    badges: ["Top 10", "National"],
    link: "https://github.com/safwanahmadsaffi",
  },
  {
    title: "Shell.ai Hackathon 2025",
    placement: "Participant",
    year: "2025",
    description: "Addressed Shell.ai challenge to predict fuel blend properties from input features. Optimized sustainable aviation fuel through mathematical models.",
    badges: ["International", "AI/ML"],
    link: "https://github.com/safwanahmadsaffi/Shell.ai-Hackathon-2025",
  },
  {
    title: "Stanford Code-In-Place",
    placement: "Selected Student",
    year: "2024",
    description: "Selected as a student for Code-In-Place program at Stanford University, one of the most prestigious coding programs globally.",
    badges: ["Stanford", "Selected"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_hsl(260_80%_50%_/_0.08)_0%,_transparent_70%)] blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-foreground">Competitions & </span>
            <span className="text-gradient-primary">Awards</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My prized achievements through various hackathons and competitions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-5"
        >
          {competitions.map((comp) => (
            <CompetitionCard key={comp.title} competition={comp} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link to="/achievements">
            <Button variant="outline" className="group rounded-full px-6">
              View All Achievements
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

const CompetitionCard = ({ competition }: { competition: Competition }) => {
  const isWinner = competition.placement.toLowerCase().includes("winner") || 
    competition.placement.toLowerCase().includes("1st") ||
    competition.placement.toLowerCase().includes("selected");

  return (
    <motion.div
      variants={itemVariants}
      className="bg-card/40 border border-border/40 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm group"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
              {competition.title}
            </h3>
            <span className="text-sm text-muted-foreground flex-shrink-0 ml-4">
              {competition.year}
            </span>
          </div>

          <p className={`text-sm font-semibold mb-3 ${isWinner ? "text-yellow-400" : "text-secondary"}`}>
            {competition.placement}
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {competition.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {competition.badges.map((badge) => (
                <span
                  key={badge}
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    badge.includes("1st") || badge.includes("Winner") || badge.includes("Selected")
                      ? "bg-yellow-400/15 text-yellow-400 border border-yellow-400/30"
                      : "bg-muted/50 text-muted-foreground border border-border/50"
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>

            {competition.link && (
              <a
                href={competition.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Achievements;
