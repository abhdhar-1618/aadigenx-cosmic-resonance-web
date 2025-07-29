import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Navigation } from '@/components/Navigation';
import { AuthProvider } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Heart, Eye, Calendar, ArrowLeft, Share2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

const BlogArticlePage = () => {
  const navigate = useNavigate();
  
  // Hardcoded blog data matching the RecentBlogCard
  const blogData = {
    title: "The Ancient Wisdom of Vedic Sciences in Modern Innovation",
    content: `In the rapidly evolving landscape of technology and innovation, we often seek the newest methodologies and cutting-edge approaches. However, there's profound wisdom to be found in looking backward—to the ancient Vedic sciences that have guided human understanding for millennia.

At AadiGenix, we believe that true innovation doesn't just come from disrupting the old, but from weaving together the timeless with the contemporary. The Vedic sciences—encompassing everything from Ayurveda and Jyotisha to Vastu Shastra and beyond—offer frameworks for understanding complexity, harmony, and sustainable growth that are remarkably relevant to today's challenges.

Consider how the Vedic principle of 'Yagna' (sacrifice or offering) translates to modern business ethics. In the ancient understanding, progress comes not from taking, but from giving—creating value for others as the foundation of sustainable success. This isn't just philosophy; it's a practical approach to building lasting organizations and meaningful innovations.

The integration of these ancient wisdoms with modern technology opens doors to solutions that are not just efficient, but truly transformative. When we combine the precision of data science with the holistic understanding of Vedic principles, we create innovations that serve not just immediate needs, but the broader ecosystem of life.

As we continue to build the future, let us remember that the greatest innovations often come from the marriage of ancient wisdom and modern capability. The Vedas remind us that true progress is cyclical, not linear—and in this understanding lies the key to creating technologies that truly serve humanity's highest potential.`,
    excerpt: "Exploring how ancient Vedic sciences can guide modern innovation and create truly transformative solutions in today's technology landscape.",
    featured_image: "/lovable-uploads/3aff6aa4-c06c-4250-8f03-e0154c31aedf.png",
    read_time: 8,
    likes: 247,
    views: 1843,
    created_at: "2024-01-15T10:30:00Z",
    author: {
      name: "Dipanwita DasChakrabarty",
      avatar: "/lovable-uploads/author-profile.jpg",
      title: "Founder & Visionary at AadiGenix"
    },
    category: {
      name: "Innovation",
      color: "amber"
    },
    tags: ["Vedic Sciences", "Innovation", "Technology", "Ancient Wisdom", "Sustainability"]
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: blogData.title,
          text: blogData.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        // You could add a toast here
      } catch (error) {
        console.log('Error copying to clipboard:', error);
      }
    }
  };

  return (
    <AuthProvider>
      <div className="min-h-screen scroll-background">
        <Navigation currentSection="blogs" />
        
        {/* Main Content Area */}
        <div className="container mx-auto px-4 mt-16 mb-16 max-w-7xl">
          <div className="bg-gradient-to-br from-amber-900/30 to-amber-700/20 backdrop-blur-md border border-amber-500/30 rounded-xl overflow-hidden shadow-2xl">
            
            {/* Hero Image Section */}
            <div 
              className="relative h-[60vh] md:h-[70vh] w-full"
              style={{
                backgroundImage: `url(${blogData.featured_image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              
              {/* Back button */}
              <div className="absolute top-6 left-6 z-10">
                <Button 
                  variant="outline" 
                  onClick={() => navigate(-1)}
                  className="bg-black/30 backdrop-blur-sm border-white/20 text-white hover:bg-black/50"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </div>

              {/* Share button */}
              <div className="absolute top-6 right-6 z-10">
                <Button 
                  variant="outline" 
                  onClick={handleShare}
                  className="bg-black/30 backdrop-blur-sm border-white/20 text-white hover:bg-black/50"
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>

              {/* Category badge */}
              <div className="absolute bottom-6 left-6">
                <Badge 
                  variant="secondary" 
                  className="bg-amber-500/20 text-amber-100 border-amber-400/30 backdrop-blur-sm px-4 py-2 text-sm font-medium"
                >
                  {blogData.category.name}
                </Badge>
              </div>

              {/* Read time */}
              <div className="absolute bottom-6 right-6 text-amber-200/80 text-sm font-medium bg-black/30 backdrop-blur-sm px-3 py-2 rounded">
                {blogData.read_time} min read
              </div>
            </div>

            {/* Content Section */}
            <div className="bg-black/90 backdrop-blur-sm min-h-[50vh]">
              <div className="max-w-4xl mx-auto px-6 py-8">
                
                {/* Article Header */}
                <div className="mb-8">
                  <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-amber-100 to-amber-200 bg-clip-text text-transparent">
                    {blogData.title}
                  </h1>
                  
                  {/* Author and Meta Info */}
                  <div className="flex flex-col md:flex-row md:items-center gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12 ring-2 ring-amber-400/30">
                        <AvatarImage src={blogData.author.avatar} alt={blogData.author.name} />
                        <AvatarFallback className="bg-gradient-to-br from-amber-600 to-amber-800 text-white font-semibold">
                          {blogData.author.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="text-white font-medium">{blogData.author.name}</div>
                        <div className="text-amber-200/70 text-sm">{blogData.author.title}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-amber-200/70 text-sm">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {formatDate(blogData.created_at)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4" />
                        {blogData.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {blogData.views}
                      </div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {blogData.tags.map((tag, index) => (
                      <Badge 
                        key={index}
                        variant="outline"
                        className="border-amber-400/30 text-amber-200/80 hover:bg-amber-500/10"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Article Content */}
                <div className="prose prose-lg prose-invert max-w-none">
                  {blogData.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="text-amber-100/90 leading-relaxed mb-6 text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Engagement Section */}
                <Card className="mt-12 bg-amber-900/20 backdrop-blur-md border border-amber-500/20 p-6">
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      <h3 className="font-semibold mb-2">Enjoyed this article?</h3>
                      <p className="text-amber-200/70 text-sm">Share your thoughts and connect with our community.</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button 
                        variant="outline"
                        className="bg-white/10 border-amber-400/30 text-amber-200 hover:bg-amber-500/20"
                      >
                        <Heart className="h-4 w-4 mr-2" />
                        Like
                      </Button>
                      <Button 
                        onClick={handleShare}
                        className="bg-amber-600 hover:bg-amber-700 text-white"
                      >
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                    </div>
                  </div>
                </Card>

              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Roll Bar Text */}
        <div className="fixed bottom-0 w-full bg-transparent z-10">
          <div className="flex justify-center items-center py-2 px-2 md:py-3 md:px-4 max-w-6xl mx-auto">
            <div className="text-white font-bold text-xl" style={{ fontSize: '1.25rem' }}>
              प्राचीनानां निनादः भविष्यस्य संरचना
            </div>
          </div>
        </div>
      </div>
    </AuthProvider>
  );
};

export default BlogArticlePage;