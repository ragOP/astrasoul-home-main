import React from 'react';
import { Phone } from 'lucide-react';
import PrimaryButton from './PrimaryButton';
import { useNavigate } from 'react-router-dom';
// Data configuration for easy maintenance
const PROBLEMS_DATA = [
  { emoji: '💔', text: 'Pyaar toh hota hai... par sahi insaan se nahi.' },
  { emoji: '💰', text: 'Paisa aata hai... par rukta nahi.' },
  { emoji: '🍀', text: 'Confusion toh full-time chal rahi hai.' }
];

const BENEFITS_DATA = [
  'Clarity on why certain patterns repeat?',
  'Answers to the biggest love, marriage, and money questions?',
  'Real, practical timelines for when your life will shift?'
];

// Reusable UI components
const BenefitItem = ({ text }) => (
  <div className="group relative">
    <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
    <div className="relative flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105">
      <div className="relative">
        <div className="w-3 h-3 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full mt-2 flex-shrink-0 animate-pulse" />
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full blur-sm opacity-30" />
      </div>
      <p className="text-white/90 text-base sm:text-lg text-left font-medium">{text}</p>
    </div>
  </div>
);

const CTAButton = () => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate('/cart');
  };

  return (
    <button 
      onClick={handleClick}
      className="group relative bg-gradient-to-r from-amber-500 to-orange-500 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-full font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-amber-500/25 flex items-center justify-center"
    >
      <span className="relative z-10 flex items-center justify-center gap-2">
        <Phone className="w-5 h-5" />
        Book Your Personal Session
      </span>
      <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

function LifeDecodedSection() {
  return (
    <section className="relative py-8 sm:py-16 bg-gradient-to-b from-black via-slate-900/50 to-black">

      {/* Animated Background - Matching Hero Section */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

        {/* Floating Elements - Matching Hero Section */}
        {[...Array(20)].map((_, i) => (
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

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        /* 3D Perspective Styles */
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .hover\\:rotate-y-2:hover {
          transform: rotateY(2deg);
        }
        
        /* Enhanced animations */
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-spin {
          animation: spin 8s linear infinite;
        }
        
        /* Ringing animation for phone icons */
        @keyframes ring {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(-25deg); }
          20% { transform: rotate(25deg); }
          30% { transform: rotate(-25deg); }
          40% { transform: rotate(25deg); }
          50% { transform: rotate(-25deg); }
          60% { transform: rotate(25deg); }
          70% { transform: rotate(-25deg); }
          80% { transform: rotate(25deg); }
          90% { transform: rotate(-25deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-ring {
          animation: ring 1s ease-in-out infinite;
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative group">
            {/* Background glow effect - Matching Hero Section */}
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />

            {/* Main content container - Matching Hero Section */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 sm:p-8 lg:p-12 border border-white/20 shadow-2xl">
              <div className="text-center space-y-6 sm:space-y-12">

                {/* Header Section - Matching Hero Section Style */}
                <header className="space-y-4 sm:space-y-6">
                  <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3">
                    <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                    <span className="text-white/70 text-sm sm:text-base font-medium">Life Transformation</span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                    <span className="block text-white">Let's be honest...</span>
                  </h2>
                </header>

                {/* Problems Section */}
                <section className="space-y-4 sm:space-y-8">
                  {PROBLEMS_DATA.map((problem, index) => (
                    <div key={index} className="flex items-center space-x-2 sm:space-x-6">
                      <div className="flex-shrink-0">
                        <span className="text-2xl sm:text-2xl">{problem.emoji}</span>
                      </div>
                      <p className="text-white/90 text-sm sm:text-lg font-medium break-words">{problem.text}</p>
                    </div>
                  ))}
                </section>

                {/* Benefits Section */}
                <section className="space-y-6 sm:space-y-10">
                  <div className="relative">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                      But what if you could get:
                    </h3>
                    <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full" />
                  </div>

                  <div className="space-y-3 sm:space-y-6 max-w-3xl mx-auto">
                    {BENEFITS_DATA.map((benefit, index) => (
                      <BenefitItem key={index} text={benefit} />
                    ))}
                  </div>
                </section>

                {/* Conclusion Section */}
                <section className="space-y-6 sm:space-y-10">
                  <div className="relative">
                    <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto font-medium">
                      That's what you get inside this 1-on-1 Personal Session with Our Certified Astrolger — a guided, peaceful, and eye-opening call.
                    </p>
                    <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 to-purple-500/10 rounded-2xl blur-xl" />
                  </div>

                  <PrimaryButton
                    text='Book Your Personal Session'
                    icon={<Phone className='h-5 w-5' />}
                  />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LifeDecodedSection; 