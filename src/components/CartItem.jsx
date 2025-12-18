import React from 'react';
import { Check, X } from 'lucide-react';

const CartItem = ({ item, onRemove }) => {
  const removeItem = (id) => {
    if (onRemove) {
      onRemove(id);
    }
  };

  return (
    <div className="relative group">
      <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
      <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-4 border border-white/20">
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Top Stack: Image + Title/Subtitle */}
          <div className="flex flex-row gap-4 sm:gap-6">
            {/* Item Image */}
            <div className="flex-shrink-0">
              <div className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500"></div>
                <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-2 border border-white/20">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-22 h-22 sm:w-32 sm:h-32 object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Title and Subtitle */}
            <div className="flex-1 flex flex-col min-w-0">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white pr-3" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{item.name}</h3>
                {item.id !== 1 && (
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-white/50 hover:text-red-400 transition-colors p-2 sm:p-3 flex-shrink-0"
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                )}
              </div>
              {/* <p className="text-base sm:text-lg text-white/70 mb-1 sm:mb-3 line-clamp-2">{item.description}</p> */}
              <div className="flex items-center space-x-2">
                <span className="text-base sm:text-lg text-red-300 font-medium">⏱️ {item.duration}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <p className="text-base sm:text-lg text-white/70 line-clamp-2">{item.description}</p>
          </div>

          {/* Middle Stack: What's Included (starts from left) */}
          <div className="space-y-4">
            <h4 className="text-base sm:text-lg font-semibold text-red-300">What's Included:</h4>
            <div className="grid grid-cols-1 gap-3 sm:gap-4">
              {item.features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 bg-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <span className="text-base sm:text-lg text-white/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Stack: Price */}
          <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-white/10">
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-white">₹{item.price.toLocaleString()}</span>
              <span className="text-xl text-white/50 line-through">₹{item.originalPrice.toLocaleString()}</span>
              <span className="text-lg text-green-400 font-medium">Save ₹{(item.originalPrice - item.price).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem; 