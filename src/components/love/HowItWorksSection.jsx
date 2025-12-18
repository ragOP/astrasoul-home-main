import React from 'react';
import { ShoppingCart, User, FileText, MessageCircle, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CTAButton from './CTAButton';

const HowItWorksSection = () => {
    const navigate = useNavigate();

    const handleCTAClick = () => {
        navigate('/cart-2', { state: { scrollToTop: true } });
    };
    const steps = [
        {
            number: "1",
            icon: <ShoppingCart className="w-8 h-8 text-rose-500" />,
            title: "Place your order and fill a quick form",
            description: "Simple and secure ordering process"
        },
        {
            number: "2",
            icon: <User className="w-8 h-8 text-pink-500" />,
            title: "Our expert astrologers study your birth chart + numerology",
            description: "Personalized analysis by professionals"
        },
        {
            number: "3",
            icon: <FileText className="w-8 h-8 text-purple-500" />,
            title: "You get a detailed PDF report with all insights",
            description: "Comprehensive love analysis report"
        },
        {
            number: "4",
            icon: <MessageCircle className="w-8 h-8 text-blue-500" />,
            title: "Delivered via WhatsApp + Email in 48–72 hrs",
            description: "Fast and convenient delivery"
        }
    ];

    return (
        <div className="py-4">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">

                    {/* Main Title */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 love-font-merriweather">
                            ✨ How It Works
                        </h2>
                    </div>

                    {/* Steps Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6 px-4">
                        {steps.map((step, index) => (
                            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100 relative">
                                {/* Step Number */}
                                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                                    {step.number}
                                </div>

                                {/* Icon */}
                                <div className="flex justify-center mb-2 mt-2">
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <div className="text-center">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-2 love-font-poppins">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 love-font-poppins">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Cursive Text After Steps */}
                    <div className="text-center mb-6">
                        <p className="text-2xl md:text-3xl text-purple-600 love-font-dancing font-bold max-w-2xl mx-auto">
                            No bots. No copy-paste. Just real guidance for real love struggles.
                        </p>
                    </div>

                    {/* CTA Section */}
                    <div className="text-center">
                        <CTAButton
                            text="👉 Book Now – Limited Slots Available"
                            size="large"
                            variant="primary"
                            showArrow={false}
                            onClick={handleCTAClick}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HowItWorksSection; 