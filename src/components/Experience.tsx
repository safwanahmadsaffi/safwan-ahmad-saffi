import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "GenAI Developer",
    company: "Vast Art, Faisalabad",
    period: "Jun 2024 – Jul 2024",
    description: "Built generative AI applications, integrated APIs and chatbots. Automated web data collection via scraping.",
  },
  {
    title: "Data Science Intern",
    company: "Snappy Sol, Faisalabad",
    period: "Jun 2023 – Aug 2023",
    description: "Python development, data analysis & modeling, strategic issue analysis and data-driven solutions.",
  },
  {
    title: "Teacher Assistant",
    company: "Kips Academy",
    period: "Jul 2022 – Aug 2022",
    description: "Management staff member. Coordinated class timetable, maintained discipline, assisted teaching.",
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
          className="text-2xl sm:text-3xl font-semibold text-center mb-14"
        >
          <span className="text-foreground">Work </span>
          <span className="text-gradient-primary">Experience</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative space-y-6">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border/60" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative pl-12"
            >
              <div className="absolute left-[14px] top-2 w-[11px] h-[11px] rounded-full border-2 border-primary/60 bg-background" />
              <div className="glass-card rounded-xl p-5">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-sm font-semibold text-foreground">{exp.title}</h3>
                  <span className="text-xs text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-xs text-primary/80 mb-2">{exp.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14"
        >
          <h3 className="text-lg font-semibold text-center mb-6 text-foreground">Education</h3>
          <div className="glass-card rounded-xl p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg glass flex items-center justify-center">
                <GraduationCap className="w-4 h-4 text-primary" />
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold">{education.title}</h4>
                <p className="text-xs text-primary/80">{education.company}</p>
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
