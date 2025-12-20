import React from 'react';
import ServiceCard from './ServiceCard';
import PrimaryButton from './PrimaryButton';
import { PhoneCall } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: "📞",
      title: "Live Call",
      subtitle: "45 mins",
      description: "Transformative 45-minute consultation with our certified experts. Get personalized insights about love, career and finances. Ask questions and receive immediate guidance to unlock your potential.",
      gradientFrom: "from-amber-500/20",
      gradientTo: "to-orange-500/20",
      borderColor: "hover:border-amber-400/50"
    },
    {
      icon: "🔮",
      title: "Kundali Reading",
      subtitle: "Detailed Analysis",
      description: "Comprehensive birth chart analysis revealing your life's purpose and opportunities. Discover hidden talents, understand relationships and identify the best timing for important decisions.",
      gradientFrom: "from-purple-500/20",
      gradientTo: "to-pink-500/20",
      borderColor: "hover:border-purple-400/50"
    },
    {
      icon: "📄",
      title: "Love + Wealth",
      subtitle: "PDF Report",
      description: "In-depth reports covering your love life, career prospects, and financial opportunities. Receive personalized recommendations and strategies to enhance your success in both areas.",
      gradientFrom: "from-green-500/20",
      gradientTo: "to-teal-500/20",
      borderColor: "hover:border-green-400/50"
    }
  ];

  return (
    <section className="bg-gradient-to-b mt-4 from-black via-slate-900/50 to-black">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        {/* Services Section */}
        <div className="pt-0 sm:pt-6 space-y-8">
          <div id="services" className="text-center">
            <div className="space-y-4 sm:space-y-6">
              <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
                <span className="text-white/70 text-xs sm:text-sm font-medium">Our Premium Services</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-purple-400 bg-clip-text text-transparent">
                  Transform Your Life
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Choose from our carefully crafted services designed to provide you with the most accurate and personalized cosmic guidance.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                subtitle={service.subtitle}
                description={service.description}
                gradientFrom={service.gradientFrom}
                gradientTo={service.gradientTo}
                borderColor={service.borderColor}
              />
            ))}
          </div>
        </div>

      {/* <PrimaryButton
        text='Book Your Call'
        className='mt-8'
        icon={<PhoneCall className='h-5 w-5 mb-' />}
      /> */}
      </div>
    </section>
  );
};

export default ServicesSection; 