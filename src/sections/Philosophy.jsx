import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Layout, Code, CheckCircle2, Sparkles } from 'lucide-react';
import { developmentPhilosophy } from '../data/portfolio';

const iconMap = {
  Compass,
  Layout,
  Code,
  CheckCircle2
};

export default function Philosophy() {
  return (
    <section className="py-20 sm:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-600 dark:text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            How I Build
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-dark-muted">
            A disciplined, four-phase engineering approach ensuring robust architecture from inception to deployment.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full mx-auto mt-4" />
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {developmentPhilosophy.map((step, idx) => {
            const Icon = iconMap[step.icon] || Code;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-white/10 hover:border-accent-purple/40 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Step Number in watermark */}
                <div className="absolute top-2 right-4 font-mono text-4xl font-black text-slate-900/[0.05] dark:text-white/[0.04] select-none pointer-events-none">
                  {step.step}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-accent-purple">
                      PHASE {step.step}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-dark-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-white/5 flex items-center gap-1.5 text-[11px] font-mono text-cyan-600 dark:text-accent-cyan font-medium">
                  <span>Step {step.step} of 04</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
