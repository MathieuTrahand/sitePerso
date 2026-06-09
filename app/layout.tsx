import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mathieu — Développeur web pour PME",
  description:
    "Je conçois et développe des sites web sur-mesure pour PME. Next.js, design soigné, livraison en 4 semaines.",
  openGraph: {
    title: "Mathieu — Développeur web pour PME",
    description:
      "Je conçois et développe des sites web sur-mesure pour PME. Next.js, design soigné, livraison en 4 semaines.",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "Mathieu Trahand",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} scroll-smooth`}>
      <body className="font-sans flex flex-col min-h-screen">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-white focus:text-black focus:outline-none focus:ring-2 focus:ring-black"
        >
          Aller au contenu principal
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 flex flex-col pt-16">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
