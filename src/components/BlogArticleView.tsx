import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ArrowLeft, ExternalLink, Heart, Eye, Share2 } from 'lucide-react';

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

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blog.title,
          text: blog.excerpt || 'Check out this article from AadiBlogg',
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleReadSource = () => {
    // Open source in new tab - could be enhanced to link to actual source
    window.open('#', '_blank');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Back Button */}
      <Button 
        onClick={onBack}
        variant="outline"
        className="mb-4 bg-amber-50/20 border-amber-600/40 text-amber-900 hover:bg-amber-100/30"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Blogs
      </Button>

      {/* Featured Image */}
      <div className="relative w-full h-80 overflow-hidden rounded-2xl border border-amber-600/30">
        <img 
          src={blog.featured_image || `/lovable-uploads/65d62aa9-8a7a-4b54-9351-b17a50df0c2b.png`}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Header */}
      <div className="space-y-4">
        {/* Category and Platform Badge */}
        <div className="flex flex-wrap gap-2">
          {blog.blog_categories?.name && (
            <Badge 
              variant="secondary" 
              className="bg-amber-800/20 text-amber-900 border-amber-600/30"
            >
              {blog.blog_categories.name}
            </Badge>
          )}
          <Badge 
            variant="outline" 
            className="bg-amber-900/10 text-amber-900 border-amber-600/40"
          >
            AadiBlogg
          </Badge>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-amber-900 leading-tight">
          {blog.title}
        </h1>

        {/* Author Info and Metadata */}
        <div className="flex items-center justify-between flex-wrap gap-4 py-4 border-y border-amber-600/20">
          <div className="flex items-center gap-3">
            <Avatar className="h-12 w-12 ring-2 ring-amber-600/30">
              <AvatarFallback className="bg-amber-800 text-amber-100 font-semibold">
                {blog.profiles?.name?.charAt(0) || 'A'}
              </AvatarFallback>
            </Avatar>
            <div>
              <div className="text-amber-900 font-medium">
                {blog.profiles?.name || 'Anonymous'}
              </div>
              <div className="text-amber-800/70 text-sm">
                {formatDate(blog.created_at)} • {blog.read_time || 5} min read
              </div>
            </div>
          </div>
          
          {/* Engagement Stats */}
          <div className="flex items-center gap-4 text-amber-800/70">
            <div className="flex items-center gap-1">
              <Heart className="h-4 w-4" />
              <span className="text-sm">{blog.likes || 0}</span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span className="text-sm">{blog.views || 0}</span>
            </div>
          </div>
        </div>

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {blog.tags.map((tag: string, index: number) => (
              <Badge 
                key={index}
                variant="outline"
                className="bg-amber-50/20 text-amber-800 border-amber-600/30 text-xs"
              >
                #{tag}
              </Badge>
            ))}
          </div>
        )}
      </div>

      {/* Article Content */}
      <div className="prose prose-amber max-w-none">
        <div className="text-amber-900/90 text-lg leading-relaxed whitespace-pre-wrap">
          {blog.content || blog.excerpt || 'Content not available.'}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 pt-6 border-t border-amber-600/20">
        <Button 
          onClick={handleReadSource}
          className="bg-amber-800 hover:bg-amber-900 text-white"
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          Read Source
        </Button>
        
        <Button 
          onClick={onBack}
          variant="outline"
          className="bg-amber-50/20 border-amber-600/40 text-amber-900 hover:bg-amber-100/30"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blogs
        </Button>
        
        <Button 
          onClick={handleShare}
          variant="outline"
          className="bg-amber-50/20 border-amber-600/40 text-amber-900 hover:bg-amber-100/30"
        >
          <Share2 className="h-4 w-4 mr-2" />
          Share
        </Button>
      </div>
    </div>
  );
}