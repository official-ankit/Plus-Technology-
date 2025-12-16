'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  ChevronLeft,
  ChevronRight,
  PlayCircle,
  FileText,
  Code,
  BookOpen,
  CheckCircle,
  Clock,
  Menu,
  X,
  MessageSquare,
  Download,
  Settings,
  Maximize2,
  Volume2,
  SkipBack,
  SkipForward,
  Play,
  Pause,
} from 'lucide-react';

// Mock data - would come from database
const lesson = {
  id: '3-3',
  title: 'For Loops',
  duration: '30m',
  type: 'video',
  videoUrl: '/videos/for-loops.mp4',
  description: `In this lesson, you'll learn about for loops in C++. For loops are one of the most commonly used control flow structures that allow you to repeat a block of code a specific number of times.

We'll cover:
- Basic for loop syntax
- Loop initialization, condition, and increment
- Common patterns and use cases
- Nested for loops
- Range-based for loops (C++11)`,
  resources: [
    { name: 'Lesson Notes (PDF)', size: '245 KB', type: 'pdf' },
    { name: 'Source Code', size: '12 KB', type: 'code' },
    { name: 'Exercise Files', size: '35 KB', type: 'code' },
  ],
};

const course = {
  id: '1',
  title: 'C++ Programming Fundamentals',
  modules: [
    {
      id: '1',
      title: 'Getting Started with C++',
      lessons: [
        { id: '1-1', title: 'Welcome to the Course', duration: '5m', type: 'video', completed: true },
        { id: '1-2', title: 'Setting Up Your Development Environment', duration: '15m', type: 'video', completed: true },
        { id: '1-3', title: 'Your First C++ Program', duration: '20m', type: 'video', completed: true },
        { id: '1-4', title: 'Understanding the Build Process', duration: '15m', type: 'video', completed: true },
        { id: '1-5', title: 'Quiz: Getting Started', duration: '10m', type: 'quiz', completed: true },
        { id: '1-6', title: 'Coding Exercise: Hello World Variations', duration: '25m', type: 'exercise', completed: true },
      ],
    },
    {
      id: '2',
      title: 'Variables, Data Types, and Operators',
      lessons: [
        { id: '2-1', title: 'Introduction to Variables', duration: '20m', type: 'video', completed: true },
        { id: '2-2', title: 'Primitive Data Types', duration: '35m', type: 'video', completed: true },
        { id: '2-3', title: 'Type Conversion and Casting', duration: '25m', type: 'video', completed: true },
        { id: '2-4', title: 'Arithmetic Operators', duration: '30m', type: 'video', completed: true },
        { id: '2-5', title: 'Comparison and Logical Operators', duration: '25m', type: 'video', completed: true },
        { id: '2-6', title: 'Assignment and Compound Operators', duration: '20m', type: 'video', completed: true },
        { id: '2-7', title: 'Quiz: Variables and Operators', duration: '15m', type: 'quiz', completed: true },
        { id: '2-8', title: 'Project: Simple Calculator', duration: '45m', type: 'project', completed: true },
      ],
    },
    {
      id: '3',
      title: 'Control Flow and Loops',
      lessons: [
        { id: '3-1', title: 'If-Else Statements', duration: '25m', type: 'video', completed: true },
        { id: '3-2', title: 'Switch Statements', duration: '20m', type: 'video', completed: true },
        { id: '3-3', title: 'For Loops', duration: '30m', type: 'video', completed: false, current: true },
        { id: '3-4', title: 'While and Do-While Loops', duration: '25m', type: 'video', completed: false },
        { id: '3-5', title: 'Nested Loops', duration: '20m', type: 'video', completed: false },
        { id: '3-6', title: 'Break and Continue', duration: '15m', type: 'video', completed: false },
        { id: '3-7', title: 'Quiz: Control Flow', duration: '15m', type: 'quiz', completed: false },
        { id: '3-8', title: 'Project: Number Guessing Game', duration: '45m', type: 'project', completed: false },
      ],
    },
    {
      id: '4',
      title: 'Functions and Scope',
      lessons: [
        { id: '4-1', title: 'Defining and Calling Functions', duration: '30m', type: 'video', completed: false },
        { id: '4-2', title: 'Function Parameters and Return Types', duration: '25m', type: 'video', completed: false },
        { id: '4-3', title: 'Default Parameters and Overloading', duration: '30m', type: 'video', completed: false },
        { id: '4-4', title: 'Variable Scope and Lifetime', duration: '25m', type: 'video', completed: false },
      ],
    },
  ],
};

// Calculate progress
const totalLessons = course.modules.reduce((acc, mod) => acc + mod.lessons.length, 0);
const completedLessons = course.modules.reduce(
  (acc, mod) => acc + mod.lessons.filter((l) => l.completed).length,
  0
);
const progressPercentage = Math.round((completedLessons / totalLessons) * 100);

function getLessonIcon(type: string) {
  switch (type) {
    case 'video':
      return PlayCircle;
    case 'quiz':
      return FileText;
    case 'exercise':
      return Code;
    case 'project':
      return BookOpen;
    default:
      return PlayCircle;
  }
}

export default function LearnPage({ params }: { params: { lessonId: string } }) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Find current, previous, and next lessons
  const allLessons = course.modules.flatMap((mod) => mod.lessons);
  const currentIndex = allLessons.findIndex((l) => l.id === params.lessonId);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  return (
    <div className="flex h-[calc(100vh-64px)] flex-col">
      {/* Top Bar */}
      <div className="flex h-14 items-center justify-between border-b bg-background px-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <Link
            href={`/courses/${course.id}`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">Back to Course</span>
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-2 sm:flex">
            <Progress value={progressPercentage} className="h-2 w-24" />
            <span className="text-sm text-muted-foreground">{progressPercentage}% complete</span>
          </div>
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } fixed inset-y-0 left-0 top-[112px] z-30 w-80 border-r bg-background transition-transform lg:relative lg:top-0 lg:translate-x-0`}
        >
          <div className="flex h-full flex-col">
            <div className="flex items-center justify-between border-b p-4">
              <div>
                <h2 className="font-semibold line-clamp-1">{course.title}</h2>
                <p className="text-sm text-muted-foreground">
                  {completedLessons}/{totalLessons} lessons completed
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            <div className="flex-1 overflow-y-auto">
              {course.modules.map((module) => (
                <div key={module.id} className="border-b">
                  <div className="p-4">
                    <h3 className="font-medium text-sm">{module.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">
                      {module.lessons.filter((l) => l.completed).length}/{module.lessons.length} completed
                    </p>
                  </div>
                  <ul>
                    {module.lessons.map((lessonItem) => {
                      const Icon = getLessonIcon(lessonItem.type);
                      const isCurrent = lessonItem.id === params.lessonId;
                      return (
                        <li key={lessonItem.id}>
                          <Link
                            href={`/learn/${lessonItem.id}`}
                            className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                              isCurrent
                                ? 'bg-primary/10 text-primary border-l-2 border-primary'
                                : 'hover:bg-muted'
                            }`}
                          >
                            {lessonItem.completed ? (
                              <CheckCircle className="h-4 w-4 shrink-0 text-primary" />
                            ) : (
                              <Icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                            )}
                            <span className="flex-1 line-clamp-1">{lessonItem.title}</span>
                            <span className="text-xs text-muted-foreground">{lessonItem.duration}</span>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          {/* Video Player */}
          <div className="relative aspect-video bg-black">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <PlayCircle className="mx-auto mb-4 h-16 w-16 opacity-80" />
                <p className="text-lg">Video Player Placeholder</p>
                <p className="text-sm opacity-60">{lesson.title}</p>
              </div>
            </div>

            {/* Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="mb-2 flex items-center gap-2">
                <Progress value={35} className="h-1 flex-1" />
                <span className="text-xs text-white/80">10:30 / 30:00</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <SkipBack className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white hover:bg-white/20"
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <SkipForward className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <Volume2 className="h-5 w-5" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <Settings className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                    <Maximize2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Lesson Content */}
          <div className="p-6">
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h1 className="mb-2 text-2xl font-bold">{lesson.title}</h1>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <Badge variant="secondary">{lesson.type}</Badge>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {lesson.duration}
                  </span>
                </div>
              </div>
              <Button className="gap-2">
                <CheckCircle className="h-4 w-4" />
                Mark Complete
              </Button>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList>
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="notes">Notes</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="discussion">Discussion</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="prose prose-sm max-w-none">
                      {lesson.description.split('\n\n').map((para, i) => (
                        <p key={i} className="whitespace-pre-line">{para}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="notes" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Notes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <textarea
                      className="min-h-[200px] w-full resize-none rounded-md border bg-background p-4 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Take notes during the lesson..."
                    />
                    <div className="mt-4 flex justify-end">
                      <Button>Save Notes</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="resources" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Lesson Resources</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {lesson.resources.map((resource, i) => (
                        <li key={i}>
                          <Button variant="outline" className="w-full justify-between">
                            <span className="flex items-center gap-2">
                              <Download className="h-4 w-4" />
                              {resource.name}
                            </span>
                            <span className="text-sm text-muted-foreground">{resource.size}</span>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="discussion" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Discussion</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-8">
                      <MessageSquare className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                      <p className="text-muted-foreground mb-4">
                        No discussions yet. Be the first to ask a question!
                      </p>
                      <Button>Start a Discussion</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              {prevLesson ? (
                <Button variant="outline" asChild>
                  <Link href={`/learn/${prevLesson.id}`} className="gap-2">
                    <ChevronLeft className="h-4 w-4" />
                    Previous: {prevLesson.title}
                  </Link>
                </Button>
              ) : (
                <div />
              )}
              {nextLesson && (
                <Button asChild>
                  <Link href={`/learn/${nextLesson.id}`} className="gap-2">
                    Next: {nextLesson.title}
                    <ChevronRight className="h-4 w-4" />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
