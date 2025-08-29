import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import DOMPurify from 'dompurify';

interface BlogArticleViewProps {
  blog: any;
  onBack: () => void;
}

export function BlogArticleView({ blog, onBack }: BlogArticleViewProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getSourcePlatform = (sourceUrl?: string) => {
    if (!sourceUrl) return 'AadiBlogg';
    
    if (sourceUrl.includes('facebook.com')) return 'Facebook';
    if (sourceUrl.includes('linkedin.com')) return 'LinkedIn';
    if (sourceUrl.includes('twitter.com') || sourceUrl.includes('x.com')) return 'X';
    if (sourceUrl.includes('medium.com')) return 'Medium';
    return 'Source';
  };

  const handleReadSource = () => {
    if (blog.source_url) {
      window.open(blog.source_url, '_blank');
    }
  };

  return (
    <div className="max-w-3xl mx-auto overflow-hidden rounded-xl bg-yellow-100/90 shadow-2xl">
      {/* Top Area - Full Image */}
      <div className="w-full h-80 overflow-hidden">
        <img 
          src={blog.featured_image || `/lovable-uploads/65d62aa9-8a7a-4b54-9351-b17a50df0c2b.png`}
          alt={blog.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Below Image - Details Block */}
      <div className="p-6 space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-amber-900 leading-tight">
          {blog.title}
        </h1>
        
        <div className="flex items-center justify-between flex-wrap gap-2 text-amber-800">
          <div className="flex items-center gap-1 text-sm">
            <span className="font-medium">{blog.profiles?.name || 'Anonymous'}</span>
            <span>•</span>
            <span>{formatDate(blog.created_at)}</span>
            <span>•</span>
            <span className="font-medium">{getSourcePlatform(blog.source_url)}</span>
          </div>
        </div>

        {/* Article Content */}
        {blog.content && (
          <div className="prose prose-amber max-w-none mt-6">
            <div 
              className="text-amber-900/90 text-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }}
            />
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-6 border-t border-amber-600/20">
          <Button 
            onClick={onBack}
            variant="outline"
            className="bg-amber-50/20 border-amber-600/40 text-amber-900 hover:bg-amber-100/30"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back
          </Button>
          
          <Button 
            onClick={handleReadSource}
            className="bg-amber-800 hover:bg-amber-900 text-white"
            disabled={!blog.source_url}
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Read Source
          </Button>
        </div>
      </div>
    </div>
  );
}