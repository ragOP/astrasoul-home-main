import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Star, Sparkles, PhoneCall, ArrowLeft } from 'lucide-react';
import Navbar from '../components/Navbar';
import PrimaryButton from '../components/PrimaryButton';

const OrderConfirmationBracelet = () => {
  const { orderId, amount } = useLocation().state;
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);
  return (
    <div className="min-h-screen bg-black selection:bg-amber-500/20 selection:text-white">
      <Navbar />
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            <div className={`w-1 h-1 rounded-full ${i % 3 === 0 ? 'bg-amber-400' : i % 3 === 1 ? 'bg-purple-400' : 'bg-white'} opacity-60`}></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 pb-16">
        {/* Success Animation Container */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-orange-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-full p-6 border border-white/20">
              <CheckCircle className="w-16 h-16 text-amber-400 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-white/70 text-sm font-medium">Order Confirmed</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
              <span className="text-white">Thank You!</span>
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-purple-400 bg-clip-text text-transparent pl-2">Order Confirmed</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Your consultation has been successfully booked. Our expert astrologer will contact you within 24 hours to schedule your personalized session.
            </p>
          </div>

          {/* Order Details Card */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-orange-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">Order Details</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-white/60 text-sm">Order ID</p>
                    <p className="text-white font-mono">{orderId}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white/60 text-sm">Service</p>
                    <p className="text-white">Premium Astro Consultation</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white/60 text-sm">Amount Paid</p>
                    <p className="text-amber-400 font-semibold">₹{amount}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-white/60 text-sm">Status</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-green-400 font-medium">Confirmed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center text-white">What's Next?</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-purple-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <PhoneCall className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Expert Contact</h4>
                  <p className="text-white/70 text-sm">Our expert will contact you within 24 hours to schedule your consultation</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Personalized Session</h4>
                  <p className="text-white/70 text-sm">Enjoy a 60-minute personalized consultation with our expert astrologer</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-xl p-6 border border-white/20 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-white font-semibold mb-2">Life Transformation</h4>
                  <p className="text-white/70 text-sm">Receive detailed insights and guidance to transform your life</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/home" className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-white/10 to-white/5 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <button className="relative bg-gradient-to-r from-white/10 to-white/5 rounded-full border border-white/20 shadow-2xl text-white px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </button>
            </Link>
            
            <PrimaryButton 
              text="Book Another Session" 
              className="w-full sm:w-auto"
            />
          </div>

          {/* Additional Info */}
          <div className="text-center space-y-4 pt-8 border-t border-white/10">
            <p className="text-white/60 text-sm">
              Need immediate assistance? Contact us at{' '}
              <span className="text-amber-400 font-medium">support@easysoul.com</span>
            </p>
            <p className="text-white/40 text-xs">
              You will receive a confirmation email shortly with all the details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmationBracelet;
