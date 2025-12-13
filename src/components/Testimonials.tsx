import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Safwan's AI solutions transformed our workflow. His chatbot implementation reduced our response time by 80% and improved customer satisfaction dramatically.",
    author: "Ahmad Hassan",
    role: "Tech Lead",
    company: "FinTech Startup",
  },
  {
    quote: "Exceptional talent in ML and full-stack development. Safwan delivered a complex data pipeline on time and exceeded all expectations.",
    author: "Sarah Chen",
    role: "Product Manager",
    company: "AI Research Lab",
  },
  {
    quote: "Working with Safwan on the hackathon was incredible. His problem-solving skills and technical expertise are outstanding.",
    author: "Muhammad Ali",
    role: "Fellow Developer",
    company: "Shell.ai Hackathon Team",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(186_100%_50%_/_0.05)_0%,_transparent_70%)]" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-secondary bg-secondary/10 rounded-full border border-secondary/20">
            Social Proof
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            What mentors and collaborators say about working with me
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="glass-card rounded-2xl p-8 flex flex-col hover:border-secondary/30 transition-all duration-500 group card-hover"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="h-10 w-10 text-secondary/50 group-hover:text-secondary transition-colors" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-muted-foreground leading-relaxed mb-8 flex-grow italic">
                "{testimonial.quote}"
              </p>

              {/* Author info */}
              <div className="border-t border-border/50 pt-6">
                <div className="font-semibold group-hover:text-secondary transition-colors">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
