import React from "react";

function AuthInput({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  rightContent,
  className = "",
}) {
  return (
    <div className={className}>
      {label && (
        <label className="mb-2 block text-sm font-medium text-slate-200">
          {label}
        </label>
      )}

      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
         className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-sky-400/50 focus:bg-white/10 focus:ring-4 focus:ring-sky-400/10"

        />
        {rightContent && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            {rightContent}
          </div>
        )}
      </div>
    </div>
  );
}

export default AuthInput;
