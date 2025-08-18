import React from 'react';
import { AppLayout } from '@/components/AppLayout';
import { AboutSection } from '@/components/AboutSection';

const AboutPage = () => {
  return (
    <AppLayout currentSection="about">
      <AboutSection />
    </AppLayout>
  );
};

export default AboutPage;