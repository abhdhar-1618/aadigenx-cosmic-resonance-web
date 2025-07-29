import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Heart, MessageCircle, Eye, Edit, Trash2 } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface BlogCardProps {
  blog: any;
  onEdit?: (blog: any) => void;
  onDelete?: (blogId: string) => void;
  onView?: (blog: any) => void;
}

export function BlogCard({ blog, onEdit, onDelete, onView }: BlogCardProps) {
  const { profile } = useAuth();
  const { toast } = useToast();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleLike = async () => {
    if (!profile) {
      toast({
        title: 'Sign in required',
        description: 'Please sign in to like this blog.',
        variant: 'destructive',
      });
      return;
    }

    // Check if already liked
    const { data: existingLike } = await supabase
      .from('blog_likes')
      .select('id')
      .eq('blog_id', blog.id)
      .eq('user_id', profile.id)
      .single();

    if (existingLike) {
      // Unlike
      await supabase
        .from('blog_likes')
        .delete()
        .eq('id', existingLike.id);
      
      await supabase
        .from('blogs')
        .update({ likes: blog.likes - 1 })
        .eq('id', blog.id);
    } else {
      // Like
      await supabase
        .from('blog_likes')
        .insert({ blog_id: blog.id, user_id: profile.id });
      
      await supabase
        .from('blogs')
        .update({ likes: blog.likes + 1 })
        .eq('id', blog.id);
    }
  };

  const isAuthor = profile && blog.profiles && profile.id === blog.profiles.id;

  return (
    <Card 
      className="group hover:shadow-lg transition-all duration-300 cursor-pointer border-white/20 text-white relative overflow-hidden h-[400px]"
      style={{
        backgroundImage: 'url(/lovable-uploads/vimaana shastra image card.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      
      {/* Content wrapper with absolute positioning */}
      <div className="relative z-10 h-full flex flex-col">
        <div onClick={() => onView?.(blog)} className="flex-1 p-6">
          {/* Category and read time at top */}
          <div className="flex items-center gap-2 mb-4">
            {blog.blog_categories && (
              <Badge 
                variant="secondary" 
                className="bg-white/20 text-white border-white/30"
              >
                {blog.blog_categories.name}
              </Badge>
            )}
            <span className="text-sm text-white/80">
              {blog.read_time} min read
            </span>
          </div>
        </div>

        {/* Bottom content area */}
        <div className="p-6 pt-0">
          <div onClick={() => onView?.(blog)} className="mb-4">
            {/* Title - prominent and clean */}
            <h3 className="text-xl font-bold mb-3 line-clamp-2 text-white">
              {blog.title}
            </h3>
            
            {/* Excerpt */}
            {blog.excerpt && (
              <p className="text-white/80 text-sm mb-3 line-clamp-2">
                {blog.excerpt}
              </p>
            )}
            
            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-1 mb-4">
                {blog.tags.slice(0, 2).map((tag: string) => (
                  <Badge key={tag} variant="outline" className="text-xs bg-white/10 text-white border-white/30">
                    {tag}
                  </Badge>
                ))}
                {blog.tags.length > 2 && (
                  <Badge variant="outline" className="text-xs bg-white/10 text-white border-white/30">
                    +{blog.tags.length - 2}
                  </Badge>
                )}
              </div>
            )}
          </div>

          {/* Footer with author and actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="bg-white/20 text-white">
                  {blog.profiles?.name?.charAt(0) || 'A'}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium text-white">
                  {blog.profiles?.name || 'Anonymous'}
                </span>
                <span className="text-xs text-white/60">
                  {formatDate(blog.created_at)}
                </span>
              </div>
            </div>
            
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="sm" onClick={handleLike} className="text-white hover:bg-white/20">
                <Heart className="h-4 w-4 mr-1" />
                <span className="text-xs">{blog.likes || 0}</span>
              </Button>
              
              <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                <Eye className="h-4 w-4 mr-1" />
                <span className="text-xs">{blog.views || 0}</span>
              </Button>
              
              {isAuthor && (
                <>
                  <Button variant="ghost" size="sm" onClick={() => onEdit?.(blog)} className="text-white hover:bg-white/20">
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => onDelete?.(blog.id)}
                    className="text-red-400 hover:bg-red-400/20"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}