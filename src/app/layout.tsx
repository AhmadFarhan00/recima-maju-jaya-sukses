import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// 1. IMPORT KOMPONEN WHATSAPP DI SINI
import WhatsAppButton from "../components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recima Maju Jaya Sukses - Export & Logistics",
  description:
    "Exporting premium coconuts and jengkol with reliable global logistics.",
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
