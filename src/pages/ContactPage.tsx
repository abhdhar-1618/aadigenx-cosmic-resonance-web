import React from 'react';
import { AppLayout } from '@/components/AppLayout';
import { ContactSection } from '@/components/ContactSection';

const ContactPage = () => {
  return (
    <AppLayout currentSection="contact">
      <ContactSection />
    </AppLayout>
  );
};

export default ContactPage;