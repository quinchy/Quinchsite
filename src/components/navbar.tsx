import { useEffect, useRef, useState } from "react";
import ModeMenu from "@/components/mode-menu";
import PagesMenu from "@/components/pages-menu";
import ThemesMenu from "@/components/theme-menu";
import { useThemeContext } from "@/providers/theme-provider";

type LogoVariant = "light" | "dark" | "teal" | "teal-dark";

const LOGO_SRC: Record<LogoVariant, string> = {
  light: "/logo/logo-light.webp",
  dark: "/logo/logo-dark.webp",
  teal: "/logo/logo-teal.webp",
  "teal-dark": "/logo/logo-teal-dark.webp",
};

export default function NavBar() {
  const { mode, theme } = useThemeContext();
  const [logo, setLogo] = useState<LogoVariant>("light");
  const [prevLogo, setPrevLogo] = useState<LogoVariant | null>(null);
  const [visible, setVisible] = useState<boolean>(false);
  const cleanupRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    let effectiveMode = mode;
    if (mode === "system" && typeof window !== "undefined") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      effectiveMode = prefersDark ? "dark" : "light";
    }

    let resolved: LogoVariant = "light";
    if (effectiveMode === "light" && theme === "default") resolved = "dark";
    else if (effectiveMode === "light" && theme === "teal")
      resolved = "teal-dark";
    else if (effectiveMode === "dark" && theme === "default")
      resolved = "light";
    else if (effectiveMode === "dark" && theme === "teal") resolved = "teal";

    setLogo((current) => {
      if (current === resolved) return current;

      setPrevLogo(current);
      setVisible(false);

      return resolved;
    });
  }, [mode, theme]);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 20);
    return () => clearTimeout(t);
  }, []);

  const handleLoaded = () => {
    setVisible(true);

    if (cleanupRef.current) clearTimeout(cleanupRef.current);
    cleanupRef.current = setTimeout(() => {
      setPrevLogo(null);
    }, 320);
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <a href="/" aria-label="Home - Quinchy" className="navbar__brand">
        <span className="navbar__logo-wrap" aria-hidden="true">
          {prevLogo && (
            <img
              src={LOGO_SRC[prevLogo]}
              alt="Quinchy"
              width={100}
              height={100}
              className="navbar__logo"
              style={{ opacity: visible ? 0 : 1 }}
            />
          )}

          <img
            src={LOGO_SRC[logo]}
            alt="Quinchy"
            width={100}
            height={100}
            onLoad={handleLoaded}
            className="navbar__logo"
            style={{ opacity: visible ? 1 : 0 }}
          />
        </span>

        <span className="navbar__brand-name">Quinchy</span>
      </a>

      {/* biome-ignore lint/a11y/useSemanticElements: a labeled ARIA group is the correct pattern for this cluster of controls */}
      <div className="navbar__controls" role="group" aria-label="Site controls">
        <PagesMenu />
        <ModeMenu />
        <ThemesMenu />
      </div>
    </nav>
  );
}
