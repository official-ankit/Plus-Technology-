import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  GraduationCap,
  Users,
  Target,
  Award,
  BookOpen,
  Clock,
  CheckCircle,
  Briefcase,
  HeartHandshake,
  TrendingUp,
  Monitor,
  Lightbulb,
  ArrowRight,
} from 'lucide-react';

const milestones = [
  { value: '15,000+', label: 'Students Trained' },
  { value: '25+', label: 'Expert Trainers' },
  { value: '20+', label: 'Courses Offered' },
  { value: '10+', label: 'Years of Excellence' },
];

const whyChooseUs = [
  {
    icon: Users,
    title: 'Experienced Trainers',
    description: 'Learn from industry professionals with years of teaching experience and practical knowledge.',
  },
  {
    icon: Monitor,
    title: 'Practical, Hands-on Learning',
    description: 'Our courses emphasize practical skills with dedicated lab sessions and real-world projects.',
  },
  {
    icon: BookOpen,
    title: 'Industry-Relevant Curriculum',
    description: 'Curriculum designed to meet current industry demands and prepare you for real job requirements.',
  },
  {
    icon: Target,
    title: 'Affordable Fees',
    description: 'Quality education at affordable prices with flexible payment options and installment plans.',
  },
  {
    icon: Award,
    title: 'Certification After Completion',
    description: 'Receive recognized certificates upon successful completion of every course.',
  },
  {
    icon: Briefcase,
    title: 'Career Guidance & Support',
    description: 'Get placement assistance, resume building help, and interview preparation support.',
  },
];

const trainingMethodology = [
  {
    icon: BookOpen,
    title: 'Classroom Sessions',
    description: 'Interactive classroom teaching with expert instructors explaining concepts clearly.',
  },
  {
    icon: Monitor,
    title: 'Practical Lab Sessions',
    description: 'Hands-on practice in our well-equipped computer labs with individual systems.',
  },
  {
    icon: Lightbulb,
    title: 'Real-World Projects',
    description: 'Work on practical projects that simulate real industry scenarios and challenges.',
  },
  {
    icon: TrendingUp,
    title: 'Step-by-Step Learning',
    description: 'Structured curriculum progressing from beginner to advanced levels systematically.',
  },
];

const careerOutcomes = [
  {
    icon: Briefcase,
    title: 'Skill Development for Jobs',
    description: 'Develop job-ready skills that employers are actively looking for in candidates.',
  },
  {
    icon: Award,
    title: 'Government & Private Sector',
    description: 'Our training prepares you for opportunities in both government and private sector organizations.',
  },
  {
    icon: GraduationCap,
    title: 'Foundation for Higher Studies',
    description: 'Build a strong foundation for pursuing higher education in IT and computer science.',
  },
  {
    icon: TrendingUp,
    title: 'Freelancing & Self-Employment',
    description: 'Learn skills that enable you to work independently as a freelancer or start your own venture.',
  },
];

const studentSupport = [
  {
    icon: HeartHandshake,
    title: 'Personalized Mentoring',
    description: 'One-on-one guidance from instructors to help you achieve your learning goals.',
  },
  {
    icon: Users,
    title: 'Doubt-Clearing Sessions',
    description: 'Regular sessions dedicated to clearing doubts and reinforcing concepts.',
  },
  {
    icon: BookOpen,
    title: 'Practice Assignments',
    description: 'Regular assignments and exercises to practice and strengthen your skills.',
  },
  {
    icon: Award,
    title: 'Exam Preparation Support',
    description: 'Mock tests and exam preparation assistance for certification exams.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background border-b py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            <GraduationCap className="mr-1 h-3 w-3" />
            About Us
          </Badge>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Plus Technology
Courses
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            Your trusted partner for professional computer education and IT skill development. 
            We are a leading computer and technology training institute dedicated to transforming 
            students, job seekers, and working professionals into skilled IT professionals.
          </p>
        </div>
      </section>

      {/* About the Institute */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="mb-6 text-3xl font-bold">About Plus Technology
Courses</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong className="text-foreground">Plus Technology
Courses</strong> is a professional 
                  computer and IT training center committed to providing quality education that prepares 
                  individuals for successful careers in the digital world.
                </p>
                <p>
                  Our institute focuses on <strong className="text-foreground">skill-based education</strong>, 
                  <strong className="text-foreground"> practical learning</strong>, and 
                  <strong className="text-foreground"> career readiness</strong>. We believe that true education 
                  goes beyond theory – it's about developing practical skills that employers value.
                </p>
                <p>
                  Whether you're a student looking to build foundational computer skills, a job seeker 
                  aiming to enhance your employability, or a working professional seeking to upgrade 
                  your technical knowledge, Plus Technology
Courses has a program tailored for you.
                </p>
                <p>
                  From basic computer courses to advanced programming, from graphic designing to 
                  professional accounting software, we offer a comprehensive range of courses designed 
                  to meet diverse career aspirations.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {milestones.map((milestone) => (
                <Card key={milestone.label} className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary md:text-4xl">
                      {milestone.value}
                    </div>
                    <div className="mt-2 text-sm text-muted-foreground">
                      {milestone.label}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Why Choose Plus Technology
Courses?</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We stand apart with our commitment to quality education, practical training, 
              and student success. Here's what makes us the preferred choice for computer education.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <Card key={item.title} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Training Methodology */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Training Methodology</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our structured approach to teaching ensures that every student gains both 
              theoretical knowledge and practical expertise.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trainingMethodology.map((item, index) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Career Outcomes</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Our training programs are designed to open multiple career pathways for our students.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {careerOutcomes.map((item) => (
              <Card key={item.title} className="text-center transition-all hover:shadow-lg">
                <CardContent className="pt-6">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Support */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Student Support</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We are committed to your success. Our comprehensive support system ensures 
              you never feel stuck in your learning journey.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {studentSupport.map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                  <item.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Our Course Categories</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We offer a wide range of courses to cater to different learning needs and career goals.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Foundation Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Basic Computer Course
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Hindi & English Typing
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Diploma Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    DCA – Diploma in Computer Application
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    ADCA – Advanced Diploma
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    PGDCA – Post Graduate Diploma
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Design Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Diploma in Graphic Designing (DGD)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Diploma in Web Designing (DWD)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Photoshop & CorelDRAW
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Professional Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Tally Prime with GST
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Advanced Excel
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Computer Teacher Training (CTTC)
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    C, C++, Java, Python
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    JavaScript & Web Development
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    HTML & SQL Database
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-primary text-primary-foreground">
              <CardHeader>
                <CardTitle>Ready to Start?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm opacity-90">
                  Join Plus Technology
Courses and take the first step towards a successful IT career.
                </p>
                <Button variant="secondary" asChild>
                  <Link href="/courses">
                    View All Courses
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden bg-primary text-primary-foreground">
            <CardContent className="p-8 md:p-12">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                  Start Your Learning Journey Today
                </h2>
                <p className="mb-8 text-primary-foreground/80">
                  Visit Plus Technology
Courses and let our expert counselors guide you 
                  in choosing the right course for your career goals. We offer personalized 
                  guidance for course selection and admission assistance.
                </p>
                <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                  <Button size="lg" variant="secondary" asChild>
                    <Link href="/contact">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Contact Us Now
                    </Link>
                  </Button>
                  <Button size="lg" variant="ghost" className="border border-primary-foreground/20" asChild>
                    <Link href="/courses">Explore Courses</Link>
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
