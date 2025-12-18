import React, { useState } from 'react';
import BackgroundVariations from './BackgroundVariations';

const BackgroundShowcase = () => {
  const [activeVariation, setActiveVariation] = useState(0);

  const variations = [
    {
      id: 0,
      name: "Minimal White",
      description: "Clean white theme with animated ink drops and elegant pen strokes",
      color: "bg-white text-black"
    },
    {
      id: 1,
      name: "Dark Mode",
      description: "Glooming handwriting trails with purple glow effects",
      color: "bg-gray-900 text-white"
    },
    {
      id: 2,
      name: "Sky Blue & Lavender",
      description: "Flowing gradient with animated geometric shapes",
      color: "bg-gradient-to-r from-sky-400 to-purple-600 text-white"
    },
    {
      id: 3,
      name: "Retro Parchment",
      description: "Vintage paper texture with digital overlays",
      color: "bg-amber-50 text-amber-900"
    },
    {
      id: 4,
      name: "Neumorphic Glass",
      description: "Modern glassy style with animated pen movement",
      color: "bg-gradient-to-r from-gray-100 to-purple-100 text-gray-800"
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <BackgroundVariations activeVariation={activeVariation} />
      
      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <div className="pt-20 pb-8 px-4">
          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-center mb-6">
            <span className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Signature
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-center max-w-3xl mx-auto opacity-80">
            Digital Signature Generator - Background Variations
          </p>
        </div>

        {/* Variation Selector */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="max-w-4xl w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {variations.map((variation) => (
                <button
                  key={variation.id}
                  onClick={() => setActiveVariation(variation.id)}
                  className={`relative group p-6 rounded-2xl border-2 transition-all duration-300 ${
                    activeVariation === variation.id
                      ? 'border-purple-500 bg-purple-500/10 shadow-lg'
                      : 'border-white/20 bg-white/5 hover:bg-white/10'
                  }`}
                >
                  {/* Background preview */}
                  <div className={`w-full h-24 rounded-lg mb-4 ${variation.color} flex items-center justify-center`}>
                    <span className="text-2xl font-bold">
                      {variation.name.split(' ')[0]}
                    </span>
                  </div>
                  
                  {/* Content */}
                  <div className="text-left">
                    <h3 className="font-bold text-lg mb-2">
                      {variation.name}
                    </h3>
                    <p className="text-sm opacity-70 leading-relaxed">
                      {variation.description}
                    </p>
                  </div>

                  {/* Active indicator */}
                  {activeVariation === variation.id && (
                    <div className="absolute top-2 right-2 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Current Variation Info */}
            <div className="text-center">
              <div className="inline-block bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold mb-2">
                  {variations[activeVariation].name}
                </h2>
                <p className="text-lg opacity-80 max-w-2xl">
                  {variations[activeVariation].description}
                </p>
                <div className="mt-4 flex justify-center space-x-2">
                  <span className="px-3 py-1 bg-purple-500/20 rounded-full text-sm">
                    Variation {activeVariation + 1} of 5
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center space-x-4 pb-8">
          <button
            onClick={() => setActiveVariation(Math.max(0, activeVariation - 1))}
            disabled={activeVariation === 0}
            className="px-6 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={() => setActiveVariation(Math.min(4, activeVariation + 1))}
            disabled={activeVariation === 4}
            className="px-6 py-2 bg-white/10 backdrop-blur-xl rounded-full border border-white/20 hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default BackgroundShowcase; 