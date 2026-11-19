import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.recimamajujayasukses.com"),
  title: {
    default:
      "PT. Recima Maju Jaya Sukses | Indonesian Coconut Export & Logistics",
    template: "%s | PT. Recima Maju Jaya Sukses",
  },
  description:
    "Premier Indonesian agricultural export and global logistics company specializing in Grade A Semi-Husked Coconuts, Full Husked Coconuts, and Fresh Whole Coconuts.",
  keywords: [
    "PT Recima Maju Jaya Sukses",
    "Recima Maju Jaya Sukses",
    "Indonesian Coconut Exporter",
    "Semi Husked Coconut Indonesia",
    "Full Husked Coconut Supplier",
    "Fresh Whole Coconuts Indonesia",
    "Agricultural Export Logistics Indonesia",
  ],
  icons: {
    icon: [
      { url: "/icon.png", sizes: "192x192", type: "image/png" },
      { url: "/icon.png", sizes: "48x48", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title:
      "PT. Recima Maju Jaya Sukses | Indonesian Coconut Export & Logistics",
    description:
      "Your reliable partner in Indonesian Grade A coconut trading and global logistics. Supplying Semi-Husked, Full Husked, and Fresh Whole Coconuts worldwide.",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "PT. Recima Maju Jaya Sukses",
  url: "https://www.recimamajujayasukses.com",
  logo: "https://www.recimamajujayasukses.com/icon.png",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <Navbar />

        <div className="min-h-screen flex flex-col">
          <div className="flex-grow">{children}</div>
        </div>

        <Footer />

        <WhatsAppButton />
      </body>
    </html>
  );
}
