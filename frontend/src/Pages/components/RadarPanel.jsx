import React from "react";

function RadarPanel() {
  return (
    <section className="relative hidden border-r border-white/10 bg-gradient-to-br from-sky-500/10 via-transparent to-cyan-400/5 p-10 lg:flex lg:flex-col lg:justify-between">
      <div className="absolute right-10 top-10 h-40 w-40 rounded-full border border-sky-400/10 bg-sky-400/5 blur-2xl" />

      <div>
        <div className="inline-flex items-center gap-3 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-200 animate-fadeUp">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-400 text-sm font-bold text-slate-950">
            S
          </div>
          SkyLens Command
        </div>

        <h1 className="mt-8 max-w-lg text-5xl font-semibold leading-tight text-white animate-fadeUp [animation-delay:0.1s]">
          A smarter way to manage drone missions at scale.
        </h1>

        <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 animate-fadeUp [animation-delay:0.2s]">
          Track live aircraft, review mission analytics, inspect imagery,
          and keep every operator aligned from one secure control center.
        </p>

        <div className="relative mt-10 h-64 overflow-hidden rounded-3xl border border-white/10 bg-black/20 p-6 animate-fadeUp [animation-delay:0.3s]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.18),_transparent_58%)]" />
          <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/20" />
          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/20" />
          <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/20" />
          <div className="absolute left-1/2 top-1/2 h-[2px] w-32 origin-left -translate-y-1/2 bg-gradient-to-r from-sky-300 to-transparent animate-radarSweep" />
          <div className="absolute left-[30%] top-[35%] h-3 w-3 rounded-full bg-sky-300 shadow-[0_0_18px_rgba(56,189,248,0.8)] animate-signalBlink" />
          <div className="absolute left-[62%] top-[48%] h-2.5 w-2.5 rounded-full bg-cyan-300 shadow-[0_0_18px_rgba(103,232,249,0.8)] animate-signalBlink [animation-delay:0.8s]" />
          <div className="absolute left-[52%] top-[70%] h-2.5 w-2.5 rounded-full bg-blue-200 shadow-[0_0_18px_rgba(191,219,254,0.8)] animate-signalBlink [animation-delay:1.4s]" />

          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-sky-300/80">
                  Airspace radar
                </p>
                <p className="mt-2 text-2xl font-semibold text-white">
                  Live mission tracking
                </p>
              </div>
              <div className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs text-sky-300">
                Online
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                <p className="text-lg font-semibold text-white">24</p>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  aircraft
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                <p className="text-lg font-semibold text-white">148</p>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  flights
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur">
                <p className="text-lg font-semibold text-white">99.98%</p>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  uptime
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4 animate-fadeUp [animation-delay:0.4s]">
          <p className="text-xl font-semibold text-white">12 TB</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
            imagery
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4 animate-fadeUp [animation-delay:0.5s]">
          <p className="text-xl font-semibold text-white">06</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
            regions
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4 animate-fadeUp [animation-delay:0.6s]">
          <p className="text-xl font-semibold text-white">256-bit</p>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-400">
            security
          </p>
        </div>
      </div>
    </section>
  );
}

export default RadarPanel;
