import React, { useState, useEffect } from 'react';
import CTAButton from './CTAButton';
import ImageSlider from './ImageSlider';


const LoveHero = () => {
    const [reportCount, setReportCount] = useState(1247);
    const [isVisible, setIsVisible] = useState(false);

    // Sample images for the slider
    const sliderImages = [
        {
            src: "/astro-soul-digital.webp",
            alt: "Astro Soul Digital"
        },
        {
            src: "/astro-2.webp",
            alt: "Love and Energy"
        },
        {
            src: "/astro-soul-digital.webp",
            alt: "Sacred Connection"
        }
    ];

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setReportCount(prev => prev + Math.floor(Math.random() * 3) + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-pink-950 via-rose-900 to-purple-900 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-600/20 via-rose-500/15 to-purple-600/20"></div>

                {/* Floating Geometric Shapes */}
                <div className="absolute top-20 left-20 w-24 h-24 bg-gradient-to-r from-pink-400/30 to-rose-400/30 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-32 right-32 w-20 h-20 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-gradient-to-r from-rose-400/30 to-purple-400/30 rounded-full blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>

                {/* Enhanced Animated Particles */}
                {Array.from({ length: 35 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute rounded-full animate-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 3 + 1}px`,
                            height: `${Math.random() * 3 + 1}px`,
                            backgroundColor: `hsl(${320 + Math.random() * 40}, 70%, ${60 + Math.random() * 30}%)`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${3 + Math.random() * 4}s`,
                            opacity: 0.6 + Math.random() * 0.4,
                        }}
                    />
                ))}

                {/* Floating Sparkles */}
                {Array.from({ length: 15 }).map((_, i) => (
                    <div
                        key={`sparkle-${i}`}
                        className="absolute animate-sparkle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 6}s`,
                            animationDuration: `${4 + Math.random() * 3}s`,
                        }}
                    >
                        <div className="w-1 h-1 bg-pink-200 rounded-full"></div>
                        <div className="w-0.5 h-0.5 bg-rose-200 rounded-full mt-1"></div>
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div className="relative z-10 container mx-auto px-4 pt-20 sm:pt-24 pb-8">
                <div className="max-w-4xl mx-auto">
                    {/* Hero Header */}
                    <div className="text-center mb-8">
                        <div className="relative">
                            {/* Decorative Elements */}


                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 mb-2">
                                    Embrace Your
                                </span>
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400">
                                    Sacred Love Power
                                </span>
                            </h1>
                        </div>
                    </div>

                    {/* Clean Image Slider Section */}
                    <div className="mb-8">
                        <div className="relative max-w-4xl mx-auto">
                            <ImageSlider
                                images={sliderImages}
                                showArrows={false}
                                showDots={true}
                                showCount={false}
                            />
                        </div>
                    </div>

                    {/* Subtitle Section */}
                    <div className="text-center max-w-4xl mx-auto mb-8">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-3">
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 mb-2">
                                Connect with your divine feminine energy
                            </span>
                            <span className="block text-white/90 text-xl md:text-2xl font-medium">
                                and manifest true love
                            </span>
                        </h2>
                    </div>

                    {/* CTA Button Section */}
                    <div className="flex justify-center mb-8">
                        <div className="relative group">
                            {/* Button Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 rounded-full blur-lg group-hover:blur-xl transition-all duration-300 opacity-80"></div>

                            {/* Floating Elements */}
                            <div className="absolute -top-4 -left-4 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
                            <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                            <div className="absolute top-1/2 -left-6 w-1.5 h-1.5 bg-rose-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                            <div className="absolute top-1/2 -right-6 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>

                            <CTAButton
                                text="Get Your Love Report Now"
                                onClick={() => console.log('Love Report CTA clicked')}
                                variant="primary"
                                size="large"
                            />
                        </div>
                    </div>

                    {/* Stats Section */}
                    <div className="text-center">
                        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                            <div className="relative max-w-xl mx-auto">
                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-rose-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>

                                <div className="relative bg-gradient-to-br from-pink-800/80 to-purple-800/80 rounded-2xl p-6 border border-pink-400/30 shadow-xl">
                                    <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-rose-300 to-purple-300 mb-2">
                                        {reportCount.toLocaleString()}
                                    </div>
                                    <div className="text-lg md:text-xl text-white/90 font-semibold mb-3">
                                        Love Reports Generated
                                    </div>

                                    {/* Progress Bar */}
                                    <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                                        <div className="h-full bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Custom Animations */}
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
                
                @keyframes particle {
                    0% {
                        transform: translateY(0px) translateX(0px) scale(1);
                        opacity: 0;
                    }
                    20% {
                        opacity: 1;
                    }
                    80% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100px) translateX(${Math.random() * 50 - 25}px) scale(0);
                        opacity: 0;
                    }
                }
                
                @keyframes sparkle {
                    0% {
                        transform: translateY(0px) rotate(0deg) scale(0);
                        opacity: 0;
                    }
                    25% {
                        transform: translateY(-20px) rotate(90deg) scale(1);
                        opacity: 1;
                    }
                    50% {
                        transform: translateY(-40px) rotate(180deg) scale(1.2);
                        opacity: 0.8;
                    }
                    75% {
                        transform: translateY(-60px) rotate(270deg) scale(1);
                        opacity: 0.6;
                    }
                    100% {
                        transform: translateY(-80px) rotate(360deg) scale(0);
                        opacity: 0;
                    }
                }
                
                .animate-float {
                    animation: float 6s ease-in-out infinite;
                }
                
                .animate-particle {
                    animation: particle 7s ease-in-out infinite;
                }
                
                .animate-sparkle {
                    animation: sparkle 7s ease-in-out infinite;
                }
            `}</style>
        </div>
    );
};

export default LoveHero; 