import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const sliderRef = useRef(null);

    const testimonials = [
        {
            name: "Neha",
            location: "Delhi",
            rating: 5,
            text: "This report gave me closure after a tough breakup.",
            avatar: "N"
        },
        {
            name: "Ishaan",
            location: "Pune",
            rating: 5,
            text: "She even predicted the month I met my current partner!",
            avatar: "I"
        },
        {
            name: "Ritika",
            location: "Jaipur",
            rating: 5,
            text: "Helped me decide whether to wait for him or move on.",
            avatar: "R"
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % testimonials.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, [testimonials.length]);

    // Touch/Swipe handlers
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setStartX(e.touches[0].clientX);
        setTranslateX(0);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;
        const currentX = e.touches[0].clientX;
        const diff = currentX - startX;
        setTranslateX(diff);
    };

    const handleTouchEnd = () => {
        if (!isDragging) return;
        setIsDragging(false);
        
        if (Math.abs(translateX) > 50) {
            if (translateX > 0 && currentSlide > 0) {
                setCurrentSlide(currentSlide - 1);
            } else if (translateX < 0 && currentSlide < testimonials.length - 1) {
                setCurrentSlide(currentSlide + 1);
            }
        }
        setTranslateX(0);
    };

    // Mouse drag handlers
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setStartX(e.clientX);
        setTranslateX(0);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const currentX = e.clientX;
        const diff = currentX - startX;
        setTranslateX(diff);
    };

    const handleMouseUp = () => {
        if (!isDragging) return;
        setIsDragging(false);
        
        if (Math.abs(translateX) > 50) {
            if (translateX > 0 && currentSlide > 0) {
                setCurrentSlide(currentSlide - 1);
            } else if (translateX < 0 && currentSlide < testimonials.length - 1) {
                setCurrentSlide(currentSlide + 1);
            }
        }
        setTranslateX(0);
    };

    return (
        <div className="py-4 mt-4">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">

                    {/* Testimonials Title */}
                    <div className="text-center mb-6">
                        <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 love-font-merriweather">
                            💬 What Our Clients Say
                        </h3>

                    </div>

                    <div className="max-w-4xl mx-auto">
                        {/* Slider Container */}
                        <div className="bg-white rounded-2xl shadow-xl p-8">
                            <div 
                                className="relative overflow-hidden cursor-grab active:cursor-grabbing"
                                ref={sliderRef}
                                onTouchStart={handleTouchStart}
                                onTouchMove={handleTouchMove}
                                onTouchEnd={handleTouchEnd}
                                onMouseDown={handleMouseDown}
                                onMouseMove={handleMouseMove}
                                onMouseUp={handleMouseUp}
                                onMouseLeave={handleMouseUp}
                            >
                                <div 
                                    className="flex transition-transform duration-700 ease-in-out"
                                    style={{ 
                                        transform: `translateX(calc(-${currentSlide * 100}% + ${translateX}px))`,
                                        userSelect: isDragging ? 'none' : 'auto'
                                    }}
                                >
                                    {testimonials.map((testimonial, index) => (
                                        <div key={index} className="w-full flex-shrink-0" style={{ minWidth: '100%' }}>
                                            <div className="text-center">
                                                {/* Quote Icon */}
                                                <div className="flex justify-center mb-6">
                                                    <Quote className="w-8 h-8 text-rose-400" />
                                                </div>

                                                {/* Rating Stars */}
                                                <div className="flex justify-center mb-6 space-x-1">
                                                    {[...Array(testimonial.rating)].map((_, i) => (
                                                        <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                                                    ))}
                                                </div>

                                                {/* Testimonial Text */}
                                                <p className="text-gray-700 font-poppins leading-relaxed mb-8 text-lg italic">
                                                    "{testimonial.text}"
                                                </p>

                                                {/* Avatar and Name */}
                                                <div className="flex items-center justify-center space-x-3">
                                                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center text-white font-semibold">
                                                        {testimonial.avatar}
                                                    </div>
                                                    <div className="text-left">
                                                        <div className="font-semibold text-gray-800 font-poppins">
                                                            {testimonial.name}
                                                        </div>
                                                        <div className="text-sm text-gray-600 font-poppins">
                                                            {testimonial.location}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Dots Indicator */}
                            <div className="flex justify-center mt-8 space-x-2">
                                {testimonials.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentSlide(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide
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
        </div>
    );
};

export default TestimonialsSection; 