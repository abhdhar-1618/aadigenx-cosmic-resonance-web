import React from 'react';
import { Navigation } from '../components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { 
  BarChart3, TrendingUp, PieChart, LineChart, 
  Award, Calendar, User, Eye, Settings, 
  Leaf, Smile, Music2 
} from 'lucide-react';
import { ScrollArea } from '../components/ui/scroll-area';
const projectsData = [
  {
    id: 1,
    title: "GanitPath - Reading Pattern Discovery through Triveni Shastra",
    student: "",
    grade: "",
    subject: "Triveni Shastra",
    description: "Statistical analysis of school library borrowing patterns using cross-subject logic, language, and math-based visualizations.",
    tools: ["Excel", "Google Sheets", "Chart.js"],
    category: "Triveni Shastra",
    date: "",
    views: 187,
    rating: 4.6,
    image: "/lovable-uploads/c8af4849-15ae-458e-ba29-3e1d7c09e3b9.png",
    achievements: ["Best Mathametics Analysis Project", "Data Visualization Excellence"]
  },
  {
    id: 2,
    title: "RaagNet - Emotion Detection through Classical Music in Naad Shastra",
    student: "",
    grade: "",
    subject: "Naad Shastra",
    description: "An AI-powered study decoding emotional impact of Indian classical ragas using frequency mapping and sentiment analysis from listener responses.",
    tools: ["Python", "Librosa", "Scikit-learn"],
    category: "Naad Shastra",
    date: "",
    views: 275,
    rating: 4.9,
    image: "/lovable-uploads/65ad884e-e886-466e-8c1b-7388ef69dfb1.png",
    achievements: ["Most Practical Application"]
  },
  {
    id: 3,
    title: "RoboCoach - AI Bot for Player Performance Tracking in Yantra Shastra",
    student: "",
    grade: "",
    subject: "Yantra Shastra",
    description: "A robotics-assisted system using automation and AI models to track player movements, ball trajectories, and recommend drills.",
    tools: ["Python", "OpenCV", "Tableau"],
    category: "Yantra Shastra",
    date: "October 2024",
    views: 312,
    rating: 4.9,
    image: "/lovable-uploads/59dc3c31-c3b0-4aae-a982-31bd7e61f22d.png",
    achievements: ["Outstanding Innovation", "Coach's Choice Award"]
  },
  {
    id: 4,
    title: "JalaYantra - Weather Sensors and Data Mapping in Vimana Shastra",
    student: "",
    grade: "",
    subject: "Vimana Shastra",
    description: "A sensor-driven study mapping local weather patterns over 5 years using temperature and rainfall datasets from meteorological stations.",
    tools: ["Python", "Pandas", "Matplotlib"],
    category: "Vimana Shastra",
    date: "December 2024",
    views: 234,
    rating: 4.8,
    image: "/lovable-uploads/9353f2e2-3bd7-48de-8066-c51004a57798.png",
    achievements: ["Community Impact Award"]
  },
  {
    id: 5,
    title: "Plant Growth Under Different Light Conditions",
    student: "",
    grade: "",
    subject: "Vana Veda Shastra",
    description: "A bot-assisted solution that uses nutritional intelligence and student surveys to optimize the school menu for health and taste.",
    tools: ["Python", "Numpy", "Seaborn"],
    category: "Vana Veda Shastra",
    date: "September 2024",
    views: 156,
    rating: 4.4,
    image: "/lovable-uploads/23c1832f-cbd2-42f1-bbe0-6b476b34c0d9.png",
    achievements: ["Best Experimental Design", "Green Innovation Award"]
  },
  {
   id: 6,
    title: "Holistic Health Mapping with AI",
    grade: "Class 12",
    subject: "Aryogya Shastra",
    description: "An AI-powered project to map Ayurvedic body types (Prakriti) and suggest lifestyle recommendations.",
    tools: ["Python", "TensorFlow", "Ayurvedic APIs"],
    category: "Aryogya Shastra",
    date: "July 2025",
    views: 120,
    rating: 4.6,
    image: "/lovable-uploads/d264ed0d-66fb-4d40-9ef0-6eb82ca06fd8.png",
    student: "",
    achievements: ["AI + Ayurveda Integration", "Student Innovation Finalist"] 
  },
  {
    id: 7,
    title: "Manas-Mitra Sutra - AI for Mental Well-being in Arogya Shastra",
    student: "",
    grade: "",
    subject: "Aryogya Shastra",
    description: "A prototype combining AI-driven sentiment tracking with yogic breath analytics to support holistic mental health.",
    tools: ["TensorFlow", "Python", "Power BI"],
    category: "Aryogya Shastra",
    date: "August 2024",
    views: 312,
    rating: 4.9,
    image: "/lovable-uploads/d264ed0d-66fb-4d40-9ef0-6eb82ca06fd8.png",
    achievements: ["Most Innovative AI-Health Integration"]
  },
];


const categories = ["Vimana Shastra", "Triveni Shastra", "Yantra Shastra", "Vana Veda Shastra", "Pashu Vritti Shastra", "Naad Shastra", "Aryogya Shastra"];

export default function SrijanPeethPage() {
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter(project => project.category === selectedCategory);

  const getIconForCategory = (category: string) => {
    switch (category) {
      case "Vimana Shastra":
        return <TrendingUp className="h-5 w-5" />; // Climate, Environment
      case "Triveni Shastra":
        return <BarChart3 className="h-5 w-5" />; // Math + Lang + Logic
      case "Yantra Shastra":
        return <Settings className="h-5 w-5" />; // Robotics
      case "Vana Veda Shastra":
        return <Leaf className="h-5 w-5" />; // Botanical + Nutrition
      case "Pashu Vritti Shastra":
        return <Smile className="h-5 w-5" />; // Behavioral / Emotion Analytics
      case "Naad Shastra":
        return <Music2 className="h-5 w-5" />; // Music + AI
      default:
        return <BarChart3 className="h-5 w-5" />;
    }
  };

  return (
  <div className="min-h-screen scroll-background relative">
    <Navigation currentSection="srijan" />

    {/* Main Content Area - constrained between top and bottom bars */}
    <div className="fixed inset-0 pt-16 pb-16 overflow-hidden">
      <div className="h-full overflow-y-auto custom-scrollbar">
        <div className="min-h-full py-8 px-4">
          {/* Hero Section */}
          <div className="relative pt-4 pb-16 px-4 text-center">
            <div className="relative max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                <span className="calibri">S</span><span className="samarkan">rijan</span><span className="calibri">P</span><span className="samarkan">eeth</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-8 leading-relaxed">
                Student Data Science & Analytics Showcase
              </p>
              <p className="text-lg text-white max-w-2xl mx-auto">
                Discover innovative data science projects created by our talented students, showcasing their analytical skills and creative problem-solving abilities.
              </p>
            </div>
          </div>

          {/* Category Filter */}
          <div className="max-w-5xl mx-auto px-4 mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {["All", "Vimana Shastra", "Triveni Shastra", "Yantra Shastra", "Vana Veda Shastra", "Pashu Vritti Shastra", "Naad Shastra", "Aryogya Shastra"].map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-all duration-200 ${
                    selectedCategory === category
                      ? ""
                      : "bg-white/10 border-white/20 text-white hover:bg-white/20"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="max-w-5xl mx-auto px-4 pb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 justify-items-center">
              {filteredProjects.map((project) => (
                <Card
                  key={project.id}
                  className="group hover:shadow-lg transition-all duration-300 border-0 bg-white/50 backdrop-blur-sm w-3/4 max-w-sm"
                >
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
                        <Badge
                          key={index}
                          variant="secondary"
                          className="bg-gray-200/50 text-gray-800 border border-gray-300 text-xs hover:bg-gray-300/60"
                        >
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
          <div className="py-16">
            <div className="max-w-3xl mx-auto px-4 text-center">
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
);
}
