import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTAButton = ({ 
    text = "Get Your Love Report Now", 
    onClick, 
    className = "",
    size = "default",
    variant = "primary",
    showArrow = false,
    fullWidth = false,
    customIcon
}) => {
    const baseClasses = "font-semibold rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl font-poppins flex items-center justify-center space-x-2";
    
    const sizeClasses = {
        small: "px-6 py-3 text-base",
        default: "px-8 py-4 text-lg",
        large: "px-12 py-5 text-xl"
    };
    
    const variantClasses = {
        primary: "bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white",
        secondary: "bg-white text-rose-600 hover:bg-rose-50 border-2 border-rose-500",
        outline: "bg-transparent text-rose-600 border-2 border-rose-500 hover:bg-rose-500 hover:text-white"
    };
    
    const widthClass = fullWidth ? "w-full" : "";
    
    return (
        <button 
            onClick={(e) => {
                console.log('CTAButton clicked!', onClick);
                if (onClick) onClick(e);
            }}
            className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`}
        >
            <span>{text}</span>
            {showArrow && <ArrowRight className="w-5 h-5" />}
            {customIcon && customIcon}
        </button>
    );
};

export default CTAButton; 