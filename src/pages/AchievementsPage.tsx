import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Trophy, Award, Code, Rocket, GraduationCap, Users, 
  ArrowLeft, Star, Zap, Target, Medal, Crown
} from "lucide-react";
import { Button } from "@/components/ui/button";

const awardsData = [
  {
    title: "Stanford Code-In-Place Selection",
    description: "Selected as Student for Code-In-Place program at Stanford University",
    icon: GraduationCap,
    color: "from-red-500 to-orange-500",
  },
  {
    title: "Judge & Subject Matter Expert Lead",
    description: "Supervised a team of 15 staff members. Evaluated projects of 150+ teams",
    icon: Crown,
    color: "from-yellow-500 to-amber-500",
  },
];

const competitiveProgramming = [
  { name: "MIT Informatics Tournament", institution: "Massachusetts Institute of Technology", icon: "🏛️" },
  { name: "Calico Summer Competition", institution: "UC Berkeley", icon: "🐻" },
  { name: "Harvard CS50x Puzzle Day", institution: "Harvard University (2x)", icon: "📚" },
  { name: "Meta Hacker Cup", institution: "Meta (2x)", icon: "💻" },
  { name: "Advent Of Code", institution: "Global Competition", icon: "🎄" },
  { name: "Code Sprint LA", institution: "Los Angeles", icon: "🌴" },
];

const hackathons = [
  { name: "National WordPress Hackathon", result: "Winner 🏆", highlight: true },
  { name: "National Hackathon", result: "Top 10 Teams", highlight: true },
  { name: "Shell.ai Hackathon", result: "Participant", highlight: false },
  { name: "NASA Space Apps Hackathon", result: "Participant", highlight: false },
  { name: "Intel Hackathon", result: "5x Participant", highlight: false },
  { name: "International Hackathons", result: "10+ Attended", highlight: false },
];

const stats = [
  { value: "10+", label: "Hackathons", icon: Rocket },
  { value: "6", label: "Elite Competitions", icon: Code },
  { value: "150+", label: "Teams Evaluated", icon: Users },
  { value: "5", label: "Top Universities", icon: GraduationCap },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AchievementsPage = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_hsl(220_100%_57%_/_0.15)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_hsl(186_100%_50%_/_0.1)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center_left,_hsl(280_100%_50%_/_0.08)_0%,_transparent_40%)]" />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight 
            }}
            animate={{ 
              y: [null, Math.random() * -500],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{ 
              duration: 5 + Math.random() * 10, 
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/">
              <Button variant="ghost" className="mb-8 group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Home
              </Button>
            </Link>
          </motion.div>

          {/* Hero header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary/10 border border-primary/20"
            >
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Recognition & Awards</span>
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Achievements &</span>
              <br />
              <span className="text-gradient-primary">Milestones</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Competing globally, building locally, and making an impact everywhere
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-card/50 border border-border/50 rounded-2xl p-6 text-center backdrop-blur-sm hover:border-primary/30 transition-all duration-300"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                </motion.div>
                <div className="text-3xl font-bold mb-1 text-gradient-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Awards Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-500 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Awards & Recognition</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {awardsData.map((award, index) => (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative overflow-hidden bg-card/50 border border-border/50 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${award.color} opacity-10 blur-2xl`} />
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${award.color} flex items-center justify-center mb-4`}>
                      <award.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{award.title}</h3>
                    <p className="text-muted-foreground">{award.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Competitive Programming Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Competitive Programming</h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {competitiveProgramming.map((comp, index) => (
                <motion.div
                  key={comp.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="bg-card/50 border border-border/50 rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-3xl">{comp.icon}</span>
                    <div>
                      <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{comp.name}</h3>
                      <p className="text-sm text-muted-foreground">{comp.institution}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Hackathons Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold">Hackathons</h2>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-4"
            >
              {hackathons.map((hackathon, index) => (
                <motion.div
                  key={hackathon.name}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className={`flex items-center justify-between p-5 rounded-xl border transition-all duration-300 ${
                    hackathon.highlight 
                      ? "bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 hover:border-primary/50" 
                      : "bg-card/50 border-border/50 hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    {hackathon.highlight ? (
                      <Trophy className="w-6 h-6 text-yellow-500" />
                    ) : (
                      <Target className="w-6 h-6 text-muted-foreground" />
                    )}
                    <span className={`font-medium ${hackathon.highlight ? "text-foreground" : "text-muted-foreground"}`}>
                      {hackathon.name}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    hackathon.highlight 
                      ? "bg-primary/20 text-primary" 
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {hackathon.result}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Call to action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border border-primary/20 rounded-3xl p-12">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Want to collaborate?
              </h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                I'm always looking for new challenges and opportunities to grow. Let's build something amazing together!
              </p>
              <Link to="/#contact">
                <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl px-8">
                  Get in Touch
                  <Zap className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AchievementsPage;
