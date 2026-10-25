import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Copy, Check, Terminal, Sparkles, Cpu } from 'lucide-react';

export default function CodeEditorCard() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('config');

  const configSnippet = `// prasad.config.ts
export const developer = {
  name: "Prasad Thorat",
  role: "Full Stack & AI/ML",
  languages: ["C++", "Java", "Python", "JS"],
  coreStack: ["React", "Next.js", "FastAPI"],
  focus: ["AI Agents", "RAG Pipelines", "APIs"],
  status: "Available for high-impact roles"
};`;

  const aiSnippet = `# inference_pipeline.py
import torch
from ai_engine import RAGModel

class IntelligentAgent:
    def __init__(self, mode="production"):
        self.pipeline = RAGModel.load("custom-weights")
        self.context_window = 128_000

    def solve(self, prompt: str) -> dict:
        return self.pipeline.generate(
            prompt,
            temperature=0.2,
            reasoning=True
        )`;

  const handleCopy = () => {
    const textToCopy = activeTab === 'config' ? configSnippet : aiSnippet;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Background glow behind code card */}
      <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple/30 via-accent-cyan/20 to-purple-600/30 rounded-2xl blur-xl opacity-60 dark:opacity-40 -z-10 animate-pulse-subtle" />

      {/* Floating Badges */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-5 -left-6 z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white dark:bg-dark-card/90 border border-slate-200 dark:border-accent-purple/30 shadow-lg shadow-purple-500/10 backdrop-blur-md"
      >
        <span className="w-2 h-2 rounded-full bg-accent-purple animate-ping" />
        <span className="text-xs font-mono font-medium text-purple-700 dark:text-purple-300">React</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -top-6 -right-4 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-dark-card/90 border border-slate-200 dark:border-accent-cyan/30 shadow-lg shadow-cyan-500/10 backdrop-blur-md"
      >
        <Sparkles className="w-3.5 h-3.5 text-accent-cyan" />
        <span className="text-xs font-mono font-medium text-cyan-700 dark:text-cyan-300">AI / ML</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -bottom-5 -left-4 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-dark-card/90 border border-slate-200 dark:border-emerald-500/30 shadow-lg shadow-emerald-500/10 backdrop-blur-md"
      >
        <span className="text-xs font-mono font-medium text-emerald-700 dark:text-emerald-400">Python</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute -bottom-5 right-2 z-20 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-dark-card/90 border border-slate-200 dark:border-blue-500/30 shadow-lg shadow-blue-500/10 backdrop-blur-md"
      >
        <span className="text-xs font-mono font-medium text-blue-700 dark:text-blue-400">PostgreSQL</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, -7, 0] }}
        transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
        className="absolute top-1/2 -right-8 -translate-y-1/2 z-20 hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-xl bg-white dark:bg-dark-card/90 border border-slate-200 dark:border-amber-500/30 shadow-lg backdrop-blur-md"
      >
        <span className="text-xs font-mono font-medium text-amber-700 dark:text-amber-400">Java</span>
      </motion.div>

      {/* Main Terminal Window Card */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="w-full rounded-2xl bg-slate-900 dark:bg-dark-card/95 border border-slate-700 dark:border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl"
      >
        {/* Window Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0B0F17] border-b border-white/5">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>

          {/* Editor Tabs */}
          <div className="flex items-center gap-1 bg-white/5 p-0.5 rounded-lg text-xs font-mono">
            <button
              onClick={() => setActiveTab('config')}
              className={`px-3 py-1 rounded-md transition-all ${
                activeTab === 'config'
                  ? 'bg-accent-purple/20 text-accent-purple font-medium border border-accent-purple/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              prasad.config.ts
            </button>
            <button
              onClick={() => setActiveTab('ai')}
              className={`px-3 py-1 rounded-md transition-all ${
                activeTab === 'ai'
                  ? 'bg-accent-cyan/20 text-accent-cyan font-medium border border-accent-cyan/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              inference_pipeline.py
            </button>
          </div>

          {/* Copy Button */}
          <button
            onClick={handleCopy}
            title="Copy code"
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Code Content */}
        <div className="p-4 sm:p-5 font-mono text-[13px] leading-relaxed overflow-x-auto text-slate-200">
          {activeTab === 'config' ? (
            <div className="space-y-1">
              <div className="text-slate-500">// prasad.config.ts</div>
              <div>
                <span className="text-purple-400">export const</span>{' '}
                <span className="text-cyan-300">developer</span> = &#123;
              </div>
              <div className="pl-4">
                <span className="text-slate-400">name:</span>{' '}
                <span className="text-emerald-400">"Prasad Thorat"</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">role:</span>{' '}
                <span className="text-emerald-400">"Full Stack & AI/ML"</span>,
              </div>
              <div className="pl-4">
                <span className="text-slate-400">languages:</span> [
                <span className="text-amber-300">"C++"</span>,{' '}
                <span className="text-amber-300">"Java"</span>,{' '}
                <span className="text-amber-300">"Python"</span>,{' '}
                <span className="text-amber-300">"JS"</span>],
              </div>
              <div className="pl-4">
                <span className="text-slate-400">coreStack:</span> [
                <span className="text-amber-300">"React"</span>,{' '}
                <span className="text-amber-300">"Next.js"</span>,{' '}
                <span className="text-amber-300">"FastAPI"</span>],
              </div>
              <div className="pl-4">
                <span className="text-slate-400">focus:</span> [
                <span className="text-amber-300">"AI Agents"</span>,{' '}
                <span className="text-amber-300">"RAG Pipelines"</span>,{' '}
                <span className="text-amber-300">"APIs"</span>],
              </div>
              <div className="pl-4">
                <span className="text-slate-400">status:</span>{' '}
                <span className="text-cyan-300">"Ready for opportunities"</span>
              </div>
              <div>&#125;;</div>
            </div>
          ) : (
            <div className="space-y-1">
              <div className="text-slate-500"># inference_pipeline.py</div>
              <div>
                <span className="text-purple-400">import</span>{' '}
                <span className="text-slate-200">torch</span>
              </div>
              <div>
                <span className="text-purple-400">from</span>{' '}
                <span className="text-slate-200">ai_engine</span>{' '}
                <span className="text-purple-400">import</span>{' '}
                <span className="text-cyan-300">RAGModel</span>
              </div>
              <div className="pt-2">
                <span className="text-purple-400">class</span>{' '}
                <span className="text-cyan-300">IntelligentAgent</span>:
              </div>
              <div className="pl-4">
                <span className="text-purple-400">def</span>{' '}
                <span className="text-blue-400">__init__</span>(self):
              </div>
              <div className="pl-8 text-slate-400">
                self.pipeline = RAGModel.<span className="text-blue-300">load</span>(<span className="text-emerald-400">"prod-v1"</span>)
              </div>
              <div className="pl-4 pt-1">
                <span className="text-purple-400">def</span>{' '}
                <span className="text-blue-400">generate_solution</span>(self, prompt: str):
              </div>
              <div className="pl-8 text-slate-400">
                <span className="text-purple-400">return</span> self.pipeline.<span className="text-blue-300">generate</span>(prompt, stream=<span className="text-amber-400">True</span>)
              </div>
            </div>
          )}
        </div>

        {/* Footer status bar */}
        <div className="flex items-center justify-between px-4 py-2 bg-[#0B0F17]/90 border-t border-white/5 text-[11px] font-mono text-slate-500">
          <div className="flex items-center gap-2">
            <Terminal className="w-3 h-3 text-emerald-400" />
            <span className="text-emerald-400 font-semibold">ONLINE</span>
            <span>UTF-8</span>
          </div>
          <div className="flex items-center gap-2">
            <span>TypeScript / Python</span>
            <span className="text-accent-purple font-medium">100% test coverage</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
