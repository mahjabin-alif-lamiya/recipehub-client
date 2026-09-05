"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="grid h-9 w-9 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-herb-500 hover:text-white dark:border-ink-dark/20 dark:text-ink-dark"
    >
      {theme === "light" ? <FiMoon size={16} /> : <FiSun size={16} />}
    </button>
  );
}