import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Grade A Coconut Products",
  description:
    "Explore our premium Grade A Indonesian coconut products: Semi-Husked Coconut, Full Husked Coconut, and Fresh Whole Coconut supplied directly from West Sumatra.",
};

interface ProductOverview {
  id: string;
  number: string;
  name: string;
  subtitle: string;
  image: string;
  summary: string;
  highlights: string[];
  bestFor: string;
  catalogHref: string;
}

const products: ProductOverview[] = [
  {
    id: "semi-husked",
    number: "01",
    name: "Semi-Husked Coconut",
    subtitle: "Kelapa Kupas Sabut Sebagian",
    image: "/semiHusked.jpeg",
    summary:
      "Mature Grade A coconuts with outer husk partially removed while retaining a protective coir cap over the eyes to prevent cracking during long-distance sea transit.",
    highlights: [
      "Grade A Only (900 gr – 1,200+ gr / nut)",
      "11–12 Months Fully Mature Kernel",
      "Extended Shelf Life for Sea Freight",
    ],
    bestFor: "Coconut Milk, Cream, VCO & Wholesale Markets",
    catalogHref: "/catalog#semi-husked-coconut",
  },
  {
    id: "full-husked",
    number: "02",
    name: "Full Husked Coconut",
    subtitle: "Kelapa Kupas Penuh (100% Dehusked)",
    image: "/fullHusked.jpeg",
    summary:
      "100% dehusked mature Grade A coconuts down to the clean hard brown shell, maximizing net kernel weight per container with zero husk waste at destination factories.",
    highlights: [
      "Grade A Only (750 gr – 1,000+ gr / nut)",
      "Intact Clean Dark Brown Hard Shell",
      "Maximum Container Loading Efficiency",
    ],
    bestFor: "Desiccated Coconut, VCO & Food Processing Plants",
    catalogHref: "/catalog#full-husked-coconut",
  },
  {
    id: "fresh-whole",
    number: "03",
    name: "Fresh Whole Coconut",
    subtitle: "Kelapa Utuh Bersabut Penuh",
    image: "/wholeCoconnut.jpeg",
    summary:
      "Hand-selected whole coconuts harvested directly from partner plantations in Padang Pariaman, West Sumatra, preserving natural moisture and full outer coir protection.",
    highlights: [
      "Grade A Only (1,200 gr – 1,500+ gr / nut)",
      "High Water Volume & Thick White Meat",
      "Complete Outer Coir & Shell Recovery",
    ],
    bestFor: "Fresh Retail, Beverage Industry & Coir/Charcoal Processing",
    catalogHref: "/catalog#fresh-whole-coconut",
  },
];

export default function ProductsPage() {
  return (
    <main className="bg-slate-50 pb-20">
      {/* 1. Header Section */}
      <section className="bg-emerald-950 text-white pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-emerald-900 border border-emerald-700 text-emerald-300 text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full mb-4">
            100% Indonesian Grade A Quality
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Coconut Product Line
          </h1>
          <div className="w-16 h-1 bg-red-500 mx-auto my-5 rounded-full" />
          <p className="max-w-2xl mx-auto text-emerald-100 text-sm sm:text-base leading-relaxed">
            Sourced directly from selected plantations in Padang Pariaman, West
            Sumatra. Each batch undergoes strict physical sorting to meet
            international Grade A export standards.
          </p>
        </div>
      </section>

      {/* 2. 3-Column Product Showcase Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden flex flex-col justify-between hover:shadow-xl transition"
            >
              <div>
                {/* Foto Produk */}
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-green-700 text-white text-xs font-bold px-3 py-1 rounded-md shadow">
                    Grade A • #{product.number}
                  </div>
                </div>

                {/* Konten Ringkas Produk */}
                <div className="p-6">
                  <h2 className="text-xl font-bold text-slate-900">
                    {product.name}
                  </h2>
                  <p className="text-xs font-semibold text-green-700 uppercase tracking-wide mt-0.5 mb-3">
                    {product.subtitle}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {product.summary}
                  </p>

                  {/* Poin Keunggulan */}
                  <ul className="space-y-2 mb-5">
                    {product.highlights.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 font-medium"
                      >
                        <span className="text-green-600 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-green-50 border border-green-100 rounded-lg px-3.5 py-2.5 text-xs">
                    <span className="font-bold text-green-900 block mb-0.5">
                      Primary Application:
                    </span>
                    <span className="text-slate-700">{product.bestFor}</span>
                  </div>
                </div>
              </div>

              {/* Tombol Aksi ke Catalog Detail & Contact */}
              <div className="px-6 pb-6 pt-2 flex flex-col sm:flex-row gap-2.5">
                <Link
                  href={product.catalogHref}
                  className="flex-1 text-center bg-emerald-900 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-lg transition"
                >
                  View Full Specs →
                </Link>
                <Link
                  href="/contact"
                  className="text-center border border-slate-300 hover:border-green-700 text-slate-800 hover:text-green-800 text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-lg transition"
                >
                  Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Banner Ajakan ke Halaman Catalog Lengkap */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Need Complete Technical Specifications &amp; Container Load Data?
            </h3>
            <p className="text-slate-600 text-sm sm:text-base mt-1.5">
              Compare HS Codes, exact nut weights, packaging options, and
              20ft/40ft HC container capacities in our official export catalog.
            </p>
          </div>
          <Link
            href="/catalog"
            className="shrink-0 bg-green-600 hover:bg-green-700 text-white text-sm font-bold px-6 py-3.5 rounded-xl transition shadow-sm"
          >
            Open Full Export Catalog →
          </Link>
        </div>
      </section>
    </main>
  );
}
