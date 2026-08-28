import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileBottomBar from "@/components/layout/MobileBottomBar";
import FloatingActions from "@/components/layout/FloatingActions";
import { siteConfig } from "@/data/site";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "MV Diabetes — India's Leading Diabetes Super Specialty Hospital",
    template: "%s | MV Diabetes",
  },
  description: siteConfig.description,
  keywords: [
    "diabetes hospital",
    "diabetes care Chennai",
    "diabetic foot care",
    "diabetes specialist",
    "MV Hospital",
    "diabetes treatment",
    "amputation prevention",
    "diabetes research",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "MV Diabetes — India's Leading Diabetes Super Specialty Hospital",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "MV Diabetes — India's Leading Diabetes Super Specialty Hospital",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full`}>
      <body className="min-h-full flex flex-col font-sans antialiased bg-background text-text-primary">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomBar />
        <FloatingActions />
      </body>
    </html>
  );
}
