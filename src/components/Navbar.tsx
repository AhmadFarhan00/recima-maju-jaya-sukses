"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tutup menu mobile otomatis saat pindah halaman
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isTransparent = isHome && !isScrolled && !isMobileMenuOpen;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-gradient-to-b from-black/80 via-black/40 to-transparent py-4"
          : "bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center">
          <Link href="/" className="flex items-center group">
            <Image
              src="/logo.png"
              alt="Recima Maju Jaya Sukses Logo"
              width={110}
              height={45}
              className="object-contain transition-transform group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Menu Links Desktop (Laptop/PC) */}
        <div className="hidden md:flex items-center space-x-8 font-medium text-sm">
          <Link
            href="/"
            className={`transition-colors font-semibold ${
              isTransparent
                ? "text-white hover:text-green-400 drop-shadow"
                : "text-slate-700 hover:text-green-600"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`transition-colors font-semibold ${
              isTransparent
                ? "text-white hover:text-green-400 drop-shadow"
                : "text-slate-700 hover:text-green-600"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/products"
            className={`transition-colors font-semibold ${
              isTransparent
                ? "text-white hover:text-green-400 drop-shadow"
                : "text-slate-700 hover:text-green-600"
            }`}
          >
            Products
          </Link>
          <Link
            href="/catalog"
            className={`transition-colors font-semibold ${
              isTransparent
                ? "text-white hover:text-green-400 drop-shadow"
                : pathname === "/catalog"
                  ? "text-green-600"
                  : "text-slate-700 hover:text-green-600"
            }`}
          >
            Catalog
          </Link>
          <Link
            href="/contact"
            className={`transition-colors font-semibold ${
              isTransparent
                ? "text-white hover:text-green-400 drop-shadow"
                : "text-slate-700 hover:text-green-600"
            }`}
          >
            Contact
          </Link>
          <Link
            href="/contact"
            className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-md shadow-green-600/20"
          >
            Request Quote
          </Link>
        </div>

        {/* Tombol Hamburger Khusus HP (Mobile) */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
            className={`p-2 rounded-lg transition-colors focus:outline-none ${
              isTransparent
                ? "text-white hover:bg-white/10"
                : "text-slate-800 hover:bg-slate-100"
            }`}
          >
            {isMobileMenuOpen ? (
              /* Ikon X (Tutup) */
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* Ikon Garis Tiga (Hamburger) */
              <svg
                className="w-7 h-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Dropdown Menu Khusus HP saat tombol diklik */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-6 pt-4 pb-6 space-y-3 shadow-lg">
          <Link
            href="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-slate-800 hover:text-green-600 border-b border-slate-100"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-slate-800 hover:text-green-600 border-b border-slate-100"
          >
            About Us
          </Link>
          <Link
            href="/products"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-slate-800 hover:text-green-600 border-b border-slate-100"
          >
            Products
          </Link>
          <Link
            href="/catalog"
            onClick={() => setIsMobileMenuOpen(false)}
            className={`block py-2.5 text-base font-semibold border-b border-slate-100 ${
              pathname === "/catalog"
                ? "text-green-600"
                : "text-slate-800 hover:text-green-600"
            }`}
          >
            Catalog
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-2.5 text-base font-semibold text-slate-800 hover:text-green-600 border-b border-slate-100"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
