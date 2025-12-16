'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Search,
  Filter,
  Star,
  Clock,
  Users,
  ChevronDown,
  Grid3X3,
  List,
  SlidersHorizontal,
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from '@/components/ui/dropdown-menu';

const courses = [
  // Basic Computer & Typing Courses
  {
    id: 'basic-computer',
    title: 'Basic Computer Course',
    description: 'Learn computer fundamentals, Windows OS, MS Office basics, internet usage, and email. Perfect for absolute beginners entering the digital world.',
    instructor: 'Institute Plus Technology',
    rating: 4.8,
    students: 8500,
    duration: '2 Months',
    level: 'Beginner',
    price: 2999,
    originalPrice: 4999,
    tags: ['Computer Basics', 'Windows', 'MS Office'],
    category: 'Foundation Courses',
    isBestseller: true,
  },
  {
    id: 'typing',
    title: 'Hindi & English Typing',
    description: 'Master touch typing in both Hindi and English with speed tests and accuracy training. Essential for government job aspirants and office work.',
    instructor: 'Institute Plus Technology',
    rating: 4.9,
    students: 6200,
    duration: '2 Months',
    level: 'Beginner',
    price: 1999,
    originalPrice: 3499,
    tags: ['Typing', 'Hindi', 'English'],
    category: 'Foundation Courses',
    isBestseller: true,
  },
  // Diploma Courses
  {
    id: 'dca',
    title: 'DCA – Diploma in Computer Application',
    description: 'Comprehensive diploma covering MS Office, programming basics, internet technologies, and computer fundamentals. Ideal for job seekers and students.',
    instructor: 'Institute Plus Technology',
    rating: 4.9,
    students: 5200,
    duration: '6 Months',
    level: 'Beginner',
    price: 8999,
    originalPrice: 12999,
    tags: ['Diploma', 'MS Office', 'Programming'],
    category: 'Diploma Courses',
    isBestseller: true,
  },
  {
    id: 'adca',
    title: 'ADCA – Advanced Diploma in Computer Application',
    description: 'Advanced computer diploma with in-depth coverage of programming, web development, database management, and software applications.',
    instructor: 'Institute Plus Technology',
    rating: 4.8,
    students: 4100,
    duration: '1 Year',
    level: 'Intermediate',
    price: 14999,
    originalPrice: 21999,
    tags: ['Advanced Diploma', 'Programming', 'Web Development'],
    category: 'Diploma Courses',
    isBestseller: true,
  },
  {
    id: 'pgdca',
    title: 'PGDCA – Post Graduate Diploma in Computer Application',
    description: 'Post-graduate level diploma covering advanced programming, DBMS, software engineering, and project development. For graduates seeking IT careers.',
    instructor: 'Institute Plus Technology',
    rating: 4.8,
    students: 3800,
    duration: '1 Year',
    level: 'Advanced',
    price: 18999,
    originalPrice: 27999,
    tags: ['PGDCA', 'Software Engineering', 'DBMS'],
    category: 'Diploma Courses',
    isBestseller: false,
  },
  // Design Courses
  {
    id: 'dgd',
    title: 'Diploma in Graphic Designing (DGD)',
    description: 'Master graphic design with Photoshop, CorelDRAW, and Illustrator. Learn logo design, branding, print media, and digital graphics.',
    instructor: 'Institute Plus Technology',
    rating: 4.9,
    students: 3200,
    duration: '6 Months',
    level: 'Beginner',
    price: 12999,
    originalPrice: 18999,
    tags: ['Graphic Design', 'Photoshop', 'CorelDRAW'],
    category: 'Design Courses',
    isBestseller: true,
  },
  {
    id: 'dwd',
    title: 'Diploma in Web Designing (DWD)',
    description: 'Complete web designing course covering HTML, CSS, JavaScript, responsive design, and modern web development tools.',
    instructor: 'Institute Plus Technology',
    rating: 4.8,
    students: 2800,
    duration: '6 Months',
    level: 'Beginner',
    price: 12999,
    originalPrice: 18999,
    tags: ['Web Design', 'HTML', 'CSS', 'JavaScript'],
    category: 'Design Courses',
    isBestseller: false,
  },
  // Professional Courses
  {
    id: 'cttc',
    title: 'Computer Teacher Training Course (CTTC)',
    description: 'Become a certified computer teacher. Learn teaching methodologies, curriculum design, and practical training for computer education.',
    instructor: 'Institute Plus Technology',
    rating: 4.7,
    students: 1800,
    duration: '6 Months',
    level: 'Intermediate',
    price: 9999,
    originalPrice: 14999,
    tags: ['Teaching', 'Computer Education', 'Training'],
    category: 'Professional Courses',
    isBestseller: false,
  },
  {
    id: 'tally',
    title: 'Tally Prime with GST',
    description: 'Master Tally Prime for accounting, inventory management, GST returns, TDS, and financial reporting. Industry-standard accounting software.',
    instructor: 'Institute Plus Technology',
    rating: 4.9,
    students: 4500,
    duration: '3 Months',
    level: 'Beginner',
    price: 5999,
    originalPrice: 8999,
    tags: ['Tally', 'GST', 'Accounting'],
    category: 'Professional Courses',
    isBestseller: true,
  },
  {
    id: 'excel',
    title: 'Advanced Excel Course',
    description: 'Master advanced Excel features including formulas, pivot tables, macros, VBA, data analysis, and dashboard creation for business.',
    instructor: 'Institute Plus Technology',
    rating: 4.8,
    students: 3900,
    duration: '2 Months',
    level: 'Intermediate',
    price: 4999,
    originalPrice: 7499,
    tags: ['Excel', 'VBA', 'Data Analysis'],
    category: 'Professional Courses',
    isBestseller: true,
  },
  // Design Software
  {
    id: 'photoshop',
    title: 'Adobe Photoshop',
    description: 'Learn professional photo editing, image manipulation, digital art, and graphic design using Adobe Photoshop.',
    instructor: 'Institute Plus Technology',
    rating: 4.8,
    students: 3100,
    duration: '2 Months',
    level: 'Beginner',
    price: 4999,
    originalPrice: 7499,
    tags: ['Photoshop', 'Photo Editing', 'Design'],
    category: 'Design Software',
    isBestseller: false,
  },
  {
    id: 'coreldraw',
    title: 'CorelDRAW',
    description: 'Master vector graphics, logo design, illustrations, and print design using CorelDRAW. Perfect for graphic designers.',
    instructor: 'Institute Plus Technology',
    rating: 4.7,
    students: 2400,
    duration: '2 Months',
    level: 'Beginner',
    price: 4999,
    originalPrice: 7499,
    tags: ['CorelDRAW', 'Vector Graphics', 'Logo Design'],
    category: 'Design Software',
    isBestseller: false,
  },
  // Web Technologies
  {
    id: 'html',
    title: 'HTML – Web Page Development',
    description: 'Learn HTML5 from basics to advanced. Create structured web pages with semantic markup, forms, tables, and multimedia elements.',
    instructor: 'Institute Plus Technology',
    rating: 4.8,
    students: 2900,
    duration: '1 Month',
    level: 'Beginner',
    price: 2499,
    originalPrice: 3999,
    tags: ['HTML', 'HTML5', 'Web Development'],
    category: 'Web Technologies',
    isBestseller: false,
  },
  // Programming Languages
  {
    id: 'c-language',
    title: 'C Language Programming',
    description: 'Master C programming fundamentals including data types, operators, control structures, functions, arrays, pointers, and file handling.',
    instructor: 'Institute Plus Technology',
    rating: 4.8,
    students: 3600,
    duration: '3 Months',
    level: 'Beginner',
    price: 4999,
    originalPrice: 7499,
    tags: ['C Language', 'Programming', 'Fundamentals'],
    category: 'Programming Languages',
    isBestseller: false,
  },
  {
    id: 'cpp',
    title: 'C++ Programming',
    description: 'Learn C++ with object-oriented programming concepts including classes, inheritance, polymorphism, templates, and STL.',
    instructor: 'Institute Plus Technology',
    rating: 4.8,
    students: 3200,
    duration: '3 Months',
    level: 'Intermediate',
    price: 5999,
    originalPrice: 8999,
    tags: ['C++', 'OOP', 'Programming'],
    category: 'Programming Languages',
    isBestseller: false,
  },
  {
    id: 'python',
    title: 'Python Programming',
    description: 'Learn Python from scratch. Cover basics to advanced topics including data structures, OOP, file handling, and libraries like NumPy.',
    instructor: 'Institute Plus Technology',
    rating: 4.9,
    students: 4200,
    duration: '3 Months',
    level: 'Beginner',
    price: 5999,
    originalPrice: 8999,
    tags: ['Python', 'Programming', 'Data Science'],
    category: 'Programming Languages',
    isBestseller: true,
  },
  {
    id: 'java',
    title: 'Java Programming',
    description: 'Comprehensive Java course covering core Java, OOP, collections, exception handling, multithreading, and JDBC.',
    instructor: 'Institute Plus Technology',
    rating: 4.8,
    students: 3400,
    duration: '4 Months',
    level: 'Intermediate',
    price: 6999,
    originalPrice: 10999,
    tags: ['Java', 'OOP', 'Enterprise'],
    category: 'Programming Languages',
    isBestseller: false,
  },
  {
    id: 'javascript',
    title: 'JavaScript Programming',
    description: 'Master JavaScript for web development. Learn DOM manipulation, ES6+, async programming, and modern JavaScript frameworks basics.',
    instructor: 'Institute Plus Technology',
    rating: 4.8,
    students: 2800,
    duration: '3 Months',
    level: 'Intermediate',
    price: 5999,
    originalPrice: 8999,
    tags: ['JavaScript', 'Web Development', 'ES6'],
    category: 'Programming Languages',
    isBestseller: false,
  },
  // Database
  {
    id: 'sql',
    title: 'SQL – Database Management',
    description: 'Learn SQL for database management. Cover queries, joins, subqueries, stored procedures, and database design with MySQL.',
    instructor: 'Institute Plus Technology',
    rating: 4.7,
    students: 2600,
    duration: '2 Months',
    level: 'Beginner',
    price: 4499,
    originalPrice: 6999,
    tags: ['SQL', 'MySQL', 'Database'],
    category: 'Database',
    isBestseller: false,
  },
];

const categories = [
  'All Categories',
  'Foundation Courses',
  'Diploma Courses',
  'Design Courses',
  'Professional Courses',
  'Design Software',
  'Web Technologies',
  'Programming Languages',
  'Database',
];

const levels = ['All Levels', 'Beginner', 'Intermediate', 'Advanced'];

const sortOptions = [
  { label: 'Most Popular', value: 'popular' },
  { label: 'Highest Rated', value: 'rating' },
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLevel, setSelectedLevel] = useState('All Levels');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'All Categories' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All Levels' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const sortedCourses = [...filteredCourses].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.rating - a.rating;
      case 'popular':
        return b.students - a.students;
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <h1 className="mb-2 text-3xl font-bold md:text-4xl">Explore Courses</h1>
          <p className="text-muted-foreground">
            Discover our comprehensive library of courses designed to help you master programming and earn certifications.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Filters Bar */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          {/* Search */}
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Category Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <Filter className="h-4 w-4" />
                  {selectedCategory}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuLabel>Category</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {categories.map((category) => (
                  <DropdownMenuCheckboxItem
                    key={category}
                    checked={selectedCategory === category}
                    onCheckedChange={() => setSelectedCategory(category)}
                  >
                    {category}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Level Filter */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  {selectedLevel}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuLabel>Level</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {levels.map((level) => (
                  <DropdownMenuCheckboxItem
                    key={level}
                    checked={selectedLevel === level}
                    onCheckedChange={() => setSelectedLevel(level)}
                  >
                    {level}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Sort */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-2">
                  Sort by
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {sortOptions.map((option) => (
                  <DropdownMenuItem
                    key={option.value}
                    onClick={() => setSortBy(option.value)}
                    className={sortBy === option.value ? 'bg-accent' : ''}
                  >
                    {option.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* View Toggle */}
            <div className="flex rounded-md border">
              <Button
                variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                size="icon"
                className="rounded-r-none"
                onClick={() => setViewMode('grid')}
              >
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'secondary' : 'ghost'}
                size="icon"
                className="rounded-l-none"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Showing <span className="font-medium text-foreground">{sortedCourses.length}</span> courses
            {searchQuery && (
              <>
                {' '}for &ldquo;<span className="font-medium text-foreground">{searchQuery}</span>&rdquo;
              </>
            )}
          </p>
        </div>

        {/* Courses Grid */}
        {sortedCourses.length > 0 ? (
          <div
            className={
              viewMode === 'grid'
                ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
                : 'flex flex-col gap-4'
            }
          >
            {sortedCourses.map((course) =>
              viewMode === 'grid' ? (
                <Card key={course.id} className="group overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-primary/5">
                    {course.isBestseller && (
                      <Badge className="absolute left-3 top-3 bg-yellow-500 text-yellow-950">
                        Bestseller
                      </Badge>
                    )}
                  </div>
                  <CardHeader className="pb-3">
                    <div className="mb-2 flex flex-wrap gap-2">
                      {course.tags.slice(0, 2).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <CardTitle className="line-clamp-2 text-lg group-hover:text-primary">
                      <Link href={`/courses/${course.id}`}>{course.title}</Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-2 text-sm">
                      {course.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pb-3">
                    <p className="mb-3 text-sm text-muted-foreground">{course.instructor}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{course.rating}</span>
                        <span className="text-muted-foreground">
                          ({course.students.toLocaleString()})
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex items-center justify-between pt-3">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold">₹{course.price.toLocaleString()}</span>
                      <span className="text-sm text-muted-foreground line-through">
                        ₹{course.originalPrice.toLocaleString()}
                      </span>
                    </div>
                    <Badge variant="outline">{course.level}</Badge>
                  </CardFooter>
                </Card>
              ) : (
                <Card key={course.id} className="group transition-all hover:shadow-lg">
                  <div className="flex flex-col gap-4 p-4 md:flex-row">
                    <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 md:w-64">
                      {course.isBestseller && (
                        <Badge className="absolute left-2 top-2 bg-yellow-500 text-yellow-950">
                          Bestseller
                        </Badge>
                      )}
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <div className="mb-2 flex flex-wrap gap-2">
                          {course.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        <Link href={`/courses/${course.id}`}>
                          <h3 className="mb-2 text-xl font-semibold group-hover:text-primary">
                            {course.title}
                          </h3>
                        </Link>
                        <p className="mb-2 line-clamp-2 text-muted-foreground">
                          {course.description}
                        </p>
                        <p className="text-sm text-muted-foreground">{course.instructor}</p>
                      </div>
                      <div className="mt-4 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="font-medium">{course.rating}</span>
                            <span className="text-muted-foreground">
                              ({course.students.toLocaleString()})
                            </span>
                          </div>
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            <span>{course.duration}</span>
                          </div>
                          <Badge variant="outline">{course.level}</Badge>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold">₹{course.price.toLocaleString()}</span>
                            <span className="text-sm text-muted-foreground line-through">
                              ₹{course.originalPrice.toLocaleString()}
                            </span>
                          </div>
                          <Button asChild>
                            <Link href={`/courses/${course.id}`}>View Course</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              )
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-4 rounded-full bg-muted p-4">
              <Search className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">No courses found</h3>
            <p className="mb-6 max-w-sm text-muted-foreground">
              Try adjusting your search or filters to find what you&apos;re looking for.
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Categories');
                setSelectedLevel('All Levels');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
