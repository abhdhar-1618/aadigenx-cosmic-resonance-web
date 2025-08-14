import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, Eye, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function RecentBlogCard() {
  const navigate = useNavigate();
  
  // Static content from the provided image
  const blogContent = {
    title: "Awakening the Divine Code: When Robotics Meets Ancient Wisdom",
    excerpt: "Awakening the Divine Code: When Robotics Meets Ancient Wisdom",
    author: "Dipanwita DasChakrabarty",
    date: "Jul 29, 2025",
    likes: 0,
    views: 6,
    readTime: 5,
    category: "LinkedIn",
    featuredImage: "/lovable-uploads/baa7114e-362a-4b74-abf4-0d52aab77334.png"
  };

  const formatDate = (dateString: string) => {
    return dateString;
  };

  const handleCardClick = () => {
    navigate('/blog/article');
  };

  return (
    <Card 
      onClick={handleCardClick}
      className="group relative w-full max-w-md overflow-hidden rounded-2xl border border-amber-500/20 shadow-2xl shadow-amber-500/10 hover:shadow-amber-500/30 transition-all duration-500 cursor-pointer bg-black/90 backdrop-blur-md hover:scale-[1.02] hover:border-amber-400/50 animate-fade-in"
    >
      {/* Top Image Section - No text overlays */}
      <div 
        className="relative h-64 overflow-hidden"
        style={{
          backgroundImage: `url(${blogContent.featuredImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Black transparent overlay for clean separation */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
      </div>

      {/* Bottom Black Section - Clean content area */}
      <div className="bg-black p-6 space-y-4">
        {/* Source badge and read time */}
        <div className="flex items-center justify-between mb-3">
          <Badge 
            variant="secondary" 
            className="bg-blue-600/20 text-blue-200 border-blue-400/30 backdrop-blur-sm px-3 py-1 text-xs font-medium"
          >
            {blogContent.category}
          </Badge>
          <div className="text-amber-200/80 text-xs font-medium">
            {blogContent.readTime} min read
          </div>
        </div>

        {/* Blog Title with gradient effect */}
        <h2 className="text-xl font-bold leading-tight bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent mb-4">
          {blogContent.title}
        </h2>

        {/* Author section with timestamp */}
        <div className="flex items-center gap-3 pt-2">
          <Avatar className="h-12 w-12 ring-2 ring-amber-400/30">
            <AvatarImage src="/lovable-uploads/author-profile.jpg" alt="Dipanwita DasChakrabarty" />
            <AvatarFallback className="bg-gradient-to-br from-amber-600 to-amber-800 text-white font-semibold">
              D
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="text-white font-medium text-sm mb-1">
              {blogContent.author}
            </div>
            <div className="flex items-center gap-1 text-amber-200/70 text-xs">
              <Calendar className="h-3 w-3" />
              <span>{formatDate(blogContent.date)}</span>
            </div>
          </div>
        </div>

        {/* Engagement metrics */}
        <div className="flex items-center gap-4 pt-3 border-t border-amber-400/10">
          <div className="flex items-center gap-1 text-amber-200/80">
            <Heart className="h-4 w-4" />
            <span className="text-xs">{blogContent.likes}</span>
          </div>
          <div className="flex items-center gap-1 text-amber-200/80">
            <Eye className="h-4 w-4" />
            <span className="text-xs">{blogContent.views}</span>
          </div>
        </div>
      </div>

      {/* Enhanced border glow effect */}
      <div className="absolute inset-0 rounded-2xl border border-amber-400/20 pointer-events-none group-hover:border-amber-400/50 group-hover:shadow-2xl group-hover:shadow-amber-500/20 transition-all duration-500"></div>
    </Card>
  );
}