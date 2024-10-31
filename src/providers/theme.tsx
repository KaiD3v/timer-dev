"use client";

import { useState, createContext, ReactNode } from "react";

interface ThemeProps {
  theme: "dark" | "ligth";
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeProps);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("ligth");

  function toggleTheme() {
    if (theme === "dark") setTheme("ligth");

    if (theme === "ligth") setTheme("dark");
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme } as ThemeProps}>
      {children}
    </ThemeContext.Provider>
  );
};
