import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, X, Sparkles, ArrowDown, Filter } from 'lucide-react';
import TiltCard from './TiltCard';

const categories = ['All', 'Full-Stack / AI', 'E-Commerce', 'Frontend'];

const projects = [
  {
    id: 1,
    title: 'TrustLens AI',
    subtitle: 'Intelligent Website Security Analyzer',
    category: 'Full-Stack / AI',
    image: '/assets/AiPowered.png',
    liveUrl: 'https://github.com/Neetesh26',
    githubUrl: 'https://github.com/Neetesh26',
    tags: ['React.js', 'Node.js', 'Selenium', 'LLMs', 'REST APIs'],
    description: 'Developed an AI-powered security analyzer with automated deep crawling across 20+ internal pages per scan; built a trust scoring engine using 10+ parameters including SSL and HTTP headers, improving threat detection accuracy by 30%. Engineered Selenium-based crawling with asynchronous optimization and loop prevention, improving overall scan efficiency by 35%.',
  },
  {
    id: 2,
    title: 'E-Commerce Production App',
    subtitle: 'Full Stack Cloud Production Application',
    category: 'E-Commerce',
    image: '/assets/ecom.png',
    liveUrl: 'https://regal-kitten-654da0.netlify.app/',
    githubUrl: 'https://github.com/Neetesh26',
    tags: ['React.js', 'TypeScript', 'Node.js', 'Redis', 'Docker', 'AWS EC2', 'CI/CD'],
    description: 'Built and deployed a scalable e-commerce application with 30+ product listings; reduced API response time by 35% via Redis caching and integrated a secure payment gateway with full error handling and monitoring. Deployed on AWS EC2 using Docker containers and automated CI/CD pipelines via GitHub Actions, improving deployment efficiency by 45%.',
  },
  {
    id: 3,
    title: 'AI Code Reviewer',
    subtitle: 'Automated Code Quality Assistant',
    category: 'Full-Stack / AI',
    image: '/assets/AiPowered.png',
    liveUrl: 'https://github.com/Neetesh26/Ai-Powered-CodeReviewer',
    githubUrl: 'https://github.com/Neetesh26/Ai-Powered-CodeReviewer',
    tags: ['React.js', 'Node.js', 'Express.js', 'AI API'],
    description: 'An AI-powered application designed to review source code in real-time, highlighting syntax issues, potential security vulnerabilities, and code optimizations.',
  },
  {
    id: 4,
    title: 'Floral Fagility',
    subtitle: 'Floral Boutique Web Experience',
    category: 'Frontend',
    image: '/assets/project1.png',
    liveUrl: 'https://incredible-flan-623b25.netlify.app/',
    githubUrl: 'https://github.com/Neetesh26',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    description: 'An elegant, high-performance floral website featuring interactive catalog views, fluid page animations, and an intuitive user ordering experience.',
  },
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = projects.filter((project) =>
    activeCategory === 'All' ? true : project.category === activeCategory
  );

  return (
    <section id="projects" className="relative py-28 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 space-y-2"
      >
        <p className="text-[#14CF93] text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span>Featured Software Engineering Projects</span>
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Projects Showcase<span className="text-[#14CF93] font-black">.</span>
        </h2>
      </motion.div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-14">
        <Filter className="w-4 h-4 text-gray-500 mr-2 hidden sm:inline-block" />
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                isActive
                  ? 'text-black font-bold shadow-[0_0_20px_rgba(20,207,147,0.4)]'
                  : 'text-gray-400 hover:text-white bg-white/5 border border-white/10 hover:bg-white/10'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeFilterTab"
                  className="absolute inset-0 bg-[#14CF93] rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <TiltCard className="h-full flex flex-col group">
                {/* Project Image Container */}
                <div className="relative h-64 overflow-hidden bg-slate-950 border-b border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d14] via-transparent to-transparent opacity-80" />

                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#0e131f]/80 backdrop-blur-md border border-[#14CF93]/40 text-[#14CF93]">
                      {project.category}
                    </span>
                  </div>

                  {/* Overlay Actions */}
                  <div className="absolute inset-0 bg-[#0a0d14]/75 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="p-3.5 rounded-full bg-white/10 border border-white/20 text-white hover:bg-[#14CF93] hover:text-black transition-all hover:scale-110"
                      title="Quick View"
                    >
                      <Eye className="w-5 h-5" />
                    </button>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3.5 rounded-full bg-[#14CF93] text-black hover:bg-[#00F59B] transition-all hover:scale-110 shadow-[0_0_20px_rgba(20,207,147,0.5)]"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <span className="text-xs text-[#14CF93] font-mono tracking-wider uppercase font-bold">{project.subtitle}</span>
                    <h3 className="text-2xl font-extrabold text-white tracking-wide mt-1 group-hover:text-[#14CF93] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-3 mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-white/5 border border-white/10 text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer Action */}
                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-gray-400 hover:text-white flex items-center gap-1.5 transition-colors"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#14CF93]" />
                      <span>View Details</span>
                    </button>

                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-full bg-[#14CF93]/10 border border-[#14CF93]/30 text-[#14CF93] text-xs font-bold hover:bg-[#14CF93] hover:text-black transition-all flex items-center gap-1.5"
                    >
                      <span>Live Project</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0e131f] border border-white/20 rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl space-y-6 relative my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/70 text-white hover:bg-[#14CF93] hover:text-black transition-all shadow-xl"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Banner Image */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-950">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e131f] via-transparent to-transparent" />
              </div>

              {/* Modal Content Body */}
              <div className="p-6 sm:p-8 space-y-6 -mt-8 relative z-10">
                <div>
                  <span className="text-xs text-[#14CF93] font-mono uppercase tracking-widest font-bold">
                    {selectedProject.subtitle} • {selectedProject.category}
                  </span>
                  <h3 className="text-3xl font-extrabold text-white tracking-wide mt-1">
                    {selectedProject.title}
                  </h3>
                </div>

                <p className="text-gray-300 text-base leading-relaxed">
                  {selectedProject.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold uppercase text-gray-400 tracking-wider">Technologies & Infrastructure</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-1.5 rounded-full text-xs font-mono bg-[#14CF93]/10 border border-[#14CF93]/30 text-[#14CF93]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer Buttons */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap gap-4">
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 px-6 rounded-full bg-[#14CF93] text-black font-bold flex items-center justify-center gap-2 hover:bg-[#00F59B] transition-all shadow-[0_0_20px_rgba(20,207,147,0.5)]"
                  >
                    <span>Visit Live Application</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3.5 px-6 rounded-full bg-white/5 border border-white/15 text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 hover:border-white/30 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Down Arrow Button */}
      <div className="flex justify-end pt-12">
        <motion.a
          href="#contact"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-3.5 rounded-full bg-white/5 border border-white/10 text-[#14CF93] hover:bg-[#14CF93] hover:text-black transition-all hover:scale-110"
          aria-label="Go to contact section"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.a>
      </div>
    </section>
  );
};

export default Projects;
