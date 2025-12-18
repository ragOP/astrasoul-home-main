import React from 'react';
import { Heart } from 'lucide-react';

const WhyReportMattersSection = () => {
    return (
        <div className="py-4 mt-4">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 love-font-merriweather">
                            💔 WHY THIS REPORT MATTERS
                        </h2>
                        <div className="bg-white rounded-2xl p-8 shadow-xl border border-rose-100 mb-8">
                            <div className="flex items-center justify-center mb-4">
                                <Heart className="w-8 h-8 text-rose-500" />
                            </div>
                            <p className="text-xl md:text-2xl font-medium text-gray-700 love-font-poppins leading-relaxed italic">
                                "Breakups, misunderstandings, family pressure to get married, or being stuck in a one-sided love — these aren't small issues. They're emotional wounds that astrology can help heal."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyReportMattersSection; 