
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import ProblemSolving from './sections/ProblemSolving';
import Contact from './sections/Contact';
import PatternWaves from './components/PatternWaves';

export default function App() {
  const [theme, setTheme] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      return saved === 'light' ? 'light' : 'dark';
    } catch (e) {
      return 'dark';
    }
  });

  useEffect(() => {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.classList.toggle('light', !isDark);

    try {
      localStorage.setItem('theme', theme);
    } catch (e) {}
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="relative min-h-screen text-ink font-sans">

      {/* Animated Pattern Waves Background */}
      <div
        className="fixed inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <PatternWaves
          preset="silk"
          pattern="dot"
          wave="silk"
          color="#d2ff00"
          backgroundColor="rgba(0,0,0,0)"
          opacity={0.85}
          speed={0.35}
          spacing={9}
          depth={0.95}
          shine={0.8}
          contrast={1.2}
          interactive={true}
          cursorSize={50}
          cursorStrength={0.6}
          fade="edges"
          intro={true}
        />
      </div>

      {/* Portfolio Content */}
      <div className="relative z-10">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-accent focus:px-4 focus:py-2 focus:text-on-accent"
        >
          Skip to content
        </a>

        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <main id="main">
          <Hero />
          <Projects />
          <About />
          <Skills />
          <Experience />
          <ProblemSolving />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}
