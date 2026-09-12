import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, GraduationCap, Award } from 'lucide-react';
import TiltCard from './TiltCard';

const About = () => {
  return (
    <section id="about" className="relative py-28 px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
      {/* Section Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16 space-y-2"
      >
        <p className="text-[#14CF93] text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span>Get To Know More</span>
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          About Me<span className="text-[#14CF93] font-black">.</span>
        </h2>
      </motion.div>

      {/* Main Content Grid */}
      <div className="space-y-10 max-w-5xl mx-auto w-full">
        {/* Education Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Degree Education */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TiltCard className="p-8 text-center flex flex-col items-center justify-center space-y-4 group h-full">
              <div className="w-16 h-16 rounded-2xl bg-[#14CF93]/10 border border-[#14CF93]/30 flex items-center justify-center text-[#14CF93] group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide">B.Tech in Computer Science</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="text-[#14CF93] font-bold block text-base">CGPA: 8.1 / 10.0</span>
                Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV) <br />
                <span className="text-xs text-gray-400 font-mono">Bhopal, MP • Graduating June 2026</span>
              </p>
            </TiltCard>
          </motion.div>

          {/* School Education */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TiltCard className="p-8 text-center flex flex-col items-center justify-center space-y-4 group h-full">
              <div className="w-16 h-16 rounded-2xl bg-[#14CF93]/10 border border-[#14CF93]/30 flex items-center justify-center text-[#14CF93] group-hover:scale-110 transition-transform">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white tracking-wide">Higher Secondary (HSC, 12th)</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                <span className="text-[#14CF93] font-bold block text-base">Percentage: 80%</span>
                Emmanuel Higher Secondary School <br />
                <span className="text-xs text-gray-400 font-mono">Sagar, MP • Completed May 2022</span>
              </p>
            </TiltCard>
          </motion.div>
        </div>

        {/* Bio Text Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <TiltCard className="p-8 sm:p-12 relative overflow-hidden space-y-4">
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#14CF93]/10 rounded-bl-full pointer-events-none" />
            <h3 className="text-xl font-bold text-[#14CF93] tracking-wide flex items-center gap-2">
              <span>Executive Professional Summary</span>
            </h3>
            
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed tracking-wide text-justify sm:text-left">
              Computer Science graduate (CGPA: 8.1/10.0) and Full Stack Developer with hands-on experience building and optimizing web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Skilled in developing responsive user interfaces, implementing REST APIs, integrating backend services, optimizing application performance, and deploying applications using AWS and Docker. Seeking Software Engineer or Full Stack Developer opportunities to build scalable and user-focused products.
            </p>
          </TiltCard>
        </motion.div>
      </div>

      {/* Down Arrow Button */}
      <div className="flex justify-end pt-12">
        <motion.a
          href="#experience"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="p-3.5 rounded-full bg-white/5 border border-white/10 text-[#14CF93] hover:bg-[#14CF93] hover:text-black transition-all hover:scale-110"
          aria-label="Go to experience section"
        >
          <ArrowDown className="w-6 h-6" />
        </motion.a>
      </div>
    </section>
  );
};

export default About;
