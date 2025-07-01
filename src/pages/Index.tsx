
import React, { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { VideoIntro } from '@/components/VideoIntro';
import { ClickOverlay } from '@/components/ClickOverlay';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { GallerySection } from '@/components/GallerySection';
import { CareersSection } from '@/components/CareersSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [showClickOverlay, setShowClickOverlay] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);
  const [hasNavigated, setHasNavigated] = useState(false);
  const [triggerLogoSpin, setTriggerLogoSpin] = useState(false);

  // Debug logging
  useEffect(() => {
    console.log('Index component state:', {
      currentSection,
      showClickOverlay,
      introComplete,
      hasNavigated,
      triggerLogoSpin
    });
  }, [currentSection, showClickOverlay, introComplete, hasNavigated, triggerLogoSpin]);

  // Force complete intro after 10 seconds as fallback
  useEffect(() => {
    if (!introComplete) {
      const timer = setTimeout(() => {
        console.log('Fallback: Force completing intro after 10 seconds');
        handleIntroComplete();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [introComplete]);

  const handleIntroComplete = () => {
    console.log('Intro completed');
    setIntroComplete(true);
    setShowClickOverlay(true);
  };

  const handleAudioStart = () => {
    console.log('Audio started, triggering logo spin');
    setTriggerLogoSpin(true);
  };

  const handleClickOverlayClick = () => {
    console.log('Click overlay clicked');
    setShowClickOverlay(false);
  };

  const handleNavigation = (section: string) => {
    console.log('Navigating to section:', section);
    setCurrentSection(section);
    setShowClickOverlay(false);
    setHasNavigated(true);
  };

  const handleHomeNavigation = () => {
    console.log('Navigating to home');
    setCurrentSection('home');
  };

  return (
    <div className="min-h-screen bg-black">
      {!introComplete && (
        <VideoIntro 
          onComplete={handleIntroComplete} 
          onAudioStart={handleAudioStart}
        />
      )}
      
      {showClickOverlay && (
        <ClickOverlay onClick={handleClickOverlayClick} />
      )}
      
      {introComplete && !showClickOverlay && (
        <>
          <Navigation 
            currentSection={currentSection} 
            onNavigate={handleNavigation} 
          />
          
          {currentSection === 'home' && (
            <HeroSection 
              hasNavigated={hasNavigated} 
              triggerLogoSpin={triggerLogoSpin}
            />
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
