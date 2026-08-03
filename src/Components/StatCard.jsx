import React from 'react';

const StatCard = ({
  title = "TOTAL REVENUE",
  value = "$102,400",
  change = "8.4%",
  isPositive = true,
  comparisonText = "vs last month",
  className = ""
}) => {
  return (
    <div className={`relative flex min-h-[130px] w-full flex-col justify-between overflow-hidden rounded-xl border border-slate-800/80 bg-[#0c1015] p-4 sm:p-5 shadow-lg transition-all duration-200 hover:border-emerald-500/30 ${className}`}>
      
      {/* Subtle background glow */}
      <div 
        aria-hidden="true" 
        className={`pointer-events-none absolute -top-10 -left-10 h-32 w-32 rounded-full blur-2xl ${
          isPositive ? 'bg-emerald-500/5' : 'bg-rose-500/5'
        }`} 
      />

      {/* Header Label */}
      <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-wider text-slate-400 uppercase truncate">
        {title}
      </span>

      {/* Main Metric Value */}
      <div className="my-1.5 text-2xl sm:text-3xl font-bold tracking-tight text-[#5eead4] truncate">
        {value}
      </div>

      {/* Indicator & Subtext */}
      <div className="flex flex-wrap items-center gap-1.5 text-[11px] sm:text-xs">
        <span className={`inline-flex items-center font-semibold ${isPositive ? 'text-[#5eead4]' : 'text-rose-400'}`}>
          <span className="mr-0.5">{isPositive ? '↑' : '↓'}</span>
          {change}
        </span>
        <span className="text-slate-500 truncate">{comparisonText}</span>
      </div>

    </div>
  );
};

export default StatCard;