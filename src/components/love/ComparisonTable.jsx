import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonTable = () => {
    const features = [
        "Love & Wealth Insights – Get clarity on emotional & financial future",
        "Personalized Love Report + Soulmate Sketch – Know who, where & when",
        "The Ultimate Astro Power Pack – Your zodiac, destiny & cosmic energy decoded",
        "Accurate Psychic Predictions – Based on real birth data & energy scan",
        "Private & Confidential Delivery (24-48 hrs)"
    ];

    return (
        <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-pink-100 py-4">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        {/* Header */}
                        <div className="bg-gradient-to-r from-rose-500 to-pink-500 p-6">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-6 text-left">
                                    <h3 className="text-lg font-semibold text-white">Features</h3>
                                </div>
                                <div className="col-span-3 text-center">
                                    <h3 className="text-sm font-semibold text-white leading-tight">AstraSoul<br />Digital</h3>
                                </div>
                                <div className="col-span-3 text-center">
                                    <h3 className="text-sm font-semibold text-white">Others</h3>
                                </div>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="divide-y divide-gray-200">
                            {features.map((feature, index) => (
                                <div key={index} className="grid grid-cols-12 gap-4 p-6">
                                    {/* Feature Text */}
                                    <div className="col-span-6 text-sm text-gray-800 leading-relaxed pr-4">
                                        {feature}
                                    </div>

                                    {/* AstraSoul Digital - Right */}
                                    <div className="col-span-3 flex items-center justify-center">
                                        <div className="bg-green-500 rounded-full p-2">
                                            <Check className="w-5 h-5 text-white" />
                                        </div>
                                    </div>

                                    {/* Others - Wrong */}
                                    <div className="col-span-3 flex items-center justify-center">
                                        <div className="bg-red-500 rounded-full p-2">
                                            <X className="w-5 h-5 text-white" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ComparisonTable; 