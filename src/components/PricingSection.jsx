import React from 'react';
import { PhoneCall, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// FOMO features data
const FOMO_FEATURES_DATA = [
  'Limited to 10 sessions per week',
  'Limited slots, next batch opens next month',
  'Special pricing valid for 24 hours only',
  'Includes all 6 premium reports',
  'Priority booking for next available slot'
];

// Reusable UI components
const FOMOFeatureItem = ({ text }) => (
  <div className="group relative">
    <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
    <div className="relative flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-green-400/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
        <Check className="w-5 h-5 text-white animate-pulse" />
      </div>
      <p className="text-white/90 text-base sm:text-lg font-bold">{text}</p>
    </div>
  </div>
);

const PricingCard = () => (
  <div className="group relative">
    <div className="absolute -inset-2 bg-gradient-to-r from-red-500/30 via-pink-500/30 to-purple-500/30 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />
    <div className="relative bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-2xl p-8 sm:p-10 border border-red-400/50 shadow-2xl">
      <div className="text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
          1-Hour Booking Window — Only ₹999
        </h3>
        <div className="flex items-center justify-center space-x-3">
          <p className="text-white/60 text-lg sm:text-xl font-semibold line-through">
            ₹9999
          </p>
          <span className="text-green-400 text-lg sm:text-xl font-bold">Save ₹8500</span>
        </div>
        <div className="flex justify-center space-x-3">
          <span className="text-red-400 text-2xl animate-bounce">🔥</span>
          <span className="text-pink-400 text-2xl animate-bounce" style={{ animationDelay: '0.2s' }}>⚡</span>
          <span className="text-purple-400 text-2xl animate-bounce" style={{ animationDelay: '0.4s' }}>💎</span>
        </div>
      </div>
    </div>
  </div>
);

const CTAButton = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/cart');
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-full blur-lg group-hover:blur-xl transition-all duration-500 opacity-75 group-hover:opacity-100" />
      <button 
        onClick={handleClick}
        className="relative bg-gradient-to-r from-green-500 to-blue-500 text-white px-12 sm:px-16 py-6 sm:py-8 rounded-full font-black text-xl sm:text-2xl hover:from-green-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/50 flex items-center justify-center overflow-hidden"
      >
        <span className="relative z-10 flex items-center justify-center gap-4">
          <PhoneCall className="w-7 h-7 animate-phone-ring" />
          Book My 1-on-1 Session Now
          <span className="text-3xl animate-bounce">👆</span>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </button>
    </div>
  );
};

function PricingSection() {
  return (
    <section className="py-1 lg:py-6 bg-gradient-to-b from-black via-slate-900/50 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-6 lg:mb-6">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
              <span className="text-white/70 text-sm sm:text-base font-medium">Limited Time Offer</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="block text-white">Time-Sensitive Offer</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-white/80 font-medium max-w-3xl mx-auto">
              Don't miss this exclusive opportunity to transform your life
            </p>
          </div>

          {/* Pricing Card */}
          <div className="mb-8 sm:mb-16">
            <PricingCard />
          </div>

          {/* FOMO Features */}
          <div className="space-y-3 sm:space-y-6 max-w-3xl mx-auto mb-8 sm:mb-12">
            {FOMO_FEATURES_DATA.map((feature, index) => (
              <FOMOFeatureItem key={index} text={feature} />
            ))}
          </div>

          {/* Limited Sessions Info */}
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-lg sm:text-xl text-white/90 font-medium italic animate-pulse">
              Limited sessions per week. Limited slots, next batch opens next month.
            </p>
          </div>

          {/* Final CTA */}
          <div className="text-center space-y-6 sm:space-y-8">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative p-6 rounded-2xl bg-white/10 border border-white/20">
                <p className="text-xl sm:text-2xl lg:text-3xl text-white/95 font-bold italic">
                  "Zindagi mein clarity chahiye toh stars ko samajhna padega."
                </p>
              </div>
            </div>
            
            <p className="text-xl sm:text-2xl text-white/90 font-semibold">
              Book your call now & finally get the answers you deserve.
            </p>
            
            <div className="flex justify-center">
              <CTAButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Add vibration animation
const ringAnimation = `
  @keyframes phoneVibrate {
    0% { transform: translateY(0px); }
    10% { transform: translateY(-3px); }
    20% { transform: translateY(3px); }
    30% { transform: translateY(-3px); }
    40% { transform: translateY(3px); }
    50% { transform: translateY(-3px); }
    60% { transform: translateY(3px); }
    70% { transform: translateY(-3px); }
    80% { transform: translateY(3px); }
    90% { transform: translateY(-3px); }
    100% { transform: translateY(0px); }
  }
  .animate-phone-ring {
    animation: phoneVibrate 6s ease-in-out infinite;
  }
`;

// Inject the CSS
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = ringAnimation;
  document.head.appendChild(style);
}

export default PricingSection; 