import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';
import { isPlaceholderText } from '../utils/links';
import { reveal, useMotionSafe } from '../utils/motion';

export default function Experience() {
  const { initial, viewport } = useMotionSafe();

  return (
    <section id="experience" className="section-space border-t border-line">
      <div className="page-pad">
        <p className="label">04 / Experience</p>
        <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-6xl">Experience</h2>
        <p className="mt-5 max-w-lg text-muted leading-relaxed">
          Roles and work I can stand behind. Company names and dates appear only when they are confirmed.
        </p>

        <div className="relative mt-16 max-w-3xl">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-line" aria-hidden />
          <div className="space-y-14">
            {experience.map((item, idx) => {
              const company = isPlaceholderText(item.company) ? null : item.company;
              const period = isPlaceholderText(item.period) ? null : item.period;
              const location = isPlaceholderText(item.location) ? null : item.location;

              return (
                <motion.article
                  key={`${item.role}-${idx}`}
                  variants={reveal}
                  initial={initial}
                  whileInView="visible"
                  viewport={viewport}
                  className="relative pl-8 sm:pl-10"
                >
                  <span className="absolute left-0 top-2 h-2 w-2 -translate-x-[3.5px] rounded-full bg-accent" />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    {item.type && <span className="label">{item.type}</span>}
                    {period && <span className="text-sm text-muted">{period}</span>}
                  </div>
                  <h3 className="mt-3 text-2xl font-medium tracking-tight">{item.role}</h3>
                  {(company || location) && (
                    <p className="mt-1 text-sm text-muted">
                      {[company, location].filter(Boolean).join(' · ')}
                    </p>
                  )}
                  <p className="mt-4 text-[0.98rem] leading-relaxed text-muted">{item.description}</p>
                  {item.contributions?.length > 0 && (
                    <ul className="mt-5 space-y-2">
                      {item.contributions.map((bullet) => (
                        <li key={bullet} className="text-sm leading-relaxed text-ink">
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.technologies?.length > 0 && (
                    <p className="mt-5 text-sm text-muted">{item.technologies.join('  ·  ')}</p>
                  )}
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
