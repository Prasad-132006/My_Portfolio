import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { problemSolving, personalInfo } from '../data/portfolio';
import { isConfiguredUrl, withHttps } from '../utils/links';
import { reveal, useMotionSafe } from '../utils/motion';

export default function ProblemSolving() {
  const { initial, viewport } = useMotionSafe();
  const leetcode = isConfiguredUrl(problemSolving.leetcodeUrl)
    ? withHttps(problemSolving.leetcodeUrl)
    : isConfiguredUrl(personalInfo.leetcode)
      ? withHttps(personalInfo.leetcode)
      : null;

  return (
    <section id="problem-solving" className="section-space border-t border-line">
      <div className="page-pad">
        <p className="label">05 / DSA</p>
        <div className="mt-8 grid grid-cols-1 gap-16 lg:grid-cols-12">
          <motion.div
            variants={reveal}
            initial={initial}
            whileInView="visible"
            viewport={viewport}
            className="lg:col-span-6"
          >
            <h2 className="text-4xl font-medium tracking-[-0.05em] sm:text-6xl">Problem solving</h2>
            <p className="mt-6 max-w-md text-[1.05rem] leading-relaxed text-muted">
              {problemSolving.description}
            </p>
            {leetcode && (
              <a
                href={leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline label mt-8"
              >
                LeetCode profile
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
          </motion.div>

          <motion.div
            variants={reveal}
            initial={initial}
            whileInView="visible"
            viewport={viewport}
            className="lg:col-span-6"
          >
            <ul className="divide-y divide-line border-y border-line">
              {problemSolving.cards.map((card) => (
                <li key={card.title} className="py-6">
                  <h3 className="text-lg tracking-tight">{card.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{card.description}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
