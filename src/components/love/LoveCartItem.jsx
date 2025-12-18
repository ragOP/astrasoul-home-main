import React from 'react';
import { X, Heart, Clock, FileText } from 'lucide-react';

const LoveCartItem = ({ item, onRemove, showRemoveButton = true }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg border border-rose-100 overflow-hidden">
      <div className="px-4 py-4">
        {/* Header with Remove Button */}
        <div className="flex items-start justify-end">
          {showRemoveButton && (
            <button
              onClick={() => onRemove(item.id)}
              className="p-2 text-gray-400 hover:text-rose-500 transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Main Column Stack */}
        <div className="space-y-4">
          {/* Row: Image + Title/Subtitle */}
          <div className="flex items-start gap-4">
            {/* Product Image */}
            <div className="w-24 pl-2 h-30 rounded-xl overflow-hidden flex-shrink-0 shadow-lg">
              <img
                src="/astro-item-1.png"
                alt={item.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Title and Subtitle */}
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-800 love-font-poppins mb-1">
                {item.name}
              </h3>
              <p className="text-sm text-gray-600 love-font-inter">
                {item.description}
              </p>
            </div>
          </div>
          
          {/* Points - Full Row */}
          <div className="space-y-2 mb-4">
            {item.features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-2">
                <Heart className="w-3 h-3 text-rose-500 flex-shrink-0" />
                <span className="text-xs text-gray-700 love-font-inter">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between pt-4 border-t border-rose-100">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-rose-600 love-font-poppins">
              ₹{item.price}
            </span>
            <span className="text-lg text-gray-400 line-through love-font-inter">
              ₹{item.originalPrice}
            </span>
            <span className="text-sm text-green-600 font-medium love-font-inter">
              {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoveCartItem; 