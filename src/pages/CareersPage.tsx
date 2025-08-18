import React from 'react';
import { AppLayout } from '@/components/AppLayout';
import { CareersSection } from '@/components/CareersSection';

const CareersPage = () => {
  return (
    <AppLayout currentSection="careers">
      <CareersSection />
    </AppLayout>
  );
};

export default CareersPage;