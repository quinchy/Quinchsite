import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import LenisScrollProvider from "@/providers/LenisProvider";
import FloatingMenuBar from "@/components/ui/floating-menu-bar";

export const metadata: Metadata = {
  title: "Quinch - Software Developer Portfolio",
  description:
    "Web Portfolio of Cyril James De Guzman. Full-stack Software Developer specializing in Web and Mobile Development based in the Philippines.",
  metadataBase: new URL("https://quinchy.dev"),
  keywords: [
    "Quinch",
    "Cyril James De Guzman",
    "Full-Stack Software Developer",
    "Web Developer",
    "Mobile Developer",
    "React Developer",
    "Next.js Developer",
    "Front End",
    "Back End",
    "Philippines",
    "Portfolio",
  ],
  authors: [{ name: "Cyril James De Guzman" }],
  creator: "Cyril James De Guzman",
  publisher: "Cyril James De Guzman",
  openGraph: {
    title: "Cyril James De Guzman - Developer Portfolio",
    description:
      "Web Portfolio of Cyril James De Guzman, a Full-Stack Software Developer, with experienced in web and mobile development. Expertise in React, Next.js, Tailwind CSS, and TypeScript.",
    images: [
      {
        url: "/images/me.png",
        width: 1000,
        height: 1000,
        alt: "Picture of Cyril James De Guzman",
      },
    ],
    url: "https://quinchy.dev",
    siteName: "Quinch",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyril James De Guzman - Developer Portfolio",
    description:
      "Web Portfolio of Cyril James De Guzman, a Full-Stack Software Developer specializing in Web and Mobile Development.",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://quinchy.dev",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="YDK4FKni0aKlcMhI_s7VjJAznskAxoUjmBTAEODRLNA"
        />
        {/* Preload critical resources */}
        <link
          rel="preload"
          href="/images/personal/ProfilePicture.webp"
          as="image"
        />
        <link rel="preload" href="/images/personal/Avatar.webp" as="image" />
        <link rel="preload" href="/images/noise.webp" as="image" />
        <link
          rel="preload"
          href="/images/thumbnails/AniQuinch.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/thumbnails/OnlyFunds.webp"
          as="image"
        />
        <link
          rel="preload"
          href="/images/thumbnails/HueFitWeb.webp"
          as="image"
        />
        <link rel="preload" href="/images/thumbnails/Pasabuy.webp" as="image" />
        <link rel="preload" href="/images/thumbnails/Thryve.webp" as="image" />
        <link
          rel="preload"
          href="/images/thumbnails/SmileCare.webp"
          as="image"
        />
      </head>
      <body
        className={`${GeistMono.className} flex flex-col items-center justify-center`}
      >
        <LenisScrollProvider>{children}</LenisScrollProvider>
        <FloatingMenuBar />
      </body>
    </html>
  );
}
