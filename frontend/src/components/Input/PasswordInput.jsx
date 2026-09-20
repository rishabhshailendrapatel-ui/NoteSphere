import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  // Toggle function to switch password visibility
  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="flex items-center bg-transparent border-[1.5px] px-5 rounded mb-3">
      <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? "text" : "password"}
        placeholder={placeholder || "Password"}
        className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
      />

      {/* Interactive toggle button */}
      <button
        type="button"
        onClick={toggleShowPassword}
        className="text-slate-400 hover:text-blue-700 transition-colors focus:outline-none"
        aria-label={isShowPassword ? "Hide password" : "Show password"}
        aria-pressed={isShowPassword}
      >
        {isShowPassword ? (
          <FaRegEye size={19} className="text-lg cursor-pointer" />
        ) : (
          <FaRegEyeSlash size={19} className="text-lg cursor-pointer" />
        )}
      </button>
    </div>
  );
};

export default PasswordInput;
