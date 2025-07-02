import React from 'react';
import { Navigation } from '@/components/Navigation';
import { ContactSection } from '@/components/ContactSection';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation currentSection="contact" />
      <ContactSection />
    </div>
  );
};

export default ContactPage;