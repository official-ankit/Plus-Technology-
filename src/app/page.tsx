'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import OpeningAnnouncement from '@/components/ui/opening-announcement';
import CountdownPopup from '@/components/ui/countdown-popup';
import { getAllCourses } from '@/lib/courses-data';
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
  HoverCard,
  Counter,
  AnimatedGradientBackground,
  GradientLine,
} from '@/components/animations';
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
    content: 'Plus Technology Institute transformed my career. The Tally Prime course with GST helped me secure a job in a reputed company within months of completion.',
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
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<ReturnType<typeof getAllCourses>>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // Filter courses based on search query
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const allCourses = getAllCourses();
      const filtered = allCourses.filter(course => {
        const query = searchQuery.toLowerCase();
        return (
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query) ||
          course.tags.some(tag => tag.toLowerCase().includes(query)) ||
          course.category.toLowerCase().includes(query)
        );
      });
      setSearchResults(filtered.slice(0, 5)); // Limit to 5 results
      setShowDropdown(true);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  }, [searchQuery]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/courses?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const handleCourseSelect = (courseId: string) => {
    setShowDropdown(false);
    setSearchQuery('');
    router.push(`/courses/${courseId}`);
  };

  return (
    <div className="flex flex-col">
      {/* <CountdownPopup /> */}
     <OpeningAnnouncement />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn delay={0.1}>
              <Badge variant="secondary" className="mb-4 animate-badge-glow">
                <TrendingUp className="mr-1 h-3 w-3" />
                Professional Computer & IT Training Institute
              </Badge>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                Plus Technology Institute
                <br />
                <span className="text-primary bg-gradient-to-r from-primary to-primary/70 bg-clip-text">Your Gateway to IT Success</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
                Transform your career with skill-based computer education. From Basic Computer courses 
                to PGDCA, we prepare students, job seekers, and working professionals for the digital world.
              </p>
            </FadeIn>
            
            {/* Search Bar */}
            <FadeIn delay={0.4}>
              <div className="mx-auto mb-8 max-w-xl" ref={searchRef}>
                <form onSubmit={handleSearchSubmit} className="relative group">
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground transition-colors group-focus-within:text-primary z-10" />
                  <Input
                    type="search"
                    placeholder="Search courses... (DCA, Tally, Python, Graphic Design)"
                    className="h-14 rounded-full pl-12 pr-4 text-base shadow-lg transition-shadow hover:shadow-xl focus:shadow-xl"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => searchQuery.trim() && setShowDropdown(true)}
                  />
                  
                  {/* Search Results Dropdown */}
                  {showDropdown && searchResults.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-background rounded-2xl shadow-xl border overflow-hidden z-50">
                      <div className="p-2">
                        {searchResults.map((course) => (
                          <button
                            key={course.id}
                            type="button"
                            onClick={() => handleCourseSelect(course.id)}
                            className="w-full flex items-start gap-3 p-3 rounded-xl hover:bg-muted transition-colors text-left"
                          >
                            <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                              <BookOpen className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium text-sm truncate">{course.title}</p>
                              <p className="text-xs text-muted-foreground truncate">{course.category}</p>
                            </div>
                            <Badge variant="secondary" className="flex-shrink-0 text-xs">
                              {course.level}
                            </Badge>
                          </button>
                        ))}
                        <div className="border-t mt-2 pt-2">
                          <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 p-2 text-sm text-primary hover:bg-primary/5 rounded-lg transition-colors"
                          >
                            <Search className="w-4 h-4" />
                            View all results for &quot;{searchQuery}&quot;
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {/* No Results */}
                  {showDropdown && searchQuery.trim() && searchResults.length === 0 && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-background rounded-2xl shadow-xl border overflow-hidden z-50">
                      <div className="p-6 text-center">
                        <p className="text-muted-foreground text-sm">No courses found for &quot;{searchQuery}&quot;</p>
                        <Button variant="link" asChild className="mt-2">
                          <Link href="/courses">Browse all courses</Link>
                        </Button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button size="lg" className="group btn-animated" asChild>
                  <Link href="/courses">
                    Explore All Courses
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="btn-outline-animated" asChild>
                  <Link href="/certifications">View Certifications</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
        
        {/* Animated Background - Meta inspired */}
        <AnimatedGradientBackground variant="meta" />
      </section>

      {/* Stats Section */}
      <section className="border-y bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <StaggerItem key={stat.label}>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary md:text-4xl">
                    <Counter value={stat.value} />
                  </div>
                  <div className="text-sm text-muted-foreground md:text-base">{stat.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Featured Courses</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Start your learning journey with our most popular courses, designed by industry experts.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.15}>
            {featuredCourses.map((course, index) => (
              <StaggerItem key={course.id} direction={index % 2 === 0 ? 'left' : 'right'}>
                <HoverCard>
                  <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:border-primary/20 card-animated">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                    <CardHeader>
                      <div className="mb-2 flex flex-wrap gap-2">
                        {course.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="line-clamp-2 transition-colors group-hover:text-primary">
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
                      <Button className="btn-animated" asChild>
                        <Link href={`/courses/${course.id}`}>
                          View Course
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn delay={0.3} className="mt-12 text-center">
            <Button variant="outline" size="lg" className="group btn-outline-animated" asChild>
              <Link href="/courses">
                View All Courses
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </FadeIn>
        </div>
      </section>

      <GradientLine className="mx-auto w-1/2" />

      {/* Certifications Section */}
      <section className="bg-muted/30 py-20 relative overflow-hidden">
        <AnimatedGradientBackground variant="subtle" />
        <div className="container mx-auto px-4 relative">
          <FadeIn className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Industry-Recognized Certifications</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Boost your career with government-recognized and industry-valued certifications.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.2}>
            {certifications.map((cert) => (
              <StaggerItem key={cert.name} direction="up">
                <HoverCard>
                  <Card className="text-center transition-all duration-300 hover:shadow-xl hover:border-primary/20 card-animated h-full">
                    <CardHeader>
                      <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 icon-float">
                        <cert.icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle>{cert.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{cert.description}</p>
                    </CardContent>
                    <CardFooter className="justify-center">
                      <Button variant="outline" className="btn-outline-animated" asChild>
                        <Link href="/certifications">Learn More</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose Plus Technology Institute?</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We combine experienced trainers with practical, hands-on learning to prepare you for real-world success in the IT industry.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
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
              <StaggerItem key={feature.title} direction="up">
                <div className="text-center group feature-card-animated">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                    <feature.icon className="h-7 w-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <h3 className="mb-2 font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <GradientLine className="mx-auto w-1/2" />

      {/* Testimonials */}
      <section className="bg-muted/30 py-20 relative overflow-hidden">
        <AnimatedGradientBackground variant="subtle" />
        <div className="container mx-auto px-4 relative">
          <FadeIn className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">What Our Students Say</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Hear from our successful alumni who have transformed their careers.
            </p>
          </FadeIn>

          <StaggerContainer className="grid gap-6 md:grid-cols-3" staggerDelay={0.15}>
            {testimonials.map((testimonial, index) => (
              <StaggerItem key={testimonial.name} direction={index === 1 ? 'up' : index === 0 ? 'left' : 'right'}>
                <HoverCard>
                  <Card className="transition-all duration-300 hover:shadow-xl hover:border-primary/20 card-animated h-full">
                    <CardHeader>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400 star-animated" style={{ animationDelay: `${i * 0.1}s` }} />
                        ))}
                      </div>
                      <p className="text-muted-foreground">&ldquo;{testimonial.content}&rdquo;</p>
                    </CardHeader>
                    <CardFooter>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10" />
                        <div>
                          <div className="font-medium">{testimonial.name}</div>
                          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <FadeIn>
            <Card className="overflow-hidden bg-primary text-primary-foreground cta-card-animated relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-primary/90 opacity-100" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
              <CardContent className="p-8 md:p-12 relative">
                <div className="mx-auto max-w-2xl text-center">
                  <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                    Start Your Journey with Plus Technology Institute
                  </h2>
                  <p className="mb-8 text-primary-foreground/80">
                    Join thousands of successful students who have transformed their careers. 
                    From basic computer skills to advanced programming, we have a course for everyone.
                    Affordable fees, flexible timings, and personalized mentoring await you.
                  </p>
                  <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Button size="lg" variant="secondary" className="group btn-secondary-animated" asChild>
                      <Link href="/signup">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Enroll Now
                      </Link>
                    </Button>
                    <Button size="lg" variant="ghost" className="border border-primary-foreground/20 hover:bg-primary-foreground/10" asChild>
                      <Link href="/contact">Contact for Enquiry</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
