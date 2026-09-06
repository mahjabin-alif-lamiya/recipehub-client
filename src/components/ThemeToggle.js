"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@/context/ThemeContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      className="grid h-10 w-10 place-items-center rounded-xl bg-spice-50 text-spice-600 transition-colors hover:bg-spice-100 dark:bg-spice-700/30 dark:text-spice-100 dark:hover:bg-spice-700/50"
    >
      {theme === "light" ? <FiMoon size={17} /> : <FiSun size={17} />}
    </button>
  );
}