import React from 'react';
import { Heart, Clock, Eye, Users, MessageCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CTAButton from './CTAButton';

const WhatYoullDiscoverSection = () => {
    const navigate = useNavigate();

    const handleCTAClick = () => {
        navigate('/cart-2', { state: { scrollToTop: true } });
    };
    const discoveries = [
        {
            icon: "❤",
            text: "Your Love & Relationship Horoscope"
        },
        {
            icon: "💔",
            text: "Breakup or Patch-Up Possibility"
        },
        {
            icon: "💍",
            text: "Timeline for Marriage & True Love"
        },
        {
            icon: "🧿",
            text: "Hidden blocks & remedies for love issues"
        },
        {
            icon: "🔗",
            text: "Compatibility insights with partner/ex"
        },
        {
            icon: "📜",
            text: "Answers to YOUR questions"
        }
    ];

    return (
        <div className="py-4">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">

                    {/* Main Title */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 love-font-merriweather">
                            🔍 What You'll Discover
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">

                        {/* Image Section */}
                            <div className="relative">
                                <img
                                    src="/astro-soul-3.webp"
                                    alt="Love Analysis and Discovery"
                                    className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-2xl border-2 border-gray-200"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                            </div>

                        {/* Content Section */}
                        <div className="order-1 lg:order-2">
                            <div className="space-y-6">
                                {discoveries.map((discovery, index) => (
                                    <div key={index} className="flex items-center space-x-4">
                                        <div className="flex-shrink-0 text-2xl">
                                            {discovery.icon}
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-lg font-medium text-gray-800 love-font-poppins">
                                                {discovery.text}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Button */}
                            <div className="mt-8">
                                <CTAButton
                                    text="👉 Get Answers About My Love Life"
                                    size="large"
                                    variant="primary"
                                    showArrow={false}
                                    onClick={handleCTAClick}
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhatYoullDiscoverSection; 