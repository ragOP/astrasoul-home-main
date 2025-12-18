import React from 'react';

const CTAButton = ({ 
  text = "Get Your Love Report Now", 
  onClick, 
  variant = "primary",
  className = "",
  size = "default"
}) => {
  const baseClasses = "font-bold rounded-2xl transition-all duration-700 shadow-xl relative overflow-hidden group hover:shadow-3xl transform hover:-translate-y-3 hover:scale-110 animate-pulse";
  
  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    large: "px-12 py-5 text-lg w-full max-w-md whitespace-nowrap"
  };
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white hover:from-pink-600 hover:via-rose-600 hover:to-amber-600",
    secondary: "border-2 border-pink-400 text-pink-600 hover:bg-pink-400 hover:text-white hover:border-pink-500",
    outline: "border-2 border-rose-400 text-rose-600 hover:bg-rose-400 hover:text-white hover:border-rose-500"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <span className="relative z-10 group-hover:scale-110 transition-transform duration-500 animate-bounce font-extrabold tracking-wide" style={{ animationDuration: '2.5s', animationIterationCount: 'infinite' }}>{text}</span>
      {variant === "primary" && (
        <>
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-rose-600 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          {/* Mystical shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200 ease-out"></div>
          
          {/* Second shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1800 ease-out" style={{ animationDelay: '0.3s' }}></div>
          
          {/* Floating mystical particles */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            <div className="absolute top-1 left-2 w-1 h-1 bg-white/80 rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '2s' }}></div>
            <div className="absolute top-2 right-3 w-1 h-1 bg-white/60 rounded-full animate-ping" style={{ animationDelay: '0.5s', animationDuration: '2.5s' }}></div>
            <div className="absolute bottom-1 left-1/3 w-1 h-1 bg-white/70 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '2.2s' }}></div>
            <div className="absolute bottom-2 right-1/4 w-1 h-1 bg-white/50 rounded-full animate-ping" style={{ animationDelay: '1.5s', animationDuration: '2.8s' }}></div>
            <div className="absolute top-1/2 left-1/4 w-0.5 h-0.5 bg-white/90 rounded-full animate-ping" style={{ animationDelay: '0.8s', animationDuration: '1.8s' }}></div>
            <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-white/70 rounded-full animate-ping" style={{ animationDelay: '1.2s', animationDuration: '2.1s' }}></div>
          </div>
          
          {/* Subtle glow rings */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-400/30 to-rose-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-sm animate-pulse" style={{ animationDuration: '3s' }}></div>
          
          {/* Mystical border glow */}
          <div className="absolute inset-0 rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-800"></div>
        </>
      )}
      
      {/* Subtle breathing animation for all variants */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-pink-400/10 to-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-pulse" style={{ animationDuration: '4s' }}></div>
      
      {/* Mystical aura effect */}
      <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-pink-400/20 via-rose-500/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-md"></div>
    </button>
  );
};

export default CTAButton; 