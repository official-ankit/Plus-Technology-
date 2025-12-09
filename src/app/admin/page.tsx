import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import {
  Users,
  BookOpen,
  Award,
  TrendingUp,
  Search,
  Plus,
  MoreHorizontal,
  Eye,
  Edit,
  Trash2,
  Download,
  Filter,
  ArrowUpRight,
  ArrowDownRight,
  DollarSign,
  GraduationCap,
  BarChart3,
  Settings,
  Bell,
  ChevronRight,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

// Mock admin data
const stats = [
  {
    title: 'Total Students',
    value: '12,458',
    change: '+12%',
    trend: 'up',
    icon: Users,
    color: 'blue',
  },
  {
    title: 'Active Courses',
    value: '48',
    change: '+3',
    trend: 'up',
    icon: BookOpen,
    color: 'green',
  },
  {
    title: 'Certificates Issued',
    value: '2,340',
    change: '+18%',
    trend: 'up',
    icon: Award,
    color: 'yellow',
  },
  {
    title: 'Monthly Revenue',
    value: '₹8,45,200',
    change: '+8%',
    trend: 'up',
    icon: DollarSign,
    color: 'purple',
  },
];

const recentEnrollments = [
  { id: 1, student: 'Rahul Sharma', email: 'rahul@example.com', course: 'C++ Programming', date: '2 hours ago', amount: '₹4,999' },
  { id: 2, student: 'Priya Patel', email: 'priya@example.com', course: 'O-Level Computer Science', date: '5 hours ago', amount: '₹12,999' },
  { id: 3, student: 'Amit Kumar', email: 'amit@example.com', course: 'Web Development Bootcamp', date: '1 day ago', amount: '₹7,999' },
  { id: 4, student: 'Sneha Gupta', email: 'sneha@example.com', course: 'Python for Beginners', date: '1 day ago', amount: '₹3,999' },
  { id: 5, student: 'Vikram Singh', email: 'vikram@example.com', course: 'Data Structures', date: '2 days ago', amount: '₹6,999' },
];

const courses = [
  { id: '1', title: 'C++ Programming Fundamentals', students: 2340, rating: 4.8, status: 'published', instructor: 'Dr. Sarah Johnson', revenue: '₹11,69,660' },
  { id: '2', title: 'O-Level Computer Science', students: 1856, rating: 4.9, status: 'published', instructor: 'Prof. Michael Chen', revenue: '₹24,11,144' },
  { id: '3', title: 'Web Development Bootcamp', students: 3120, rating: 4.7, status: 'published', instructor: 'Alex Rivera', revenue: '₹24,95,680' },
  { id: '4', title: 'Python for Beginners', students: 4560, rating: 4.8, status: 'published', instructor: 'Dr. Emily Watson', revenue: '₹18,22,440' },
  { id: '5', title: 'Machine Learning Basics', students: 0, rating: 0, status: 'draft', instructor: 'Dr. Arun Kumar', revenue: '₹0' },
];

const students = [
  { id: 1, name: 'Rahul Sharma', email: 'rahul@example.com', enrolledCourses: 3, completedCourses: 1, joined: 'Oct 2024', status: 'active' },
  { id: 2, name: 'Priya Patel', email: 'priya@example.com', enrolledCourses: 2, completedCourses: 0, joined: 'Nov 2024', status: 'active' },
  { id: 3, name: 'Amit Kumar', email: 'amit@example.com', enrolledCourses: 5, completedCourses: 3, joined: 'Sep 2024', status: 'active' },
  { id: 4, name: 'Sneha Gupta', email: 'sneha@example.com', enrolledCourses: 1, completedCourses: 0, joined: 'Dec 2024', status: 'active' },
  { id: 5, name: 'Vikram Singh', email: 'vikram@example.com', enrolledCourses: 4, completedCourses: 2, joined: 'Aug 2024', status: 'inactive' },
];

const recentActivities = [
  { id: 1, action: 'New course published', detail: 'Machine Learning Basics by Dr. Arun Kumar', time: '1 hour ago' },
  { id: 2, action: 'Certificate issued', detail: 'Python Fundamentals - Rahul Sharma', time: '3 hours ago' },
  { id: 3, action: 'New instructor added', detail: 'Dr. Meena Krishnan - Data Science', time: '5 hours ago' },
  { id: 4, action: 'Course updated', detail: 'C++ Programming - New module added', time: '1 day ago' },
  { id: 5, action: 'Batch payment processed', detail: '₹2,45,000 - 50 enrollments', time: '1 day ago' },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Admin Header */}
      <div className="border-b bg-background">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-4">
            <h1 className="text-xl font-bold">Admin Dashboard</h1>
            <Badge variant="secondary">Admin</Badge>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <div className="mt-1 flex items-center gap-1 text-sm">
                      {stat.trend === 'up' ? (
                        <ArrowUpRight className="h-4 w-4 text-green-500" />
                      ) : (
                        <ArrowDownRight className="h-4 w-4 text-red-500" />
                      )}
                      <span className={stat.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                        {stat.change}
                      </span>
                      <span className="text-muted-foreground">vs last month</span>
                    </div>
                  </div>
                  <div className={`rounded-full p-3 bg-${stat.color}-100 dark:bg-${stat.color}-900/20`}>
                    <stat.icon className={`h-6 w-6 text-${stat.color}-600`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Main Tables */}
          <div className="lg:col-span-2 space-y-8">
            {/* Courses Management */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Courses</CardTitle>
                    <CardDescription>Manage all courses</CardDescription>
                  </div>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Course
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search courses..." className="pl-9" />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b text-left text-sm text-muted-foreground">
                        <th className="pb-3 font-medium">Course</th>
                        <th className="pb-3 font-medium">Students</th>
                        <th className="pb-3 font-medium">Rating</th>
                        <th className="pb-3 font-medium">Revenue</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {courses.map((course) => (
                        <tr key={course.id} className="border-b last:border-0">
                          <td className="py-4">
                            <div>
                              <div className="font-medium">{course.title}</div>
                              <div className="text-sm text-muted-foreground">{course.instructor}</div>
                            </div>
                          </td>
                          <td className="py-4">{course.students.toLocaleString()}</td>
                          <td className="py-4">
                            {course.rating > 0 ? (
                              <div className="flex items-center gap-1">
                                <span>⭐</span>
                                <span>{course.rating}</span>
                              </div>
                            ) : (
                              <span className="text-muted-foreground">-</span>
                            )}
                          </td>
                          <td className="py-4">{course.revenue}</td>
                          <td className="py-4">
                            <Badge variant={course.status === 'published' ? 'default' : 'secondary'}>
                              {course.status}
                            </Badge>
                          </td>
                          <td className="py-4">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Eye className="mr-2 h-4 w-4" />
                                  View
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Delete
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            {/* Students Management */}
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Students</CardTitle>
                    <CardDescription>Manage student accounts</CardDescription>
                  </div>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4 flex items-center gap-4">
                  <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input placeholder="Search students..." className="pl-9" />
                  </div>
                  <Button variant="outline" size="icon">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b text-left text-sm text-muted-foreground">
                        <th className="pb-3 font-medium">Student</th>
                        <th className="pb-3 font-medium">Enrolled</th>
                        <th className="pb-3 font-medium">Completed</th>
                        <th className="pb-3 font-medium">Joined</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {students.map((student) => (
                        <tr key={student.id} className="border-b last:border-0">
                          <td className="py-4">
                            <div className="flex items-center gap-3">
                              <div className="h-8 w-8 rounded-full bg-primary/10" />
                              <div>
                                <div className="font-medium">{student.name}</div>
                                <div className="text-sm text-muted-foreground">{student.email}</div>
                              </div>
                            </div>
                          </td>
                          <td className="py-4">{student.enrolledCourses}</td>
                          <td className="py-4">{student.completedCourses}</td>
                          <td className="py-4">{student.joined}</td>
                          <td className="py-4">
                            <Badge variant={student.status === 'active' ? 'default' : 'secondary'}>
                              {student.status}
                            </Badge>
                          </td>
                          <td className="py-4">
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size="icon">
                                  <MoreHorizontal className="h-4 w-4" />
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                  <Eye className="mr-2 h-4 w-4" />
                                  View Profile
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                  <Edit className="mr-2 h-4 w-4" />
                                  Edit
                                </DropdownMenuItem>
                                <DropdownMenuItem className="text-destructive">
                                  <Trash2 className="mr-2 h-4 w-4" />
                                  Deactivate
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Recent Enrollments */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Enrollments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentEnrollments.slice(0, 4).map((enrollment) => (
                  <div key={enrollment.id} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-primary/10" />
                      <div>
                        <div className="text-sm font-medium">{enrollment.student}</div>
                        <div className="text-xs text-muted-foreground">{enrollment.course}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-green-600">{enrollment.amount}</div>
                      <div className="text-xs text-muted-foreground">{enrollment.date}</div>
                    </div>
                  </div>
                ))}
                <Button variant="ghost" className="w-full" size="sm">
                  View All
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex gap-3">
                    <div className="mt-0.5 h-2 w-2 rounded-full bg-primary" />
                    <div className="flex-1">
                      <div className="text-sm font-medium">{activity.action}</div>
                      <div className="text-xs text-muted-foreground">{activity.detail}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{activity.time}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="mr-2 h-4 w-4" />
                  Create New Course
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="mr-2 h-4 w-4" />
                  Add Instructor
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Award className="mr-2 h-4 w-4" />
                  Issue Certificate
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  Generate Report
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
