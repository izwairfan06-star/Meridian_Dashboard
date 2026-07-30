import React, { useState } from 'react';

const FormSection = ({
  formName = "Profile",
  label1 = "FULL NAME",
  input1 = "Jordan Mercer",
  label2 = "EMAIL ADDRESS",
  input2 = "jordan@meridian.io",
  label3 = "ROLE",
  input3 = "Head of Growth",
  label4 = "TIMEZONE",
  input4 = "America/New_York",
  text = "Used for reporting and scheduled exports",
  btn = "Save Changes",
}) => {
  // State to track toggle condition
  const [isSaved, setIsSaved] = useState(false);

  // Toggle state back and forth on submit/click
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaved((prev) => !prev);
  };

  return (
    <div className="w-full max-w-md bg-[#0f1117] text-white p-6 rounded-xl shadow-lg border border-[#1e2230]">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
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

        {/* Input Field 3 */}
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            {label3}
          </label>
          <input
            type="text"
            placeholder={input3}
            className="w-full bg-[#161922] text-gray-200 border border-[#272b3b] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#50e3c2] transition-colors placeholder-gray-300"
          />
        </div>

        {/* Input Field 4 */}
        <div className="flex flex-col space-y-1.5">
          <label className="text-xs font-semibold tracking-wider text-gray-400 uppercase">
            {label4}
          </label>
          <input
            type="text"
            placeholder={input4}
            className="w-full bg-[#161922] text-gray-200 border border-[#272b3b] rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#50e3c2] transition-colors placeholder-gray-300"
          />
          {/* Helper Text */}
          <p className="text-xs text-gray-500 pt-1">{text}</p>
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className={`font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 cursor-pointer ${
              isSaved
                ? "bg-red-600 hover:bg-red-700 text-white"
                : "bg-[#50e3c2] hover:bg-[#3cd3b1] text-[#0f1117]"
            }`}
          >
            {isSaved ? "Saved" : btn}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormSection;