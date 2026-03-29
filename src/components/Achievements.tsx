import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Achievement {
  title: string;
  placement: string;
  year: string;
  description: string;
  badges: string[];
  link?: string;
}

const achievements: Achievement[] = [
  {
    title: "National WordPress Hackathon",
    placement: "Winner",
    year: "2024",
    description: "Won the national WordPress hackathon competing against teams from across the country.",
    badges: ["1st Place", "National"],
    link: "https://github.com/safwanahmadsaffi",
  },
  {
    title: "Stanford Code-In-Place",
    placement: "Selected Student",
    year: "2024",
    description: "Selected for Stanford University's prestigious Code-In-Place program.",
    badges: ["Stanford", "Selected"],
  },
  {
    title: "Shell.ai Hackathon 2025",
    placement: "Participant",
    year: "2025",
    description: "Predicted fuel blend properties and optimized sustainable aviation fuel models.",
    badges: ["International", "AI/ML"],
    link: "https://github.com/safwanahmadsaffi/Shell.ai-Hackathon-2025",
  },
  {
    title: "Judge & SME Lead",
    placement: "Leadership Role",
    year: "2024",
    description: "Supervised 15 staff members and evaluated projects of 150+ teams.",
    badges: ["15 Staff", "150+ Teams"],
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-semibold text-center mb-14"
        >
          <span className="text-foreground">Competitions & </span>
          <span className="text-gradient-primary">Awards</span>
        </motion.h2>

        <div className="space-y-4">
          {achievements.map((item, i) => {
            const isHighlight =
              item.placement.toLowerCase().includes("winner") ||
              item.placement.toLowerCase().includes("selected");

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="glass-card rounded-xl p-5 hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="flex items-start justify-between mb-1">
                  <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs text-muted-foreground ml-4 flex-shrink-0">{item.year}</span>
                </div>

                <p className={`text-xs font-semibold mb-2 ${isHighlight ? "text-yellow-400/90" : "text-primary/70"}`}>
                  {item.placement}
                </p>

                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.description}</p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.badges.map((badge) => (
                      <span
                        key={badge}
                        className={`px-2.5 py-0.5 text-[11px] font-medium rounded-full ${
                          badge.includes("1st") || badge.includes("Selected")
                            ? "bg-yellow-400/10 text-yellow-400/80 border border-yellow-400/20"
                            : "glass text-muted-foreground"
                        }`}
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                  {item.link && (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link to="/achievements">
            <Button variant="outline" className="group rounded-full px-6 glass-card border-border/40 text-sm">
              View All
              <ArrowRight className="ml-2 h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
