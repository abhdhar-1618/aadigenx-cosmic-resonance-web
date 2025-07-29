import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { X, Plus } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface BlogEditorProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  blog?: any;
  onSave: () => void;
}

export function BlogEditor({ open, onOpenChange, blog, onSave }: BlogEditorProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<any[]>([]);
  const [newTag, setNewTag] = useState('');
  const { profile } = useAuth();
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    category_id: '',
    featured_image: '',
    status: 'draft',
    tags: [] as string[],
  });

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title || '',
        content: blog.content || '',
        excerpt: blog.excerpt || '',
        category_id: blog.category_id || '',
        featured_image: blog.featured_image || '',
        status: blog.status || 'draft',
        tags: blog.tags || [],
      });
    } else {
      setFormData({
        title: '',
        content: '',
        excerpt: '',
        category_id: '',
        featured_image: '',
        status: 'draft',
        tags: [],
      });
    }
  }, [blog]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await supabase
      .from('blog_categories')
      .select('*')
      .order('name');
    
    if (data) setCategories(data);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .trim();
  };

  const addTag = () => {
    if (newTag && !formData.tags.includes(newTag)) {
      setFormData({
        ...formData,
        tags: [...formData.tags, newTag]
      });
      setNewTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!profile) {
      toast({
        title: 'Authentication required',
        description: 'Please sign in to create or edit blogs.',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      const slug = generateSlug(formData.title);
      const blogData = {
        ...formData,
        slug,
        author_id: profile.id,
        published_at: formData.status === 'published' ? new Date().toISOString() : null,
      };

      let error;
      
      if (blog) {
        // Update existing blog
        const { error: updateError } = await supabase
          .from('blogs')
          .update(blogData)
          .eq('id', blog.id);
        error = updateError;
      } else {
        // Create new blog
        const { error: insertError } = await supabase
          .from('blogs')
          .insert([blogData]);
        error = insertError;
      }

      if (error) {
        toast({
          title: 'Error saving blog',
          description: error.message,
          variant: 'destructive',
        });
      } else {
        toast({
          title: blog ? 'Blog updated' : 'Blog created',
          description: `Your blog has been ${blog ? 'updated' : 'created'} successfully.`,
        });
        onSave();
        onOpenChange(false);
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        variant: 'destructive',
      });
    }

    setIsLoading(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{blog ? 'Edit Blog' : 'Create New Blog'}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSave} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter blog title"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="excerpt">Excerpt</Label>
            <Textarea
              id="excerpt"
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              placeholder="Brief description of your blog post"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="category">Category</Label>
              <Select
                value={formData.category_id}
                onValueChange={(value) => setFormData({ ...formData, category_id: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select
                value={formData.status}
                onValueChange={(value) => setFormData({ ...formData, status: value })}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="featured_image">Featured Image URL</Label>
            <Input
              id="featured_image"
              type="url"
              value={formData.featured_image}
              onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div className="space-y-2">
            <Label>Tags</Label>
            <div className="flex gap-2 mb-2">
              <Input
                value={newTag}
                onChange={(e) => setNewTag(e.target.value)}
                placeholder="Add a tag"
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
              />
              <Button type="button" onClick={addTag} size="sm">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="flex items-center gap-1">
                  {tag}
                  <X 
                    className="h-3 w-3 cursor-pointer" 
                    onClick={() => removeTag(tag)}
                  />
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>
            <Textarea
              id="content"
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              placeholder="Write your blog content here..."
              rows={15}
              required
            />
          </div>

          <div className="flex justify-end gap-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? 'Saving...' : blog ? 'Update Blog' : 'Create Blog'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}