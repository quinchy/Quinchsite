"use client";

import { useEffect, useState, useRef } from "react";

type Mode = "light" | "dark" | "system";

export default function ModeMenu() {
  const [mode, setMode] = useState<Mode>("system");
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as Mode | null;
    const initialTheme = savedTheme || "system";
    setMode(initialTheme);
    applyMode(initialTheme);
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

  const applyMode = (selectedMode: Mode) => {
    if (selectedMode === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      document.documentElement.classList.toggle("dark", prefersDark);
    } else {
      document.documentElement.classList.toggle(
        "dark",
        selectedMode === "dark",
      );
    }
  };
  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
    localStorage.setItem("theme", newMode);
    applyMode(newMode);
    setIsOpen(false);
  };
  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer hover:bg-muted px-2 duration-300 transition-all"
      >
        Mode
      </button>
      {isOpen && (
        <div className="absolute top-full right-0 bg-background border border-foreground min-w-30 overflow-hidden">
          <button
            onClick={() => handleModeChange("light")}
            className="w-full px-4 py-2 text-left border-none cursor-pointer"
            style={{
              background: mode === "light" ? "var(--primary)" : "transparent",
              color:
                mode === "light" ? "var(--background)" : "var(--foreground)",
            }}
          >
            Light
          </button>
          <button
            onClick={() => handleModeChange("dark")}
            className="w-full px-4 py-2 text-left border-none cursor-pointer"
            style={{
              background: mode === "dark" ? "var(--primary)" : "transparent",
              color:
                mode === "dark" ? "var(--background)" : "var(--foreground)",
            }}
          >
            Dark
          </button>
          <button
            onClick={() => handleModeChange("system")}
            className="w-full px-4 py-2 text-left border-none cursor-pointer"
            style={{
              background: mode === "system" ? "var(--primary)" : "transparent",
              color:
                mode === "system" ? "var(--background)" : "var(--foreground)",
            }}
          >
            System
          </button>
        </div>
      )}
    </div>
  );
}
