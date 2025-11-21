import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Donovan McHenry - Software Engineer",
  description: "NJIT CS '27 · SWE Intern @ Obsidian Security. Building clean, performant web applications.",
  keywords: ["software engineer", "web developer", "react", "typescript", "next.js"],
  authors: [{ name: "Donovan McHenry" }],
  creator: "Donovan McHenry",
  metadataBase: new URL('https://dzmchenry.com'),
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dzmchenry.com',
    title: 'Donovan McHenry - Software Engineer',
    description: "NJIT CS '27 · SWE Intern @ Obsidian Security. Building clean, performant web applications.",
    siteName: 'Donovan McHenry Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Donovan McHenry - Software Engineer',
    description: "NJIT CS '27 · SWE Intern @ Obsidian Security. Building clean, performant web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
