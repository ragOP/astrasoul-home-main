import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

const StickyMobileCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero section (approximately)
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border/50 p-3 safe-area-pb animate-fade-in">
      <Button 
        variant="gold" 
        size="lg" 
        className="w-full"
        onClick={() => {
          document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <Search className="w-4 h-4" />
        Get My Insight
      </Button>
    </div>
  );
};

export default StickyMobileCTA;
