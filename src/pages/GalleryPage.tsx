import React from 'react';
import { Navigation } from '@/components/Navigation';
import { GallerySection } from '@/components/GallerySection';

const GalleryPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation currentSection="gallery" />
      <GallerySection />
    </div>
  );
};

export default GalleryPage;