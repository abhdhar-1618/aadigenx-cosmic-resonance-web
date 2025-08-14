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
      className="group relative w-full max-w-sm overflow-hidden rounded-2xl border border-amber-500/20 shadow-2xl shadow-amber-500/10 hover:shadow-amber-500/20 transition-all duration-500 cursor-pointer bg-black/80 backdrop-blur-md hover:scale-105 hover:border-amber-400/40 animate-fade-in"
    >
      {/* Top Image Section */}
      <div 
        className="relative h-64 overflow-hidden"
        style={{
          backgroundImage: `url(${blogContent.featuredImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Soft glass overlay on image */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        
        {/* Badge positioned on image */}
        <div className="absolute top-4 left-4">
          <Badge 
            variant="secondary" 
            className="bg-amber-500/20 text-amber-100 border-amber-400/30 backdrop-blur-sm px-3 py-1 text-xs font-medium"
          >
            {blogContent.category}
          </Badge>
        </div>

        {/* Read time on image */}
        <div className="absolute top-4 right-4 text-amber-200/80 text-xs font-medium bg-black/30 backdrop-blur-sm px-2 py-1 rounded">
          {blogContent.readTime} min read
        </div>
      </div>

      {/* Bottom Black Section */}
      <div className="bg-black/90 backdrop-blur-sm p-6 space-y-4">
        {/* Generated Title with gradient effect */}
        <h2 className="text-xl font-bold leading-tight bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent">
          {blogContent.title}
        </h2>
        
        {/* Excerpt */}
        <p className="text-amber-100/90 text-sm leading-relaxed line-clamp-2">
          {blogContent.excerpt}
        </p>

        {/* Author section */}
        <div className="flex items-center gap-3 pt-2">
          <Avatar className="h-10 w-10 ring-2 ring-amber-400/30">
            <AvatarImage src="/lovable-uploads/author-profile.jpg" alt="Dipanwita DasChakrabarty" />
            <AvatarFallback className="bg-gradient-to-br from-amber-600 to-amber-800 text-white font-semibold">
              D
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="text-white font-medium text-sm">
              {blogContent.author}
            </div>
            <div className="flex items-center gap-1 text-amber-200/70 text-xs">
              <Calendar className="h-3 w-3" />
              {formatDate(blogContent.date)}
            </div>
          </div>
        </div>

        {/* Engagement metrics */}
        <div className="flex items-center gap-4 pt-2">
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

      {/* Subtle border glow effect */}
      <div className="absolute inset-0 rounded-2xl border border-amber-400/20 pointer-events-none group-hover:border-amber-400/40 transition-colors duration-500"></div>
    </Card>
  );
}