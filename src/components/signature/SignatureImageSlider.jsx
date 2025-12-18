import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SignatureImageSlider = ({ 
    images = [], 
    showArrows = true, 
    showDots = true,
    autoAdvance = true,
    interval = 4000
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentX, setCurrentX] = useState(0);
    const sliderRef = useRef(null);

    // Auto-advance slider
    useEffect(() => {
        if (images.length <= 1 || isDragging || !autoAdvance) return;
        
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, interval);

        return () => clearInterval(intervalId);
    }, [images.length, isDragging, autoAdvance, interval]);

    // Touch/Mouse event handlers
    const handleStart = (e) => {
        setIsDragging(true);
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        setStartX(clientX);
        setCurrentX(clientX);
    };

    const handleMove = (e) => {
        if (!isDragging) return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        setCurrentX(clientX);
    };

    const handleEnd = () => {
        if (!isDragging) return;
        
        const diff = startX - currentX;
        const threshold = 50;
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                setCurrentIndex((prevIndex) => 
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            } else {
                setCurrentIndex((prevIndex) => 
                    prevIndex === 0 ? images.length - 1 : prevIndex - 1
                );
            }
        }
        
        setIsDragging(false);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    if (images.length === 0) {
        return (
            <div className="w-full h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center">
                <div className="text-gray-500 text-lg">No images available</div>
            </div>
        );
    }

    return (
        <div className="w-full max-w-4xl mx-auto">
            <div className="relative">
                {/* Main Image Container */}
                <div 
                    ref={sliderRef}
                    className="relative overflow-hidden rounded-xl shadow-2xl cursor-grab active:cursor-grabbing border border-gray-200"
                    onMouseDown={handleStart}
                    onMouseMove={handleMove}
                    onMouseUp={handleEnd}
                    onMouseLeave={handleEnd}
                    onTouchStart={handleStart}
                    onTouchMove={handleMove}
                    onTouchEnd={handleEnd}
                >
                    <div 
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((image, index) => (
                            <div key={index} className="w-full flex-shrink-0">
                                <div className="relative">
                                    <img
                                        src={image.src}
                                        alt={image.alt || `Slide ${index + 1}`}
                                        className="w-full object-cover"
                                    />
                                    
                                    {/* Custom Overlay Content */}
                                    {image.overlay && (
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            {image.overlay}
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Floating decorative elements */}
                    <div className="absolute -top-2 -left-2 w-4 h-4 bg-gray-400/30 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gray-400/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && showArrows && (
                    <>
                        <button
                            onClick={goToPrevious}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-200"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>

                        <button
                            onClick={goToNext}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-gray-200"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </>
                )}
            </div>

            {/* Dots Indicator - Below Images */}
            {images.length > 1 && showDots && (
                <div className="flex justify-center space-x-2 mt-6">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex 
                                    ? 'bg-blue-600' 
                                    : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default SignatureImageSlider; 