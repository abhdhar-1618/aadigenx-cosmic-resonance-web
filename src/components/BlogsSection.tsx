
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
      <div 
        className="min-h-full pt-4 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(/lovable-uploads/436bbf9d-755e-48d5-b4da-3bedfa04fc6e.png)`
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-white/30 -z-10" />
        <div className="container mx-auto px-6 py-12 max-w-4xl relative">
          <Button 
            onClick={handleBackClick}
            variant="ghost"
            className="mb-8 text-white hover:text-yellow-400 hover:bg-white/10"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blogs
          </Button>

          <article className="prose prose-invert prose-lg max-w-none">
            <header className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
                {blog.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-white/70 mb-6">
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
                <p key={index} className="text-lg leading-relaxed text-white/90">
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
    <div 
      className="min-h-full pt-4 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(/lovable-uploads/436bbf9d-755e-48d5-b4da-3bedfa04fc6e.png)`
      }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-white/30 -z-10" />
      
      <div className="container mx-auto px-6 py-12 relative">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-purple-400 bg-clip-text text-transparent">
            Blogs
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Insights on the intersection of ancient wisdom and modern technology
          </p>
        </div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {blogPosts.map((post) => (
            <Card 
              key={post.id} 
              className="bg-white/10 border-white/20 backdrop-blur-sm cursor-pointer hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]"
              onClick={() => handleBlogClick(post.id)}
            >
              <CardHeader>
                <div className="flex items-center gap-4 text-sm text-white/60 mb-2">
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
                <CardTitle className="text-2xl text-white hover:text-yellow-400 transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-white/70 text-base">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" className="text-yellow-400 hover:text-yellow-300 hover:bg-white/10 p-0">
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
