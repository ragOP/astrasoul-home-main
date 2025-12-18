import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import BrandStory from "@/components/BrandStory";
import ProductCategories from "@/components/ProductCategories";
import HowItWorks from "@/components/HowItWorks";
import WhoThisIsFor from "@/components/WhoThisIsFor";
import PrivacySection from "@/components/PrivacySection";
import Testimonials from "@/components/Testimonials";
import WhyAstraSoul from "@/components/WhyAstraSoul";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ScrollIndicator from "@/components/ScrollIndicator";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pb-16 md:pb-0">
        <HeroSection />
        <TrustBar />
        <BrandStory />
        <ProductCategories />
        <HowItWorks />
        <WhoThisIsFor />
        <PrivacySection />
        <Testimonials />
        <WhyAstraSoul />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
      <ScrollIndicator />
      <StickyMobileCTA />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
