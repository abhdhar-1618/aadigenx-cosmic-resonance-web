import React from 'react';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart3, TrendingUp, PieChart, LineChart, Award, Calendar, User, Eye } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "Weather Patterns Analysis",
    student: "Priya Sharma",
    grade: "Class 10",
    subject: "Environmental Science",
    description: "A comprehensive study analyzing local weather patterns over the past 5 years using temperature and rainfall data from meteorological stations.",
    tools: ["Python", "Pandas", "Matplotlib"],
    category: "Climate Science",
    date: "December 2024",
    views: 234,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=300&fit=crop",
    achievements: ["Best Environmental Project", "Data Visualization Excellence"]
  },
  {
    id: 2,
    title: "School Library Book Popularity Trends",
    student: "Arjun Patel",
    grade: "Class 9",
    subject: "Mathematics",
    description: "Statistical analysis of book borrowing patterns in our school library to understand reading preferences across different grades and subjects.",
    tools: ["Excel", "Google Sheets", "Chart.js"],
    category: "Social Analytics",
    date: "November 2024",
    views: 187,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
    achievements: ["Most Practical Application"]
  },
  {
    id: 3,
    title: "Sports Performance Data Analysis",
    student: "Kavya Reddy",
    grade: "Class 11",
    subject: "Physical Education",
    description: "Analyzing the performance metrics of our school's cricket team to identify areas for improvement and track player development.",
    tools: ["R", "ggplot2", "Tableau"],
    category: "Sports Analytics",
    date: "October 2024",
    views: 312,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=300&fit=crop",
    achievements: ["Outstanding Innovation", "Coach's Choice Award"]
  },
  {
    id: 4,
    title: "Cafeteria Menu Optimization",
    student: "Rohan Kumar",
    grade: "Class 8",
    subject: "Computer Science",
    description: "Using student preference surveys and nutritional data to optimize our school cafeteria menu for both taste and health.",
    tools: ["Python", "Numpy", "Seaborn"],
    category: "Health & Nutrition",
    date: "September 2024",
    views: 156,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=400&h=300&fit=crop",
    achievements: ["Community Impact Award"]
  },
  {
    id: 5,
    title: "Plant Growth Under Different Light Conditions",
    student: "Ananya Singh",
    grade: "Class 7",
    subject: "Biology",
    description: "Experimental data collection and analysis studying how different LED light colors affect plant growth rates in our school garden.",
    tools: ["Google Sheets", "Canva", "Arduino"],
    category: "Botanical Science",
    date: "August 2024",
    views: 289,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop",
    achievements: ["Best Experimental Design", "Green Innovation Award"]
  },
  {
    id: 6,
    title: "Social Media Impact on Study Habits",
    student: "Vikram Joshi",
    grade: "Class 12",
    subject: "Psychology",
    description: "Survey-based research analyzing the correlation between social media usage time and academic performance among high school students.",
    tools: ["SPSS", "Survey Monkey", "Power BI"],
    category: "Behavioral Science",
    date: "July 2024",
    views: 398,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop",
    achievements: ["Best Research Methodology"]
  }
];

const categories = ["All", "Climate Science", "Social Analytics", "Sports Analytics", "Health & Nutrition", "Botanical Science", "Behavioral Science"];

export default function SrijanPeethPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  const getIconForCategory = (category: string) => {
    switch (category) {
      case "Climate Science": return <TrendingUp className="h-5 w-5" />;
      case "Social Analytics": return <PieChart className="h-5 w-5" />;
      case "Sports Analytics": return <BarChart3 className="h-5 w-5" />;
      case "Health & Nutrition": return <LineChart className="h-5 w-5" />;
      case "Botanical Science": return <TrendingUp className="h-5 w-5" />;
      case "Behavioral Science": return <PieChart className="h-5 w-5" />;
      default: return <BarChart3 className="h-5 w-5" />;
    }
  };

  return (
    <div className="min-h-screen scroll-background">
      <Navigation currentSection="srijan" />
      
      {/* Content with proper spacing */}
      <div className="pt-4 pb-20">
        <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        {/* Hero Section */}
        <div className="relative pt-20 pb-16 px-4 text-center">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10" />
          <div className="relative max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              <span className="calibri">S</span><span className="samarkan">rijan</span><span className="calibri">P</span><span className="samarkan">eeth</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Student Data Science & Analytics Showcase
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover innovative data science projects created by our talented students, showcasing their analytical skills and creative problem-solving abilities.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="max-w-7xl mx-auto px-4 mb-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-4 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="bg-white/90 text-primary">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    {project.achievements.slice(0, 1).map((achievement, index) => (
                      <Badge key={index} variant="default" className="bg-primary/90 text-white text-xs">
                        <Award className="h-3 w-3 mr-1" />
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="mt-2 flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          {project.student}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {project.grade}
                        </Badge>
                      </CardDescription>
                    </div>
                    <div className="ml-2">
                      {getIconForCategory(project.category)}
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="space-y-3">
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">Tools Used:</p>
                      <div className="flex flex-wrap gap-1">
                        {project.tools.map((tool, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {project.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        {project.views} views
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-500">★</span>
                        <span className="text-sm font-medium">{project.rating}</span>
                      </div>
                      <Button size="sm" variant="outline" className="text-xs">
                        View Project
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-8">Platform Statistics</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">156</div>
                <div className="text-sm text-muted-foreground">Total Projects</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">89</div>
                <div className="text-sm text-muted-foreground">Active Students</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">12</div>
                <div className="text-sm text-muted-foreground">Subject Areas</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-primary">45</div>
                <div className="text-sm text-muted-foreground">Awards Won</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      
      {/* Bottom Roll Bar Text */}
      <div className="fixed bottom-0 w-full bg-black/[0.02] backdrop-blur-sm z-10 border-t border-white/[0.02]">
        <div className="flex justify-center items-center py-2 px-2 md:py-3 md:px-4 max-w-6xl mx-auto">
          <div className="text-white font-bold text-xl" style={{ fontSize: '1.25rem' }}>
            प्राचीनानां निनादः भविष्यस्य संरचना
          </div>
        </div>
      </div>
    </div>
  );
}