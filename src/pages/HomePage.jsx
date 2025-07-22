// src/pages/HomePage.jsx
import React, { useState, useEffect } from 'react';
// Header и Footer импортировать сюда не нужно, т.к. они в App.js
import HeroSection from '../components/HeroSection/HeroSection';
import CTABottomSection from '../components/CTABottomSection/CTABottomSection';

import SolutionsInfographic from '../components/SolutionsInfographic/SolutionsInfographic';
import SolutionsInfographicMobile from '../components/SolutionsInfographicMobile/SolutionsInfographicMobile';
import KeyFeatures from '../components/KeyFeatures/KeyFeatures';
import MapCoverage from '../components/MapCoverage/MapCoverage';
import AboutSection from '../components/AboutSection/AboutSection';
import AgroFarmCTASection from '../components/AgroFarmCTASection/AgroFarmCTASection';

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const openDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const closeDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <>
      {/* <Header onOpenDemo={openDemoModal} /> - Хедер уже в App.js */}
      <main>
        <HeroSection />
        {isMobile ? <SolutionsInfographicMobile /> : <SolutionsInfographic />}
        <KeyFeatures />
        <AgroFarmCTASection />

        <AboutSection /> {/* <-- ВЕРНИТЕ СЕКЦИЮ "О НАС" СЮДА */}
        <MapCoverage />
        <CTABottomSection />
       
      </main>
      {/* <Footer /> - Футер, если он глобальный, тоже должен быть в App.js */}
    </>
  );
};

export default HomePage;