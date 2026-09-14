import React from 'react';
import { motion } from 'framer-motion';
import { Github, GitCommit, GitPullRequest, Flame, Sparkles, ExternalLink } from 'lucide-react';
import TiltCard from './TiltCard';

const GitHubHeatmap = () => {
  // Generate visual contribution matrix representing 218+ contributions
  const weeks = 24;
  const daysPerWeek = 7;
  
  const generateContributionLevel = (weekIndex, dayIndex) => {
    const seed = (weekIndex * 7 + dayIndex * 13) % 100;
    if (seed > 75) return 'bg-[#14CF93] shadow-[0_0_8px_#14CF93]'; // High
    if (seed > 50) return 'bg-[#14CF93]/70'; // Medium
    if (seed > 25) return 'bg-[#14CF93]/35'; // Low
    return 'bg-white/5'; // None
  };

  return (
    <section id="github-activity" className="relative py-16 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <TiltCard className="p-5 sm:p-8 md:p-10 border-t-4 border-t-[#14CF93] space-y-6">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="flex items-center gap-3">
              <div className="p-2.5 sm:p-3 rounded-2xl bg-[#14CF93]/10 text-[#14CF93] shrink-0">
                <Github className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                  <span>Open Source & GitHub</span>
                  <Sparkles className="w-4 h-4 text-[#14CF93] shrink-0" />
                </h3>
                <span className="text-[11px] sm:text-xs text-gray-400 font-mono">
                  @Neetesh26 • Continuous Integration & Daily Commits
                </span>
              </div>
            </div>

            <a
              href="https://github.com/Neetesh26"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#14CF93]/10 border border-[#14CF93]/30 text-[#14CF93] font-bold text-xs hover:bg-[#14CF93] hover:text-black transition-all flex items-center gap-2 self-start sm:self-center shrink-0"
            >
              <span>View GitHub Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 pt-2">
            <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-2.5 sm:gap-3">
              <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-[#14CF93] shrink-0" />
              <div className="min-w-0">
                <div className="text-lg sm:text-xl font-extrabold text-white truncate">218+</div>
                <div className="text-[10px] sm:text-[11px] text-gray-400 font-mono truncate">2025 Contributions</div>
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-2.5 sm:gap-3">
              <GitCommit className="w-5 h-5 sm:w-6 sm:h-6 text-[#00F59B] shrink-0" />
              <div className="min-w-0">
                <div className="text-lg sm:text-xl font-extrabold text-white truncate">100%</div>
                <div className="text-[10px] sm:text-[11px] text-gray-400 font-mono truncate">Consistent Pushes</div>
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-2.5 sm:gap-3">
              <GitPullRequest className="w-5 h-5 sm:w-6 sm:h-6 text-[#14CF93] shrink-0" />
              <div className="min-w-0">
                <div className="text-lg sm:text-xl font-extrabold text-white truncate">GSSoC '25</div>
                <div className="text-[10px] sm:text-[11px] text-gray-400 font-mono truncate">Campus Ambassador</div>
              </div>
            </div>

            <div className="p-3 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/5 flex items-center gap-2.5 sm:gap-3">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-[#00F59B] shrink-0" />
              <div className="min-w-0">
                <div className="text-lg sm:text-xl font-extrabold text-white truncate">Rank 1 🏆</div>
                <div className="text-[10px] sm:text-[11px] text-gray-400 font-mono truncate">Web Battle Winner</div>
              </div>
            </div>
          </div>

          {/* Animated Contribution Heatmap */}
          <div className="space-y-2 pt-4">
            <div className="flex justify-between items-center text-xs font-mono text-gray-400">
              <span>Contribution Activity Heatmap</span>
              <div className="flex items-center gap-1.5 text-[11px]">
                <span>Less</span>
                <span className="w-2.5 h-2.5 rounded-xs bg-white/5" />
                <span className="w-2.5 h-2.5 rounded-xs bg-[#14CF93]/35" />
                <span className="w-2.5 h-2.5 rounded-xs bg-[#14CF93]/70" />
                <span className="w-2.5 h-2.5 rounded-xs bg-[#14CF93]" />
                <span>More</span>
              </div>
            </div>

            {/* Matrix Grid */}
            <div className="overflow-x-auto pb-2">
              <div className="flex gap-1.5 min-w-[650px] p-2 bg-white/[0.01] rounded-2xl border border-white/5">
                {Array.from({ length: weeks }).map((_, wIdx) => (
                  <div key={wIdx} className="flex flex-col gap-1.5 flex-1">
                    {Array.from({ length: daysPerWeek }).map((_, dIdx) => (
                      <div
                        key={dIdx}
                        className={`h-3 rounded-xs transition-transform hover:scale-125 ${generateContributionLevel(wIdx, dIdx)}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </TiltCard>
      </motion.div>
    </section>
  );
};

export default GitHubHeatmap;
