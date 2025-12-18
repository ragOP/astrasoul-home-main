import React from "react";

export default function PolicyPage() {
  const sections = [
    {
      title: "Privacy Policy",
      purpose:
        "Inform customers how their personal data is collected, used, stored, and protected.",
      points: [
        "We collect your name, email, date of birth, time, and location solely to prepare your personalized astrology products.",
        "We do not share, sell, or rent your data to third parties.",
        "All data is stored securely and only authorized team members can access it.",
        "Payment processing is handled by secure third-party gateways; we do not store card information.",
        "You may request deletion of your data at any time via our contact page."
      ]
    },
    {
      title: "Terms & Conditions",
      purpose: "Set the rules for using your website and buying your products.",
      points: [
        "All products are digital and delivered via email; no physical items are shipped unless stated otherwise.",
        "By purchasing, you agree that our astrology readings and sketches are for entertainment and personal insight purposes only, not a substitute for professional, medical, or financial advice.",
        "You must provide accurate birth details for accurate reports; incorrect details may affect results.",
        "Unauthorized reproduction, resale, or redistribution of our products is prohibited.",
        "Prices and promotions are subject to change without notice."
      ]
    },
    {
      title: "Refund Policy",
      purpose: "Outline when and if refunds are allowed.",
      points: [
        "As all products are digital and personalized, we generally do not offer refunds once the product has been delivered.",
        "Refunds may be granted in cases of:",
        "• Duplicate payment",
        "• Non-delivery due to technical error",
        "If you believe there’s an error with your order, contact us within 48 hours of delivery."
      ]
    },
    {
      title: "Delivery Policy",
      purpose: "Explain how and when products are delivered.",
      points: [
        "Digital products are typically delivered within 24–48 hours of order placement.",
        "Delivery is via the email address you provide at checkout — please ensure it’s correct.",
        "Delays may occur during high-order periods; we will notify you if your order is delayed."
      ]
    },
    {
      title: "Disclaimer",
      purpose: "Limit legal liability.",
      points: [
        "Our astrology products are intended for entertainment and personal development purposes only.",
        "We do not guarantee specific outcomes or results from using our products.",
        "You are responsible for any decisions you make based on our readings or sketches."
      ]
    },
    {
      title: "Cookie Policy",
      purpose: "Comply with privacy laws and explain site tracking.",
      points: [
        "We use cookies to improve your browsing experience and analyze traffic.",
        "Cookies help remember your preferences and personalize content.",
        "You can disable cookies in your browser settings, but this may affect site functionality."
      ]
    },
    {
      title: "Contact Policy",
      purpose: "Give a clear way for customers to reach you.",
      points: [
        "For order questions, email support@astrasoul.in.",
        "Our support team is available Monday–Saturday, 10 AM–6 PM IST.",
        "Average response time: 24–48 hours."
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-b from-purple-50 to-purple-100 min-h-screen py-12 px-6 sm:px-16">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-xl p-8 sm:p-12">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-6 text-center">
          Policies & Support
        </h1>
        <h5>SAKSHI SRIVASTAVA
SPEKLIO MEDIA--09PTKPS8265R1ZX</h5>
        {sections.map((section, idx) => (
          <div key={idx} className="mb-10 border-b border-purple-200 pb-6">
            <h2 className="text-2xl font-bold text-purple-800 mb-2">
              {section.title}
            </h2>
            <p className="text-purple-600 italic mb-4">{section.purpose}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {section.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} AstraSoul. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
