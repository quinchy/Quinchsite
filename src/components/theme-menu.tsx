"use client";
import { useEffect, useState, useRef } from "react";

type Theme = "default" | "teal";

export default function ThemeMenu() {
  const [theme, setTheme] = useState<Theme>("default");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("color-theme") as Theme | null;
    const initialTheme = savedTheme || "default";
    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const applyTheme = (selectedTheme: Theme) => {
    if (selectedTheme === "teal") {
      document.documentElement.classList.add("teal");
    } else {
      document.documentElement.classList.remove("teal");
    }
  };

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem("color-theme", newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer hover:bg-muted px-2 duration-300 transition-all"
      >
        Theme
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 bg-background border border-foreground min-w-30 overflow-hidden">
          <button
            onClick={() => handleThemeChange("default")}
            className="w-full px-4 py-2 text-left border-none cursor-pointer"
            style={{
              background:
                theme === "default" ? "var(--primary)" : "transparent",
              color:
                theme === "default" ? "var(--background)" : "var(--foreground)",
            }}
          >
            Default
          </button>
          <button
            onClick={() => handleThemeChange("teal")}
            className="w-full px-4 py-2 text-left border-none cursor-pointer"
            style={{
              background: theme === "teal" ? "var(--primary)" : "transparent",
              color:
                theme === "teal" ? "var(--background)" : "var(--foreground)",
            }}
          >
            Teal
          </button>
        </div>
      )}
    </div>
  );
}
