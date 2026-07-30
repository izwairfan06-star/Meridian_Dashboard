import React, { useState } from 'react';

const NotificationsSection = () => {
  // State for each toggle switch matching the image defaults
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [slackIntegration, setSlackIntegration] = useState(false);
  const [weeklyDigest, setWeeklyDigest] = useState(true);

  return (
    <div className="w-full max-w-md bg-[#0f1117] text-white p-6 rounded-xl shadow-lg border border-[#1e2230]">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-xl font-bold text-white tracking-wide">Notifications</h1>
        <p className="text-sm text-gray-400 mt-1">Choose how you receive alerts</p>
      </div>

      <div className="space-y-5">
        {/* Email Notifications Option */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1e2230]/60">
          <div>
            <h2 className="text-base font-semibold text-white">Email notifications</h2>
            <p className="text-sm text-gray-400 mt-0.5">Receive transaction and alert emails</p>
          </div>
          <button
            type="button"
            onClick={() => setEmailNotifications(!emailNotifications)}
            className={`relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out ${
              emailNotifications ? 'bg-[#50e3c2]' : 'bg-[#272b3b]'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-[#0f1117] shadow transition duration-200 ease-in-out translate-y-1 ${
                emailNotifications ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Slack Integration Option */}
        <div className="flex items-center justify-between pb-4 border-b border-[#1e2230]/60">
          <div>
            <h2 className="text-base font-semibold text-white">Slack integration</h2>
            <p className="text-sm text-gray-400 mt-0.5">Post alerts to your Slack channel</p>
          </div>
          <button
            type="button"
            onClick={() => setSlackIntegration(!slackIntegration)}
            className={`relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out ${
              slackIntegration ? 'bg-[#50e3c2]' : 'bg-[#272b3b]'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-[#0f1117] shadow transition duration-200 ease-in-out translate-y-1 ${
                slackIntegration ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>

        {/* Weekly Digest Option */}
        <div className="flex items-center justify-between pb-1">
          <div>
            <h2 className="text-base font-semibold text-white">Weekly digest</h2>
            <p className="text-sm text-gray-400 mt-0.5">Summary report every Monday morning</p>
          </div>
          <button
            type="button"
            onClick={() => setWeeklyDigest(!weeklyDigest)}
            className={`relative inline-flex h-7 w-12 flex-shrink-0 cursor-pointer rounded-full transition-colors duration-200 ease-in-out ${
              weeklyDigest ? 'bg-[#50e3c2]' : 'bg-[#272b3b]'
            }`}
          >
            <span
              className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-[#0f1117] shadow transition duration-200 ease-in-out translate-y-1 ${
                weeklyDigest ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotificationsSection;