"use client";
import { useEffect, useState, useRef } from "react";
import { useThemeContext } from "@/providers/theme-provider";

type Theme = "default" | "teal";

export default function ThemeMenu() {
  const { theme, setTheme } = useThemeContext();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  // Apply theme to documentElement for compatibility with layout/styles
  useEffect(() => {
    const applyTheme = (selectedTheme: Theme) => {
      if (selectedTheme === "teal") {
        document.documentElement.classList.add("teal");
      } else {
        document.documentElement.classList.remove("teal");
      }
    };

    applyTheme(theme);
  }, [theme]);

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`Color theme: ${theme}. Click to change.`}
        className="cursor-pointer hover:bg-muted px-2 duration-300 transition-all"
      >
        Theme
      </button>
      {isOpen && (
        <div
          className="absolute top-full right-0 bg-background border border-border min-w-30 overflow-hidden"
          role="menu"
          aria-label="Color theme options"
        >
          <button
            onClick={() => handleThemeChange("default")}
            role="menuitem"
            aria-current={theme === "default" ? "true" : undefined}
            className={`w-full px-4 py-2 text-left border-none cursor-pointer hover:bg-muted transition-colors ${theme === "default" ? "bg-primary hover:bg-primary/75 text-background" : "bg-transparent"}`}
          >
            Default
          </button>
          <button
            onClick={() => handleThemeChange("teal")}
            role="menuitem"
            aria-current={theme === "teal" ? "true" : undefined}
            className={`w-full px-4 py-2 text-left border-none cursor-pointer hover:bg-muted transition-colors ${theme === "teal" ? "bg-primary hover:bg-primary/75 text-background" : "bg-transparent"}`}
          >
            Teal
          </button>
        </div>
      )}
    </div>
  );
}
