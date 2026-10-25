import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolio';
import { isConfiguredUrl, withHttps } from '../utils/links';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const github = isConfiguredUrl(personalInfo.github) ? withHttps(personalInfo.github) : null;
  const linkedin = isConfiguredUrl(personalInfo.linkedin) ? withHttps(personalInfo.linkedin) : null;

  return (
    <footer className="border-t border-line">
      <div className="page-pad flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="label text-muted">
          © {new Date().getFullYear()} {personalInfo.name}
        </p>
        <div className="flex flex-wrap items-center gap-6">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="link-underline label">
              GitHub
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="link-underline label">
              LinkedIn
            </a>
          )}
        </div>
      </div>

      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll back to top"
          className="fixed bottom-6 right-6 z-30 flex h-10 w-10 items-center justify-center border border-line bg-canvas text-ink hover:border-accent hover:text-accent"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}
    </footer>
  );
}
