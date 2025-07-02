import React from 'react';
import { Navigation } from '@/components/Navigation';
import { BlogsSection } from '@/components/BlogsSection';

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation currentSection="blogs" />
      <BlogsSection />
    </div>
  );
};

export default BlogsPage;