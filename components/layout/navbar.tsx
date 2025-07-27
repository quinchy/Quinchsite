import Link from "next/link";
import { usePathname } from "next/navigation";
import NavbarClient from "./navbar-client";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <NavbarClient pathname={pathname}>
      <nav className="flex items-center justify-center gap-4 text-lg font-semibold tracking-tighter sm:gap-12 md:gap-16 lg:gap-24 xl:px-[15rem]">
        <Link
          href="/"
          className={`hover:bg-muted/90 rounded-3xl px-4 py-3 duration-300 ease-in-out md:px-6 ${
            pathname === "/"
              ? "text-highlight text-shadow-highlight text-shadow-lg/35"
              : ""
          }`}
        >
          {"/"}
        </Link>
        <Link
          href="/about"
          className={`hover:bg-muted/90 rounded-3xl px-4 py-3 duration-300 ease-in-out md:px-6 ${
            pathname === "/about"
              ? "text-highlight text-shadow-highlight text-shadow-lg/15"
              : ""
          }`}
        >
          {"/about"}
        </Link>
        <Link
          href="/projects"
          className={`hover:bg-muted/90 rounded-3xl px-4 py-3 duration-300 ease-in-out md:px-6 ${
            pathname === "/projects"
              ? "text-highlight text-shadow-highlight text-shadow-lg/15"
              : ""
          }`}
        >
          {"/projects"}
        </Link>
      </nav>
    </NavbarClient>
  );
};

export default Navbar;
