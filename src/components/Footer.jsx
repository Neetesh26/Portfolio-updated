import React from 'react';
import { ArrowUp, Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#07090e] border-t border-white/10 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#14CF93]/10 border border-[#14CF93]/30 flex items-center justify-center text-[#14CF93]">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold tracking-wider text-white">
            Neetesh<span className="text-[#14CF93]">.</span>
          </span>
        </div>

        {/* Links */}
        <nav className="flex flex-wrap justify-center gap-8 text-sm tracking-wider text-gray-400">
          <a href="#about" className="hover:text-[#14CF93] transition-colors">About</a>
          <a href="#experience" className="hover:text-[#14CF93] transition-colors">Experience</a>
          <a href="#achievements" className="hover:text-[#14CF93] transition-colors">Achievements</a>
          <a href="#projects" className="hover:text-[#14CF93] transition-colors">Projects</a>
          <a href="#contact" className="hover:text-[#14CF93] transition-colors">Contact</a>
        </nav>

        {/* Copyright */}
        <div className="flex items-center gap-2 text-sm text-gray-400 font-mono">
          <span>Created with</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
          <span>by Neetesh Prajapati</span>
        </div>
      </div>

      {/* Back to top float button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 left-8 z-40 p-3.5 rounded-full bg-[#14CF93] text-black shadow-[0_0_20px_rgba(20,207,147,0.4)] hover:bg-[#00F59B] transition-all hover:scale-110 active:scale-95"
        title="Back to Top"
        aria-label="Back to Top"
      >
        <ArrowUp className="w-5 h-5 stroke-[2.5]" />
      </button>
    </footer>
  );
};

export default Footer;
