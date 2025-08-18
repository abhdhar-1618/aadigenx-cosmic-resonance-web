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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0 bg-black/95 backdrop-blur-xl border border-white/20 shadow-2xl animate-scale-in">
        <div className="relative h-full overflow-y-auto custom-scrollbar">
          {/* Featured Image with Gradient Overlay */}
          {blog.featured_image && (
            <div 
              className="relative h-64 w-full bg-cover bg-center"
              style={{ backgroundImage: `url(${blog.featured_image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            </div>
          )}

          {/* Soft Glass Content Container */}
          <div className="relative p-8 bg-gradient-to-br from-black/90 via-black/95 to-black/90 backdrop-blur-md">
            {/* Category Badge */}
            {blog.blog_categories && (
              <Badge 
                className="mb-4 bg-primary/20 text-primary border-primary/30 backdrop-blur-sm px-4 py-2"
                style={{ 
                  backgroundColor: `${blog.blog_categories.color}20`,
                  borderColor: `${blog.blog_categories.color}50`,
                  color: blog.blog_categories.color 
                }}
              >
                {blog.blog_categories.name}
              </Badge>
            )}

            {/* Gradient Title */}
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-gray-100 to-primary bg-clip-text text-transparent leading-tight drop-shadow-lg">
              {blog.title}
            </h1>

            {/* Author and Meta Information with Soft Shadows */}
            <div className="flex items-center justify-between mb-8 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg">
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14 ring-2 ring-primary/40 shadow-lg">
                  <AvatarFallback className="bg-gradient-to-br from-primary/60 to-primary/80 text-black font-bold text-lg">
                    {blog.profiles?.name?.charAt(0) || 'A'}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-white text-lg">
                    {blog.profiles?.name || 'Anonymous'}
                  </p>
                  <p className="text-primary/80 text-sm">
                    {formatDate(blog.created_at)} • {blog.read_time || 5} min read
                  </p>
                </div>
              </div>
              
              {/* Action Buttons with Glass Effect */}
              <div className="flex items-center gap-3">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLike}
                  className="text-white hover:bg-white/10 backdrop-blur-sm border border-white/10 shadow-md"
                >
                  <Heart className={`h-5 w-5 mr-2 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                  {blog.likes || 0}
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white hover:bg-white/10 backdrop-blur-sm border border-white/10 shadow-md"
                >
                  <Eye className="h-5 w-5 mr-2" />
                  {blog.views || 0}
                </Button>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleShare}
                  className="text-white hover:bg-white/10 backdrop-blur-sm border border-white/10 shadow-md"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Blog Content with Enhanced Typography */}
            <div className="prose prose-lg prose-invert max-w-none mb-8">
              {blog.content.split('\n').map((paragraph: string, index: number) => (
                paragraph.trim() && (
                  <p key={index} className="mb-6 leading-relaxed text-gray-200 text-lg">
                    {paragraph}
                  </p>
                )
              ))}
            </div>

            {/* Tags with Glass Effect */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {blog.tags.map((tag: string) => (
                  <Badge 
                    key={tag} 
                    variant="outline" 
                    className="bg-white/10 text-white border-white/20 backdrop-blur-sm shadow-md hover:bg-white/20 transition-all duration-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            )}

            {/* Comments Section with Glass Container */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 shadow-lg">
              <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent flex items-center gap-2">
                <MessageCircle className="h-6 w-6 text-primary" />
                Comments ({comments.length})
              </h3>
              
              {profile && (
                <div className="mb-6 space-y-3">
                  <Textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Share your thoughts..."
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 backdrop-blur-sm resize-none"
                    rows={3}
                  />
                  <Button 
                    onClick={handleComment} 
                    disabled={isSubmittingComment || !newComment.trim()}
                    className="bg-primary hover:bg-primary/90 text-black font-semibold shadow-lg"
                  >
                    {isSubmittingComment ? 'Posting...' : 'Post Comment'}
                  </Button>
                </div>
              )}

              {/* Comments List */}
              <div className="space-y-4">
                {comments.map((comment) => (
                  <div key={comment.id} className="bg-white/5 rounded-lg p-4 border border-white/10 backdrop-blur-sm shadow-md">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10 ring-1 ring-white/20">
                        <AvatarFallback className="bg-gradient-to-br from-primary/40 to-primary/60 text-black text-sm">
                          {comment.profiles?.name?.charAt(0) || 'A'}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold text-white text-sm">
                            {comment.profiles?.name || 'Anonymous'}
                          </span>
                          <span className="text-primary/70 text-xs">
                            {formatDate(comment.created_at)}
                          </span>
                        </div>
                        <p className="text-gray-200 text-sm leading-relaxed">
                          {comment.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {!profile && (
                <p className="text-primary/80 text-sm mt-4 text-center">
                  Sign in to leave a comment
                </p>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}