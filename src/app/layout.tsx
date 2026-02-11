import type { Metadata } from "next";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { TransitionProvider } from "@/providers/transition-provider";
import NavBar from "@/components/navbar";
import NoiseWrapper from "@/components/noise-wrapper";
import TransitionWrapper from "@/components/transition-wrapper";

export const metadata: Metadata = {
  title: "Cyril James - Portfolio",
  description:
    "Software Engineer focused on building full scale products from front-end to back-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const root = document.documentElement;
                  const savedMode = localStorage.getItem('theme') || 'system';
                  const savedColor = localStorage.getItem('color-theme') || 'default';

                  root.classList.remove('dark', 'teal');

                  let logoClass = 'select-none';

                  if (savedMode === 'dark' || (savedMode === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    root.classList.add('dark');
                    logoClass = 'brightness-0 select-none invert';
                  }

                  if (savedColor === 'teal') {
                    root.classList.add('teal');
                    logoClass = 'select-none';
                  }

                  // Store logo class on root for React to pick up
                  root.setAttribute('data-logo-class', logoClass);
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${GeistPixelSquare.className} antialiased tracking-wide`}
      >
        <ThemeProvider>
          <TransitionProvider>
            <NavBar />
            <main className="h-[calc(100dvh-38px)] pt-8 translate-y-9.5 overflow-y-auto overflow-x-hidden border-x border-b border-border">
              <TransitionWrapper>{children}</TransitionWrapper>
            </main>
            <NoiseWrapper />
          </TransitionProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
