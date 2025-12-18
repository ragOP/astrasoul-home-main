import { Shield, Lock, Mail, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const privacyPoints = [
  { icon: Lock, text: "100% Private" },
  { icon: Shield, text: "No Data Sharing" },
  { icon: Mail, text: "Secure Delivery" },
  { icon: Heart, text: "Ethical Only" },
];

const PrivacySection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section 
      ref={ref}
      className={`py-10 md:py-14 bg-muted/30 border-y border-border transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-gold/10 mb-5">
            <Shield className="w-7 h-7 md:w-8 md:h-8 text-gold" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-3">
            Your Data. <span className="text-gradient-gold">Fully Protected.</span>
          </h2>
          
          <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto">
            Your personal information and spiritual journey are sacred to us.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {privacyPoints.map((point, index) => (
              <div 
                key={index} 
                className={`flex flex-col items-center gap-2 transition-all duration-500 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-muted flex items-center justify-center">
                  <point.icon className="w-6 h-6 md:w-7 md:h-7 text-gold" />
                </div>
                <span className="text-xs md:text-sm text-foreground font-medium">{point.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
