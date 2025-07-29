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
  // ...[states and hooks remain unchanged]

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
    </div>
  );
};
