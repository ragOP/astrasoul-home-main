import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    quote: "The soulmate sketch felt unreal. It matched with someone I already know. It gave me clarity and confidence about my path.",
    name: "Priya",
    city: "Mumbai",
    isHighlighted: true,
  },
  {
    quote: "I didn't expect astrology to feel this practical and personal. The wealth report gave clarity not fear.",
    name: "Rohit",
    city: "Delhi",
  },
  {
    quote: "Finally, something that speaks to modern Indians without the superstition. The stress test was eye-opening.",
    name: "Ananya",
    city: "Bangalore",
  },
  {
    quote: "My career reading was so accurate. It gave me confidence to make a big life decision.",
    name: "Arjun",
    city: "Pune",
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section 
      id="testimonials" 
      ref={ref}
      className="py-12 md:py-16 bg-muted/30"
    >
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {/* CRO headline */}
          <p className="text-gold text-sm font-medium tracking-wide uppercase mb-3">
            People come to us curious but leave with clarity.
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-4">
            Real People. <span className="text-gradient-gold">Real Experiences.</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            What our community says about their journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              variant="glass" 
              className={`group transition-all duration-700 ${
                testimonial.isHighlighted ? "ring-2 ring-gold/30 shadow-lg shadow-gold/10 md:scale-105" : ""
              } ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: isVisible ? `${index * 100}ms` : "0ms" }}
            >
              <CardContent className={`p-6 ${testimonial.isHighlighted ? "py-8" : ""}`}>
                {/* Quote icon */}
                <Quote className={`${testimonial.isHighlighted ? "w-10 h-10" : "w-8 h-8"} text-gold/30 mb-4`} />
                
                {/* Quote text */}
                <p className={`text-foreground mb-6 leading-relaxed italic ${testimonial.isHighlighted ? "text-lg" : ""}`}>
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`${testimonial.isHighlighted ? "w-12 h-12" : "w-10 h-10"} rounded-full bg-gradient-to-br from-gold/30 to-accent/30 flex items-center justify-center`}>
                    <span className={`${testimonial.isHighlighted ? "text-base" : "text-sm"} font-semibold text-foreground`}>
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.city}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
