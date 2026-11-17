"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    product: "Fresh Whole Coconuts",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Nomor WhatsApp tujuan (format internasional tanpa tanda + atau spasi)
    const phoneNumber = "6282369456898";

    // Format pesan yang akan muncul di WhatsApp
    const textMessage = `Hello *PT. Recima Maju Jaya Sukses*,
I would like to request a quote for export inquiry:

*Full Name:* ${formData.fullName}
*Business Email:* ${formData.email}
*Company Name:* ${formData.company}
*Product Interest:* ${formData.product}
*Message / Destination Port:*
${formData.message}`;

    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Membuka WhatsApp di tab baru
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20 px-6 md:px-16 text-slate-900">
      <div className="max-w-7xl mx-auto">
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-green-600 uppercase tracking-widest bg-green-50 px-3 py-1.5 rounded-full border border-green-200">
            Get In Touch
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold mt-4 mb-4 tracking-tight">
            Request Export Quote
          </h1>
          <p className="text-slate-600 text-base md:text-lg">
            Connect directly with our international trade team for pricing,
            FCL/LCL shipping schedules, and product specifications.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Kolom Kiri: Info Perusahaan */}
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm space-y-8">
            <div>
              <h2 className="text-lg font-extrabold text-slate-900 mb-2">
                Head Office
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Lubuk Alung, padang pariaman, Sumatera Barat, Indonesia.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-extrabold text-slate-900 mb-2">
                Direct Inquiries
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Email: rendyceo@recimamajujayasukses.com
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mt-1">
                WhatsApp: +62 823-6945-6898
              </p>
            </div>

            <div>
              <h2 className="text-lg font-extrabold text-slate-900 mb-2">
                Business Hours
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Monday – Friday: 08.00 - 17.00 (WIB)
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mt-1">
                Saturday: 08.00 - 13.00 (WIB)
              </p>
            </div>
          </div>

          {/* Kolom Kanan: Formulir Inquiry */}
          <div className="lg:col-span-2 bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-green-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2">
                    Business Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-green-500 text-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Import Ltd."
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-green-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-800 mb-2">
                    Select Product Interest
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-green-500 text-sm font-medium"
                  >
                    <option value="Fresh Whole Coconuts">
                      Fresh Whole Coconuts
                    </option>
                    <option value="Semi-Husked Coconuts">
                      Semi-Husked Coconuts
                    </option>
                    <option value="Full-Husked Coconuts">
                      Full-Husked Coconuts
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-800 mb-2">
                  Message / Destination Port
                </label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please state estimated volume, container type (FCL 20ft), and destination port..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:border-green-500 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-green-600/20 cursor-pointer"
              >
                Submit Inquiry &amp; Request Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
