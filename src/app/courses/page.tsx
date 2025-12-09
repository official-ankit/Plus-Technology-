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
  {
    id: '1',
    title: 'C++ Programming Fundamentals',
    description: 'Master the fundamentals of C++ programming from scratch. Build a solid foundation for software development.',
    instructor: 'Dr. Sarah Johnson',
    rating: 4.8,
    students: 2340,
    duration: '40 hours',
    level: 'Beginner',
    price: 4999,
    originalPrice: 7999,
    tags: ['C++', 'Programming', 'OOP'],
    category: 'Programming Languages',
    isBestseller: true,
  },
  {
    id: '2',
    title: 'O-Level Computer Science',
    description: 'Complete preparation for O-Level certification with comprehensive coverage of all topics.',
    instructor: 'Prof. Michael Chen',
    rating: 4.9,
    students: 1856,
    duration: '120 hours',
    level: 'Intermediate',
    price: 12999,
    originalPrice: 19999,
    tags: ['O-Level', 'Certification', 'Theory'],
    category: 'Certifications',
    isBestseller: true,
  },
  {
    id: '3',
    title: 'Web Development Bootcamp',
    description: 'Full-stack web development with HTML, CSS, JavaScript, React, and Node.js.',
    instructor: 'Alex Rivera',
    rating: 4.7,
    students: 3120,
    duration: '80 hours',
    level: 'Beginner',
    price: 7999,
    originalPrice: 12999,
    tags: ['Web', 'JavaScript', 'React'],
    category: 'Web Development',
    isBestseller: false,
  },
  {
    id: '4',
    title: 'Python for Beginners',
    description: 'Learn Python from scratch with hands-on projects and real-world examples.',
    instructor: 'Dr. Emily Watson',
    rating: 4.8,
    students: 4560,
    duration: '35 hours',
    level: 'Beginner',
    price: 3999,
    originalPrice: 5999,
    tags: ['Python', 'Programming', 'Basics'],
    category: 'Programming Languages',
    isBestseller: true,
  },
  {
    id: '5',
    title: 'Data Structures & Algorithms',
    description: 'Master essential data structures and algorithms for technical interviews and competitive programming.',
    instructor: 'Prof. Rajesh Kumar',
    rating: 4.9,
    students: 2890,
    duration: '60 hours',
    level: 'Intermediate',
    price: 6999,
    originalPrice: 9999,
    tags: ['DSA', 'Algorithms', 'Interview Prep'],
    category: 'Programming Languages',
    isBestseller: true,
  },
  {
    id: '6',
    title: 'Database Management with SQL',
    description: 'Learn SQL and database design from basics to advanced queries and optimization.',
    instructor: 'Maria Garcia',
    rating: 4.6,
    students: 1980,
    duration: '30 hours',
    level: 'Beginner',
    price: 4499,
    originalPrice: 6999,
    tags: ['SQL', 'Database', 'MySQL'],
    category: 'Database',
    isBestseller: false,
  },
  {
    id: '7',
    title: 'A-Level Computer Science',
    description: 'Advanced computer science certification preparation with in-depth theory and practical projects.',
    instructor: 'Prof. Michael Chen',
    rating: 4.8,
    students: 1240,
    duration: '180 hours',
    level: 'Advanced',
    price: 18999,
    originalPrice: 29999,
    tags: ['A-Level', 'Certification', 'Advanced'],
    category: 'Certifications',
    isBestseller: false,
  },
  {
    id: '8',
    title: 'Java Programming Masterclass',
    description: 'Complete Java course from basics to advanced topics including Spring Boot and microservices.',
    instructor: 'James Wilson',
    rating: 4.7,
    students: 2650,
    duration: '55 hours',
    level: 'Beginner',
    price: 5999,
    originalPrice: 8999,
    tags: ['Java', 'Programming', 'Spring'],
    category: 'Programming Languages',
    isBestseller: false,
  },
  {
    id: '9',
    title: 'React & Next.js Development',
    description: 'Build modern web applications with React and Next.js. Learn hooks, SSR, and deployment.',
    instructor: 'Alex Rivera',
    rating: 4.9,
    students: 2100,
    duration: '45 hours',
    level: 'Intermediate',
    price: 6999,
    originalPrice: 10999,
    tags: ['React', 'Next.js', 'Frontend'],
    category: 'Web Development',
    isBestseller: true,
  },
];

const categories = [
  'All Categories',
  'Programming Languages',
  'Web Development',
  'Database',
  'Certifications',
  'Data Science',
  'Mobile Development',
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
