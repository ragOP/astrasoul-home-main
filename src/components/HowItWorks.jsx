import { FileText, Sparkles, Mail } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: FileText,
    number: "1",
    title: "Share details",
    description: "Quick birth info",
  },
  {
    icon: Sparkles,
    number: "2",
    title: "We create your insight",
    description: "Personalized for you",
  },
  {
    icon: Mail,
    number: "3",
    title: "Receive instantly",
    description: "Digital delivery",
  },
];

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section 
      ref={ref}
      className={`py-12 md:py-16 bg-background transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
              How It <span className="text-gradient-gold">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple. Fast. Meaningful.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div 
                key={index}
                className={`text-center transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: isVisible ? `${index * 150}ms` : "0ms" }}
              >
                <div className="relative mx-auto w-24 h-24 mb-6">
                  <div className="absolute inset-0 rounded-full bg-gold/15 animate-glow-pulse" />
                  <div className="relative w-full h-full rounded-full bg-muted border-2 border-gold/40 flex items-center justify-center shadow-lg shadow-gold/10">
                    <step.icon className="w-10 h-10 text-gold" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-9 h-9 rounded-full bg-gold text-cosmic-deep text-sm font-bold flex items-center justify-center shadow-md">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-serif font-semibold mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-muted-foreground mt-10 text-sm">
            No calls. No upselling. No human follow-ups.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
