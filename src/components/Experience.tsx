import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "GenAI Developer",
      company: "Vast Art, Faisalabad",
      period: "June 2024 - July 2024",
      description: "Experience with generative AI applications, API implementation and Chatbot integration. Automated web data collection via web scraping and APIs.",
      icon: Briefcase,
    },
    {
      title: "Data Science Intern",
      company: "Snappy Sol, Faisalabad",
      period: "June 2023 - August 2023",
      description: "Experienced in Python development, strategic issue analysis, data analysis expertise, and data modeling techniques.",
      icon: Briefcase,
    },
    {
      title: "Teacher Assistant",
      company: "Kips Academy",
      period: "July 2022 - August 2022",
      description: "Member of Management Staff of Educational Institute. Managed class timetable and discipline.",
      icon: Briefcase,
    },
    {
      title: "B.S. in Computer Science",
      company: "National Textile University",
      period: "October 2022 - July 2026",
      description: "Coursework: C++ Programming, OOP, Database Systems, DSA, Operating Systems, Compiler, Web Development, Networking.",
      icon: GraduationCap,
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title text-gradient-primary">Experience & Education</h2>
          <p className="section-subtitle">My professional journey and academic background.</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-8 top-0 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-1.5" />
                
                {/* Card */}
                <div className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 card-hover">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <exp.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold mb-1">{exp.title}</h3>
                      <p className="text-sm text-primary mb-1">{exp.company}</p>
                      <p className="text-xs text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
