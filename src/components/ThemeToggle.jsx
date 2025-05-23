import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches);
  });

useEffect(() => {
  const html = document.documentElement;
  const body = document.body;

  if (dark) {
    html.classList.add("dark");
    body.classList.add("theme-dark");
    body.classList.remove("theme-light");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    body.classList.add("theme-light");
    body.classList.remove("theme-dark");
    localStorage.setItem("theme", "light");
  }
}, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="btn btn-outline-info btn-sm"
      aria-label="Toggle theme"
    >
      {dark ? "☀️ Lights on" : "🌙 Lights off"}
    </button>
  );
}
