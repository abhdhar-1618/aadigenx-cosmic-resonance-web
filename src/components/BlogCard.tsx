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
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
      <div onClick={() => onView?.(blog)}>
        {blog.featured_image && (
          <div className="aspect-video overflow-hidden rounded-t-lg">
            <img
              src={blog.featured_image}
              alt={blog.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        
        <CardContent className="p-6">
          <div className="flex items-center gap-2 mb-3">
            {blog.blog_categories && (
              <Badge 
                variant="secondary" 
                style={{ backgroundColor: `${blog.blog_categories.color}20`, color: blog.blog_categories.color }}
              >
                {blog.blog_categories.name}
              </Badge>
            )}
            <span className="text-sm text-muted-foreground">
              {blog.read_time} min read
            </span>
          </div>
          
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{blog.title}</h3>
          
          {blog.excerpt && (
            <p className="text-muted-foreground mb-4 line-clamp-3">{blog.excerpt}</p>
          )}
          
          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mb-4">
              {blog.tags.slice(0, 3).map((tag: string) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {blog.tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{blog.tags.length - 3} more
                </Badge>
              )}
            </div>
          )}
        </CardContent>
      </div>
      
      <CardFooter className="px-6 pb-6 pt-0">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback>
                  {blog.profiles?.name?.charAt(0) || 'A'}
                </AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <span className="text-sm font-medium">{blog.profiles?.name || 'Anonymous'}</span>
                <span className="text-xs text-muted-foreground">
                  {formatDate(blog.created_at)}
                </span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={handleLike}>
              <Heart className="h-4 w-4 mr-1" />
              {blog.likes || 0}
            </Button>
            
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4 mr-1" />
              {blog.views || 0}
            </Button>
            
            {isAuthor && (
              <>
                <Button variant="ghost" size="sm" onClick={() => onEdit?.(blog)}>
                  <Edit className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={() => onDelete?.(blog.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}