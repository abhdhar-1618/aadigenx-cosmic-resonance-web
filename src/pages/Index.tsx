
import React, { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { VideoIntro } from '@/components/VideoIntro';
import { ClickOverlay } from '@/components/ClickOverlay';
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
  const [showClickOverlay, setShowClickOverlay] = useState(false);
  const [triggerAudioSequence, setTriggerAudioSequence] = useState(false);
  const [navigationEnabled, setNavigationEnabled] = useState(false);
  const [showMainContent, setShowMainContent] = useState(false);
  const [isMuted, setIsMuted] = useState(() => {
    // Get volume preference from localStorage, default to false (unmuted)
    const saved = localStorage.getItem('aadigenx-volume-muted');
    return saved ? JSON.parse(saved) : false;
  });

  // Debug logging
  useEffect(() => {
    console.log('Index component state:', {
      currentSection,
      introComplete,
      hasNavigated,
      showClickOverlay,
      triggerAudioSequence,
      navigationEnabled,
      showMainContent
    });
  }, [currentSection, introComplete, hasNavigated, showClickOverlay, triggerAudioSequence, navigationEnabled, showMainContent]);

  const handleIntroComplete = () => {
    console.log('Intro sequence completed - enabling navigation');
    setIntroComplete(true);
    setNavigationEnabled(true);
  };

  const handleShowClickOverlay = () => {
    console.log('Showing click overlay and main content');
    setShowClickOverlay(true);
    setShowMainContent(true);
  };

  const handleClickOverlayStart = () => {
    console.log('Click overlay clicked - starting audio sequence');
    setShowClickOverlay(false);
    setTriggerAudioSequence(true);
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

  const handleToggleVolume = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    localStorage.setItem('aadigenx-volume-muted', JSON.stringify(newMutedState));
    console.log('Volume toggled:', newMutedState ? 'muted' : 'unmuted');
  };

  return (
    <div className="min-h-screen bg-black">
      {!introComplete && (
        <VideoIntro 
          onComplete={handleIntroComplete} 
          onShowClickOverlay={handleShowClickOverlay}
        />
      )}
      
      <ClickOverlay 
        show={showClickOverlay} 
        onStart={handleClickOverlayStart}
        isMuted={isMuted}
        onToggleVolume={handleToggleVolume}
      />
      
      {/* Show main content after intro video ends */}
      {showMainContent && (
        <div className={`transition-opacity duration-200 ${showClickOverlay ? 'opacity-100' : 'opacity-100'}`}>
          <Navigation 
            currentSection={currentSection} 
            disabled={!navigationEnabled}
          />
          
          {currentSection === 'home' && (
            <HeroSection 
              hasNavigated={hasNavigated} 
              triggerAudioSequence={triggerAudioSequence}
              isMuted={isMuted}
            />
          )}
          {currentSection === 'about' && <AboutSection />}
          {currentSection === 'gallery' && <GallerySection />}
          {currentSection === 'blogs' && <BlogsSection />}
          {currentSection === 'careers' && <CareersSection />}
          {currentSection === 'contact' && <ContactSection />}
        </div>
      )}
    </div>
  );
};

export default Index;
