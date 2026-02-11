"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ModeMenu from "@/components/mode-menu";
import PagesMenu from "@/components/pages-menu";
import ThemesMenu from "@/components/theme-menu";
import { useThemeContext } from "@/providers/theme-provider";
import LogoLight from "@/../public/logo/logo-light.webp";
import LogoDark from "@/../public/logo/logo-dark.webp";
import LogoTeal from "@/../public/logo/logo-teal.webp";
import LogoTealDark from "@/../public/logo/logo-teal-dark.webp";
import Image from "next/image";

type LogoVariant = "light" | "dark" | "teal" | "teal-dark";

export default function NavBar() {
  const { mode, theme } = useThemeContext();
  const [logo, setLogo] = useState<LogoVariant>("light");
  const [prevLogo, setPrevLogo] = useState<LogoVariant | null>(null);
  const [logoClass, setLogoClass] = useState<string>("select-none");
  const [visible, setVisible] = useState<boolean>(false);
  const cleanupRef = useRef<NodeJS.Timeout | null>(null);

  const srcFor = (v: LogoVariant) => {
    switch (v) {
      case "teal":
        return LogoTeal;
      case "dark":
        return LogoDark;
      case "teal-dark":
        return LogoTealDark;
      case "light":
      default:
        return LogoLight;
    }
  };

  // Determine logo variant from mode and theme
  const resolveLogoVariant = (): LogoVariant => {
    // Resolve mode for system preference
    let effectiveMode = mode;
    if (mode === "system" && typeof window !== "undefined") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)",
      ).matches;
      effectiveMode = prefersDark ? "dark" : "light";
    }

    // Map combinations:
    // light + default = LogoDark
    // light + teal = LogoTealDark
    // dark + default = LogoLight
    // dark + teal = LogoTeal
    if (effectiveMode === "light" && theme === "default") return "dark";
    if (effectiveMode === "light" && theme === "teal") return "teal-dark";
    if (effectiveMode === "dark" && theme === "default") return "light";
    if (effectiveMode === "dark" && theme === "teal") return "teal";

    return "light";
  };

  // Update logo immediately when context changes
  useEffect(() => {
    const resolved = resolveLogoVariant();

    setLogo((current) => {
      if (current === resolved) return current;

      // start crossfade
      setPrevLogo(current);
      setVisible(false);

      return resolved;
    });

    // read styling class from layout script
    if (typeof document !== "undefined") {
      const attr =
        document.documentElement.getAttribute("data-logo-class") ||
        "select-none";
      setLogoClass(attr);
    }
  }, [mode, theme]);

  // Initial fade in
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 20);
    return () => clearTimeout(t);
  }, []);

  // When image loads, fade in and cleanup prev
  const handleLoaded = () => {
    setVisible(true);

    if (cleanupRef.current) clearTimeout(cleanupRef.current);
    cleanupRef.current = setTimeout(() => {
      setPrevLogo(null);
    }, 320);
  };

  return (
    <nav
      className="flex justify-between gap-2 fixed bg-background w-full py-1.5 px-4 border border-border z-10"
      aria-label="Main navigation"
    >
      <Link
        href={"/"}
        aria-label="Home - Quinchy"
        className="flex items-center gap-2"
      >
        <span className="relative w-5 h-5 inline-block" aria-hidden="true">
          {prevLogo && (
            <Image
              src={srcFor(prevLogo)}
              alt="Quinchy"
              fill
              sizes="20px"
              className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ease-in-out ${
                visible ? "opacity-0" : "opacity-100"
              } ${logoClass}`}
              priority={false}
            />
          )}

          <Image
            src={srcFor(logo)}
            alt="Quinchy"
            fill
            sizes="20px"
            onLoadingComplete={handleLoaded}
            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ease-in-out ${
              visible ? "opacity-100" : "opacity-0"
            } ${logoClass}`}
            priority
          />
        </span>

        <span className="translate-y-px font-semibold">Quincy</span>
      </Link>

      <div className="flex gap-2" role="group" aria-label="Site controls">
        <PagesMenu />
        <ModeMenu />
        <ThemesMenu />
      </div>
    </nav>
  );
}
