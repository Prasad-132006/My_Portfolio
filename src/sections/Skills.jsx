import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/portfolio';
import { reveal, useMotionSafe } from '../utils/motion';

export default function Skills() {
  const { initial, viewport } = useMotionSafe();

  return (
    <section id="skills" className="section-space border-t border-line">
      <div className="page-pad">
        <p className="label">03 / Stack</p>
        <h2 className="mt-4 text-4xl font-medium tracking-[-0.05em] sm:text-6xl">Tools I work with</h2>
        <p className="mt-5 max-w-lg text-muted leading-relaxed">
          Languages, frameworks, and platforms I use to design, build, and ship software.
        </p>

        <div className="mt-16 grid grid-cols-1 gap-x-16 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              variants={reveal}
              initial={initial}
              whileInView="visible"
              viewport={viewport}
              transition={{ delay: idx * 0.04 }}
            >
              <p className="label border-t border-line pt-4">{cat.category}</p>
              <ul className="mt-4 space-y-2">
                {cat.skills.map((skill) => (
                  <li key={skill.name} className="text-[1.05rem] tracking-tight text-ink after:ml-3 after:text-muted after:content-['/'] last:after:content-none">
                    {skill.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
