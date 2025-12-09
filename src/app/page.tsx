import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Search,
  GraduationCap,
  Code2,
  Award,
  Users,
  BookOpen,
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  TrendingUp,
} from 'lucide-react';

const featuredCourses = [
  {
    id: '1',
    title: 'C++ Programming Fundamentals',
    description: 'Master the fundamentals of C++ programming from scratch. Build a solid foundation for software development.',
    image: '/courses/cpp.jpg',
    instructor: 'Dr. Sarah Johnson',
    rating: 4.8,
    students: 2340,
    duration: '40 hours',
    level: 'Beginner',
    price: 4999,
    tags: ['C++', 'Programming', 'OOP'],
  },
  {
    id: '2',
    title: 'O-Level Computer Science',
    description: 'Complete preparation for O-Level certification with comprehensive coverage of all topics.',
    image: '/courses/olevel.jpg',
    instructor: 'Prof. Michael Chen',
    rating: 4.9,
    students: 1856,
    duration: '120 hours',
    level: 'Intermediate',
    price: 12999,
    tags: ['O-Level', 'Certification', 'Theory'],
  },
  {
    id: '3',
    title: 'Web Development Bootcamp',
    description: 'Full-stack web development with HTML, CSS, JavaScript, React, and Node.js.',
    image: '/courses/web.jpg',
    instructor: 'Alex Rivera',
    rating: 4.7,
    students: 3120,
    duration: '80 hours',
    level: 'Beginner',
    price: 7999,
    tags: ['Web', 'JavaScript', 'React'],
  },
];

const certifications = [
  {
    name: 'O-Level (NIELIT)',
    description: 'Foundation course equivalent to "A" level diploma in Computer Science',
    icon: Award,
  },
  {
    name: 'A-Level (NIELIT)',
    description: 'Advanced diploma equivalent to PGDCA in Computer Applications',
    icon: GraduationCap,
  },
  {
    name: 'C/C++ Certification',
    description: 'Industry-recognized certification in C and C++ programming',
    icon: Code2,
  },
];

const stats = [
  { value: '10,000+', label: 'Students Trained' },
  { value: '50+', label: 'Expert Instructors' },
  { value: '100+', label: 'Courses Available' },
  { value: '95%', label: 'Placement Rate' },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Software Developer at TCS',
    content: 'PlusTec helped me transition from a non-tech background to becoming a professional developer. The O-Level certification opened many doors for me.',
    avatar: '/avatars/priya.jpg',
    rating: 5,
  },
  {
    name: 'Rahul Verma',
    role: 'Full Stack Developer',
    content: 'The practical approach to teaching and industry-relevant curriculum made all the difference. I got placed within 2 months of completing my course.',
    avatar: '/avatars/rahul.jpg',
    rating: 5,
  },
  {
    name: 'Anita Patel',
    role: 'Data Analyst at Infosys',
    content: 'Excellent faculty and hands-on projects. The certification program gave me the confidence to crack interviews at top companies.',
    avatar: '/avatars/anita.jpg',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <Badge variant="secondary" className="mb-4">
              <TrendingUp className="mr-1 h-3 w-3" />
              #1 Computer Training Institute
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Master Programming.
              <br />
              <span className="text-primary">Earn Certifications.</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              From C++ fundamentals to O-Level certification, we guide your journey 
              into the world of technology with expert instructors and hands-on projects.
            </p>
            
            {/* Search Bar */}
            <div className="mx-auto mb-8 max-w-xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="What do you want to learn? (e.g., C++, Web Development, O-Level)"
                  className="h-14 rounded-full pl-12 pr-4 text-base shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/courses">
                  Browse Courses
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/certifications">View Certifications</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -bottom-1/2 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary md:text-4xl">{stat.value}</div>
                <div className="text-sm text-muted-foreground md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Featured Courses</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Start your learning journey with our most popular courses, designed by industry experts.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredCourses.map((course) => (
              <Card key={course.id} className="group overflow-hidden transition-all hover:shadow-lg">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5" />
                <CardHeader>
                  <div className="mb-2 flex flex-wrap gap-2">
                    {course.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="line-clamp-2 group-hover:text-primary">
                    {course.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-2">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="font-medium">{course.rating}</span>
                      <span>({course.students.toLocaleString()})</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between">
                  <div className="text-lg font-bold">₹{course.price.toLocaleString()}</div>
                  <Button asChild>
                    <Link href={`/courses/${course.id}`}>
                      View Course
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/courses">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Industry-Recognized Certifications</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Boost your career with government-recognized and industry-valued certifications.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {certifications.map((cert) => (
              <Card key={cert.name} className="text-center transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <cert.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle>{cert.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{cert.description}</p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button variant="outline" asChild>
                    <Link href="/certifications">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose PlusTec?</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We combine expert instruction with practical learning to prepare you for real-world success.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: 'Expert Instructors',
                description: 'Learn from industry professionals with years of teaching experience.',
              },
              {
                icon: BookOpen,
                title: 'Practical Projects',
                description: 'Build real-world projects to apply your knowledge and build your portfolio.',
              },
              {
                icon: Award,
                title: 'Recognized Certificates',
                description: 'Earn industry and government-recognized certifications upon completion.',
              },
              {
                icon: TrendingUp,
                title: 'Placement Support',
                description: 'Get career guidance and placement assistance for top companies.',
              },
            ].map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Students Say</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Hear from our successful alumni who have transformed their careers.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground">&ldquo;{testimonial.content}&rdquo;</p>
                </CardHeader>
                <CardFooter>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10" />
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Ready to Start Your Tech Journey?
                </h2>
                <p className="mb-8 text-primary-foreground/80">
                  Join thousands of successful students who have transformed their careers with PlusTec.
                  Start learning today and unlock your potential.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/signup">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Get Started Free
                    </Link>
                  </Button>
                  <Button size="lg" variant="ghost" className="border border-primary-foreground/20" asChild>
                    <Link href="/contact">Contact Admissions</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
