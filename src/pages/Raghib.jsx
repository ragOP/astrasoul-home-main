import React, { useState, useEffect } from "react";
import {
  Heart,
  DollarSign,
  Star,
  Sparkles,
  TrendingUp,
  MessageCircle,
  Sun,
  Check,
  X,
  Gift,
  Clock,
  Plus,
  Minus,
  Zap,
  Shield,
  Users,
  Target,
  Download,
  Mail,
  FileText,
  ArrowRight,
  Menu,
} from "lucide-react";
import hero from "../assets/hero.png";
import { useNavigate } from "react-router-dom";

const Raghib = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"
      style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}
    >
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-slate-900/95 backdrop-blur-md shadow-lg shadow-purple-500/20"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex justify-center items-center h-16 sm:h-20">
              <img
                src="/brand-logo.png"
                alt="Easy Soul Logo"
                className="w-60 h-15 object-cover"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <a
                href="#how-it-works"
                className="text-gray-300 hover:text-purple-400 font-medium transition-colors duration-200"
              >
                How it Works
              </a>
              <a
                href="#reviews"
                className="text-gray-300 hover:text-purple-400 font-medium transition-colors duration-200"
              >
                Reviews
              </a>
              <a
                href="#faq"
                className="text-gray-300 hover:text-purple-400 font-medium transition-colors duration-200"
              >
                FAQ
              </a>
              <a
                href="#cta"
                className="text-gray-300 hover:text-purple-400 font-medium transition-colors duration-200"
              >
                Get Yours
              </a>
              <button
                onClick={() => navigate("/bracelet-cart")}
                className="ml-2 inline-flex items-center rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 px-5 py-2.5 text-white font-semibold shadow-[0_10px_30px_rgba(168,85,247,0.4)] hover:shadow-[0_15px_35px_rgba(168,85,247,0.6)] transition-all duration-300 transform hover:scale-105"
              >
                Get My Bracelet
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden text-white p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Dropdown */}
          {mobileMenuOpen && (
            <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/98 backdrop-blur-lg border-t border-purple-500/20 shadow-2xl">
              <div className="flex flex-col space-y-1 p-4">
                <a
                  href="#how-it-works"
                  onClick={toggleMobileMenu}
                  className="text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 font-medium transition-all duration-200 px-4 py-3 rounded-lg"
                >
                  How it Works
                </a>
                <a
                  href="#reviews"
                  onClick={toggleMobileMenu}
                  className="text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 font-medium transition-all duration-200 px-4 py-3 rounded-lg"
                >
                  Reviews
                </a>
                <a
                  href="#faq"
                  onClick={toggleMobileMenu}
                  className="text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 font-medium transition-all duration-200 px-4 py-3 rounded-lg"
                >
                  FAQ
                </a>
                <a
                  href="#cta"
                  onClick={toggleMobileMenu}
                  className="text-gray-300 hover:text-purple-400 hover:bg-purple-500/10 font-medium transition-all duration-200 px-4 py-3 rounded-lg"
                >
                  Get Yours
                </a>
                <button
                  className="mt-2 w-full inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 px-5 py-3 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => navigate("/bracelet-cart")}
                >
                  Get My Bracelet
                </button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* HERO SECTION - REDESIGNED */}
      <section className="min-h-screen pt-24 pb-16 bg-gradient-to-br from-slate-950 via-purple-950/50 to-slate-950 flex items-center relative overflow-hidden">
        {/* Enhanced Animated Background Blobs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-transparent rounded-full blur-[100px] animate-pulse"></div>
          <div
            className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-pink-500/30 via-rose-500/20 to-transparent rounded-full blur-[120px] animate-pulse"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/4 w-80 h-80 bg-gradient-to-br from-yellow-500/20 via-amber-500/15 to-transparent rounded-full blur-[100px] animate-pulse"
            style={{ animationDelay: "2s", animationDuration: "5s" }}
          ></div>
          {/* Additional mesh gradients for depth */}
          <div
            className="absolute top-1/3 right-1/3 w-72 h-72 bg-gradient-to-br from-indigo-500/15 to-transparent rounded-full blur-[80px] animate-pulse"
            style={{ animationDelay: "1.5s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">
          {/* DESKTOP Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              {/* Enhanced Badge with better glassmorphism */}
              <div className="inline-flex items-center space-x-2 bg-yellow-500/10 backdrop-blur-xl border border-yellow-500/30 rounded-full px-6 py-3 shadow-[0_8px_32px_rgba(234,179,8,0.2)] mb-8 hover:shadow-[0_8px_40px_rgba(234,179,8,0.3)] transition-all duration-300">
                <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                <span
                  className="font-bold text-yellow-400 text-sm tracking-wide"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  100% NATURAL • ASTROLOGER CHARGED
                </span>
              </div>

              {/* Enhanced Heading with better gradient */}
              <h1
                className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200 bg-clip-text text-transparent leading-tight mb-6 drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]"
                style={{ fontFamily: "monospace" }}
              >
                Feeling like luck's just not on your side lately?
              </h1>

              <p
                className="text-2xl text-gray-200/90 leading-relaxed mb-8"
                style={{ fontFamily: "'Montserrat'" }}
              >
                You're trying hard, giving your best… but love feels distant 💔
                and money keeps slipping away 💸
              </p>
              <p
                className="text-2xl text-gray-200/90 leading-relaxed mb-8"
                style={{ fontFamily: "'Montserrat'" }}
              >
                What if the problem isn't you… What if it's your energy that's
                out of balance? 🌌
              </p>

              {/* Enhanced Glass Card with better depth */}
              <div className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl p-6 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_1px_rgba(255,255,255,0.5)_inset] mb-8 hover:bg-white/[0.05] transition-all duration-300">
                <p
                  className="text-xl text-gray-100 leading-relaxed"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Introducing the{" "}
                  <span
                    className="font-black text-2xl bg-gradient-to-r from-purple-300 via-pink-300 to-rose-300 bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(236,72,153,0.5)]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Love & Money Attractor Bracelet
                  </span>{" "}
                  — crafted from 100% natural, astrologer-charged gemstones.
                </p>
              </div>
            </div>

            {/* Enhanced Image Section with better effects */}
            <div className="flex justify-end">
              <div className="relative group">
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-pink-600/40 to-yellow-600/40 rounded-[3rem] blur-[60px] opacity-70 group-hover:opacity-90 group-hover:blur-[80px] transition-all duration-700 scale-105 animate-pulse"></div>

                {/* Main image container with enhanced styling */}
                <div className="relative w-[500px] h-[500px] rounded-[3rem] shadow-[0_20px_60px_rgba(168,85,247,0.4),0_0_80px_rgba(236,72,153,0.2)] overflow-hidden border-[3px] border-white/30 backdrop-blur-sm transform group-hover:scale-[1.03] transition-all duration-700 group-hover:shadow-[0_25px_80px_rgba(168,85,247,0.5),0_0_100px_rgba(236,72,153,0.3)]">
                  <img
                    src={hero}
                    alt="Love & Money Attractor Bracelet"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>

                {/* Enhanced floating icons with better animations */}
                <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl flex items-center justify-center shadow-[0_10px_40px_rgba(251,191,36,0.6)] animate-float">
                  <Sparkles className="w-10 h-10 text-white drop-shadow-lg" />
                </div>
                <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-3xl flex items-center justify-center shadow-[0_10px_40px_rgba(236,72,153,0.6)] animate-bounce-slow">
                  <Heart className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
                <div className="absolute top-1/3 -left-8 w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-[0_10px_40px_rgba(34,197,94,0.6)] animate-pulse-slow">
                  <DollarSign className="w-7 h-7 text-white drop-shadow-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* MOBILE Layout with enhanced styling */}
          <div className="lg:hidden space-y-8 mb-12">
            <div className="flex justify-center">
              <div className="inline-flex items-center space-x-2 bg-yellow-500/10 backdrop-blur-xl border border-yellow-500/30 rounded-full px-6 py-3 shadow-[0_8px_32px_rgba(234,179,8,0.2)]">
                <Sparkles className="w-5 h-5 text-yellow-400 animate-pulse" />
                <span
                  className="font-bold text-yellow-400 text-sm"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  100% NATURAL
                </span>
              </div>
            </div>

            <h1
              className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-purple-200 via-pink-200 to-yellow-200 bg-clip-text text-transparent leading-tight text-center drop-shadow-[0_0_30px_rgba(168,85,247,0.3)]"
              style={{ fontFamily: "monospace" }}
            >
              Feeling like luck's just not on your side lately?
            </h1>

            {/* Enhanced mobile image */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/40 via-pink-600/40 to-yellow-600/40 rounded-3xl blur-[40px] opacity-70 animate-pulse"></div>
                <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-3xl overflow-hidden border-[3px] border-white/25 shadow-[0_15px_50px_rgba(168,85,247,0.4)]">
                  <img
                    src={hero}
                    alt="Love & Money Bracelet"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <p
              className="text-xl text-gray-200/90 leading-relaxed text-center px-4"
              style={{ fontFamily: "'Montserrat'" }}
            >
              You're trying hard… but love feels distant 💔 and money keeps
              slipping away 💸
            </p>
            <p
              className="text-xl text-gray-200/90 leading-relaxed text-center px-4"
              style={{ fontFamily: "'Montserrat'" }}
            >
              What if the problem isn't you… What if it's your energy that's out
              of balance? 🌌
            </p>

            <div className="bg-white/[0.03] backdrop-blur-2xl rounded-3xl p-5 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_1px_rgba(255,255,255,0.5)_inset] mx-4">
              <p
                className="text-base text-gray-100 leading-relaxed text-center"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Introducing the{" "}
                <span
                  className="font-black text-lg bg-gradient-to-r from-purple-300 via-pink-300 to-rose-300 bg-clip-text text-transparent"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Love & Money Attractor Bracelet
                </span>{" "}
                crafted from 100% natural, astrologer-charged gemstones to
                attract love, peace, and abundance back into your life.
              </p>
            </div>
          </div>

          {/* Enhanced Desktop Bento Grid */}
          <div className="hidden lg:grid grid-cols-12 gap-8 items-start">
            <div className="col-span-7 grid grid-cols-2 gap-6">
              {/* Large Love Card with enhanced styling */}
              <div className="col-span-2 lg:col-span-1 lg:row-span-2 bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3),0_0_1px_rgba(255,255,255,0.3)_inset] group hover:scale-[1.02] hover:border-pink-500/40 hover:shadow-[0_12px_48px_rgba(236,72,153,0.3)] transition-all duration-500">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-[0_8px_32px_rgba(236,72,153,0.5)] group-hover:rotate-12 group-hover:scale-110 transition-all duration-500">
                    <Heart className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
                </div>

                <div className="text-center">
                  <h3
                    className="text-white text-xl font-bold mb-4"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Attracts Love & Relationship Harmony
                  </h3>
                  <p
                    className="text-gray-300 text-sm leading-relaxed"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Rose Quartz energy promotes compassion, emotional healing,
                    and deeper bonding.
                  </p>
                </div>
              </div>

              {/* Enhanced feature cards */}
              <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] group hover:scale-105 hover:border-green-500/40 hover:shadow-[0_12px_48px_rgba(34,197,94,0.3)] transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-[0_6px_24px_rgba(34,197,94,0.5)] group-hover:rotate-12 transition-all duration-300 flex-shrink-0">
                    <DollarSign className="w-6 h-6 text-white drop-shadow-md" />
                  </div>
                  <div>
                    <h3
                      className="text-white font-bold mb-2"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Clears Financial Blocks
                    </h3>
                    <p
                      className="text-gray-300 text-sm"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Opens channels for opportunities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)] group hover:scale-105 hover:border-purple-500/40 hover:shadow-[0_12px_48px_rgba(168,85,247,0.3)] transition-all duration-500">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-[0_6px_24px_rgba(168,85,247,0.5)] group-hover:rotate-12 transition-all duration-300 flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white drop-shadow-md" />
                  </div>
                  <div>
                    <h3
                      className="text-white font-bold mb-2"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Pre-charged 10x Energy
                    </h3>
                    <p
                      className="text-gray-300 text-sm"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Astrologer-energized for faster sync.
                    </p>
                  </div>
                </div>
              </div>

              {/* Enhanced CTA Button */}
              <button
                className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 text-white text-xl px-8 py-5 rounded-2xl shadow-[0_10px_40px_rgba(168,85,247,0.4)] transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_15px_60px_rgba(168,85,247,0.6)] font-bold relative overflow-hidden group mb-6"
                onClick={() => navigate("/bracelet-cart")}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                <span
                  className="relative flex items-center justify-center space-x-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <Zap className="w-6 h-6 group-hover:animate-pulse" />
                  <span>Get My Bracelet Now</span>
                </span>
              </button>
            </div>

            {/* Enhanced Pricing Card */}
            <div className="col-span-5">
              <div className="bg-white/[0.03] backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-[0_12px_48px_rgba(0,0,0,0.4),0_0_1px_rgba(255,255,255,0.3)_inset] relative overflow-hidden sticky top-24 hover:border-yellow-500/40 transition-all duration-500">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div
                  className="absolute -bottom-10 -left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center space-x-2 bg-red-500/20 text-red-300 border border-red-500/50 rounded-full px-4 py-2 mb-6 shadow-[0_4px_16px_rgba(239,68,68,0.3)]">
                    <Clock className="w-4 h-4 animate-pulse" />
                    <span
                      className="text-sm font-semibold"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Limited Offer
                    </span>
                  </div>

                  <p
                    className="text-gray-100 text-lg mb-2"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    🛍 Get Yours for Just
                  </p>
                  <p
                    className="text-yellow-400 text-6xl font-black leading-tight mb-3 drop-shadow-[0_0_30px_rgba(250,204,21,0.5)]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    ₹799
                  </p>
                  <p
                    className="text-gray-400 mb-6"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Includes Free Report (Worth{" "}
                    <span className="text-yellow-400 font-bold">₹599</span>)
                  </p>

                  {/* Enhanced trust badges */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-white/[0.05] backdrop-blur-md rounded-xl p-3 text-center border border-white/15 hover:border-yellow-500/40 hover:bg-white/[0.08] transition-all duration-300">
                      <div className="flex justify-center text-yellow-400 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-current drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]"
                          />
                        ))}
                      </div>
                      <p className="text-[11px] text-gray-300 font-semibold">
                        4.9/5
                      </p>
                    </div>
                    <div className="bg-white/[0.05] backdrop-blur-md rounded-xl p-3 text-center border border-white/15 hover:border-pink-500/40 hover:bg-white/[0.08] transition-all duration-300">
                      <Heart className="w-5 h-5 text-pink-400 mx-auto mb-1 drop-shadow-[0_0_8px_rgba(236,72,153,0.6)]" />
                      <p className="text-[11px] text-gray-300 font-semibold">
                        1000+
                      </p>
                    </div>
                    <div className="bg-white/[0.05] backdrop-blur-md rounded-xl p-3 text-center border border-white/15 hover:border-green-500/40 hover:bg-white/[0.08] transition-all duration-300">
                      <Shield className="w-5 h-5 text-green-400 mx-auto mb-1 drop-shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                      <p className="text-[11px] text-gray-300 font-semibold">
                        30-Day
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Mobile Bento */}
          <div className="lg:hidden px-4">
            <button
              onClick={() => navigate("/bracelet-cart")}
              className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 text-white text-lg px-6 py-4 rounded-2xl shadow-[0_10px_40px_rgba(168,85,247,0.4)] font-bold mb-4 hover:shadow-[0_15px_60px_rgba(168,85,247,0.6)] transition-all duration-300 active:scale-95"
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              Get My Bracelet Now
            </button>

            <div className="grid grid-cols-6 gap-4">
              <div className="col-span-6 bg-white/[0.03] backdrop-blur-xl rounded-3xl p-5 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center shadow-[0_6px_24px_rgba(236,72,153,0.5)] flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-white text-base font-bold mb-2"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Attracts Love & Relationship Harmony
                    </h3>
                    <p
                      className="text-gray-300 text-sm"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Rose Quartz promotes emotional healing.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-span-3 bg-white/[0.03] backdrop-blur-xl rounded-3xl p-4 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-[0_6px_24px_rgba(34,197,94,0.5)] mb-3 mx-auto">
                  <DollarSign className="w-5 h-5 text-white" />
                </div>
                <h3
                  className="text-white font-bold text-sm text-center mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Clears Financial Blocks
                </h3>
                <p
                  className="text-gray-300 text-xs text-center"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Opens opportunities.
                </p>
              </div>

              <div className="col-span-3 bg-white/[0.03] backdrop-blur-xl rounded-3xl p-4 border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shadow-[0_6px_24px_rgba(168,85,247,0.5)] mb-3 mx-auto">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3
                  className="text-white font-bold text-sm text-center mb-2"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Pre-charged 10x
                </h3>
                <p
                  className="text-gray-300 text-xs text-center"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  Faster sync.
                </p>
              </div>

              <div className="col-span-6 bg-white/[0.03] backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-[0_12px_48px_rgba(0,0,0,0.4)] relative overflow-hidden mt-2">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-500/20 rounded-full blur-2xl animate-pulse"></div>
                <div
                  className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                ></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center space-x-2 bg-red-500/20 text-red-300 border border-red-500/50 rounded-full px-3 py-1 shadow-[0_4px_16px_rgba(239,68,68,0.3)]">
                      <Clock className="w-4 h-4 animate-pulse" />
                      <span
                        className="text-xs font-semibold"
                        style={{ fontFamily: "'Poppins', sans-serif" }}
                      >
                        Limited
                      </span>
                    </span>
                    <span
                      className="text-xs text-gray-400"
                      style={{ fontFamily: "'Poppins', sans-serif" }}
                    >
                      Free ₹599 report
                    </span>
                  </div>
                  <p
                    className="text-gray-100 text-base mb-1"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    🛍 Get Yours for Just
                  </p>
                  <p
                    className="text-yellow-400 text-5xl font-black leading-tight mb-4 drop-shadow-[0_0_30px_rgba(250,204,21,0.5)]"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    ₹799
                  </p>
                  <button
                    onClick={() => navigate("/bracelet-cart")}
                    className="w-full bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 text-white text-lg px-6 py-4 rounded-2xl shadow-[0_10px_40px_rgba(168,85,247,0.4)] font-bold mb-4 active:scale-95 transition-transform duration-200"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Get My Bracelet Now
                  </button>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white/[0.05] backdrop-blur-md rounded-xl p-2 text-center border border-white/15">
                      <div className="flex justify-center text-yellow-400 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-current" />
                        ))}
                      </div>
                      <p className="text-[10px] text-gray-300">4.9/5</p>
                    </div>
                    <div className="bg-white/[0.05] backdrop-blur-md rounded-xl p-2 text-center border border-white/15">
                      <Heart className="w-4 h-4 text-pink-400 mx-auto mb-1" />
                      <p className="text-[10px] text-gray-300">1000+</p>
                    </div>
                    <div className="bg-white/[0.05] backdrop-blur-md rounded-xl p-2 text-center border border-white/15">
                      <Shield className="w-4 h-4 text-green-400 mx-auto mb-1" />
                      <p className="text-[10px] text-gray-300">30-Day</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why You're Feeling Stuck */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-40 right-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-red-500/20 text-red-400 border border-red-500/40 rounded-full px-6 py-2 mb-6">
              <Zap className="w-5 h-5" />
              <span
                className="font-semibold text-sm"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                ENERGY BLOCKAGES
              </span>
            </div>
            <h2
              className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent mb-6"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              Why You're Feeling Stuck
            </h2>
            <p
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
            >
              Ever felt like you're doing everything right — but things still
              don't fall into place?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="lg:col-span-2 bg-gradient-to-br from-pink-900/40 via-pink-800/30 to-transparent backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-pink-500/20 border border-pink-500/30 group hover:border-pink-400/60 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                {/* <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-pink-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <Heart className="w-8 h-8 text-white" />
                </div> */}
                <h3
                  className="text-2xl font-bold text-white mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  💔 Love feels unstable
                </h3>
                <p
                  className="text-gray-300 text-lg leading-relaxed mb-6"
                  style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                >
                  Relationships feel fragile, communication breaks down, and
                  emotional distance grows.
                </p>
                <div className="flex items-center space-x-2 text-pink-400">
                  <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                  <span
                    className="text-sm font-semibold"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Emotional Energy Blocked
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/40 via-emerald-800/30 to-transparent backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-green-500/20 border border-green-500/30 group hover:border-green-400/60 transition-all duration-500 relative overflow-hidden">
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-green-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                {/* <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <DollarSign className="w-8 h-8 text-white" />
                </div> */}
                <h3
                  className="text-2xl font-bold text-white mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  💸 Finances get delayed
                </h3>
                <p
                  className="text-gray-300 leading-relaxed mb-6"
                  style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                >
                  Money opportunities slip away, unexpected expenses appear.
                </p>
                <div className="flex items-center space-x-2 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span
                    className="text-sm font-semibold"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Wealth Flow Blocked
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 via-cyan-800/30 to-transparent backdrop-blur-xl rounded-3xl p-8 shadow-2xl shadow-blue-500/20 border border-blue-500/30 group hover:border-blue-400/60 transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10">
                {/* <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div> */}
                <h3
                  className="text-2xl font-bold text-white mb-4"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  😔 Confidence feels low
                </h3>
                <p
                  className="text-gray-300 leading-relaxed mb-6"
                  style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                >
                  Self-doubt creeps in, decisions feel harder.
                </p>
                <div className="flex items-center space-x-2 text-blue-400">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span
                    className="text-sm font-semibold"
                    style={{ fontFamily: "'Poppins', sans-serif" }}
                  >
                    Self-Worth Blocked
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2 bg-gradient-to-br from-purple-900/60 via-pink-900/40 to-transparent backdrop-blur-xl rounded-3xl p-10 shadow-2xl shadow-purple-500/30 border-2 border-purple-500/50 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500"></div>
              <div className="relative z-10 text-center">
                {/* <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 rounded-full mb-6 shadow-2xl animate-pulse">
                  <Sparkles className="w-10 h-10 text-white" />
                </div> */}
                <h3
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300 bg-clip-text text-transparent mb-4"
                  style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
                >
                  This bracelet was created exactly for that.
                </h3>
                <p
                  className="text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto"
                  style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                >
                  To{" "}
                  <span className="font-bold text-purple-400">
                    balance your heart and wealth energies
                  </span>{" "}
                  — so your efforts finally start working for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-20 bg-gradient-to-br from-slate-800 to-slate-900"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              How This Bracelet Works
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                icon: <Sparkles className="w-10 h-10" />,
                title: "Real Crystals",
                description:
                  "Made with Rose Quartz (for love & healing) and Pyrite (for wealth & success).",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                step: 2,
                icon: <Star className="w-10 h-10" />,
                title: "Astrologer Charged",
                description:
                  "Each bracelet is blessed and pre-charged under sacred rituals — no factory mass production.",
                gradient: "from-pink-500 to-rose-500",
              },
              {
                step: 3,
                icon: <Sun className="w-10 h-10" />,
                title: "Daily Alignment",
                description:
                  "Once worn, it starts syncing with your aura, helping release love and money blockages gradually.",
                gradient: "from-yellow-500 to-orange-500",
              },
              {
                step: 4,
                icon: <Check className="w-10 h-10" />,
                title: "Real Results",
                description:
                  "Within weeks, users report emotional calmness, better opportunities, and stronger relationships.",
                gradient: "from-green-500 to-emerald-500",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="absolute -top-4 left-6 z-10">
                  <div
                    className={`w-8 h-8 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg`}
                  >
                    {item.step}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-slate-800/90 to-purple-900/50 rounded-2xl p-8 shadow-lg h-full group hover:-translate-y-2 transition-all duration-300 border border-purple-500/20">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <h3
                    className="text-xl font-semibold text-gray-200 mb-4 text-center"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-400 leading-relaxed text-center"
                    style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Experience */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-20 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/40 rounded-full px-6 py-2 mb-6">
                <Target className="w-5 h-5 text-yellow-400" />
                <span
                  className="font-semibold text-sm text-yellow-400"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  TRANSFORMATION
                </span>
              </div>
              <h2
                className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent mb-8"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
              >
                What You'll Experience
              </h2>

              <div className="space-y-4">
                {[
                  {
                    icon: <Heart className="w-6 h-6" />,
                    text: "More emotional stability and self-love",
                    gradient: "from-pink-600/20 to-rose-600/20",
                    iconBg: "from-pink-500 to-rose-600",
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    text: "Improved communication in relationships",
                    gradient: "from-purple-600/20 to-indigo-600/20",
                    iconBg: "from-purple-500 to-indigo-600",
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    text: "Reduced stress over financial pressure",
                    gradient: "from-green-600/20 to-emerald-600/20",
                    iconBg: "from-green-500 to-emerald-600",
                  },
                  {
                    icon: <Sparkles className="w-6 h-6" />,
                    text: "Positive mindset & opportunities",
                    gradient: "from-yellow-600/20 to-orange-600/20",
                    iconBg: "from-yellow-500 to-orange-600",
                  },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className={`bg-gradient-to-r ${benefit.gradient} backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl group hover:scale-105 transition-all duration-300`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`flex-shrink-0 w-14 h-14 bg-gradient-to-r ${benefit.iconBg} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                      >
                        <div className="text-white">{benefit.icon}</div>
                      </div>
                      <p
                        className="text-lg text-white font-semibold flex-1"
                        style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                      >
                        {benefit.text}
                      </p>
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-3xl blur-2xl"></div>
                  <div className="relative w-full h-full rounded-3xl shadow-2xl shadow-purple-500/40 overflow-hidden border-4 border-white/20 backdrop-blur-sm">
                    <img
                      src={hero}
                      alt="Premium Bracelet"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className="absolute -top-6 -left-6 bg-gradient-to-r from-pink-600/40 to-rose-600/40 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/30 animate-float">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-rose-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p
                        className="text-sm font-bold text-white"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Love Energy
                      </p>
                      <p
                        className="text-xs text-gray-200"
                        style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                      >
                        Rose Quartz
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-600/40 to-emerald-600/40 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/30 animate-float"
                  style={{ animationDelay: "0.5s" }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p
                        className="text-sm font-bold text-white"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Abundance
                      </p>
                      <p
                        className="text-xs text-gray-200"
                        style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                      >
                        Pyrite
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="absolute top-1/2 -right-8 bg-gradient-to-r from-purple-600/40 to-indigo-600/40 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-white/30 animate-float"
                  style={{ animationDelay: "1s" }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Zap className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p
                        className="text-sm font-bold text-white"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        Pre-Charged
                      </p>
                      <p
                        className="text-xs text-gray-200"
                        style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                      >
                        10x Power
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MINIMAL FREE BONUS SECTION */}
      <section className="py-16 bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="bg-gradient-to-br from-yellow-900/30 via-orange-900/20 to-transparent backdrop-blur-xl rounded-3xl p-8 md:p-10 border-2 border-yellow-500/40 shadow-2xl">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-600/30 to-orange-600/30 border border-yellow-500/50 rounded-full px-6 py-3 mb-6">
                <Gift className="w-6 h-6 text-yellow-400" />
                <span
                  className="font-black text-yellow-400 text-lg"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  FREE BONUS
                </span>
              </div>

              <h2
                className="text-3xl md:text-4xl font-black bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent mb-4"
                style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
              >
                🎁 Digital Wealth & Love Report
              </h2>
              <p
                className="text-lg text-gray-300 max-w-2xl mx-auto"
                style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
              >
                Get a{" "}
                <span className="font-bold text-yellow-400">
                  personalized report
                </span>{" "}
                worth
                <span className="font-bold text-2xl text-orange-400">
                  {" "}
                  ₹2000
                </span>{" "}
                — absolutely
                <span className="font-bold text-yellow-400"> FREE</span> with
                your bracelet!
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  icon: <Heart className="w-6 h-6" />,
                  title: "Love Analysis",
                  desc: "Compatibility & energy cycles",
                },
                {
                  icon: <DollarSign className="w-6 h-6" />,
                  title: "Money Forecast",
                  desc: "6-month opportunities",
                },
                {
                  icon: <Sparkles className="w-6 h-6" />,
                  title: "Energy Tips",
                  desc: "Amplify bracelet power",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center group hover:border-yellow-400/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <h3
                    className="text-white font-bold mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-400 text-sm"
                    style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center">
              <p
                className="text-gray-300 mb-4 flex items-center justify-center space-x-2"
                style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
              >
                <Mail className="w-5 h-5 text-yellow-400" />
                <span>Delivered instantly to your email</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section
        id="reviews"
        className="py-20 bg-gradient-to-br from-slate-900 to-slate-800"
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              What Our Customers Say
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Riya",
                location: "Pune",
                initials: "R",
                review:
                  "Wore it for 3 weeks — my partner and I started talking again!",
              },
              {
                name: "Kunal",
                location: "Delhi",
                initials: "K",
                review:
                  "I was behind on my EMI, suddenly got a project that cleared it.",
              },
              {
                name: "Sakshi",
                location: "Jaipur",
                initials: "S",
                review:
                  "This bracelet feels alive. I can literally sense calmness now.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/90 to-purple-900/50 rounded-2xl p-8 shadow-lg group hover:-translate-y-2 transition-transform duration-300 border border-purple-500/20"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p
                  className="text-gray-300 leading-relaxed mb-6 italic"
                  style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                >
                  "{testimonial.review}"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p
                      className="font-semibold text-gray-200"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {testimonial.name}
                    </p>
                    <p
                      className="text-sm text-gray-400"
                      style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                    >
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              Why Choose Our Bracelet?
            </h2>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-full bg-gradient-to-br from-slate-800/90 to-purple-900/50 rounded-2xl shadow-lg overflow-hidden border border-purple-500/30">
              <div className="bg-gradient-to-r from-purple-900/80 to-pink-900/80 border-b border-purple-500/30">
                <div className="grid grid-cols-3 gap-4 p-6">
                  <div className="text-left">
                    <h3
                      className="text-lg font-bold text-gray-200"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      Features
                    </h3>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent inline-flex items-center justify-center space-x-2 mx-auto">
                      <span>Our Bracelet</span>
                      <Check className="w-5 h-5 text-emerald-400" />
                    </h3>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-bold bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent inline-flex items-center justify-center space-x-2 mx-auto">
                      <span>Others</span>
                      <X className="w-5 h-5 text-red-400" />
                    </h3>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-purple-500/20">
                {[
                  {
                    feature: "100% Natural Crystals",
                    ours: "check",
                    others: "cross",
                  },
                  {
                    feature: "Pre-Charged by Astrologers",
                    ours: "check",
                    others: "cross",
                  },
                  {
                    feature: "Love + Wealth Energies",
                    ours: "check",
                    others: "cross",
                  },
                  {
                    feature: "Trusted by 15,000+",
                    ours: "check",
                    others: "cross",
                  },
                ].map((row, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-3 gap-4 p-6 hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="text-left">
                      <p
                        className="font-medium text-gray-200"
                        style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                      >
                        {row.feature}
                      </p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center">
                        {row.ours === "check" && (
                          <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/40">
                            <Check className="w-5 h-5 text-green-400" />
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center">
                        {row.others === "cross" && (
                          <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/40">
                            <X className="w-5 h-5 text-red-400" />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        id="cta"
        className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-10 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-red-500/20 text-red-400 border border-red-500/40 rounded-full px-6 py-3 mb-8 animate-pulse">
              <Clock className="w-5 h-5" />
              <span
                className="font-bold"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                LIMITED OFFER
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent mb-8 leading-tight"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              💎 Get Bracelet + Free Wealth & Love Report for ₹799
              <br />
            </h2>
            <div className="bg-gradient-to-r from-purple-900/80 to-pink-900/80 backdrop-blur-sm rounded-2xl p-8 mb-8 shadow-lg max-w-4xl mx-auto border border-purple-500/40">
              <h3
                className="text-2xl font-bold text-gray-200 mb-4"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                🕒 Only 100 units pre-charged this month
              </h3>
              <p
                className="text-lg text-gray-300 mb-6"
                style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
              >
                Once they're gone, they'll take 3 weeks to recharge under
                rituals. <br></br> ⚡ Grab yours before it's sold out!
              </p>

              <button
                className="bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 text-white text-xl px-12 py-6 rounded-xl shadow-2xl transition-all duration-300 transform hover:scale-105"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
                onClick={() => navigate("/bracelet-cart")}
              >
                <span className="flex items-center justify-center space-x-2">
                  <Gift className="w-6 h-6" />
                  <span>Claim Your Bracelet Now</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="py-20 bg-gradient-to-br from-slate-800 to-slate-900"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "Can anyone wear it?",
                answer:
                  "Yes — suitable for both men & women. Works for all zodiac signs.",
              },
              {
                question: "When will I start seeing results?",
                answer: "Most users feel calmer within 7–14 days.",
              },
              {
                question: "Is it real stone or synthetic?",
                answer:
                  "100% natural — Real Rose Quartz fades slightly in sunlight over time.",
              },
              {
                question: "How do I activate it?",
                answer:
                  "Just wear it on your left hand. Pre-charged with rituals.",
              },
            ].map((faq, index) => (
              <div key={index} className="mb-4">
                <div className="bg-gradient-to-br from-slate-800/90 to-purple-900/50 rounded-2xl shadow-lg overflow-hidden border border-purple-500/20">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-800/60 transition-colors duration-200"
                  >
                    <h3
                      className="text-lg font-semibold text-gray-200 pr-4"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    >
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openFaq === index ? (
                        <Minus className="w-6 h-6 text-purple-400" />
                      ) : (
                        <Plus className="w-6 h-6 text-purple-400" />
                      )}
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="px-8 pb-6">
                      <p
                        className="text-gray-400 leading-relaxed"
                        style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-16 border-t border-purple-500/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-yellow-500 rounded-2xl p-8 text-center mb-8 shadow-lg">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "'Playfair Display', 'Georgia', serif" }}
            >
              ✨ Don't wait for luck. Create it. ✨
            </h2>
            <p
              className="text-xl mb-8 opacity-90 max-w-2xl mx-auto"
              style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
            >
              Your love, your peace, your abundance — it's all waiting for you
              to realign.
            </p>
            <button
              className="bg-white text-purple-900 hover:bg-gray-100 px-12 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
              onClick={() => navigate("/bracelet-cart")}
            >
              🛒 Claim Yours Before the Offer Ends
            </button>
          </div>
          <div
            className="text-center text-gray-400 text-sm"
            style={{ fontFamily: "'Lato', 'Arial', sans-serif" }}
          >
            <p>&copy; 2025 Love & Money. All rights reserved.</p>
          </div>
        </div>
      </footer>

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
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Raghib;
