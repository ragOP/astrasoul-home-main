import React from 'react';
import { Users, Star, Clock, Shield } from 'lucide-react';

const StatsSection = () => {
    const stats = [
        {
            icon: <Users className="w-8 h-8 text-rose-500" />,
            number: "100,000+",
            description: "Happy Clients"
        },
        {
            icon: <Star className="w-8 h-8 text-rose-500" fill="currentColor" />,
            number: "4.8/5",
            description: "Average Rating"
        },
        {
            icon: <Clock className="w-8 h-8 text-rose-500" />,
            number: "24 Hours",
            description: "Delivered Privately"
        },
        {
            icon: <Shield className="w-8 h-8 text-rose-500" />,
            number: "100%",
            description: "Safe & Confidential"
        }
    ];

    return (
        <div className="bg-gradient-to-br from-rose-50 via-pink-50 to-pink-100 py-4">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="flex justify-center mb-4">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2 font-merriweather">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 font-poppins">
                                    {stat.description}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsSection; 