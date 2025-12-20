import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BrandStory = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section 
      id="about" 
      ref={ref}
      className={`py-10 md:py-16 bg-background transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-5 md:space-y-6">
          {/* Headline */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
            More Than Astrology.{" "}
            <span className="text-gradient-gold">A Mirror to Your Inner World.</span>
          </h2>
          
          {/* Glassmorphism card for content - scannable bullets */}
          <div className="card-glass rounded-2xl p-6 md:p-8">
            <ul className="space-y-3 text-base md:text-lg text-muted-foreground">
              <li className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Personalized not generic
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Emotion-focused not fear-driven
              </li>
              <li className="flex items-center justify-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                Designed for modern minds
              </li>
            </ul>
          </div>
          
          {/* Belief-breaker line */}
          <p className="text-sm md:text-base text-gold/80 font-medium">
            No fear-based predictions. No superstition. Just clarity for you.
          </p>
          
          <div className="flex items-center justify-center gap-8 pt-2">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-gold/50" />
            <div className="w-2 h-2 rounded-full bg-gold animate-glow-pulse" />
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
