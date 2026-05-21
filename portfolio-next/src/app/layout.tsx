"use client";

import { useEffect } from "react";
import AOS from "aos";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header/header";
import { ThemeProvider } from "@/providers/themeProvider";
import ParticlesBackground from "@/components/ParticlesBackground";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark">
          <ParticlesBackground />
          <Header />
          <main className="pt-4 sm:pt-0 relative z-10">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
