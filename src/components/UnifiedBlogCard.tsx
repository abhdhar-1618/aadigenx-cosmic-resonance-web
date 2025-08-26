import { Card } from '@/components/ui/card';

interface UnifiedBlogCardProps {
  blog: any;
  onView?: (blog: any) => void;
}

export function UnifiedBlogCard({ blog, onView }: UnifiedBlogCardProps) {
  const formatTimestamp = (dateString: string) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return date.toLocaleDateString('en-US', options);
  };

  const getSourcePlatform = (sourceUrl?: string) => {
    if (!sourceUrl) return 'AadiBlogg';
    
    if (sourceUrl.includes('facebook.com')) return 'Facebook';
    if (sourceUrl.includes('linkedin.com')) return 'LinkedIn';
    if (sourceUrl.includes('twitter.com') || sourceUrl.includes('x.com')) return 'X';
    if (sourceUrl.includes('medium.com')) return 'Medium';
    return 'Source';
  };

  const handleCardClick = () => {
    onView?.(blog);
  };

  return (
    <Card 
      onClick={handleCardClick}
      className="w-full h-80 sm:h-96 md:h-80 lg:h-96 overflow-hidden rounded-2xl border border-amber-600/40 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer bg-white/10 backdrop-blur-sm hover:scale-[1.02] flex flex-col"
    >
      {/* Top 75% - Image Only */}
      <div className="flex-none h-3/4 w-full overflow-hidden">
        <img 
          src={blog.featured_image || `/lovable-uploads/65d62aa9-8a7a-4b54-9351-b17a50df0c2b.png`}
          alt={blog.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Bottom 25% - Black Meta Section */}
      <div className="flex-none h-1/4 bg-black text-white p-3 sm:p-4 flex flex-col justify-between">
        <h3 className="font-bold text-xs sm:text-sm leading-tight line-clamp-2 mb-1 sm:mb-2">
          {blog.title}
        </h3>
        <div className="flex items-center justify-between text-xs">
          <div className="text-gray-300 truncate flex-1 mr-2">
            <span className="font-medium">{blog.profiles?.name || 'Anonymous'}</span>
            <span className="mx-1 hidden sm:inline">•</span>
            <span className="hidden sm:inline">{formatTimestamp(blog.created_at)}</span>
          </div>
          <button className="text-amber-400 hover:text-amber-300 font-medium transition-colors flex-shrink-0 text-xs sm:text-sm">
            Read More
          </button>
        </div>
      </div>
    </Card>
  );
}