import React from 'react';
import { AppLayout } from '@/components/AppLayout';
import { BlogsSection } from '@/components/BlogsSection';
import { AuthProvider } from '@/hooks/useAuth';

const BlogsPage = () => {
  return (
    <AuthProvider>
      <AppLayout currentSection="blogs">
        <div className="p-4 md:p-8">
          {/* Large transparent container for all content */}
          <div className="min-h-full bg-amber-800/20 backdrop-blur-sm rounded-2xl border border-amber-600/30 p-6 md:p-8 shadow-2xl">
            <BlogsSection />
          </div>
        </div>
      </AppLayout>
    </AuthProvider>
  );
};

export default BlogsPage;