import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-white/[0.07] bg-[#08090c] py-4 px-6 text-xs text-slate-500">
      <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
        
        {/* Left Side: Name, Dot, Version */}
        <div className="flex items-center gap-2 tracking-wider font-mono">
          <span className="font-semibold text-slate-400">MERIDIAN DASHBOARD</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-500">v2.4.1</span>
        </div>

        {/* Center / Right Links & Copyright */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a 
            href="#documentation" 
            className="transition-colors hover:text-slate-300"
          >
            Documentation
          </a>
          <a 
            href="#api" 
            className="transition-colors hover:text-slate-300"
          >
            API
          </a>
          <a 
            href="#status" 
            className="transition-colors hover:text-slate-300"
          >
            Status
          </a>
          <a 
            href="#support" 
            className="transition-colors hover:text-slate-300"
          >
            Support
          </a>

          <span className="hidden text-slate-600 sm:inline">•</span>

          <span className="text-slate-600">
            © {new Date().getFullYear()} Meridian
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;