import { useEffect, useRef, useState } from "react";
import { useThemeContext } from "@/providers/theme-provider";

type Mode = "light" | "dark" | "system";

export default function ModeMenu() {
  const { mode, setMode } = useThemeContext();
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

  useEffect(() => {
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

    applyMode(mode);
  }, [mode]);

  const handleModeChange = (newMode: Mode) => {
    setMode(newMode);
    setIsOpen(false);
  };

  const modes: Mode[] = ["light", "dark", "system"];

  return (
    <div className="menu" ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`Color mode: ${mode}. Click to change.`}
        className="menu__trigger"
      >
        Mode
      </button>
      {isOpen && (
        <div
          className="menu__dropdown"
          role="menu"
          aria-label="Color mode options"
        >
          {modes.map((m) => (
            <button
              type="button"
              key={m}
              onClick={() => handleModeChange(m)}
              role="menuitem"
              aria-current={mode === m ? "true" : undefined}
              className={`menu__item${mode === m ? " menu__item--active" : ""}`}
            >
              {m.charAt(0).toUpperCase() + m.slice(1)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
