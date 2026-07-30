import React from 'react'
const AccountData=[{
    company: "Meridian Software",
    contact:"billing@meridian.io",
    plan:"Enterprise",
    Mrr:"$4,100",
    joined:"Mar 2024",
    status: "active"
},{
    company: "Helix Dynamics",
    contact: "ops@helixdynamics.com",
    plan: "Growth",
    Mrr: "$1,450",
    joined: "Jun 2023",
    status: "active"
  },
  {
    company: "Nova Analytics",
    contact: "finance@novaanalytics.co",
    plan: "Growth",
    Mrr: "$1,450",
    joined: "Aug 2023",
    status: "active"
  },
  {
    company: "Apex Solutions",
    contact: "accounts@apexsol.com",
    plan: "Enterprise",
    Mrr: "$4,100",
    joined: "Jan 2023",
    status: "active"
  },
  {
    company: "Stratum Labs",
    contact: "hello@stratumlabs.io",
    plan: "Starter",
    Mrr: "$290",
    joined: "Oct 2024",
    status: "churned"
  },
  {
    company: "Cascade Group",
    contact: "billing@cascadegroup.com",
    plan: "Growth",
    Mrr: "$1,450",
    joined: "Apr 2023",
    status: "active"
  },
  {
    company: "Vortex Media",
    contact: "admin@vortexmedia.net",
    plan: "Starter",
    Mrr: "$290",
    joined: "Nov 2024",
    status: "trial"
  },
  {
    company: "Pinnacle Tech",
    contact: "invoices@pinnacletech.io",
    plan: "Enterprise",
    Mrr: "$4,100",
    joined: "Feb 2023",
    status: "active"
  }]
const PlanBadge = ({ plan }) => {
  // Styles based on the plan type matching the image colors
  const planStyles = {
    Growth: 'bg-[#18142b] text-[#818cf8]',      // Purple/Indigo tint
    Enterprise: 'bg-[#111c33] text-[#38bdf8]',  // Blue tint
    Starter: 'bg-[#22272e] text-[#9ca3af]',     // Muted Gray tint
  };

  const currentStyle = planStyles[plan] || 'bg-gray-800 text-gray-300';

  return (
    <span
      className={`inline-block px-3 py-1 text-xs font-mono rounded-md border border-white/5 ${currentStyle}`}
    >
      {plan}
    </span>
  );
};
const AccountDirectory = () => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0c0e12] p-6 shadow-xl">
    {/* Title & Subtitle */}
      <div className="mb-6">
        <h3 className="text-base font-bold text-slate-100">AccountDirectory</h3>
      </div>
            <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-white/5 font-mono text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
              <th className="pb-3 pr-4 font-normal">COMPANY</th>
              <th className="pb-3 px-4 font-normal">CONTACT</th>
              <th className="pb-3 px-4 font-normal">PLAN</th>
              <th className="pb-3 px-4 font-normal">MRR</th>
              <th className="pb-3 px-4 font-normal">STATUS</th>
              <th className="pb-3 pl-4 text-right font-normal">JOINED</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-white/5 text-slate-300">
            {AccountData.map((item) => (
              <tr key={item.id} className="transition-colors hover:bg-white/[0.02]">
                <td className="py-4 px-4 font-mono font-bold text-slate-100 text-sm">
                  {item.company}
                </td>

                <td className="py-4 pr-4 font-mono text-slate-400" >
                  {item.contact}
                </td>

                {/* Amount */}
                <td className="py-4 px-4 font-mono font-bold text-slate-100 text-sm">
                  <PlanBadge plan={item.plan} />
                </td>

                {/* Method */}
                <td className="py-4 px-4 font-mono font-bold text-slate-100 text-sm">
                  {item.Mrr}
                </td>

                {/* Status Badge */}
                <td className="inline-block px-3 py-1 text-xs font-mono rounded-md bg-[#1a160d] text-[#eab308] border border-amber-500/10">
                  {item.status}
                </td>

                {/* Date */}
                <td className="py-4 pl-4 text-right font-mono text-slate-400 max-w-[80px] leading-tight">
                  {item.joined}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default AccountDirectory