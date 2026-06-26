import { useEffect, useRef, useState } from "react";
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

  const themes: { value: Theme; label: string }[] = [
    { value: "default", label: "Default" },
    { value: "teal", label: "Teal" },
  ];

  return (
    <div className="menu" ref={menuRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label={`Color theme: ${theme}. Click to change.`}
        className="menu__trigger"
      >
        Theme
      </button>
      {isOpen && (
        <div
          className="menu__dropdown"
          role="menu"
          aria-label="Color theme options"
        >
          {themes.map((t) => (
            <button
              type="button"
              key={t.value}
              onClick={() => handleThemeChange(t.value)}
              role="menuitem"
              aria-current={theme === t.value ? "true" : undefined}
              className={`menu__item${theme === t.value ? " menu__item--active" : ""}`}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
