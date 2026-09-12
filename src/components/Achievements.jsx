import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Sparkles, Cpu, Cloud, Globe } from 'lucide-react';
import TiltCard from './TiltCard';

const achievements = [
  {
    id: 1,
    title: 'Rank 1 Winner - Code Clash Web Battle 🏆🥇',
    organization: 'Sheryians Coding School',
    period: '2025',
    category: 'Hackathon / Competition',
    icon: Trophy,
    color: '#FFD700',
    description: 'Secured 1st Rank out of top web developers in a high-speed live coding battle. Outperformed competitors with clean code, modern UI/UX practices, speed, and creative frontend design.',
    badge: '1st Place Winner',
  },
  {
    id: 2,
    title: 'Google × Kaggle: 5 Days to AI Agents Intensive 🎓',
    organization: 'Google & Kaggle',
    period: '2025',
    category: 'AI Certification',
    icon: Cpu,
    color: '#14CF93',
    description: 'Certified in Agentic AI systems, goal-driven autonomous agents, LLM memory, tools, planning, and Python implementation for intelligent automated workflows.',
    badge: 'Certified',
  },
  {
    id: 3,
    title: 'DAWN OF CODE Hackathon 2025 🎯',
    organization: 'MERN Stack Tech Club, VIT Bhopal University',
    period: '2025',
    category: 'Hackathon',
    icon: Award,
    color: '#00F59B',
    description: 'Successfully competed in a full-stack MERN hackathon building high-impact tech solutions under strict time constraints.',
    badge: 'Participant',
  },
  {
    id: 4,
    title: 'Google Cloud Study Jam & Generative AI ☁️',
    organization: 'Google Developer Groups (GDG Campus)',
    period: '2025',
    category: 'Cloud & AI',
    icon: Cloud,
    color: '#4285F4',
    description: 'Completed intensive hands-on track in Google Cloud Platform infrastructure and Generative AI models. Awarded Certificate of Appreciation.',
    badge: 'GDG Recognized',
  },
  {
    id: 5,
    title: 'GSSoC \'25 Campus Ambassador 🚀',
    organization: 'GirlScript Summer of Code',
    period: 'Jul 2025 – Aug 2025',
    category: 'Open Source Leadership',
    icon: Globe,
    color: '#FF7A00',
    description: 'Selected as Campus Ambassador to promote open-source culture, mentor peers in Git & GitHub, and foster open-source contributions.',
    badge: 'Ambassador',
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="relative py-28 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-2"
      >
        <p className="text-[#14CF93] text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span>Honors, Competitions & Certifications</span>
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Achievements & Awards<span className="text-[#14CF93] font-black">.</span>
        </h2>
      </motion.div>

      {/* Grid of Achievements */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
        {achievements.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TiltCard className="p-8 h-full flex flex-col justify-between space-y-6 group border-t-4 border-t-[#14CF93]">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-[#14CF93]/10 text-[#14CF93] group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-white/5 border border-white/10 text-[#14CF93]">
                      {item.badge}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-gray-400 font-mono block">{item.category} • {item.period}</span>
                    <h3 className="text-xl font-bold text-white tracking-wide mt-1 group-hover:text-[#14CF93] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#14CF93] mt-0.5">{item.organization}</p>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-mono">
                  <span>Verified Recognition</span>
                  <span className="text-[#14CF93]">★ Verified</span>
                </div>
              </TiltCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Achievements;
