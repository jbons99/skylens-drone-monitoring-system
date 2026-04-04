import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AuthButton from "../components/common/AuthButton.jsx";
import AuthInput from "../components/common/AuthInput.jsx";
import RadarPanel from "../components/common/RadarPanel.jsx";
import { registerUser } from "../Services/authService.js";

function Register() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleRegister = async (event) => {
    event.preventDefault();

    if (!fullName.trim() || !email.trim() || !password.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    setError("");
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => window.setTimeout(resolve, 500));
      await registerUser({ fullName, email, password });
      navigate("/login");
    } catch (error) {
      setError(error.message || "Unable to create account.");
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

      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-10">
        <div className="grid w-full max-w-7xl overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/40 shadow-[0_30px_120px_rgba(0,0,0,0.45)] backdrop-blur-2xl lg:grid-cols-[1.1fr_0.9fr]">
          <RadarPanel />

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
                <AuthInput
                  label="Full name"
                  type="text"
                  placeholder="Jordan Blake"
                  value={fullName}
                  onChange={(event) => setFullName(event.target.value)}
                />

                <AuthInput
                  label="Work email"
                  type="email"
                  placeholder="ops@skylens.ai"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-200">
                    Password
                  </label>
                  <AuthInput
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
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

                {error && (
                  <div className="rounded-2xl border border-rose-400/20 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
                    {error}
                  </div>
                )}

                <AuthButton
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating account..." : "Create account"}
                </AuthButton>
              </form>

              <div className="mt-8 rounded-3xl border border-sky-500/15 bg-sky-500/10 p-5">
                <p className="text-sm font-medium text-sky-200">
                  Quick start
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Your account is created in the backend database, then you can
                  sign in with the same credentials from the login page.
                </p>
              </div>

              <p className="mt-6 text-center text-sm text-slate-400">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-medium text-sky-300 transition hover:text-sky-200"
                >
                  Sign in
                </Link>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Register;
