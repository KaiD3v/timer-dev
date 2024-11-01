"use client";

import { useTheme } from "next-themes";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export function ThemeButton() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <button
      onClick={() => (theme == "dark" ? setTheme("light") : setTheme("dark"))}
      className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2"
    >
      {theme === "dark" && (
        <>
          <MdOutlineLightMode size={20} />
          <p>Claro</p>
        </>
      )}
      {theme === "light" && (
        <>
          <MdOutlineDarkMode size={20} />
          <p>Escuro</p>
        </>
      )}
    </button>
  );
}
