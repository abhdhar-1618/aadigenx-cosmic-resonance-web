import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, Eye, Calendar } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  featured_image: string;
  read_time: number;
  likes: number;
  views: number;
  created_at: string;
  blog_categories?: {
    name: string;
    color: string;
  };
}

export function RecentBlogCard() {
  const [recentPost, setRecentPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRecentPost();
  }, []);

  const fetchRecentPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select(`
          id,
          title,
          content,
          excerpt,
          featured_image,
          read_time,
          likes,
          views,
          created_at,
          blog_categories (
            name,
            color
          )
        `)
        .eq('status', 'published')
        .order('created_at', { ascending: false })
        .limit(1)
        .single();

      if (error) throw error;
      setRecentPost(data);
    } catch (error) {
      console.error('Error fetching recent post:', error);
    } finally {
      setLoading(false);
    }
  };

  const extractExcerpt = (content: string, excerpt?: string) => {
    if (excerpt) return excerpt;
    
    // Extract first sentence or first 100 characters
    const sentences = content.split('. ');
    if (sentences.length > 0 && sentences[0].length > 20) {
      return sentences[0] + '.';
    }
    
    return content.substring(0, 100) + '...';
  };

  const generateTitle = (originalTitle: string, content: string) => {
    // For demo purposes, we'll use the original title
    // In a real scenario, you might use AI/NLP to generate thematic titles
    return originalTitle;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  if (loading) {
    return (
      <Card className="w-full max-w-sm h-[500px] animate-pulse bg-gradient-to-br from-amber-900/20 to-amber-700/10 backdrop-blur-md border border-amber-500/20">
        <div className="h-full bg-gradient-to-t from-black/70 via-black/30 to-transparent rounded-lg"></div>
      </Card>
    );
  }

  if (!recentPost) {
    return (
      <Card className="w-full max-w-sm h-[500px] bg-gradient-to-br from-amber-900/20 to-amber-700/10 backdrop-blur-md border border-amber-500/20 flex items-center justify-center">
        <p className="text-white/70">No recent posts available</p>
      </Card>
    );
  }

  const backgroundImage = recentPost.featured_image || '/lovable-uploads/3aff6aa4-c06c-4250-8f03-e0154c31aedf.png';

  return (
    <Card 
      className="group relative w-full max-w-sm h-[500px] overflow-hidden rounded-2xl border border-amber-500/20 shadow-2xl shadow-amber-500/10 hover:shadow-amber-500/20 transition-all duration-500 cursor-pointer"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Soft glass backdrop overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[1px]"></div>
      
      {/* Additional glass effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 via-transparent to-amber-900/20"></div>
      
      {/* Content wrapper */}
      <div className="relative z-10 h-full flex flex-col p-6">
        {/* Top section with badge and read time */}
        <div className="flex items-center justify-between mb-4">
          <Badge 
            variant="secondary" 
            className="bg-amber-500/20 text-amber-100 border-amber-400/30 backdrop-blur-sm px-3 py-1 text-xs font-medium"
          >
            {recentPost.blog_categories?.name || 'Reflection'}
          </Badge>
          <div className="text-amber-200/80 text-xs font-medium">
            {recentPost.read_time} min read
          </div>
        </div>

        {/* Spacer to push content to bottom */}
        <div className="flex-1"></div>

        {/* Main content area */}
        <div className="space-y-4">
          {/* Title with gradient effect */}
          <h2 className="text-2xl font-bold leading-tight bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent">
            {generateTitle(recentPost.title, recentPost.content)}
          </h2>
          
          {/* Excerpt */}
          <p className="text-amber-100/90 text-sm leading-relaxed line-clamp-2">
            {extractExcerpt(recentPost.content, recentPost.excerpt)}
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
                Dipanwita DasChakrabarty
              </div>
              <div className="flex items-center gap-1 text-amber-200/70 text-xs">
                <Calendar className="h-3 w-3" />
                {formatDate(recentPost.created_at)}
              </div>
            </div>
          </div>

          {/* Engagement metrics */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center gap-1 text-amber-200/80">
              <Heart className="h-4 w-4" />
              <span className="text-xs">{recentPost.likes || 0}</span>
            </div>
            <div className="flex items-center gap-1 text-amber-200/80">
              <Eye className="h-4 w-4" />
              <span className="text-xs">{recentPost.views || 0}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle border glow effect */}
      <div className="absolute inset-0 rounded-2xl border border-amber-400/20 pointer-events-none group-hover:border-amber-400/40 transition-colors duration-500"></div>
    </Card>
  );
}