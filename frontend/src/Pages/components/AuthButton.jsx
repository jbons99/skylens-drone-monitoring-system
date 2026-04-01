import React from "react";

function AuthButton({
  children,
  type = "button",
  onClick,
  disabled = false,
  variant = "primary",
  className = "",
}) {
  const base =
    "w-full rounded-2xl px-4 py-3.5 font-semibold transition duration-300";

  const styles = {
    primary:
  "group relative overflow-hidden bg-sky-400 text-slate-950 hover:-translate-y-1 hover:scale-[1.01] hover:bg-sky-300 hover:shadow-[0_12px_30px_rgba(56,189,248,0.35)] active:scale-[0.99] disabled:cursor-not-allowed disabled:bg-sky-500/70",
    secondary:
      "border border-white/10 bg-white/5 text-slate-100 hover:-translate-y-1 hover:bg-white/10 hover:shadow-[0_10px_25px_rgba(255,255,255,0.08)]",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles[variant]} ${className}`}
    >
      {variant === "primary" ? (
        <>
          <span className="absolute inset-0 -translate-x-full bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.45),transparent)] transition duration-700 group-hover:translate-x-full" />
          <span className="relative z-10">{children}</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}

export default AuthButton;
