"use client";

import { useState, createContext, useEffect, ReactNode } from "react";

interface ThemeProps {
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeProps);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("theme") as "dark" | "light") || "light";
    }
    return "light";
  });

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme } as ThemeProps}>
      {children}
    </ThemeContext.Provider>
  );
};
