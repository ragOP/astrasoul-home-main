import { useEffect, useState } from 'react';
import PrimaryButton from './PrimaryButton';
import { ShoppingCart } from 'lucide-react';

function StickyFooter() {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const newTime = prev.minutes > 0
          ? { ...prev, minutes: prev.minutes - 1 }
          : prev.hours > 0
            ? { hours: prev.hours - 1, minutes: 59 }
            : { hours: 0, minutes: 0 };

        return newTime;
      });
    }, 60000); // Update every minute instead of every second

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gradient-to-r from-red-900/95 via-pink-900/90 to-purple-900/95 backdrop-blur-xl shadow-2xl border-t border-red-400/30">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 py-2 sm:py-3">
        {/* Mobile Layout - Horizontal */}
        <div className="block sm:hidden">
          <div className="flex items-center justify-between space-x-2">
            {/* Left Side - Timer and Pricing */}
            <div className="flex items-center space-x-2 min-w-0 flex-1">
              <div className="flex flex-col items-start space-y-0.5">
                <span className="text-red-300 font-semibold text-xs">Offer</span>
                <span className="text-red-300 font-semibold text-xs">Ends:</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-1.5 py-0.5 flex items-center space-x-1 border border-red-400/20">
                <div className="text-center">
                  <div className="text-white font-bold text-xs">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-red-300 text-xs uppercase">Hr</div>
                </div>
                <div className="text-red-300 text-xs">:</div>
                <div className="text-center">
                  <div className="text-white font-bold text-xs">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-red-300 text-xs uppercase">Min</div>
                </div>
              </div>

              {/* Pricing */}
              <div className="flex items-center space-x-1 ml-2">
                <span className="text-red-300/60 line-through text-xs">₹9999</span>
                <span className="text-white font-bold text-base">₹1499</span>
              </div>
            </div>

            {/* Right Side - CTA Button */}
            <div className="w-28 flex-shrink-0">
              <PrimaryButton text="Buy Now" className='whitespace-nowrap  px-14.5'
              // icon={<ShoppingCart className="w-5 h-5" />}
              />
            </div>
          </div>
        </div>

        {/* Desktop Layout - Horizontal */}
        <div className="hidden sm:flex items-center justify-between">
          {/* Left Side - Timer */}
          <div className="flex items-center space-x-4">
            <div className="flex flex-col items-start space-y-1">
              <span className="text-red-300 font-semibold text-sm">Offer</span>
              <span className="text-red-300 font-semibold text-sm">Ends:</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1 flex items-center space-x-2 border border-red-400/20">
              <div className="text-center">
                <div className="text-white font-bold text-base">{String(timeLeft.hours).padStart(2, '0')}</div>
                <div className="text-red-300 text-xs uppercase">Hours</div>
              </div>
              <div className="text-red-300">:</div>
              <div className="text-center">
                <div className="text-white font-bold text-base">{String(timeLeft.minutes).padStart(2, '0')}</div>
                <div className="text-red-300 text-xs uppercase">Minutes</div>
              </div>
            </div>
          </div>

          {/* Center - Pricing */}
          <div className="flex items-center space-x-2">
            <span className="text-red-300/60 line-through text-base">₹9999</span>
            <span className="text-white font-bold text-xl">₹1499</span>
          </div>

          {/* Right Side - CTA Button */}
          <div className="w-40">
            <PrimaryButton text="Buy Now" className="whitespace-nowrap" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default StickyFooter; 