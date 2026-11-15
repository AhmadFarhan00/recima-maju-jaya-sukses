"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 text-slate-600 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Kolom 1: Brand & About */}
          <div>
            <Link href="/" className="flex flex-col group mb-4">
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-400 tracking-tight leading-none mb-1">
                RECIMA
              </span>
              <span className="text-[0.55rem] font-bold text-slate-500 tracking-[0.2em] uppercase leading-none">
                Maju Jaya Sukses
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6 text-slate-600">
              Your reliable partner in agricultural trading and global
              logistics. We ensure seamless supply chains for Indonesia's finest
              coconuts and jengkol.
            </p>
          </div>

          {/* Kolom 2: Quick Links */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-green-600 transition-colors font-medium"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-green-600 transition-colors font-medium"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-green-600 transition-colors font-medium"
                >
                  Products & Logistics
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-green-600 transition-colors font-medium"
                >
                  Contact & Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Commodities */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4">Our Commodities</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/products"
                  className="hover:text-green-600 transition-colors font-medium"
                >
                  Fresh Whole Coconuts
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-green-600 transition-colors font-medium"
                >
                  Semi-Husked Coconuts
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-green-600 transition-colors font-medium"
                >
                  Premium Jengkol
                </Link>
              </li>
            </ul>
          </div>

          {/* Kolom 4: Contact Info */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4">
              Warehouse & Contact
            </h3>
            <ul className="space-y-3 text-sm font-medium">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-green-600 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Sumatera Barat, Padang Pariaman (ID)</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-green-600 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>rendyceo@recimamajujayasukses.com</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-green-600 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+62 812 7441 1106</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 text-center text-xs text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4 font-medium">
          <p>&copy; 2026 Recima Maju Jaya Sukses. All rights reserved.</p>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="hover:text-green-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-green-600 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
