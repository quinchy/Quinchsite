import type { Metadata } from "next";
import { GeistPixelSquare } from "geist/font/pixel";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import NavBar from "@/components/navbar";
import NoiseWrapper from "@/components/noise-wrapper";

export const metadata: Metadata = {
  title: "Cyril James - Software Engineer",
  description:
    "Software engineer with expertise in front-end and back-end development. Building fast, scalable web applications with modern technologies. View my portfolio and projects.",
  openGraph: {
    title: "Cyril James - Software Engineer",
    description:
      "Software engineer specializing in modern web development. Explore my projects and get in touch.",
    url: "https://quinchy.dev",
    siteName: "Cyril James - Portfolio",
    images: [
      {
        url: "https://quinchy.dev/portfolio-thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Cyril James - Software Engineer",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cyril James - Software Engineer",
    description:
      "Software engineer specializing in modern web development. Explore my projects and get in touch.",
    images: ["https://quinchy.dev/portfolio-thumbnail.png"],
  },
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
          <NavBar />
          <main className="h-[calc(100dvh-38px)] pt-8 translate-y-9.5 overflow-y-auto overflow-x-hidden border-x border-b border-border">
            <div>{children}</div>
          </main>
          <NoiseWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}
