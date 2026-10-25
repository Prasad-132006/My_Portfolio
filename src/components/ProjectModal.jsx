import React, { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { isConfiguredUrl, withHttps } from '../utils/links';

export default function ProjectModal({ project, isOpen, onClose }) {
  const reduce = useReducedMotion();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/50"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 max-h-[92vh] w-full max-w-3xl overflow-y-auto border border-line bg-canvas p-6 sm:p-10"
          >
            <button
              onClick={onClose}
              className="absolute right-5 top-5 text-muted hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label="Close project details"
            >
              <X className="h-5 w-5" />
            </button>

            <p className="label">
              {project.number} / {project.category}
            </p>
            <h2 id="project-modal-title" className="mt-3 max-w-[20ch] text-3xl font-medium tracking-tight">
              {project.title}
            </h2>
            <p className="mt-4 max-w-xl text-muted leading-relaxed">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {isConfiguredUrl(project.github) && (
                <a
                  href={withHttps(project.github)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline label"
                >
                  GitHub <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
              {isConfiguredUrl(project.liveDemo) && (
                <a
                  href={withHttps(project.liveDemo)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline label"
                >
                  Live demo <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              )}
            </div>

            <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-muted">
              {project.technologies.join('  ·  ')}
            </p>

            {project.modalDetails && (
              <div className="mt-10 space-y-8">
                <div>
                  <p className="label">Problem</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink">{project.modalDetails.problem}</p>
                </div>
                <div>
                  <p className="label">Solution</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink">{project.modalDetails.solution}</p>
                </div>
                <div>
                  <p className="label">Architecture</p>
                  <p className="mt-3 text-sm leading-relaxed text-ink">{project.modalDetails.architecture}</p>
                </div>
                {project.modalDetails.challenges?.length > 0 && (
                  <div>
                    <p className="label">Engineering notes</p>
                    <ul className="mt-3 space-y-2">
                      {project.modalDetails.challenges.map((challenge) => (
                        <li key={challenge} className="text-sm leading-relaxed text-ink">
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            <div className="mt-10 border-t border-line pt-8">
              <p className="label">Capabilities</p>
              <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li key={feature} className="text-sm leading-relaxed text-muted">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
