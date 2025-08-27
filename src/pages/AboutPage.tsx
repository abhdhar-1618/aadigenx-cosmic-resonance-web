import React from 'react';
import { HorizontalNavigation } from '@/components/HorizontalNavigation';
import { AboutSection } from '@/components/AboutSection';

const AboutPage = () => {
  return (
    <div className="min-h-screen scroll-background">
      <HorizontalNavigation currentSection="about" />
      <AboutSection />
      
      {/* Bottom Roll Bar Text */}
      <div className="fixed bottom-0 w-full bg-transparent z-10">
        <div className="flex justify-center items-center py-2 px-2 md:py-3 md:px-4 max-w-6xl mx-auto">
          <div className="text-white font-bold text-xl" style={{ fontSize: '1.25rem' }}>
            प्राचीनानां निनादः भविष्यस्य संरचना
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;