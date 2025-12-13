import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ContributionDay {
  date: string;
  count: number;
  level: number; // 0-4
}

interface ContributionWeek {
  days: ContributionDay[];
}

const GitHubContributions = ({ username }: { username: string }) => {
  const [contributions, setContributions] = useState<ContributionWeek[]>([]);
  const [totalContributions, setTotalContributions] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Generate mock contribution data for the last year
    // In production, you'd fetch this from GitHub's API or a service like github-contributions-api
    const generateMockContributions = () => {
      const weeks: ContributionWeek[] = [];
      const today = new Date();
      let total = 0;
      
      // Generate 52 weeks of data
      for (let week = 51; week >= 0; week--) {
        const days: ContributionDay[] = [];
        for (let day = 0; day < 7; day++) {
          const date = new Date(today);
          date.setDate(date.getDate() - (week * 7 + (6 - day)));
          
          // Random contribution count with some patterns
          const isWeekday = day > 0 && day < 6;
          const baseChance = isWeekday ? 0.6 : 0.3;
          const hasContribution = Math.random() < baseChance;
          const count = hasContribution ? Math.floor(Math.random() * 10) + 1 : 0;
          
          let level = 0;
          if (count > 0) level = 1;
          if (count > 3) level = 2;
          if (count > 6) level = 3;
          if (count > 9) level = 4;
          
          total += count;
          
          days.push({
            date: date.toISOString().split('T')[0],
            count,
            level,
          });
        }
        weeks.push({ days });
      }
      
      setContributions(weeks);
      setTotalContributions(total);
      setIsLoading(false);
    };

    generateMockContributions();
  }, [username]);

  const getLevelColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-muted/30';
      case 1: return 'bg-secondary/30';
      case 2: return 'bg-secondary/50';
      case 3: return 'bg-secondary/70';
      case 4: return 'bg-secondary';
      default: return 'bg-muted/30';
    }
  };

  const months = ['Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'];
  const days = ['Mon', 'Wed', 'Fri'];

  if (isLoading) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <div className="animate-pulse bg-muted/20 rounded-lg h-32" />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full"
    >
      {/* Header */}
      <div className="mb-6">
        <h2 className="section-title text-gradient-primary">Contribution Graph</h2>
        <p className="section-subtitle">Proof I exist — at least on GitHub.</p>
      </div>

      {/* Graph container */}
      <div className="overflow-x-auto pb-4">
        <div className="min-w-[720px]">
          {/* Month labels */}
          <div className="flex mb-2 ml-8">
            {months.map((month, i) => (
              <span 
                key={month + i} 
                className="text-xs text-muted-foreground flex-1 text-center"
              >
                {month}
              </span>
            ))}
          </div>

          {/* Graph grid */}
          <div className="flex gap-1">
            {/* Day labels */}
            <div className="flex flex-col gap-1 pr-2">
              {['', 'Mon', '', 'Wed', '', 'Fri', ''].map((day, i) => (
                <span 
                  key={i} 
                  className="text-xs text-muted-foreground h-3 leading-3"
                >
                  {day}
                </span>
              ))}
            </div>

            {/* Contribution squares */}
            <div className="flex gap-[3px]">
              {contributions.map((week, weekIndex) => (
                <div key={weekIndex} className="flex flex-col gap-[3px]">
                  {week.days.map((day, dayIndex) => (
                    <motion.div
                      key={day.date}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.2, 
                        delay: (weekIndex * 7 + dayIndex) * 0.001 
                      }}
                      className={`w-3 h-3 rounded-sm ${getLevelColor(day.level)} hover:ring-1 hover:ring-primary/50 transition-all cursor-pointer`}
                      title={`${day.count} contributions on ${day.date}`}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
            <span>{totalContributions} contributions in the last year</span>
            <div className="flex items-center gap-2">
              <span>Less</span>
              <div className="flex gap-1">
                {[0, 1, 2, 3, 4].map((level) => (
                  <div 
                    key={level} 
                    className={`w-3 h-3 rounded-sm ${getLevelColor(level)}`} 
                  />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GitHubContributions;
