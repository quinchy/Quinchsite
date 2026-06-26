import NavBar from "@/components/navbar";
import { ThemeProvider } from "@/providers/theme-provider";

export default function NavBarIsland() {
  return (
    <ThemeProvider>
      <NavBar />
    </ThemeProvider>
  );
}
