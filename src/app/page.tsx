import Link from "next/link";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Fresh Whole Coconuts",
      desc: "Premium grade whole coconuts sourced directly from top plantations. High water content, thick meat, and carefully sorted for export.",
      tag: "Top Export",
    },
    {
      id: 2,
      name: "Semi-Husked Coconuts",
      desc: "Fresh coconuts with partially removed husks for optimal shelf-life and efficient container loading. Ideal for industrial and retail markets.",
      tag: "Best Value",
    },
    {
      id: 3,
      name: "Premium Jengkol (Dogfruit)",
      desc: "Fresh, mature, and hand-selected Jengkol (Archidendron pauciflorum). Cleaned and packed securely to maintain quality during transit.",
      tag: "Specialty",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 pt-20">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center text-center px-6 md:px-16 text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1920&auto=format&fit=crop')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-slate-950/70 z-10"></div>
        <div className="relative z-20 flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/80 border border-slate-700 text-sm font-semibold text-green-400 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Global Trading & Logistics Provider
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 leading-tight tracking-tight text-white drop-shadow-md">
            Reliable Supply Chain for <br className="hidden md:block" />
            <span className="text-green-400">Indonesia's Best</span> Commodities
          </h1>
          <p className="text-base md:text-lg lg:text-xl mb-10 max-w-3xl text-slate-200 drop-shadow">
            Your trusted partner in trading and logistics. We export premium
            Coconuts and Jengkol with seamless delivery, competitive pricing,
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
              href="https://wa.me/6281274411106?text=Hello%20Recima%20Maju%20Jaya%20Sukses,%20I%20would%20like%20to%20talk%20with%20your%20sales%20team."
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
              Empowering Indonesian Agriculture for the Global Market
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              <strong>PT. Recima Maju Jaya Sukses</strong> is a premier
              agricultural export and logistics company based in Indonesia. We
              specialize in bridging the gap between local farmers and
              international markets, ensuring that Indonesia's finest
              commodities reach global destinations with uncompromised quality.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Unlike traditional brokers, we take full control of our supply
              chain. From direct sourcing at local plantations, rigorous
              warehousing quality control, to handling complex export
              documentation and freight forwarding.
            </p>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="bg-slate-100 h-48 rounded-2xl flex items-center justify-center text-slate-400 font-medium">
              Image: Plantation
            </div>
            <div className="bg-slate-100 h-48 rounded-2xl flex items-center justify-center text-slate-400 font-medium mt-8">
              Image: Warehouse
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHY RECIMA (Design Hitam Elegan - FULL ENGLISH) */}
      <section className="w-full bg-[#0a0a0a] text-white">
        <div className="flex flex-col lg:flex-row">
          {/* Bagian Kiri: Area Foto Placeholder */}
          <div className="w-full lg:w-1/2 min-h-[400px] lg:min-h-[600px] relative bg-slate-800 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-700">
            <div className="text-center p-8">
              <svg
                className="w-16 h-16 text-slate-500 mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-slate-400 font-medium text-lg">
                Coconut / Jengkol Processing Image Area
              </span>
              <p className="text-slate-500 text-sm mt-2">
                Insert your processing or warehouse image here
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
              <span className="text-green-500">Premium Coconuts & Jengkol</span>{" "}
              is Rising.
            </h3>
            <p className="text-slate-300 mb-10 leading-relaxed text-sm md:text-base">
              Indonesia is one of the world's finest agricultural exporters. We
              source directly from selected plantations—supplying whole
              coconuts, semi-husked coconuts, and Grade-A jengkol with full
              traceability, consistent quality, and complete export compliance
              documentation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10 mb-12">
              <div>
                <h4 className="text-green-500 font-bold text-lg mb-2">
                  Grade A & Premium
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Strictly sorted based on size, moisture, and quality. We
                  guarantee a consistent year-round supply for FCL shipments.
                </p>
              </div>
              <div>
                <h4 className="text-green-500 font-bold text-lg mb-2">
                  Custom Packaging & OEM
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Available in mesh bags, PP woven bags, or custom retail
                  packaging. Your brand, your specifications, your packaging.
                </p>
              </div>
              <div>
                <h4 className="text-green-500 font-bold text-lg mb-2">
                  Large-Scale Capacity
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Capable of supplying dozens of containers per month to fulfill
                  the demands of global industries and wholesale distributors.
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
                  Partnering directly with local farmers. Rigorous multi-stage
                  sorting process at our warehouse to reject defective items.
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
                  Custom cleaning and packing according to buyer's
                  specifications, including OEM requests.
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
                  trusted lines (FOB, CIF, or CFR).
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
              Explore our premium agricultural products, ready for global
              export.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-green-500 transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl flex flex-col shadow-sm"
              >
                <div className="w-full h-52 bg-slate-100 rounded-xl mb-6 flex items-center justify-center text-slate-400 group-hover:bg-slate-200 transition-colors relative overflow-hidden">
                  <span className="text-sm font-medium">
                    Image: {product.name}
                  </span>
                  <div className="absolute top-3 right-3 bg-white text-green-700 text-xs font-bold px-3 py-1.5 rounded-full border border-green-200 shadow-sm">
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
