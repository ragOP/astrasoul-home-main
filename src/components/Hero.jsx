import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from './PrimaryButton';
import { PhoneCall } from 'lucide-react';
import Navbar from './Navbar';

const Hero = () => {
    const [isMobile, setIsMobile] = useState(() => {
        if (typeof window !== 'undefined') {
            return window.innerWidth < 1024;
        }
        return false;
    });

    useEffect(() => {
        const checkMobile = () => {
            const mobile = window.innerWidth < 1024;
            setIsMobile(mobile);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    return (
        <section id="home" className="relative flex items-start justify-center overflow-hidden pt-4 sm:pt-12 pb-8 sm:pb-12"> 
            {/* Animated Background */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>

                {/* Floating Elements */}
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

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
                {/* Mobile Layout - Text First, Image Second */}
                <div className="lg:hidden space-y-4">
                    {/* Text Content */}
                    <div className="text-center space-y-3">
                        <div className="space-y-2">
                            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 sm:px-4 py-2">
                                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                                <span className="text-white/70 text-xs sm:text-sm font-medium">Premium Astro Consultation</span>
                            </div>

                            <h1 className="text-2xl sm:text-4xl font-bold leading-tight pb-2">
                                <span className="text-white">Na Pyaar Mil Raha</span>
                                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-purple-400 bg-clip-text text-transparent pl-2">Na Paisa?</span>
                            </h1>

                            {/* Mobile Image - Show after text */}
                            {isMobile && <div className="flex justify-center">
                                <div className="relative group">
                                    <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-2 border border-white/20">
                                        <img
                                            src="/astro-hero.png"
                                            alt="Premium Astro Guidance"
                                            className="w-full max-w-sm sm:max-w-md rounded-2xl shadow-2xl"
                                        />
                                    </div>
                                </div>
                            </div>}

                            <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                                Unlock the secrets of your destiny through ancient wisdom and modern cosmic insights.
                                Transform your life with personalized astrological guidance.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 sm:gap-8 space-y-2 pt-4 sm:pt-8 border-t border-white/10">
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-amber-400">10K+</div>
                                <div className="text-white/60 text-xs sm:text-sm">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-purple-400">99%</div>
                                <div className="text-white/60 text-xs sm:text-sm">Accuracy Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-orange-400">24/7</div>
                                <div className="text-white/60 text-xs sm:text-sm">Support</div>
                            </div>
                        </div>

                        {/* <div className="flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center pt-4">
                            <PrimaryButton
                                text="Book Your Call"
                                icon={
                                    <PhoneCall className='h-5 w-5' />
                                }
                            />
                        </div> */}
                    </div>
                </div>

                {/* Desktop Layout - Left-Right Grid */}
                <div className="hidden lg:grid lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="text-left space-y-8">
                        <div className="space-y-4">
                            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                                <span className="text-white/70 text-sm font-medium">Premium Astro Consultation</span>
                            </div>

                            <h1 className="text-5xl xl:text-6xl font-bold leading-tight">
                                <span className="block text-white">Na Pyaar Mil Raha</span>
                                <span className="block bg-gradient-to-r from-amber-400 via-orange-400 to-purple-400 bg-clip-text text-transparent pl-7">Na Paisa?</span>
                            </h1>

                            <p className="text-xl xl:text-2xl text-white/80 leading-relaxed max-w-2xl">
                                Unlock the secrets of your destiny through ancient wisdom and modern cosmic insights.
                                Transform your life with personalized astrological guidance.
                            </p>
                        </div>

                        <div className="flex gap-6 justify-start">
                            <PrimaryButton
                                text='Book Your Call'
                                icon={<PhoneCall className='h-5 w-5' />}
                            />
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/10">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-amber-400">10K+</div>
                                <div className="text-white/60 text-sm">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-400">99%</div>
                                <div className="text-white/60 text-sm">Accuracy Rate</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-400">24/7</div>
                                <div className="text-white/60 text-sm">Support</div>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Image - Show on right side */}
                    {!isMobile && <div className="flex justify-end">
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-orange-500/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-2 border border-white/20">
                                <img
                                    src="/astro-hero.png"
                                    alt="Premium Astro Guidance"
                                    className="w-full max-w-lg rounded-2xl shadow-2xl"
                                />
                            </div>
                        </div>
                    </div>}
                </div>
            </div>
        </section>
    );
};

export default Hero; 