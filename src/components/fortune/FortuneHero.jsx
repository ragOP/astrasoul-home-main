import React from 'react';
import { Sparkles, Gem, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import FortuneCTAButton from './FortuneCTAButton';

const FortuneHero = () => {
  return (
    <section className="pt-32 lg:pt-40 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-indigo-800 mb-6 leading-tight">
            Is Money Slipping Through Your{' '}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Stars?
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-indigo-600 max-w-4xl mx-auto mb-12 leading-relaxed">
            Your personalized{' '}
            <span className="font-semibold text-purple-600">Wealth Report</span>{' '}
            reveals the untapped potential written in your Kundli. Get clear timelines,
            career + finance predictions, lucky periods, and actionable remedies—delivered fast.
          </p>

          {/* Fortune Report Book Image */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <img
                src="/fortune-report-book.webp"
                alt="Fortune Report Book"
                className="w-64 h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-3xl blur-xl opacity-60"></div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mb-16 max-w-2xl mx-auto">
            <FortuneCTAButton
              to="/fortune-cart"
              className="text-xl"
            >
              🪙 Unlock My Fortune Report Now
            </FortuneCTAButton>

            {/* Price Display */}
            <div className="mt-4 text-center">
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
                <span className="text-2xl font-bold text-white">₹399</span>
                <span className="text-lg text-white/70 line-through">₹2000</span>
                <span className="text-sm text-green-300 font-medium bg-green-500/20 px-2 py-1 rounded-full">
                  Save ₹1601
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FortuneHero; 