import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 z-50 w-full border-b border-white/[0.07] bg-[#0d0f12]/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left Side: Brand Logo & Main Nav Links */}
        <div className="flex items-center gap-8">
          <div className="flex cursor-pointer items-center gap-2 font-sans text-lg font-bold tracking-tight text-[#f1f5f9]">
            <span className="text-base text-[#38bdf8]">✦</span> Meridian
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center gap-6 text-sm font-medium text-slate-400 md:flex">
            <a href="#dashboard" className="text-[#f8fafc] transition-colors hover:text-[#38bdf8]">
              Dashboard
            </a>
            <a href="#analytics" className="transition-colors hover:text-[#f8fafc]">
              Analytics
            </a>
            <a href="#projects" className="transition-colors hover:text-[#f8fafc]">
              Projects
            </a>
            <a href="#settings" className="transition-colors hover:text-[#f8fafc]">
              Settings
            </a>
          </div>
        </div>

        {/* Right Side: Date, Bell, Avatar & Hamburger */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Date Display (Hidden on Mobile) */}
          <div className="hidden rounded-full border border-white/[0.05] bg-white/[0.03] px-3 py-1.5 text-xs font-medium tracking-wide text-[#64748b] lg:block">
            Mon, Jul 20
          </div>

          {/* Notification Button */}
          <div className="relative flex items-center">
            <button
              type="button"
              className="flex items-center justify-center rounded-full p-2 text-[#94a3b8] transition-all duration-200 hover:bg-white/[0.06] hover:text-[#f8fafc] focus:outline-none focus:ring-2 focus:ring-[#38bdf8]/50"
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
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-gradient-to-br from-[#1e293b] to-[#0f172a] text-xs font-semibold text-[#38bdf8] transition-all duration-200 hover:scale-[1.04] hover:border-[#38bdf8] focus:outline-none"
            aria-label="User menu"
          >
            JM
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/[0.06] hover:text-white md:hidden"
            aria-label="Toggle Navigation"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Dropdown */}
      {isMobileMenuOpen && (
        <div className="border-t border-white/[0.07] bg-[#0d0f12] px-4 pt-3 pb-4 md:hidden">
          <div className="flex flex-col gap-2 text-sm font-medium text-slate-300">
            <a
              href="#dashboard"
              className="rounded-lg bg-white/[0.05] px-3 py-2 text-[#38bdf8]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </a>
            <a
              href="#analytics"
              className="rounded-lg px-3 py-2 transition-colors hover:bg-white/[0.03] hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Analytics
            </a>
            <a
              href="#projects"
              className="rounded-lg px-3 py-2 transition-colors hover:bg-white/[0.03] hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#settings"
              className="rounded-lg px-3 py-2 transition-colors hover:bg-white/[0.03] hover:text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Settings
            </a>
          </div>

          {/* Mobile Date Display */}
          <div className="mt-4 border-t border-white/[0.05] pt-3 text-xs font-medium text-slate-500">
            Today: Mon, Jul 20
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;