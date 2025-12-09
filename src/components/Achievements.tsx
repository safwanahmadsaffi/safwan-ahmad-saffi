import { motion } from "framer-motion";
import { Trophy, Award, Code, Rocket, GraduationCap, Users } from "lucide-react";

const achievements = [
  {
    category: "Hackathon Wins",
    icon: Trophy,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    items: [
      "Won National WordPress Hackathon",
      "Top 10 Teams - National Hackathon",
      "10+ International Hackathons",
      "Shell.ai Hackathon 2025",
      "NASA Space Apps Hackathon",
      "5x Intel Hackathons",
    ],
  },
  {
    category: "Competitive Programming",
    icon: Code,
    color: "text-primary",
    bgColor: "bg-primary/10",
    items: [
      "MIT Informatics Tournament",
      "Calico Competition - UC Berkeley",
      "2x Harvard CS50x Puzzle Day",
      "2x Meta Hacker Cup",
      "Advent of Code",
      "Code Sprint LA",
    ],
  },
  {
    category: "Recognition",
    icon: Award,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    items: [
      "Stanford Code-In-Place Selection",
      "Judge & SME Lead - 15 Staff, 150+ Teams",
      "GitHub Developer Program Member",
      "GitHub Pro Member",
    ],
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

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
            Recognition
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-foreground">Achievements & </span>
            <span className="text-gradient-primary">Awards</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Competing globally, building locally, and making an impact everywhere
          </p>
        </motion.div>

        {/* Achievement cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.category}
              variants={itemVariants}
              className="bg-card/50 border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-xl ${achievement.bgColor} flex items-center justify-center`}>
                  <achievement.icon className={`w-6 h-6 ${achievement.color}`} />
                </div>
                <h3 className="text-lg font-semibold">{achievement.category}</h3>
              </div>

              {/* Items */}
              <ul className="space-y-3">
                {achievement.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full ${achievement.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`} />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
        >
          {[
            { label: "Hackathons", value: "10+", icon: Rocket },
            { label: "Competitions", value: "15+", icon: Code },
            { label: "Teams Evaluated", value: "150+", icon: Users },
            { label: "Universities", value: "5", icon: GraduationCap },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="bg-card/30 border border-border/30 rounded-xl p-4 text-center"
            >
              <stat.icon className="w-5 h-5 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
