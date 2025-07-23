import React from 'react';
import { Navigation } from '@/components/Navigation';
import { BlogsSection } from '@/components/BlogsSection';

const BlogsPage = () => {
  return (
    <div className="min-h-screen scroll-background">
      <Navigation currentSection="blogs" />
      
      {/* Main Content Area - constrained between top and bottom bars */}
      <div className="fixed inset-0 pt-16 pb-16 overflow-hidden">
        <div className="h-full overflow-y-auto custom-scrollbar">
          <BlogsSection />
        </div>
      </div>
      
      {/* Bottom Roll Bar Text */}
      <div className="fixed bottom-0 left-0 right-0 bg-transparent z-10">
        <div className="flex justify-center items-center py-3 px-4">
          <div className="text-white font-bold" style={{ fontSize: '1.5625rem' }}>
            प्राचीनानां निनादः भविष्यस्य संरचना
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;