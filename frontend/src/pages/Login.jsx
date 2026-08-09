import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, ArrowRight } from "lucide-react";
import api from "../api/api";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const navigate = useNavigate();

  // Handle Google OAuth callback
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      localStorage.setItem("token", token);

      // Remove token from browser URL
      window.history.replaceState({}, document.title, "/login");

      navigate("/dashboard");
    }
  }, [navigate]);

  const validate = () => {
    const e = {};

    if (!form.email) {
      e.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      e.email = "Enter a valid email";
    }

    if (!form.password) {
      e.password = "Password is required";
    }

    return e;
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    setServerError("");
    setSubmitted(false);

    const e = validate();
    setErrors(e);

    if (Object.keys(e).length !== 0) {
      return;
    }

    try {
      const response = await api.post("/auth/login", form);

      localStorage.setItem("token", response.data.token);

      setSubmitted(true);

      navigate("/dashboard");
    } catch (err) {
      setServerError(
        err.response?.data?.message || "Login failed"
      );
    }
  };

  const onChange = (key) => (ev) => {
    setForm({
      ...form,
      [key]: ev.target.value,
    });

    setErrors({
      ...errors,
      [key]: undefined,
    });

    setSubmitted(false);
  };

  const handleGoogleLogin = () => {
    window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
  };

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900">
            Login
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Welcome back. Sign in to continue.
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="mt-8 space-y-5"
          noValidate
        >
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-slate-700"
            >
              Email
            </label>

            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                id="email"
                type="email"
                value={form.email}
                onChange={onChange("email")}
                data-testid="login-email-input"
                placeholder="you@example.com"
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            {errors.email && (
              <p
                data-testid="login-email-error"
                className="mt-1.5 text-xs text-rose-600"
              >
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="mb-1.5 flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-sm font-medium text-slate-700"
              >
                Password
              </label>

              <a
                href="#forgot-password"
                data-testid="forgot-password-link"
                className="text-xs font-medium text-indigo-600 hover:text-indigo-700"
              >
                Forgot password?
              </a>
            </div>

            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

              <input
                id="password"
                type="password"
                value={form.password}
                onChange={onChange("password")}
                data-testid="login-password-input"
                placeholder="••••••••"
                className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
            </div>

            {errors.password && (
              <p
                data-testid="login-password-error"
                className="mt-1.5 text-xs text-rose-600"
              >
                {errors.password}
              </p>
            )}
          </div>

          {/* Login button */}
          <button
            type="submit"
            data-testid="login-submit-button"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-600/20 transition-all hover:bg-indigo-700"
          >
            Login
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>

          {/* Server error */}
          {serverError && (
            <p
              data-testid="login-server-error"
              className="text-center text-sm text-rose-600"
            >
              {serverError}
            </p>
          )}

          {/* Google login */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200" />
            </div>

            <div className="relative flex justify-center">
              <span className="bg-white px-3 text-xs text-slate-400">
                OR
              </span>
            </div>
          </div>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="inline-flex w-full items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            <span className="text-base font-bold">G</span>
            Continue with Google
          </button>
        </form>

        {submitted && (
          <p
            data-testid="login-signup-prompt"
            className="mt-6 text-center text-sm text-slate-500"
          >
            New to StayInsight?{" "}
            <a
              href="#signup"
              data-testid="login-signup-link"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Create an account
            </a>
          </p>
        )}
      </div>
    </div>
  );
}