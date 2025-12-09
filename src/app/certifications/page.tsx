import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Award,
  CheckCircle,
  Clock,
  BookOpen,
  Users,
  ArrowRight,
  GraduationCap,
  Briefcase,
  FileCheck,
  Star,
} from 'lucide-react';

const certifications = [
  {
    id: 'olevel',
    title: 'O-Level (NIELIT)',
    fullName: 'NIELIT O-Level IT Certificate',
    description: 'Foundation course in IT equivalent to "A" Level Diploma in Computer Science. Recognized by Government of India for employment and higher education.',
    duration: '1 Year',
    modules: 4,
    exams: 4,
    price: 15999,
    features: [
      'Government recognized certification',
      'Equivalent to Foundation level in Computer Applications',
      'Valid for government jobs requiring O-Level',
      'Pathway to A-Level certification',
      'Practical and theory-based learning',
      'Industry-standard curriculum',
    ],
    subjects: [
      'IT Tools and Business Systems',
      'Internet Technology and Web Design',
      'Programming and Problem Solving through C',
      'Application of .NET Technology',
    ],
    eligibility: '10+2 or ITI Certificate (1 Year after 10th)',
    careers: ['Data Entry Operator', 'Computer Operator', 'Web Designer', 'Junior Programmer'],
    popular: true,
  },
  {
    id: 'alevel',
    title: 'A-Level (NIELIT)',
    fullName: 'NIELIT A-Level Advanced Diploma',
    description: 'Advanced diploma in IT equivalent to PGDCA. Ideal for those who want to pursue a career in software development and IT management.',
    duration: '1 Year (after O-Level)',
    modules: 6,
    exams: 6,
    price: 24999,
    features: [
      'Equivalent to PGDCA/MCA First Year',
      'Recognized for Group A & B Central Govt. posts',
      'Advanced programming and database skills',
      'Project-based learning',
      'Industry internship opportunities',
      'Placement assistance',
    ],
    subjects: [
      'Computer Organization and Operating Systems',
      'Data Structure through C++',
      'Software Engineering',
      'Database Management Systems',
      'Computer Networks',
      'Project Work',
    ],
    eligibility: 'O-Level certification or Graduation in any discipline',
    careers: ['Software Developer', 'Database Administrator', 'System Analyst', 'Network Administrator'],
    popular: false,
  },
  {
    id: 'cpp',
    title: 'C/C++ Professional',
    fullName: 'Professional Certification in C/C++ Programming',
    description: 'Industry-recognized certification in C and C++ programming. Master the fundamentals of system programming and object-oriented design.',
    duration: '4 Months',
    modules: 8,
    exams: 2,
    price: 8999,
    features: [
      'Comprehensive C and C++ coverage',
      'Object-Oriented Programming mastery',
      'Data Structures and Algorithms',
      'Real-world project portfolio',
      'Interview preparation',
      'Certificate of completion',
    ],
    subjects: [
      'C Programming Fundamentals',
      'Advanced C Concepts',
      'Introduction to C++',
      'OOP with C++',
      'STL and Templates',
      'Data Structures',
      'Algorithms',
      'Project Development',
    ],
    eligibility: 'Basic computer knowledge',
    careers: ['C/C++ Developer', 'System Programmer', 'Embedded Developer', 'Game Developer'],
    popular: true,
  },
  {
    id: 'python',
    title: 'Python Developer',
    fullName: 'Professional Python Development Certification',
    description: 'Become a certified Python developer. Learn web development, data analysis, and automation with Python.',
    duration: '3 Months',
    modules: 6,
    exams: 2,
    price: 7999,
    features: [
      'Core Python programming',
      'Web development with Django/Flask',
      'Data analysis with Pandas',
      'Automation scripting',
      'API development',
      'Portfolio projects',
    ],
    subjects: [
      'Python Fundamentals',
      'Object-Oriented Python',
      'Web Development',
      'Data Analysis',
      'Automation & Scripting',
      'Final Project',
    ],
    eligibility: 'Basic computer knowledge',
    careers: ['Python Developer', 'Data Analyst', 'Backend Developer', 'Automation Engineer'],
    popular: true,
  },
  {
    id: 'webdev',
    title: 'Full Stack Web Developer',
    fullName: 'Full Stack Web Development Certification',
    description: 'Master modern web development with HTML, CSS, JavaScript, React, Node.js, and databases. Build production-ready applications.',
    duration: '6 Months',
    modules: 12,
    exams: 3,
    price: 19999,
    features: [
      'Frontend development (React)',
      'Backend development (Node.js)',
      'Database management (SQL & NoSQL)',
      'API development',
      'Cloud deployment',
      '5+ portfolio projects',
    ],
    subjects: [
      'HTML & CSS',
      'JavaScript',
      'React.js',
      'Node.js',
      'Express.js',
      'MongoDB',
      'PostgreSQL',
      'REST APIs',
      'Git & GitHub',
      'Deployment',
      'Testing',
      'Capstone Project',
    ],
    eligibility: 'Basic computer knowledge',
    careers: ['Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Web Application Developer'],
    popular: false,
  },
];

const benefits = [
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Our certifications are recognized by government bodies and top IT companies across India.',
  },
  {
    icon: Briefcase,
    title: 'Career Advancement',
    description: 'Open doors to new job opportunities and higher salary packages with verified credentials.',
  },
  {
    icon: BookOpen,
    title: 'Comprehensive Curriculum',
    description: 'Learn from industry-aligned curriculum designed by experienced professionals.',
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Get mentorship from certified instructors with years of industry experience.',
  },
];

export default function CertificationsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background border-b py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            <Award className="mr-1 h-3 w-3" />
            Industry Recognized
          </Badge>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Professional Certifications
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Earn industry-recognized certifications that validate your skills and 
            open doors to exciting career opportunities in technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#certifications">
                Explore Certifications
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Talk to Advisor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">
            Why Get Certified?
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <benefit.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Grid */}
      <section id="certifications" className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-2xl font-bold md:text-3xl">
            Available Certifications
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            {certifications.map((cert) => (
              <Card key={cert.id} className="relative overflow-hidden">
                {cert.popular && (
                  <div className="absolute right-4 top-4">
                    <Badge className="bg-yellow-500 text-yellow-950">
                      <Star className="mr-1 h-3 w-3" />
                      Popular
                    </Badge>
                  </div>
                )}
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{cert.title}</CardTitle>
                      <CardDescription>{cert.fullName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{cert.description}</p>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>{cert.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-4 w-4 text-primary" />
                      <span>{cert.modules} Modules</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FileCheck className="h-4 w-4 text-primary" />
                      <span>{cert.exams} Exams</span>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-2 text-sm font-semibold">Key Features:</h4>
                    <ul className="grid gap-1 sm:grid-cols-2">
                      {cert.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 text-sm font-semibold">Career Opportunities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.careers.map((career) => (
                        <Badge key={career} variant="secondary">
                          {career}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between border-t bg-muted/30 px-6 py-4">
                  <div>
                    <div className="text-sm text-muted-foreground">Starting from</div>
                    <div className="text-2xl font-bold">₹{cert.price.toLocaleString()}</div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" asChild>
                      <Link href={`/certifications/${cert.id}`}>Details</Link>
                    </Button>
                    <Button asChild>
                      <Link href={`/enroll/${cert.id}`}>Enroll Now</Link>
                    </Button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="mb-4 text-3xl font-bold">
                  Not Sure Which Certification is Right for You?
                </h2>
                <p className="mb-8 text-primary-foreground/80">
                  Our career advisors can help you choose the perfect certification path 
                  based on your goals, background, and interests.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">Schedule Free Consultation</Link>
                  </Button>
                  <Button size="lg" variant="ghost" className="border border-primary-foreground/20" asChild>
                    <Link href="/courses">Browse All Courses</Link>
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
