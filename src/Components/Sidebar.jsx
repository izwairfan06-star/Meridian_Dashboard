import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiGrid, FiUsers, FiSettings, FiCreditCard } from 'react-icons/fi';
import { TbActivity } from 'react-icons/tb';

const Sidebar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Overview', path: '/', icon: FiGrid },
    { name: 'Analytics', path: '/Analytics', icon: TbActivity },
    { name: 'Customers', path: '/Customers', icon: FiUsers },
    { name: 'Transactions', path: '/Transaction', icon: FiCreditCard },
    { name: 'Settings', path: '/Settings', icon: FiSettings },
  ];

  return (
    <aside className="flex h-screen w-64 flex-col justify-between border-r border-white/[0.07] bg-[#08090c] p-4 text-slate-300 select-none">
      {/* Brand Header */}
      <div>
        <div className="flex items-center gap-3 px-2 py-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
            <TbActivity size={22} />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold text-slate-100 tracking-tight">Meridian</span>
            <span className="text-xs text-slate-500 font-medium">Dashboard</span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="mt-6 flex flex-col gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-white/[0.06] text-sky-400 font-semibold'
                    : 'text-slate-400 hover:bg-white/[0.03] hover:text-slate-200'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-sky-400' : 'text-slate-400'} />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* User Profile Section at Bottom */}
      <div className="flex items-center gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] p-3">
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border border-white/15 text-xs font-semibold text-sky-400">
          JM
        </div>
        <div className="flex flex-col overflow-hidden">
          <span className="truncate text-xs font-semibold text-slate-200">Jordan Mercer</span>
          <span className="truncate text-[11px] text-slate-500">jordan@meridian.io</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;