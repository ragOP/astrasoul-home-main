import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const LoveNavbar = () => {
  return (
    <nav className="bg-gradient-to-br from-pink-50 via-rose-50 to-purple-100 backdrop-blur-xl z-50 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          
          {/* Left side - Empty for balance */}
          <div className="flex items-center">
            <div className="w-10 h-6"></div>
          </div>

          {/* Centered Brand Logo */}
          <div className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2">
            {/* <Link to="/home" className="flex items-center space-x-2 sm:space-x-4 hover:opacity-80 transition-opacity"> */}
              <img
                src="/brand-logo.png"
                alt="Astro Soul Logo"
                className="h-12 w-auto object-contain"
              />
            {/* </Link> */}
          </div>

          {/* Right side - Cart */}
          {/* <div className="flex items-center">
            <button className="text-pink-600 hover:text-pink-800 transition-colors duration-300 p-2">
              <ShoppingCart className="h-6 w-6" />
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default LoveNavbar; 