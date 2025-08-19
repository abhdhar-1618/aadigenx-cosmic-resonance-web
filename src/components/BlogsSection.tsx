
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
import { BlogCard } from '@/components/BlogCard';
import { UnifiedBlogCard } from '@/components/UnifiedBlogCard';
import { BlogArticleView } from '@/components/BlogArticleView';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export const BlogsSection = () => {
  const { user, profile, loading: authLoading, signOut } = useAuth();
  const { toast } = useToast();
  
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [editorModalOpen, setEditorModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState<any>(null);
  const [showArticleView, setShowArticleView] = useState(false);
  const [profileData, setProfileData] = useState({
    name: profile?.name || '',
    bio: profile?.bio || '',
  });

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (profile) {
      setProfileData({
        name: profile.name || '',
        bio: profile.bio || '',
      });
    }
  }, [profile]);

  const fetchBlogs = async () => {
    try {
      let query = supabase
        .from('blogs')
        .select(`
          *,
          profiles:author_id (
            id,
            name,
            avatar_url
          ),
          blog_categories (
            name,
            color
          )
        `);

      // If user is authenticated, show all their blogs plus published blogs from others
      // If not authenticated, show only published blogs
      if (user && profile) {
        query = query.or(`status.eq.published,author_id.eq.${profile.id}`);
      } else {
        query = query.eq('status', 'published');
      }

      const { data, error } = await query.order('created_at', { ascending: false });

      if (error) throw error;
      setBlogs(data || []);
    } catch (error) {
      toast({
        title: 'Error fetching blogs',
        description: 'Could not load blogs. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCreateBlog = () => {
    if (!user) {
      setAuthModalOpen(true);
      return;
    }
    setSelectedBlog(null);
    setEditorModalOpen(true);
  };

  const handleEditBlog = (blog: any) => {
    setSelectedBlog(blog);
    setEditorModalOpen(true);
  };

  const handleDeleteBlog = async (blogId: string) => {
    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', blogId);

      if (error) throw error;

      toast({
        title: 'Blog deleted',
        description: 'Your blog has been deleted successfully.',
      });
      fetchBlogs();
    } catch (error) {
      toast({
        title: 'Error deleting blog',
        description: 'Could not delete the blog. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const handleViewBlog = (blog: any) => {
    setSelectedBlog(blog);
    setShowArticleView(true);
  };

  const handleBackToBlogGrid = () => {
    setShowArticleView(false);
    setSelectedBlog(null);
  };

  const handleSaveProfile = async () => {
    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          name: profileData.name,
          bio: profileData.bio,
        })
        .eq('id', profile?.id);

      if (error) throw error;

      toast({
        title: 'Profile updated',
        description: 'Your profile has been updated successfully.',
      });
      setProfileModalOpen(false);
    } catch (error) {
      toast({
        title: 'Error updating profile',
        description: 'Could not update your profile. Please try again.',
        variant: 'destructive',
      });
    }
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || blog.category_id === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (authLoading || loading) {
    return <div className="min-h-full flex items-center justify-center text-white text-lg">Loading...</div>;
  }

  return (
    <div className="min-h-full py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {showArticleView && selectedBlog ? (
          <BlogArticleView 
            blog={selectedBlog} 
            onBack={handleBackToBlogGrid}
          />
        ) : (
          <>
            <div className="text-center mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900 drop-shadow-md">
                AadiBlogg – Voice of Visionaries at AadiGenix
              </h1>
              <p className="text-lg text-amber-800/90 italic tracking-wide font-medium">
                Echoes of Thought | Insights with Soul | Where Dharma Meets Data
              </p>

              <div className="flex items-center justify-center gap-4 mb-8">
                {user ? (
                  <>
                    <div className="flex items-center gap-2 bg-amber-900/20 backdrop-blur-sm rounded-lg px-4 py-2 border border-amber-600/30">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-amber-800 text-white">{profile?.name?.charAt(0) || 'U'}</AvatarFallback>
                      </Avatar>
                      <span className="text-amber-900 font-medium">{profile?.name || 'User'}</span>
                    </div>
                    <Button onClick={handleCreateBlog} className="bg-amber-800 hover:bg-amber-900 text-white">
                      <Plus className="h-4 w-4 mr-2" /> Create Blog
                    </Button>
                    <Button variant="outline" onClick={() => setProfileModalOpen(true)} className="bg-amber-50/20 border-amber-600/30 text-amber-900 hover:bg-amber-100/40">
                      <Settings className="h-4 w-4 mr-2" /> Profile
                    </Button>
                    <Button variant="outline" onClick={signOut} className="bg-amber-50/20 border-amber-600/30 text-amber-900 hover:bg-amber-100/40">
                      <LogOut className="h-4 w-4 mr-2" /> Sign Out
                    </Button>
                  </>
                ) : (
                    <Button onClick={() => setAuthModalOpen(true)} className="bg-amber-800 hover:bg-amber-900 text-white">
                      <User className="h-4 w-4 mr-2" /> Sign In to Create Blogs
                    </Button>
                )}
              </div>

              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row gap-4 mb-8 max-w-2xl mx-auto">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-800/60 h-4 w-4" />
                  <Input
                    placeholder="Search blogs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-amber-50/30 border-amber-600/30 text-amber-900 placeholder:text-amber-800/60"
                  />
                </div>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="bg-amber-50/30 border-amber-600/30 text-amber-900">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="tech">Technology</SelectItem>
                    <SelectItem value="lifestyle">Lifestyle</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Centered Blog Cards Display */}
            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-5xl">
                {filteredBlogs.map((blog) => (
                  <UnifiedBlogCard
                    key={blog.id}
                    blog={blog}
                    onView={handleViewBlog}
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      {/* Modals */}
      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
      
      <BlogEditor
        open={editorModalOpen}
        onOpenChange={setEditorModalOpen}
        blog={selectedBlog}
        onSave={fetchBlogs}
      />
      
      <BlogView
        open={viewModalOpen}
        onOpenChange={setViewModalOpen}
        blog={selectedBlog}
      />

      {/* Profile Modal */}
      <Dialog open={profileModalOpen} onOpenChange={setProfileModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={profileData.name}
                onChange={(e) => setProfileData({ ...profileData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bio">Bio</Label>
              <Textarea
                id="bio"
                value={profileData.bio}
                onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                rows={4}
              />
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setProfileModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleSaveProfile}>
                Save Profile
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
