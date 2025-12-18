import { Star, Shield, Brain, Zap, Flag } from "lucide-react";

const trustItems = [
  { icon: Star, text: "1L+ Users" },
  { icon: Shield, text: "Private" },
  { icon: Zap, text: "Instant" },
  { icon: Brain, text: "Expert" },
  { icon: Flag, text: "India" },
];

const TrustBar = () => {
  return (
    <section className="bg-muted/50 border-y border-border py-4">
      <div className="container mx-auto px-4">
        {/* Desktop: centered flex */}
        <div className="hidden md:flex items-center justify-center gap-12">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 text-base text-muted-foreground hover:text-foreground transition-colors"
            >
              <item.icon className="w-7 h-7 text-gold" />
              <span className="font-semibold">{item.text}</span>
            </div>
          ))}
        </div>
        
        {/* Mobile: horizontal scroll */}
        <div className="md:hidden overflow-x-auto scrollbar-hide -mx-4 px-4">
          <div className="flex items-center gap-8 min-w-max">
            {trustItems.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-2.5 text-sm text-muted-foreground"
              >
                <item.icon className="w-6 h-6 text-gold" />
                <span className="font-semibold whitespace-nowrap">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
