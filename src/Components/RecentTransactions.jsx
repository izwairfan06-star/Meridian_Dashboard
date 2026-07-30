import React from 'react';

const transactions = [
  {
    id: 'TXN-8841',
    customer: 'Meridian Software',
    amount: '$12,400',
    method: 'Wire',
    status: 'completed',
    date: 'Dec 18, 2025',
  },
  {
    id: 'TXN-8840',
    customer: 'Helix Dynamics',
    amount: '$8,750',
    method: 'Card',
    status: 'completed',
    date: 'Dec 18, 2025',
  },
  {
    id: 'TXN-8839',
    customer: 'Nova Analytics',
    amount: '$3,200',
    method: 'Card',
    status: 'pending',
    date: 'Dec 17, 2025',
  },
  {
    id: 'TXN-8838',
    customer: 'Apex Solutions',
    amount: '$19,600',
    method: 'Wire',
    status: 'completed',
    date: 'Dec 17, 2025',
  },
  {
    id: 'TXN-8837',
    customer: 'Stratum Labs',
    amount: '$5,400',
    method: 'Card',
    status: 'failed',
    date: 'Dec 16, 2025',
  },
];

const StatusBadge = ({ status }) => {
  const styles = {
    completed: 'bg-[#062c22] text-[#34d399] border-[#054f3b]',
    pending: 'bg-[#2a1d08] text-[#fbbf24] border-[#4d3205]',
    failed: 'bg-[#2d1215] text-[#f87171] border-[#541a1c]',
  };

  return (
    <span
      className={`inline-block rounded-md border px-2.5 py-1 font-mono text-xs font-medium lowercase ${
        styles[status] || styles.completed
      }`}
    >
      {status}
    </span>
  );
};

const RecentTransactions = () => {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0c0e12] p-6 shadow-xl">
      {/* Title & Subtitle */}
      <div className="mb-6">
        <h3 className="text-base font-bold text-slate-100">Recent Transactions</h3>
        <p className="mt-0.5 text-xs text-slate-500">Latest 5 entries</p>
      </div>

      {/* Table Container with Horizontal Scroll for Mobile */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          {/* Table Header */}
          <thead>
            <tr className="border-b border-white/5 font-mono text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
              <th className="pb-3 pr-4 font-normal">TRANSACTION ID</th>
              <th className="pb-3 px-4 font-normal">CUSTOMER</th>
              <th className="pb-3 px-4 font-normal">AMOUNT</th>
              <th className="pb-3 px-4 font-normal">METHOD</th>
              <th className="pb-3 px-4 font-normal">STATUS</th>
              <th className="pb-3 pl-4 text-right font-normal">DATE</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-white/5 text-slate-300">
            {transactions.map((item) => (
              <tr key={item.id} className="transition-colors hover:bg-white/[0.02]">
                {/* Transaction ID */}
                <td className="py-4 pr-4 font-mono text-slate-400">
                  {item.id}
                </td>

                {/* Customer */}
                <td className="py-4 px-4 font-bold text-slate-100 max-w-[140px] leading-snug">
                  {item.customer}
                </td>

                {/* Amount */}
                <td className="py-4 px-4 font-mono font-bold text-slate-100 text-sm">
                  {item.amount}
                </td>

                {/* Method */}
                <td className="py-4 px-4 text-slate-400">
                  {item.method}
                </td>

                {/* Status Badge */}
                <td className="py-4 px-4">
                  <StatusBadge status={item.status} />
                </td>

                {/* Date */}
                <td className="py-4 pl-4 text-right font-mono text-slate-400 max-w-[80px] leading-tight">
                  {item.date}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentTransactions;