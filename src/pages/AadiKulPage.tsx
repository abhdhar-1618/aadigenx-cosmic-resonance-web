import React, { useState } from 'react';
import { Navigation } from '@/components/Navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  BookOpen, 
  Calendar, 
  Award, 
  Clock, 
  Users, 
  FileText, 
  Video, 
  CheckCircle, 
  AlertCircle,
  Play,
  Download,
  MessageSquare,
  Star,
  TrendingUp,
  GraduationCap,
  Target
} from 'lucide-react';

const studentData = {
  name: "Priya Sharma",
  studentId: "AK2024001",
  grade: "Class 10",
  section: "A",
  avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b123?w=150&h=150&fit=crop&crop=face",
  overallGrade: "A+",
  attendance: 92,
  creditsEarned: 28,
  totalCredits: 35
};

const coursesData = [
  {
    id: 1,
    title: "Advanced Mathematics",
    instructor: "Dr. Rajesh Kumar",
    progress: 85,
    grade: "A",
    nextClass: "2024-01-15 10:00 AM",
    assignments: 3,
    announcements: 2,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop",
    description: "Calculus, Algebra, and Geometry fundamentals",
    students: 28,
    duration: "6 months"
  },
  {
    id: 2,
    title: "Physics Laboratory",
    instructor: "Prof. Anita Singh",
    progress: 72,
    grade: "B+",
    nextClass: "2024-01-15 2:00 PM",
    assignments: 5,
    announcements: 1,
    image: "https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=400&h=200&fit=crop",
    description: "Hands-on experiments and theoretical concepts",
    students: 24,
    duration: "4 months"
  },
  {
    id: 3,
    title: "English Literature",
    instructor: "Mrs. Kavya Reddy",
    progress: 90,
    grade: "A+",
    nextClass: "2024-01-16 9:00 AM",
    assignments: 2,
    announcements: 3,
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=200&fit=crop",
    description: "Classic and contemporary literature analysis",
    students: 32,
    duration: "5 months"
  },
  {
    id: 4,
    title: "Computer Science",
    instructor: "Mr. Arjun Patel",
    progress: 78,
    grade: "A-",
    nextClass: "2024-01-16 11:00 AM",
    assignments: 4,
    announcements: 1,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop",
    description: "Programming fundamentals and algorithms",
    students: 26,
    duration: "6 months"
  }
];

const assignmentsData = [
  {
    id: 1,
    title: "Calculus Problem Set 5",
    course: "Advanced Mathematics",
    dueDate: "2024-01-18",
    status: "pending",
    points: 100,
    submitted: false
  },
  {
    id: 2,
    title: "Shakespeare Essay",
    course: "English Literature",
    dueDate: "2024-01-20",
    status: "pending",
    points: 150,
    submitted: false
  },
  {
    id: 3,
    title: "Python Programming Project",
    course: "Computer Science",
    dueDate: "2024-01-22",
    status: "pending",
    points: 200,
    submitted: false
  },
  {
    id: 4,
    title: "Lab Report - Momentum",
    course: "Physics Laboratory",
    dueDate: "2024-01-12",
    status: "submitted",
    points: 80,
    submitted: true,
    grade: "85/80"
  }
];

const recentActivityData = [
  {
    id: 1,
    type: "assignment",
    title: "Submitted Physics Lab Report",
    time: "2 hours ago",
    course: "Physics Laboratory"
  },
  {
    id: 2,
    type: "grade",
    title: "Received grade for Math Quiz",
    time: "1 day ago",
    course: "Advanced Mathematics",
    grade: "A"
  },
  {
    id: 3,
    type: "announcement",
    title: "New reading assignment posted",
    time: "2 days ago",
    course: "English Literature"
  },
  {
    id: 4,
    type: "video",
    title: "Watched Lecture 8: Recursion",
    time: "3 days ago",
    course: "Computer Science"
  }
];

const upcomingEvents = [
  {
    id: 1,
    title: "Math Midterm Exam",
    date: "2024-01-25",
    time: "10:00 AM",
    type: "exam",
    course: "Advanced Mathematics"
  },
  {
    id: 2,
    title: "Physics Lab Session",
    date: "2024-01-16",
    time: "2:00 PM",
    type: "lab",
    course: "Physics Laboratory"
  },
  {
    id: 3,
    title: "Literature Discussion",
    date: "2024-01-17",
    time: "9:00 AM",
    type: "class",
    course: "English Literature"
  }
];

const AadiKulPage = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'destructive';
      case 'submitted': return 'default';
      case 'graded': return 'secondary';
      default: return 'outline';
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'assignment': return <FileText className="h-4 w-4" />;
      case 'grade': return <Award className="h-4 w-4" />;
      case 'announcement': return <MessageSquare className="h-4 w-4" />;
      case 'video': return <Video className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen scroll-background">
      <Navigation currentSection="kul" />
      
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 pt-20">
        {/* Header */}
        <div className="relative pb-4 px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">K</span><span className="samarkan">ul</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-1">
            Learning Management System
          </p>
        </div>

        <div className="max-w-4xl mx-auto px-8 pb-32">
          {/* AadiGenX Mission Content */}
          <Card className="bg-white/80 backdrop-blur-sm border-amber-200">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-amber-900 mb-4">
                  At AadiGenX, we are on a mission to:
                </h2>
              </div>
              
              <div className="space-y-8 text-amber-900">
                <div className="flex items-start gap-4">
                  <div className="text-amber-700 text-xl mt-1">✤</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Reconstruct Intelligence from Lost Civilizations
                    </h3>
                    <p className="text-base leading-relaxed">
                      We integrate AI with ancient scriptures, Sanskrit NLP, Vedic mathematics, and cosmic structures to extract scientific and computational insights lost in time.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-amber-700 text-xl mt-1">✤</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Align AI & Robotics for Next-Gen Automation
                    </h3>
                    <p className="text-base leading-relaxed">
                      Our research is bridging the gap between machine learning and robotics, ensuring intelligent, adaptive, and ethically driven AI systems that enhance rather than replace human intelligence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-amber-700 text-xl mt-1">✤</div>
                  <div>
                    <h3 className="text-lg font-semibold mb-3">
                      Evolve AI from Machine Learning to Conscious Learning
                    </h3>
                    <p className="text-base leading-relaxed">
                      Our work in Cosmic Resonance & NeuroAI pushes AI beyond deep learning, into self-adaptive intelligence that understands context, thought patterns, and cognitive evolution.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AadiKulPage;