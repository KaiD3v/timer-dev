"use client";

import { useContext } from "react";
import { ThemeContext } from "../../providers/theme";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export function ThemeButton() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  return (
    <button onClick={toggleTheme} className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center gap-2">
      {theme === "dark" && (
        <>
          <MdOutlineLightMode size={20} /> <p>Claro</p>
        </>
      )}
      {theme === "light" && (
        <>
          <MdOutlineDarkMode size={20} /> <p>Escuro</p>
        </>
      )}
    </button>
  );
}
