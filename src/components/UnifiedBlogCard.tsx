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
      className="group relative w-80 h-96 overflow-hidden rounded-2xl border border-amber-600/40 shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer bg-amber-50/10 backdrop-blur-sm hover:scale-[1.02] mx-auto"
    >
      {/* Top 75% - Featured Image */}
      <div className="relative h-3/4 w-full overflow-hidden">
        <img 
          src={blog.featured_image || `/lovable-uploads/65d62aa9-8a7a-4b54-9351-b17a50df0c2b.png`}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottom 25% - Author Info */}
      <div className="h-1/4 bg-amber-900/20 backdrop-blur-sm p-3 flex items-center justify-between">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <Avatar className="h-8 w-8 ring-1 ring-amber-600/30">
            <AvatarFallback className="bg-amber-800 text-amber-100 text-xs font-semibold">
              {blog.profiles?.name?.charAt(0) || 'A'}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="text-amber-900 font-medium text-sm truncate">
              {blog.profiles?.name || 'Anonymous'}
            </div>
            <div className="text-amber-800/70 text-xs">
              {formatTimestamp(blog.created_at, blog.read_time || 5)}
            </div>
          </div>
        </div>
        <Badge 
          variant="secondary" 
          className="bg-amber-800/20 text-amber-900 border-amber-600/30 text-xs px-2 py-1"
        >
          AadiBlogg
        </Badge>
      </div>
    </Card>
  );
}