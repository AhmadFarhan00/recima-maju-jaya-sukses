import Link from "next/link";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Fresh Whole Coconuts",
      desc: "Premium grade whole coconuts sourced directly from top plantations. High water content, thick meat, and carefully sorted for export.",
      specs: [
        "Weight: 800g - 1.2kg per piece",
        "Packaging: Mesh bags (20-25 pcs/bag)",
        "MOQ: 1x20ft Container",
        "Supply Ability: 10 Containers / Month",
      ],
      tag: "Top Export",
    },
    {
      id: 2,
      name: "Semi-Husked Coconuts",
      desc: "Fresh coconuts with partially removed husks for optimal shelf-life and efficient container loading. Ideal for industrial and retail markets.",
      specs: [
        "Weight: 700g - 1.0kg per piece",
        "Packaging: PP Bags (50 pcs/bag)",
        "MOQ: 1x20ft Container",
        "Supply Ability: 15 Containers / Month",
      ],
      tag: "Best Value",
    },
    {
      id: 3,
      name: "Premium Jengkol (Dogfruit)",
      desc: "Fresh, mature, and hand-selected Jengkol (Archidendron pauciflorum). Cleaned and packed securely to maintain quality during transit.",
      specs: [
        "Quality: Grade A, Mature & Fresh",
        "Packaging: 25kg / 50kg PP Woven Bags",
        "MOQ: 5 Metric Tons",
        "Supply Ability: 50 MT / Month",
      ],
      tag: "Specialty",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col bg-slate-50 pt-32 pb-24 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Our Commodities
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Explore our export-ready agricultural products. We guarantee
            rigorous quality control from harvesting to container stuffing.
          </p>
        </div>

        <div className="space-y-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`flex flex-col md:flex-row gap-10 items-center bg-white border border-slate-200 shadow-sm rounded-3xl p-8 md:p-10 ${index % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            >
              <div className="w-full md:w-5/12 h-64 md:h-80 bg-slate-100 rounded-2xl flex flex-col items-center justify-center text-slate-400 relative overflow-hidden group">
                <span className="text-sm font-bold z-10">
                  Image: {product.name}
                </span>
                <div className="absolute top-4 right-4 bg-white text-green-700 text-xs font-bold px-4 py-1.5 rounded-full border border-green-200 shadow-sm z-10">
                  {product.tag}
                </div>
                <div className="absolute inset-0 bg-slate-200/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="w-full md:w-7/12">
                <h2 className="text-3xl font-extrabold mb-4 text-slate-900">
                  {product.name}
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed font-medium">
                  {product.desc}
                </p>

                <h4 className="text-lg font-bold text-slate-900 mb-4 border-b border-slate-100 pb-2">
                  Technical Specifications
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {product.specs.map((spec, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-slate-600 font-medium text-sm"
                    >
                      <svg
                        className="w-5 h-5 text-green-500 shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={3}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {spec}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-lg font-bold transition-all shadow-md shadow-green-600/20 text-center"
                  >
                    Request Quote
                  </Link>
                  <button className="bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 px-8 py-3.5 rounded-lg font-bold transition-all text-center">
                    Download Specs PDF
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center bg-green-50 border border-green-200 rounded-3xl p-10 md:p-16 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4 text-slate-900">
            Need Custom Packaging or OEM?
          </h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto font-medium">
            We offer private label packaging and custom sorting sizes for bulk
            orders. Let us know your specific market requirements.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white border border-slate-200 text-slate-900 hover:bg-slate-50 hover:border-slate-300 px-8 py-3.5 rounded-lg font-bold transition-all shadow-sm"
          >
            Talk to Our Experts
          </Link>
        </div>
      </div>
    </main>
  );
}
