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
  Palette,
  Monitor,
  Code,
} from 'lucide-react';

const certifications = [
  {
    id: 'dca',
    title: 'DCA',
    fullName: 'Diploma in Computer Application',
    description: 'Foundation diploma covering computer fundamentals, MS Office, internet technologies, and basic programming. Ideal for beginners entering the IT field.',
    duration: '6 Months',
    modules: 6,
    exams: 4,
    price: 8999,
    features: [
      'Computer fundamentals and operating systems',
      'Complete MS Office suite (Word, Excel, PowerPoint)',
      'Internet and email applications',
      'Basic programming concepts',
      'Practical lab sessions',
      'Certificate upon completion',
    ],
    subjects: [
      'Computer Fundamentals',
      'MS Word & Documentation',
      'MS Excel & Spreadsheets',
      'MS PowerPoint Presentations',
      'Internet & Email',
      'Programming Basics',
    ],
    eligibility: '10th pass or equivalent',
    careers: ['Computer Operator', 'Data Entry Operator', 'Office Assistant', 'Front Desk Executive'],
    popular: true,
    idealFor: 'Students, job seekers, and anyone starting their computer journey',
  },
  {
    id: 'adca',
    title: 'ADCA',
    fullName: 'Advanced Diploma in Computer Application',
    description: 'Comprehensive advanced diploma with in-depth coverage of programming, web development, databases, and accounting software. Builds on DCA foundation.',
    duration: '1 Year',
    modules: 10,
    exams: 6,
    price: 14999,
    features: [
      'Everything in DCA plus advanced topics',
      'Programming in C and C++',
      'Web development with HTML, CSS, JavaScript',
      'Database management with SQL',
      'Tally accounting software',
      'Project work and practical training',
    ],
    subjects: [
      'Advanced MS Office',
      'C Programming',
      'C++ & Object-Oriented Programming',
      'Web Designing (HTML, CSS, JS)',
      'Database Management (SQL)',
      'Tally with GST',
      'Project Work',
    ],
    eligibility: '12th pass or DCA certificate',
    careers: ['Junior Programmer', 'Web Designer', 'Accounts Executive', 'IT Support Staff'],
    popular: true,
    idealFor: 'Students seeking comprehensive IT skills for better job opportunities',
  },
  {
    id: 'pgdca',
    title: 'PGDCA',
    fullName: 'Post Graduate Diploma in Computer Application',
    description: 'Post-graduate level diploma for graduates covering advanced programming, software engineering, DBMS, and project development. Recognized for government and private sector jobs.',
    duration: '1 Year',
    modules: 8,
    exams: 6,
    price: 18999,
    features: [
      'Advanced programming languages',
      'Software engineering principles',
      'Database management systems',
      'Web technologies and frameworks',
      'Project development',
      'Industry-recognized certification',
    ],
    subjects: [
      'Computer Fundamentals & OS',
      'C & C++ Programming',
      'Java Programming',
      'Database Management Systems',
      'Software Engineering',
      'Web Technologies',
      'Python Programming',
      'Major Project',
    ],
    eligibility: 'Graduation in any discipline',
    careers: ['Software Developer', 'Database Administrator', 'System Analyst', 'IT Manager'],
    popular: true,
    idealFor: 'Graduates looking to enter IT sector or enhance programming skills',
  },
  {
    id: 'dgd',
    title: 'DGD',
    fullName: 'Diploma in Graphic Designing',
    description: 'Professional graphic design diploma covering industry-standard tools like Photoshop, CorelDRAW, and Illustrator. Learn to create stunning visual content.',
    duration: '6 Months',
    modules: 6,
    exams: 3,
    price: 12999,
    features: [
      'Adobe Photoshop mastery',
      'CorelDRAW vector graphics',
      'Adobe Illustrator basics',
      'Logo and brand design',
      'Print and digital media design',
      'Portfolio development',
    ],
    subjects: [
      'Design Fundamentals & Color Theory',
      'Adobe Photoshop',
      'CorelDRAW',
      'Adobe Illustrator',
      'Logo & Brand Design',
      'Print Media Design',
    ],
    eligibility: '10th pass with creative interest',
    careers: ['Graphic Designer', 'Visual Designer', 'Brand Designer', 'Freelance Designer'],
    popular: true,
    idealFor: 'Creative individuals pursuing careers in design and media',
  },
  {
    id: 'dwd',
    title: 'DWD',
    fullName: 'Diploma in Web Designing',
    description: 'Complete web design diploma covering HTML, CSS, JavaScript, and responsive design. Create professional websites from scratch.',
    duration: '6 Months',
    modules: 6,
    exams: 3,
    price: 12999,
    features: [
      'HTML5 & semantic markup',
      'CSS3 & modern styling',
      'JavaScript fundamentals',
      'Responsive web design',
      'Bootstrap framework',
      'Live project development',
    ],
    subjects: [
      'HTML5 Fundamentals',
      'CSS3 & Styling',
      'JavaScript Programming',
      'Responsive Design',
      'Bootstrap Framework',
      'Website Project',
    ],
    eligibility: '10th pass with interest in web',
    careers: ['Web Designer', 'Frontend Developer', 'UI Developer', 'Freelance Web Designer'],
    popular: false,
    idealFor: 'Anyone interested in creating websites and web applications',
  },
  {
    id: 'cttc',
    title: 'CTTC',
    fullName: 'Computer Teacher Training Course',
    description: 'Specialized course for aspiring computer teachers. Learn teaching methodologies, curriculum design, and practical training techniques.',
    duration: '6 Months',
    modules: 8,
    exams: 4,
    price: 9999,
    features: [
      'Computer education fundamentals',
      'Teaching methodologies',
      'Curriculum development',
      'Classroom management',
      'Practical teaching sessions',
      'Teacher certification',
    ],
    subjects: [
      'Computer Fundamentals for Teaching',
      'MS Office for Educators',
      'Teaching Methodology',
      'Curriculum Design',
      'Classroom Management',
      'Practical Teaching',
      'Programming Basics',
      'Assessment Techniques',
    ],
    eligibility: 'Graduation or DCA/ADCA',
    careers: ['Computer Teacher', 'Training Instructor', 'Education Coordinator', 'Institute Faculty'],
    popular: false,
    idealFor: 'Those who want to become computer instructors or start their own institute',
  },
];

const benefits = [
  {
    icon: Award,
    title: 'Industry Recognition',
    description: 'Our certifications are valued by employers across government and private sectors in India.',
  },
  {
    icon: Briefcase,
    title: 'Career Advancement',
    description: 'Open doors to new job opportunities in IT, design, accounting, and teaching fields.',
  },
  {
    icon: BookOpen,
    title: 'Practical Curriculum',
    description: 'Industry-aligned curriculum designed with hands-on projects and real-world applications.',
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Get mentorship from experienced instructors with years of industry and teaching experience.',
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
            Plus Technology
Courses
          </Badge>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Professional Diploma & Certification Programs
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
            Earn industry-recognized diplomas and certifications from Plus Technology
Courses. 
            Our programs are designed for career advancement in IT, design, accounting, and teaching.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#certifications">
                Explore Programs
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/contact">Talk to Counselor</Link>
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
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
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
