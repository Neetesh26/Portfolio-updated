import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, X, Minimize2, Play, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { playClickSound, playSuccessChime } from '../utils/soundEffects';

const commandOutputs = {
  help: [
    "Available CLI Commands:",
    "  about        - Executive Summary & Academic Credentials",
    "  skills       - Core Tech Stack & Frameworks",
    "  experience   - Industry Roles & Internships",
    "  projects     - Featured Production Applications",
    "  leetcode     - LeetCode Profile & Problem Solving Stats",
    "  contact      - Direct Contact Details & LinkedIn",
    "  sudo hire    - Fast-track Candidate Evaluation 🎉",
    "  clear        - Clear Terminal Screen",
  ],
  about: [
    "--- ABOUT NEETESH PRAJAPATI ---",
    "• Degree: B.Tech in Computer Science (RGPV Bhopal)",
    "• CGPA: 8.1 / 10.0",
    "• Focus: Full-Stack MERN, Scalable Backend, Cloud & Agentic AI",
    "• Tagline: 'Every line of code is a step toward building something extraordinary.' 🚀",
  ],
  skills: [
    "--- TECHNICAL PROFICIENCY ---",
    "• Languages: JavaScript, Python, TypeScript, HTML, CSS",
    "• Frontend: React.js, Redux Toolkit, Tailwind CSS, GSAP",
    "• Backend: Node.js, Express.js, PHP, REST APIs",
    "• Databases: MongoDB, MySQL, Redis",
    "• DevOps/Cloud: Docker, AWS EC2, GitHub Actions CI/CD, Linux",
    "• AI/ML: Generative AI, Large Language Models (LLMs), Agentic AI",
  ],
  experience: [
    "--- WORK EXPERIENCE ---",
    "1. VidyaGxP - Full Stack Engineer (Jul 2026 - Present)",
    "   • Enterprise eQMS platform, React UIs across 5+ core modules",
    "2. Brain Inventory - Software Developer Intern (Feb 2026 - May 2026)",
    "   • Backend Node.js on AWS EC2, Redis caching (response times down 35%)",
    "3. Sheryians Coding School - Full Stack Developer Apprentice (Apr 2025 - Feb 2026)",
    "4. GirlScript Summer of Code - Campus Ambassador (Jul 2025 - Aug 2025)",
  ],
  projects: [
    "--- FEATURED PROJECTS ---",
    "1. TrustLens AI (Security Analyzer with Deep Crawling & LLMs)",
    "2. E-Commerce Production App (30+ Products, Redis, Docker, AWS EC2)",
    "3. AI Code Reviewer (Real-time Code Quality Assistant)",
    "4. Floral Fagility (Boutique Frontend Experience)",
  ],
  leetcode: [
    "--- LEETCODE & PROBLEM SOLVING ---",
    "• Profile: https://leetcode.com/u/neeteshprajapati009/",
    "• Achievement: Code Clash Rank 1 Winner 🏆",
    "• Focus: Data Structures & Algorithms, Speed & Precision",
  ],
  contact: [
    "--- CONTACT INFORMATION ---",
    "• Email: neeteshprajapati009@gmail.com",
    "• LinkedIn: https://www.linkedin.com/in/neetesh-prajapati-b44469254/",
    "• Location: Madhya Pradesh, India (On-site / Hybrid / Remote)",
  ],
};

const TerminalModal = ({ isOpen, onClose }) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: "Welcome to Neetesh Prajapati's Interactive Developer Terminal (v1.0.0)" },
    { type: 'system', text: "Type 'help' to see available commands or click quick action pills below." },
  ]);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdStr) => {
    const cmd = cmdStr.trim().toLowerCase();
    if (!cmd) return;

    playClickSound();

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const newHistory = [...history, { type: 'user', text: `neetesh@portfolio:~$ ${cmdStr}` }];

    if (cmd === 'sudo hire') {
      playSuccessChime();
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      newHistory.push({ type: 'output', text: "🎉 EXCELLENT CHOICE! Initiating priority hiring process..." });
      newHistory.push({ type: 'output', text: "Redirecting to Contact section..." });
      setTimeout(() => {
        onClose();
        window.location.href = '#contact';
      }, 1500);
    } else if (commandOutputs[cmd]) {
      commandOutputs[cmd].forEach((line) => {
        newHistory.push({ type: 'output', text: line });
      });
    } else {
      newHistory.push({
        type: 'error',
        text: `Command not found: '${cmdStr}'. Type 'help' for available commands.`,
      });
    }

    setHistory(newHistory);
    setInput('');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-[999999] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
      >
        <motion.div
          initial={{ scale: 0.9, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 30 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-[#0c1017] border border-[#14CF93]/40 rounded-2xl sm:rounded-3xl max-w-3xl w-full h-[85vh] sm:h-[600px] max-h-[90vh] flex flex-col overflow-hidden shadow-[0_0_50px_rgba(20,207,147,0.25)] relative font-mono"
        >
          {/* Terminal Titlebar */}
          <div className="p-4 bg-[#080a0f] border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="text-xs text-gray-400 font-semibold ml-2 flex items-center gap-1.5">
                <Terminal className="w-4 h-4 text-[#14CF93]" />
                neetesh@portfolio:~ (zsh)
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-white/5 hover:bg-[#14CF93] text-gray-400 hover:text-black transition-all"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Action Command Chips */}
          <div className="p-3 border-b border-white/5 bg-white/[0.02] flex flex-wrap gap-2 text-xs">
            {['help', 'about', 'skills', 'experience', 'projects', 'leetcode', 'sudo hire'].map((chip) => (
              <button
                key={chip}
                onClick={() => handleCommand(chip)}
                className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-[#14CF93] hover:bg-[#14CF93] hover:text-black transition-all font-semibold"
              >
                ${chip}
              </button>
            ))}
          </div>

          {/* Terminal Output Area */}
          <div className="flex-1 p-5 overflow-y-auto space-y-2 text-sm text-gray-300">
            {history.map((item, idx) => (
              <div
                key={idx}
                className={
                  item.type === 'user'
                    ? 'text-[#14CF93] font-bold'
                    : item.type === 'error'
                    ? 'text-red-400'
                    : item.type === 'system'
                    ? 'text-gray-400 italic'
                    : 'text-gray-200 pl-2'
                }
              >
                {item.text}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Bar */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(input);
            }}
            className="p-4 bg-[#080a0f] border-t border-white/10 flex items-center gap-2"
          >
            <span className="text-[#14CF93] font-bold">neetesh@portfolio:~$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type command ('help', 'skills', 'sudo hire')..."
              className="flex-1 bg-transparent text-white focus:outline-none text-sm caret-[#14CF93]"
              autoFocus
            />
            <button type="submit" className="p-2 text-[#14CF93] hover:scale-110 transition-transform">
              <Play className="w-4 h-4 fill-[#14CF93]" />
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TerminalModal;
