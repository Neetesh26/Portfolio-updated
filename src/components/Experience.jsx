import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowDown, Code, Server, Cloud, Cpu, Database } from 'lucide-react';
import TiltCard from './TiltCard';

const workExperiences = [
  {
    company: 'VidyaGxP',
    location: 'Indore, Madhya Pradesh',
    role: 'Full Stack Developer',
    period: 'July 2026 – Present',
    type: 'Full-Time',
    bulletPoints: [
      'Develop and optimize responsive user interfaces using React.js, building reusable components and functional workflows for an enterprise Electronic Quality Management System (eQMS) platform across 5+ core modules.',
      'Built and implemented frontend functionalities for user management, role-based access control (RBAC), department management, and admin dashboard modules, integrating REST APIs with the UI.',
      'Optimized frontend code and component structure to improve maintainability, performance, and consistency across the application while troubleshooting and resolving functional issues.',
    ],
  },
  {
    company: 'Brain Inventory',
    location: 'Indore, Madhya Pradesh',
    role: 'Software Developer Intern',
    period: 'February 2026 – May 2026',
    type: 'Internship',
    bulletPoints: [
      'Worked on backend development using Node.js and Express.js, following standardized coding practices and system configuration procedures to keep codebase clean across AWS EC2 deployments.',
      'Assisted in REST API development and testing, including Redis caching that improved response times for frequently used endpoints by up to 35%.',
      'Supported system upgrades, patch releases, and issue resolution across 10+ tickets; maintained configuration logs and API documentation.',
      'Collaborated on CI/CD pipelines using GitHub Actions, and containerized 3+ services with Docker to support smoother deployments.',
    ],
  },
  {
    company: 'InternPluss',
    location: 'Remote',
    role: 'Frontend Developer Intern',
    period: 'July 2024 – September 2024',
    type: 'Internship',
    bulletPoints: [
      'Built responsive user interfaces using HTML, CSS, and JavaScript across 3+ web applications, improving user experience by 20% and reducing defects by 25%.',
      'Resolved frontend issues in a timely manner, prepared status reports, and applied SEO best practices that increased organic website traffic by 15%.',
    ],
  },
];

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code,
    skills: ['JavaScript', 'Python', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Server,
    skills: ['React.js', 'Node.js', 'Express.js', 'Redux Toolkit', 'Tailwind CSS', 'GSAP'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'MySQL', 'Redis'],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['Docker', 'AWS EC2', 'Git / GitHub', 'GitHub Actions', 'CI/CD', 'Linux'],
  },
  {
    title: 'AI & ML',
    icon: Cpu,
    skills: ['Generative AI', 'Large Language Models (LLMs)'],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16 space-y-2"
      >
        <p className="text-[#14CF93] text-xs sm:text-sm font-semibold tracking-widest uppercase">Career Journey & Technical Proficiency</p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Work Experience & Skills<span className="text-[#14CF93] font-black">.</span>
        </h2>
      </motion.div>

      {/* Work Experience Timeline */}
      <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto w-full mb-16 sm:mb-20">
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide flex items-center gap-3">
          <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-[#14CF93]" />
          <span>Professional Experience</span>
        </h3>

        <div className="space-y-4 sm:space-y-6">
          {workExperiences.map((exp, index) => (
            <motion.div
              key={exp.company + exp.role}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <TiltCard className="p-5 sm:p-8 space-y-3 sm:space-y-4 border-l-4 border-l-[#14CF93]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10">
                  <div>
                    <span className="text-[10px] sm:text-xs font-mono font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-[#14CF93]/10 text-[#14CF93] uppercase tracking-wider">
                      {exp.type}
                    </span>
                    <h4 className="text-xl sm:text-2xl font-extrabold text-white mt-1.5 sm:mt-2">{exp.role}</h4>
                    <div className="text-sm sm:text-lg font-semibold text-[#14CF93] flex flex-wrap items-center gap-2 mt-0.5">
                      <span>{exp.company}</span>
                      <span className="text-xs text-gray-500">•</span>
                      <span className="text-xs text-gray-400 font-normal flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-mono text-gray-400 bg-white/5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl border border-white/10 self-start sm:self-center shrink-0">
                    <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#14CF93]" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2 pt-2">
                  {exp.bulletPoints.map((point, idx) => (
                    <li key={idx} className="text-gray-300 text-xs sm:text-sm leading-relaxed flex items-start gap-2.5 sm:gap-3">
                      <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#14CF93] shrink-0 mt-0.5 sm:mt-1" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Skills Matrix */}
      <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto w-full">
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide flex items-center gap-3">
          <Code className="w-5 h-5 sm:w-6 sm:h-6 text-[#14CF93]" />
          <span>Technical Skills & Tools</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {skillCategories.map((cat, index) => {
            const Icon = cat.icon;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TiltCard className="p-5 sm:p-6 space-y-4 h-full flex flex-col justify-between">
                  <div className="flex items-center gap-3 pb-3 border-b border-white/10">
                    <div className="p-2.5 rounded-xl bg-[#14CF93]/10 text-[#14CF93] shrink-0">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <h4 className="font-bold text-white text-base sm:text-lg leading-tight">{cat.title}</h4>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl text-xs font-mono bg-white/[0.04] border border-white/10 text-gray-200 hover:border-[#14CF93]/50 hover:text-[#14CF93] transition-all"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Down Arrow Button */}
      <div className="flex justify-end pt-8 sm:pt-12">
        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-3 sm:p-3.5 rounded-full bg-white/5 border border-white/10 text-[#14CF93] hover:bg-[#14CF93] hover:text-black transition-all hover:scale-110"
          aria-label="Go to projects section"
        >
          <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6" />
        </motion.a>
      </div>
    </section>
  );
};

export default Experience;
