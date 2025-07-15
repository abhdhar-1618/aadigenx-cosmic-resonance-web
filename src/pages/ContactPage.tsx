import React from 'react';
import { Navigation } from '@/components/Navigation';
import { ContactSection } from '@/components/ContactSection';

const ContactPage = () => {
  return (
    <div className="min-h-screen relative" style={{ backgroundColor: '#D2B48C' }}>
      <Navigation currentSection="contact" />
      
      {/* Main Content Area - constrained between top and bottom bars */}
      <div className="fixed inset-0 pt-16 pb-16 overflow-hidden">
        <div className="h-full overflow-y-auto custom-scrollbar">
          <div className="min-h-full" style={{ backgroundColor: '#D2B48C' }}>
            <ContactSection />
          </div>
        </div>
      </div>
      
      {/* Bottom Roll Bar Text */}
      <div className="fixed bottom-0 w-full bg-transparent backdrop-blur-none z-10">
        <div className="flex justify-center items-center py-1 px-2 md:py-2 md:px-4 max-w-6xl mx-auto">
          <div className="text-white font-bold text-2xl" style={{ fontSize: '1.5625rem' }}>
            प्राचीनानां निनादः भविष्यस्य संरचना
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;