import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, FileText } from 'lucide-react';
import { playClickSound } from '../utils/soundEffects';

const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
          className="bg-[#0e131f] border border-white/20 rounded-3xl max-w-4xl w-full h-[85vh] flex flex-col overflow-hidden shadow-2xl relative"
        >
          {/* Modal Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#14CF93]/10 text-[#14CF93]">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-tight">Neetesh Prajapati Resume (2026)</h3>
                <span className="text-xs text-gray-400 font-mono">B.Tech Computer Science • Full Stack Developer</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/assets/Neetesh_Prajapati2026.pdf"
                download="Neetesh_Prajapati_Resume_2026.pdf"
                onClick={playClickSound}
                className="px-4 py-2 rounded-xl bg-[#14CF93] text-black font-bold text-xs flex items-center gap-1.5 hover:bg-[#00F59B] transition-all shadow-[0_0_15px_rgba(20,207,147,0.4)]"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download PDF</span>
              </a>

              <a
                href="/assets/Neetesh_Prajapati2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={playClickSound}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 transition-all border border-white/10"
                title="Open in New Tab"
              >
                <ExternalLink className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  playClickSound();
                  onClose();
                }}
                className="p-2 rounded-xl bg-white/5 hover:bg-[#14CF93] text-gray-300 hover:text-black transition-all border border-white/10"
                title="Close Viewer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Embedded PDF Viewer Frame */}
          <div className="flex-1 bg-slate-950 p-2 relative">
            <iframe
              src="/assets/Neetesh_Prajapati2026.pdf#toolbar=0"
              title="Neetesh Prajapati Resume"
              className="w-full h-full rounded-2xl border border-white/10"
            />
          </div>

          {/* Modal Footer */}
          <div className="p-4 border-t border-white/10 bg-[#0a0d14] flex items-center justify-between text-xs text-gray-400 font-mono">
            <span>Verified Official Resume • Neetesh_Prajapati2026.pdf</span>
            <span className="text-[#14CF93]">● Synchronized</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeModal;
