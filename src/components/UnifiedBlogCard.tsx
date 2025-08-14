import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

interface UnifiedBlogCardProps {
  blog: any;
  onView?: (blog: any) => void;
}

export function UnifiedBlogCard({ blog, onView }: UnifiedBlogCardProps) {
  const formatTimestamp = (dateString: string, readTime: number) => {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    };
    return `${date.toLocaleDateString('en-US', options)} · ${readTime} min read`;
  };

  const handleCardClick = () => {
    onView?.(blog);
  };

  return (
    <Card 
      onClick={handleCardClick}
      className="group relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/20 hover:shadow-black/40 transition-all duration-500 cursor-pointer bg-black/95 backdrop-blur-md hover:scale-[1.02] hover:border-white/30 animate-fade-in"
    >
      {/* Top Image Section - Full width with overlay, no text */}
      <div 
        className="relative h-64 w-full overflow-hidden"
        style={{
          backgroundImage: blog.featured_image 
            ? `url(${blog.featured_image})` 
            : `url(/lovable-uploads/vimaana shastra image card.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Black transparent overlay for clean separation */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
      </div>

      {/* Bottom Section - Solid black with all content */}
      <div className="bg-black p-6 space-y-4">
        {/* LinkedIn-style source badge */}
        <div className="mb-3">
          <Badge 
            variant="secondary" 
            className="bg-primary/20 text-primary border-primary/30 backdrop-blur-sm px-3 py-1 text-xs font-medium"
          >
            AadiBlogg
          </Badge>
        </div>

        {/* Blog Title with gradient effect */}
        <h2 className="text-xl font-bold leading-tight bg-gradient-to-r from-white via-gray-100 to-gray-200 bg-clip-text text-transparent line-clamp-2">
          {blog.title}
        </h2>

        {/* Author section with profile and timestamp */}
        <div className="flex items-center gap-3 pt-2">
          <Avatar className="h-12 w-12 ring-2 ring-primary/30">
            <AvatarFallback className="bg-gradient-to-br from-primary/60 to-primary/80 text-black font-semibold">
              {blog.profiles?.name?.charAt(0) || 'A'}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="text-white font-medium text-sm mb-1">
              {blog.profiles?.name || 'Anonymous'}
            </div>
            <div className="text-primary/70 text-xs">
              {formatTimestamp(blog.created_at, blog.read_time || 5)}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced border glow effect for animations */}
      <div className="absolute inset-0 rounded-2xl border border-primary/20 pointer-events-none group-hover:border-primary/50 group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500"></div>
    </Card>
  );
}