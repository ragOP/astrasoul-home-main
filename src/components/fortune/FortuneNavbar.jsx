import React from 'react';
import { Link } from 'react-router-dom';
import { Gem } from 'lucide-react';

const FortuneNavbar = () => {
  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-[#2a042b] shadow-lg">
      <div className="flex justify-center items-center h-16 sm:h-20">
        <Link to="/" className="flex items-center space-x-2 sm:space-x-4 hover:opacity-80 transition-opacity">
          <img
            src="/brand-logo.png"
            alt="Easy Soul Logo"
            className="w-60 h-18 object-cover"
          />
        </Link>
      </div>
    </nav>
  );
};

export default FortuneNavbar; 