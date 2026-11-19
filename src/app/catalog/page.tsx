import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grade A Coconut Export Catalog",
  description:
    "Official Grade A Export Product Catalog of PT. Recima Maju Jaya Sukses. Detailed technical specifications for Indonesian Semi-Husked Coconuts, Full Husked Coconuts, and Fresh Whole Coconuts.",
};

interface SpecRow {
  label: string;
  value: string;
}

interface CatalogProduct {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  description: string;
  utilization: { title: string; detail: string }[];
  image: string;
  specs: SpecRow[];
}

const catalogProducts: CatalogProduct[] = [
  {
    id: "semi-husked-coconut",
    number: "01",
    name: "Semi-Husked Coconut",
    subtitle: "Kelapa Kupas Sabut Sebagian (Grade A)",
    description:
      "Mature Indonesian Grade A coconuts with the outer husk partially removed while leaving a protective coir cap over the eyes to prevent cracking and premature germination during long-distance sea freight.",
    utilization: [
      {
        title: "Coconut Milk, Cream & VCO Processing",
        detail:
          "High fat content and thick white meat ideal for industrial coconut milk, cream, and virgin coconut oil (VCO) production.",
      },
      {
        title: "Wholesale & Extended Sea Transit",
        detail:
          "Protective husk cap preserves internal moisture during international shipping and reduces transit breakage.",
      },
    ],
    image: "/semiHusked.jpeg",
    specs: [
      {
        label: "Type / Maturity",
        value: "Fully Mature (11–12 Months) Grade A Export Quality",
      },
      { label: "HS Code", value: "0801.19.90" },
      { label: "Color", value: "Natural Brown Coir Cap over Intact Shell" },
      {
        label: "Grade",
        value: "Grade A Only (Large Uniform Size, No Cracks, Non-Germinated)",
      },
      { label: "Weight per Nut", value: "900 gr – 1,200+ gr" },
      { label: "Diameter", value: "14 cm – 16+ cm" },
      { label: "Packaging", value: "PP Mesh Bag / Gunny Bag (25 kg or 50 kg)" },
      {
        label: "Container Load",
        value: "~13–14 MT (20ft FCL) / ~26–28 MT (40ft HC)",
      },
      { label: "Supply Capacity", value: "100 – 200 MT / Month" },
    ],
  },
  {
    id: "full-husked-coconut",
    number: "02",
    name: "Full Husked Coconut",
    subtitle: "Kelapa Kupas Penuh / 100% Dehusked (Grade A)",
    description:
      "Fully mature Indonesian Grade A coconuts with 100% of the outer fibrous husk removed down to the hard brown shell, maximizing net kernel weight per container and eliminating de-husking waste at destination factories.",
    utilization: [
      {
        title: "Direct Factory Processing (Zero Husk Waste)",
        detail:
          "Ready-to-crack clean brown shells ideal for desiccated coconut, coconut milk/cream, and VCO manufacturers.",
      },
      {
        title: "Maximum Container Efficiency & Shell Recovery",
        detail:
          "Higher nut count per container load, with dense hard shells suitable for charcoal briquettes and activated carbon.",
      },
    ],
    image: "/fullHusked.jpeg",
    specs: [
      {
        label: "Type / Maturity",
        value: "100% Dehusked Mature Coconut (11–12 Months)",
      },
      { label: "HS Code", value: "0801.19.90" },
      { label: "Color", value: "Clean Natural Dark Brown Hard Shell" },
      {
        label: "Grade",
        value: "Grade A Only (Large Uniform Size, Intact Shell, No Cracks)",
      },
      { label: "Weight per Nut", value: "750 gr – 1,000+ gr" },
      { label: "Diameter", value: "12 cm – 14+ cm" },
      { label: "Packaging", value: "PP Woven Bag / Mesh Bag (25 kg or 50 kg)" },
      {
        label: "Container Load",
        value: "~14–15 MT (20ft FCL) / ~27–28 MT (40ft HC)",
      },
      { label: "Supply Capacity", value: "100 – 200 MT / Month" },
    ],
  },
  {
    id: "fresh-whole-coconut",
    number: "03",
    name: "Fresh Whole Coconut",
    subtitle: "Kelapa Utuh Bersabut Penuh / Unhusked (Grade A)",
    description:
      "Harvested directly from selected partner plantations across Sumatra and sorted under strict quality control to guarantee high water volume, thick kernel, and maximum natural protection.",
    utilization: [
      {
        title: "Coir Fiber & Shell Utilization",
        detail:
          "Complete outer husk provides coco peat/fiber raw material while the inner shell yields high-grade activated carbon.",
      },
      {
        title: "Fresh Market & Beverage Industry",
        detail:
          "Naturally sweet coconut water and thick flesh suitable for fresh retail markets, culinary use, and oil extraction.",
      },
    ],
    image: "/wholeCoconnut.jpeg",
    specs: [
      { label: "Type", value: "Mature Brown / Young Green Whole Coconut" },
      { label: "HS Code", value: "0801.19.10 / 0801.19.90" },
      { label: "Color", value: "Natural Brown / Fresh Green" },
      {
        label: "Grade",
        value: "Grade A Only (Large Uniform Size, Clean Exterior, No Cracks)",
      },
      { label: "Weight per Nut", value: "1,200 gr – 1,500+ gr" },
      { label: "Shelf Life", value: "45 – 60 Days (Ventilated / Reefer)" },
      { label: "Packaging", value: "Ventilated Mesh Bag / Export Carton Box" },
      {
        label: "Container Load",
        value: "~12–13 MT (20ft FCL) / ~24–26 MT (40ft HC)",
      },
      { label: "Supply Capacity", value: "80 – 150 MT / Month" },
    ],
  },
];

export default function CatalogPage() {
  return (
    <main className="bg-slate-50 pb-20">
      {/* 1. Split-Screen Cover Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
          {/* Kiri: Visual Perkebunan Kelapa */}
          <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] bg-emerald-950">
            <img
              src="/background.jpeg"
              alt="Indonesian Coconut Plantation"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-6 sm:p-8">
              <span className="inline-block bg-green-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                100% Indonesian Grade A Coconut Origin
              </span>
            </div>
          </div>

          {/* Kanan: Identitas Perusahaan & Judul Katalog */}
          <div className="lg:col-span-5 bg-emerald-900 text-white p-8 sm:p-12 flex flex-col justify-between">
            <div>
              <p className="text-emerald-300 text-xs font-bold tracking-widest uppercase mb-3">
                Official Grade A Export Specification
              </p>
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight tracking-tight">
                PT. RECIMA MAJU JAYA SUKSES
              </h1>
              <div className="w-16 h-1 bg-red-500 my-5 rounded-full" />
              <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
                Indonesian Coconut Trading &amp; Global Logistics. Detailed
                Grade A coconut specifications, packaging standards, and
                container loading capacities for international buyers.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-emerald-800 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-emerald-300 font-semibold">
                Grade A Catalog 2026
              </span>
              <Link
                href="/contact"
                className="bg-white text-emerald-900 hover:bg-emerald-50 text-xs font-bold px-4 py-2.5 rounded-lg transition"
              >
                Request Quotation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Daftar Produk Kelapa dengan Tata Letak Bergantian Kiri-Kanan */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14 space-y-14">
        {catalogProducts.map((product, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              key={product.id}
              id={product.id}
              className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden p-6 sm:p-10"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Kolom Foto & Pemanfaatan Kelapa */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative rounded-xl overflow-hidden border-2 border-green-700/20 shadow-sm aspect-[4/3] bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-md shadow">
                      Grade A • #{product.number}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold text-slate-900">
                      {product.number}. {product.name}
                    </h2>
                    <p className="text-sm font-medium text-green-700 mb-3">
                      {product.subtitle}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {product.description}
                    </p>

                    <div className="space-y-2.5 bg-green-50/70 p-4 rounded-xl border border-green-100">
                      {product.utilization.map((item) => (
                        <div key={item.title} className="text-sm">
                          <span className="font-bold text-green-900">
                            • {item.title}:{" "}
                          </span>
                          <span className="text-slate-700">{item.detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Kolom Tabel Spesifikasi Hijau */}
                <div
                  className={`lg:col-span-7 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="overflow-hidden rounded-xl border border-green-700/30 shadow-sm">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-green-700 text-white">
                          <th className="py-3.5 px-4 sm:px-6 text-sm font-bold uppercase tracking-wider w-2/5 border-r border-green-600">
                            Specification
                          </th>
                          <th className="py-3.5 px-4 sm:px-6 text-sm font-bold uppercase tracking-wider w-3/5">
                            Detail
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-green-100 text-sm">
                        {product.specs.map((row, idx) => (
                          <tr
                            key={row.label}
                            className={
                              idx % 2 === 0 ? "bg-green-50/60" : "bg-white"
                            }
                          >
                            <td className="py-3 px-4 sm:px-6 font-semibold text-slate-800 border-r border-green-100">
                              {row.label}
                            </td>
                            <td className="py-3 px-4 sm:px-6 text-slate-700 font-medium">
                              {row.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Tombol Tanya Harga / Sampel */}
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-4 bg-slate-50 px-5 py-4 rounded-xl border border-slate-200">
                    <p className="text-xs sm:text-sm text-slate-600">
                      Need custom packaging or FOB price quote for Grade A{" "}
                      <strong className="text-slate-900">{product.name}</strong>
                      ?
                    </p>
                    <Link
                      href="/contact"
                      className="bg-green-600 hover:bg-green-700 text-white text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-lg transition shadow-sm"
                    >
                      Inquire Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* 3. Ketentuan Ekspor & Pengiriman */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="bg-emerald-950 text-white rounded-2xl p-8 sm:p-10 shadow-lg">
          <h3 className="text-xl sm:text-2xl font-bold mb-6">
            Standard Export Terms &amp; Logistics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
            <div className="bg-emerald-900/60 p-4 rounded-xl border border-emerald-800">
              <p className="text-emerald-300 font-semibold mb-1">Incoterms</p>
              <p className="text-white font-medium">FOB (Teluk Bayur)</p>
            </div>
            <div className="bg-emerald-900/60 p-4 rounded-xl border border-emerald-800">
              <p className="text-emerald-300 font-semibold mb-1">
                Payment Terms
              </p>
              <p className="text-white font-medium">
                T/T (Telegraphic Transfer)
              </p>
            </div>
            <div className="bg-emerald-900/60 p-4 rounded-xl border border-emerald-800">
              <p className="text-emerald-300 font-semibold mb-1">
                Quality Inspection
              </p>
              <p className="text-white font-medium">
                Pre-shipment inspection by SGS / Sucofindo upon request
              </p>
            </div>
            <div className="bg-emerald-900/60 p-4 rounded-xl border border-emerald-800">
              <p className="text-emerald-300 font-semibold mb-1">
                Export Documents
              </p>
              <p className="text-white font-medium">
                Phytosanitary Certificate, COO, Bill of Lading, Packing List
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
