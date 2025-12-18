import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, MessageCircle } from 'lucide-react';

const SignatureTestimonialsSlider = ({ testimonials }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [animateElements, setAnimateElements] = useState(false);
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            setAnimateElements(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [testimonials.length]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };





    const handleTouchStart = (e) => {
        setTouchStart(e.targetTouches[0].clientX);
    };

    const handleTouchMove = (e) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) {
            nextSlide();
        }
        if (isRightSwipe) {
            prevSlide();
        }

        setTouchStart(null);
        setTouchEnd(null);
    };

    return (
        <div className={`relative transition-all duration-1000 delay-300 transform ${
            animateElements ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}>
            {/* Main Slider */}
            <div className="relative overflow-hidden rounded-2xl"
                 onTouchStart={handleTouchStart}
                 onTouchMove={handleTouchMove}
                 onTouchEnd={handleTouchEnd}>
                <div className="flex transition-transform duration-500 ease-in-out"
                     style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 mx-2 md:mx-4">
                                <div className="flex flex-col space-y-4">
                                    {/* Rating */}
                                    <div className="flex items-center space-x-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />
                                        ))}
                                    </div>
                                    
                                    {/* Quote */}
                                    <div className="flex items-start space-x-3">
                                        <MessageCircle className="w-5 h-5 md:w-6 md:h-6 text-blue-600 mt-1 flex-shrink-0" />
                                        <p className="text-gray-700 text-base md:text-lg leading-relaxed font-primary">
                                            "{testimonial.text}"
                                        </p>
                                    </div>
                                    
                                    {/* Author */}
                                    <div className="flex items-center space-x-3 pt-2">
                                        <img 
                                            src={testimonial.image} 
                                            alt={testimonial.author}
                                            className="w-8 h-8 rounded-full object-cover border border-gray-200"
                                        />
                                        <div>
                                            <p className="font-semibold text-gray-800 text-base md:text-lg">
                                                {testimonial.author}
                                            </p>
                                            <p className="text-gray-600 text-xs md:text-sm">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            {/* Dots Indicator */}
            {/* <div className="flex justify-center space-x-2 mt-6">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentIndex 
                                ? 'bg-blue-600' 
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                    />
                ))}
            </div> */}
        </div>
    );
};

export default SignatureTestimonialsSlider; 