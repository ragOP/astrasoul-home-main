import React from 'react';
import { Heart, Eye, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CTAButton from './CTAButton';

const Hero = () => {
    const navigate = useNavigate();

    const handleCTAClick = () => {
        console.log('CTA button clicked!');
        navigate('/cart-2', { state: { scrollToTop: true } });
    };

    return (
        <div className="relative overflow-hidden">
            {/* Enhanced Background Animations */}
            <div className="absolute inset-0">
                {/* Floating Heart Icons - Flowing from bottom to top */}
                <div className="absolute inset-0">
                    {Array.from({ length: 8 }).map((_, i) => (
                        <div
                            key={i}
                            className="absolute animate-bounce"
                            style={{
                                left: `${Math.random() * 100}%`,
                                bottom: '-20px',
                                animationDelay: `${Math.random() * 15}s`,
                                animationDuration: `${25 + Math.random() * 15}s`,
                                animationTimingFunction: 'ease-in-out',
                                transform: 'translateY(0)',
                                animation: `floatUp ${25 + Math.random() * 15}s ${Math.random() * 15}s infinite ease-in-out`,
                            }}
                        >
                            <Heart
                                className="w-4 h-4 text-rose-400/40"
                                fill="currentColor"
                            />
                        </div>
                    ))}
                </div>

                {/* Floating Geometric Shapes */}
                <div className="absolute top-20 left-20 w-16 h-16 bg-gradient-to-r from-rose-400/20 to-pink-400/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-32 right-32 w-20 h-20 bg-gradient-to-r from-pink-400/20 to-amber-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-gradient-to-r from-amber-400/20 to-rose-400/20 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
            </div>

            {/* Custom CSS for floating animation */}
            <style jsx>{`
                @keyframes floatUp {
                    0% {
                        transform: translateY(0) rotate(0deg);
                        opacity: 0;
                    }
                    10% {
                        opacity: 1;
                    }
                    90% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100vh) rotate(360deg);
                        opacity: 0;
                    }
                }
            `}</style>

            {/* Single Container */}
            <div className="relative z-10 container mx-auto flex flex-col">
                {/* Single Image at Top with Simple Glass Morphism */}
                <div className="mb-6">
                    <div className="relative max-w-4xl mx-auto group ">

                        <h1 className="text-3xl mt-2 md:text-5xl lg:text-7xl text-center font-extrabold text-gray-800 mb-2">
                            <span className="bg-gradient-to-r from-rose-600 via-pink-500 to-purple-600 bg-clip-text text-transparent text-3xl md:text-5xl lg:text-6xl font-bold tracking-wide love-font-poppins drop-shadow-lg">
                                💖 Kab milega sacha pyaar??
                            </span>
                        </h1>
                        {/* Single glass morphism overlay */}
                        <div className="relative bg-white/25 backdrop-blur-xl mx-4 border border-white/30 shadow-xl overflow-hidden p-2">
                            <img
                                src="/astro-hero.jpeg"
                                alt="Astro Soul Digital"
                                className="w-full  object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                        </div>
                    </div>
                </div>

                {/* Subheadline Section */}
                <div className="text-center">
                    <div className="relative">
                        <p className="text-xl md:text-2xl font-medium text-rose-600 mb-3 love-font-poppins">
                            Let the stars decode your love story.
                        </p>

                        {/* Trust Chip */}
                        <div className="inline-flex items-center px-4 py-2 mb-3 bg-rose-50 border border-rose-200 rounded-full text-sm font-medium text-rose-700">
                            <Heart className="w-4 h-4 mr-2 text-rose-600" fill="currentColor" />
                            Trusted by 1.5L+ Users
                        </div>
                    </div>
                </div>

                {/* Enhanced Subtitle Section */}
                <div className="text-center max-w-4xl mx-auto mb-4">
                    <div className="relative px-2">
                        <h2 className="text-[0.9rem] md:text-2xl lg:text-3xl font-medium text-gray-700 leading-relaxed">
                            <span className="block love-font-poppins">
                                Get your personalized Love & Relationship Report based on Vedic astrology & numerology
                            </span>
                            <span className="block text-[1rem] md:text-xl lg:text-2xl text-purple-600 mt-2 love-font-dancing font-bold">
                                — delivered within 48–72 hours via Email + WhatsApp.
                            </span>
                        </h2>
                    </div>
                </div>

                {/* CTA Button Section */}
                <div className="flex justify-center mb-4">
                    <CTAButton 
                        text="Get My Love Report – Just ₹499"
                        // size="large"
                        variant="primary"
                        showArrow={true}
                        className="whitespace-nowrap"
                        onClick={handleCTAClick}
                    />
                </div>

                {/* Social Proof Stats - Below CTA */}
                <div className="flex justify-center mb-8">
                    <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/40">
                        <div className="flex items-center space-x-6">
                            <div className="flex items-center space-x-2">
                                <Users className="w-5 h-5 text-green-600" />
                                <span className="text-sm font-medium text-gray-700">
                                    8,619 sold today
                                </span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Eye className="w-5 h-5 text-blue-600" />
                                <span className="text-sm font-medium text-gray-700">
                                    55 viewing now
                                </span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Hero; 