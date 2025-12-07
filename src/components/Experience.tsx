import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Trophy } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "AI Engineer Intern",
      company: "Early Innovations Inc",
      period: "2024 - Present",
      description: "Developing scalable NLP pipelines for enterprise clients, improved chatbot accuracy by 40% using fine-tuned LLaMA 3 models.",
      icon: Briefcase,
      position: "right",
    },
    {
      title: "CALICO Competition Winner",
      company: "National Programming Contest",
      period: "2023",
      description: "Won a prize of $1 finish, and 8,000 out of almost 400 financed the unified software concept that enables the CALICO Team to be included in ICC.",
      icon: Trophy,
      position: "left",
    },
    {
      title: "B.S. in Computer Science",
      company: "FAST-NUCES",
      period: "2021 - 2025",
      description: "Focus on AI/ML, Data Science, and Full-Stack Development. Dean's list 2022-2023.",
      icon: GraduationCap,
      position: "right",
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
            Impact
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-foreground">Experience & </span>
            <br />
            <span className="text-gradient-primary">achievements</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative space-y-8">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent -translate-x-1/2" />
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: exp.position === "left" ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="grid grid-cols-[1fr_auto_1fr] gap-4 items-center"
            >
              {/* Left side */}
              <div className={exp.position === "left" ? "" : "invisible"}>
                {exp.position === "left" && (
                  <div className="bg-card/50 border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <exp.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                    <p className="text-sm text-primary mb-3">{exp.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                )}
              </div>

              {/* Center dot */}
              <div className="w-3 h-3 rounded-full bg-primary border-2 border-background z-10" />

              {/* Right side */}
              <div className={exp.position === "right" ? "" : "invisible"}>
                {exp.position === "right" && (
                  <div className="bg-card/50 border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                          <exp.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                    <p className="text-sm text-primary mb-3">{exp.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
