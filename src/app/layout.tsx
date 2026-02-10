import type { Metadata } from "next";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";
import NavBar from "@/components/navbar";
import NoiseWrapper from "@/components/noise-wrapper";

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
                const theme = localStorage.getItem('theme') || 'system';
                const colorTheme = localStorage.getItem('color-theme') || 'default';
                if (theme === 'system') {
                  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  if (prefersDark) {
                    document.documentElement.classList.add('dark');
                  }
                } else if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }
                if (colorTheme === 'teal') {
                  document.documentElement.classList.add('teal');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${GeistPixelSquare.className} antialiased tracking-wide`}
      >
        <NavBar />
        {children}
        <NoiseWrapper />
      </body>
    </html>
  );
}
