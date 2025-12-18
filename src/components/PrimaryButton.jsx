import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const PrimaryButton = ({ 
  text = "Book Your Call", 
  icon = null, 
  onClick = null, 
  className = "",
  disabled = false 
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      // If already on cart page, scroll to top
      if (location.pathname === '/cart') {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      } else {
        navigate('/cart');
      }
    }
  };

  return (
    <div className="group relative">
      <div className="absolute -inset-2 bg-gradient-to-r from-red-500/30 via-pink-500/30 to-purple-500/30 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500 animate-pulse" />
      <button 
        className={`relative bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-full border border-red-400/50 shadow-2xl text-white px-6 sm:px-8 py-4 sm:py-4 font-semibold transition-all duration-300 transform hover:scale-105 text-base sm:text-base flex items-center justify-center w-full ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
        onClick={handleClick}
        disabled={disabled}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {icon && icon}
          {text}
        </span>
      </button>
    </div>
  );
};

export default PrimaryButton; 