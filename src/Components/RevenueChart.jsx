import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from 'recharts';

const data = [
  { month: 'Jan', revenue: 42, expenses: 28 },
  { month: 'Feb', revenue: 52.8, expenses: 31.2 },
  { month: 'Mar', revenue: 47.6, expenses: 29.8 },
  { month: 'Apr', revenue: 61.4, expenses: 34.6 },
  { month: 'May', revenue: 55, expenses: 31 },
  { month: 'Jun', revenue: 72.8, expenses: 38.4 },
  { month: 'Jul', revenue: 68, expenses: 36 },
  { month: 'Aug', revenue: 81, expenses: 41 },
  { month: 'Sep', revenue: 76, expenses: 39 },
  { month: 'Oct', revenue: 89, expenses: 45 },
  { month: 'Nov', revenue: 95, expenses: 48 },
  { month: 'Dec', revenue: 104, expenses: 51 },
];

// Custom Tooltip Matching Screenshot Design
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const revenueVal = payload.find((p) => p.dataKey === 'revenue')?.value;
    const expensesVal = payload.find((p) => p.dataKey === 'expenses')?.value;

    return (
      <div className="rounded-xl border border-white/10 bg-[#161920]/95 p-3.5 shadow-2xl backdrop-blur-md">
        <p className="mb-2 text-xs font-semibold text-slate-400">{label}</p>
        <div className="flex items-center justify-between gap-6 font-mono text-xs font-bold text-[#5eead4]">
          <span className="font-sans font-normal text-slate-300">Revenue:</span>
          <span>${revenueVal}k</span>
        </div>
        <div className="mt-1 flex items-center justify-between gap-6 font-mono text-xs font-bold text-[#818cf8]">
          <span className="font-sans font-normal text-slate-300">Expenses:</span>
          <span>${expensesVal}k</span>
        </div>
      </div>
    );
  }
  return null;
};

const RevenueChart = () => {
  return (
    <div className="w-full rounded-2xl border border-white/10 bg-[#0c0e12] p-6 shadow-xl">
      {/* Header Section */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-slate-100">Revenue vs Expenses</h3>
          <p className="text-xs text-slate-500">Full year 2024</p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 text-xs font-medium">
          <div className="flex items-center gap-2 text-slate-300">
            <span className="h-2.5 w-2.5 rounded-sm bg-[#5eead4]" />
            <span>Revenue</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <span className="h-2.5 w-2.5 rounded-sm bg-[#818cf8]" />
            <span>Expenses</span>
          </div>
        </div>
      </div>

      {/* Chart Container */}
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              {/* Revenue Area Gradient */}
              <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#5eead4" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#5eead4" stopOpacity={0.0} />
              </linearGradient>

              {/* Expenses Area Gradient */}
              <linearGradient id="expensesGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#818cf8" stopOpacity={0.25} />
                <stop offset="100%" stopColor="#818cf8" stopOpacity={0.0} />
              </linearGradient>
            </defs>

            {/* Dashed Horizontal Gridlines */}
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1e293b" />

            {/* Axes */}
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#64748b', fontSize: 12 }}
              tickFormatter={(val) => `$${val}k`}
              domain={[0, 120]}
              ticks={[0, 30, 60, 90, 120]}
            />

            {/* Hover Vertical Line & Tooltip */}
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: '#f8fafc', strokeWidth: 1.5, strokeOpacity: 0.8 }}
            />

            {/* Smooth Areas */}
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#5eead4"
              strokeWidth={2.5}
              fill="url(#revenueGrad)"
              activeDot={{ r: 6, fill: '#5eead4', stroke: '#ffffff', strokeWidth: 2 }}
            />
            <Area
              type="monotone"
              dataKey="expenses"
              stroke="#818cf8"
              strokeWidth={2.5}
              fill="url(#expensesGrad)"
              activeDot={{ r: 6, fill: '#818cf8', stroke: '#ffffff', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default RevenueChart;