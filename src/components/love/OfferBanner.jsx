import React from 'react';

const OfferBanner = () => {
  return (
    <>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(100vw);
            }
            100% {
              transform: translateX(-100%);
            }
          }
          .scroll-text {
            animation: scroll 45s linear infinite;
            white-space: nowrap;
            display: inline-block;
          }
        `}
      </style>
      <div className="bg-gradient-to-r from-pink-400 via-rose-400 to-pink-400 text-white py-3 overflow-hidden">
        <div className="scroll-text">
        <span className="inline-block mx-8">
          🌟 Special Offer: Get Your Love Report Now - 50% Off! 🌟
        </span>
        <span className="inline-block mx-8">
          💕 Divine Feminine Energy Reading - Limited Time! 💕
        </span>
        <span className="inline-block mx-8">
          ✨ Sacred Love Power Manifestation - Book Now! ✨
        </span>
        <span className="inline-block mx-8">
          🌸 Embrace Your Authentic Self - Special Pricing! 🌸
        </span>
        <span className="inline-block mx-8">
          🌟 Special Offer: Get Your Love Report Now - 50% Off! 🌟
        </span>
        <span className="inline-block mx-8">
          💕 Divine Feminine Energy Reading - Limited Time! 💕
        </span>
        <span className="inline-block mx-8">
          ✨ Sacred Love Power Manifestation - Book Now! ✨
        </span>
        <span className="inline-block mx-8">
          🌸 Embrace Your Authentic Self - Special Pricing! 🌸
        </span>
        <span className="inline-block mx-8">
          🌟 Special Offer: Get Your Love Report Now - 50% Off! 🌟
        </span>
        <span className="inline-block mx-8">
          💕 Divine Feminine Energy Reading - Limited Time! 💕
        </span>
        <span className="inline-block mx-8">
          ✨ Sacred Love Power Manifestation - Book Now! ✨
        </span>
        <span className="inline-block mx-8">
          🌸 Embrace Your Authentic Self - Special Pricing! 🌸
        </span>
              </div>
      </div>
    </>
  );
};

export default OfferBanner; 