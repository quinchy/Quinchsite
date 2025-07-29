import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import LenisScrollProvider from "@/providers/lenis-provider";
import FloatingMenuBar from "@/components/ui/floating-menu-bar";

export const metadata: Metadata = {
  title: "Quinch",
  description: "Web Portfolio of Cyril James De Guzman",
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
  ],
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
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${GeistMono.className} flex flex-col items-center justify-center`}
      >
        <LenisScrollProvider>{children}</LenisScrollProvider>
        <FloatingMenuBar />
      </body>
    </html>
  );
}
