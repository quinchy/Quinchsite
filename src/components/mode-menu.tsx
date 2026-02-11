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
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`Color mode: ${mode}. Click to change.`}
        className="cursor-pointer hover:bg-muted px-2 duration-300 transition-all"
      >
        Mode
      </button>
      {isOpen && (
        <div
          className="absolute top-full right-0 bg-background border border-foreground min-w-30 overflow-hidden"
          role="menu"
          aria-label="Color mode options"
        >
          <button
            onClick={() => handleModeChange("light")}
            role="menuitem"
            aria-current={mode === "light" ? "true" : undefined}
            className={`w-full px-4 py-2 text-left border-none cursor-pointer hover:bg-muted transition-colors ${mode === "light" ? "bg-primary hover:bg-primary/75 text-background" : "bg-transparent"}`}
          >
            Light
          </button>
          <button
            onClick={() => handleModeChange("dark")}
            role="menuitem"
            aria-current={mode === "dark" ? "true" : undefined}
            className={`w-full px-4 py-2 text-left border-none cursor-pointer hover:bg-muted transition-colors ${mode === "dark" ? "bg-primary hover:bg-primary/75 text-background" : "bg-transparent"}`}
          >
            Dark
          </button>
          <button
            onClick={() => handleModeChange("system")}
            role="menuitem"
            aria-current={mode === "system" ? "true" : undefined}
            className={`w-full px-4 py-2 text-left border-none cursor-pointer hover:bg-muted transition-colors ${mode === "system" ? "bg-primary hover:bg-primary/75 text-background" : "bg-transparent"}`}
          >
            System
          </button>
        </div>
      )}
    </div>
  );
}
