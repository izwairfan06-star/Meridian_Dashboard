import React, { useState } from 'react';

const SecuritySection = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="w-full max-w-md bg-[#0f1117] text-white p-6 rounded-xl shadow-lg border border-[#1e2230]">
      <form onSubmit={(e) => e.preventDefault()} className="flex flex-col space-y-5">
        {/* Title */}
        <h1 className="text-xl font-bold text-white tracking-wide">Security</h1>

        {/* Current Password Field */}
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            CURRENT PASSWORD
          </label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full bg-[#161922] text-gray-200 border border-[#272b3b] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#50e3c2] transition-colors"
          />
        </div>

        {/* New Password Field */}
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            NEW PASSWORD
          </label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full bg-[#161922] text-gray-200 border border-[#272b3b] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#50e3c2] transition-colors"
          />
        </div>

        {/* Confirm Password Field */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            CONFIRM PASSWORD
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full bg-[#161922] text-gray-200 border border-[#272b3b] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#50e3c2] transition-colors"
          />
          {/* Helper Text */}
          <p className="text-xs text-gray-500 pt-1">
            At least 12 characters with a number and symbol
          </p>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="bg-[#161922] hover:bg-[#1f2430] text-gray-200 font-semibold px-5 py-2.5 rounded-lg text-sm border border-[#272b3b] transition-all duration-200 cursor-pointer"
          >
            Update Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default SecuritySection;