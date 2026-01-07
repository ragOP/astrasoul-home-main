import React from "react";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 py-12 px-6 sm:px-16">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 sm:p-12">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-6 text-center">
          Refund Policy
        </h1>

        <p className="text-gray-600 text-center mb-10">
          Effective Date: {new Date().toLocaleDateString()}
        </p>

        {/* Overview */}
        <p className="text-gray-700 mb-6">
          At <strong>AstraSoul Digital</strong> (astrasoul.digital), our products
          are digital and personalized. Because we begin processing your custom
          report after purchase, refunds are generally not available once the
          product has been delivered.
        </p>

        {/* Eligibility */}
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          When a Refund May Be Approved
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Duplicate payment (charged more than once for the same order)</li>
          <li>Non-delivery due to a verified technical issue on our side</li>
          <li>Payment succeeded but the order was not created/received by us</li>
        </ul>

        {/* Not Eligible */}
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          When Refunds Are Not Provided
        </h2>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Change of mind after delivery</li>
          <li>Incorrect birth or personal details provided by the customer</li>
          <li>Delays caused by incorrect email address entered at checkout</li>
          <li>Unmet expectations (since results are subjective in nature)</li>
        </ul>

        {/* Time Window */}
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          Request Window
        </h2>
        <p className="text-gray-700 mb-6">
          If you believe your case qualifies, please contact us within{" "}
          <strong>48 hours</strong> of delivery or purchase (for non-delivery
          cases). Requests submitted after this period may not be eligible.
        </p>

        {/* How to Request */}
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          How to Request a Refund
        </h2>
        <p className="text-gray-700 mb-2">
          Email us at{" "}
          <a
            href="mailto:support@astrasoul.digital"
            className="text-purple-700 font-medium underline"
          >
            support@astrasoul.digital
          </a>{" "}
          with:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
          <li>Your name and email used at checkout</li>
          <li>Order ID / payment reference (if available)</li>
          <li>A short description of the issue</li>
        </ul>

        {/* Processing */}
        <h2 className="text-xl font-bold text-purple-800 mb-2">
          Processing Time
        </h2>
        <p className="text-gray-700 mb-6">
          If approved, refunds are processed back to the original payment method.
          Processing time may vary depending on your bank/payment provider.
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
