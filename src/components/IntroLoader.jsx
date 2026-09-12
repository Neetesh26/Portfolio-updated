import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const IntroLoader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Total animation time before dismissing loader
    const timer = setTimeout(() => {
      setIsVisible(false);
      if (onComplete) onComplete();
    }, 3800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const words = [
    { text: "Neetesh", highlight: true },
    { text: "Prajapati", highlight: true },
    { text: "is", highlight: false },
    { text: "a 👨‍💻", highlight: false },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] pointer-events-auto flex flex-col justify-between bg-[#000000] text-white overflow-hidden"
          exit={{ y: "-100%", transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Green Curtain Sweep Overlay */}
          <motion.div
            className="absolute inset-0 bg-[#14CF93] z-[1]"
            initial={{ height: "0%" }}
            animate={{ height: ["0%", "100%", "0%"] }}
            transition={{
              duration: 2.2,
              delay: 1.8,
              times: [0, 0.5, 1],
              ease: [0.76, 0, 0.24, 1],
            }}
          />

          {/* Top Bar */}
          <div className="relative z-10 p-8 flex justify-between items-center text-xs tracking-widest uppercase font-mono text-gray-400 border-b border-white/5">
            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#14CF93] animate-pulse"></span>
              WEB DEV ❤️ PORTFOLIO
            </motion.span>

            <motion.span
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              &copy; {new Date().getFullYear()}
            </motion.span>
          </div>

          {/* Main Staggered Text */}
          <div className="relative z-10 flex-1 flex items-center justify-center px-4">
            <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide">
              {words.map((word, index) => (
                <div key={index} className="overflow-hidden py-2">
                  <motion.span
                    className={`inline-block ${
                      word.highlight
                        ? 'text-[#14CF93] drop-shadow-[0_0_20px_rgba(20,207,147,0.4)]'
                        : 'text-white'
                    }`}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 0.9,
                      delay: 0.4 + index * 0.18,
                      ease: [0.215, 0.61, 0.355, 1],
                    }}
                  >
                    {word.text}
                  </motion.span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Progress Bar */}
          <div className="relative z-10 p-8">
            <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
              <motion.div
                className="bg-[#14CF93] h-full shadow-[0_0_12px_#14CF93]"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
