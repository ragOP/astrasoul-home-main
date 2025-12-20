import React from 'react';
import { Phone, ShoppingCart } from 'lucide-react';
import PrimaryButton from './PrimaryButton';

// Data configuration for easy maintenance
const SERVICES_DATA = [
    {
        title: '45-Minute Live Consultation',
        description: 'With India\'s most trusted astro-numerologist personally on call.',
        icon: '📞'
    },
    {
        title: 'Free Kundali Analysis',
        description: 'A detailed birth chart breakdown simplified especially for you.',
        icon: '🔮'
    },
    {
        title: 'Love Report PDF',
        description: 'Covers your emotional patterns, love timeline, soulmate clarity and more.',
        icon: '💕'
    },
    {
        title: 'Wealth Report PDF',
        description: 'Career direction money blocks, business timing & wealth astrology.',
        icon: '💰'
    },
    {
        title: 'Ask ANY Questions You Have',
        description: 'About your past, present, or future — this call is fully customized for you.',
        icon: '❓'
    },
    {
        title: 'Numerology Add-On',
        description: 'Our Astrolgers will also decode your name, vibrations and number destiny.',
        icon: '🔢'
    }
];

const ServiceItem = ({ title, description, icon }) => (
    <div className="group relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-xl blur-lg group-hover:blur-xl transition-all duration-500 opacity-0 group-hover:opacity-100" />
        <div className="relative flex items-start space-x-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-amber-400/50 transition-all duration-300 hover:transform hover:scale-105">
            <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-400/30 to-orange-400/30 rounded-xl flex items-center justify-center border border-amber-400/50 backdrop-blur-sm">
                    <span className="text-2xl">{icon}</span>
                </div>
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl blur-sm opacity-30" />
            </div>
            <div className="flex-1">
                <h3 className="text-white/90 text-base sm:text-lg text-left font-medium mb-1">{title}</h3>
                <p className="text-white/70 text-sm leading-relaxed text-left">{description}</p>
            </div>
        </div>
    </div>
);

function WhatsIncludedSection() {
    return (
        <section className="relative py-4 mb-4 sm:py-16 bg-gradient-to-b from-black via-slate-900/50 to-black">

            {/* Animated Background - Matching LifeDecodedSection */}
            {/* <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

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
            </div> */}

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
                        {/* Background glow effect - Matching LifeDecodedSection */}
                        <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />

                        {/* Main content container - Matching LifeDecodedSection */}
                        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl px-4 py-6 sm:p-8 lg:p-12 border border-white/20 shadow-2xl">
                            <div className="text-center space-y-6 sm:space-y-12">

                                {/* Header Section - Matching LifeDecodedSection Style */}
                                <header className="space-y-4 sm:space-y-6">
                                    <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3">
                                        <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                                        <span className="text-white/70 text-sm sm:text-base font-medium">Complete Package</span>
                                    </div>

                                    <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                                        <span className="block text-white">What's Included</span>
                                    </h2>

                                    <p className="text-lg sm:text-xl text-white/80 font-medium max-w-3xl">
                                        Here's what you get in this Mega Bundle Call:
                                    </p>
                                </header>

                                {/* Services Grid - Using exact LifeDecodedSection BenefitItem style */}
                                <section className="space-y-6 sm:space-y-10">
                                    <div className="space-y-3 sm:space-y-6 max-w-4xl mx-auto">
                                        {SERVICES_DATA.map((service, index) => (
                                            <ServiceItem key={index} {...service} />
                                        ))}
                                    </div>
                                </section>

                                {/* Call Button Section - Enhanced */}
                                <section className="space-y-6 sm:space-y-10">
                                    <div className="relative">
                                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
                                            Ready to Transform Your Life?
                                        </h3>
                                        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full" />
                                    </div>

                                    <div className="relative">
                                        <p className="text-lg sm:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-4xl mx-auto font-medium italic">
                                            Ye call sirf astrology nahi — yeh aapka realignment hai.
                                        </p>
                                        <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/10 to-purple-500/10 rounded-2xl blur-xl" />
                                    </div>

                                    <PrimaryButton
                                        text='Get Your Mega Bundle'
                                        icon={<ShoppingCart className='h-5 w-5' />}
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

export default WhatsIncludedSection; 