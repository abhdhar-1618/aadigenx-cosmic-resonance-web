import React from 'react';
import { HorizontalNavigation } from '@/components/HorizontalNavigation';
import { CareersSection } from '@/components/CareersSection';

const CareersPage = () => {
  return (
    <div className="min-h-screen scroll-background">
      <HorizontalNavigation currentSection="careers" />
      <CareersSection />
    </div>
  );
};

export default CareersPage;