import { Button } from "@/components/ui/button";
import { Search, ArrowRight, Star, Shield, Zap } from "lucide-react";
import heroImage from "@/assets/hero-cosmic-bg.jpg";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 scale-110"
        style={{ 
          backgroundImage: `url(${heroImage})`,
          transform: `translateY(${scrollY * 0.4}px) scale(1.1)`,
        }}
      />
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/50 to-background" />
      
      {/* Content - tightened spacing for mobile */}
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-5 md:space-y-8">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold leading-tight animate-fade-up">
            Discover What The Universe{" "}
            <span className="text-gradient-gold">Already Knows</span>{" "}
            About You.
          </h1>
          
          {/* Subheadline - tighter on mobile */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up delay-200 opacity-0" style={{ animationFillMode: 'forwards' }}>
            Get a deeply personalized astrology insight about your love life, money, emotions & destiny — uniquely created for you.
          </p>
          
          {/* Clarifying line */}
          <p className="text-sm text-gold/60 animate-fade-up delay-300 opacity-0" style={{ animationFillMode: 'forwards' }}>
            Answer 2–3 questions and get your insight instantly.
          </p>
          
          {/* CTA Section - closer to headline on mobile */}
          <div className="pt-2 md:pt-4 space-y-3 animate-fade-up delay-400 opacity-0" style={{ animationFillMode: 'forwards' }}>
            {/* Primary CTA with enhanced glow */}
            <div className="relative inline-block">
              {/* Glow effect behind button */}
              <div className="absolute inset-0 bg-gold/30 blur-xl rounded-full animate-glow-pulse" />
              <Button 
                variant="gold" 
                size="xl" 
                className="relative w-full sm:w-auto animate-glow-pulse"
                onClick={() => {
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <Search className="w-5 h-5" />
                Get My Personalized Insight
              </Button>
            </div>
            
            {/* Micro-trust line under CTA - gold tint */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-xs md:text-sm text-gold/70">
              <span className="flex items-center gap-1.5">
                <Star className="w-3 h-3 md:w-4 md:h-4" />
                1L+ reports
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-3 h-3 md:w-4 md:h-4" />
                100% private
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3 h-3 md:w-4 md:h-4" />
                Instant access
              </span>
            </div>

            {/* Secondary CTA */}
            <button 
              className="text-muted-foreground hover:text-gold transition-colors text-sm flex items-center gap-1 mx-auto"
              onClick={() => {
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              See All Products
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
