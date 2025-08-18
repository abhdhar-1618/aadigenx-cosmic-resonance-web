import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Heart, MessageCircle, Eye, Share2 } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface BlogViewProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  blog: any;
}

export function BlogView({ open, onOpenChange, blog }: BlogViewProps) {
  const [comments, setComments] = useState<any[]>([]);
  const [newComment, setNewComment] = useState('');
  const [isLiked, setIsLiked] = useState(false);
  const [isSubmittingComment, setIsSubmittingComment] = useState(false);
  const { profile } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (blog && open) {
      fetchComments();
      checkIfLiked();
      incrementViews();
    }
  }, [blog, open, profile]);

  const fetchComments = async () => {
    if (!blog) return;
    
    const { data } = await supabase
      .from('blog_comments')
      .select(`
        *,
        profiles (
          name,
          avatar_url
        )
      `)
      .eq('blog_id', blog.id)
      .order('created_at', { ascending: true });
    
    if (data) setComments(data);
  };

  const checkIfLiked = async () => {
    if (!profile || !blog) return;
    
    const { data } = await supabase
      .from('blog_likes')
      .select('id')
      .eq('blog_id', blog.id)
      .eq('user_id', profile.id)
      .single();
    
    setIsLiked(!!data);
  };

  const incrementViews = async () => {
    if (!blog) return;
    
    await supabase.rpc('increment_blog_views', {
      blog_id: blog.id
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

    if (isLiked) {
      await supabase
        .from('blog_likes')
        .delete()
        .eq('blog_id', blog.id)
        .eq('user_id', profile.id);
      
      await supabase
        .from('blogs')
        .update({ likes: blog.likes - 1 })
        .eq('id', blog.id);
      
      setIsLiked(false);
    } else {
      await supabase
        .from('blog_likes')
        .insert({ blog_id: blog.id, user_id: profile.id });
      
      await supabase
        .from('blogs')
        .update({ likes: blog.likes + 1 })
        .eq('id', blog.id);
      
      setIsLiked(true);
    }
  };

  const handleComment = async () => {
    if (!profile) {
      toast({
        title: 'Sign in required',
        description: 'Please sign in to comment.',
        variant: 'destructive',
      });
      return;
    }

    if (!newComment.trim()) return;

    setIsSubmittingComment(true);

    const { error } = await supabase
      .from('blog_comments')
      .insert({
        blog_id: blog.id,
        author_id: profile.id,
        content: newComment.trim(),
      });

    if (error) {
      toast({
        title: 'Error posting comment',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      setNewComment('');
      fetchComments();
      toast({
        title: 'Comment posted',
        description: 'Your comment has been added.',
      });
    }

    setIsSubmittingComment(false);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blog.title,
        text: blog.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: 'Link copied',
        description: 'Blog link has been copied to clipboard.',
      });
    }
  };

  if (!blog) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
        <DialogHeader className="space-y-4">
          {blog.featured_image && (
            <div className="aspect-video overflow-hidden rounded-lg">
              <img
                src={blog.featured_image}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
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
            
            <h1 className="text-3xl font-bold">{blog.title}</h1>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>
                    {blog.profiles?.name?.charAt(0) || 'A'}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{blog.profiles?.name || 'Anonymous'}</p>
                  <p className="text-sm text-muted-foreground">
                    {formatDate(blog.created_at)}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" onClick={handleLike}>
                  <Heart className={`h-4 w-4 mr-1 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                  {blog.likes || 0}
                </Button>
                
                <Button variant="ghost" size="sm">
                  <Eye className="h-4 w-4 mr-1" />
                  {blog.views || 0}
                </Button>
                
                <Button variant="ghost" size="sm" onClick={handleShare}>
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {blog.tags.map((tag: string) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="prose max-w-none">
            {blog.content.split('\n').map((paragraph: string, index: number) => (
              paragraph.trim() && (
                <p key={index} className="mb-4 leading-relaxed">
                  {paragraph}
                </p>
              )
            ))}
          </div>
          
          <div className="border-t pt-6 space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              Comments ({comments.length})
            </h3>
            
            {profile && (
              <div className="space-y-2">
                <Textarea
                  placeholder="Write a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  rows={3}
                />
                <Button 
                  onClick={handleComment} 
                  disabled={isSubmittingComment || !newComment.trim()}
                  size="sm"
                >
                  {isSubmittingComment ? 'Posting...' : 'Post Comment'}
                </Button>
              </div>
            )}
            
            <div className="space-y-4">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-3 p-4 bg-muted/50 rounded-lg">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      {comment.profiles?.name?.charAt(0) || 'A'}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium text-sm">{comment.profiles?.name || 'Anonymous'}</span>
                      <span className="text-xs text-muted-foreground">
                        {formatDate(comment.created_at)}
                      </span>
                    </div>
                    <p className="text-sm">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}