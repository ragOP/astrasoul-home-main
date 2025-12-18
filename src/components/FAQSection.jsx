import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const faqs = [
  {
    question: "Is this astrology based on fear or negative predictions?",
    answer:
      "No. AstraSoul Digital follows an ethical, clarity-focused approach. We do not use fear-based language, threats, or negative predictions. Our insights are designed to guide, not scare.",
  },
  {
    question: "How personalized are these insights?",
    answer:
      "Every insight is created specifically for you using the details you share. These are not generic PDFs or automated horoscopes — personalization is the core of AstraSoul.",
  },
  {
    question: "How and when will I receive my report or insight?",
    answer:
      "Your insight is delivered digitally. Most products are available instantly or within a short processing time, depending on the product selected. No calls. No follow-ups. No waiting.",
  },
  {
    question: "Is my personal information safe?",
    answer:
      "Yes. Your data is 100% confidential and never shared with anyone. We use secure systems and ethical practices to protect your privacy.",
  },
  {
    question: "Do I need to believe in astrology for this to work?",
    answer:
      "Not at all. Many of our users are simply curious, self-aware, and seeking clarity — not blind belief. AstraSoul is designed for modern minds.",
  },
  {
    question: "Are there any subscriptions or recurring charges?",
    answer:
      "No. All products are one-time purchases. No subscriptions. No hidden charges.",
  },
  {
    question: "Can I gift an AstraSoul product to someone else?",
    answer:
      "Yes. Many of our products, especially love and combination insights, are commonly gifted. Just enter the recipient's details during checkout.",
  },
  {
    question: "What if I have questions after purchasing?",
    answer:
      "Our support team is always available to help you. You can reach us through the Contact Support option anytime.",
  },
];

const FAQSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      className={`py-12 md:py-16 bg-background transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold mb-3">
              Frequently Asked <span className="text-gradient-gold">Questions</span>
            </h2>
            <p className="text-muted-foreground">
              Everything you might be wondering before getting started.
            </p>
          </div>

          {/* Accordion */}
          <div className="card-glass rounded-2xl p-4 md:p-6">
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/50 rounded-xl px-4 md:px-5 bg-background/50 backdrop-blur-sm data-[state=open]:border-gold/30 data-[state=open]:shadow-lg data-[state=open]:shadow-gold/5 transition-all duration-300"
                >
                  <AccordionTrigger className="text-left text-sm md:text-base font-medium hover:no-underline py-4 [&[data-state=open]>svg]:text-gold [&>svg]:text-gold/60 [&>svg]:w-5 [&>svg]:h-5 [&>svg]:transition-all [&>svg]:duration-300">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm md:text-base pb-4 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Bridge line to CTA */}
          <p className="text-center text-gold/80 mt-10 text-sm md:text-base font-medium">
            Still curious? Your answers are already written.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
