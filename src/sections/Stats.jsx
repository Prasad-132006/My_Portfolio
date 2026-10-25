import React from 'react';
import { motion } from 'framer-motion';
import { stats } from '../data/portfolio';

export default function Stats() {
  return (
    <section className="py-10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 dark:divide-white/10">
            {stats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`flex flex-col items-center text-center ${idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-accent-purple to-accent-cyan dark:from-white dark:via-purple-200 dark:to-accent-cyan bg-clip-text text-transparent font-mono">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-semibold text-slate-800 dark:text-slate-200">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-dark-muted mt-0.5">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
