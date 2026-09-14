import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Code2, Volume2, VolumeX, Terminal, FileText } from 'lucide-react';
import { toggleMute, playClickSound, playHoverSound } from '../utils/soundEffects';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ onOpenTerminal, onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section scrollSpy logic
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const isNowMuted = toggleMute();
    setMuted(isNowMuted);
    if (!isNowMuted) playClickSound();
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 3.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0a0d14]/85 backdrop-blur-md py-4 border-b border-white/10 shadow-lg shadow-black/50'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          onMouseEnter={playHoverSound}
          onClick={playClickSound}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#14CF93]/10 border border-[#14CF93]/30 flex items-center justify-center text-[#14CF93] group-hover:scale-105 transition-transform">
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className="text-xl sm:text-2xl font-bold tracking-wider text-white">
            Neetesh<span className="text-[#14CF93] font-black drop-shadow-[0_0_8px_#14CF93]">.</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onMouseEnter={playHoverSound}
                onClick={playClickSound}
                className={`relative text-xs lg:text-sm tracking-wider transition-colors py-1 ${
                  isActive ? 'text-[#14CF93] font-semibold' : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#14CF93] shadow-[0_0_8px_#14CF93]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}

          {/* Interactive Feature Buttons */}
          <div className="flex items-center gap-2.5 pl-2 border-l border-white/10">
            {/* Terminal Launcher */}
            <button
              onClick={() => {
                playClickSound();
                onOpenTerminal();
              }}
              onMouseEnter={playHoverSound}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#14CF93] hover:bg-[#14CF93] hover:text-black transition-all hover:scale-105"
              title="Open Developer CLI Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>

            {/* Resume Viewer */}
            <button
              onClick={() => {
                playClickSound();
                onOpenResume();
              }}
              onMouseEnter={playHoverSound}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 transition-all hover:scale-105"
              title="Preview CV Resume PDF"
            >
              <FileText className="w-4 h-4" />
            </button>

            {/* Sound Mute Toggle */}
            <button
              onClick={toggleSound}
              onMouseEnter={playHoverSound}
              className="p-2 rounded-xl bg-white/5 border border-white/10 text-gray-200 hover:bg-white/10 transition-all hover:scale-105"
              title={muted ? 'Unmute Audio Effects' : 'Mute Audio Effects'}
            >
              {muted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-[#14CF93]" />}
            </button>

            {/* Hire Me CTA */}
            <a
              href="#contact"
              onMouseEnter={playHoverSound}
              onClick={playClickSound}
              className="px-4 py-2 text-xs lg:text-sm font-semibold rounded-full bg-[#14CF93] text-black hover:bg-[#00F59B] transition-all hover:shadow-[0_0_20px_rgba(20,207,147,0.5)] hover:scale-105 active:scale-95"
            >
              Hire Me
            </a>
          </div>
        </nav>

        {/* Mobile Header Actions */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleSound}
            className="text-white p-2 focus:outline-none rounded-lg bg-white/5 border border-white/10"
            aria-label="Toggle Sound"
            title={muted ? 'Unmute' : 'Mute'}
          >
            {muted ? <VolumeX className="w-5 h-5 text-red-400" /> : <Volume2 className="w-5 h-5 text-[#14CF93]" />}
          </button>

          <button
            onClick={() => {
              playClickSound();
              setIsOpen(!isOpen);
            }}
            className="text-white p-2 focus:outline-none rounded-lg bg-white/5 border border-white/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6 text-[#14CF93]" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0e131f]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-5 py-5 space-y-3.5">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    playClickSound();
                    setIsOpen(false);
                  }}
                  className="text-base text-gray-200 hover:text-[#14CF93] py-1.5 tracking-wide border-b border-white/5 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#14CF93] font-mono">→</span>
                </a>
              ))}

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <button
                  onClick={() => {
                    playClickSound();
                    setIsOpen(false);
                    onOpenTerminal();
                  }}
                  className="py-2.5 rounded-xl bg-white/5 border border-white/10 text-[#14CF93] text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <Terminal className="w-4 h-4" />
                  <span>CLI Terminal</span>
                </button>

                <button
                  onClick={() => {
                    playClickSound();
                    setIsOpen(false);
                    onOpenResume();
                  }}
                  className="py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-200 text-xs font-bold flex items-center justify-center gap-1.5"
                >
                  <FileText className="w-4 h-4" />
                  <span>Preview CV</span>
                </button>
              </div>

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full text-center py-3 rounded-xl bg-[#14CF93] text-black font-semibold mt-1 shadow-[0_0_15px_rgba(20,207,147,0.3)]"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
