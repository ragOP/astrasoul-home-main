import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide after scrolling past hero
      setIsVisible(window.scrollY < 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 cursor-pointer"
      onClick={() => {
        window.scrollBy({ top: window.innerHeight * 0.8, behavior: 'smooth' });
      }}
    >
      <div className="flex flex-col items-center gap-1">
        <span className="text-xs text-gold/60 tracking-wider uppercase">Scroll</span>
        <div className="w-8 h-12 rounded-full border-2 border-gold/40 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-gold rounded-full animate-scroll-bounce" />
        </div>
      </div>
    </div>
  );
};

export default ScrollIndicator;
