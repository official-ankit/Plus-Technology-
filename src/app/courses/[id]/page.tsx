'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { EnrollForm } from '@/components/forms/enroll-form';
import {
  Star,
  Clock,
  Users,
  Award,
  PlayCircle,
  FileText,
  CheckCircle,
  ChevronRight,
  Globe,
  BarChart3,
  BookOpen,
  MessageSquare,
  Video,
  Code,
} from 'lucide-react';
import { getCourseById } from '@/lib/courses-data';
import { useEffect, useState } from 'react';

function getLessonIcon(type: string) {
  switch (type) {
    case 'video':
      return Video;
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

export default function CourseDetailPage() {
  const params = useParams();
  const courseId = params.id as string;
  const [course, setCourse] = useState(getCourseById(courseId));

  useEffect(() => {
    const courseData = getCourseById(courseId);
    setCourse(courseData);
  }, [courseId]);

  if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
          <p className="text-muted-foreground mb-6">The course you're looking for doesn't exist.</p>
          <Button asChild>
            <Link href="/courses">Browse All Courses</Link>
          </Button>
        </div>
      </div>
    );
  }


  const totalLessons = course.modules.reduce((acc, mod) => acc + mod.lessons.length, 0);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background border-b">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Course Info */}
            <div className="lg:col-span-2">
              {/* Breadcrumb */}
              <nav className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/courses" className="hover:text-foreground">
                  Courses
                </Link>
                <ChevronRight className="h-4 w-4" />
                <Link href={`/courses?category=${course.category}`} className="hover:text-foreground">
                  {course.category}
                </Link>
              </nav>

              <div className="mb-4 flex flex-wrap gap-2">
                {course.isBestseller && (
                  <Badge className="bg-yellow-500 text-yellow-950">Bestseller</Badge>
                )}
                {course.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="mb-4 text-3xl font-bold md:text-4xl">{course.title}</h1>
              <p className="mb-6 text-lg text-muted-foreground">{course.subtitle}</p>

              <div className="mb-6 flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{course.rating}</span>
                  <span className="text-muted-foreground">
                    ({course.ratingsCount.toLocaleString()} ratings)
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span>Created by <Link href="#instructor" className="text-primary hover:underline">{course.instructor.name}</Link></span>
                <span className="flex items-center gap-1">
                  <Globe className="h-4 w-4" />
                  {course.language}
                </span>
                <span>Last updated {course.lastUpdated}</span>
              </div>
            </div>

            {/* Course Card (Desktop) */}
            <div className="hidden lg:block">
              <Card className="sticky top-24 shadow-lg">
                {/* Course Preview */}
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Button size="lg" className="gap-2 rounded-full">
                      <PlayCircle className="h-6 w-6" />
                      Preview Course
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="text-3xl font-bold">₹{course.price.toLocaleString()}</span>
                    <span className="text-lg text-muted-foreground line-through">
                      ₹{course.originalPrice.toLocaleString()}
                    </span>
                    <Badge variant="destructive">{course.discount}% off</Badge>
                  </div>

                  <div className="mb-4 space-y-3">
                    <EnrollForm 
                      courseName={course.title} 
                      coursePrice={course.price}
                      originalPrice={course.originalPrice}
                    />
                    <Button variant="outline" className="w-full" size="lg">
                      Add to Wishlist
                    </Button>
                  </div>

                  <p className="mb-4 text-center text-sm text-muted-foreground">
                    30-day money-back guarantee
                  </p>

                  <div className="space-y-3 text-sm">
                    <h4 className="font-semibold">This course includes:</h4>
                    {course.features.slice(0, 5).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Sticky CTA */}
      <div className="sticky top-0 z-40 border-b bg-background p-4 lg:hidden">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold">₹{course.price.toLocaleString()}</span>
              <span className="text-sm text-muted-foreground line-through">
                ₹{course.originalPrice.toLocaleString()}
              </span>
            </div>
          </div>
          <EnrollForm 
            courseName={course.title} 
            coursePrice={course.price}
            originalPrice={course.originalPrice}
            trigger={<Button>Enroll Now</Button>}
          />
        </div>
      </div>

      {/* Course Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="lg:max-w-3xl">
          <Tabs defaultValue="overview">
            <TabsList className="mb-6 w-full justify-start">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
              <TabsTrigger value="instructor">Instructor</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-8">
              {/* What you'll learn */}
              <Card>
                <CardHeader>
                  <CardTitle>What you&apos;ll learn</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="grid gap-3 sm:grid-cols-2">
                    {course.whatYouWillLearn.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Course Description */}
              <Card>
                <CardHeader>
                  <CardTitle>Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none">
                    {course.description.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle>Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {course.requirements.map((req, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Course Stats */}
              <div className="grid gap-4 sm:grid-cols-4">
                <Card className="p-4 text-center">
                  <BarChart3 className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <div className="text-lg font-semibold">{course.level}</div>
                  <div className="text-sm text-muted-foreground">Level</div>
                </Card>
                <Card className="p-4 text-center">
                  <Clock className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <div className="text-lg font-semibold">{course.duration}</div>
                  <div className="text-sm text-muted-foreground">Duration</div>
                </Card>
                <Card className="p-4 text-center">
                  <PlayCircle className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <div className="text-lg font-semibold">{totalLessons}</div>
                  <div className="text-sm text-muted-foreground">Lessons</div>
                </Card>
                <Card className="p-4 text-center">
                  <Award className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <div className="text-lg font-semibold">Certificate</div>
                  <div className="text-sm text-muted-foreground">Included</div>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="curriculum" className="space-y-4">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-sm text-muted-foreground">
                  {course.modules.length} modules • {totalLessons} lessons • {course.duration} total
                </div>
                <Button variant="link" className="p-0">
                  Expand all
                </Button>
              </div>

              {course.modules.map((module) => (
                <Card key={module.id}>
                  <CardHeader className="cursor-pointer hover:bg-muted/50">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{module.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span>{module.lessons.length} lessons</span>
                        <span>•</span>
                        <span>{module.duration}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="border-t p-0">
                    <ul>
                      {module.lessons.map((lesson, index) => {
                        const LessonIcon = getLessonIcon(lesson.type);
                        return (
                          <li
                            key={lesson.id}
                            className={`flex items-center justify-between px-6 py-3 ${
                              index !== module.lessons.length - 1 ? 'border-b' : ''
                            } ${lesson.isPreview ? 'hover:bg-muted/50 cursor-pointer' : ''}`}
                          >
                            <div className="flex items-center gap-3">
                              <LessonIcon className="h-4 w-4 text-muted-foreground" />
                              <span>{lesson.title}</span>
                              {lesson.isPreview && (
                                <Badge variant="outline" className="text-xs">
                                  Preview
                                </Badge>
                              )}
                            </div>
                            <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="instructor" id="instructor">
              <Card>
                <CardContent className="p-6">
                  <div className="mb-6 flex items-start gap-4">
                    <div className="h-24 w-24 shrink-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5" />
                    <div>
                      <h3 className="text-xl font-semibold">{course.instructor.name}</h3>
                      <p className="text-muted-foreground">{course.instructor.title}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                          <span>{course.instructor.rating} Rating</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{course.instructor.students.toLocaleString()} Students</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <PlayCircle className="h-4 w-4" />
                          <span>{course.instructor.courses} Courses</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{course.instructor.bio}</p>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
                    <div className="text-center">
                      <div className="mb-2 text-5xl font-bold text-primary">{course.rating}</div>
                      <div className="mb-1 flex justify-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(course.rating)
                                ? 'fill-yellow-400 text-yellow-400'
                                : 'text-muted'
                            }`}
                          />
                        ))}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Course Rating • {course.ratingsCount.toLocaleString()} ratings
                      </div>
                    </div>
                    <div className="flex-1 space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => {
                        const percentage = rating === 5 ? 72 : rating === 4 ? 20 : rating === 3 ? 5 : rating === 2 ? 2 : 1;
                        return (
                          <div key={rating} className="flex items-center gap-2">
                            <div className="flex w-20 items-center gap-1">
                              {[...Array(rating)].map((_, i) => (
                                <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                            <Progress value={percentage} className="h-2 flex-1" />
                            <span className="w-12 text-right text-sm text-muted-foreground">
                              {percentage}%
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center text-muted-foreground">
                <MessageSquare className="mx-auto mb-2 h-8 w-8" />
                <p>Reviews will be shown here once available</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
}
