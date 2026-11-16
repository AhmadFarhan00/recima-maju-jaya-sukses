import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20 px-6 md:px-16 text-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-green-600 uppercase tracking-widest bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
            Corporate Profile
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 tracking-tight">
            About PT. Recima Maju Jaya Sukses
          </h1>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed">
            Leading the Indonesian agricultural export sector with strict
            quality control, transparent supply chain, and dedication to global
            coconut distribution.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">
              Connecting Indonesian Coconut Plantations to Global Markets
            </h2>
            <p>
              Founded with a strong commitment to excellence,{" "}
              <strong>PT. Recima Maju Jaya Sukses</strong> specializes in the
              collection, processing, and international export of premium-grade
              Indonesian coconuts. We work side-by-side with local farmers to
              ensure sustainable harvesting and exceptional kernel quality.
            </p>
            <p>
              Our operations cover the entire supply chain—from direct
              plantation sourcing, meticulous sorting in our modern warehouses,
              to managing complex international logistics and customs
              documentation (Phytosanitary, COO, Bill of Lading).
            </p>
          </div>
          {/* Bagian Kanan: 2 Foto Perusahaan Kotak Penuh */}
          <div className="w-full grid grid-cols-2 gap-4 md:gap-6 items-center">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md bg-slate-100 group">
              <Image
                src="/plantation.jpeg"
                alt="Plantation Sourcing - PT. Recima Maju Jaya Sukses"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-md bg-slate-100 mt-6 md:mt-10 group">
              <Image
                src="/warehouse.jpeg"
                alt="Warehouse Sorting - PT. Recima Maju Jaya Sukses"
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
              01
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Our Vision
            </h3>
            <p className="text-slate-600 leading-relaxed">
              To become the most trusted and reliable global supplier of
              Indonesian coconut products, recognized for uncompromised quality,
              integrity, and sustainable trade practices.
            </p>
          </div>

          <div className="bg-white border border-slate-200 p-8 md:p-10 rounded-3xl shadow-sm">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center font-bold text-xl mb-6">
              02
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900">
              Our Mission
            </h3>
            <ul className="space-y-3 text-slate-600">
              <li className="flex items-start gap-2">
                ✓ Delivering export-grade coconuts that meet international
                phytosanitary standards.
              </li>
              <li className="flex items-start gap-2">
                ✓ Empowering local farmers through fair partnerships and
                transparent pricing.
              </li>
              <li className="flex items-start gap-2">
                ✓ Providing seamless B2B logistics with timely container
                shipments worldwide.
              </li>
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-[#0a0a0a] text-white rounded-3xl p-10 md:p-16 text-center">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
            Ready to Import Premium Coconuts?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8 text-sm md:text-base">
            Partner with us for reliable FCL shipments, competitive pricing, and
            flexible packaging solutions tailored to your business needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-4 rounded-xl transition-colors"
          >
            Contact Our Sales Team
          </Link>
        </div>
      </div>
    </main>
  );
}
