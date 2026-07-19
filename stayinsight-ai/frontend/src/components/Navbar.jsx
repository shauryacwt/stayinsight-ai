import { NavLink, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";


const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/login", label: "Login" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

const token = localStorage.getItem("token");

const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/login");
};

  return (
    <header
      data-testid="navbar"
      className="sticky top-0 z-40 w-full border-b border-white/40 bg-white/70 backdrop-blur-xl"
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          to="/"
          data-testid="navbar-logo"
          className="flex items-center gap-2 text-slate-900"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 text-white shadow-sm">
            <Sparkles className="h-4 w-4" />
          </span>

          <span className="font-display text-base font-semibold tracking-tight sm:text-lg">
            StayInsight <span className="text-indigo-600">AI</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {links
  .filter((l) => l.label !== "Login")
  .map((l) => (
    <li key={l.to}>
      <NavLink
        to={l.to}
        end={l.to === "/"}
        className={({ isActive }) =>
          `rounded-full px-4 py-2 text-sm font-medium transition-colors ${
            isActive
              ? "bg-indigo-600 text-white"
              : "text-slate-600 hover:bg-slate-100"
          }`
        }
      >
        {l.label}
      </NavLink>
    </li>
  ))}

  <li>
  {token ? (
    <button
      onClick={handleLogout}
      className="rounded-full bg-red-500 px-4 py-2 text-sm font-medium text-white hover:bg-red-600"
    >
      Logout
    </button>
  ) : (
    <NavLink
      to="/login"
      className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white"
    >
      Login
    </NavLink>
  )}
</li>
        </ul>

        <button
          data-testid="navbar-mobile-toggle"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {open && (
        <div
          data-testid="navbar-mobile-menu"
          className="border-t border-slate-100 bg-white md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-3">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  data-testid={`navbar-mobile-link-${l.label.toLowerCase()}`}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-2.5 text-sm font-medium ${
                      isActive
                        ? "bg-indigo-50 text-indigo-700"
                        : "text-slate-700 hover:bg-slate-50"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;