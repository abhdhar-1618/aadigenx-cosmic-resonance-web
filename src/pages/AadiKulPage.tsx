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

        <div className="max-w-3xl mx-auto px-6 py-8 pb-40">
          {/* Large Text Box with LMS Content */}
          <Card className="bg-amber-50/90 backdrop-blur-sm border-amber-200 shadow-lg">
            <CardContent className="p-8 space-y-6">
              {/* Header Section */}
              <div className="text-center space-y-4 mb-8">
                <div className="flex items-center justify-center space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={studentData.avatar} alt={studentData.name} />
                    <AvatarFallback>PS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-xl font-bold text-amber-900">{studentData.name}</h2>
                    <p className="text-amber-700 text-sm">
                      {studentData.studentId} • {studentData.grade} • Section {studentData.section}
                    </p>
                  </div>
                </div>
                
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div className="bg-amber-100 rounded-lg p-3">
                    <div className="text-lg font-bold text-amber-900">{studentData.overallGrade}</div>
                    <div className="text-xs text-amber-700">Overall Grade</div>
                  </div>
                  <div className="bg-amber-100 rounded-lg p-3">
                    <div className="text-lg font-bold text-green-700">{studentData.attendance}%</div>
                    <div className="text-xs text-amber-700">Attendance</div>
                  </div>
                  <div className="bg-amber-100 rounded-lg p-3">
                    <div className="text-lg font-bold text-blue-700">{studentData.creditsEarned}/{studentData.totalCredits}</div>
                    <div className="text-xs text-amber-700">Credits</div>
                  </div>
                  <div className="bg-amber-100 rounded-lg p-3">
                    <div className="text-lg font-bold text-purple-700">{coursesData.length}</div>
                    <div className="text-xs text-amber-700">Courses</div>
                  </div>
                </div>
              </div>

              {/* Course Grid */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-amber-900 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  My Courses
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {coursesData.map((course) => (
                    <div key={course.id} className="bg-amber-100/50 rounded-lg p-4 space-y-2">
                      <div className="flex justify-between items-start">
                        <h4 className="font-medium text-amber-900">{course.title}</h4>
                        <Badge variant="outline" className="bg-amber-200 text-amber-800 border-amber-300">
                          {course.grade}
                        </Badge>
                      </div>
                      <p className="text-sm text-amber-700">{course.instructor}</p>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs text-amber-700">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-1 bg-amber-200" />
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-amber-600">Next: {new Date(course.nextClass).toLocaleDateString()}</span>
                        <Button size="sm" variant="outline" className="h-6 text-xs bg-amber-200 text-amber-800 border-amber-300 hover:bg-amber-300">
                          View
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-amber-100/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2 text-amber-900">
                    <TrendingUp className="h-4 w-4" />
                    <span className="font-medium text-sm">Performance</span>
                  </div>
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs text-amber-700">
                      <span>Overall Progress</span>
                      <span>81%</span>
                    </div>
                    <Progress value={81} className="h-1 bg-amber-200" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="space-y-1">
                      <div className="text-sm font-bold text-green-700">15</div>
                      <div className="text-xs text-amber-600">Completed</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm font-bold text-orange-600">4</div>
                      <div className="text-xs text-amber-600">Pending</div>
                    </div>
                  </div>
                </div>

                <div className="bg-amber-100/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2 text-amber-900">
                    <Calendar className="h-4 w-4" />
                    <span className="font-medium text-sm">Upcoming Events</span>
                  </div>
                  <div className="space-y-2">
                    {upcomingEvents.slice(0, 2).map((event) => (
                      <div key={event.id} className="bg-amber-200/50 rounded p-2">
                        <div className="font-medium text-xs text-amber-900">{event.title}</div>
                        <div className="text-xs text-amber-700">{event.date} at {event.time}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-amber-100/50 rounded-lg p-4 space-y-2">
                  <div className="flex items-center gap-2 text-amber-900">
                    <FileText className="h-4 w-4" />
                    <span className="font-medium text-sm">Assignments</span>
                  </div>
                  <div className="space-y-2">
                    {assignmentsData.filter(a => !a.submitted).slice(0, 2).map((assignment) => (
                      <div key={assignment.id} className="bg-amber-200/50 rounded p-2">
                        <div className="font-medium text-xs text-amber-900">{assignment.title}</div>
                        <div className="text-xs text-amber-700">Due: {assignment.dueDate}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-amber-900 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Recent Activity
                </h3>
                <div className="space-y-2">
                  {recentActivityData.slice(0, 3).map((activity) => (
                    <div key={activity.id} className="flex items-center gap-3 p-3 rounded-lg bg-amber-100/50">
                      <div className="text-amber-700">
                        {getActivityIcon(activity.type)}
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm text-amber-900">{activity.title}</div>
                        <div className="text-xs text-amber-700">{activity.time} • {activity.course}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-center gap-3 pt-4">
                <Button variant="outline" size="sm" className="bg-amber-200 text-amber-800 border-amber-300 hover:bg-amber-300">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  Messages
                </Button>
                <Button variant="outline" size="sm" className="bg-amber-200 text-amber-800 border-amber-300 hover:bg-amber-300">
                  <Award className="h-4 w-4 mr-1" />
                  Grades
                </Button>
                <Button variant="outline" size="sm" className="bg-amber-200 text-amber-800 border-amber-300 hover:bg-amber-300">
                  <Calendar className="h-4 w-4 mr-1" />
                  Calendar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AadiKulPage;