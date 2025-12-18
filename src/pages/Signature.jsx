import React, { useState } from 'react';
import BackgroundVariations from '../components/signature/BackgroundVariations';
import SignatureNavbar from '../components/signature/SignatureNavbar';
import SignatureHero from '../components/signature/SignatureHero';
import SignatureFooter from '../components/signature/SignatureFooter';
import BrandSignatureOverlay from '../components/signature/BrandSignatureOverlay';
import '../components/signature/signature-css.css';
import SignatureBeforeAfterSection from '../components/signature/SignatureBeforeAfterSection';
import SignatureWhyChooseUs from '../components/signature/SignatureWhyChooseUs';
import SignatureHowItWorks from '../components/signature/SignatureHowItWorks';
import SignatureWhoIsThisFor from '../components/signature/SignatureWhoIsThisFor';
import SignatureTestimonialsSection from '../components/signature/SignatureTestimonialsSection';
import SignatureLimitedSlots from '../components/signature/SignatureLimitedSlots';
import SignatureVideoSection from '../components/signature/SignatureVideoSection';

function Signature() {
  const [showLandingPage, setShowLandingPage] = useState(false);

  const handleAnimationComplete = () => {
    setShowLandingPage(true);
  };

  return (
    <>
      {/* Always show navbar */}
      <SignatureNavbar />

      {!showLandingPage && (
        <BrandSignatureOverlay onAnimationComplete={handleAnimationComplete} />
      )}

      {showLandingPage && (
        <div className="signature-container mb-20 relative bg-gradient-to-br from-white via-gray-50 to-blue-50">
          <BackgroundVariations activeVariation={0} />
          <SignatureHero />
          <SignatureVideoSection />
          <SignatureBeforeAfterSection />
          <SignatureWhyChooseUs />
          <SignatureHowItWorks />
          <SignatureWhoIsThisFor />
          <SignatureTestimonialsSection />
          <SignatureLimitedSlots />
          <SignatureFooter />
        </div>
      )}
    </>
  );
}

export default Signature; 