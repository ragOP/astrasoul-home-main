import React from 'react';

const ServiceCard = ({ 
  icon, 
  title, 
  subtitle, 
  description, 
  gradientFrom = "from-amber-500/20", 
  gradientTo = "to-orange-500/20",
  borderColor = "hover:border-amber-400/50"
}) => {
  return (
    <div className="group relative">
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-2xl blur-lg group-hover:blur-xl transition-all duration-500`}></div>
      <div className={`relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/20 ${borderColor} transition-all duration-300 hover:transform hover:scale-105`}>
        <div className="flex flex-col space-y-4 sm:space-y-6 items-center text-center">
          {/* Top Row - Icon and Title/Subtitle */}
          <div className="flex items-center justify-center space-x-4 sm:space-x-6 pr-4">
            <div className="text-4xl sm:text-6xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
              {icon}
            </div>
            <div className="flex flex-col space-y-1 sm:space-y-2 items-center">
              <h3 className="text-xl sm:text-2xl font-bold text-white">{title}</h3>
              <p className="text-amber-400 font-semibold text-sm sm:text-base">{subtitle}</p>
            </div>
          </div>
          
          {/* Bottom - Main Description */}
          <div className="w-full">
            <p className="text-white/70 leading-relaxed text-sm sm:text-base">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard; 