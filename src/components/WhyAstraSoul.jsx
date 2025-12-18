import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const differentiators = [
  "Clarity without fear",
  "No fake promises",
  "Personalized, not generic",
  "For modern minds",
  "Instant digital delivery",
];

const WhyAstraSoul = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section 
      ref={ref}
      className={`py-10 md:py-16 bg-background transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3">
              Why Thousands Trust{" "}
              <span className="text-gradient-gold">AstraSoul</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              A modern approach to ancient wisdom
            </p>
          </div>

          {/* Softer layout without hard borders */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {differentiators.map((text, index) => (
              <div 
                key={index}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full bg-muted/50 transition-all duration-500 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
              >
                <div className="w-5 h-5 rounded-full flex items-center justify-center bg-emerald-500/20">
                  <Check className="w-3 h-3 text-emerald-400" />
                </div>
                <span className="text-sm md:text-base text-foreground">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAstraSoul;
