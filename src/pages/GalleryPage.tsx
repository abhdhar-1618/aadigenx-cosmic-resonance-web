import React from 'react';
import { AppLayout } from '@/components/AppLayout';
import { GallerySection } from '@/components/GallerySection';

const GalleryPage = () => {
  return (
    <AppLayout currentSection="gallery">
      <GallerySection />
    </AppLayout>
  );
};

export default GalleryPage;