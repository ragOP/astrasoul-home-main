import React from 'react';
import Navbar from '../components/love/Navbar';
import OfferBanner from '../components/love/OfferBanner';
import ProductDetail from '../components/love/ProductDetail';
// import PromotionalCard from '../components/love/PromotionalCard';
// import StatsSection from '../components/love/StatsSection';
// import ComparisonTable from '../components/love/ComparisonTable';
// import ProofSection from '../components/love/ProofSection';
import TestimonialsSection from '../components/love/TestimonialsSection';
import WhyReportMattersSection from '../components/love/WhyReportMattersSection';
import WhyPeopleLoveSection from '../components/love/WhyPeopleLoveSection';
import WhatYoullDiscoverSection from '../components/love/WhatYoullDiscoverSection';
import HowItWorksSection from '../components/love/HowItWorksSection';
import Hero from '../components/love/Hero';
import FAQSection from '../components/love/FAQSection';
import ReminderSection from '../components/love/ReminderSection';
import '../components/love/love-styles.css';


const NewLove = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-pink-100">
            <OfferBanner />

            <Navbar />

            <Hero />

            {/* <StatsSection /> */}

            <ProductDetail />

            {/* <PromotionalCard /> */}

            {/* <ComparisonTable /> */}

            <WhyPeopleLoveSection />

            <WhatYoullDiscoverSection />

            <HowItWorksSection />

            <WhyReportMattersSection />

            <TestimonialsSection />

            {/* <ProofSection /> */}

            <FAQSection />

            <ReminderSection />
        </div>
    );
};

export default NewLove; 