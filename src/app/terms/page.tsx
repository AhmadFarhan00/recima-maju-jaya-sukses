import Link from "next/link";

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20 px-6 md:px-16 text-slate-800">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-slate-900">
          Terms of Service
        </h1>
        <p className="text-sm text-slate-500 mb-8">
          Last Updated: November 2026
        </p>

        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>
            Welcome to the official website of{" "}
            <strong>PT. Recima Maju Jaya Sukses</strong>. By accessing and using
            this website, you agree to comply with the following terms and
            conditions. These terms govern your use of our website and our B2B
            export inquiry services.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">
            1. Business Inquiries & Quotations
          </h2>
          <p>
            The information, product specifications, and shipping details
            provided on this website are for general informational purposes.
            Submitting a "Request a Quote" form does <strong>not</strong>{" "}
            constitute a binding legal contract or a confirmed purchase order.
            Final pricing, availability, and shipping terms (FOB, CIF, CFR) will
            be formalized exclusively through a separate, legally binding{" "}
            <strong>Sales Contract</strong> signed by both parties.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">
            2. Intellectual Property
          </h2>
          <p>
            All content on this website, including but not limited to company
            logos, text, graphics, workflow diagrams, and product descriptions,
            is the intellectual property of PT. Recima Maju Jaya Sukses.
            Unauthorized copying, reproduction, or commercial distribution of
            this material without prior written consent is strictly prohibited.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">
            3. Product Specifications & Tolerances
          </h2>
          <p>
            While we strive to provide accurate descriptions of our agricultural
            commodities (Coconuts and Jengkol), natural products are subject to
            slight variations in size, weight, and color. All grading and
            quality control standards will be explicitly detailed in the final
            Sales Contract and verified by independent surveyors (e.g., SGS)
            when requested.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">
            4. Limitation of Liability
          </h2>
          <p>
            PT. Recima Maju Jaya Sukses shall not be held liable for any direct,
            indirect, or consequential damages arising from the use of this
            website or reliance on its content. All international shipments are
            subject to the terms of the respective carriers and international
            maritime laws.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">
            5. Governing Law
          </h2>
          <p>
            These terms are governed by and construed in accordance with the
            laws of the Republic of Indonesia. Any disputes arising from website
            usage or preliminary inquiries shall be subject to the exclusive
            jurisdiction of the courts of Indonesia.
          </p>
        </div>
      </div>
    </main>
  );
}
