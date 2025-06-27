
import React, { useState, useEffect, useRef } from 'react';
import { Navigation } from '@/components/Navigation';
import { VideoIntro } from '@/components/VideoIntro';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { GallerySection } from '@/components/GallerySection';
import { CareersSection } from '@/components/CareersSection';
import { ContactSection } from '@/components/ContactSection';
import { ClickOverlay } from '@/components/ClickOverlay';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [showClickOverlay, setShowClickOverlay] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [hasNavigated, setHasNavigated] = useState(false);

  const handleIntroComplete = () => {
    setIntroComplete(true);
    setShowClickOverlay(true);
  };

  const handleClickOverlayClick = () => {
    setShowClickOverlay(false);
  };

  const handleNavigation = (section: string) => {
    setCurrentSection(section);
    setHasNavigated(true);
  };

  const handleHomeNavigation = () => {
    setCurrentSection('home');
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {!introComplete && <VideoIntro onComplete={handleIntroComplete} />}
      
      {showClickOverlay && (
        <ClickOverlay onClick={handleClickOverlayClick} />
      )}

      {introComplete && (
        <>
          <Navigation 
            currentSection={currentSection}
            onNavigate={handleNavigation}
            onHome={handleHomeNavigation}
            disabled={showClickOverlay}
          />

          {currentSection === 'home' && (
            <HeroSection hasNavigated={hasNavigated} />
          )}

          {currentSection === 'about' && <AboutSection />}
          {currentSection === 'gallery' && <GallerySection />}
          {currentSection === 'careers' && <CareersSection />}
          {currentSection === 'contact' && <ContactSection />}
        </>
      )}
    </div>
  );
};

export default Index;
