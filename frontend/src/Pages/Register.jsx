import React, { useState } from "react";

function Register({ goToLogin }) {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();

    if (!fullName.trim() || !company.trim() || !email.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    window.setTimeout(() => {
      setIsSubmitting(false);
    }, 1400);
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020b1a] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.22),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.18),_transparent_28%),linear-gradient(135deg,_#020617_0%,_#071a34_45%,_#020617_100%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:70px_70px]" />
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl animate-floatSlow" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl animate-floatSlow [animation-delay:1.2s]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">
        <div className="grid w-full max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/40 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:grid-cols-[1.1fr_0.9fr]">
          <section className="border-r border-white/10 bg-gradient-to-br from-sky-500/10 via-transparent to-cyan-400/5 p-8 sm:p-10 lg:p-12">
            <div className="inline-flex items-center gap-3 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-200">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-400 text-sm font-bold text-slate-950">
                S
              </div>
              SkyLens Founding Team
            </div>

            <h1 className="mt-8 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Built by a team shaping the future of aerial intelligence.
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300">
              SkyLens is being created by a team that combines product thinking,
              frontend design, backend engineering, and a shared vision for
              smarter drone-powered workflows.
            </p>

            <div className="mt-10 grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-sky-300/80">
                  Co-Founder 01
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Parth
                </h2>
                <p className="mt-1 text-sm font-medium text-sky-200">
                  Product Vision and Frontend
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Leading the user experience, product direction, design flow,
                  and how SkyLens feels in real-world use.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-sky-300/80">
                  Co-Founder 02
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Bhavin
                </h2>
                <p className="mt-1 text-sm font-medium text-sky-200">
                  Backend Systems
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Building the backend architecture, APIs, data pipelines, and
                  authentication systems powering the platform.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.24em] text-sky-300/80">
                  Co-Founder 03
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-white">
                  Jordan
                </h2>
                <p className="mt-1 text-sm font-medium text-sky-200">
                  Operations and Engineering
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Supporting system design, platform logic, deployment, and the
                  practical engineering side of making SkyLens production-ready.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-3xl border border-sky-500/15 bg-sky-500/10 p-5">
              <p className="text-sm font-medium text-sky-200">
                What we are building
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                We want SkyLens to help teams manage flight operations,
                understand visual data faster, and make drone intelligence more
                useful in daily work.
              </p>
            </div>
          </section>

          <section className="p-6 sm:p-10 lg:p-12">
            <div className="mx-auto max-w-md">
              <div className="mb-8">
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-sky-300/80">
                  Create account
                </p>
                <h2 className="mt-3 text-4xl font-semibold text-white">
                  Join SkyLens
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  Create your account to start managing missions, analytics,
                  and aerial operations.
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleRegister}>
                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="John Carter"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-sky-400/50 focus:bg-white/10 focus:ring-4 focus:ring-sky-400/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Company or team
                  </label>
                  <input
                    type="text"
                    placeholder="SkyLens Operations"
                    value={company}
                    onChange={(event) => setCompany(event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-sky-400/50 focus:bg-white/10 focus:ring-4 focus:ring-sky-400/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Work email
                  </label>
                  <input
                    type="email"
                    placeholder="ops@skylens.ai"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-sky-400/50 focus:bg-white/10 focus:ring-4 focus:ring-sky-400/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      placeholder="Create a password"
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                      className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 pr-20 text-sm text-white placeholder:text-slate-400 outline-none transition duration-300 focus:border-sky-400/50 focus:bg-white/10 focus:ring-4 focus:ring-sky-400/10"
                    />
                    <button
                      type="button"
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-slate-400 transition hover:text-white"
                      onClick={() => setShowPassword((value) => !value)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>

                {error && (
                  <div className="rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-2xl bg-sky-400 px-4 py-3.5 font-semibold text-slate-950 transition duration-300 hover:bg-sky-300 disabled:cursor-not-allowed disabled:bg-sky-500/70"
                >
                  {isSubmitting ? "Creating account..." : "Create account"}
                </button>
              </form>

              <p className="mt-6 text-center text-sm text-slate-400">
                Already have an account?{" "}
                <button
                  type="button"
                  className="font-medium text-sky-300 transition hover:text-sky-200"
                  onClick={goToLogin}
                >
                  Sign in
                </button>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Register;
