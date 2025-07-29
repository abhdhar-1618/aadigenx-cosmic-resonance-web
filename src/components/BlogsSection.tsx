import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Plus, Search, Filter, User, LogOut, Settings, PenTool } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { AuthModal } from '@/components/AuthModal';
import { BlogEditor } from '@/components/BlogEditor';
import { BlogView } from '@/components/BlogView';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export const BlogsSection = () => {
  const { user, profile, loading: authLoading, signOut } = useAuth();
  const { toast } = useToast();
  
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [editorOpen, setEditorOpen] = useState(false);
  const [viewBlog, setViewBlog] = useState(null);
  const [editingBlog, setEditingBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('blogs')
        .select(`
          *,
          profiles (
            name,
            avatar_url
          )
        `)
        .eq('status', 'published')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      toast({
        title: "Error",
        description: "Failed to fetch blogs",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCreateBlog = () => {
    setEditingBlog(null);
    setEditorOpen(true);
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }).sort((a, b) => {
    switch (sortBy) {
      case 'oldest':
        return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
      case 'popular':
        return (b.likes || 0) - (a.likes || 0);
      case 'views':
        return (b.views || 0) - (a.views || 0);
      default:
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    }
  });

  if (authLoading || loading) {
    return <div className="min-h-full flex items-center justify-center text-white text-lg">Loading...</div>;
  }

  return (
    <div className="min-h-full py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg">
            AadiVaani – Sonic Chronicles of AadiGenix
          </h1>
          <p className="text-lg text-white/80 italic tracking-wide">
            Echoes of Thought | Insights with Soul | Where Dharma Meets Data
          </p>

          <div className="flex items-center justify-center gap-4 mb-8">
            {user ? (
              <>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>{profile?.name?.charAt(0) || 'U'}</AvatarFallback>
                  </Avatar>
                  <span className="text-white font-medium">{profile?.name || 'User'}</span>
                </div>
                <Button onClick={handleCreateBlog} className="bg-primary hover:bg-primary/90">
                  <Plus className="h-4 w-4 mr-2" /> Create Blog
                </Button>
                <Button variant="outline" onClick={() => setProfileModalOpen(true)} className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <Settings className="h-4 w-4 mr-2" /> Profile
                </Button>
                <Button variant="outline" onClick={signOut} className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                  <LogOut className="h-4 w-4 mr-2" /> Sign Out
                </Button>
              </>
            ) : (
              <Button onClick={() => setAuthModalOpen(true)} className="bg-primary hover:bg-primary/90">
                <User className="h-4 w-4 mr-2" /> Sign In to Create Blogs
              </Button>
            )}
          </div>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBlogs.map((blog) => (
            <Card key={blog.id} className="overflow-hidden rounded-xl shadow-lg bg-white/10 backdrop-blur border border-white/20">
              <img src={blog.image_url || '/default-blog.jpg'} alt={blog.title} className="w-full h-48 object-cover" />
              <CardContent className="p-4">
                <h2 className="text-xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 bg-clip-text text-transparent mb-2">
                  {blog.title}
                </h2>
                <p className="text-white/80 text-sm line-clamp-3 mb-3">{blog.excerpt}</p>
                <div className="flex items-center gap-3">
                  <Avatar className="h-8 w-8">
                    <img src={blog.profiles?.avatar_url || ''} alt={blog.profiles?.name || 'User'} />
                    <AvatarFallback>{blog.profiles?.name?.charAt(0) || 'U'}</AvatarFallback>
                  </Avatar>
                  <span className="text-white text-sm">{blog.profiles?.name || 'Anonymous'}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Modals */}
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
      
      <BlogEditor 
        open={editorOpen} 
        onOpenChange={setEditorOpen}
        blog={editingBlog}
        onSave={fetchBlogs}
      />

      {viewBlog && (
        <BlogView 
          open={!!viewBlog} 
          onOpenChange={() => setViewBlog(null)}
          blog={viewBlog}
        />
      )}

      {/* Profile Modal */}
      <Dialog open={profileModalOpen} onOpenChange={setProfileModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Profile Settings</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input 
                id="name" 
                value={profile?.name || ''} 
                placeholder="Your name"
                disabled
              />
            </div>
            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea 
                id="bio" 
                value={profile?.bio || ''} 
                placeholder="Tell us about yourself"
                disabled
              />
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
