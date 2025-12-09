import { motion } from "framer-motion";
import { Star, GitFork, Users, FolderGit2, Loader2 } from "lucide-react";
import { useGitHubStats } from "@/hooks/useGitHubStats";

const languages = [
  { name: "Python", percentage: 50, color: "#3572A5" },
  { name: "JavaScript", percentage: 20, color: "#F7DF1E" },
  { name: "Dart", percentage: 15, color: "#00B4AB" },
  { name: "HTML/CSS", percentage: 10, color: "#E34F26" },
  { name: "Other", percentage: 5, color: "#6B7280" },
];

const LiveStats = () => {
  const { followers, following, publicRepos, totalStars, isLoading, error } = useGitHubStats("safwanahmadsaffi");

  const stats = [
    { label: "Total Stars", value: totalStars, icon: Star, color: "text-yellow-400" },
    { label: "Repositories", value: publicRepos, icon: FolderGit2, color: "text-purple-400" },
    { label: "Followers", value: followers, icon: Users, color: "text-primary" },
    { label: "Following", value: following, icon: GitFork, color: "text-muted-foreground" },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
            GitHub Stats
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-foreground">Live </span>
            <span className="text-gradient-primary">statistics</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card/50 border border-border/50 rounded-xl p-5 text-center"
            >
              <stat.icon className={`w-5 h-5 mx-auto mb-3 ${stat.color}`} />
              {isLoading ? (
                <Loader2 className="w-6 h-6 mx-auto mb-1 animate-spin text-muted-foreground" />
              ) : (
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
              )}
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Language distribution */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card/50 border border-border/50 rounded-2xl p-6"
        >
          <h3 className="text-sm font-medium text-muted-foreground mb-6 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            Language Distribution
          </h3>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Pie chart visual */}
            <div className="relative w-48 h-48 mx-auto">
              <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90">
                {languages.reduce(
                  (acc, lang, index) => {
                    const circumference = 2 * Math.PI * 40;
                    const offset = (acc.offset / 100) * circumference;
                    const length = (lang.percentage / 100) * circumference;
                    
                    acc.elements.push(
                      <circle
                        key={lang.name}
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke={lang.color}
                        strokeWidth="20"
                        strokeDasharray={`${length} ${circumference - length}`}
                        strokeDashoffset={-offset}
                        className="transition-all duration-500"
                      />
                    );
                    
                    acc.offset += lang.percentage;
                    return acc;
                  },
                  { elements: [] as JSX.Element[], offset: 0 }
                ).elements}
              </svg>
            </div>

            {/* Legend */}
            <div className="space-y-3">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: lang.color }}
                    />
                    <span className="text-sm">{lang.name}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveStats;
