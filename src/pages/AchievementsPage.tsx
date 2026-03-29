import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Trophy, Award, Code, Rocket, GraduationCap, Users, ArrowLeft, Zap, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Competition {
  title: string;
  placement: string;
  year: string;
  description: string;
  badges: string[];
  link?: string;
}

const hackathons: Competition[] = [
  { title: "National WordPress Hackathon", placement: "Winner", year: "2024", description: "Won the national WordPress hackathon competing against teams from across the country.", badges: ["1st Place", "National"], link: "https://github.com/safwanahmadsaffi" },
  { title: "National Hackathon", placement: "Top 10 Teams", year: "2024", description: "Secured position among the top 10 teams in a national-level hackathon.", badges: ["Top 10", "National"], link: "https://github.com/safwanahmadsaffi" },
  { title: "Shell.ai Hackathon 2025", placement: "Participant", year: "2025", description: "Predicted fuel blend properties from input features. Optimized sustainable aviation fuel.", badges: ["International", "AI/ML"], link: "https://github.com/safwanahmadsaffi/Shell.ai-Hackathon-2025" },
  { title: "NASA Space Apps Hackathon", placement: "Participant", year: "2024", description: "World's largest annual hackathon — developed solutions for space-related challenges.", badges: ["International", "Space Tech"], link: "https://www.spaceappschallenge.org/" },
  { title: "Intel Hackathons", placement: "5x Participant", year: "2023-2024", description: "Five Intel-sponsored hackathons, building AI and hardware-integrated solutions.", badges: ["5x", "Intel"], link: "https://www.intel.com/content/www/us/en/developer/tools/oneapi/hackathons.html" },
  { title: "Google Solution Challenge", placement: "Participant", year: "2024", description: "Developed a solution addressing UN Sustainable Development Goals using Google technologies.", badges: ["Google", "SDGs"], link: "https://developers.google.com/community/gdsc-solution-challenge" },
  { title: "MLH Global Hack Week", placement: "Participant", year: "2024", description: "Completed challenges across web dev, AI, and open source.", badges: ["MLH", "Global"], link: "https://ghw.mlh.io/" },
  { title: "10+ International Hackathons", placement: "Active Participant", year: "2023-2025", description: "Competed in over 10 international hackathons across AI, web development, and data science.", badges: ["10+", "International"] },
];

const competitiveProgramming: Competition[] = [
  { title: "MIT Informatics Tournament", placement: "Competitor", year: "2024", description: "Tackled advanced algorithmic challenges at MIT.", badges: ["MIT", "Algorithms"], link: "https://mitit.org/" },
  { title: "Calico Summer Competition", placement: "Competitor", year: "2024", description: "UC Berkeley's programming competition — complex computational problems.", badges: ["UC Berkeley", "CP"], link: "https://calico.cs.berkeley.edu/" },
  { title: "Harvard CS50x Puzzle Day", placement: "2x Participant", year: "2023-2024", description: "Solved creative logic and computational puzzles.", badges: ["Harvard", "2x"], link: "https://cs50.harvard.edu/x/" },
  { title: "Meta Hacker Cup", placement: "2x Participant", year: "2023-2024", description: "Meta's global algorithmic programming competition.", badges: ["Meta", "2x"], link: "https://www.facebook.com/codingcompetitions/hacker-cup" },
  { title: "Advent of Code", placement: "Participant", year: "2024", description: "Daily algorithmic challenges.", badges: ["Global", "Daily"], link: "https://adventofcode.com/" },
  { title: "LeetCode Contests", placement: "Regular Participant", year: "2023-2025", description: "Weekly and biweekly algorithmic contests.", badges: ["LeetCode", "Weekly"], link: "https://leetcode.com/safwanahmadsaffi/" },
  { title: "Codeforces Rounds", placement: "Participant", year: "2024", description: "Competitive programming rounds for algorithmic problem-solving.", badges: ["Codeforces", "CP"], link: "https://codeforces.com/" },
];

const recognition: Competition[] = [
  { title: "Stanford Code-In-Place", placement: "Selected Student", year: "2024", description: "Selected for Stanford's prestigious coding program.", badges: ["Stanford", "Selected"], link: "https://codeinplace.stanford.edu/" },
  { title: "Judge & SME Lead", placement: "Leadership Role", year: "2024", description: "Supervised 15 staff members and evaluated 150+ teams.", badges: ["15 Staff", "150+ Teams"] },
  { title: "GitHub Developer Program", placement: "Member", year: "2024", description: "Contributing to open-source and developer tools.", badges: ["GitHub", "Developer"], link: "https://docs.github.com/en/developers" },
  { title: "GitHub Pro Member", placement: "Pro Status", year: "2024", description: "Pro membership for active open-source contributions.", badges: ["GitHub", "Pro"], link: "https://github.com/safwanahmadsaffi" },
  { title: "Hacktoberfest Contributor", placement: "Completed", year: "2023-2024", description: "Contributed to multiple open-source repositories.", badges: ["Open Source", "2x"], link: "https://hacktoberfest.com/" },
  { title: "Google Cloud Skills Boost", placement: "Certified", year: "2024", description: "Completed learning paths and earned skill badges in cloud and AI/ML.", badges: ["Google Cloud", "Certified"], link: "https://www.cloudskillsboost.google/" },
];

const stats = [
  { value: "15+", label: "Hackathons", icon: Rocket },
  { value: "8+", label: "Competitions", icon: Code },
  { value: "150+", label: "Teams Evaluated", icon: Users },
  { value: "5", label: "Top Universities", icon: GraduationCap },
];

const CompetitionCard = ({ competition }: { competition: Competition }) => {
  const isHighlight = /winner|selected|completed|certified/i.test(competition.placement);

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-xl p-5 hover:border-primary/20 transition-all duration-300 group"
    >
      <div className="flex items-start justify-between mb-1">
        <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">{competition.title}</h3>
        <span className="text-xs text-muted-foreground ml-4 flex-shrink-0">{competition.year}</span>
      </div>
      <p className={`text-xs font-semibold mb-2 ${isHighlight ? "text-yellow-400/90" : "text-primary/70"}`}>{competition.placement}</p>
      <p className="text-sm text-muted-foreground leading-relaxed mb-3">{competition.description}</p>
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-1.5">
          {competition.badges.map((badge) => (
            <span key={badge} className={`px-2.5 py-0.5 text-[11px] font-medium rounded-full ${
              /1st|Winner|Selected/.test(badge) ? "bg-yellow-400/10 text-yellow-400/80 border border-yellow-400/20" : "glass text-muted-foreground"
            }`}>{badge}</span>
          ))}
        </div>
        {competition.link && (
          <a href={competition.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const SectionBlock = ({ icon: Icon, title, items, count }: { icon: React.ElementType; title: string; items: Competition[]; count: number }) => (
  <section className="mb-14">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-8 rounded-lg glass flex items-center justify-center">
        <Icon className="w-4 h-4 text-primary" />
      </div>
      <h2 className="text-lg font-semibold">{title}</h2>
      <span className="text-xs text-muted-foreground ml-auto">{count}</span>
    </div>
    <div className="space-y-3">
      {items.map((comp) => <CompetitionCard key={comp.title} competition={comp} />)}
    </div>
  </section>
);

const AchievementsPage = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Subtle ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-primary/[0.05] blur-[120px]" />
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          {/* Back */}
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }}>
            <Link to="/">
              <Button variant="ghost" size="sm" className="mb-10 group text-muted-foreground">
                <ArrowLeft className="mr-2 h-3.5 w-3.5 group-hover:-translate-x-1 transition-transform" />
                Back
              </Button>
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-14">
            <h1 className="text-3xl sm:text-4xl font-semibold mb-3">
              <span className="text-foreground">Competitions & </span>
              <span className="text-gradient-primary">Awards</span>
            </h1>
            <p className="text-sm text-muted-foreground">Hackathons, competitive programming, and professional recognition</p>
          </motion.div>

          {/* Stats */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14">
            {stats.map((s) => (
              <div key={s.label} className="glass-card rounded-xl p-4 text-center">
                <s.icon className="w-4 h-4 mx-auto mb-2 text-primary/70" />
                <div className="text-xl font-bold text-gradient-primary">{s.value}</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">{s.label}</div>
              </div>
            ))}
          </motion.div>

          <SectionBlock icon={Trophy} title="Hackathons" items={hackathons} count={hackathons.length} />
          <SectionBlock icon={Code} title="Competitive Programming" items={competitiveProgramming} count={competitiveProgramming.length} />
          <SectionBlock icon={Award} title="Recognition & Awards" items={recognition} count={recognition.length} />

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <div className="glass-card rounded-xl p-10">
              <h3 className="text-xl font-semibold mb-3">Want to collaborate?</h3>
              <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
                I'm always looking for new challenges. Let's build something together.
              </p>
              <Link to="/#contact">
                <Button size="lg" className="rounded-full px-7 bg-primary hover:bg-primary/90 text-primary-foreground text-sm">
                  Get in Touch
                  <Zap className="ml-2 h-4 w-4" />
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
