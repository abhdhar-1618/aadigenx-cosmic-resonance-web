
import React from 'react';
import { Navigation } from '@/components/Navigation';
import { BlogsSection } from '@/components/BlogsSection';
import { ScrollBar } from '@/components/ScrollBar';

const BlogsPage = () => {
  return (
    <div className="min-h-screen">
      <Navigation currentSection="blogs" />
      
      {/* Main Content Area - constrained between top and bottom bars */}
      <div className="fixed inset-0 pt-16 pb-16 overflow-hidden">
        <div className="h-full overflow-y-auto custom-scrollbar">
          <BlogsSection />
        </div>
      </div>
      
      {/* Bottom Scroll Bar */}
      <ScrollBar position="bottom">
        <div className="flex justify-center items-center py-2 px-2 md:py-3 md:px-4 max-w-6xl mx-auto">
          <div className="text-amber-800 font-bold text-2xl samarkan" style={{ fontSize: '1.5625rem' }}>
            प्राचीनानां निनादः भविष्यस्य संरचना
          </div>
        </div>
      </ScrollBar>
    </div>
  );
};

export default BlogsPage;
