import "@/app/globals.css";
import type { Metadata } from "next";
import { GeistPixelSquare } from "geist/font/pixel";
import { ThemeProvider } from "@/providers/theme-provider";
import { QueryProvider } from "@/providers/query-provider";
import NavBar from "@/components/navbar";
import NoiseWrapper from "@/components/noise-wrapper";
import Toast from "@/components/toast";

export const metadata: Metadata = {
  title: "Cyril James - Software Engineer",
  description:
    "Software Engineer focused on systems design and scalable solutions across the full stack, with a goal of delivering highly performant, and reliable applications.",
  openGraph: {
    title: "Cyril James De Guzman",
    description:
      "Software Engineer focused on systems design and scalable solutions across the full stack, with a goal of delivering highly performant, and reliable applications.",
    url: "https://quinchy.dev",
    siteName: "Cyril James - Software Engineer",
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
      "Software Engineer focused on systems design and scalable solutions across the full stack, with a goal of delivering highly performant, and reliable applications.",
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
        <QueryProvider>
          <ThemeProvider>
            <NavBar />
            <main className="h-[calc(100dvh-38px)] pt-8 translate-y-9.5 overflow-y-auto overflow-x-hidden border-x border-b border-border">
              <div>{children}</div>
            </main>
            <NoiseWrapper />
            <Toast />
          </ThemeProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
