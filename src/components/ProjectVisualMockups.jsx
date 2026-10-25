import React from 'react';
import { 
  MapPin, Calendar, Compass, Sparkles, Droplets, Sun, Wind, 
  TrendingUp, AlertTriangle, ShieldCheck, ShieldAlert, CheckCircle2,
  ExternalLink, ArrowRight, Activity, Thermometer
} from 'lucide-react';

export function TrailAIVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#0D131F] to-[#151D2C] p-4 sm:p-5 rounded-xl border border-purple-500/20 text-slate-200 font-sans flex flex-col justify-between select-none">
      {/* Top Bar */}
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-accent-purple/20 flex items-center justify-center border border-accent-purple/40">
            <Compass className="w-4 h-4 text-accent-purple" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Tokyo & Kyoto Cultural Expedition</div>
            <div className="text-[10px] text-slate-400">7 Days • Personalized Pace: Moderate • Budget: Optimized</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-purple-500/15 text-purple-300 border border-purple-500/30">
          RAG Generated
        </span>
      </div>

      {/* Itinerary Timeline Preview */}
      <div className="my-3 space-y-2.5">
        <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between hover:border-purple-500/30 transition-colors">
          <div className="flex items-center gap-2.5">
            <span className="text-[11px] font-mono text-accent-cyan font-semibold">DAY 01</span>
            <div className="h-3 w-[1px] bg-white/10" />
            <span className="text-xs text-slate-200">Shinjuku Gyoen & Historic Asakusa</span>
          </div>
          <span className="text-[10px] text-slate-400 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" /> 98% Match
          </span>
        </div>

        <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-[11px] font-mono text-purple-300 font-semibold">DAY 02</span>
            <div className="h-3 w-[1px] bg-white/10" />
            <span className="text-xs text-white font-medium">Mount Fuji Scenic Express & Ryokan</span>
          </div>
          <span className="text-[10px] text-purple-300 font-mono">Curated Stop</span>
        </div>

        <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span className="text-[11px] font-mono text-slate-400 font-semibold">DAY 03</span>
            <div className="h-3 w-[1px] bg-white/10" />
            <span className="text-xs text-slate-300">Fushimi Inari Taisha & Bamboo Grove</span>
          </div>
          <span className="text-[10px] text-slate-400">Local Guide AI</span>
        </div>
      </div>

      {/* Interactive AI Chat Prompt Pill */}
      <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-2 text-slate-400">
          <Sparkles className="w-3 h-3 text-accent-purple" />
          <span className="truncate">"Add quiet vegetarian matcha spots nearby"</span>
        </div>
        <span className="text-[10px] text-accent-purple font-mono font-medium">Instant Recalculate</span>
      </div>
    </div>
  );
}

export function AgroAIVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#091512] to-[#12231E] p-4 sm:p-5 rounded-xl border border-emerald-500/20 text-slate-200 font-sans flex flex-col justify-between select-none">
      {/* Header Status */}
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center border border-emerald-500/40">
            <Droplets className="w-4 h-4 text-emerald-400" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Smart Irrigation Zone A-4</div>
            <div className="text-[10px] text-slate-400">Crop: Wheat (Tillering Stage) • Clay Loam</div>
          </div>
        </div>
        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Optimal
        </span>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-3 gap-2 my-3">
        <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-center">
          <div className="text-[10px] text-slate-400">Soil Moisture</div>
          <div className="text-base font-bold text-emerald-400 mt-0.5">38.4%</div>
          <div className="text-[9px] text-slate-400">Target: 35-42%</div>
        </div>
        <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-center">
          <div className="text-[10px] text-slate-400">Precipitation</div>
          <div className="text-base font-bold text-cyan-300 mt-0.5">0.2 mm</div>
          <div className="text-[9px] text-slate-400">Next 48 hrs</div>
        </div>
        <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 text-center">
          <div className="text-[10px] text-slate-400">Water Saved</div>
          <div className="text-base font-bold text-amber-300 mt-0.5">27.5%</div>
          <div className="text-[9px] text-slate-400">vs Fixed Schedule</div>
        </div>
      </div>

      {/* Next Recommendation banner */}
      <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-2">
          <Sun className="w-3.5 h-3.5 text-amber-400" />
          <span className="text-slate-200">Recommended Cycle: <strong>05:30 AM Tomorrow</strong></span>
        </div>
        <span className="text-[10px] font-mono text-emerald-300">Duration: 42m</span>
      </div>
    </div>
  );
}

export function HeatwaveVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#181109] to-[#25170E] p-4 sm:p-5 rounded-xl border border-amber-500/20 text-slate-200 font-sans flex flex-col justify-between select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-500/20 flex items-center justify-center border border-amber-500/40">
            <Thermometer className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Climatic Anomaly Classifier</div>
            <div className="text-[10px] text-slate-400">Model: Random Forest & Gradient Boosted Regressor</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-amber-500/15 text-amber-300 border border-amber-500/30">
          AUC-ROC: 0.942
        </span>
      </div>

      {/* Chart visualization */}
      <div className="my-2 p-2.5 rounded-lg bg-black/30 border border-white/5">
        <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
          <span>7-Day Rolling Max Temp vs 95th Percentile Baseline</span>
          <span className="text-rose-400 font-mono font-semibold">+4.8°C Delta</span>
        </div>
        
        {/* SVG Sparkline Graph */}
        <div className="h-16 w-full flex items-end">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 240 60" preserveAspectRatio="none">
            {/* Baseline threshold */}
            <line x1="0" y1="36" x2="240" y2="36" stroke="#f59e0b" strokeDasharray="3 3" strokeWidth="1" opacity="0.6" />
            {/* Heat curve */}
            <path
              d="M0,45 Q40,42 80,38 T140,22 T190,12 T240,16"
              fill="none"
              stroke="#fb7185"
              strokeWidth="2.5"
            />
            {/* Anomaly Highlight */}
            <circle cx="190" cy="12" r="3.5" fill="#f43f5e" className="animate-pulse" />
          </svg>
        </div>
        <div className="flex justify-between text-[9px] text-slate-500 font-mono mt-1">
          <span>Day -6</span>
          <span>Day -3</span>
          <span>Onset (T=0)</span>
          <span>Forecast +24h</span>
        </div>
      </div>

      {/* Warning status */}
      <div className="flex items-center justify-between text-[11px] pt-1">
        <span className="text-slate-400 flex items-center gap-1.5">
          <Activity className="w-3.5 h-3.5 text-amber-400" /> Heatwave Probability: <strong className="text-white">88.7%</strong>
        </span>
        <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-rose-500/20 text-rose-300 border border-rose-500/40">
          Severe Alert Class
        </span>
      </div>
    </div>
  );
}

export function ScamDetectorVisual() {
  return (
    <div className="w-full h-full bg-gradient-to-br from-[#08131C] to-[#0E1F2E] p-4 sm:p-5 rounded-xl border border-cyan-500/20 text-slate-200 font-sans flex flex-col justify-between select-none">
      {/* Header */}
      <div className="flex items-center justify-between pb-3 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-cyan-500/20 flex items-center justify-center border border-cyan-500/40">
            <ShieldAlert className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Heuristic Threat Inspector</div>
            <div className="text-[10px] text-slate-400">NLP Urgency + Malicious URL Dissector</div>
          </div>
        </div>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-rose-500/15 text-rose-300 border border-rose-500/30">
          Phishing Detected
        </span>
      </div>

      {/* Inspected Payload Box */}
      <div className="my-2.5 p-2.5 rounded-lg bg-black/40 border border-white/5 space-y-1.5 font-mono text-[11px]">
        <div className="text-slate-400 text-[10px] uppercase tracking-wider">Inspected Message Payload:</div>
        <div className="text-slate-300 leading-snug">
          "URGENT: Your account has been locked. Click <span className="text-rose-400 underline decoration-rose-500/50 bg-rose-500/10 px-1 rounded">http://secure-bank-login-verify.xyz/auth</span> to prevent immediate closure."
        </div>
      </div>

      {/* Detection Indicators */}
      <div className="grid grid-cols-2 gap-2 text-[10px]">
        <div className="p-2 rounded bg-white/5 border border-white/5 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-500" />
          <span className="text-slate-300">Urgency Heuristic: <strong>96%</strong></span>
        </div>
        <div className="p-2 rounded bg-white/5 border border-white/5 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-rose-500" />
          <span className="text-slate-300">Typosquatting Risk: <strong>High</strong></span>
        </div>
      </div>

      {/* Safety Summary */}
      <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px]">
        <span className="text-slate-400">Confidence Score: <strong className="text-cyan-400">99.1%</strong></span>
        <span className="text-[10px] font-mono text-slate-400">FastAPI ML Endpoint</span>
      </div>
    </div>
  );
}

export function ProjectVisual({ projectId }) {
  switch (projectId) {
    case 'trailai':
      return <TrailAIVisual />;
    case 'agroai':
      return <AgroAIVisual />;
    case 'heatwave-prediction':
      return <HeatwaveVisual />;
    case 'scam-detector':
      return <ScamDetectorVisual />;
    default:
      return null;
  }
}
