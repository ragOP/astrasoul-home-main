import React from 'react';
import { Check, Heart } from 'lucide-react';

const PromotionalCard = () => {
    return (
        <div className="relative overflow-hidden">
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
                
                {/* Main Title Section */}
                <div className="text-center p-8 pb-6">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 font-merriweather mb-4">
                        Find Your Perfect Love Match in 2025
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 font-poppins">
                        Discover your romantic destiny through personalized cosmic insights
                    </p>
                </div>

                {/* Central Image Section */}
                <div className="px-8 pb-6">
                    <div className="relative">
                        <img
                            src="/astro-soul-digital.webp"
                            alt="Couple with Love Analysis Report"
                            className="w-full h-80 md:h-96 object-cover rounded-xl"
                        />
                    </div>
                </div>

                {/* Delivery Information Section */}
                <div className="px-8 pb-8">
                    <div className="flex items-center space-x-3 mb-3">
                        <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-full p-2">
                            <Check className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 font-merriweather">
                            Fast Digital Delivery
                        </h3>
                    </div>
                    <p className="text-gray-700 font-poppins leading-relaxed px-8">
                        Receive your detailed love analysis report within 24-48 hours via email and WhatsApp.
                    </p>
                </div>

                </div>
            </div>
        </div>
    );
};

export default PromotionalCard; 