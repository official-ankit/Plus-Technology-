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
  Monitor,
  Palette,
  Globe,
} from 'lucide-react';

const featuredCourses = [
  {
    id: 'dca',
    title: 'DCA – Diploma in Computer Application',
    description: 'Comprehensive diploma covering MS Office, internet basics, programming fundamentals, and essential computer skills for job readiness.',
    image: '/courses/dca.jpg',
    instructor: 'Expert Faculty',
    rating: 4.9,
    students: 5200,
    duration: '6 Months',
    level: 'Beginner',
    price: 8999,
    tags: ['Diploma', 'Computer Basics', 'MS Office'],
  },
  {
    id: 'pgdca',
    title: 'PGDCA – Post Graduate Diploma',
    description: 'Advanced diploma for graduates covering programming, DBMS, web technologies, and software development concepts.',
    image: '/courses/pgdca.jpg',
    instructor: 'Expert Faculty',
    rating: 4.8,
    students: 3800,
    duration: '1 Year',
    level: 'Advanced',
    price: 18999,
    tags: ['PGDCA', 'Programming', 'Database'],
  },
  {
    id: 'tally',
    title: 'Tally Prime with GST',
    description: 'Master Tally Prime for accounting, inventory management, GST filing, and financial reporting for business applications.',
    image: '/courses/tally.jpg',
    instructor: 'Expert Faculty',
    rating: 4.9,
    students: 4500,
    duration: '3 Months',
    level: 'Beginner',
    price: 5999,
    tags: ['Tally', 'GST', 'Accounting'],
  },
];

const certifications = [
  {
    name: 'DCA & ADCA',
    description: 'Diploma and Advanced Diploma in Computer Applications for foundational to advanced IT skills',
    icon: Award,
  },
  {
    name: 'PGDCA',
    description: 'Post Graduate Diploma in Computer Applications for career advancement in IT sector',
    icon: GraduationCap,
  },
  {
    name: 'Graphic & Web Design',
    description: 'Professional diplomas in Graphic Designing (DGD) and Web Designing (DWD)',
    icon: Palette,
  },
];

const stats = [
  { value: '15,000+', label: 'Students Trained' },
  { value: '25+', label: 'Expert Trainers' },
  { value: '20+', label: 'Courses Offered' },
  { value: '90%', label: 'Success Rate' },
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Accounts Executive at MNC',
    content: 'Plus Technology
Courses transformed my career. The Tally Prime course with GST helped me secure a job in a reputed company within months of completion.',
    avatar: '/avatars/priya.jpg',
    rating: 5,
  },
  {
    name: 'Rahul Verma',
    role: 'Web Developer',
    content: 'The practical approach to teaching HTML, JavaScript, and web technologies made all the difference. The hands-on projects prepared me for real-world work.',
    avatar: '/avatars/rahul.jpg',
    rating: 5,
  },
  {
    name: 'Anita Patel',
    role: 'Graphic Designer',
    content: 'The Graphic Designing diploma covering Photoshop and CorelDRAW was excellent. The trainers were patient and the curriculum was industry-focused.',
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
              Professional Computer & IT Training Institute
            </Badge>
            <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Plus Technology
Courses
              <br />
              <span className="text-primary">Your Gateway to IT Success</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Transform your career with skill-based computer education. From Basic Computer courses 
              to PGDCA, we prepare students, job seekers, and working professionals for the digital world.
            </p>
            
            {/* Search Bar */}
            <div className="mx-auto mb-8 max-w-xl">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search courses... (DCA, Tally, Python, Graphic Design)"
                  className="h-14 rounded-full pl-12 pr-4 text-base shadow-lg"
                />
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/courses">
                  Explore All Courses
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
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose Plus Technology
Courses?</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We combine experienced trainers with practical, hands-on learning to prepare you for real-world success in the IT industry.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: 'Experienced Trainers',
                description: 'Learn from industry professionals with years of teaching and practical experience.',
              },
              {
                icon: BookOpen,
                title: 'Practical Learning',
                description: 'Hands-on lab sessions and real-world projects to apply your knowledge immediately.',
              },
              {
                icon: Award,
                title: 'Certification',
                description: 'Receive recognized certificates upon successful completion of every course.',
              },
              {
                icon: TrendingUp,
                title: 'Career Guidance',
                description: 'Get placement support and career counseling for government & private sector opportunities.',
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
                  Start Your Journey with Plus Technology
Courses
                </h2>
                <p className="mb-8 text-primary-foreground/80">
                  Join thousands of successful students who have transformed their careers. 
                  From basic computer skills to advanced programming, we have a course for everyone.
                  Affordable fees, flexible timings, and personalized mentoring await you.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/signup">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Enroll Now
                    </Link>
                  </Button>
                  <Button size="lg" variant="ghost" className="border border-primary-foreground/20" asChild>
                    <Link href="/contact">Contact for Enquiry</Link>
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
