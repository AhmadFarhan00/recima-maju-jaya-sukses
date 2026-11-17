import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// 1. IMPORT KOMPONEN WHATSAPP DI SINI
import WhatsAppButton from "../components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.recimamajujayasukses.com"),
  title: {
    default:
      "PT. Recima Maju Jaya Sukses | Indonesian Agricultural Export & Logistics",
    template: "%s | PT. Recima Maju Jaya Sukses",
  },
  description:
    "Premier Indonesian agricultural export and global logistics company specializing in premium Fresh Whole Coconuts, Semi-Husked Coconuts, and Jengkol supply chains.",
  keywords: [
    "PT Recima Maju Jaya Sukses",
    "Recima Maju Jaya Sukses",
    "Indonesian Coconut Exporter",
    "Fresh Whole Coconuts Indonesia",
    "Semi Husked Coconuts Supplier",
    "Agricultural Export Logistics Indonesia",
  ],
  icons: {
    icon: "/logo.png", // <-- Sesuaikan dengan nama file logo di folder public (misal: /logo.png atau /rms-logo.png)
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "PT. Recima Maju Jaya Sukses | Export & Logistics",
    description:
      "Your reliable partner in agricultural trading and global logistics. Exporting Indonesia's finest coconuts and jengkol worldwide.",
    url: "https://www.recimamajujayasukses.com",
    siteName: "PT. Recima Maju Jaya Sukses",
    locale: "en_US",
    type: "website",
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
    <html lang="en">
      <body
        className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}
      >
        <Navbar />

        <div className="min-h-screen flex flex-col">
          <div className="flex-grow">{children}</div>
        </div>

        <Footer />

        {/* 2. PASANG TOMBOL WHATSAPP DI BAWAH FOOTER */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
