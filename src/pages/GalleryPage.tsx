import React from 'react';
import { HorizontalNavigation } from '@/components/HorizontalNavigation';
import { GallerySection } from '@/components/GallerySection';

const GalleryPage = () => {
  return (
    <div className="min-h-screen scroll-background">
      <HorizontalNavigation currentSection="gallery" />
      <GallerySection />
    </div>
  );
};

export default GalleryPage;