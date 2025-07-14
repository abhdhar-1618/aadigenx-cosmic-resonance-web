import React from 'react';
import { Navigation } from '@/components/Navigation';
import { GallerySection } from '@/components/GallerySection';

const GalleryPage = () => {
  return (
    <div className="min-h-screen scroll-background">
      <Navigation currentSection="gallery" />
      
      {/* Content with proper spacing */}
      <div className="pt-20 pb-20">
        <GallerySection />
      </div>
      
      {/* Bottom Roll Bar Text */}
      <div className="fixed bottom-0 w-full bg-black/[0.02] backdrop-blur-sm z-10 border-t border-white/[0.02]">
        <div className="flex justify-center items-center py-2 px-2 md:py-3 md:px-4 max-w-6xl mx-auto">
          <div className="text-white font-bold text-xl" style={{ fontSize: '1.25rem' }}>
            प्राचीनानां निनादः भविष्यस्य संरचना
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;