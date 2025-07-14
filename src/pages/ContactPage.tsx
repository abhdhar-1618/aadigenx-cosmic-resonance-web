import React from 'react';
import { Navigation } from '@/components/Navigation';
import { ContactSection } from '@/components/ContactSection';

const ContactPage = () => {
  return (
    <div className="min-h-screen scroll-background relative">
      <Navigation currentSection="contact" />
      
      {/* Main Content Area - constrained between top and bottom bars */}
      <div className="fixed inset-0 pt-16 overflow-hidden">
        <div className="h-full overflow-y-auto custom-scrollbar">
          <ContactSection />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;