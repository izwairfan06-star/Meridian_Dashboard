import React, { useState } from 'react';

const data = [
  { month: 'Jan', revenue: 41.2 },
  { month: 'Feb', revenue: 52.8 },
  { month: 'Mar', revenue: 47.5 },
  { month: 'Apr', revenue: 61.4 },
  { month: 'May', revenue: 55.0 },
  { month: 'Jun', revenue: 72.3 },
  { month: 'Jul', revenue: 67.8 },
  { month: 'Aug', revenue: 81.5 },
  { month: 'Sep', revenue: 76.2 },
  { month: 'Oct', revenue: 89.6 },
  { month: 'Nov', revenue: 95.4 },
  { month: 'Dec', revenue: 102.4 },
];

const MAX_VALUE = 120;
const SVG_WIDTH = 340;
const SVG_HEIGHT = 160;
const Y_PADDING = 10;

export default function MonthlyRevenueChart() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const yAxisTicks = ['$120k', '$90k', '$60k', '$30k', '$0k'];
  const xAxisTicks = ['Feb', 'Apr', 'Jun', 'Aug', 'Oct', 'Dec'];

  const points = data.map((d, index) => {
    const x = (index / (data.length - 1)) * SVG_WIDTH;
    const usableHeight = SVG_HEIGHT - Y_PADDING * 2;
    const y = SVG_HEIGHT - Y_PADDING - (d.revenue / MAX_VALUE) * usableHeight;
    return { ...d, x, y };
  });

  const pathD = points.reduce((acc, point, index) => {
    return index === 0 ? `M ${point.x},${point.y}` : `${acc} L ${point.x},${point.y}`;
  }, '');

  return (
    <div className="w-full bg-[#13151b] border border-[#1e222d] rounded-2xl p-5 shadow-2xl relative select-none">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-bold tracking-tight text-white">Monthly Revenue Trend</h2>
        <p className="text-xs text-gray-400 mt-0.5">Jan – Dec 2024</p>
      </div>

      {/* Chart Container */}
      <div className="relative flex">
        {/* Y-Axis Labels */}
        <div className="flex flex-col justify-between pr-2 text-xs text-gray-400 font-medium h-[160px] text-right w-10">
          {yAxisTicks.map((tick) => (
            <span key={tick}>{tick}</span>
          ))}
        </div>

        {/* Graph Plot Area */}
        <div className="relative flex-1 h-[160px]">
          {/* Background Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {yAxisTicks.map((_, i) => (
              <div key={i} className="w-full border-b border-dashed border-[#232733]" />
            ))}
          </div>

          {/* SVG Line & Data Points */}
          <svg
            viewBox={`0 0 ${SVG_WIDTH} ${SVG_HEIGHT}`}
            className="w-full h-full overflow-visible relative z-10"
          >
            {/* Active Vertical Line */}
            {hoveredIndex !== null && (
              <line
                x1={points[hoveredIndex].x}
                y1={0}
                x2={points[hoveredIndex].x}
                y2={SVG_HEIGHT}
                stroke="#ffffff"
                strokeWidth="1.5"
                opacity="0.8"
              />
            )}

            {/* Path */}
            <path
              d={pathD}
              fill="none"
              stroke="#50e3c2"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Points */}
            {points.map((point, i) => {
              const isHovered = hoveredIndex === i;
              return (
                <g key={i}>
                  <circle
                    cx={point.x}
                    cy={point.y}
                    r={isHovered ? 6 : 3.5}
                    fill={isHovered ? '#ffffff' : '#50e3c2'}
                    stroke={isHovered ? '#50e3c2' : 'none'}
                    strokeWidth={isHovered ? 2.5 : 0}
                    className="transition-all duration-150"
                  />
                  <rect
                    x={point.x - SVG_WIDTH / (data.length * 2)}
                    y={0}
                    width={SVG_WIDTH / data.length}
                    height={SVG_HEIGHT}
                    fill="transparent"
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(i)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  />
                </g>
              );
            })}
          </svg>

          {/* Floating Tooltip */}
          {hoveredIndex !== null && (
            <div
              className={`absolute z-30 top-1/2 -translate-y-1/2 bg-[#1a1c23] border border-[#2d313e] rounded-xl p-3 shadow-2xl transition-all duration-150 pointer-events-none w-40 ${
                hoveredIndex > 5 ? 'right-[5%]' : 'left-[20%]'
              }`}
            >
              <div className="text-xs font-semibold text-gray-400 mb-1">
                {data[hoveredIndex].month}
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-[#50e3c2]">
                <span>Revenue:</span>
                <span>${data[hoveredIndex].revenue}k</span>
              </div>
            </div>
          )}

          {/* X-Axis Labels */}
          <div className="flex justify-between text-xs text-gray-400 font-medium mt-2 px-1">
            {xAxisTicks.map((month) => (
              <span key={month}>{month}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}