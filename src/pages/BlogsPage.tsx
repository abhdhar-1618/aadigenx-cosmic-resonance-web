import React from 'react';
import { BlogsSection } from '@/components/BlogsSection';
import { AuthProvider } from '@/hooks/useAuth';
import { Link } from 'react-router-dom';

// Custom Navigation Component for BlogsPage
const CustomNavigation = () => {
  const navItems = [
    { id: 'home', label: 'AadiAn', to: '/aadian' },
    { id: 'about', label: 'AadiTatva', to: '/about' },
    { id: 'naad', label: 'AadiNaad', to: '/naad' },
    { id: 'srijan', label: 'SrijanPeeth', to: '/srijan' },
    { id: 'kul', label: 'AadiKul', to: '/kul' },
    { id: 'gallery', label: 'Drishyam', to: '/gallery' },
    { id: 'blogs', label: 'AadiPath', to: '/blogs' },
    { id: 'careers', label: 'AadiYatra', to: '/careers' },
    { id: 'contact', label: 'TatSutra', to: '/contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-transparent backdrop-blur-none z-30">
      <div className="flex justify-center items-center py-2 px-4 max-w-6xl mx-auto">
        <div className="flex gap-2 md:gap-4 justify-center items-center w-full overflow-hidden">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className={`
                px-1 md:px-2 py-1 text-xs md:text-sm lg:text-base font-semibold tracking-wide transition-all duration-300 whitespace-nowrap text-center flex-1
                ${item.id === 'blogs' 
                  ? 'text-yellow-400 bg-white/10 rounded-lg' 
                  : 'text-white hover:text-yellow-400 hover:bg-white/10 rounded-lg'
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

const BlogsPage = () => {
  return (
    <AuthProvider>
      <div className="min-h-screen scroll-background">
        <CustomNavigation />
        
        {/* Main Content Area - constrained between top and bottom bars */}
        <div className="fixed inset-0 pt-16 pb-16 overflow-hidden">
          <div className="h-full overflow-y-auto custom-scrollbar p-4 md:p-8">
            {/* Large transparent container for all content */}
            <div className="min-h-full bg-amber-800/20 backdrop-blur-sm rounded-2xl border border-amber-600/30 p-6 md:p-8 shadow-2xl">
              <BlogsSection />
            </div>
          </div>
        </div>
        
        {/* Bottom Roll Bar Text */}
        <div className="fixed bottom-0 w-full bg-transparent z-10">
          <div className="flex justify-center items-center py-2 px-2 md:py-3 md:px-4 max-w-6xl mx-auto">
            <div className="text-white font-bold text-xl" style={{ fontSize: '1.25rem' }}>
              प्राचीनानां निनादः भविष्यस्य संरचना
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
};

export default BlogsPage;