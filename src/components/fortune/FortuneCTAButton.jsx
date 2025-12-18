import React from 'react';
import { Link } from 'react-router-dom';

const FortuneCTAButton = ({ 
  onClick, 
  children, 
  className = "", 
  icon, 
  position = 'after',
  to,
  external = false
}) => {
  
  // Shimmer effect component
  const ShimmerEffect = () => (
    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
  );

  // Button content
  const buttonContent = (
    <>
      {/* Shimmer Effect */}
      <ShimmerEffect />
      
      {/* Main Background */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-700"></div>
      
      {/* Hover Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>

      {/* Button Content */}
      <span className="relative z-10 flex items-center justify-center gap-3">
        {icon && position === 'before' && <span className="flex items-center">{icon}</span>}
        <span className='text-[1.125rem]'>{children || "Unlock My Fortune Report Now"}</span>
        {icon && position === 'after' && <span className="flex items-center">{icon}</span>}
      </span>

      {/* Ripple Effect */}
      <div className="absolute inset-0 rounded-2xl bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-500"></div>
    </>
  );

  // Render as Link if 'to' prop is provided
  if (to && !external) {
    return (
      <Link
        to={to}
        className={`relative w-full flex items-center justify-center text-white font-bold px-6 py-4 rounded-2xl shadow-2xl transform hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300 active:scale-95 overflow-hidden group ${className}`}
      >
        {buttonContent}
      </Link>
    );
  }

  // Render as external link if external prop is true
  if (to && external) {
    return (
      <a
        href={to}
        target="_blank"
        rel="noopener noreferrer"
        className={`relative w-full flex items-center justify-center text-white font-bold px-6 py-4 rounded-2xl shadow-2xl transform hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300 active:scale-95 overflow-hidden group ${className}`}
      >
        {buttonContent}
      </a>
    );
  }

  // Render as button
  return (
    <button
      onClick={onClick}
      className={`relative w-full flex items-center justify-center text-white font-bold px-6 py-4 rounded-2xl shadow-2xl transform hover:scale-105 hover:shadow-purple-500/50 transition-all duration-300 active:scale-95 overflow-hidden group ${className}`}
    >
      {buttonContent}
    </button>
  );
};

export default FortuneCTAButton; 