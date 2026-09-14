import React, { useState } from 'react';
import IntroLoader from './components/IntroLoader';
import CustomCursor from './components/CustomCursor';
import BackgroundCanvas from './components/BackgroundCanvas';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import GitHubHeatmap from './components/GitHubHeatmap';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TerminalModal from './components/TerminalModal';
import ResumeModal from './components/ResumeModal';

function App() {
  const [loaderFinished, setLoaderFinished] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full max-w-full overflow-x-hidden bg-[#0a0d14] text-white selection:bg-[#14CF93] selection:text-black">
      {/* Top Scroll Progress Line */}
      <ScrollProgress />

      {/* Custom Fluid Magnetic Cursor */}
      <CustomCursor />

      {/* Intro Loader Curtain */}
      <IntroLoader onComplete={() => setLoaderFinished(true)} />

      {/* Reactive Forcefield Canvas Background */}
      <BackgroundCanvas />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
        />
        <main>
          <Hero
            onOpenTerminal={() => setIsTerminalOpen(true)}
            onOpenResume={() => setIsResumeOpen(true)}
          />
          <About />
          <Experience />
          <Achievements />
          <GitHubHeatmap />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>

      {/* Modals */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
      />
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default App;
