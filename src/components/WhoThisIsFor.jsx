import { Check } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const qualities = [
  "Curious but not superstitious",
  "Seeking clarity, not fear",
  "Open to self-discovery",
  "Values privacy",
];

const WhoThisIsFor = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section 
      ref={ref}
      className={`py-12 md:py-16 bg-muted/30 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
            Is This <span className="text-gradient-gold">For You?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            AstraSoul is perfect if you are...
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            {qualities.map((quality, index) => (
              <div 
                key={index}
                className={`flex items-center gap-3 p-4 rounded-xl bg-background border border-border hover:border-gold/30 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
                }`}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
              >
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-gold/20">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <span className="text-foreground">{quality}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoThisIsFor;
