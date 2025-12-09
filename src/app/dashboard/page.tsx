import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  BookOpen,
  Clock,
  Award,
  TrendingUp,
  Calendar,
  Star,
  PlayCircle,
  CheckCircle,
  BarChart3,
  Target,
  Trophy,
  Flame,
  ChevronRight,
  Download,
} from 'lucide-react';

// Mock data - would come from database with user session
const user = {
  name: 'Prateek',
  email: 'prateek@example.com',
  avatar: '/avatars/user.jpg',
  memberSince: 'January 2024',
  streak: 15,
  totalHoursLearned: 48,
  coursesCompleted: 2,
  certificatesEarned: 1,
};

const enrolledCourses = [
  {
    id: '1',
    title: 'C++ Programming Fundamentals',
    instructor: 'Dr. Sarah Johnson',
    progress: 65,
    nextLesson: 'For Loops',
    nextLessonId: '3-3',
    totalLessons: 42,
    completedLessons: 27,
    lastAccessed: '2 hours ago',
    image: '/courses/cpp.jpg',
  },
  {
    id: '2',
    title: 'O-Level Computer Science',
    instructor: 'Prof. Michael Chen',
    progress: 32,
    nextLesson: 'Binary Number System',
    nextLessonId: '4-1',
    totalLessons: 85,
    completedLessons: 27,
    lastAccessed: '1 day ago',
    image: '/courses/olevel.jpg',
  },
  {
    id: '3',
    title: 'Web Development Bootcamp',
    instructor: 'Alex Rivera',
    progress: 12,
    nextLesson: 'CSS Flexbox',
    nextLessonId: '2-4',
    totalLessons: 60,
    completedLessons: 7,
    lastAccessed: '3 days ago',
    image: '/courses/web.jpg',
  },
];

const completedCourses = [
  {
    id: '4',
    title: 'Python for Beginners',
    instructor: 'Dr. Emily Watson',
    completedDate: 'Nov 15, 2024',
    grade: 'A',
    certificate: true,
  },
  {
    id: '5',
    title: 'Introduction to Programming',
    instructor: 'Prof. John Smith',
    completedDate: 'Oct 20, 2024',
    grade: 'A+',
    certificate: true,
  },
];

const certificates = [
  {
    id: '1',
    title: 'Python Programming Fundamentals',
    issueDate: 'November 15, 2024',
    credentialId: 'CERT-2024-PY-001',
    image: '/certificates/python.jpg',
  },
];

const achievements = [
  {
    id: '1',
    title: 'First Steps',
    description: 'Complete your first lesson',
    icon: Star,
    earned: true,
    earnedDate: 'Oct 1, 2024',
  },
  {
    id: '2',
    title: 'Week Warrior',
    description: 'Maintain a 7-day streak',
    icon: Flame,
    earned: true,
    earnedDate: 'Oct 12, 2024',
  },
  {
    id: '3',
    title: 'Course Champion',
    description: 'Complete your first course',
    icon: Trophy,
    earned: true,
    earnedDate: 'Oct 20, 2024',
  },
  {
    id: '4',
    title: 'Quiz Master',
    description: 'Score 100% on 5 quizzes',
    icon: Target,
    earned: false,
    progress: 3,
    total: 5,
  },
  {
    id: '5',
    title: 'Dedicated Learner',
    description: 'Complete 100 lessons',
    icon: BookOpen,
    earned: false,
    progress: 61,
    total: 100,
  },
  {
    id: '6',
    title: 'Knowledge Seeker',
    description: 'Earn 5 certificates',
    icon: Award,
    earned: false,
    progress: 1,
    total: 5,
  },
];

const upcomingDeadlines = [
  {
    title: 'C++ Assignment: Loops',
    dueDate: 'Dec 20, 2024',
    course: 'C++ Programming Fundamentals',
    type: 'assignment',
  },
  {
    title: 'Mid-term Quiz',
    dueDate: 'Dec 25, 2024',
    course: 'O-Level Computer Science',
    type: 'quiz',
  },
];

const weeklyActivity = [
  { day: 'Mon', hours: 2 },
  { day: 'Tue', hours: 1.5 },
  { day: 'Wed', hours: 3 },
  { day: 'Thu', hours: 0.5 },
  { day: 'Fri', hours: 2 },
  { day: 'Sat', hours: 4 },
  { day: 'Sun', hours: 1 },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="border-b bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5" />
              <div>
                <h1 className="text-2xl font-bold">Welcome back, {user.name}!</h1>
                <p className="text-muted-foreground">
                  Keep up the great work! You&apos;re on a {user.streak}-day streak 🔥
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" asChild>
                <Link href="/courses">Browse Courses</Link>
              </Button>
              <Button asChild>
                <Link href={`/learn/${enrolledCourses[0].nextLessonId}`}>
                  <PlayCircle className="mr-2 h-4 w-4" />
                  Continue Learning
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">{user.totalHoursLearned}h</div>
                <div className="text-sm text-muted-foreground">Hours Learned</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/20">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{user.coursesCompleted}</div>
                <div className="text-sm text-muted-foreground">Courses Completed</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-100 dark:bg-yellow-900/20">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{user.certificatesEarned}</div>
                <div className="text-sm text-muted-foreground">Certificates</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-4 p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900/20">
                <Flame className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <div className="text-2xl font-bold">{user.streak} days</div>
                <div className="text-sm text-muted-foreground">Current Streak</div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Courses */}
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold">My Courses</h2>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/courses">View All</Link>
                </Button>
              </div>

              <Tabs defaultValue="in-progress">
                <TabsList>
                  <TabsTrigger value="in-progress">In Progress</TabsTrigger>
                  <TabsTrigger value="completed">Completed</TabsTrigger>
                </TabsList>

                <TabsContent value="in-progress" className="mt-4 space-y-4">
                  {enrolledCourses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="flex flex-col sm:flex-row">
                        <div className="aspect-video w-full shrink-0 bg-gradient-to-br from-primary/20 to-primary/5 sm:aspect-auto sm:w-48" />
                        <div className="flex flex-1 flex-col justify-between p-4">
                          <div>
                            <Link href={`/courses/${course.id}`}>
                              <h3 className="mb-1 font-semibold hover:text-primary">
                                {course.title}
                              </h3>
                            </Link>
                            <p className="mb-3 text-sm text-muted-foreground">
                              {course.instructor}
                            </p>
                            <div className="mb-2 flex items-center gap-2">
                              <Progress value={course.progress} className="h-2 flex-1" />
                              <span className="text-sm font-medium">{course.progress}%</span>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              {course.completedLessons}/{course.totalLessons} lessons •{' '}
                              {course.lastAccessed}
                            </p>
                          </div>
                          <div className="mt-4 flex items-center justify-between">
                            <div className="text-sm">
                              <span className="text-muted-foreground">Next: </span>
                              <span className="font-medium">{course.nextLesson}</span>
                            </div>
                            <Button size="sm" asChild>
                              <Link href={`/learn/${course.nextLessonId}`}>
                                Continue
                                <ChevronRight className="ml-1 h-4 w-4" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="completed" className="mt-4 space-y-4">
                  {completedCourses.map((course) => (
                    <Card key={course.id}>
                      <CardContent className="flex items-center justify-between p-4">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900/20">
                            <CheckCircle className="h-6 w-6 text-green-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{course.title}</h3>
                            <p className="text-sm text-muted-foreground">
                              {course.instructor} • Completed {course.completedDate}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge variant="secondary">Grade: {course.grade}</Badge>
                          {course.certificate && (
                            <Button variant="outline" size="sm">
                              <Download className="mr-2 h-4 w-4" />
                              Certificate
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              </Tabs>
            </div>

            {/* Weekly Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5" />
                  Weekly Activity
                </CardTitle>
                <CardDescription>Your learning hours this week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex h-40 items-end justify-between gap-2">
                  {weeklyActivity.map((day) => (
                    <div key={day.day} className="flex flex-1 flex-col items-center gap-2">
                      <div
                        className="w-full rounded-t bg-primary transition-all hover:bg-primary/80"
                        style={{ height: `${(day.hours / 4) * 100}%`, minHeight: day.hours ? '8px' : '0' }}
                      />
                      <span className="text-xs text-muted-foreground">{day.day}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between text-sm">
                  <span className="text-muted-foreground">
                    Total: {weeklyActivity.reduce((acc, d) => acc + d.hours, 0)} hours
                  </span>
                  <span className="text-muted-foreground">Goal: 10 hours/week</span>
                </div>
              </CardContent>
            </Card>

            {/* Certificates */}
            {certificates.length > 0 && (
              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-xl font-bold">My Certificates</h2>
                  <Button variant="ghost" size="sm">
                    View All
                  </Button>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {certificates.map((cert) => (
                    <Card key={cert.id} className="overflow-hidden">
                      <div className="aspect-[4/3] bg-gradient-to-br from-yellow-100 to-yellow-50 dark:from-yellow-900/20 dark:to-yellow-800/10 flex items-center justify-center">
                        <Award className="h-16 w-16 text-yellow-500" />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="mb-1 font-semibold">{cert.title}</h3>
                        <p className="mb-3 text-sm text-muted-foreground">
                          Issued: {cert.issueDate}
                        </p>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            View
                          </Button>
                          <Button size="sm" className="flex-1">
                            <Download className="mr-2 h-4 w-4" />
                            Download
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Deadlines */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Calendar className="h-5 w-5" />
                  Upcoming Deadlines
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingDeadlines.map((deadline, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 h-2 w-2 rounded-full bg-primary" />
                    <div className="flex-1">
                      <div className="font-medium">{deadline.title}</div>
                      <div className="text-sm text-muted-foreground">{deadline.course}</div>
                      <div className="mt-1 flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {deadline.type}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{deadline.dueDate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Trophy className="h-5 w-5" />
                  Achievements
                </CardTitle>
                <CardDescription>
                  {achievements.filter((a) => a.earned).length}/{achievements.length} earned
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {achievements.slice(0, 4).map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`flex items-center gap-3 ${
                      !achievement.earned ? 'opacity-50' : ''
                    }`}
                  >
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        achievement.earned
                          ? 'bg-yellow-100 dark:bg-yellow-900/20'
                          : 'bg-muted'
                      }`}
                    >
                      <achievement.icon
                        className={`h-5 w-5 ${
                          achievement.earned ? 'text-yellow-600' : 'text-muted-foreground'
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{achievement.title}</div>
                      <div className="text-xs text-muted-foreground">
                        {achievement.earned
                          ? `Earned ${achievement.earnedDate}`
                          : `${achievement.progress}/${achievement.total}`}
                      </div>
                    </div>
                    {achievement.earned && (
                      <CheckCircle className="h-5 w-5 text-green-500" />
                    )}
                  </div>
                ))}
                <Button variant="outline" className="w-full" size="sm">
                  View All Achievements
                </Button>
              </CardContent>
            </Card>

            {/* Learning Tips */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <TrendingUp className="mb-4 h-8 w-8" />
                <h3 className="mb-2 font-semibold">Pro Tip</h3>
                <p className="mb-4 text-sm text-primary-foreground/80">
                  Complete at least one lesson every day to maintain your streak and reinforce learning!
                </p>
                <Button variant="secondary" size="sm" asChild>
                  <Link href={`/learn/${enrolledCourses[0].nextLessonId}`}>
                    Start Today&apos;s Lesson
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
