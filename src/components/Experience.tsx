import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "GenAI Developer",
    company: "Vast Art, Faisalabad",
    period: "Jun 2024 – Jul 2024",
    description: "Built generative AI applications, integrated APIs and chatbots. Automated web data collection via scraping.",
    badges: ["GenAI", "APIs"],
    current: false,
  },
  {
    title: "Data Science Intern",
    company: "Snappy Sol, Faisalabad",
    period: "Jun 2023 – Aug 2023",
    description: "Python development, data analysis & modeling, strategic issue analysis and data-driven solutions.",
    badges: ["Python", "Data Science"],
    current: false,
  },
  {
    title: "Judge & SME Lead",
    company: "National Hackathon",
    period: "2024",
    description: "Supervised 15 staff members and evaluated projects of 150+ teams across multiple categories.",
    badges: ["Leadership", "150+ Teams"],
    current: false,
  },
  {
    title: "Teacher Assistant",
    company: "Kips Academy",
    period: "Jul 2022 – Aug 2022",
    description: "Management staff member. Coordinated class timetable, maintained discipline, assisted teaching.",
    badges: ["Education"],
    current: false,
  },
];

const education = {
  title: "B.S. Computer Science",
  company: "National Textile University",
  period: "Oct 2022 – Jul 2026",
  description: "DSA, OOP, Database Systems, OS, Compiler Design, Web Dev, Networking, Statistics.",
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-3xl sm:text-4xl font-bold mb-12"
        >
          Experience.
        </motion.h2>

        <div className="space-y-5">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card rounded-xl p-6 group"
            >
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-primary/70">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 ml-4">
                  {exp.current && (
                    <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                      Current
                    </span>
                  )}
                  <span className="text-xs text-muted-foreground">{exp.period}</span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{exp.description}</p>

              <div className="flex flex-wrap gap-1.5">
                {exp.badges.map((badge) => (
                  <span
                    key={badge}
                    className="px-2.5 py-0.5 text-[11px] font-medium text-primary/70 bg-primary/[0.08] rounded-full border border-primary/10"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="font-display text-xl font-bold mb-5">Education.</h3>
          <div className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="text-base font-semibold">{education.title}</h4>
                <p className="text-sm text-primary/70">{education.company}</p>
              </div>
              <span className="text-xs text-muted-foreground">{education.period}</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{education.description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
