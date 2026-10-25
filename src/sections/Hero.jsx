import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, projects } from '../data/portfolio';
import { reveal, stagger, useMotionSafe } from '../utils/motion';

export default function Hero() {
  const { initial, reduce } = useMotionSafe();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40">
      <div className="page-pad">
        <motion.div
          variants={stagger}
          initial={initial}
          animate="visible"
          className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12"
        >
          <div className="lg:col-span-10">
            <motion.div variants={reveal} className="mb-10 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />
              <p className="label">Software Developer · {personalInfo.location}</p>
            </motion.div>

            <motion.h1
              variants={reveal}
              className="max-w-[15ch] text-[clamp(2.8rem,8.2vw,7.5rem)] font-medium leading-[0.91] tracking-[-0.065em] text-ink"
            >
              {personalInfo.heroHeadline}
            </motion.h1>

            <motion.p
              variants={reveal}
              className="mt-8 max-w-lg text-base leading-relaxed text-muted sm:text-lg"
            >
              {personalInfo.heroDescription}
            </motion.p>

            <motion.div variants={reveal} className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex items-center bg-accent px-5 py-3 label text-on-accent transition-opacity hover:opacity-85"
              >
                Explore my work
              </button>
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="link-underline label text-ink"
              >
                Contact me
              </button>
            </motion.div>
          </div>

          <motion.aside variants={reveal} className="lg:col-span-2 lg:pb-1">
            <p className="label leading-relaxed">Independent developer<br />Based in {personalInfo.location}</p>
          </motion.aside>
        </motion.div>
      </div>
    </section>
  );
}
