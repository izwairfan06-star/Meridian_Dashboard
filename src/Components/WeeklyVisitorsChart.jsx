import React, { useState } from 'react';

const data = [
  { day: 'Mon', users: 4.2, sessions: 6.1 },
  { day: 'Tue', users: 5.8, sessions: 8.4 },
  { day: 'Wed', users: 5.2, sessions: 7.3 },
  { day: 'Thu', users: 6.7, sessions: 9.8 },
  { day: 'Fri', users: 7.4, sessions: 10.7 },
  { day: 'Sat', users: 3.2, sessions: 4.8 },
  { day: 'Sun', users: 2.9, sessions: 4.1 },
];

const MAX_VALUE = 12;

export default function WeeklyVisitorsChart() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const yAxisTicks = ['12k', '9k', '6k', '3k', '0k'];

  return (
    <div className="w-full bg-[#13151b] border border-[#1e222d] rounded-2xl p-5 shadow-2xl relative select-none">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-lg font-bold tracking-tight text-white">Weekly Visitors</h2>
        <p className="text-xs text-gray-400 mt-0.5">Users vs sessions this week</p>
      </div>

      {/* Chart Container */}
      <div className="relative flex">
        {/* Y-Axis Labels */}
        <div className="flex flex-col justify-between pr-2 text-xs text-gray-400 font-medium h-[200px] pb-6 pt-1 text-right w-7">
          {yAxisTicks.map((tick) => (
            <span key={tick}>{tick}</span>
          ))}
        </div>

        {/* Grid lines and Bars area */}
        <div className="relative flex-1 h-[200px] pb-6">
          {/* Background Grid Lines */}
          <div className="absolute inset-0 pb-6 flex flex-col justify-between pointer-events-none">
            {yAxisTicks.map((_, i) => (
              <div key={i} className="w-full border-b border-dashed border-[#232733]" />
            ))}
          </div>

          {/* Bars Group Container */}
          <div className="relative z-10 flex h-full justify-between items-end px-1">
            {data.map((item, index) => {
              const userHeight = `${(item.users / MAX_VALUE) * 100}%`;
              const sessionHeight = `${(item.sessions / MAX_VALUE) * 100}%`;
              const isHovered = hoveredIndex === index;

              return (
                <div
                  key={item.day}
                  className="relative flex flex-col items-center flex-1 h-full justify-end cursor-pointer group"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Hover Highlight Overlay */}
                  {isHovered && (
                    <div className="absolute top-0 bottom-6 inset-x-0 bg-[#3a3d46]/30 rounded-t-sm pointer-events-none" />
                  )}

                  {/* Bars wrapper */}
                  <div className="flex items-end gap-1 z-10 h-full w-full justify-center pb-0.5">
                    {/* Teal Bar */}
                    <div
                      className={`w-3 rounded-t-sm transition-all duration-200 ${
                        isHovered ? 'bg-[#5eead4]' : 'bg-[#40c4aa]'
                      }`}
                      style={{ height: userHeight }}
                    />
                    {/* Purple Bar */}
                    <div
                      className={`w-3 rounded-t-sm transition-all duration-200 ${
                        isHovered ? 'bg-[#818cf8]' : 'bg-[#5558ad]'
                      }`}
                      style={{ height: sessionHeight }}
                    />
                  </div>

                  {/* X-Axis Labels */}
                  <span className="absolute -bottom-6 text-xs text-gray-400 font-medium">
                    {item.day}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Floating Tooltip */}
          {hoveredIndex !== null && (
            <div
              className={`absolute z-30 top-1/2 -translate-y-1/2 bg-[#1a1c23] border border-[#2d313e] rounded-xl p-3 shadow-xl transition-all duration-150 pointer-events-none w-40 ${
                hoveredIndex > 3 ? 'left-4' : 'right-4'
              }`}
            >
              <div className="text-xs font-semibold text-gray-400 mb-1.5">
                {data[hoveredIndex].day}
              </div>
              <div className="flex items-center justify-between text-xs font-semibold text-[#40c4aa] mb-1">
                <span>Users:</span>
                <span>${data[hoveredIndex].users}k</span>
              </div>
              <div className="flex items-center justify-between text-xs font-semibold text-[#6a6dc9]">
                <span>Sessions:</span>
                <span>${data[hoveredIndex].sessions}k</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}