import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Star, Sparkles, PhoneCall, ArrowLeft, Heart } from 'lucide-react';
import Navbar from '../components/love/Navbar';
import CTAButton from '../components/love/CTAButton';

const LoveOrderConfirmation = () => {
  const { orderId, amount } = useLocation().state;
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-purple-100 selection:bg-rose-500/20 selection:text-gray-800">
      <Navbar />
      
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 via-rose-100/30 to-purple-100/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(244,63,94,0.1),transparent_50%)]"></div>

        {/* Floating Heart Elements */}
        {[...Array(12)].map((_, i) => (
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
            <Heart 
              className={`w-2 h-2 ${i % 3 === 0 ? 'text-rose-400' : i % 3 === 1 ? 'text-pink-400' : 'text-purple-400'} opacity-60`}
              fill="currentColor"
            />
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-16 pb-16">
        {/* Success Animation Container */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-rose-500/20 via-pink-500/20 to-purple-500/20 rounded-full blur-2xl animate-pulse"></div>
            <div className="relative bg-white/25 backdrop-blur-xl rounded-full p-6 border border-white/30 shadow-xl">
              <CheckCircle className="w-16 h-16 text-rose-500 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/25 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 text-sm font-medium love-font-poppins">Order Confirmed</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-bold leading-tight love-font-poppins">
              <span className="text-gray-800">Thank You!</span>
              <span className="bg-gradient-to-r from-rose-600 via-pink-500 to-purple-600 bg-clip-text text-transparent pl-2">Love Report Ordered</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto love-font-poppins">
              Your Love & Relationship Report has been successfully ordered. Our expert astrologer will analyze your birth chart and deliver your personalized report within 48-72 hours.
            </p>
          </div>

          {/* Order Details Card */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-gradient-to-r from-rose-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-white/25 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/30 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-800 love-font-poppins">Order Details</h3>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-rose-500 fill-current" />
                    <Star className="w-4 h-4 text-rose-500 fill-current" />
                    <Star className="w-4 h-4 text-rose-500 fill-current" />
                    <Star className="w-4 h-4 text-rose-500 fill-current" />
                    <Star className="w-4 h-4 text-rose-500 fill-current" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-gray-600 text-sm love-font-poppins">Order ID</p>
                    <p className="text-gray-800 font-mono">{orderId}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600 text-sm love-font-poppins">Service</p>
                    <p className="text-gray-800 love-font-poppins">Love & Relationship Report</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600 text-sm love-font-poppins">Amount Paid</p>
                    <p className="text-rose-600 font-semibold">₹{amount}</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-600 text-sm love-font-poppins">Status</p>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-600 font-medium love-font-poppins">Confirmed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What's Next */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-center text-gray-800 love-font-poppins">What's Next?</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-500/20 to-pink-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-white/25 backdrop-blur-xl rounded-xl p-6 border border-white/30 text-center shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-white" fill="currentColor" />
                  </div>
                  <h4 className="text-gray-800 font-semibold mb-2 love-font-poppins">Love Analysis</h4>
                  <p className="text-gray-600 text-sm love-font-poppins">Our expert will analyze your birth chart for love insights</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-white/25 backdrop-blur-xl rounded-xl p-6 border border-white/30 text-center shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-gray-800 font-semibold mb-2 love-font-poppins">Personalized Report</h4>
                  <p className="text-gray-600 text-sm love-font-poppins">Receive your detailed love & relationship insights</p>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-rose-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-white/25 backdrop-blur-xl rounded-xl p-6 border border-white/30 text-center shadow-xl">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-gray-800 font-semibold mb-2 love-font-poppins">Love Guidance</h4>
                  <p className="text-gray-600 text-sm love-font-poppins">Get remedies and guidance for your love life</p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/home" className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-white/25 to-white/15 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <button className="relative bg-white/25 backdrop-blur-xl rounded-full border border-white/30 shadow-xl text-gray-800 px-6 py-3 font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 love-font-poppins">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </button>
            </Link>
            
            <CTAButton 
              text="Order Another Report" 
              className="w-full sm:w-auto"
            />
          </div>

          {/* Additional Info */}
          <div className="text-center space-y-4 pt-8 border-t border-white/30">
            <p className="text-gray-600 text-sm love-font-poppins">
              Need immediate assistance? Contact us at{' '}
              <span className="text-rose-600 font-medium">support@easysoul.com</span>
            </p>
            <p className="text-gray-500 text-xs love-font-poppins">
              You will receive a confirmation email shortly with all the details.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveOrderConfirmation;
