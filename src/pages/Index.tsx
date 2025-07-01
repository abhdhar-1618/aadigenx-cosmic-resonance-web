
import React, { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { VideoIntro } from '@/components/VideoIntro';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { GallerySection } from '@/components/GallerySection';
import { BlogsSection } from '@/components/BlogsSection';
import { CareersSection } from '@/components/CareersSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [introComplete, setIntroComplete] = useState(false);
  const [hasNavigated, setHasNavigated] = useState(false);
  const [triggerLogoSpin, setTriggerLogoSpin] = useState(false);
  const [navigationEnabled, setNavigationEnabled] = useState(false);
  const [showHeroSection, setShowHeroSection] = useState(false);

  // Debug logging
  useEffect(() => {
    console.log('Index component state:', {
      currentSection,
      introComplete,
      hasNavigated,
      triggerLogoSpin,
      navigationEnabled,
      showHeroSection
    });
  }, [currentSection, introComplete, hasNavigated, triggerLogoSpin, navigationEnabled, showHeroSection]);

  const handleIntroComplete = () => {
    console.log('Intro sequence completed - enabling navigation');
    setIntroComplete(true);
    setNavigationEnabled(true);
  };

  const handleAudioStart = () => {
    console.log('Audio started, showing hero section and triggering logo spin');
    setShowHeroSection(true);
    setTriggerLogoSpin(true);
  };

  const handleNavigation = (section: string) => {
    console.log('Navigating to section:', section);
    setCurrentSection(section);
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
      
      {/* Show HeroSection as soon as audio starts, even before intro is complete */}
      {showHeroSection && (
        <>
          <Navigation 
            currentSection={currentSection} 
            onNavigate={handleNavigation}
            onHome={handleHomeNavigation}
            disabled={!navigationEnabled}
          />
          
          {currentSection === 'home' && (
            <HeroSection 
              hasNavigated={hasNavigated} 
              triggerLogoSpin={triggerLogoSpin}
            />
          )}
          {currentSection === 'about' && <AboutSection />}
          {currentSection === 'gallery' && <GallerySection />}
          {currentSection === 'blogs' && <BlogsSection />}
          {currentSection === 'careers' && <CareersSection />}
          {currentSection === 'contact' && <ContactSection />}
        </>
      )}
    </div>
  );
};

export default Index;
