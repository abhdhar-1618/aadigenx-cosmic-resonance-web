import React from 'react';
import { Navigation } from '@/components/Navigation';
import { AboutSection } from '@/components/AboutSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation currentSection="about" />
      <AboutSection />
    </div>
  );
};

export default AboutPage;