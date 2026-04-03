import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface Achievement {
  title: string;
  description: string;
  highlight?: boolean;
}

const achievements: Achievement[] = [
  { title: "National WordPress Hackathon", description: "Winner · 1st Place nationally", highlight: true },
  { title: "Stanford Code-In-Place", description: "Selected Student · 2024", highlight: true },
  { title: "Shell.ai Hackathon 2025", description: "International · AI/ML competition" },
  { title: "Judge & SME Lead", description: "Supervised 15 staff · 150+ teams evaluated", highlight: true },
  { title: "TCF Baghbaan Volunteer", description: "Helping underprivileged children in Pakistan" },
  { title: "Aspire Leadership Program", description: "International cohort member" },
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold mb-12"
        >
          Mini Wins.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="glass-card rounded-xl p-5 group"
            >
              <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                {item.title}
              </h3>
              <p className={`text-xs leading-relaxed ${item.highlight ? "text-primary/70" : "text-muted-foreground"}`}>
                {item.description}
              </p>
            </motion.div>
          ))}
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
