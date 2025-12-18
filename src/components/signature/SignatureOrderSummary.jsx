import React, { useState } from 'react';
import { Shield, Sparkles } from 'lucide-react';

const SignatureOrderSummary = ({ isCheckingOut, onCheckout }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleButtonClick = async () => {
    if (isCheckingOut) return;
    
    // Add pressed effect
    setIsPressed(true);
    
    // Call the actual checkout function immediately
    onCheckout();
    
    // Reset pressed effect after a short delay
    setTimeout(() => {
      setIsPressed(false);
    }, 200);
  };

  return (
    <div className="sticky top-8">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-gray-500/20 via-black/20 to-gray-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
        <div className="relative bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-xl rounded-3xl p-6 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h3>
          
          {/* Summary Items */}
          <div className="space-y-4 mb-6">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Subtotal</span>
              <span className="text-gray-800 font-semibold">₹999</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-green-600">Discount</span>
              <span className="text-green-600 font-semibold">-₹410</span>
            </div>
            <div className="border-t border-gray-100 pt-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-gray-800">Total</span>
                <span className="text-2xl font-bold text-gray-800">₹589</span>
              </div>
            </div>
          </div>

          {/* Checkout Button */}
          <button
            onClick={handleButtonClick}
            disabled={isCheckingOut}
            className={`w-full bg-gradient-to-r from-gray-800 to-black text-white py-4 rounded-full font-semibold transition-all duration-300 transform shadow-xl buy-now-shimmer disabled:opacity-50 disabled:cursor-not-allowed ${
              isPressed 
                ? 'scale-95 shadow-inner from-gray-900 to-black' 
                : 'hover:from-gray-900 hover:to-black hover:scale-105 hover:shadow-gray-800/25'
            }`}
          >
            {isCheckingOut ? (
              <span className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Processing...</span>
              </span>
            ) : (
              <span className="flex items-center justify-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span>Complete Purchase</span>
                <Sparkles className="w-5 h-5" />
              </span>
            )}
          </button>

          {/* Security Badge */}
          <div className="mt-6 text-center">
            <div className="flex items-center justify-center space-x-2 text-gray-500 text-sm">
              <Shield className="w-4 h-4" />
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignatureOrderSummary; 