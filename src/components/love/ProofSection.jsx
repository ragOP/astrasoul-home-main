import React, { useState, useEffect } from 'react';

const ProofSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const proofImages = [
        {
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
            title: "100,000+ Happy Clients",
            description: "Join thousands who found their perfect love match"
        },
        {
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
            title: "4.8/5 Star Rating",
            description: "Consistently rated excellent by our clients"
        },
        {
            image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
            title: "24-Hour Delivery",
            description: "Get your personalized report within 24 hours"
        },
        {
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
            title: "100% Confidential",
            description: "Your privacy and data are completely secure"
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % proofImages.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [proofImages.length]);

    return (
        <div className="py-4">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2 font-merriweather">
                        Proof That Works
                    </h2>
                    <p className="text-lg text-gray-600 font-poppins">
                        Real results from real people
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Slider Container */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                        <div className="flex transition-transform duration-700 ease-in-out" 
                             style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            {proofImages.map((item, index) => (
                                <div key={index} className="w-full flex-shrink-0">
                                    <div className="relative">
                                        {/* Image */}
                                        <div className="w-full h-80 md:h-96 relative overflow-hidden">
                                            <img 
                                                src={item.image} 
                                                alt={item.title}
                                                className="w-full h-full object-cover"
                                            />
                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                        </div>

                                        {/* Content Overlay */}
                                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                            <h3 className="text-2xl md:text-3xl font-bold mb-2 font-merriweather">
                                                {item.title}
                                            </h3>
                                            <p className="text-lg font-poppins opacity-90">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Dots Indicator */}
                        <div className="flex justify-center py-4 space-x-2">
                            {proofImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                        index === currentSlide 
                                            ? 'bg-rose-500 scale-125' 
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProofSection; 