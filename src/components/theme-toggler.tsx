"use client";

import { useState } from "react";
import { BiSun, BiMoon } from "react-icons/bi";

export default function ThemeToggler() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(document.documentElement.classList.toggle("dark"));
  };

  return (
    <span
      className="text-2xl cursor-pointer absolute right-0 top-6 hover:text-secondary dark:hover:text-primary transition-colors"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? <BiSun /> : <BiMoon />}
    </span>
  );
}
