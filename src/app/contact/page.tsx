export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-50 pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Contact Our Sales Team
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Ready to import premium coconuts or jengkol? Fill out the form below
            to request a freight quote or ask about our logistics capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Kolom Kiri */}
          <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">
              Get in Touch
            </h3>

            <div className="space-y-8 text-slate-600">
              <div className="flex items-start gap-4">
                <div className="bg-green-50 border border-green-100 p-3 rounded-xl text-green-600 shrink-0 shadow-sm">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg mb-1">
                    Jakarta Port Warehouse
                  </p>
                  <p className="text-slate-500 leading-relaxed font-medium">
                    Tanjung Priok Port Area
                    <br />
                    Jakarta Utara, 14310
                    <br />
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-50 border border-green-100 p-3 rounded-xl text-green-600 shrink-0 shadow-sm">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg mb-1">
                    Email Us
                  </p>
                  <p className="text-slate-500 font-medium">
                    rendyceo@recimamajujayasukses.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-green-50 border border-green-100 p-3 rounded-xl text-green-600 shrink-0 shadow-sm">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-slate-900 text-lg mb-1">
                    Call / WhatsApp
                  </p>
                  <p className="text-slate-500 font-medium">
                    +62 812 7441 1106
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Form */}
          <div className="bg-white border border-slate-200 shadow-sm rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Send an Inquiry
            </h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all"
                    placeholder="Your Company Ltd"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Commodity of Interest
                </label>
                <select className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-700 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all">
                  <option>Fresh Whole Coconuts</option>
                  <option>Semi-Husked Coconuts</option>
                  <option>Premium Jengkol</option>
                  <option>Other / General Inquiry</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">
                  Message & Volume Details
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all"
                  placeholder="Tell us about your required volume (e.g., 1 FCL), destination port, and packaging needs..."
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-lg transition-all shadow-md shadow-green-600/20 hover:shadow-lg mt-2"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
