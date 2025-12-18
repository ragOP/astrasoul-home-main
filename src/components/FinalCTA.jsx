import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section 
      id="contact"
      ref={ref}
      className="py-16 md:py-20 bg-hero relative overflow-hidden stars-bg"
    >
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] bg-accent/10 rounded-full blur-3xl" />
      
      <div className={`container mx-auto px-4 relative z-10 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 leading-tight">
            Your Answers Are Already Written.{" "}
            <span className="text-gradient-gold">Let's Reveal Them.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Begin your journey to self-discovery today
          </p>
          
          <Button variant="gold" size="xl" className="animate-glow-pulse h-16 px-12 text-lg">
            <Moon className="w-5 h-5" />
            Get My Personalized Insight
          </Button>

          {/* Risk reversal */}
          <p className="text-sm text-muted-foreground mt-4">
            No subscriptions • No spam • One-time insight
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
