import React, { useState, useEffect, useRef } from 'react';

const ImageSlider = ({ 
    images = [], 
    showArrows = false, 
    showCount = false,
    showDots = true 
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [currentX, setCurrentX] = useState(0);
    const sliderRef = useRef(null);

    // Auto-advance slider
    useEffect(() => {
        if (images.length <= 1 || isDragging) return;
        
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [images.length, isDragging]);

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
        const threshold = 50; // Minimum swipe distance
        
        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swipe left - next slide
                setCurrentIndex((prevIndex) => 
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            } else {
                // Swipe right - previous slide
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
            <div className="w-full h-72 md:h-80 lg:h-96 bg-gradient-to-br from-rose-100 to-pink-100 rounded-xl flex items-center justify-center">
                <div className="text-gray-500 text-lg">No images available</div>
            </div>
        );
    }

    return (
        <div className="relative w-full max-w-4xl mx-auto">
            {/* Main Image Container */}
            <div 
                ref={sliderRef}
                className="relative overflow-hidden rounded-xl shadow-2xl cursor-grab active:cursor-grabbing"
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
                            <img
                                src={image.src}
                                alt={image.alt || `Slide ${index + 1}`}
                                className="w-full h-72 md:h-80 lg:h-96 object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Floating elements around image */}
                <div className="absolute -top-2 -left-2 w-4 h-4 bg-rose-400/30 rounded-full animate-ping"></div>
                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-pink-400/30 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-1/2 -left-1 w-2 h-2 bg-amber-400/30 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Navigation Arrows */}
            {images.length > 1 && showArrows && (
                <>
                    {/* Previous Button */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                        aria-label="Previous image"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    {/* Next Button */}
                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                        aria-label="Next image"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </>
            )}

            {/* Dots Indicator */}
            {images.length > 1 && showDots && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                index === currentIndex 
                                    ? 'bg-white shadow-lg scale-125' 
                                    : 'bg-white/50 hover:bg-white/80'
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Slide Counter */}
            {images.length > 1 && showCount && (
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                    {currentIndex + 1} / {images.length}
                </div>
            )}
        </div>
    );
};

export default ImageSlider; 