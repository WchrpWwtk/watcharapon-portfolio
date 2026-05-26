import { Metadata } from "next";
import React from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";

export const metadata: Metadata = {
  title: "Watcharapon Wangwuttikorn | Full Stack Developer",
  description:
    "Full Stack Developer specializing in business systems, internal tools, backend APIs, and practical web applications.",
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
