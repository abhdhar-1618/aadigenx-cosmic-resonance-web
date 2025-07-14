import React from 'react';
import { Navigation } from '@/components/Navigation';
import { GallerySection } from '@/components/GallerySection';

const GalleryPage = () => {
  return (
    <div className="min-h-screen scroll-background">
      <Navigation currentSection="gallery" />
      <GallerySection />
    </div>
  );
};

export default GalleryPage;