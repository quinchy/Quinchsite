import type { Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import CursorFollower from "@/components/ui/cursor-follower";
import LenisScrollProvider from "@/providers/lenis-provider";
import ClientLayoutWrapper from "@/components/layout/client-layout-wrapper";

export const metadata: Metadata = {
  title: "Quinch",
  description: "Web Portfolio of Cyril James De Guzman",
  metadataBase: new URL("https://www.quinch.dev"),
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
    url: "https://www.quinch.dev",
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
      <head>
        {/* Chrome, Firefox OS & Opera */}
        <meta name="theme-color" content="#13171d" />

        {/* Windows Phone */}
        <meta name="msapplication-navbutton-color" content="#13171d" />

        {/* Safari/iOS */}
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body
        className={`${GeistMono.className} flex flex-col items-center justify-center`}
      >
        <LenisScrollProvider>
          <ClientLayoutWrapper>
            <main id="main-content">{children}</main>
          </ClientLayoutWrapper>
          <CursorFollower />
        </LenisScrollProvider>
      </body>
    </html>
  );
}
