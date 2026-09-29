import { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";

const LINKS = [
  { to: "/", label: "Bosh sahifa" },
  { to: "/arenda", label: "Ijara" },
  { to: "/tumanlar", label: "Tumanlar" },
  { to: "/xizmatlar", label: "Xizmatlar" },
  { to: "/savol-javob", label: "Savol-javob" },
  { to: "/aloqa", label: "Aloqa" },
];

export default function Header() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDark(saved ? saved === "dark" : prefers);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-paper/85 backdrop-blur-xl dark:border-white/10 dark:bg-ink/80">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <img src="/logo.jpg" alt="UyArenda logotipi" className="h-12 w-12 rounded-2xl object-cover shadow-md" />
          <span>
            <span className="block font-display text-2xl leading-none text-ink dark:text-white">UyArenda</span>
            <span className="text-[11px] uppercase tracking-[0.22em] text-gold-deep dark:text-gold">Toshkent ijara</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {LINKS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `text-sm font-semibold tracking-wide ${isActive ? "text-gold-deep dark:text-gold" : "text-slate-600 hover:text-ink dark:text-slate-300 dark:hover:text-white"}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setDark((value) => !value)}
            aria-label="Kun va tun rejimini almashtirish"
            className="grid h-11 w-11 place-items-center rounded-full border border-line text-ink dark:border-white/15 dark:text-gold"
          >
            {dark ? "☀" : "☾"}
          </button>
          <Link to="/arenda" className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white sm:inline-flex dark:bg-gold dark:text-ink">
            Uy topish
          </Link>
          <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-11 w-11 place-items-center rounded-full border border-line lg:hidden dark:border-white/15" aria-label="Menyu">
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-line bg-paper px-4 py-3 lg:hidden dark:border-white/10 dark:bg-ink">
          {LINKS.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-sm font-semibold text-ink dark:text-white">
              {item.label}
            </NavLink>
          ))}
          <NavLink to="/biz-haqimizda" onClick={() => setOpen(false)} className="block rounded-xl px-3 py-3 text-sm font-semibold text-ink dark:text-white">
            Biz haqimizda
          </NavLink>
        </nav>
      )}
    </header>
  );
}
