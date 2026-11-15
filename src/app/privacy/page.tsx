import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-20 px-6 md:px-16 text-slate-800">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-200">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-2 text-slate-900">
          Privacy Policy
        </h1>
        <p className="text-sm text-slate-500 mb-8">
          Last Updated: November 2026
        </p>

        <div className="space-y-6 text-slate-600 leading-relaxed">
          <p>
            At <strong>PT. Recima Maju Jaya Sukses</strong>, we prioritize the
            privacy and security of our clients and website visitors. This
            Privacy Policy outlines how we collect, use, and protect your
            information when you interact with our website and B2B services.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">
            1. Information We Collect
          </h2>
          <p>
            We only collect information that you voluntarily provide to us when
            requesting a freight quote or contacting our sales team. This may
            include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Full Name and Job Title</li>
            <li>Company Name and Business Registration Details</li>
            <li>Contact Information (Email address, WhatsApp/Phone number)</li>
            <li>Shipping destination ports and commodity requirements</li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">
            2. How We Use Your Information
          </h2>
          <p>
            The information we collect is strictly used for business purposes,
            specifically to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Process your inquiries and provide accurate freight quotations.
            </li>
            <li>
              Communicate regarding product specifications, OEM requests, and
              shipping logistics.
            </li>
            <li>
              Fulfill legal and regulatory requirements for international export
              documentation.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">
            3. Data Sharing & Security
          </h2>
          <p>
            We <strong>do not sell, rent, or trade</strong> your personal or
            corporate data to third parties. Your information may only be shared
            with trusted logistics partners (e.g., freight forwarders, shipping
            lines) strictly for the purpose of executing your requested
            shipments. We implement industry-standard security measures to
            protect your data against unauthorized access.
          </p>

          <h2 className="text-xl font-bold text-slate-900 mt-8 mb-4">
            4. Contact Us
          </h2>
          <p>
            If you have any questions regarding this Privacy Policy or wish to
            update your business information in our records, please contact us
            via our{" "}
            <Link
              href="/contact"
              className="text-green-600 hover:underline font-semibold"
            >
              Contact Page
            </Link>
            .
          </p>
        </div>
      </div>
    </main>
  );
}
