import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 z-50 flex h-16 w-full items-center justify-between border-b border-white/[0.07] bg-[#0d0f12]/85 px-4 backdrop-blur-md sm:px-6 lg:px-8">
      {/* Left Side: Brand Logo */}
      <div className="flex cursor-pointer items-center gap-2 font-sans text-[18px] font-bold tracking-[-0.3px] text-[#f1f5f9]">
        <span className="text-[16px] text-[#38bdf8]">✦</span> Meridian
      </div>

      {/* Right Side: Date, Bell, and Avatar */}
      <div className="flex items-center gap-4 sm:gap-6">
        {/* Date Display */}
        <div className="hidden rounded-full border border-white/[0.05] bg-white/[0.03] px-3 py-1.5 text-[13px] font-medium tracking-[0.2px] text-[#64748b] sm:block">
          Mon, Jul 20
        </div>

        {/* Bell & Notification Wrapper */}
        <div className="relative flex items-center">
          <button
            type="button"
            className="flex items-center justify-center rounded-full p-2 text-[#94a3b8] transition-all duration-200 hover:bg-white/[0.06] hover:text-[#f8fafc] focus:outline-none"
            aria-label="Notifications"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
          </button>
          
          {/* Active Teal Notification Indicator */}
          <span className="pointer-events-none absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-[#2dd4bf] shadow-[0_0_8px_rgba(45,212,191,0.6)]" />
        </div>

        {/* User Avatar */}
        <div className="flex h-[36px] w-[36px] cursor-pointer items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-[13px] font-semibold text-[#38bdf8] transition-all duration-200 hover:scale-[1.04] hover:border-[#38bdf8]">
          JM
        </div>
      </div>
    </nav>
  );
};

export default Navbar;