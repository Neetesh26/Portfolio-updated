import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Mail, Linkedin, Github, Sparkles, Terminal, Code2, Trophy, Award, Eye } from 'lucide-react';
import { playClickSound, playHoverSound } from '../utils/soundEffects';

const LeetCodeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.17 5.79a1.374 1.374 0 0 0 0 1.941.974.974 0 0 0 1.375 0l5.352-5.352c.218-.218.423-.327.686-.327.57 0 .974.475.974 1.045 0 .285-.11.535-.308.733l-5.333 5.333a.974.974 0 0 0 0 1.375c.379.379.996.379 1.375 0l5.333-5.333c.57-.57.887-1.325.887-2.128 0-1.657-1.343-3-3-3zM2.845 8.785a.974.974 0 0 0-1.375 0 1.374 1.374 0 0 0 0 1.941l8.32 8.32c.57.57 1.325.887 2.128.887 1.657 0 3-1.343 3-3 0-.803-.317-1.558-.887-2.128l-8.32-8.32a.974.974 0 0 0-1.375 0zm14.49 4.887c-.515-.515-1.366-.515-1.881 0-.515.515-.515 1.366 0 1.881l3.5 3.5c.515.515 1.366.515 1.881 0 .515-.515.515-1.366 0-1.881l-3.5-3.5z"/>
  </svg>
);

const roles = [
  "Full Stack Developer (MERN)",
  "LeetCode Problem Solver & DSA Specialist",
  "2+ 🏆 Hackathon Winner",
  "AI/ML & Agentic AI Engineer"
];

const stats = [
  { label: "Code Clash Rank 1", value: "Winner 🏆", icon: Trophy },
  { label: "DSA Problem Solving", value: "LeetCode ⚡", icon: Code2 },
  { label: "B.Tech CS CGPA", value: "8.1 / 10", icon: Award },
  { label: "Industry Experience", value: "5+ Roles", icon: Terminal },
];

const Hero = ({ onOpenResume, onOpenTerminal }) => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="profile" className="relative min-h-screen flex flex-col justify-between pt-28 pb-16 px-6 overflow-hidden">
      {/* Background Glow Lights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#14CF93]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center flex-1 my-auto">
        
        {/* Avatar Profile (Left) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center order-1 lg:order-1"
        >
          <div className="relative group">
            {/* Animated Rotating Gradient Glow */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#14CF93] via-[#00F59B] to-emerald-700 rounded-full blur-xl opacity-70 group-hover:opacity-100 transition duration-700 group-hover:scale-105 animate-pulse-glow" />
            
            {/* Main Avatar Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-white/20 bg-slate-950 shadow-2xl">
              <img
                src="/assets/np.jpeg"
                alt="Neetesh Prajapati profile picture"
                className="w-full h-full object-cover object-top filter grayscale-[15%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
              />
            </div>

            {/* Live Availability Floating Pill */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#0e131f]/95 border border-[#14CF93]/40 backdrop-blur-md px-5 py-2.5 rounded-full flex items-center gap-2.5 shadow-2xl whitespace-nowrap"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14CF93] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#14CF93]"></span>
              </span>
              <span className="text-xs font-bold text-gray-100 tracking-wider">Full Stack & LeetCode Engineer</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Details (Right) */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-2 space-y-6 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#14CF93]/10 border border-[#14CF93]/30 text-[#14CF93] text-sm font-semibold tracking-wider max-w-full"
          >
            <Sparkles className="w-4 h-4 shrink-0" />
            <span className="truncate">Full Stack Developer | Ex. @Brain Inventory | AI/ML & LeetCode</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-tight break-words max-w-full pr-2"
          >
            <span className="inline-block mr-3">Neetesh</span>
            <span className="gradient-text inline-block">Prajapati</span>
          </motion.h1>

          {/* Typewriter Role Switcher */}
          <div className="h-10 flex items-center justify-center lg:justify-start overflow-hidden max-w-full">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roleIndex}
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -25, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="text-lg sm:text-2xl md:text-3xl font-semibold text-[#14CF93] tracking-wide flex items-center gap-2 font-mono truncate"
              >
                <span>&gt;</span>
                <span className="truncate">{roles[roleIndex]}</span>
                <span className="w-2.5 h-6 bg-[#14CF93] inline-block animate-pulse shrink-0" />
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Tagline Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="p-4 rounded-2xl bg-white/[0.03] border-l-4 border-l-[#14CF93] border border-white/5 text-gray-200 italic font-mono text-sm sm:text-base max-w-full"
          >
            "Every line of code is a step toward building something extraordinary." 🚀
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed tracking-wide text-justify lg:text-left"
          >
            An observant and innovative full stack developer & problem solver with strong Data Structures & Algorithms proficiency. Winner of Rank 1 Code Clash Web Battle with hands-on experience in MERN, Agentic AI, Redis, AWS & Docker.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2"
          >
            <button
              onClick={() => {
                playClickSound();
                onOpenResume();
              }}
              onMouseEnter={playHoverSound}
              className="px-7 py-3.5 rounded-full bg-[#14CF93] text-black font-bold flex items-center gap-2.5 hover:bg-[#00F59B] transition-all hover:shadow-[0_0_30px_rgba(20,207,147,0.6)] hover:scale-105 active:scale-95 group"
            >
              <Eye className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Preview CV</span>
            </button>

            <button
              onClick={() => {
                playClickSound();
                onOpenTerminal();
              }}
              onMouseEnter={playHoverSound}
              className="px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/15 flex items-center gap-2.5 transition-all hover:border-[#14CF93]/50 hover:scale-105 active:scale-95"
            >
              <Terminal className="w-5 h-5 text-[#14CF93]" />
              <span>Launch CLI</span>
            </button>

            <a
              href="#contact"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="px-7 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white font-semibold border border-white/15 flex items-center gap-2.5 transition-all hover:border-[#14CF93]/50 hover:scale-105 active:scale-95"
            >
              <Mail className="w-5 h-5 text-[#14CF93]" />
              <span>Contact</span>
            </a>
          </motion.div>

          {/* Social Links including LeetCode */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex items-center gap-4 pt-2"
          >
            <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">Connect:</span>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/neetesh-prajapati-b44469254/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#14CF93] hover:border-[#14CF93]/50 hover:bg-[#14CF93]/10 transition-all hover:scale-110 shadow-lg"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/Neetesh26"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                aria-label="GitHub Profile"
                title="GitHub Profile"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#14CF93] hover:border-[#14CF93]/50 hover:bg-[#14CF93]/10 transition-all hover:scale-110 shadow-lg"
              >
                <Github className="w-5 h-5" />
              </a>

              <a
                href="https://leetcode.com/u/neeteshprajapati009/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                aria-label="LeetCode Profile"
                title="LeetCode Profile"
                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300 hover:text-[#FFA116] hover:border-[#FFA116]/50 hover:bg-[#FFA116]/10 transition-all hover:scale-110 shadow-lg"
              >
                <LeetCodeIcon className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Handcrafted Stats Row */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="max-w-7xl mx-auto w-full pt-12"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="glass-panel p-4 sm:p-5 rounded-2xl flex items-center gap-4 border border-white/5 hover:border-[#14CF93]/30 transition-all"
              >
                <div className="p-3 rounded-xl bg-[#14CF93]/10 text-[#14CF93]">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-extrabold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400 font-mono">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
