import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Camera, Image, Mic, Plus, Check, PhoneCall, ShoppingCart } from 'lucide-react';
import PrimaryButton from './PrimaryButton';

const PastWorkProofSection = () => {
  const [currentChatIndex, setCurrentChatIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const carouselRef = useRef(null);

  const chatTestimonials = [
    {
      id: 1,
      image: '/past-proof-1.png'
    },
    {
      id: 2,
      image: '/past-proof-2.png'
    },
    {
      id: 3,
      image: '/past-proof-3.png'
    }
    ,
    {
      id: 4,
      image: '/past-proof-4.png'
    },
    {
      id: 5,
      image: '/past-proof-5.png'
    }
  ];

  // Auto scroll for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentChatIndex((prevIndex) => (prevIndex + 1) % chatTestimonials.length);
      }
    }, 6000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [chatTestimonials.length, isDragging]);

  const nextChat = () => {
    setCurrentChatIndex((prevIndex) => (prevIndex + 1) % chatTestimonials.length);
  };

  const prevChat = () => {
    setCurrentChatIndex((prevIndex) => (prevIndex - 1 + chatTestimonials.length) % chatTestimonials.length);
  };

  // Touch/Swipe handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (isDragging) {
      setCurrentX(e.touches[0].clientX);
    }
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      const diff = startX - currentX;
      const threshold = 50; // Minimum swipe distance

      if (Math.abs(diff) > threshold) {
        if (diff > 0) {
          // Swiped left - next slide
          nextChat();
        } else {
          // Swiped right - previous slide
          prevChat();
        }
      }

      setIsDragging(false);
      setStartX(0);
      setCurrentX(0);
    }
  };

  return (
    <section className="py-8 px-2 sm:py-20 bg-gradient-to-br from-white/5 via-pink-50/10 to-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left Column - Past Work / Proof */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-6">
                Past Work / Proof
              </h2>
              <p className="text-white/90 text-lg sm:text-xl leading-relaxed">
                Imagine seeing the detailed features of the person you're destined for. Our previous sketches have amazed thousands with their accuracy, beauty, and personal resonance.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"></div>
                <p className="text-white/80 text-base sm:text-lg font-medium">
                  Hand-drawn art, unique to you.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-gradient-to-r from-red-400 to-pink-400 rounded-full"></div>
                <p className="text-white/80 text-base sm:text-lg font-medium">
                  Rooted in astrology and psychic intuition.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Mobile Chat Interface */}
          <div className="relative">
            {/* Desktop Layout - Show all chats */}
            <div className="hidden lg:grid lg:grid-cols-3 lg:gap-4">
              {chatTestimonials.map((chat) => (
                <MobileChatInterface key={chat.id} chat={chat} />
              ))}
            </div>

            {/* Mobile Layout - Carousel */}
            <div className="lg:hidden relative">
              <div
                className="overflow-hidden"
                ref={carouselRef}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{ touchAction: 'pan-y' }}
              >
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentChatIndex * 100}%)` }}
                >
                  {chatTestimonials.map((chat) => (
                    <div key={chat.id} className="w-full flex-shrink-0">
                      <div className="">
                        <MobileChatInterface chat={chat} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Navigation Arrows */}
              {/* <button
                onClick={prevChat}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full border border-red-400/30 flex items-center justify-center text-red-400 hover:scale-110 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextChat}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full border border-red-400/30 flex items-center justify-center text-red-400 hover:scale-110 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button> */}

              {/* Mobile Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {chatTestimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentChatIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentChatIndex
                        ? 'bg-gradient-to-r from-red-400 to-pink-400 w-6'
                        : 'bg-red-400/30'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center mt-6 lg:mt-6 sm:mt-20">
          <div className="max-w-md mx-auto">
            <PrimaryButton
              text="Buy Now"
              icon={<ShoppingCart className="w-5 h-5" />}
              className="mb-4"
            />
          </div>

          {/* Disclaimer */}
          <p className="text-sm sm:text-base text-red-400/80 font-medium">
            Only a few spots left! Hurry before the special offer ends.
          </p>
        </div>
      </div>
    </section>
  );
};

const MobileChatInterface = ({ chat }) => {

  return (
    <div className="bg-white rounded-2xl p-4 border border-red-400/20 shadow-xl w-full mx-auto">
      {/* Past Work Image */}
      <img
        src={chat.image}
        alt={`Past work sketch ${chat.id}`}
        className="w-full object-cover rounded-xl"
        onLoad={() => console.log('Image loaded successfully:', chat.image)}
        onError={(e) => {
          console.log('Image failed to load:', chat.image);
          e.target.style.display = 'none';
        }}
      />
    </div>
  );
};

export default PastWorkProofSection; 