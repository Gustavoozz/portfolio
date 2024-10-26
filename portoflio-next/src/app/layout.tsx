import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import HomePage from './home/page';
import { SkillSection } from './skills/page';
import { Header } from '@/components/header/header';
import { AboutSection } from './about/page';
import { ThemeProvider } from '@/providers/themeProvider';



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


export const metadata: Metadata = {
  title: "Gustavo M.",
  description: "Portfolio by Gustavo.",
};

export default function RootLayout({
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Header />
        <HomePage />
        <SkillSection />
        <AboutSection />
    </ThemeProvider>
      </body>
    </html>
  );
}
