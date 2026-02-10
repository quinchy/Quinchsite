import Link from "next/link";
import ModeMenu from "@/components/mode-menu";
import PagesMenu from "@/components/pages-menu";
import ThemesMenu from "@/components/theme-menu";

export default function NavBar() {
  return (
    <nav
      className="flex justify-between gap-2 fixed bg-background w-full py-1.5 px-4 border border-border z-10"
      aria-label="Main navigation"
    >
      <Link href={"/"} aria-label="Home - Quinchy">
        Quinchy
      </Link>
      <div className="flex gap-2" role="group" aria-label="Site controls">
        <PagesMenu />
        <ModeMenu />
        <ThemesMenu />
      </div>
    </nav>
  );
}
