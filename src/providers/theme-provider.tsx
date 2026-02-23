"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Mode = "light" | "dark" | "system";
type Theme = "default" | "teal";

interface ThemeContextType {
  mode: Mode;
  theme: Theme;
  setMode: (mode: Mode) => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setModeState] = useState<Mode>("dark");
  const [theme, setThemeState] = useState<Theme>("teal");

  useEffect(() => {
    const savedMode = (localStorage.getItem("theme") as Mode) || "dark";
    const savedTheme = (localStorage.getItem("color-theme") as Theme) || "teal";
    setModeState(savedMode);
    setThemeState(savedTheme);
  }, []);

  const setMode = (newMode: Mode) => {
    setModeState(newMode);
    localStorage.setItem("theme", newMode);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("color-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ mode, theme, setMode, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within ThemeProvider");
  }
  return context;
}
