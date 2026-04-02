import { motion } from "framer-motion";
import { Code2, Brain, BarChart3, Globe, Cpu } from "lucide-react";

const categoryMeta: Record<string, { icon: React.ComponentType<{ className?: string }>; emoji: string; vibe: string }> = {
  "Languages": { icon: Code2, emoji: "💻", vibe: "from-blue-500/20 to-violet-500/20" },
  "AI / ML": { icon: Brain, emoji: "🤖", vibe: "from-emerald-500/20 to-cyan-500/20" },
  "Data Science": { icon: BarChart3, emoji: "📊", vibe: "from-amber-500/20 to-orange-500/20" },
  "Web Dev": { icon: Globe, emoji: "🌐", vibe: "from-pink-500/20 to-rose-500/20" },
  "Fundamentals": { icon: Cpu, emoji: "⚙️", vibe: "from-indigo-500/20 to-purple-500/20" },
};

const skillsData: Record<string, string[]> = {
  "Languages": ["Python", "C Programming", "TypeScript", "JavaScript"],
  "AI / ML": ["Generative AI", "Chatbots", "LangChain", "Hugging Face", "OpenAI API", "Tool Calling"],
  "Data Science": ["Data Analysis", "EDA", "Statistics", "Web Scraping", "APIs"],
  "Web Dev": ["React", "Node.js", "HTML", "CSS", "Git"],
  "Fundamentals": ["SQL", "DSA", "Operating Systems", "Networking", "OOP"],
};

const pillColors = [
  "hover:bg-blue-500/20 hover:border-blue-400/40 hover:text-blue-300",
  "hover:bg-emerald-500/20 hover:border-emerald-400/40 hover:text-emerald-300",
  "hover:bg-amber-500/20 hover:border-amber-400/40 hover:text-amber-300",
  "hover:bg-pink-500/20 hover:border-pink-400/40 hover:text-pink-300",
  "hover:bg-violet-500/20 hover:border-violet-400/40 hover:text-violet-300",
];

const lightPillColors = [
  "hover:bg-blue-100 hover:border-blue-300 hover:text-blue-700",
  "hover:bg-emerald-100 hover:border-emerald-300 hover:text-emerald-700",
  "hover:bg-amber-100 hover:border-amber-300 hover:text-amber-700",
  "hover:bg-pink-100 hover:border-pink-300 hover:text-pink-700",
  "hover:bg-violet-100 hover:border-violet-300 hover:text-violet-700",
];

const Skills = () => {
  return (
    <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/[0.04] blur-[100px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block text-4xl mb-4"
          >
            ✨
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            <span className="text-foreground">my </span>
            <span className="text-gradient-primary">tech stack</span>
          </h2>
          <p className="text-sm text-muted-foreground">things i work with daily — no cap</p>
        </motion.div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(skillsData).map(([category, skills], idx) => {
            const meta = categoryMeta[category];
            const isWide = idx === 1; // AI/ML gets a wider card
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
                whileHover={{ scale: 1.02 }}
                className={`glass-card rounded-2xl p-6 group relative overflow-hidden ${
                  isWide ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${meta.vibe} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                <div className="relative z-10">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-2xl">{meta.emoji}</span>
                    <div>
                      <h3 className="text-sm font-bold text-foreground uppercase tracking-wide">
                        {category}
                      </h3>
                      <span className="text-[11px] text-muted-foreground">
                        {skills.length} skills
                      </span>
                    </div>
                  </div>

                  {/* Skill pills */}
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, si) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.06 + si * 0.03 }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-3.5 py-1.5 text-[13px] font-semibold rounded-full border border-border/60 bg-background/40 text-foreground/80 cursor-default transition-all duration-300 ${pillColors[idx % pillColors.length]}`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Fun stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10 glass-card rounded-2xl p-5 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-center"
        >
          {[
            { label: "Technologies", value: "20+", emoji: "🛠️" },
            { label: "Projects Built", value: "10+", emoji: "🚀" },
            { label: "Hackathons", value: "5+", emoji: "🏆" },
            { label: "Vibes", value: "∞", emoji: "✨" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.1, y: -3 }}
              className="cursor-default"
            >
              <span className="text-lg">{stat.emoji}</span>
              <p className="text-xl font-bold text-foreground">{stat.value}</p>
              <p className="text-[11px] text-muted-foreground font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
