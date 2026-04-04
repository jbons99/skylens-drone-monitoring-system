import React from "react";

function AuthModal({ title, subtitle, children, onClose }) {
  return (
    <div className="absolute inset-0 z-20 flex items-center justify-center bg-slate-950/80 px-4 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-950/95 p-6 shadow-2xl animate-modalIn">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-white">{title}</h3>
            <p className="mt-1 text-sm text-slate-400">{subtitle}</p>
          </div>

          <button
            type="button"
            className="text-slate-500 transition hover:text-white"
            onClick={onClose}
          >
            Close
          </button>
        </div>

        {children}
      </div>
    </div>
  );
}

export default AuthModal;
