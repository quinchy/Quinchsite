"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function PagesMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer hover:bg-muted px-2 duration-300 transition-all"
      >
        Pages
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 bg-background border border-border min-w-30 overflow-hidden">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block w-full px-4 py-2 text-left text-foreground no-underline hover:bg-muted duration-300 transition-all"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block w-full px-4 py-2 text-left text-foreground no-underline hover:bg-muted duration-300 transition-all"
          >
            About
          </Link>
          <Link
            href="/projects"
            onClick={() => setIsOpen(false)}
            className="block w-full px-4 py-2 text-left text-foreground no-underline hover:bg-muted duration-300 transition-all"
          >
            Projects
          </Link>
        </div>
      )}
    </div>
  );
}
