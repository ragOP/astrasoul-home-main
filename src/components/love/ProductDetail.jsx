import React from 'react';
import { ArrowUp, Heart, MessageCircle, Star, Mail, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CTAButton from './CTAButton';

const ProductDetail = () => {
    const navigate = useNavigate();

    const handleCTAClick = () => {
        navigate('/cart-2', { state: { scrollToTop: true } });
    };
    return (
        <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-pink-100">
            <div className="container mx-auto px-4 py-2 bg-gradient-to-br from-rose-50 via-pink-50 to-pink-100">

                <div className="bg-gradient-to-r from-rose-400 to-pink-400 rounded-2xl overflow-hidden">

                    <img
                        src="/astro-item-1.png"
                        alt="Couple with Love Analysis Report"
                        className="w-full object-cover"
                    />

                    <div className="text-left p-8 pb-4 pl-4">
                        <h2 className="text-3xl md:text-4xl font-bold text-rose-100 love-font-cinzel">
                            💖 What Is This?
                        </h2>
                    </div>

                    <div className="px-4 pb-6 space-y-4">
                        <p className="text-rose-50 text-lg love-font-poppins leading-relaxed">
                            A personalized astrology + numerology report that uncovers the truth about your love life, compatibility, breakup possibilities & marriage timeline — all based on your birth chart.
                        </p>
                        
                        <div className="space-y-3">
                            <div className="flex items-center space-x-3">
                                <Mail className="w-6 h-6 text-white flex-shrink-0" />
                                <span className="text-lg md:text-xl font-medium love-font-inter text-white">
                                    Delivered in 48–72 hours via Email + WhatsApp
                                </span>
                            </div>
                            
                            <div className="flex items-center space-x-3">
                                <Sparkles className="w-6 h-6 text-white flex-shrink-0" />
                                <span className="text-lg md:text-xl font-medium love-font-inter text-white">
                                    Crafted by world-renowned astrologers at AstraSoul Digital
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="px-4 pb-4">
                        <CTAButton 
                            text="👉 Get My Love Report – ₹499 Only"
                            size="large"
                            variant="primary"
                            showArrow={false}
                            fullWidth={true}
                            onClick={handleCTAClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail; 