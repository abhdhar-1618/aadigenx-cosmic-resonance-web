
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, User, ArrowLeft } from 'lucide-react';

export const BlogsSection = () => {
  const [selectedBlog, setSelectedBlog] = useState<number | null>(null);

  const blogPosts = [
    {
      id: 1,
      title: "The Future of Ancient Wisdom: Bridging Vedic Knowledge with Modern Technology",
      excerpt: "Exploring how ancient Vedic principles can guide the development of next-generation technologies and create a more harmonious digital future.",
      date: "December 15, 2024",
      author: "AadiGenX Team",
      readTime: "5 min read",
      content: [
        "In an era where technology evolves at breakneck speed, we often forget to look back at the timeless wisdom of our ancestors. The Vedic tradition, with its profound understanding of consciousness, energy, and interconnectedness, offers invaluable insights for modern technological development.",
        "At <span className=\"calibri\">A</span><span className=\"samarkan\">adi</span><span className=\"calibri\">G</span><span className=\"samarkan\">en</span><span className=\"calibri\">X</span>, we believe that the future lies not in abandoning our roots, but in harmoniously integrating ancient wisdom with cutting-edge innovation. The Sanskrit term 'Aadi' meaning 'beginning' or 'origin' combined with 'GenX' representing the next generation, embodies this philosophy perfectly.",
        "The Vedic concept of 'Vasudhaiva Kutumbakam' - the world is one family - resonates deeply with our interconnected digital age. Just as the ancient sages understood the fundamental unity underlying apparent diversity, modern technology is revealing the interconnected nature of our global community.",
        "Consider the parallels between Vedic understanding of consciousness and modern AI development. The ancient texts speak of different levels of awareness and intelligence, much like how we're now developing various forms of artificial intelligence - from narrow AI to the pursuit of artificial general intelligence.",
        "The principle of 'Ahimsa' (non-violence) from Vedic philosophy can guide us in creating technology that doesn't harm but rather nurtures human potential. This means developing AI systems that augment human capabilities rather than replace them, creating sustainable technologies that don't damage our environment.",
        "As we stand at the threshold of a new technological era, let us remember that true progress comes not from discarding our heritage, but from weaving together the threads of ancient wisdom and modern innovation to create a tapestry that serves all of humanity."
      ]
    }
  ];

  const handleBlogClick = (blogId: number) => {
    setSelectedBlog(blogId);
  };

  const handleBackClick = () => {
    setSelectedBlog(null);
  };

  if (selectedBlog) {
    const blog = blogPosts.find(post => post.id === selectedBlog);
    if (!blog) return null;

    return (
      <div className="min-h-full py-8 px-4">
        <div className="max-w-3xl mx-auto">
          <Button 
            onClick={handleBackClick}
            variant="ghost"
            className="mb-8 bg-white/50 hover:bg-white/70 text-foreground backdrop-blur-sm"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blogs
          </Button>

          <article className="bg-white/50 backdrop-blur-sm rounded-lg p-8">
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                {blog.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{blog.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{blog.author}</span>
                </div>
                <span>{blog.readTime}</span>
              </div>
            </header>

            <div className="space-y-6">
              {blog.content.map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed text-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-full py-8 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            BLOGS
          </h1>
          <p className="text-md md:text-lg text-muted-foreground">
            Insights on the intersection of ancient wisdom and modern technology
          </p>
        </div>

        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="bg-white/50 backdrop-blur-sm cursor-pointer hover:bg-white/70 transition-all duration-300"
              onClick={() => handleBlogClick(post.id)}
            >
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-2xl text-foreground hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-white/20 p-0">
                  Read More →
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};
