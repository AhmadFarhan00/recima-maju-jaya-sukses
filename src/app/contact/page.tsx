"use client";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20 px-6 md:px-16 text-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-green-600 uppercase tracking-widest bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
            Get in Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 tracking-tight">
            Request a Freight Quote & Inquiry
          </h1>
          <p className="text-slate-600 text-base md:text-lg">
            Connect directly with our export management team for specifications,
            container pricing (FOB/CIF), and custom orders.
          </p>
        </div>

        {/* Grid Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Info Details */}
          <div className="lg:col-span-1 bg-white border border-slate-200 p-8 rounded-3xl shadow-sm space-y-8">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Head Office
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Panyabungan, Mandailing Natal, Sumatera Utara, Indonesia.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Direct Inquiries
              </h3>
              <p className="text-slate-600 text-sm">
                Email: rendyceo@recimamajujayasukses.com
              </p>
              <p className="text-slate-600 text-sm">
                WhatsApp: +62 813-7222-7717
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Business Hours
              </h3>
              <p className="text-slate-600 text-sm">
                Monday – Friday: 08.00 - 17.00 (WIB)
              </p>
              <p className="text-slate-600 text-sm">
                Saturday: 08.00 - 13.00 (WIB)
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-sm">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert(
                  "Inquiry submitted successfully! Our team will contact you shortly.",
                );
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-600"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Import Ltd."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Select Product Interest
                  </label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-600">
                    <option>Fresh Whole Coconuts</option>
                    <option>Semi-Husked Coconuts</option>
                    <option>Full-Husked Coconuts (Industrial)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Message / Destination Port
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Please state estimated volume, container type (FCL 20ft), and destination port..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-green-600"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-600/20 text-center"
              >
                Submit Inquiry & Request Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
