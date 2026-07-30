import React from 'react';

const sourcesData = [
  { label: 'Organic', value: '38.4%', percentage: 38.4, color: 'bg-[#5eead4]' }, // Cyan/Teal
  { label: 'Direct', value: '24.1%', percentage: 24.1, color: 'bg-[#818cf8]' },  // Indigo/Purple
  { label: 'Referral', value: '18.7%', percentage: 18.7, color: 'bg-[#f59e0b]' },// Orange
  { label: 'Social', value: '12.2%', percentage: 12.2, color: 'bg-[#f43f5e]' },  // Pink/Rose
  { label: 'Email', value: '6.6%', percentage: 6.6, color: 'bg-[#94a3b8]' },     // Slate
];

const TrafficSourcesCard = () => {
  return (
    <div className="w-full max-w-[340px] rounded-2xl border border-white/10 bg-[#0c0e12] p-6 shadow-xl">
      {/* Title & Subtitle */}
      <div className="mb-6">
        <h3 className="text-base font-bold text-slate-100">Traffic Sources</h3>
        <p className="mt-1 text-xs text-slate-500">Last 30 days</p>
      </div>

      {/* Breakdown List */}
      <div className="space-y-5">
        {sourcesData.map((source, index) => (
          <div key={index} className="space-y-2">
            {/* Label and Percentage Row */}
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-slate-400">{source.label}</span>
              <span className="font-mono text-slate-200">{source.value}</span>
            </div>

            {/* Custom Progress Bar Track */}
            <div className="h-1 w-full overflow-hidden rounded-full bg-[#1e232d]">
              {/* Animated/Filled Progress Bar */}
              <div
                className={`h-full rounded-full ${source.color} transition-all duration-500`}
                style={{ width: `${source.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrafficSourcesCard;