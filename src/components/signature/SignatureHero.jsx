import React, { useState, useEffect } from 'react';
import SignatureCTA from './SignatureCTA';
import { Check, Clock, Mail, Download, Star, Users, Award } from 'lucide-react';

const SignatureCard = ({ animateElements }) => {
  const features = [
    { icon: Check, text: "3 unique designer signature options", color: "text-green-600" },
    { icon: Download, text: "Signature writing tutorial", color: "text-blue-600" },
    { icon: Download, text: "Practice sheet (PDF format)", color: "text-purple-600" },
    { icon: Clock, text: "Delivered within 24–48 hours via email", color: "text-orange-600" },
  ];

  return (
    <div className={`bg-white rounded-xl shadow-lg border border-gray-100 p-4 transition-all duration-1000 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}>
      {/* Header */}
      <div className="text-center mb-4">
        <h2 className="text-lg sm:text-xl font-display font-semibold text-gray-800 mb-2">
          ✨ Upgrade Your Signature. Elevate Your Identity.
        </h2>
        <p className="text-xs text-gray-600">
          A handcrafted, custom-designed signature that reflects your style, ambition, and profession.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className={`flex items-center space-x-2 p-2 rounded-md bg-gray-50 hover:bg-gray-100 transition-all duration-300 delay-${index * 100
                } transform ${animateElements ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
                }`}
            >
              <div className={`p-1 rounded-full bg-white shadow-sm`}>
                <Icon className={`w-3 h-3 ${feature.color}`} />
              </div>
              <span className="text-xs font-medium text-gray-700">{feature.text}</span>
            </div>
          );
        })}
      </div>

      {/* Price and CTA Section */}
      <div className="bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-lg p-3 border border-blue-100">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-800">₹589</span>
              <span className="text-xs text-gray-600 line-through">₹1,200</span>
              <span className="text-xs bg-green-100 text-green-800 px-1.5 py-0.5 rounded-full font-semibold">
                51% OFF
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-red-600 font-semibold">🚨 Only 7 slots available per week</span>
            </div>
          </div>
          <div className="text-xs text-gray-600 text-center sm:text-right">
            — secure yours today!
          </div>
        </div>
      </div>
    </div>
  );
};

const SignatureHero = () => {
  const [animateElements, setAnimateElements] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimateElements(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: Users, value: "2,500+", label: "Happy Clients", color: "text-blue-600" },
    { icon: Star, value: "4.9/5", label: "Customer Rating", color: "text-yellow-600" },
    { icon: Award, value: "24hrs", label: "Delivery Time", color: "text-green-600" },
  ];

  return (
    <section className="flex items-center justify-center px-4 py-4">

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 items-center">

          {/* Left Column - Main Content */}
          <div className={`space-y-6 transition-all duration-1000 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}>

            {/* Main Heading */}
            <div className="space-y-3">
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-display font-bold leading-relaxed">
                <span className="text-black ">✍ Your Signature Isn't Just</span>
                <span className="block font-signature text-4xl sm:text-5xl lg:text-6xl bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent">
                  Ink — It's Identity.
                </span>
              </h1>

              <p className="text-md sm:text-xl text-gray-700 leading-relaxed">
                Make your name unforgettable with a designer signature crafted just for you.
              </p>
            </div>

            {/* Signature Card */}
            <SignatureCard animateElements={animateElements} />

            {/* CTA Button */}
            <SignatureCTA />
          </div>

          {/* Right Column - Stats and Visual Elements */}
          <div className={`space-y-6 transition-all duration-1000 delay-300 transform ${animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="text-center p-3 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                  >
                    <Icon className={`w-6 h-6 mx-auto mb-1 ${stat.color}`} />
                    <div className="font-bold text-lg text-gray-800">{stat.value}</div>
                    <div className="text-xs text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Signature Preview */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="text-center space-y-3">
                <h3 className="text-lg font-display font-semibold text-gray-800">
                  Sample Signature
                </h3>
                <div className="font-signature text-3xl text-gray-800 transform rotate-2">
                  Raghib Najmi
                </div>
                <p className="text-xs text-gray-600">
                  Your custom signature will be unique to you
                </p>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-4 border border-green-100">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <img
                    src="https://i.pravatar.cc/32?img=11"
                    alt="Indian Male Professional"
                    className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                  />
                  <img
                    src="https://i.pravatar.cc/32?img=25"
                    alt="Foreign Female Professional"
                    className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                  />
                  <img
                    src="https://i.pravatar.cc/32?img=33"
                    alt="Indian Female Professional"
                    className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                  />
                  <img
                    src="https://i.pravatar.cc/32?img=47"
                    alt="Foreign Male Professional"
                    className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                  />
                  <img
                    src="https://i.pravatar.cc/32?img=55"
                    alt="International Professional"
                    className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                  />
                </div>
                <div className="text-xs text-gray-700">
                  <span className="font-semibold">2,500+ professionals</span> trust our signatures
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignatureHero; 