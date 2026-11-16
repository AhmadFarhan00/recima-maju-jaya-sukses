import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Fresh Whole Coconuts",
      desc: "Fresh mature whole coconuts with full husk intact. Sourced directly from top plantations, high water content, and thick white meat, carefully sorted for export.",
      tag: "Top Export",
      image: "/wholeCoconnut.jpeg", // <-- Sesuaikan dengan nama file di folder public
    },
    {
      id: 2,
      name: "Semi-Husked Coconuts",
      desc: "Coconuts with partially removed husks designed for optimal shelf-life and maximum container loading efficiency. Highly demanded by global industrial processors.",
      tag: "Best Value",
      image: "/semiHusked.jpeg", // <-- Ubah jadi semiHusked.jpeg
    },
    {
      id: 3,
      name: "Full-Husked Coconuts",
      desc: "Raw coconuts with completely stripped husks (hard shell only). Cleaned, polished, and packed securely, ideal for coconut oil and derivative manufacturing.",
      tag: "Industrial Grade",
      image: "/fullHusked.jpeg", // <-- Ubah jadi fullHusked.jpeg
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-slate-50">
      {/* 1. HERO SECTION */}
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-6 md:px-16 pt-28 md:pt-24 pb-12 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{ backgroundImage: `url('/background.jpeg')` }} // <-- Ganti sesuai nama file fotomu di folder public
        ></div>

        {/* ... sisa kode teks Hero di bawahnya biarkan tetap sama ... */}
        <div className="absolute inset-0 bg-slate-950/35 z-10"></div>
        <div className="relative z-20 flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 text-sm font-semibold text-green-400 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Global Trading & Logistics Provider
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-white drop-shadow-md">
            Reliable Supply Chain for <br className="hidden md:block" />
            <span className="text-green-400">Indonesia's Best</span> Coconuts
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-10 max-w-3xl text-slate-200 drop-shadow">
            Your trusted partner in trading and logistics. We export premium
            Whole, Semi-Husked, and Full-Husked Coconuts with seamless delivery
            and strict quality control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg shadow-green-600/30 w-full sm:w-auto hover:-translate-y-0.5 text-center"
            >
              Request Freight Quote
            </Link>
            <a
              href="https://wa.me/6282369456898?text=Hello%20Recima%20Maju%20Jaya%20Sukses,%20I%20would%20like%20to%20talk%20with%20your%20sales%20team."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-900/60 backdrop-blur-md border-2 border-slate-600 hover:bg-slate-800 text-white px-8 py-3.5 rounded-lg font-semibold transition-all w-full sm:w-auto text-center"
            >
              Contact Sales Team
            </a>
          </div>
        </div>
      </section>

      {/* 2. CORPORATE OVERVIEW */}
      <section className="w-full py-20 px-6 md:px-16 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-3">
              Company Profile
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900 leading-tight">
              Empowering Indonesian Coconut Agriculture for the Global Market
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              <strong>PT. Recima Maju Jaya Sukses</strong> is a premier
              agricultural export and logistics company based in Indonesia. We
              specialize in bridging the gap between local coconut farmers and
              international markets, ensuring that Indonesia&apos;s finest
              coconuts reach global destinations with uncompromised quality.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Unlike traditional brokers, we take full control of our supply
              chain. From direct sourcing at local plantations, rigorous
              warehousing quality control, to handling complex export
              documentation and freight forwarding.
            </p>
          </div>

          {/* Bagian Kanan: 2 Foto Perusahaan Kotak Penuh */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4 md:gap-6 items-center">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md bg-slate-100 group">
              <Image
                src="/plantation.jpeg"
                alt="PT. Recima Maju Jaya Sukses Plantation"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md bg-slate-100 mt-6 md:mt-10 group">
              <Image
                src="/warehouse.jpeg"
                alt="PT. Recima Maju Jaya Sukses Warehouse"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY RECIMA (Design Hitam Elegan - FOCUS COCONUTS) */}
      <section className="w-full bg-[#0a0a0a] text-white">
        <div className="flex flex-col lg:flex-row">
          {/* Bagian Kiri: Foto Asli Kamu */}
          <div className="w-full lg:w-1/2 min-h-[450px] lg:min-h-[600px] relative bg-slate-900 overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-700">
            {/* Pastikan file foto kamu sudah dimasukkan ke folder public dengan nama foto-aan.jpg */}
            <Image
              src="/kelapa.jpg"
              alt="PT. Recima Maju Jaya Sukses"
              fill
              className="object-cover object-center transition-transform duration-500 hover:scale-105"
            />

            {/* Overlay gelap transparan */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

            {/* Caption Nama & Jabatan di Pojok Bawah Foto */}
            <div className="absolute bottom-6 left-6 right-6 bg-slate-950/80 backdrop-blur-md border border-slate-700 p-4 rounded-xl">
              <p className="text-green-400 text-xs">
                Founder & Operations Lead - PT. Recima Maju Jaya Sukses
              </p>
            </div>
          </div>

          {/* Bagian Kanan: Teks & Penjelasan 2x2 Grid */}
          <div className="w-full lg:w-1/2 p-10 md:p-16 lg:p-20 flex flex-col justify-center">
            <div className="mb-4">
              <h2 className="text-sm font-bold text-white inline-block border-b-2 border-green-600 pb-1">
                Why Recima Maju Jaya Sukses?
              </h2>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              The Global Demand for{" "}
              <span className="text-green-500">
                Premium Indonesian Coconuts
              </span>{" "}
              is Rising.
            </h3>
            <p className="text-slate-300 mb-10 leading-relaxed text-sm md:text-base">
              Indonesia is one of the world's finest coconut exporters. We
              source directly from selected plantations—supplying Whole,
              Semi-Husked, and Full-Husked Coconuts with full traceability,
              consistent quality, and complete export compliance documentation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mb-12">
              <div>
                <h4 className="text-green-500 font-bold text-lg mb-2">
                  Grade A & Premium
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Strictly sorted based on maturity, water content, and shell
                  hardness. Guaranteed consistent year-round supply for FCL.
                </p>
              </div>
              <div>
                <h4 className="text-green-500 font-bold text-lg mb-2">
                  Custom Packaging & OEM
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Available in mesh bags, PP woven bags, or industrial packing.
                  Your brand, your specifications, your packaging.
                </p>
              </div>
              <div>
                <h4 className="text-green-500 font-bold text-lg mb-2">
                  Large-Scale Capacity
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Capable of supplying dozens of containers per month to fulfill
                  global industrial and wholesale distributor demands.
                </p>
              </div>
              <div>
                <h4 className="text-green-500 font-bold text-lg mb-2">
                  Export Certified
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Laboratory testing, Phytosanitary, Fumigation, and COO—we
                  provide all essential documents for your import clearance.
                </p>
              </div>
            </div>
            <div>
              <Link
                href="/contact"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded transition-colors text-sm"
              >
                REQUEST A QUOTE
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CARA KERJA PENGIRIMAN */}
      <section className="w-full py-24 px-6 md:px-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 max-w-3xl">
            <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-3">
              Our Workflow
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold mb-6 text-slate-900">
              How We Operate: End-to-End Export Logistics
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We understand that international trade requires precision. Our
              structured workflow guarantees that every container shipped
              complies with international standards, minimizing risks and
              avoiding delays at destination ports.
            </p>
          </div>

          <div className="space-y-12">
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start border-l-4 border-green-500 pl-6 md:pl-10">
              <div className="w-full md:w-1/3">
                <h4 className="text-2xl font-bold text-slate-900">
                  01. Sourcing & QC
                </h4>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-slate-600 leading-relaxed text-lg">
                  Partnering directly with local coconut farmers. Rigorous
                  multi-stage sorting process at our warehouse to inspect water
                  content and shell quality.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start border-l-4 border-green-500 pl-6 md:pl-10">
              <div className="w-full md:w-1/3">
                <h4 className="text-2xl font-bold text-slate-900">
                  02. Processing & Packaging
                </h4>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-slate-600 leading-relaxed text-lg">
                  Custom husk trimming (Whole, Semi-Husked, or Full-Husked) and
                  secure packing according to buyer's specifications.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start border-l-4 border-green-500 pl-6 md:pl-10">
              <div className="w-full md:w-1/3">
                <h4 className="text-2xl font-bold text-slate-900">
                  03. Documentation
                </h4>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-slate-600 leading-relaxed text-lg">
                  In-house team handling B/L, COO, Invoice, Packing List, and
                  Phytosanitary Certificates.
                </p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start border-l-4 border-green-500 pl-6 md:pl-10">
              <div className="w-full md:w-1/3">
                <h4 className="text-2xl font-bold text-slate-900">
                  04. Freight & Shipping
                </h4>
              </div>
              <div className="w-full md:w-2/3">
                <p className="text-slate-600 leading-relaxed text-lg">
                  FCL container stuffing directly at our bays, shipped via
                  trusted lines (FOB).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRODUCTS SECTION */}
      <section className="w-full py-24 px-6 md:px-16 bg-white text-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">
              Our Core Commodities
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              Explore our premium coconut products, ready for global export.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-green-500 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl flex flex-col shadow-sm"
              >
                <div className="w-full h-56 bg-slate-100 rounded-xl mb-6 relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm text-green-700 text-xs font-bold px-3 py-1.5 rounded-full border border-green-200 shadow-sm z-10">
                    {product.tag}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900">
                  {product.name}
                </h3>
                <p className="text-slate-600 text-sm mb-8 leading-relaxed flex-grow">
                  {product.desc}
                </p>
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                  <span className="text-slate-500 font-semibold text-xs bg-slate-100 px-3 py-1.5 rounded-md">
                    FCL / LCL Available
                  </span>
                  <Link
                    href="/products"
                    className="text-sm font-bold text-green-700 hover:text-white hover:bg-green-600 px-4 py-2 rounded-lg transition-colors"
                  >
                    Check Specs &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
