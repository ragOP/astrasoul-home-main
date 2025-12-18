import React, { useState } from "react";
import {
  ShoppingCart,
  Heart,
  Sparkles,
  ArrowLeft,
  Shield,
  CreditCard,
  Gift,
  CheckCircle,
  Star,
  Quote,
  Calendar,
  ChevronDown,
  Clock,
} from "lucide-react";
import hero from "../assets/hero.png";
import { useNavigate } from "react-router-dom";

const RaghibCart = () => {
  const navigate = useNavigate();

  const pricePerItem = 799;
  const reportValue = 2000;
  const shippingFee = 0;
  const quantity = 1;

  const subtotal = pricePerItem * quantity;
  const total = subtotal + shippingFee;

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    dateOfBirth: "",
    placeOfBirth: "",
    gender: "",
    consultationDateTime: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add your form submission logic here
  };

  const testimonials = [
    {
      name: "Riya",
      location: "Pune",
      initials: "R",
      review: "Wore it for 3 weeks — my partner and I started talking again!",
    },
    {
      name: "Kunal",
      location: "Delhi",
      initials: "K",
      review: "I was behind on my EMI, suddenly got a project that cleared it.",
    },
    {
      name: "Sakshi",
      location: "Jaipur",
      initials: "S",
      review: "This bracelet feels alive. I can literally sense calmness now.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-transparent rounded-full blur-[100px] animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-pink-500/30 via-rose-500/20 to-transparent rounded-full blur-[120px] animate-pulse"
          style={{ animationDelay: "1s", animationDuration: "4s" }}
        ></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-md shadow-lg shadow-purple-500/20">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex justify-center items-center">
              <img
                src="/brand-logo.png"
                alt="Easy Soul Logo"
                className="w-48 h-12 object-cover"
              />
            </div>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <div className="pt-28 pb-16 relative z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Cart Item Card with Image on Left */}
              <div className="bg-gradient-to-br from-purple-900/40 via-slate-800/60 to-transparent backdrop-blur-xl rounded-3xl overflow-hidden border-2 border-purple-500/40 shadow-[0_12px_48px_rgba(168,85,247,0.3)]">
                <div className="flex flex-col md:flex-row">
                  {/* Left Side - Product Image */}
                  <div className="md:w-64 flex-shrink-0 relative">
                    <div className="relative h-64 md:h-full">
                      <img
                        src={hero}
                        alt="Love & Money Attractor Bracelet"
                        className="w-full h-full object-cover"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/40 via-transparent to-pink-600/40"></div>
                      {/* Floating Badge */}
                      <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl px-3 py-1.5 flex items-center space-x-1 shadow-lg">
                        <Sparkles className="w-4 h-4 text-white" />
                        <span className="text-xs font-bold text-white">
                          100% NATURAL
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Content */}
                  <div className="flex-1 p-6 md:p-8">
                    <h2
                      className="text-2xl md:text-3xl font-black text-white mb-3"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Love & Money Attractor Bracelet
                    </h2>

                    {/* Badge */}
                    <div className="inline-flex items-center space-x-2 mb-6">
                      <Sparkles className="w-5 h-5 text-yellow-400" />
                      <span className="text-yellow-300 font-semibold text-sm">
                        100% Natural • Astrologer Charged
                      </span>
                    </div>

                    <p
                      className="text-gray-300 text-base mb-6 leading-relaxed"
                      style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                    >
                      Crafted from 100% natural, astrologer-charged gemstones.
                      Rose Quartz for love healing and Pyrite for wealth &
                      success.
                    </p>

                    {/* What's Included Section */}
                    <div className="mb-6">
                      <h3
                        className="text-lg font-bold mb-4"
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          color: "#ff9999",
                        }}
                      >
                        What's Included:
                      </h3>
                      <div className="space-y-3">
                        {[
                          "Rose Quartz - Attracts love & relationship harmony",
                          "Pyrite - Clears financial blocks & opens opportunities",
                          "Pre-charged 10x by astrologer for faster energy sync",
                          "FREE Digital Wealth & Love Report (Worth ₹2000)",
                        ].map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3"
                          >
                            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center flex-shrink-0 shadow-lg">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-gray-200 text-sm md:text-base">
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Price Section */}
                    <div className="pt-4 border-t border-white/20">
                      <div className="flex items-baseline space-x-3 mb-1">
                        <p className="text-3xl md:text-4xl font-black text-yellow-400">
                          ₹{pricePerItem}
                        </p>
                        <p className="text-lg text-gray-400 line-through">
                          ₹{pricePerItem + reportValue}
                        </p>
                      </div>
                      <div className="inline-flex items-center space-x-1 bg-green-500/20 border border-green-500/40 rounded-full px-3 py-1">
                        <span className="text-xs font-semibold text-green-400">
                          Save ₹{reportValue}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials Section */}
              <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl p-6 md:p-8 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <div className="flex items-center space-x-2 mb-6">
                  <Quote className="w-6 h-6 text-purple-400" />
                  <h3
                    className="text-xl md:text-2xl font-bold text-white"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    What Our Customers Say
                  </h3>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-slate-800/90 to-purple-900/50 rounded-2xl p-6 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105"
                    >
                      {/* Star Rating */}
                      <div className="flex mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>

                      {/* Review Text */}
                      <p
                        className="text-gray-300 leading-relaxed mb-6 italic text-sm"
                        style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                      >
                        "{testimonial.review}"
                      </p>

                      {/* Customer Info */}
                      <div className="flex items-center space-x-3 pt-4 border-t border-white/10">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                          {testimonial.initials}
                        </div>
                        <div>
                          <p
                            className="font-semibold text-gray-200 text-sm"
                            style={{ fontFamily: "'Montserrat', sans-serif" }}
                          >
                            {testimonial.name}
                          </p>
                          <p
                            className="text-xs text-gray-400"
                            style={{
                              fontFamily: "'Lato', 'Arial', sans-serif",
                            }}
                          >
                            {testimonial.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-4 border border-white/15 text-center hover:border-yellow-500/40 transition-all duration-300">
                  <div className="flex justify-center text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-gray-300 font-semibold">4.9/5</p>
                </div>
                <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-4 border border-white/15 text-center hover:border-pink-500/40 transition-all duration-300">
                  <Heart className="w-8 h-8 text-pink-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-300 font-semibold">
                    1000+ Happy
                  </p>
                </div>
                <div className="bg-white/[0.03] backdrop-blur-xl rounded-2xl p-4 border border-white/15 text-center hover:border-green-500/40 transition-all duration-300">
                  <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <p className="text-xs text-gray-300 font-semibold">
                    30-Day Guarantee
                  </p>
                </div>
              </div>
            </div>
            {/* Consultation Form - Separate Card */}
            <div className="bg-gradient-to-br from-purple-900/40 via-slate-800/60 to-transparent backdrop-blur-xl rounded-3xl p-8 border-2 border-purple-500/40 shadow-[0_12px_48px_rgba(168,85,247,0.3)]">
              <h3
                className="text-2xl font-bold text-white mb-6"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Consultation Details
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">
                    Full Name <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full bg-white/5 border-2 border-purple-500/30 rounded-xl px-4 py-3 text-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500/60 focus:bg-white/10 transition-all duration-300"
                    required
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">
                    Phone Number <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Enter your 10-digit phone number"
                    pattern="[0-9]{10}"
                    maxLength="10"
                    className="w-full bg-white/5 border-2 border-purple-500/30 rounded-xl px-4 py-3 text-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500/60 focus:bg-white/10 transition-all duration-300"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">
                    Email Address <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="w-full bg-white/5 border-2 border-purple-500/30 rounded-xl px-4 py-3 text-gray-300 placeholder-gray-500 text-sm focus:outline-none focus:border-purple-500/60 focus:bg-white/10 transition-all duration-300"
                    required
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">
                    Date of Birth <span className="text-pink-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleInputChange}
                      placeholder="dd/mm/yyyy"
                      className="w-full bg-white/5 border-2 border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-white text-sm focus:outline-none focus:border-purple-500/60 focus:bg-white/10 transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                {/* Place of Birth */}
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">
                    Place of Birth <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="placeOfBirth"
                    value={formData.placeOfBirth}
                    onChange={handleInputChange}
                    placeholder="City, State, Country"
                    className="w-full bg-white/5 border-2 border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-whitetext-sm focus:outline-none focus:border-purple-500/60 focus:bg-white/10 transition-all duration-300"
                    required
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">
                    Gender <span className="text-pink-400">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="w-full bg-white/5 border-2 border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-white text-sm focus:outline-none focus:border-purple-500/60 focus:bg-white/10 transition-all duration-300 appearance-none cursor-pointer"
                      required
                    >
                      <option value="" className="bg-slate-800">
                        Select gender
                      </option>
                      <option value="male" className="bg-slate-800">
                        Male
                      </option>
                      <option value="female" className="bg-slate-800">
                        Female
                      </option>
                      <option value="other" className="bg-slate-800">
                        Other
                      </option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                {/* Preferred Date and Time */}
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm">
                    Consultation Date & Time{" "}
                    <span className="text-pink-400">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="datetime-local"
                      name="consultationDateTime"
                      value={formData.consultationDateTime}
                      onChange={handleInputChange}
                      placeholder="dd/mm/yyyy, --:-- --"
                      className="w-full bg-white/5 border-2 border-purple-500/30 rounded-xl px-4 py-3 text-white placeholder-white text-sm focus:outline-none focus:border-purple-500/60 focus:bg-white/10 transition-all duration-300"
                      required
                    />
                    {/* <Clock className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" /> */}
                  </div>
                </div>
              </form>
            </div>{" "}
            <div className="lg:col-span-1 space-y-6">
              {/* Order Summary */}
              <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-[0_12px_48px_rgba(0,0,0,0.4)] sticky top-24">
                <h3
                  className="text-2xl font-bold text-white mb-6"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Order Summary
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-gray-300">
                    <span>Subtotal</span>
                    <span className="font-semibold">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <span>Shipping</span>
                    <span className="font-semibold text-green-400">FREE</span>
                  </div>
                  <div className="border-t border-white/20 pt-4 flex justify-between text-xl font-bold">
                    <span className="text-white">Total</span>
                    <span className="text-yellow-400">₹{total}</span>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 text-white text-lg font-bold py-4 rounded-2xl shadow-[0_10px_40px_rgba(168,85,247,0.4)] hover:shadow-[0_15px_60px_rgba(168,85,247,0.6)] transition-all duration-300 hover:scale-105 mb-4">
                  <span className="flex items-center justify-center space-x-2">
                    <CreditCard className="w-5 h-5" />
                    <span>Proceed to Checkout</span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default RaghibCart;
