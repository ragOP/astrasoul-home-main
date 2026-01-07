import React from "react";

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 py-12 px-6 sm:px-16">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 sm:p-12">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-6 text-center">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 text-center mb-10">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        {/* Intro */}
        <p className="text-gray-700 mb-6">
          Welcome to <strong>AstraSoul Digital</strong> (astrasoul.digital). By
          accessing or purchasing from our website, you agree to the following
          terms and conditions. Please read them carefully.
        </p>

        {/* Products */}
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          Digital Products
        </h2>
        <p className="text-gray-700 mb-6">
          All products offered are digital and personalized in nature. Delivery
          is made electronically via email. No physical goods are shipped unless
          explicitly stated.
        </p>

        {/* Usage */}
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          Intended Use
        </h2>
        <p className="text-gray-700 mb-6">
          Our astrology reports and insights are provided for entertainment and
          personal reflection only. They are not a substitute for professional,
          medical, legal, or financial advice.
        </p>

        {/* Accuracy */}
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          Information Accuracy
        </h2>
        <p className="text-gray-700 mb-6">
          You are responsible for providing accurate birth and personal details.
          Incorrect information may affect the quality or accuracy of the
          delivered report.
        </p>

        {/* Payments */}
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          Payments
        </h2>
        <p className="text-gray-700 mb-6">
          Prices are listed in applicable currency and may change without prior
          notice. Payments are processed securely via third-party payment
          gateways. We do not store payment card details.
        </p>

        {/* Refunds */}
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          Refunds
        </h2>
        <p className="text-gray-700 mb-6">
          Due to the personalized nature of our digital products, refunds are
          generally not provided once the product is delivered. Exceptions may
          apply in cases of duplicate payment or non-delivery.
        </p>

        {/* Intellectual Property */}
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          Intellectual Property
        </h2>
        <p className="text-gray-700 mb-6">
          All content, reports, designs, and materials are the intellectual
          property of AstraSoul Digital. Unauthorized copying, resale, or
          distribution is strictly prohibited.
        </p>

        {/* Limitation */}
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          Limitation of Liability
        </h2>
        <p className="text-gray-700 mb-6">
          AstraSoul Digital shall not be liable for any decisions, actions, or
          outcomes arising from the use of our products or services.
        </p>

        {/* Changes */}
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          Changes to Terms
        </h2>
        <p className="text-gray-700 mb-6">
          We reserve the right to update or modify these terms at any time.
          Continued use of the website implies acceptance of the revised terms.
        </p>

        {/* Contact */}
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          Contact
        </h2>
        <p className="text-gray-700">
          For any questions regarding these terms, please contact us at{" "}
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
