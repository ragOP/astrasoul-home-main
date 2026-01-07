import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 py-12 px-6 sm:px-16">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 sm:p-12">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-6 text-center">
          Privacy Policy
        </h1>

        <p className="text-gray-600 text-center mb-10">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        {/* Intro */}
        <p className="text-gray-700 mb-6">
          At <strong>AstraSoul Digital</strong> (astrasoul.digital), your privacy
          is important to us. This Privacy Policy explains how we collect, use,
          and protect your personal information when you use our website and
          services.
        </p>

        {/* Data Collection */}
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          Information We Collect
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Name and email address</li>
          <li>Birth details (date, time, and place) for personalized reports</li>
          <li>Payment confirmation details (handled securely by third parties)</li>
        </ul>

        {/* Usage */}
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          How We Use Your Information
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>To create and deliver personalized astrology products</li>
          <li>To communicate order updates and support responses</li>
          <li>To improve our services and user experience</li>
        </ul>

        {/* Data Protection */}
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          Data Security
        </h2>
        <p className="text-gray-700 mb-6">
          We implement reasonable security measures to protect your data. Payment
          transactions are processed through secure third-party gateways. We do
          not store your card or banking information.
        </p>

        {/* Sharing */}
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          Data Sharing
        </h2>
        <p className="text-gray-700 mb-6">
          We do not sell, rent, or trade your personal data. Your information is
          shared only when required to deliver our services or comply with legal
          obligations.
        </p>

        {/* Cookies */}
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          Cookies
        </h2>
        <p className="text-gray-700 mb-6">
          We may use cookies to enhance site functionality and understand user
          behavior. You can disable cookies in your browser settings if you
          prefer.
        </p>

        {/* Rights */}
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          Your Rights
        </h2>
        <p className="text-gray-700 mb-6">
          You may request access, correction, or deletion of your personal data
          by contacting us.
        </p>

        {/* Contact */}
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          Contact Us
        </h2>
        <p className="text-gray-700">
          Email:{" "}
          <a
            href="mailto:support@astrasoul.digital"
            className="text-purple-700 font-medium underline"
          >
            support@astrasoul.digital
          </a>
        </p>

        {/* Footer */}
        <div className="text-center mt-10">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} AstraSoul Digital. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
