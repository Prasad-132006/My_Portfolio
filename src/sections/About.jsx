import React from 'react';
import { motion } from 'framer-motion';
import { currently } from '../data/portfolio';
import { reveal, useMotionSafe } from '../utils/motion';

export default function About() {
  const { initial, viewport } = useMotionSafe();

  return (
    <section id="about" className="section-space border-t border-line">
      <div className="page-pad">
        <p className="label">02 / About</p>
        <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-12">
          <motion.div
            variants={reveal}
            initial={initial}
            whileInView="visible"
            viewport={viewport}
            className="lg:col-span-7"
          >
            <h2 className="max-w-[16ch] text-3xl font-medium leading-tight tracking-tight sm:text-5xl">
              I&apos;m Prasad — a developer who enjoys turning ideas into working software.
            </h2>
            <p className="mt-8 max-w-xl text-[1.05rem] leading-relaxed text-muted">
              I work across the stack: interfaces, APIs, databases, and AI-powered features. I care about
              clear architecture and building products that are actually useful — from travel planning and
              agricultural tools to climate models and security checks.
            </p>
          </motion.div>

          <motion.aside
            variants={reveal}
            initial={initial}
            whileInView="visible"
            viewport={viewport}
            className="lg:col-span-5 lg:pt-3"
          >
            <p className="label mb-6">Currently</p>
            <ul className="divide-y divide-line border-y border-line">
              {currently.map((item) => (
                <li key={item.label} className="grid grid-cols-[7rem_1fr] gap-4 py-5">
                  <span className="label pt-0.5">{item.label}</span>
                  <span className="text-sm leading-relaxed text-ink">{item.value}</span>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}
