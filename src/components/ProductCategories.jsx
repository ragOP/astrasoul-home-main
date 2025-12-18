import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Sparkles, ArrowRight, Star, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import productConsultation from "@/assets/product-consultation.jpg";
import productLoveReport from "@/assets/product-love-report.jpg";
import productBraceletCombo from "@/assets/product-bracelet-combo.jpg";

const products = [
  {
    icon: MessageCircle,
    title: "Love Consultation",
    hook: "Confused about love?",
    description: "Get clear guidance tailored only to you from expert astrologers.",
    image: productConsultation,
    href: "https://www.astrasoul.digital/consultation",
    tag: "Most Popular",
    timeEstimate: "5–7 min session",
  },
  {
    icon: Heart,
    title: "Love Report",
    hook: "Looking for clarity?",
    description: "Compatibility, future timeline & emotional patterns revealed.",
    image: productLoveReport,
    href: "https://www.astrasoul.digital/love",
    tag: "Instant Delivery",
    isRecommended: true,
    timeEstimate: "2 min to get",
  },
  {
    icon: Sparkles,
    title: "Bracelet + Report Combo",
    hook: "Manifesting abundance?",
    description: "Energized crystal bracelet + comprehensive love & wealth report.",
    image: productBraceletCombo,
    href: "https://www.astrasoul.digital/bracelet",
    tag: "Best Value",
    timeEstimate: "3–5 days delivery",
  },
];

const ProductCategories = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section 
      id="products" 
      ref={ref}
      className="py-8 md:py-10 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-8 md:mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3">
            Explore Your Path
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the insights that resonate with your soul's journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              variant="elevated"
              className={`group overflow-hidden transition-all duration-700 ${
                product.isRecommended ? "ring-2 ring-gold/50 shadow-lg shadow-gold/10" : ""
              } ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              {/* Product Image - compressed aspect ratio */}
              <div className="relative aspect-[16/10] md:aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                
                {/* Tags */}
                <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                  {product.isRecommended && (
                    <span className="px-3 py-1.5 text-[11px] md:text-xs font-bold bg-gold text-cosmic-deep rounded-full flex items-center gap-1.5 shadow-lg shadow-gold/30 animate-glow-pulse">
                      <Star className="w-3.5 h-3.5" fill="currentColor" />
                      Most Chosen
                    </span>
                  )}
                  <span className="px-2.5 py-1 text-[10px] md:text-xs font-medium bg-gold/90 text-cosmic-deep rounded-full">
                    {product.tag}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-4 md:p-5 space-y-3">
                {/* Icon & Title - tighter */}
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-muted flex items-center justify-center">
                    <product.icon className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                  </div>
                  <h3 className="text-base md:text-lg font-serif font-semibold">{product.title}</h3>
                </div>

                {/* Emotional hook */}
                <p className="text-gold/80 text-sm italic">{product.hook}</p>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {product.description}
                </p>
                
                {/* CTA */}
                <Button 
                  variant={product.isRecommended ? "gold" : "outline"}
                  size="sm"
                  className={`w-full ${!product.isRecommended ? "group-hover:border-gold group-hover:text-gold" : ""} transition-colors`}
                  asChild
                >
                  <a href={product.href} target="_blank" rel="noopener noreferrer">
                    {product.isRecommended ? "Get Started" : "Explore"}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>

                {/* Time estimate */}
                <p className="text-[10px] md:text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
                  <Clock className="w-3 h-3" />
                  {product.timeEstimate}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
