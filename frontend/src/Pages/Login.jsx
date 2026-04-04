import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthButton from "../components/common/AuthButton.jsx";
import AuthInput from "../components/common/AuthInput.jsx";
import AuthModal from "../components/common/AuthModal.jsx";
import RadarPanel from "../components/common/RadarPanel.jsx";
import { loginUser } from "../Services/authService.js";

function Login() {
  const navigate = useNavigate();
  const [showForgot, setShowForgot] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!email.trim() || !password.trim()) {
      setLoginError("Please enter your email and password.");
      return;
    }

    setLoginError("");
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => window.setTimeout(resolve, 500));
      await loginUser({ email, password, rememberMe });
      navigate("/dashboard");
    } catch (error) {
      setLoginError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#020b1a] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.22),_transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(34,211,238,0.18),_transparent_28%),linear-gradient(135deg,_#020617_0%,_#071a34_45%,_#020617_100%)]" />
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:70px_70px]" />
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-sky-400/20 blur-3xl animate-floatSlow" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/15 blur-3xl animate-floatSlow [animation-delay:1.2s]" />

      <div className="pointer-events-none absolute left-[12%] top-[18%] h-56 w-56 rounded-full border border-sky-400/10 animate-radarPulse" />
      <div className="pointer-events-none absolute left-[12%] top-[18%] h-56 w-56 rounded-full border border-sky-400/10 animate-radarPulse [animation-delay:1.5s]" />
      <div className="pointer-events-none absolute left-[12%] top-[18%] h-56 w-56 rounded-full border border-sky-400/10 animate-radarPulse [animation-delay:3s]" />

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">
        <div className="grid w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/40 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl animate-cardEnter lg:grid-cols-[1.1fr_0.9fr]">
          <RadarPanel />

          <section className="p-6 sm:p-10 lg:p-12">
            <div className="mx-auto max-w-md">
              <div className="mb-8 lg:hidden">
                <div className="inline-flex items-center gap-3 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm font-medium text-sky-200 animate-fadeUp">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sky-400 text-sm font-bold text-slate-950">
                    S
                  </div>
                  SkyLens Command
                </div>
              </div>

              <div className="mb-8">
                <p className="text-sm font-medium uppercase tracking-[0.28em] text-sky-300/80 animate-fadeUp">
                  Secure operator access
                </p>
                <h2 className="mt-3 text-4xl font-semibold text-white animate-fadeUp [animation-delay:0.1s]">
                  Welcome back
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-400 animate-fadeUp [animation-delay:0.2s]">
                  Sign in to access live operations, mission analytics, and
                  inspection reports.
                </p>
              </div>

              <form className="space-y-4" onSubmit={handleLogin}>
                <AuthInput
                  label="Work email"
                  type="email"
                  placeholder="ops@skylens.ai"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  rightContent={<span className="text-slate-500">@</span>}
                  className="animate-slideUp [animation-delay:0.25s]"
                />

                <div className="animate-slideUp [animation-delay:0.35s]">
                  <div className="mb-2 flex items-center justify-between">
                    <label className="block text-sm font-medium text-slate-200">
                      Password
                    </label>
                    <button
                      type="button"
                      className="text-sm text-sky-300 transition hover:-translate-y-0.5 hover:text-sky-200"
                      onClick={() => setShowForgot(true)}
                    >
                      Forgot password?
                    </button>
                  </div>

                  <AuthInput
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    rightContent={
                      <button
                        type="button"
                        className="text-sm font-medium text-slate-400 transition hover:text-white"
                        onClick={() => setShowPassword((value) => !value)}
                      >
                        {showPassword ? "Hide" : "Show"}
                      </button>
                    }
                  />
                </div>

                {loginError && (
                  <div className="rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-200 animate-popIn">
                    {loginError}
                  </div>
                )}

                <div className="flex items-center justify-between gap-4 text-sm animate-slideUp [animation-delay:0.45s]">
                  <label className="flex cursor-pointer items-center gap-3 text-slate-400">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={() => setRememberMe((value) => !value)}
                      className="h-4 w-4 rounded border-white/20 bg-slate-900 text-sky-400 focus:ring-sky-400/30"
                    />
                    Keep me signed in
                  </label>

                  <div className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-200">
                    Enterprise secure
                  </div>
                </div>

                <AuthButton
                  type="submit"
                  disabled={isSubmitting}
                  className="animate-popIn [animation-delay:0.55s]"
                >
                  {isSubmitting ? "Signing in..." : "Sign in to SkyLens"}
                </AuthButton>
              </form>

              <div className="my-6 flex items-center gap-4 animate-fadeUp [animation-delay:0.65s]">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs uppercase tracking-[0.24em] text-slate-500">
                  or continue with
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              <AuthButton
                variant="secondary"
                className="animate-popIn [animation-delay:0.75s]"
              >
                <span className="flex items-center justify-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-xs font-bold text-slate-900">
                    G
                  </span>
                  Continue with Google Workspace
                </span>
              </AuthButton>

              <div className="mt-8 rounded-3xl border border-sky-500/15 bg-sky-500/10 p-5 animate-fadeUp [animation-delay:0.85s]">
                <p className="text-sm font-medium text-sky-200">
                  Security notice
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Protected with encrypted sessions, audit logs, and optional
                  multi-factor authentication for every operator account.
                </p>
              </div>

              <p className="mt-6 text-center text-sm text-slate-400 animate-fadeUp [animation-delay:0.95s]">
                Don&apos;t have an account?{" "}
                <Link
                  to="/register"
                  className="font-medium text-sky-300 transition duration-300 hover:-translate-y-0.5 hover:text-sky-200"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>

      {showForgot && (
        <AuthModal
          title="Reset password"
          subtitle="Enter your work email and we will send a secure reset link."
          onClose={() => setShowForgot(false)}
        >
          <AuthInput
            placeholder="you@company.com"
            value={forgotEmail}
            onChange={(event) => setForgotEmail(event.target.value)}
          />

          <div className="mt-5">
            <AuthButton
              onClick={() => {
                setForgotEmail("");
                setShowForgot(false);
              }}
            >
              Send reset link
            </AuthButton>
          </div>
        </AuthModal>
      )}
    </div>
  );
}

export default Login;
