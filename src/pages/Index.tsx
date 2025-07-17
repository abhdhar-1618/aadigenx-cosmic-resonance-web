
import React, { useState, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { DivineTemple } from '@/components/DivineTemple';
import { AboutSection } from '@/components/AboutSection';
import { GallerySection } from '@/components/GallerySection';
import { BlogsSection } from '@/components/BlogsSection';
import { CareersSection } from '@/components/CareersSection';
import { ContactSection } from '@/components/ContactSection';

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [navigationReady, setNavigationReady] = useState(false);
  const [showSections, setShowSections] = useState(false);

  const handleNavigationReady = () => {
    console.log('Divine temple navigation ready');
    setNavigationReady(true);
    
    // Show sections after a brief delay
    setTimeout(() => {
      setShowSections(true);
    }, 1000);
  };

  const handleNavigation = (section: string) => {
    console.log('Navigating to section:', section);
    setCurrentSection(section);
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Divine Temple Landing Experience */}
      <DivineTemple onNavigationReady={handleNavigationReady} />
      
      {/* Traditional Navigation (hidden initially) */}
      {navigationReady && (
        <div className="fixed top-4 right-4 z-50 opacity-30 hover:opacity-100 transition-opacity duration-300">
          <Navigation 
            currentSection={currentSection} 
            disabled={false}
          />
        </div>
      )}
      
      {/* Content Sections - appear after temple sequence */}
      {showSections && (
        <div id="content-section" className="relative z-10">
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
