import React, { useEffect } from 'react';
import FortuneNavbar from '../components/fortune/FortuneNavbar';
import FortuneHero from '../components/fortune/FortuneHero';
import '../components/fortune/fortune-styles.css';

const FortuneReport = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <div className="bg-[#2a042b]">
      <FortuneNavbar />
      <FortuneHero />
    </div>
  );
};

export default FortuneReport; 