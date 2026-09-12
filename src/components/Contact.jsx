import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Copy, Check, Send, Sparkles, MapPin } from 'lucide-react';
import confetti from 'canvas-confetti';
import TiltCard from './TiltCard';

const LeetCodeIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" {...props}>
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.17 5.79a1.374 1.374 0 0 0 0 1.941.974.974 0 0 0 1.375 0l5.352-5.352c.218-.218.423-.327.686-.327.57 0 .974.475.974 1.045 0 .285-.11.535-.308.733l-5.333 5.333a.974.974 0 0 0 0 1.375c.379.379.996.379 1.375 0l5.333-5.333c.57-.57.887-1.325.887-2.128 0-1.657-1.343-3-3-3zM2.845 8.785a.974.974 0 0 0-1.375 0 1.374 1.374 0 0 0 0 1.941l8.32 8.32c.57.57 1.325.887 2.128.887 1.657 0 3-1.343 3-3 0-.803-.317-1.558-.887-2.128l-8.32-8.32a.974.974 0 0 0-1.375 0zm14.49 4.887c-.515-.515-1.366-.515-1.881 0-.515.515-.515 1.366 0 1.881l3.5 3.5c.515.515 1.366.515 1.881 0 .515-.515.515-1.366 0-1.881l-3.5-3.5z"/>
  </svg>
);

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('neeteshprajapati009@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#14CF93', '#00F59B', '#ffffff'],
    });

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4500);
  };

  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-6 max-w-7xl mx-auto min-h-screen flex flex-col justify-center items-center">
      {/* Toast Notification */}
      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-8 right-8 z-[99999] bg-[#14CF93] text-black px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 font-bold text-xs sm:text-sm"
          >
            <Check className="w-4 h-4 stroke-[3]" />
            <span>Email copied to clipboard!</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-16 space-y-2 w-full"
      >
        <p className="text-[#14CF93] text-xs sm:text-sm font-semibold tracking-widest uppercase flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4" />
          <span>Get in Touch</span>
        </p>
        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
          Contact Me<span className="text-[#14CF93] font-black">.</span>
        </h2>
      </motion.div>

      {/* Responsive Grid Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 max-w-6xl w-full items-stretch justify-center">
        {/* Contact Info Column (Left) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
          
          {/* 1. Direct Mail Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex-1"
          >
            <TiltCard className="p-4 sm:p-5 flex flex-row items-center justify-between gap-3 sm:gap-4 flex-nowrap h-full group">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#14CF93]/10 border border-[#14CF93]/30 flex items-center justify-center text-[#14CF93] shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] sm:text-[11px] text-gray-400 font-mono block uppercase tracking-wider">Direct Mail</span>
                  <a
                    href="mailto:neeteshprajapati009@gmail.com"
                    className="text-white font-semibold text-xs sm:text-sm hover:text-[#14CF93] transition-colors truncate block"
                    title="neeteshprajapati009@gmail.com"
                  >
                    neeteshprajapati009@gmail.com
                  </a>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-[#14CF93]/20 text-gray-300 hover:text-[#14CF93] transition-all shrink-0 border border-white/10"
                title="Copy Email to Clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-[#14CF93]" /> : <Copy className="w-4 h-4" />}
              </button>
            </TiltCard>
          </motion.div>

          {/* 2. LinkedIn Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1"
          >
            <TiltCard className="p-4 sm:p-5 flex flex-row items-center justify-between gap-3 sm:gap-4 flex-nowrap h-full group">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#14CF93]/10 border border-[#14CF93]/30 flex items-center justify-center text-[#14CF93] shrink-0 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] sm:text-[11px] text-gray-400 font-mono block uppercase tracking-wider">LinkedIn Profile</span>
                  <a
                    href="https://www.linkedin.com/in/neetesh-prajapati-b44469254/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold text-xs sm:text-sm hover:text-[#14CF93] transition-colors truncate block"
                  >
                    Neetesh Prajapati
                  </a>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/neetesh-prajapati-b44469254/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 sm:py-2 rounded-xl bg-white/5 hover:bg-[#14CF93] text-gray-300 hover:text-black font-semibold text-xs transition-all shrink-0 border border-white/10 whitespace-nowrap"
              >
                Connect
              </a>
            </TiltCard>
          </motion.div>

          {/* 3. LeetCode Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="flex-1"
          >
            <TiltCard className="p-4 sm:p-5 flex flex-row items-center justify-between gap-3 sm:gap-4 flex-nowrap h-full group">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#FFA116]/10 border border-[#FFA116]/30 flex items-center justify-center text-[#FFA116] shrink-0 group-hover:scale-110 transition-transform">
                  <LeetCodeIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] sm:text-[11px] text-gray-400 font-mono block uppercase tracking-wider">LeetCode Profile</span>
                  <a
                    href="https://leetcode.com/u/neeteshprajapati009/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-semibold text-xs sm:text-sm hover:text-[#FFA116] transition-colors truncate block"
                  >
                    @neeteshprajapati009
                  </a>
                </div>
              </div>

              <a
                href="https://leetcode.com/u/neeteshprajapati009/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 sm:py-2 rounded-xl bg-white/5 hover:bg-[#FFA116] text-gray-300 hover:text-black font-semibold text-xs transition-all shrink-0 border border-white/10 whitespace-nowrap"
              >
                Solve DSA
              </a>
            </TiltCard>
          </motion.div>

          {/* 4. Location & Preference Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex-1"
          >
            <TiltCard className="p-4 sm:p-5 flex flex-row items-center justify-between gap-3 sm:gap-4 flex-nowrap h-full group">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-[#14CF93]/10 border border-[#14CF93]/30 flex items-center justify-center text-[#14CF93] shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-[10px] sm:text-[11px] text-gray-400 font-mono block uppercase tracking-wider">Location & Preference</span>
                  <p className="text-white font-semibold text-xs sm:text-sm truncate">
                    Madhya Pradesh, India
                  </p>
                </div>
              </div>

              <span className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-[#14CF93]/10 border border-[#14CF93]/30 text-[#14CF93] text-[10px] sm:text-[11px] font-mono shrink-0 whitespace-nowrap">
                On-site • Hybrid • Remote
              </span>
            </TiltCard>
          </motion.div>

          {/* 5. Callout Box */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass-panel p-4 sm:p-5 rounded-3xl border-l-4 border-l-[#14CF93] space-y-1.5"
          >
            <div className="flex items-center gap-2 text-[#14CF93] font-bold text-xs sm:text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Let's build something extraordinary!</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Seeking Software Engineer & Full Stack Developer roles. Open to tech collaborations and innovative challenges.
            </p>
          </motion.div>
        </div>

        {/* Contact Form Column (Right) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-7 flex flex-col"
        >
          <TiltCard className="p-6 sm:p-10 h-full flex flex-col justify-between relative overflow-hidden">
            {formSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12 sm:py-16 space-y-4 my-auto"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#14CF93]/20 border border-[#14CF93] text-[#14CF93] flex items-center justify-center mx-auto">
                  <Check className="w-7 h-7 sm:w-8 sm:h-8 stroke-[3]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-gray-400 text-xs sm:text-sm max-w-md mx-auto">
                  Thank you for reaching out. Neetesh will get back to you promptly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 flex-1 flex flex-col justify-between">
                <div className="space-y-3.5 sm:space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
                    <div className="space-y-1 sm:space-y-1.5">
                      <label className="text-[10px] sm:text-xs font-mono text-gray-300 uppercase tracking-wider">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#14CF93] focus:ring-1 focus:ring-[#14CF93] transition-all text-xs sm:text-sm"
                      />
                    </div>

                    <div className="space-y-1 sm:space-y-1.5">
                      <label className="text-[10px] sm:text-xs font-mono text-gray-300 uppercase tracking-wider">Your Email</label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#14CF93] focus:ring-1 focus:ring-[#14CF93] transition-all text-xs sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1 sm:space-y-1.5">
                    <label className="text-[10px] sm:text-xs font-mono text-gray-300 uppercase tracking-wider">Subject</label>
                    <input
                      type="text"
                      required
                      placeholder="Software Engineer Role / Project Collaboration"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#14CF93] focus:ring-1 focus:ring-[#14CF93] transition-all text-xs sm:text-sm"
                    />
                  </div>

                  <div className="space-y-1 sm:space-y-1.5">
                    <label className="text-[10px] sm:text-xs font-mono text-gray-300 uppercase tracking-wider">Message</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Hello Neetesh, I'd like to discuss..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#14CF93] focus:ring-1 focus:ring-[#14CF93] transition-all text-xs sm:text-sm resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 sm:py-4 mt-2 rounded-xl bg-[#14CF93] text-black font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 hover:bg-[#00F59B] transition-all shadow-[0_0_25px_rgba(20,207,147,0.5)] hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </TiltCard>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
