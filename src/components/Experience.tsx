import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles, Rocket } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "GenAI Developer",
      company: "Vast Art, Faisalabad",
      period: "June 2024 - July 2024",
      description: "Experience with generative AI applications, API implementation and Chatbot integration. Automated web data collection via web scraping and APIs.",
      icon: Briefcase,
      step: "01",
    },
    {
      title: "Data Science Intern",
      company: "Snappy Sol, Faisalabad",
      period: "June 2023 - August 2023",
      description: "Experienced in Python development, strategic issue analysis, data analysis expertise, and data modeling techniques.",
      icon: Briefcase,
      step: "02",
    },
    {
      title: "Teacher Assistant",
      company: "Kips Academy",
      period: "July 2022 - August 2022",
      description: "Member of Management Staff. Acted as Teacher Assistant, managed class timetable and discipline.",
      icon: Briefcase,
      step: "03",
    },
    {
      title: "B.S. in Computer Science",
      company: "National Textile University",
      period: "October 2022 - July 2026",
      description: "Coursework: C++ Programming, OOP, Database Systems, DSA, Operating Systems, Web Development, Networking.",
      icon: GraduationCap,
      step: "04",
    },
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative section-cosmic">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full cosmic-badge">
            <Rocket className="w-4 h-4 text-cosmic-purple" />
            <span className="text-sm font-medium">Journey</span>
            <Sparkles className="w-4 h-4 text-cosmic-pink" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            My <span className="text-gradient-cosmic">Trajectory</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The milestones that shaped my career in tech
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line for desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cosmic-purple via-cosmic-pink to-cosmic-blue -translate-x-1/2 hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content card */}
                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                  <div className="glass-card rounded-2xl p-6 group">
                    {/* Step number */}
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl font-bold text-gradient-cosmic opacity-50">{exp.step}</span>
                      <div className="flex-1">
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">{exp.period}</span>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-cosmic-purple/20 flex items-center justify-center">
                        <exp.icon className="w-5 h-5 text-cosmic-purple" />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-1 group-hover:text-gradient-cosmic transition-all">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-cosmic-pink mb-3">{exp.company}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                  </div>
                </div>

                {/* Center dot */}
                <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex">
                  <div className="w-4 h-4 rounded-full bg-cosmic-purple border-4 border-background z-10" />
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