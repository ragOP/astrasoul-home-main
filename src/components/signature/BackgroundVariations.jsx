import React, { useState, useEffect } from 'react';

const BackgroundVariations = ({ activeVariation = 0 }) => {
  const [penTrails, setPenTrails] = useState([]);
  const [flowingLines, setFlowingLines] = useState([]);

  useEffect(() => {

    // Generate pen trails for variation 1
    if (activeVariation === 1) {
      const trails = Array.from({ length: 5 }, (_, i) => ({
        id: i,
        points: Array.from({ length: 10 }, () => ({
          x: Math.random() * 100,
          y: Math.random() * 100
        })),
        delay: Math.random() * 2
      }));
      setPenTrails(trails);
    }

    // Generate flowing lines for variation 2
    if (activeVariation === 2) {
      const lines = Array.from({ length: 6 }, (_, i) => ({
        id: i,
        startX: Math.random() * 100,
        startY: Math.random() * 100,
        endX: Math.random() * 100,
        endY: Math.random() * 100,
        delay: Math.random() * 3
      }));
      setFlowingLines(lines);
    }
  }, [activeVariation]);

  const renderVariation0 = () => (
    <div className="absolute inset-0 bg-white">
      {/* Subtle paper texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23000000' fill-opacity='0.1'/%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Elegant signature strokes flowing from left to right */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          {/* Main signature stroke - flowing from left edge to right */}
          <path
            d="M0,25 Q15,35 25,45 Q35,55 45,65 Q55,75 65,85 Q75,95 85,105 Q95,115 105,125 Q115,135 125,145"
            stroke="#000"
            strokeWidth="1.2"
            fill="none"
            opacity="0.08"
            style={{
              animation: 'signatureFade 8s ease-in-out infinite',
              strokeDasharray: '125',
              strokeDashoffset: '125',
              animationDelay: '0s'
            }}
          />
          
          {/* Secondary signature stroke - flowing from left edge to right */}
          <path
            d="M0,45 Q20,55 35,65 Q50,75 65,85 Q80,95 95,105 Q110,115 125,125 Q140,135 155,145"
            stroke="#000"
            strokeWidth="0.8"
            fill="none"
            opacity="0.06"
            style={{
              animation: 'signatureFade 8s ease-in-out infinite',
              strokeDasharray: '155',
              strokeDashoffset: '155',
              animationDelay: '2s'
            }}
          />
          
          {/* Third signature stroke - flowing from left edge to right */}
          <path
            d="M0,65 Q25,75 40,85 Q55,95 70,105 Q85,115 100,125 Q115,135 130,145 Q145,155 160,165"
            stroke="#000"
            strokeWidth="0.6"
            fill="none"
            opacity="0.05"
            style={{
              animation: 'signatureFade 8s ease-in-out infinite',
              strokeDasharray: '160',
              strokeDashoffset: '160',
              animationDelay: '4s'
            }}
          />
          
          {/* Fourth signature stroke - flowing from left edge to right */}
          <path
            d="M0,15 Q10,25 20,35 Q30,45 40,55 Q50,65 60,75 Q70,85 80,95 Q90,105 100,115 Q110,125 120,135"
            stroke="#000"
            strokeWidth="0.5"
            fill="none"
            opacity="0.04"
            style={{
              animation: 'signatureFade 8s ease-in-out infinite',
              strokeDasharray: '120',
              strokeDashoffset: '120',
              animationDelay: '6s'
            }}
          />
        </svg>
      </div>

      {/* Subtle floating elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-black/20 rounded-full"
            style={{
              left: `${15 + i * 20}%`,
              top: `${40 + Math.sin(i) * 20}%`,
              animation: 'float 6s ease-in-out infinite',
              animationDelay: `${i * 1.5}s`
            }}
          />
        ))}
      </div>

      {/* Subtle grid lines for signature alignment */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px)`,
          backgroundSize: '30px 30px'
        }}></div>
      </div>

      {/* Custom CSS animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes signatureFade {
            0%, 100% { 
              opacity: 0.02; 
              stroke-dashoffset: 100;
            }
            20%, 80% { 
              opacity: 0.08; 
              stroke-dashoffset: 0;
            }
          }
          
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px) scale(1);
              opacity: 0.1;
            }
            50% { 
              transform: translateY(-10px) scale(1.2);
              opacity: 0.3;
            }
          }
        `
      }} />
    </div>
  );

  const renderVariation1 = () => (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-black">
      {/* Glowing handwriting trails */}
      {penTrails.map((trail) => (
        <svg
          key={trail.id}
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ animationDelay: `${trail.delay}s` }}
        >
          <path
            d={trail.points.map((point, index) => 
              `${index === 0 ? 'M' : 'L'}${point.x},${point.y}`
            ).join(' ')}
            stroke="#8B5CF6"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
            className="animate-pulse"
            filter="drop-shadow(0 0 10px #8B5CF6)"
          />
        </svg>
      ))}

      {/* Floating calligraphy elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="absolute text-white/20 text-4xl animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          >
            ✒️
          </div>
        ))}
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
    </div>
  );

  const renderVariation2 = () => (
    <div className="absolute inset-0 bg-gradient-to-br from-sky-400 via-blue-500 to-purple-600">
      {/* Flowing lines */}
      {flowingLines.map((line) => (
        <svg
          key={line.id}
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ animationDelay: `${line.delay}s` }}
        >
          <path
            d={`M${line.startX},${line.startY} Q${(line.startX + line.endX) / 2},${(line.startY + line.endY) / 2 - 20} ${line.endX},${line.endY}`}
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
          />
        </svg>
      ))}

      {/* Floating geometric shapes */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="absolute border-2 border-white/20 rounded-full animate-spin"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 40 + 20}px`,
              height: `${Math.random() * 40 + 20}px`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-transparent"></div>
    </div>
  );

  const renderVariation3 = () => (
    <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-yellow-100 to-orange-200">
      {/* Parchment texture */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Digital overlays */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <rect x="10" y="20" width="80" height="60" fill="none" stroke="#8B4513" strokeWidth="0.5" opacity="0.3" />
          <circle cx="50" cy="50" r="30" fill="none" stroke="#8B4513" strokeWidth="0.3" opacity="0.2" />
          <path d="M20,50 L80,50 M50,20 L50,80" stroke="#8B4513" strokeWidth="0.2" opacity="0.2" />
        </svg>
      </div>

      {/* Vintage ink splatters */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }, (_, i) => (
          <div
            key={i}
            className="absolute bg-amber-800/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 10}px`,
              height: `${Math.random() * 30 + 10}px`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );

  const renderVariation4 = () => (
    <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100">
      {/* Neumorphic elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-2xl shadow-lg animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 60 + 40}px`,
              height: `${Math.random() * 60 + 40}px`,
              background: 'linear-gradient(145deg, #ffffff, #e6e6e6)',
              boxShadow: '20px 20px 60px #d1d1d1, -20px -20px 60px #ffffff',
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Animated pen movement */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M10,30 Q30,10 50,30 T90,30"
            stroke="#6366F1"
            strokeWidth="2"
            fill="none"
            opacity="0.6"
            className="animate-pulse"
            filter="drop-shadow(0 0 5px #6366F1)"
          />
          <path
            d="M15,50 Q35,30 55,50 T95,50"
            stroke="#8B5CF6"
            strokeWidth="1.5"
            fill="none"
            opacity="0.4"
            className="animate-pulse"
            style={{ animationDelay: '0.5s' }}
            filter="drop-shadow(0 0 3px #8B5CF6)"
          />
        </svg>
      </div>

      {/* Glassy reflections */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent"></div>
    </div>
  );

  const variations = [
    renderVariation0,
    renderVariation1,
    renderVariation2,
    renderVariation3,
    renderVariation4
  ];

  return variations[activeVariation] ? variations[activeVariation]() : renderVariation0();
};

export default BackgroundVariations; 