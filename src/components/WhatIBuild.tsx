import { motion } from "framer-motion";
import { Globe, Smartphone, Zap } from "lucide-react";

interface ServiceCard {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  link?: string;
}

const services: ServiceCard[] = [
  {
    icon: Globe,
    title: "Scalable Web Apps",
    description: "Building high-performance web applications with modern frameworks like React, Next.js, and Python.",
    link: "#",
  },
  {
    icon: Smartphone,
    title: "AI & GenAI Solutions",
    description: "Creating intelligent chatbots, RAG systems, and generative AI applications for seamless user experiences.",
    link: "#",
  },
  {
    icon: Zap,
    title: "Optimized Performance",
    description: "Ensuring fast, secure, and efficient code for smooth functionality across web and data applications.",
    link: "#",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhatIBuild = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title text-gradient-primary">What I Can Build</h2>
          <p className="section-subtitle">Scalable apps, sleek UI, and performant code.</p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.a
              key={service.title}
              href={service.link}
              variants={itemVariants}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 card-hover block"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-muted/50 flex items-center justify-center mb-5 group-hover:bg-primary/10 transition-colors">
                <service.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIBuild;
