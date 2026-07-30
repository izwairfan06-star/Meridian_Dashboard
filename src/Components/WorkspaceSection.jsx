import React from 'react';

const WorkspaceSection = ({
  formName = "Workspace",
  label1 = "WORKSPACE NAME",
  input1 = "Meridian Software",
  label2 = "BILLING EMAIL",
  input2 = "billing@meridian.io",
  label3 = "PLAN",
  input3 = "Enterprise",
  text3 = "Contact sales to change your plan",
  label4 = "FISCAL YEAR START",
  input4 = "January",
}) => {
  return (
    <div className="w-full max-w-md bg-[#0f1117] text-white p-6 rounded-xl shadow-lg border border-[#1e2230]">
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-5">
        {/* Title */}
        <h1 className="text-xl font-bold text-white tracking-wide">{formName}</h1>

        {/* Input Field 1 */}
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            {label1}
          </label>
          <input
            type="text"
            placeholder={input1}
            className="w-full bg-[#161922] text-gray-200 border border-[#272b3b] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#50e3c2] transition-colors placeholder-gray-300"
          />
        </div>

        {/* Input Field 2 */}
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            {label2}
          </label>
          <input
            type="email"
            placeholder={input2}
            className="w-full bg-[#161922] text-gray-200 border border-[#272b3b] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#50e3c2] transition-colors placeholder-gray-300"
          />
        </div>

        {/* Input Field 3 with Helper Text */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            {label3}
          </label>
          <input
            type="text"
            placeholder={input3}
            className="w-full bg-[#161922] text-gray-200 border border-[#272b3b] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#50e3c2] transition-colors placeholder-gray-300"
          />
          <p className="text-xs text-gray-500 pt-1">{text3}</p>
        </div>

        {/* Input Field 4 */}
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            {label4}
          </label>
          <input
            type="text"
            placeholder={input4}
            className="w-full bg-[#161922] text-gray-200 border border-[#272b3b] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#50e3c2] transition-colors placeholder-gray-300"
          />
        </div>
      </form>
    </div>
  );
};

export default WorkspaceSection;