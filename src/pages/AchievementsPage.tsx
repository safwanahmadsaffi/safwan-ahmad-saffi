import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Trophy, Award, Code, Rocket, GraduationCap, Users,
  ArrowLeft, Zap, ExternalLink, Globe, Star
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Competition {
  title: string;
  placement: string;
  year: string;
  description: string;
  badges: string[];
  link?: string;
}

const competitions: Competition[] = [
  {
    title: "National WordPress Hackathon",
    placement: "Winner",
    year: "2024",
    description: "Won the national WordPress hackathon competing against teams from across the country with an innovative web solution.",
    badges: ["1st Place", "National"],
    link: "https://github.com/safwanahmadsaffi",
  },
  {
    title: "National Hackathon",
    placement: "Top 10 Teams",
    year: "2024",
    description: "Secured position among the top 10 teams in a national-level hackathon, demonstrating strong problem-solving skills.",
    badges: ["Top 10", "National"],
    link: "https://github.com/safwanahmadsaffi",
  },
  {
    title: "Shell.ai Hackathon 2025",
    placement: "Participant",
    year: "2025",
    description: "Addressed Shell.ai challenge to predict fuel blend properties from input features. Optimized sustainable aviation fuel through mathematical models.",
    badges: ["International", "AI/ML"],
    link: "https://github.com/safwanahmadsaffi/Shell.ai-Hackathon-2025",
  },
  {
    title: "NASA Space Apps Hackathon",
    placement: "Participant",
    year: "2024",
    description: "Participated in the world's largest annual hackathon, developing innovative solutions for space-related challenges.",
    badges: ["International", "Space Tech"],
    link: "https://www.spaceappschallenge.org/",
  },
  {
    title: "Intel Hackathons",
    placement: "5x Participant",
    year: "2023-2024",
    description: "Participated in five Intel-sponsored hackathons, building AI and hardware-integrated solutions using Intel oneAPI toolkit.",
    badges: ["5x", "Intel"],
    link: "https://www.intel.com/content/www/us/en/developer/tools/oneapi/hackathons.html",
  },
  {
    title: "Google Solution Challenge",
    placement: "Participant",
    year: "2024",
    description: "Developed a solution addressing UN Sustainable Development Goals using Google technologies as part of GDSC.",
    badges: ["Google", "SDGs"],
    link: "https://developers.google.com/community/gdsc-solution-challenge",
  },
  {
    title: "10+ International Hackathons",
    placement: "Active Participant",
    year: "2023-2025",
    description: "Competed in over 10 international hackathons across various domains including AI, web development, and data science.",
    badges: ["10+", "International"],
  },
  {
    title: "MLH Global Hack Week",
    placement: "Participant",
    year: "2024",
    description: "Participated in Major League Hacking's Global Hack Week, completing challenges across web dev, AI, and open source.",
    badges: ["MLH", "Global"],
    link: "https://ghw.mlh.io/",
  },
];

const competitiveProgramming: Competition[] = [
  {
    title: "MIT Informatics Tournament",
    placement: "Competitor",
    year: "2024",
    description: "Competed in the prestigious MIT Informatics Tournament, tackling advanced algorithmic challenges.",
    badges: ["MIT", "Algorithms"],
    link: "https://mitit.org/",
  },
  {
    title: "Calico Summer Competition",
    placement: "Competitor",
    year: "2024",
    description: "Participated in UC Berkeley's Calico programming competition solving complex computational problems.",
    badges: ["UC Berkeley", "CP"],
    link: "https://calico.cs.berkeley.edu/",
  },
  {
    title: "Harvard CS50x Puzzle Day",
    placement: "2x Participant",
    year: "2023-2024",
    description: "Participated twice in Harvard's CS50x Puzzle Day, solving creative logic and computational puzzles.",
    badges: ["Harvard", "2x"],
    link: "https://cs50.harvard.edu/x/",
  },
  {
    title: "Meta Hacker Cup",
    placement: "2x Participant",
    year: "2023-2024",
    description: "Competed twice in Meta's global algorithmic programming competition against thousands of coders worldwide.",
    badges: ["Meta", "2x"],
    link: "https://www.facebook.com/codingcompetitions/hacker-cup",
  },
  {
    title: "Advent of Code",
    placement: "Participant",
    year: "2024",
    description: "Completed daily algorithmic challenges during the annual Advent of Code competition.",
    badges: ["Global", "Daily"],
    link: "https://adventofcode.com/",
  },
  {
    title: "Code Sprint LA",
    placement: "Participant",
    year: "2024",
    description: "Competed in the Code Sprint LA competitive programming event.",
    badges: ["Los Angeles", "Sprint"],
  },
  {
    title: "LeetCode Contests",
    placement: "Regular Participant",
    year: "2023-2025",
    description: "Regularly compete in LeetCode weekly and biweekly contests, solving algorithmic and data structure problems.",
    badges: ["LeetCode", "Weekly"],
    link: "https://leetcode.com/safwanahmadsaffi/",
  },
  {
    title: "Codeforces Rounds",
    placement: "Participant",
    year: "2024",
    description: "Participated in Codeforces competitive programming rounds, improving problem-solving and algorithmic skills.",
    badges: ["Codeforces", "CP"],
    link: "https://codeforces.com/",
  },
];

const awards: Competition[] = [
  {
    title: "Stanford Code-In-Place",
    placement: "Selected Student",
    year: "2024",
    description: "Selected as a student for Code-In-Place program at Stanford University, one of the most prestigious coding programs globally.",
    badges: ["Stanford", "Selected"],
    link: "https://codeinplace.stanford.edu/",
  },
  {
    title: "Judge & Subject Matter Expert Lead",
    placement: "Leadership Role",
    year: "2024",
    description: "Supervised a team of 15 staff members and evaluated projects of 150+ teams across multiple hackathons.",
    badges: ["15 Staff", "150+ Teams"],
  },
  {
    title: "GitHub Developer Program Member",
    placement: "Member",
    year: "2024",
    description: "Accepted into the GitHub Developer Program, contributing to open-source and developer tools.",
    badges: ["GitHub", "Developer"],
    link: "https://docs.github.com/en/developers",
  },
  {
    title: "GitHub Pro Member",
    placement: "Pro Status",
    year: "2024",
    description: "Achieved GitHub Pro membership status for active open-source contributions.",
    badges: ["GitHub", "Pro"],
    link: "https://github.com/safwanahmadsaffi",
  },
  {
    title: "Hacktoberfest Contributor",
    placement: "Completed",
    year: "2023-2024",
    description: "Successfully completed Hacktoberfest by contributing to multiple open-source repositories during October.",
    badges: ["Open Source", "2x"],
    link: "https://hacktoberfest.com/",
  },
  {
    title: "Google Cloud Skills Boost",
    placement: "Certified",
    year: "2024",
    description: "Completed Google Cloud learning paths and earned skill badges in cloud computing and AI/ML.",
    badges: ["Google Cloud", "Certified"],
    link: "https://www.cloudskillsboost.google/",
  },
];

const stats = [
  { value: "15+", label: "Hackathons", icon: Rocket },
  { value: "8+", label: "Elite Competitions", icon: Code },
  { value: "150+", label: "Teams Evaluated", icon: Users },
  { value: "5", label: "Top Universities", icon: GraduationCap },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CompetitionCard = ({ competition }: { competition: Competition }) => {
  const isWinner = competition.placement.toLowerCase().includes("winner") ||
    competition.placement.toLowerCase().includes("1st") ||
    competition.placement.toLowerCase().includes("selected") ||
    competition.placement.toLowerCase().includes("completed") ||
    competition.placement.toLowerCase().includes("certified");

  return (
    <motion.div
      variants={itemVariants}
      className="bg-card/40 border border-border/40 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 backdrop-blur-sm group"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-start justify-between mb-1">
            <h3 className="text-base font-semibold group-hover:text-primary transition-colors">
              {competition.title}
            </h3>
            <span className="text-sm text-muted-foreground flex-shrink-0 ml-4">
              {competition.year}
            </span>
          </div>

          <p className={`text-sm font-semibold mb-3 ${isWinner ? "text-yellow-400" : "text-secondary"}`}>
            {competition.placement}
          </p>

          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {competition.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {competition.badges.map((badge) => (
                <span
                  key={badge}
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    badge.includes("1st") || badge.includes("Winner") || badge.includes("Selected")
                      ? "bg-yellow-400/15 text-yellow-400 border border-yellow-400/30"
                      : "bg-muted/50 text-muted-foreground border border-border/50"
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>

            {competition.link && (
              <a
                href={competition.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AchievementsPage = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_hsl(260_80%_50%_/_0.15)_0%,_transparent_70%)] blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,_hsl(220_100%_57%_/_0.1)_0%,_transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-4xl mx-auto">
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

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-foreground">Competitions & </span>
              <span className="text-gradient-primary">Awards</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My prized achievements through various hackathons, competitive programming, and professional recognition
            </p>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="bg-card/40 border border-border/40 rounded-2xl p-5 text-center backdrop-blur-sm"
              >
                <stat.icon className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold mb-1 text-gradient-primary">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Hackathons Section */}
          <SectionBlock icon={Trophy} title="Hackathons" items={competitions} iconColor="text-primary" bgColor="bg-primary/10" />

          {/* Competitive Programming Section */}
          <SectionBlock icon={Code} title="Competitive Programming" items={competitiveProgramming} iconColor="text-secondary" bgColor="bg-secondary/10" />

          {/* Recognition Section */}
          <SectionBlock icon={Award} title="Recognition & Awards" items={awards} iconColor="text-accent" bgColor="bg-accent/10" />

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="bg-card/40 border border-border/40 rounded-2xl p-12 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-4">Want to collaborate?</h3>
              <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                I'm always looking for new challenges and opportunities. Let's build something amazing together!
              </p>
              <Link to="/#contact">
                <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8">
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

const SectionBlock = ({ icon: Icon, title, items, iconColor, bgColor }: {
  icon: React.ElementType;
  title: string;
  items: Competition[];
  iconColor: string;
  bgColor: string;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="mb-16"
  >
    <div className="flex items-center gap-3 mb-8">
      <div className={`w-10 h-10 rounded-xl ${bgColor} flex items-center justify-center`}>
        <Icon className={`w-5 h-5 ${iconColor}`} />
      </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <span className="text-sm text-muted-foreground ml-auto">{items.length} entries</span>
    </div>

    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="space-y-4"
    >
      {items.map((comp) => (
        <CompetitionCard key={comp.title} competition={comp} />
      ))}
    </motion.div>
  </motion.section>
);

export default AchievementsPage;
