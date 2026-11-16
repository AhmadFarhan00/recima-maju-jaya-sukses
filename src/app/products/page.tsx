import Link from "next/link";
import Image from "next/image";

export default function ProductsPage() {
  const coconutProducts = [
    {
      id: 1,
      name: "Fresh Whole Coconuts",
      subtitle: "Traditional export-grade whole coconuts with complete husk.",
      image: "/wholeCoconnut.jpeg",
      tag: "Top Export",
      specs: {
        weight: "900g - 1.2kg per piece",
        moq: "1 × 20ft Container (approx. 20-22 MT)",
        packaging: "Mesh bags (20-25 pcs/bag) or loose loading",
        supplyAbility: "12 Containers / Month",
        maturity: "11 - 12 months old",
        waterContent: "High natural sweetness, min. 300-400ml",
      },
      desc: "Our whole coconuts are harvested at the optimal maturity stage to ensure maximum water volume and thick, rich meat. Perfect for fresh wholesale markets and retail distribution worldwide.",
    },
    {
      id: 2,
      name: "Semi-Husked Coconuts",
      subtitle:
        "Partially dehusked for optimized shipping volume and extended shelf-life.",
      image: "/semiHusked.jpeg",
      tag: "Best Value",
      specs: {
        weight: "800g - 1.1kg per piece",
        moq: "1 × 20ft Container",
        packaging: "Woven PP bags or Mesh bags",
        supplyAbility: "15 Containers / Month",
        maturity: "11 - 12 months old",
        shelfLife: "Extended durability for ocean transit",
      },
      desc: "Semi-husked coconuts strike the ideal balance between protection and space efficiency inside shipping containers. Widely favored by food processing plants and international importers.",
    },
    {
      id: 3,
      name: "Full-Husked Coconuts (Husked / Naked)",
      subtitle:
        "Completely stripped hard-shell coconuts, ready for industrial processing.",
      image: "/fullHusked.jpeg",
      tag: "Industrial Grade",
      specs: {
        weight: "600g - 900g per piece",
        moq: "1 × 20ft Container",
        packaging: "Heavy-duty PP woven bags (approx. 25-50 kg/bag)",
        supplyAbility: "10 Containers / Month",
        processing: "Cleaned, fiber-trimmed, and shell-inspected",
        application: "Coconut milk, desiccated coconut, and oil extraction",
      },
      desc: "Fully husked coconuts maximize container load capacity and minimize waste for industrial manufacturers. Every nut undergoes strict quality checks to guarantee zero mold and high kernel yield.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20 px-6 md:px-16 text-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-green-600 uppercase tracking-widest bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
            Export Commodities Catalogue
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 tracking-tight">
            Premium Indonesian Coconut Products
          </h1>
          <p className="text-slate-600 text-base md:text-lg">
            Sourced directly from top agricultural plantations in Indonesia.
            Processed, sorted, and packed to meet strict international B2B
            quality standards.
          </p>
        </div>

        {/* Product List */}
        <div className="space-y-12">
          {coconutProducts.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm hover:border-green-500 transition-all duration-300 flex flex-col lg:flex-row gap-8 items-center"
            >
              {/* Product Image */}
              <div className="w-full lg:w-2/5 h-72 bg-slate-100 rounded-2xl relative overflow-hidden group">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-green-700 text-xs font-bold px-3.5 py-1.5 rounded-full border border-green-200 shadow-sm z-10">
                  {item.tag}
                </div>
              </div>

              {/* Details Content */}
              <div className="w-full lg:w-3/5 flex flex-col">
                <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-1">
                  {item.name}
                </h2>
                <p className="text-sm font-semibold text-green-600 mb-4">
                  {item.subtitle}
                </p>
                <p className="text-slate-600 text-base mb-6 leading-relaxed">
                  {item.desc}
                </p>

                {/* Technical Specs Grid */}
                <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  {Object.entries(item.specs).map(([key, value], idx) => (
                    <div key={idx} className="flex flex-col">
                      <span className="text-slate-400 uppercase text-[0.65rem] font-bold tracking-wider">
                        {key}
                      </span>
                      <span className="text-slate-800 font-semibold mt-0.5">
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3.5 rounded-xl transition-all text-center shadow-lg shadow-green-600/20"
                  >
                    Request Quote for This Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
