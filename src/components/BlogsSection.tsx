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
import { BlogCard } from '@/components/BlogCard';
import { BlogView } from '@/components/BlogView';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

export const BlogsSection = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  
  // Modal states
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [blogEditorOpen, setBlogEditorOpen] = useState(false);
  const [blogViewOpen, setBlogViewOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  
  // Data states
  const [selectedBlog, setSelectedBlog] = useState<any>(null);
  const [editingBlog, setEditingBlog] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('all');
  
  const { user, profile, loading: authLoading, signOut, updateProfile } = useAuth();
  const { toast } = useToast();

  // Profile form state
  const [profileForm, setProfileForm] = useState({
    name: '',
    bio: '',
    avatar_url: '',
  });

  useEffect(() => {
    fetchBlogs();
    fetchCategories();
  }, []);

  useEffect(() => {
    if (profile) {
      setProfileForm({
        name: profile.name || '',
        bio: profile.bio || '',
        avatar_url: profile.avatar_url || '',
      });
    }
  }, [profile]);

  useEffect(() => {
    filterAndSortBlogs();
  }, [blogs, searchTerm, selectedCategory, sortBy, activeTab]);

  const fetchBlogs = async () => {
    setLoading(true);
    
    const { data, error } = await supabase
      .from('blogs')
      .select(`
        *,
        profiles (
          name,
          avatar_url
        ),
        blog_categories (
          name,
          color
        )
      `)
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: 'Error fetching blogs',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      setBlogs(data || []);
    }
    
    setLoading(false);
  };

  const fetchCategories = async () => {
    const { data } = await supabase
      .from('blog_categories')
      .select('*')
      .order('name');
    
    if (data) setCategories(data);
  };

  const filterAndSortBlogs = () => {
    let filtered = [...blogs];

    // Filter by tab (all, published, my blogs)
    if (activeTab === 'published') {
      filtered = filtered.filter(blog => blog.status === 'published');
    } else if (activeTab === 'my-blogs' && profile) {
      filtered = filtered.filter(blog => blog.profiles?.id === profile.id);
    } else if (activeTab === 'all') {
      filtered = filtered.filter(blog => blog.status === 'published');
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags?.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(blog => blog.category_id === selectedCategory);
    }

    // Sort blogs
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        case 'oldest':
          return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        case 'popular':
          return (b.likes || 0) - (a.likes || 0);
        case 'views':
          return (b.views || 0) - (a.views || 0);
        default:
          return 0;
      }
    });

    setFilteredBlogs(filtered);
  };

  const handleCreateBlog = () => {
    if (!user) {
      setAuthModalOpen(true);
      return;
    }
    setEditingBlog(null);
    setBlogEditorOpen(true);
  };

  const handleEditBlog = (blog: any) => {
    setEditingBlog(blog);
    setBlogEditorOpen(true);
  };

  const handleDeleteBlog = async (blogId: string) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;

    const { error } = await supabase
      .from('blogs')
      .delete()
      .eq('id', blogId);

    if (error) {
      toast({
        title: 'Error deleting blog',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Blog deleted',
        description: 'Your blog has been deleted successfully.',
      });
      fetchBlogs();
    }
  };

  const handleViewBlog = (blog: any) => {
    setSelectedBlog(blog);
    setBlogViewOpen(true);
  };

  const handleSaveBlog = () => {
    fetchBlogs();
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const { error } = await updateProfile(profileForm);
    
    if (error) {
      toast({
        title: 'Error updating profile',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Profile updated',
        description: 'Your profile has been updated successfully.',
      });
      setProfileModalOpen(false);
    }
  };

  if (authLoading || loading) {
    return (
      <div className="min-h-full flex items-center justify-center">
        <div className="text-white text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-full py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Advanced Blog Platform
          </h1>
          <p className="text-lg text-white/80 mb-6">
            Share your thoughts, explore ideas, and connect with our community
          </p>
          
          {/* User Actions */}
          <div className="flex items-center justify-center gap-4 mb-8">
            {user ? (
              <>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>
                      {profile?.name?.charAt(0) || 'U'}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-white font-medium">{profile?.name || 'User'}</span>
                </div>
                
                <Button 
                  onClick={handleCreateBlog}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Create Blog
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => setProfileModalOpen(true)}
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Profile
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={signOut}
                  className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </Button>
              </>
            ) : (
              <Button 
                onClick={() => setAuthModalOpen(true)}
                className="bg-primary hover:bg-primary/90"
              >
                <User className="h-4 w-4 mr-2" />
                Sign In to Create Blogs
              </Button>
            )}
          </div>
        </div>

        {/* Search and Filter */}
        <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search blogs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white/50"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="bg-white/50">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="bg-white/50">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="popular">Most Liked</SelectItem>
                  <SelectItem value="views">Most Viewed</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-white" />
                <span className="text-white text-sm">
                  {filteredBlogs.length} blog{filteredBlogs.length !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="bg-white/10 backdrop-blur-sm">
            <TabsTrigger value="all" className="data-[state=active]:bg-white/20">
              All Blogs
            </TabsTrigger>
            <TabsTrigger value="published" className="data-[state=active]:bg-white/20">
              Published
            </TabsTrigger>
            {user && (
              <TabsTrigger value="my-blogs" className="data-[state=active]:bg-white/20">
                My Blogs
              </TabsTrigger>
            )}
          </TabsList>

          <TabsContent value={activeTab} className="mt-6">
            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  blog={blog}
                  onEdit={handleEditBlog}
                  onDelete={handleDeleteBlog}
                  onView={handleViewBlog}
                />
              ))}
            </div>

            {filteredBlogs.length === 0 && (
              <div className="text-center py-12">
                <PenTool className="h-12 w-12 text-white/50 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">No blogs found</h3>
                <p className="text-white/70 mb-4">
                  {activeTab === 'my-blogs' 
                    ? "You haven't created any blogs yet." 
                    : "No blogs match your current filters."
                  }
                </p>
                {user && activeTab === 'my-blogs' && (
                  <Button onClick={handleCreateBlog} className="bg-primary hover:bg-primary/90">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Your First Blog
                  </Button>
                )}
              </div>
            )}
          </TabsContent>
        </Tabs>

        {/* Modals */}
        <AuthModal 
          open={authModalOpen} 
          onOpenChange={setAuthModalOpen} 
        />
        
        <BlogEditor
          open={blogEditorOpen}
          onOpenChange={setBlogEditorOpen}
          blog={editingBlog}
          onSave={handleSaveBlog}
        />
        
        <BlogView
          open={blogViewOpen}
          onOpenChange={setBlogViewOpen}
          blog={selectedBlog}
        />

        {/* Profile Modal */}
        <Dialog open={profileModalOpen} onOpenChange={setProfileModalOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Edit Profile</DialogTitle>
            </DialogHeader>
            
            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={profileForm.name}
                  onChange={(e) => setProfileForm({ ...profileForm, name: e.target.value })}
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={profileForm.bio}
                  onChange={(e) => setProfileForm({ ...profileForm, bio: e.target.value })}
                  placeholder="Tell us about yourself"
                  rows={3}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="avatar_url">Avatar URL</Label>
                <Input
                  id="avatar_url"
                  type="url"
                  value={profileForm.avatar_url}
                  onChange={(e) => setProfileForm({ ...profileForm, avatar_url: e.target.value })}
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>
              
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setProfileModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">
                  Update Profile
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};