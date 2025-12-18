import React, { useState, useEffect } from 'react';
import Lottie from 'lottie-react';
import landerSignature from './assets/lander-signature.json';

const BrandSignatureOverlay = ({ onAnimationComplete }) => {
  const [showOverlay, setShowOverlay] = useState(true);

  useEffect(() => {
    // Wait for Lottie animation to complete (175 frames at 25fps = ~7 seconds)
    const timer = setTimeout(() => {
      setShowOverlay(false);
      onAnimationComplete();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onAnimationComplete]);

  if (!showOverlay) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50"></div>
        
        {/* Light Black Writing Gradient */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/5 via-transparent to-black/3"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/3 via-transparent to-black/5"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/2 via-transparent to-black/4"></div>
        </div>
        
        {/* Signature Lines Background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {/* Left side signature lines */}
            <path
              d="M10,20 Q15,25 20,20 T30,25 Q35,30 40,25 T50,30 Q55,35 60,30 T70,35 Q75,40 80,35 T90,40"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.3"
            />
            <path
              d="M5,40 Q10,45 15,40 T25,45 Q30,50 35,45 T45,50 Q50,55 55,50 T65,55 Q70,60 75,55 T85,60"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.2"
            />
            <path
              d="M8,60 Q13,65 18,60 T28,65 Q33,70 38,65 T48,70 Q53,75 58,70 T68,75 Q73,80 78,75 T88,80"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.25"
            />
            <path
              d="M12,30 Q17,35 22,30 T32,35 Q37,40 42,35 T52,40 Q57,45 62,40 T72,45 Q77,50 82,45 T92,50"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.2"
            />
            <path
              d="M6,50 Q11,55 16,50 T26,55 Q31,60 36,55 T46,60 Q51,65 56,60 T66,65 Q71,70 76,65 T86,70"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.15"
            />
            <path
              d="M15,25 Q20,30 25,25 T35,30 Q40,35 45,30 T55,35"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.1"
            />
            <path
              d="M5,85 Q10,90 15,85 T25,90 Q30,95 35,90"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.1"
            />
            
            {/* Right side signature lines (mirrored) */}
            <path
              d="M90,20 Q85,25 80,20 T70,25 Q65,30 60,25 T50,30 Q45,35 40,30 T30,35 Q25,40 20,35 T10,40"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.3"
            />
            <path
              d="M95,40 Q90,45 85,40 T75,45 Q70,50 65,45 T55,50 Q50,55 45,50 T35,55 Q30,60 25,55 T15,60"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.2"
            />
            <path
              d="M92,60 Q87,65 82,60 T72,65 Q67,70 62,65 T52,70 Q47,75 42,70 T32,75 Q27,80 22,75 T12,80"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.25"
            />
            <path
              d="M88,30 Q83,35 78,30 T68,35 Q63,40 58,35 T48,40 Q43,45 38,40 T28,45 Q23,50 18,45 T8,50"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.2"
            />
            <path
              d="M94,50 Q89,55 84,50 T74,55 Q69,60 64,55 T54,60 Q49,65 44,60 T34,65 Q29,70 24,65 T14,70"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.15"
            />
            <path
              d="M85,25 Q80,30 75,25 T65,30 Q60,35 55,30 T45,35"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.1"
            />
            <path
              d="M95,85 Q90,90 85,85 T75,90 Q70,95 65,90"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.1"
            />
            
            {/* Additional center lines for balance */}
            <path
              d="M45,15 Q50,20 55,15 T65,20 Q70,25 75,20 T85,25"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.1"
            />
            <path
              d="M65,75 Q70,80 75,75 T85,80 Q90,85 95,80"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.1"
            />
            
            {/* Extra right side lines for better balance */}
            <path
              d="M80,15 Q75,20 70,15 T60,20 Q55,25 50,20 T40,25"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.15"
            />
            <path
              d="M85,35 Q80,40 75,35 T65,40 Q60,45 55,40 T45,45"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.12"
            />
            <path
              d="M90,45 Q85,50 80,45 T70,50 Q65,55 60,50 T50,55"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.1"
            />
            <path
              d="M75,65 Q70,70 65,65 T55,70 Q50,75 45,70 T35,75"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.08"
            />
            
            {/* Additional right top lines */}
            <path
              d="M95,10 Q90,15 85,10 T75,15 Q70,20 65,15 T55,20"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.2"
            />
            <path
              d="M88,5 Q83,10 78,5 T68,10 Q63,15 58,10 T48,15"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.15"
            />
            <path
              d="M92,25 Q87,30 82,25 T72,30 Q67,35 62,30 T52,35"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.18"
            />
            <path
              d="M85,8 Q80,13 75,8 T65,13 Q60,18 55,13 T45,18"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.12"
            />
            <path
              d="M90,18 Q85,23 80,18 T70,23 Q65,28 60,23 T50,28"
              stroke="#000"
              strokeWidth="0.5"
              fill="none"
              opacity="0.16"
            />
          </svg>
        </div>
        
        {/* Animated Signature Strokes */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-gray-300 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 border border-gray-300 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-gray-300 rounded-full animate-pulse delay-2000"></div>
        </div>

        {/* Floating Signature Elements */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gray-400/20 rounded-full animate-bounce"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>

        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-3">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
        {/* Astro Soul Text */}
        <div className="mb-8 text-center">
          <h1 className="font-signature text-6xl sm:text-5xl lg:text-6xl text-gray-800 font-semibold leading-none">
            Astro Soul
          </h1>
        </div>

        {/* Lottie Animation with Padding */}
        <Lottie 
          animationData={landerSignature} 
          loop={false}
          autoplay={true}
          style={{ width: 300, height: 300 }}
        />

        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default BrandSignatureOverlay; 