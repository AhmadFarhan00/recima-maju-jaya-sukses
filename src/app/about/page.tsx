import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 pt-32 pb-16 text-slate-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            About Recima Maju Jaya Sukses
          </h1>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            Connecting Indonesia's fertile lands to the global market. We are a
            premier export and logistics company specializing in high-quality
            agricultural commodities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <div className="bg-white shadow-sm rounded-2xl h-80 md:h-full min-h-[350px] flex items-center justify-center border border-slate-200 relative overflow-hidden group">
            <span className="text-slate-400 font-bold">
              Image: Warehouse / Plantation
            </span>
            <div className="absolute inset-0 bg-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>

          <div>
            <h2 className="text-3xl font-extrabold mb-6 text-slate-900">
              Our Mission & Operations
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed font-medium">
              Established with a vision to elevate Indonesian agriculture,
              Recima Maju Jaya Sukses bridges the gap between local farmers and
              international buyers. We focus primarily on premium whole
              coconuts, semi-husked coconuts, and grade-A jengkol.
            </p>
            <p className="text-slate-600 mb-8 leading-relaxed font-medium">
              By managing our own supply chain and warehouse facilities near
              Jakarta's main ports, we ensure that every container shipped meets
              strict international phytosanitary standards and arrives safely at
              its destination.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-3xl font-extrabold text-slate-900 mb-1">
                  10+
                </h4>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                  Years Experience
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="text-3xl font-extrabold text-slate-900 mb-1">
                  25+
                </h4>
                <p className="text-sm font-bold text-slate-500 uppercase tracking-wider">
                  Countries Reached
                </p>
              </div>
            </div>

            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3.5 rounded-lg font-bold transition-all shadow-md shadow-green-600/20"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-10 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Our Core Strengths
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div>
              <div className="bg-green-50 border border-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600 shadow-sm transform rotate-3">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Uncompromising Quality
              </h3>
              <p className="text-slate-600 text-sm font-medium">
                Strict sorting and grading processes before container stuffing
                to ensure zero defects.
              </p>
            </div>
            <div>
              <div className="bg-green-50 border border-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600 shadow-sm -rotate-3">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Global Logistics
              </h3>
              <p className="text-slate-600 text-sm font-medium">
                Seamless freight forwarding via FCL (Full Container Load) with
                complete export documents.
              </p>
            </div>
            <div>
              <div className="bg-green-50 border border-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600 shadow-sm rotate-3">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-900">
                Farmer Empowerment
              </h3>
              <p className="text-slate-600 text-sm font-medium">
                Working directly with local plantations to ensure fair trade and
                sustainable agriculture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
