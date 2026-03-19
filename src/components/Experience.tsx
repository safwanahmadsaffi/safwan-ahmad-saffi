import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "GenAI Developer",
      company: "Vast Art, Faisalabad",
      period: "June 2024 - July 2024",
      description: "Experience with generative AI applications, API implementation and Chatbot integration. Automated web data collection via web scraping and APIs. Worked and solved real-world problems.",
      icon: Briefcase,
    },
    {
      title: "Data Science Intern",
      company: "Snappy Sol, Faisalabad",
      period: "June 2023 - August 2023",
      description: "Experienced in Python development, strategic issue analysis, data analysis expertise, data modeling expertise and data analysis techniques.",
      icon: Briefcase,
    },
    {
      title: "Teacher Assistant",
      company: "Kips Academy",
      period: "July 2022 - August 2022",
      description: "Member of Management Staff of Educational Institute. Acted as Teacher Assistant, managed class timetable and discipline.",
      icon: Briefcase,
    },
  ];

  const education = {
    title: "B.S. in Computer Science",
    company: "National Textile University",
    period: "October 2022 - July 2026",
    description: "Coursework: C++ Programming, OOP, Database Systems, DSA, Operating Systems, Compiler, Web Development, Networking, Statistics, Physics for Computing.",
    icon: GraduationCap,
  };

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,_hsl(260_80%_50%_/_0.1)_0%,_transparent_70%)] blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-foreground">Work </span>
            <span className="text-gradient-primary">Experience</span>
          </h2>
        </motion.div>

        {/* Experience timeline */}
        <div className="relative space-y-0">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-16 pb-10"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 top-1 w-5 h-5 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>

              <div className="bg-card/40 border border-border/40 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                    <exp.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {exp.period}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-1">{exp.title}</h3>
                <p className="text-sm text-secondary mb-3">{exp.company}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            <span className="text-foreground">Education</span>
          </h3>
          <div className="bg-card/40 border border-border/40 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">{education.title}</h4>
                <p className="text-sm text-secondary">{education.company}</p>
              </div>
              <span className="ml-auto text-xs font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                {education.period}
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{education.description}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
