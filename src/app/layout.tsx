import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PersonJsonLd, WebsiteJsonLd } from "@/components/seo/json-ld";

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
    icon: [
      { url: '/favicon-16x16.svg', sizes: '16x16', type: 'image/svg+xml' },
      { url: '/favicon-32x32.svg', sizes: '32x32', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-touch-icon.svg', sizes: '180x180', type: 'image/svg+xml' },
    ],
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
        <PersonJsonLd />
        <WebsiteJsonLd />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
