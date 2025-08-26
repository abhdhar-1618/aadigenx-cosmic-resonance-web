import React from 'react';
import { ContactSection } from '@/components/ContactSection';
import { Link } from 'react-router-dom';

// Custom Navigation Component for ContactPage
const CustomNavigation = () => {
  const navItems = [
    { id: 'home', label: 'AadiAn', to: '/aadian' },
    { id: 'about', label: 'AadiTatva', to: '/about' },
    { id: 'naad', label: 'AadiNaad', to: '/naad' },
    { id: 'srijan', label: 'SrijanPeeth', to: '/srijan' },
    { id: 'kul', label: 'AadiKul', to: '/kul' },
    { id: 'gallery', label: 'DrisHyam', to: '/gallery' },
    { id: 'blogs', label: 'AadiPath', to: '/blogs' },
    { id: 'careers', label: 'AadiYatra', to: '/careers' },
    { id: 'contact', label: 'TatSutra', to: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-30">
      {/* Top scroll bar background */}
      <div className="w-full h-16 bg-gradient-to-r from-amber-900/40 via-amber-800/60 to-amber-900/40 backdrop-blur-sm border-b border-amber-600/30">
        <div className="w-full max-w-6xl mx-auto px-4 h-full">
          {/* Desktop Navigation */}
          <div className="hidden md:flex justify-evenly items-center h-full">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                className={`
                  px-3 py-2 text-xs lg:text-sm xl:text-base font-semibold tracking-wide transition-all duration-300 
                  text-center whitespace-nowrap rounded-lg flex-shrink-0
                  ${item.id === 'contact' 
                    ? 'text-yellow-400 bg-white/10' 
                    : 'text-white hover:text-yellow-400 hover:bg-white/10'
                  }
                `}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden relative h-full">
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-amber-900/60 to-transparent z-10 pointer-events-none" />
            <div className="flex gap-2 px-6 py-2 overflow-x-auto scrollbar-hide h-full items-center">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.to}
                  className={`
                    flex-shrink-0 px-3 py-2 text-xs font-semibold tracking-wide transition-all duration-300 
                    whitespace-nowrap rounded-lg
                    ${item.id === 'contact' 
                      ? 'text-yellow-400 bg-white/10' 
                      : 'text-white hover:text-yellow-400 hover:bg-white/10'
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-amber-900/60 to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </nav>
  );
};

const ContactPage = () => {
  return (
    <div className="min-h-screen scroll-background">
      <CustomNavigation />
      
      {/* Main Content Area - constrained within scroll design */}
      <div className="pt-16 pb-20 px-4 md:px-8">
        <div className="min-h-screen bg-amber-800/20 backdrop-blur-sm rounded-2xl border border-amber-600/30 shadow-2xl p-6 md:p-8">
          <ContactSection />
        </div>
      </div>
      
      {/* Bottom Roll Bar */}
      <div className="fixed bottom-0 w-full z-10">
        <div className="w-full h-16 bg-gradient-to-r from-amber-900/40 via-amber-800/60 to-amber-900/40 backdrop-blur-sm border-t border-amber-600/30">
          <div className="flex justify-center items-center h-full max-w-6xl mx-auto px-4">
            <div className="text-white font-bold text-lg md:text-xl">
              प्राचीनानां निनादः भविष्यस्य संरचना
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;