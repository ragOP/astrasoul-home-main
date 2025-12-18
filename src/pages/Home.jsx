import { PhoneCall } from 'lucide-react';
import StickyFooter from '../components/StickyFooter';
import LifeDecodedSection from '../components/LifeDecodedSection';
import WhatsIncludedSection from '../components/WhatsIncludedSection';
import TestimonialsSection from '../components/TestimonialsSection';
import PricingSection from '../components/PricingSection';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import MainContent from '../components/MainContent';
import PrimaryButton from '../components/PrimaryButton';
import ServicesSection from '../components/ServicesSection';
import PastWorkProofSection from '../components/PastWorkProofSection';
import ClientTestimonialsSection from '../components/ClientTestimonialsSection';

function Home() {

  return (
    <div className="min-h-screen bg-black selection:bg-amber-500/20 selection:text-white pb-20">
      <Navbar />

      <Hero />

      <MainContent />

      <WhatsIncludedSection />

      <PastWorkProofSection />

      <LifeDecodedSection />

      <TestimonialsSection />

      <ServicesSection />

      <PricingSection />

      <ClientTestimonialsSection />

      {/* Footer */}
      {/* <footer className="bg-black/60 border-t border-white/10 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            <div className="space-y-3 sm:space-y-4 col-span-2 md:col-span-1">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-xs sm:text-sm">✨</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-amber-400 to-purple-400 bg-clip-text text-transparent">
                  Easy Soul
                </h3>
              </div>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
                Transform your life through ancient wisdom and modern cosmic insights.
              </p>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-white font-semibold text-sm sm:text-base">Services</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-white/60">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Live Consultation</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Kundali Reading</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Love & Wealth Reports</a></li>
              </ul>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-white font-semibold text-sm sm:text-base">Company</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-white/60">
                <li><a href="#" className="hover:text-amber-400 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              <h4 className="text-white font-semibold text-sm sm:text-base">Connect</h4>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-white/60">
                <li><a href="#" className="hover:text-amber-400 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Support</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
            <p className="text-white/40 text-xs sm:text-sm">
              © 2024 Easy Soul. All rights reserved. | Premium Astro Consultation Services
            </p>
          </div>
        </div>
      </footer> */}

      {/* Sticky Footer - Only on Home */}
      <StickyFooter />
    </div>
  );
}

export default Home; 