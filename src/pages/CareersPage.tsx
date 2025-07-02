import React from 'react';
import { Navigation } from '@/components/Navigation';
import { CareersSection } from '@/components/CareersSection';

const CareersPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation currentSection="careers" />
      <CareersSection />
    </div>
  );
};

export default CareersPage;