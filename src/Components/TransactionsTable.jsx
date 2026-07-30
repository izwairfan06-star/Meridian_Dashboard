import React, { useState } from 'react';

// Sample transactions dataset matching the image layout
const INITIAL_TRANSACTIONS = [
  {
    id: 'TXN-8841',
    customer: 'Meridian\nSoftware',
    amount: '$12,400',
    method: 'Wire',
    status: 'completed',
    date: 'Dec 18, 2024',
  },
  {
    id: 'TXN-8840',
    customer: 'Helix\nDynamics',
    amount: '$8,750',
    method: 'Card',
    status: 'completed',
    date: 'Dec 18, 2024',
  },
  {
    id: 'TXN-8839',
    customer: 'Nova\nAnalytics',
    amount: '$3,200',
    method: 'Card',
    status: 'pending',
    date: 'Dec 17, 2024',
  },
  {
    id: 'TXN-8838',
    customer: 'Apex\nSolutions',
    amount: '$19,600',
    method: 'Wire',
    status: 'completed',
    date: 'Dec 17, 2024',
  },
  {
    id: 'TXN-8837',
    customer: 'Stratum\nLabs',
    amount: '$5,400',
    method: 'Card',
    status: 'failed',
    date: 'Dec 16, 2024',
  },
  {
    id: 'TXN-8836',
    customer: 'Cascade\nGroup',
    amount: '$7,100',
    method: 'Wire',
    status: 'completed',
    date: 'Dec 16, 2024',
  },
  {
    id: 'TXN-8835',
    customer: 'Vortex\nMedia',
    amount: '$2,800',
    method: 'Card',
    status: 'pending',
    date: 'Dec 15, 2024',
  },
  {
    id: 'TXN-8834',
    customer: 'Pinnacle\nTech',
    amount: '$14,300',
    method: 'Wire',
    status: 'completed',
    date: 'Dec 15, 2024',
  },
];

// Reusable status badge component with matching glow/dark backgrounds
const StatusBadge = ({ status }) => {
  const styles = {
    completed: 'bg-[#0e2118] text-[#10b981] border-emerald-500/10',
    pending: 'bg-[#1a160d] text-[#eab308] border-amber-500/10',
    failed: 'bg-[#271518] text-[#ef4444] border-red-500/10',
  };

  const badgeStyle = styles[status] || styles.completed;

  return (
    <span className={`inline-block px-3 py-1 text-xs font-mono rounded-md border ${badgeStyle}`}>
      {status}
    </span>
  );
};

export default function TransactionsTable() {
  const [filter, setFilter] = useState('all');

  const filterOptions = ['all', 'completed', 'pending', 'failed'];

  const filteredTransactions = INITIAL_TRANSACTIONS.filter((item) => {
    if (filter === 'all') return true;
    return item.status === filter;
  });

  return (
    <div className="bg-[#0b0e14] p-6 min-h-screen text-slate-300 flex justify-center items-start">
      <div className="w-full max-w-5xl bg-[#0d1117] rounded-xl border border-slate-800/80 shadow-2xl overflow-hidden">
        
        {/* Header with Filter Pills */}
        <div className="px-6 py-5 flex items-center justify-between border-b border-slate-800/60">
          <h2 className="text-white font-semibold text-lg tracking-wide">
            All Transactions
          </h2>

          <div className="flex items-center gap-2">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-3 py-1 text-xs font-mono rounded-md border transition-colors ${
                  filter === option
                    ? 'bg-[#181d27] text-white border-slate-700'
                    : 'bg-[#0f141c] text-slate-500 border-slate-800/80 hover:text-slate-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-800/60 text-[11px] font-mono tracking-wider text-slate-500 uppercase">
                <th className="py-4 px-6 font-normal">Transaction ID</th>
                <th className="py-4 px-6 font-normal">Customer</th>
                <th className="py-4 px-6 font-normal">Amount</th>
                <th className="py-4 px-6 font-normal">Method</th>
                <th className="py-4 px-6 font-normal">Status</th>
                <th className="py-4 px-6 font-normal text-right">Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50 text-sm">
              {filteredTransactions.map((tx) => (
                <tr key={tx.id} className="hover:bg-slate-800/20 transition-colors">
                  <td className="py-5 px-6 font-mono text-slate-400 text-xs">
                    {tx.id}
                  </td>
                  <td className="py-5 px-6 text-white font-semibold leading-snug whitespace-pre-line">
                    {tx.customer}
                  </td>
                  <td className="py-5 px-6 text-white font-semibold font-mono">
                    {tx.amount}
                  </td>
                  <td className="py-5 px-6 text-slate-400">
                    {tx.method}
                  </td>
                  <td className="py-5 px-6">
                    <StatusBadge status={tx.status} />
                  </td>
                  <td className="py-5 px-6 text-right text-slate-400 text-xs font-mono leading-relaxed">
                    {tx.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
}