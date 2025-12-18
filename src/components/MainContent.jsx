import React from 'react';

const MainContent = () => {
    return (
        <div className="max-w-5xl mx-auto p-4" >
            <div className="relative group z-1">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-purple-500/20 to-orange-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-2xl">
                    <div className="text-center space-y-6 sm:space-y-8">
                        <div className="flex justify-center items-center space-x-1 sm:space-x-2 mb-4 sm:mb-6">
                            <h2 className="text-base sm:text-base lg:text-lg xl:text-xl font-bold bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent max-w-lg leading-tight whitespace-nowrap">
                                Dikkat aapme nahi hai, aapke stars mein hai!
                            </h2>
                        </div>

                        <div className="space-y-4 sm:space-y-6">
                            <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-semibold text-white leading-relaxed">
                                Book a 1-on-1 Consultation with India's Top Astro-Numerology Expert
                            </h3>
                            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-400/30 rounded-full px-3 sm:px-6 py-2 sm:py-3">
                                <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                                <span className="text-amber-400 font-semibold tracking-wider uppercase text-[0.7rem] sm:text-sm">
                                    Our Astrolger ARE Certified Experts
                                </span>
                            </div>
                            <p className="text-white/90 text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                                And finally understand what's been blocking your love, career & destiny through personalized cosmic analysis.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MainContent; 