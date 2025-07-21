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
    <div className="min-h-screen scroll-background relative">
      <Navigation currentSection="kul" />
      
      {/* Main Content Area - constrained between top and bottom bars */}
      <div className="fixed inset-0 pt-16 pb-16 overflow-hidden">
        <div className="h-full overflow-y-auto custom-scrollbar">
          <div className="min-h-full py-8 px-4">
            <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6">
            <h1 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              <span className="calibri">A</span><span className="samarkan">adi</span><span className="calibri">K</span><span className="samarkan">ul</span>
            </h1>
            <p className="text-md md:text-lg text-muted-foreground">
              Learning Management System
            </p>
          </div>
          {/* Student Dashboard Header */}
          <Card className="mb-8 bg-white/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={studentData.avatar} alt={studentData.name} />
                    <AvatarFallback>PS</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold">{studentData.name}</h2>
                    <p className="text-muted-foreground">
                      {studentData.studentId} • {studentData.grade} • Section {studentData.section}
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{studentData.overallGrade}</div>
                    <div className="text-sm text-muted-foreground">Overall Grade</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600">{studentData.attendance}%</div>
                    <div className="text-sm text-muted-foreground">Attendance</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">{studentData.creditsEarned}/{studentData.totalCredits}</div>
                    <div className="text-sm text-muted-foreground">Credits</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-600">{coursesData.length}</div>
                    <div className="text-sm text-muted-foreground">Courses</div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <Tabs defaultValue="dashboard" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5 bg-white/10 border border-white/20">
              <TabsTrigger value="dashboard" className="data-[state=inactive]:bg-transparent data-[state=inactive]:text-white data-[state=inactive]:hover:bg-white/20 data-[state=active]:bg-white data-[state=active]:text-black">Dashboard</TabsTrigger>
              <TabsTrigger value="courses" className="data-[state=inactive]:bg-transparent data-[state=inactive]:text-white data-[state=inactive]:hover:bg-white/20 data-[state=active]:bg-white data-[state=active]:text-black">Courses</TabsTrigger>
              <TabsTrigger value="assignments" className="data-[state=inactive]:bg-transparent data-[state=inactive]:text-white data-[state=inactive]:hover:bg-white/20 data-[state=active]:bg-white data-[state=active]:text-black">Assignments</TabsTrigger>
              <TabsTrigger value="grades" className="data-[state=inactive]:bg-transparent data-[state=inactive]:text-white data-[state=inactive]:hover:bg-white/20 data-[state=active]:bg-white data-[state=active]:text-black">Grades</TabsTrigger>
              <TabsTrigger value="calendar" className="data-[state=inactive]:bg-transparent data-[state=inactive]:text-white data-[state=inactive]:hover:bg-white/20 data-[state=active]:bg-white data-[state=active]:text-black">Calendar</TabsTrigger>
            </TabsList>

            {/* Dashboard Tab */}
            <TabsContent value="dashboard" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Quick Stats */}
                <Card className="bg-white/50 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5" />
                      Performance Overview
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Overall Progress</span>
                        <span>81%</span>
                      </div>
                      <Progress value={81} className="h-2" />
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div className="space-y-1">
                        <div className="text-lg font-bold text-green-600">15</div>
                        <div className="text-xs text-muted-foreground">Completed</div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-lg font-bold text-orange-600">4</div>
                        <div className="text-xs text-muted-foreground">Pending</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Upcoming Events */}
                <Card className="bg-white/50 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5" />
                      Upcoming Events
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {upcomingEvents.slice(0, 3).map((event) => (
                      <div key={event.id} className="flex items-center justify-between p-2 rounded-lg bg-white/50">
                        <div>
                          <div className="font-medium text-sm">{event.title}</div>
                          <div className="text-xs text-muted-foreground">{event.course}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs font-medium">{event.date}</div>
                          <div className="text-xs text-muted-foreground">{event.time}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card className="bg-white/50 backdrop-blur-sm">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {recentActivityData.slice(0, 4).map((activity) => (
                      <div key={activity.id} className="flex items-center gap-3 p-2 rounded-lg bg-white/50">
                        <div className="text-primary">
                          {getActivityIcon(activity.type)}
                        </div>
                        <div className="flex-1">
                          <div className="font-medium text-sm">{activity.title}</div>
                          <div className="text-xs text-muted-foreground">{activity.time}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Course Progress */}
              <Card className="bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Course Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {coursesData.map((course) => (
                      <div key={course.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="font-medium">{course.title}</div>
                          <Badge variant="outline">{course.grade}</Badge>
                        </div>
                        <div className="flex justify-between text-sm text-muted-foreground">
                          <span>{course.instructor}</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Courses Tab */}
            <TabsContent value="courses" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {coursesData.map((course) => (
                  <Card key={course.id} className="group hover:shadow-lg transition-all duration-300 bg-white/50 backdrop-blur-sm">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-2 right-2">
                        <Badge variant="secondary" className="bg-white/90 text-primary">
                          {course.grade}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-3">
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription>{course.instructor}</CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <p className="text-sm text-muted-foreground">{course.description}</p>
                      
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          <span>{course.students} students</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{course.duration}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-2">
                        <div className="text-sm text-muted-foreground">
                          Next: {new Date(course.nextClass).toLocaleDateString()}
                        </div>
                        <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                          Enter Course
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Assignments Tab */}
            <TabsContent value="assignments" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="h-5 w-5" />
                      Pending Assignments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {assignmentsData.filter(a => !a.submitted).map((assignment) => (
                      <div key={assignment.id} className="p-4 rounded-lg border bg-white/50">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium">{assignment.title}</h4>
                            <p className="text-sm text-muted-foreground">{assignment.course}</p>
                          </div>
                          <Badge variant={getStatusColor(assignment.status)}>
                            {assignment.status}
                          </Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-muted-foreground">
                            Due: {new Date(assignment.dueDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium">{assignment.points} pts</span>
                            <Button size="sm">Submit</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Completed Assignments
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {assignmentsData.filter(a => a.submitted).map((assignment) => (
                      <div key={assignment.id} className="p-4 rounded-lg border bg-white/50">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h4 className="font-medium">{assignment.title}</h4>
                            <p className="text-sm text-muted-foreground">{assignment.course}</p>
                          </div>
                          <Badge variant="default">Submitted</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="text-sm text-muted-foreground">
                            Submitted: {new Date(assignment.dueDate).toLocaleDateString()}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-green-600">{assignment.grade}</span>
                            <Button size="sm" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">View</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            {/* Grades Tab */}
            <TabsContent value="grades" className="space-y-6">
              <Card className="bg-white/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    Grade Report
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {coursesData.map((course) => (
                      <div key={course.id} className="border rounded-lg p-4 bg-white/50">
                        <div className="flex justify-between items-center mb-4">
                          <div>
                            <h4 className="font-semibold">{course.title}</h4>
                            <p className="text-sm text-muted-foreground">{course.instructor}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-2xl font-bold text-primary">{course.grade}</div>
                            <div className="text-sm text-muted-foreground">{course.progress}% Complete</div>
                          </div>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Calendar Tab */}
            <TabsContent value="calendar" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <Card className="bg-white/50 backdrop-blur-sm">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Upcoming Schedule
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {upcomingEvents.map((event) => (
                        <div key={event.id} className="flex items-center gap-4 p-4 rounded-lg border bg-white/50">
                          <div className="text-center min-w-[60px]">
                            <div className="text-lg font-bold">{new Date(event.date).getDate()}</div>
                            <div className="text-sm text-muted-foreground">
                              {new Date(event.date).toLocaleDateString('en', { month: 'short' })}
                            </div>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{event.title}</h4>
                            <p className="text-sm text-muted-foreground">{event.course}</p>
                            <p className="text-sm text-muted-foreground">{event.time}</p>
                          </div>
                          <Badge variant="outline" className="capitalize">
                            {event.type}
                          </Badge>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                <Card className="bg-white/50 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      Submit Assignment
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-white/10 border-white/20 text-white hover:bg-white/20">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Message Instructor
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-white/10 border-white/20 text-white hover:bg-white/20">
                      <Download className="h-4 w-4 mr-2" />
                      Download Resources
                    </Button>
                    <Button variant="outline" className="w-full justify-start bg-white/10 border-white/20 text-white hover:bg-white/20">
                      <Video className="h-4 w-4 mr-2" />
                      Join Virtual Class
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Bottom padding to ensure content doesn't touch scroll bar */}
          <div className="h-8"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Roll Bar Text */}
      <div className="fixed bottom-0 w-full bg-black/[0.005] backdrop-blur-sm z-10 border-t border-white/[0.005]">
        <div className="flex justify-center items-center py-2 px-2 md:py-3 md:px-4 max-w-6xl mx-auto">
          <div className="text-white font-bold text-xl" style={{ fontSize: '1.25rem' }}>
            प्राचीनानां निनादः भविष्यस्य संरचना
          </div>
        </div>
      </div>
    </div>
  );
};

export default AadiKulPage;