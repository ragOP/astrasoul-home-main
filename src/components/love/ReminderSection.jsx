import React from 'react';
import { Clock, Star, Target, Flame, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CTAButton from './CTAButton';

const ReminderSection = () => {
    const navigate = useNavigate();

    const handleCTAClick = () => {
        navigate('/cart-2', { state: { scrollToTop: true } });
    };
    const reminderItems = [
        {
            icon: <Clock className="w-6 h-6 text-blue-500" />,
            text: "📦 Delivered in 48–72 hrs"
        },
        {
            icon: <Star className="w-6 h-6 text-purple-500" />,
            text: "🪬 Vedic + Numerology based analysis"
        },
        {
            icon: <Target className="w-6 h-6 text-green-500" />,
            text: "🎯 100% personalized (no copy-paste)"
        },
        {
            icon: <Flame className="w-6 h-6 text-red-500" />,
            text: "🔥 Only ₹499 (was ₹999)"
        },
        {
            icon: <MessageCircle className="w-6 h-6 text-pink-500" />,
            text: "📱 Get it on WhatsApp + Email"
        }
    ];

    return (
        <div className="py-4">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">

                    {/* Main Title */}
                    <div className="text-center mb-6">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 font-merriweather">
                            💫 Limited Time Offer
                        </h2>
                        <p className="text-lg text-gray-600 font-poppins">
                            Don't miss out on discovering your love destiny
                        </p>
                    </div>

                    {/* Reminder Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                        {reminderItems.map((item, index) => (
                            <div key={index} className="flex items-center space-x-3 p-4 bg-white rounded-xl border border-rose-200">
                                <div className="flex-shrink-0">
                                    {item.icon}
                                </div>
                                <span className="text-gray-700 font-poppins font-medium">
                                    {item.text}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Final CTA */}
                    <div className="text-center">
                        <CTAButton
                            text="👉 Book Your Love Report Now"
                            variant="primary"
                            // showArrow={true}
                            fullWidth={true}
                            onClick={handleCTAClick}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReminderSection; 