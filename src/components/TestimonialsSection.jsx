import React, { useState, useEffect, useRef } from 'react';
import PrimaryButton from './PrimaryButton';
import { PhoneCall } from 'lucide-react';

// Data configuration for testimonials
const TESTIMONIALS_DATA = [
  {
    name: 'Aanya M., New Delhi',
    quote: 'Honestly, this session gave me clarity I’ve been needing for years. She explained my chart in such a calm, personal way. Loved the experience.',
    rating: 5
  },
  {
    name: 'Pratik G., Hyderabad',
    quote: 'Didn’t expect much, but was honestly surprised. Got clear answers about my career path and some patterns I didn’t even notice before. Totally worth it.',
    rating: 4
  },
  {
    name: 'Ritika S., Mumbai',
    quote: 'Pichle 2 saal se love life mein bas problems hi problems thi. Har baar galat insaan. Ye session ne mujhe samjhaya ki problem mere stars mein thi, mujh mein nahi. Bohot relief mila yeh jaanke.',
    rating: 5
  },
  {
    name: 'Varun T., Chandigarh',
    quote: 'Bhai honestly, main soch raha tha timepass hoga… par call ke 10 minute baad hi laga yeh toh sach bol rahe hain. Numerology mein mera naam tak decode kar diya. Maza aa gaya.',
    rating: 4
  },
  {
    name: 'Simran K., Jaipur',
    quote: 'Mujhe laga yeh bhi ek generic astrology call hoga… but unhone mere questions itne calmly liye. Even meri shaadi ke leke jo confusion tha, woh clear kiya with proper timelines. Thank you so much.',
    rating: 5
  }
];

// Social proof data
const SOCIAL_PROOF_DATA = [
  '500+ satisfied clients across India',
  '98% accuracy rate in predictions',
  'Average rating of 4.9/5 stars'
];

// Reusable UI components
const TestimonialCard = ({ name, quote, rating }) => (
  <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-amber-400/30 transition-all duration-300 hover:bg-white/10">
    <div className="space-y-6">
      {/* Quote */}
      <blockquote className="text-white/90 text-base sm:text-lg leading-relaxed italic font-medium">
        "{quote}"
      </blockquote>

      {/* Name and Rating */}
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-white font-bold text-lg">{name}</h4>
          <div className="flex space-x-1 mt-1">
            {[...Array(rating)].map((_, i) => (
              <span key={i} className="text-amber-400 text-lg">⭐</span>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Line */}
      <div className="flex items-center space-x-2">
        <div className="flex-1 h-0.5 bg-gradient-to-r from-amber-400 via-purple-400 to-orange-400 rounded-full" />
        <div className="w-2 h-2 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-pulse" />
      </div>
    </div>
  </div>
);

const SocialProofItem = ({ text }) => (
  <div className="flex items-center justify-center space-x-3">
    <span className="text-amber-400 text-lg sm:text-xl">⭐</span>
    <p className="text-white/90 text-base sm:text-lg font-medium">{text}</p>
  </div>
);

function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const carouselRef = useRef(null);

  // Auto carousel for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS_DATA.length);
      }
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [isDragging]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS_DATA.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
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
          nextSlide();
        } else {
          // Swiped right - previous slide
          prevSlide();
        }
      }
      
      setIsDragging(false);
      setStartX(0);
      setCurrentX(0);
    }
  };

  return (
    <section className="py-6 sm:py-16 bg-gradient-to-b from-black via-slate-900/50 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center mb-6 sm:mb-12">
            <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-4 sm:mb-6">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-white/70 text-sm sm:text-base font-medium">Client Success Stories</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="block text-white">Why People Love This</span>
            </h2>

            <p className="text-lg sm:text-xl text-white/80 font-medium max-w-3xl mx-auto">
              Real stories from real people who transformed their lives
            </p>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative mb-8">
            {/* Desktop Layout - 2 cards side by side */}
            <div className="hidden md:grid md:grid-cols-2 md:gap-8 md:mb-12">
              {TESTIMONIALS_DATA.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>

            {/* Mobile Layout - Carousel */}
            <div className="md:hidden relative">
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
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {TESTIMONIALS_DATA.map((testimonial, index) => (
                    <div key={index} className="w-full flex-shrink-0">
                      <TestimonialCard {...testimonial} />
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {TESTIMONIALS_DATA.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-gradient-to-r from-amber-400 to-orange-400 w-6' 
                        : 'bg-amber-400/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* <PrimaryButton
            text="Book Your Call"
            icon={
              <PhoneCall className='h-5 w-5' />
            }
            className='mb-6'
          /> */}

          {/* Social Proof */}
          <div className="space-y-3 sm:space-y-6 max-w-4xl mx-auto">
            {SOCIAL_PROOF_DATA.map((item, index) => (
              <SocialProofItem key={index} text={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection; 