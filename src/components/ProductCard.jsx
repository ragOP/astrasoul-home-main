import React from 'react';
import { Plus, Check } from 'lucide-react';

const ProductCard = ({ product, onAddToCart, isInCart }) => {
  const { title, description, features, price, originalPrice, icon, color } = product;

  return (
    <div className="relative group">
      <div className={`absolute -inset-1 bg-gradient-to-r ${color.from} ${color.via} ${color.to} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
      <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-xl">
        <div className="space-y-6">
          {/* Header */}
          <div className="text-center space-y-4">
            <div className="text-4xl mb-2">{icon}</div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">{title}</h3>
            <p className="text-white/80 text-sm sm:text-base leading-relaxed">{description}</p>
          </div>

          {/* Features */}
          <div className="space-y-3">
            <h4 className="text-white font-semibold text-sm sm:text-base">What You'll Get:</h4>
            <div className="space-y-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-white/80 text-sm sm:text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-center justify-between pt-4 border-t border-white/10">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold text-white">₹{price.toLocaleString()}</span>
              <span className="text-lg text-white/50 line-through">₹{originalPrice.toLocaleString()}</span>
              <span className="text-sm text-green-400 font-medium">Save ₹{(originalPrice - price).toLocaleString()}</span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => onAddToCart(product)}
            disabled={isInCart}
            className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center space-x-2 ${
              isInCart
                ? 'bg-green-500/20 text-green-400 border border-green-400/30 cursor-not-allowed'
                : `bg-gradient-to-r ${color.from.replace('/20', '')} ${color.to.replace('/20', '')} text-white hover:shadow-lg`
            }`}
          >
            {isInCart ? (
              <>
                <Check className="w-5 h-5" />
                <span>Added to Cart</span>
              </>
            ) : (
              <>
                <Plus className="w-5 h-5" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 