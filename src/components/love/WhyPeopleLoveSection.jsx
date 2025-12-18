import React, { useState, useEffect, useRef } from 'react';
import { Eye, Users, Star, Quote } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import CTAButton from './CTAButton';

const WhyPeopleLoveSection = () => {
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [translateX, setTranslateX] = useState(0);
    const sliderRef = useRef(null);

    const handleCTAClick = () => {
        navigate('/cart-2', { state: { scrollToTop: true } });
    };

    const testimonials = [
        {
            name: "Priya Sharma",
            location: "Mumbai, India",
            rating: 5,
            text: "AstraSoul Digital helped me find my soulmate! The love report was incredibly accurate and detailed. Within 3 months, I met the love of my life. Thank you!",
            avatar: "PS"
        },
        {
            name: "Rahul Patel",
            location: "Delhi, India",
            rating: 5,
            text: "I was skeptical at first, but the predictions were spot on! The wealth insights helped me make better financial decisions too. Highly recommended!",
            avatar: "RP"
        },
        {
            name: "Anjali Desai",
            location: "Bangalore, India",
            rating: 5,
            text: "The personalized love report was exactly what I needed. It gave me clarity about my relationship and helped me understand my partner better. Amazing service!",
            avatar: "AD"
        },
        {
            name: "Vikram Singh",
            location: "Pune, India",
            rating: 5,
            text: "Fast delivery and accurate predictions! The astro power pack revealed things about my personality I never knew. My love life has completely transformed.",
            avatar: "VS"
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
        <div className="py-4">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Main Title */}
                    <div className="text-center mb-6">
                        <h2 className="text-3xl md:text-4xl px-4 font-bold text-gray-800 mb-2 font-merriweather">
                        💖 Why People Love This Report
                        </h2>
                        <p className="text-lg text-gray-600 font-poppins">
                            Real testimonials from happy customers
                        </p>
                    </div>

                    {/* Testimonials Slider */}
                    <div className="max-w-4xl mx-auto mb-12">
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

                    {/* Social Proof Stats */}
                    <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Reports Delivered */}
                            <div className="text-center">
                                <div className="flex items-center justify-center mb-4">
                                    <Users className="w-8 h-8 text-rose-500" />
                                </div>
                                <div className="text-3xl font-bold text-gray-800 mb-2 font-merriweather">
                                    Over 8,000+
                                </div>
                                <div className="text-gray-600 font-poppins">
                                    Reports Delivered
                                </div>
                            </div>

                            {/* People Viewing */}
                            <div className="text-center">
                                <div className="flex items-center justify-center mb-4">
                                    <Eye className="w-8 h-8 text-pink-500" />
                                </div>
                                <div className="text-3xl font-bold text-gray-800 mb-2 font-merriweather">
                                    55 people
                                </div>
                                <div className="text-gray-600 font-poppins">
                                    are viewing this product now
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="text-center">
                        <CTAButton 
                            text="Get Your Report Today"
                            size="large"
                            variant="primary"
                            showArrow={true}
                            fullWidth={true}
                            onClick={handleCTAClick}
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WhyPeopleLoveSection; 