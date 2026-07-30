import React from 'react';

const StatCard = ({
  title = "TOTAL REVENUE",
  value = "$102,400",
  change = "8.4%",
  isPositive = true,
  comparisonText = "vs last month"
}) => {
  return (
    /* h-[140px] specifies the height, and w-full max-w-[320px] controls the width directly in classes */
    <div className="relative flex h-[140px] w-full max-w-[320px] flex-col justify-between overflow-hidden rounded-xl border border-[#1e293b]/60 bg-[#0c1015] p-5 shadow-lg transition-all duration-200 hover:border-emerald-500/30">
      
      {/* Subtle green ambient glow */}
      <div className="pointer-events-none absolute -top-10 -left-10 h-32 w-32 rounded-full bg-emerald-500/5 blur-2xl" />

      {/* Header Label */}
      <span className="font-mono text-xs font-semibold tracking-wider text-slate-400 uppercase">
        {title}
      </span>

      {/* Main Metric Value */}
      <div className="text-3xl font-bold tracking-tight text-[#5eead4]">
        {value}
      </div>

      {/* Indicator & Subtext */}
      <div className="flex items-center gap-1.5 text-xs">
        <span className={`flex items-center font-medium ${isPositive ? 'text-[#5eead4]' : 'text-rose-400'}`}>
          {isPositive ? '↑' : '↓'} {change}
        </span>
        <span className="text-slate-500">{comparisonText}</span>
      </div>

    </div>
  );
};

export default StatCard;