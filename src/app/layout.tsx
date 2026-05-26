import { Metadata } from "next";
import React from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://watcharapon-portfolio.vercel.app"),
  title: "Watcharapon Wangwuttikorn | Full Stack Developer",
  description:
    "Full Stack Developer specializing in business systems, internal tools, backend APIs, and practical web applications.",
  authors: [
    {
      name: "Watcharapon Wangwuttikorn",
    },
  ],
  creator: "Watcharapon Wangwuttikorn",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Django Developer",
    "FastAPI",
    "PostgreSQL",
    "Thailand Developer",
    "Bangkok Developer",
  ],
  openGraph: {
    title: "Watcharapon Wangwuttikorn",
    description:
      "Full Stack Developer specializing in business systems and practical software.",
    type: "website",
    url: "https://watcharapon-portfolio.vercel.app",
    siteName: "Watcharapon Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Watcharapon Wangwuttikorn Full Stack Developer portfolio",
      },
    ],
  },
  alternates: {
    canonical: "https://watcharapon-portfolio.vercel.app",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
