"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image"; // TAMBAHKAN IMPORT INI

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 w-full fixed top-0 z-50 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo dengan Gambar dan Teks */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-1 group">
              {/* Gambar Logo Diperbesar */}
              <Image
                src="/logo-recima.png"
                alt="Recima Maju Jaya Sukses Logo"
                width={70} // Naikkan dari 45 menjadi 65
                height={70} // Naikkan dari 45 menjadi 65
                className="object-contain transition-transform group-hover:scale-105"
              />

              {/* Teks Nama Perusahaan */}
              <div className="flex flex-col">
                <span className="text-xl sm:text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-400 tracking-tight leading-none mb-1">
                  RECIMA
                </span>
                <span className="text-[0.5rem] sm:text-[0.65rem] font-bold text-slate-500 tracking-[0.2em] uppercase leading-none group-hover:text-green-600 transition-colors">
                  Maju Jaya Sukses
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Menu - Teks Cerah */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link
              href="/"
              className="text-slate-600 hover:text-green-600 transition-colors text-sm font-semibold"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-slate-600 hover:text-green-600 transition-colors text-sm font-semibold"
            >
              About Us
            </Link>
            <Link
              href="/products"
              className="text-slate-600 hover:text-green-600 transition-colors text-sm font-semibold"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="text-slate-600 hover:text-green-600 transition-colors text-sm font-semibold"
            >
              Contact
            </Link>

            {/* Di bagian Desktop Menu */}
            <Link
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all shadow-md shadow-green-600/20 hover:shadow-lg inline-block text-center"
            >
              Get a Quote
            </Link>
          </div>

          {/* Hamburger Button (Mobile) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-green-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-green-600 hover:bg-green-50 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-green-600 hover:bg-green-50 rounded-md"
            >
              About Us
            </Link>
            <Link
              href="/products"
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-green-600 hover:bg-green-50 rounded-md"
            >
              Products
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-green-600 hover:bg-green-50 rounded-md"
            >
              Contact
            </Link>

            <div className="pt-4">
              {/* Di bagian Desktop Menu */}
              <Link
                href="/contact"
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-2.5 rounded-lg text-sm font-medium transition-all shadow-md shadow-green-600/20 hover:shadow-lg inline-block text-center"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
