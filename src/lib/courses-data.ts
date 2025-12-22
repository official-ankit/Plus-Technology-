export interface Course {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  instructor: {
    name: string;
    title: string;
    avatar: string;
    bio: string;
    rating: number;
    students: number;
    courses: number;
  };
  rating: number;
  ratingsCount: number;
  students: number;
  duration: string;
  lectures: number;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  originalPrice: number;
  discount: number;
  language: string;
  lastUpdated: string;
  tags: string[];
  category: string;
  isBestseller: boolean;
  features: string[];
  whatYouWillLearn: string[];
  requirements: string[];
  modules: Array<{
    id: string;
    title: string;
    duration: string;
    lessons: Array<{
      id: string;
      title: string;
      duration: string;
      type: 'video' | 'quiz' | 'exercise' | 'project';
      isPreview?: boolean;
    }>;
  }>;
}

export interface CourseCard {
  id: string;
  title: string;
  description: string;
  instructor: string;
  rating: number;
  students: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  originalPrice: number;
  tags: string[];
  category: string;
  isBestseller: boolean;
}

// Full course details
export const coursesData: Record<string, Course> = {
  'cpp': {
    id: 'cpp',
    title: 'C++ Programming',
    subtitle: 'Master the fundamentals of C++ programming from scratch. Build a solid foundation for software development and prepare for technical interviews.',
    description: `Learn C++ from the ground up in this comprehensive course designed for absolute beginners. 
  
This course covers everything you need to know to become proficient in C++ programming, from basic syntax and data types to advanced concepts like object-oriented programming, templates, and the Standard Template Library (STL).

By the end of this course, you will be able to:
- Write clean, efficient C++ code
- Understand and apply object-oriented programming principles
- Work with pointers, references, and memory management
- Use the Standard Template Library effectively
- Solve complex programming problems
- Prepare for technical interviews at top companies`,
    instructor: {
      name: 'Dr. Sarah Johnson',
      title: 'Senior Software Engineer & Educator',
      avatar: '/avatars/instructor.jpg',
      bio: 'Dr. Sarah Johnson has over 15 years of experience in software development and teaching. She has worked at Microsoft and Google, and now dedicates her time to helping aspiring developers.',
      rating: 4.9,
      students: 45000,
      courses: 12,
    },
    rating: 4.8,
    ratingsCount: 2340,
    students: 12500,
    duration: '40 hours',
    lectures: 156,
    level: 'Intermediate',
    price: 5999,
    originalPrice: 8999,
    discount: 33,
    language: 'English',
    lastUpdated: 'December 2024',
    tags: ['C++', 'OOP', 'Programming'],
    category: 'Programming Languages',
    isBestseller: false,
    features: [
      '40 hours of on-demand video',
      '156 lectures and exercises',
      '45 coding assignments',
      '12 hands-on projects',
      'Certificate of completion',
      'Lifetime access',
      'Mobile and TV access',
      'Full lifetime access',
    ],
    whatYouWillLearn: [
      'Write clean and efficient C++ code from scratch',
      'Understand object-oriented programming concepts',
      'Master pointers, references, and memory management',
      'Work with the Standard Template Library (STL)',
      'Implement common data structures and algorithms',
      'Debug and optimize C++ programs',
      'Prepare for technical interviews at top companies',
      'Build real-world projects to add to your portfolio',
    ],
    requirements: [
      'No prior programming experience required',
      'A computer (Windows, Mac, or Linux)',
      'Willingness to learn and practice',
    ],
    modules: [
      {
        id: '1',
        title: 'Getting Started with C++',
        duration: '2h 30m',
        lessons: [
          { id: '1-1', title: 'Welcome to the Course', duration: '5m', type: 'video', isPreview: true },
          { id: '1-2', title: 'Setting Up Your Development Environment', duration: '15m', type: 'video', isPreview: true },
          { id: '1-3', title: 'Your First C++ Program', duration: '20m', type: 'video' },
          { id: '1-4', title: 'Understanding the Build Process', duration: '15m', type: 'video' },
          { id: '1-5', title: 'Quiz: Getting Started', duration: '10m', type: 'quiz' },
          { id: '1-6', title: 'Coding Exercise: Hello World Variations', duration: '25m', type: 'exercise' },
        ],
      },
      {
        id: '2',
        title: 'Variables, Data Types, and Operators',
        duration: '4h 15m',
        lessons: [
          { id: '2-1', title: 'Introduction to Variables', duration: '20m', type: 'video' },
          { id: '2-2', title: 'Primitive Data Types', duration: '35m', type: 'video' },
          { id: '2-3', title: 'Type Conversion and Casting', duration: '25m', type: 'video' },
          { id: '2-4', title: 'Arithmetic Operators', duration: '30m', type: 'video' },
          { id: '2-5', title: 'Comparison and Logical Operators', duration: '25m', type: 'video' },
          { id: '2-6', title: 'Assignment and Compound Operators', duration: '20m', type: 'video' },
          { id: '2-7', title: 'Quiz: Variables and Operators', duration: '15m', type: 'quiz' },
          { id: '2-8', title: 'Project: Simple Calculator', duration: '45m', type: 'project' },
        ],
      },
      {
        id: '3',
        title: 'Control Flow and Loops',
        duration: '3h 45m',
        lessons: [
          { id: '3-1', title: 'If-Else Statements', duration: '25m', type: 'video' },
          { id: '3-2', title: 'Switch Statements', duration: '20m', type: 'video' },
          { id: '3-3', title: 'For Loops', duration: '30m', type: 'video' },
          { id: '3-4', title: 'While and Do-While Loops', duration: '25m', type: 'video' },
          { id: '3-5', title: 'Nested Loops', duration: '20m', type: 'video' },
          { id: '3-6', title: 'Break and Continue', duration: '15m', type: 'video' },
          { id: '3-7', title: 'Quiz: Control Flow', duration: '15m', type: 'quiz' },
          { id: '3-8', title: 'Project: Number Guessing Game', duration: '45m', type: 'project' },
        ],
      },
      {
        id: '4',
        title: 'Functions and Scope',
        duration: '4h 00m',
        lessons: [
          { id: '4-1', title: 'Defining and Calling Functions', duration: '30m', type: 'video' },
          { id: '4-2', title: 'Function Parameters and Return Types', duration: '25m', type: 'video' },
          { id: '4-3', title: 'Default Parameters and Overloading', duration: '30m', type: 'video' },
          { id: '4-4', title: 'Variable Scope and Lifetime', duration: '25m', type: 'video' },
          { id: '4-5', title: 'Recursion', duration: '35m', type: 'video' },
          { id: '4-6', title: 'Inline Functions', duration: '15m', type: 'video' },
          { id: '4-7', title: 'Quiz: Functions', duration: '15m', type: 'quiz' },
          { id: '4-8', title: 'Project: Math Library', duration: '50m', type: 'project' },
        ],
      },
      {
        id: '5',
        title: 'Object-Oriented Programming',
        duration: '6h 30m',
        lessons: [
          { id: '5-1', title: 'Introduction to OOP', duration: '25m', type: 'video' },
          { id: '5-2', title: 'Classes and Objects', duration: '40m', type: 'video' },
          { id: '5-3', title: 'Constructors and Destructors', duration: '35m', type: 'video' },
          { id: '5-4', title: 'Access Modifiers', duration: '25m', type: 'video' },
          { id: '5-5', title: 'Encapsulation', duration: '30m', type: 'video' },
          { id: '5-6', title: 'Inheritance', duration: '45m', type: 'video' },
          { id: '5-7', title: 'Polymorphism', duration: '40m', type: 'video' },
          { id: '5-8', title: 'Abstract Classes and Interfaces', duration: '35m', type: 'video' },
          { id: '5-9', title: 'Quiz: OOP Concepts', duration: '20m', type: 'quiz' },
          { id: '5-10', title: 'Project: Banking System', duration: '60m', type: 'project' },
        ],
      },
    ],
  },
  'basic-computer': {
    id: 'basic-computer',
    title: 'Basic Computer Course',
    subtitle: 'Learn computer fundamentals, Windows OS, MS Office basics, internet usage, and email. Perfect for absolute beginners.',
    description: `This comprehensive Basic Computer Course is designed for absolute beginners who want to get started with computers. 

Learn the fundamentals of computer hardware and software, master the Windows operating system, and become proficient in essential MS Office applications including Word, Excel, and PowerPoint.

By the end of this course, you will be able to:
- Understand computer basics and terminology
- Navigate Windows OS confidently
- Create professional documents in MS Word
- Work with spreadsheets in MS Excel
- Create presentations in PowerPoint
- Browse the internet safely and effectively
- Use email for communication`,
    instructor: {
      name: 'Institute Plus Technology',
      title: 'Professional Training Institute',
      avatar: '/avatars/institute.jpg',
      bio: 'Plus Technology is a leading computer education institute providing quality training in various IT and computer courses.',
      rating: 4.8,
      students: 15000,
      courses: 25,
    },
    rating: 4.8,
    ratingsCount: 850,
    students: 8500,
    duration: '2 Months',
    lectures: 48,
    level: 'Beginner',
    price: 2999,
    originalPrice: 4999,
    discount: 40,
    language: 'Hindi/English',
    lastUpdated: 'December 2024',
    tags: ['Computer Basics', 'Windows', 'MS Office'],
    category: 'Foundation Courses',
    isBestseller: true,
    features: [
      '48 hours of practical training',
      'Hands-on exercises',
      'MS Office training',
      'Internet & Email basics',
      'Certificate of completion',
      'Job-ready skills',
      'Lifetime access to materials',
      'Expert instructor support',
    ],
    whatYouWillLearn: [
      'Computer hardware and software basics',
      'Windows operating system',
      'MS Word for document creation',
      'MS Excel for spreadsheets',
      'MS PowerPoint for presentations',
      'Internet browsing and search',
      'Email communication',
      'File management and organization',
    ],
    requirements: [
      'No prior computer knowledge required',
      'Access to a computer for practice',
      'Willingness to learn',
    ],
    modules: [
      {
        id: '1',
        title: 'Computer Fundamentals',
        duration: '8h',
        lessons: [
          { id: '1-1', title: 'Introduction to Computers', duration: '45m', type: 'video', isPreview: true },
          { id: '1-2', title: 'Computer Hardware', duration: '60m', type: 'video' },
          { id: '1-3', title: 'Computer Software', duration: '45m', type: 'video' },
          { id: '1-4', title: 'Operating Systems Overview', duration: '40m', type: 'video' },
        ],
      },
      {
        id: '2',
        title: 'Windows Operating System',
        duration: '10h',
        lessons: [
          { id: '2-1', title: 'Windows Interface', duration: '50m', type: 'video' },
          { id: '2-2', title: 'File Management', duration: '60m', type: 'video' },
          { id: '2-3', title: 'System Settings', duration: '45m', type: 'video' },
          { id: '2-4', title: 'Windows Utilities', duration: '55m', type: 'video' },
        ],
      },
      {
        id: '3',
        title: 'MS Office Suite',
        duration: '20h',
        lessons: [
          { id: '3-1', title: 'MS Word Basics', duration: '90m', type: 'video' },
          { id: '3-2', title: 'MS Excel Fundamentals', duration: '90m', type: 'video' },
          { id: '3-3', title: 'MS PowerPoint Essentials', duration: '90m', type: 'video' },
          { id: '3-4', title: 'Practical Projects', duration: '120m', type: 'project' },
        ],
      },
      {
        id: '4',
        title: 'Internet & Email',
        duration: '10h',
        lessons: [
          { id: '4-1', title: 'Internet Basics', duration: '60m', type: 'video' },
          { id: '4-2', title: 'Web Browsing', duration: '50m', type: 'video' },
          { id: '4-3', title: 'Email Communication', duration: '70m', type: 'video' },
          { id: '4-4', title: 'Online Safety', duration: '40m', type: 'video' },
        ],
      },
    ],
  },
  'python': {
    id: 'python',
    title: 'Python Programming',
    subtitle: 'Learn Python from scratch. Cover basics to advanced topics including data structures, OOP, file handling, and libraries.',
    description: `Master Python programming with this comprehensive course designed for beginners and intermediate learners.

Python is one of the most popular and versatile programming languages used in web development, data science, machine learning, automation, and more.

By the end of this course, you will be able to:
- Write efficient Python code
- Master Python data structures
- Understand object-oriented programming
- Work with files and databases
- Use popular Python libraries like NumPy and Pandas
- Build real-world Python applications
- Automate tasks with Python scripts`,
    instructor: {
      name: 'Institute Plus Technology',
      title: 'Professional Training Institute',
      avatar: '/avatars/institute.jpg',
      bio: 'Plus Technology is a leading computer education institute providing quality training in various IT and computer courses.',
      rating: 4.9,
      students: 15000,
      courses: 25,
    },
    rating: 4.9,
    ratingsCount: 420,
    students: 4200,
    duration: '3 Months',
    lectures: 85,
    level: 'Beginner',
    price: 5999,
    originalPrice: 8999,
    discount: 33,
    language: 'Hindi/English',
    lastUpdated: 'December 2024',
    tags: ['Python', 'Programming', 'Data Science'],
    category: 'Programming Languages',
    isBestseller: true,
    features: [
      '85 comprehensive lectures',
      'Hands-on coding exercises',
      '20 real-world projects',
      'Python libraries training',
      'Certificate of completion',
      'Career guidance',
      'Lifetime access',
      'Expert support',
    ],
    whatYouWillLearn: [
      'Python syntax and fundamentals',
      'Data structures (lists, tuples, dictionaries)',
      'Object-oriented programming in Python',
      'File handling and exceptions',
      'Working with modules and packages',
      'NumPy and Pandas basics',
      'Database connectivity',
      'Web scraping fundamentals',
    ],
    requirements: [
      'Basic computer knowledge',
      'No programming experience required',
      'Python installed on computer',
    ],
    modules: [
      {
        id: '1',
        title: 'Python Basics',
        duration: '15h',
        lessons: [
          { id: '1-1', title: 'Introduction to Python', duration: '30m', type: 'video', isPreview: true },
          { id: '1-2', title: 'Variables and Data Types', duration: '45m', type: 'video' },
          { id: '1-3', title: 'Operators and Expressions', duration: '40m', type: 'video' },
          { id: '1-4', title: 'Control Flow', duration: '50m', type: 'video' },
        ],
      },
      {
        id: '2',
        title: 'Data Structures',
        duration: '20h',
        lessons: [
          { id: '2-1', title: 'Lists and Tuples', duration: '60m', type: 'video' },
          { id: '2-2', title: 'Dictionaries and Sets', duration: '60m', type: 'video' },
          { id: '2-3', title: 'List Comprehensions', duration: '45m', type: 'video' },
          { id: '2-4', title: 'Data Structure Projects', duration: '75m', type: 'project' },
        ],
      },
      {
        id: '3',
        title: 'Object-Oriented Programming',
        duration: '18h',
        lessons: [
          { id: '3-1', title: 'Classes and Objects', duration: '70m', type: 'video' },
          { id: '3-2', title: 'Inheritance and Polymorphism', duration: '80m', type: 'video' },
          { id: '3-3', title: 'Advanced OOP Concepts', duration: '60m', type: 'video' },
          { id: '3-4', title: 'OOP Projects', duration: '90m', type: 'project' },
        ],
      },
    ],
  },
};

// Simplified course list for browsing
export const coursesList: CourseCard[] = [
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

export function getCourseById(id: string): Course | undefined {
  // First check if full course data exists
  if (coursesData[id]) {
    return coursesData[id];
  }
  
  // If not, find the course in the list and generate basic details
  const courseCard = coursesList.find(c => c.id === id);
  if (!courseCard) {
    return undefined;
  }
  
  // Generate full course details from card data
  const generatedCourse: Course = {
    id: courseCard.id,
    title: courseCard.title,
    subtitle: courseCard.description,
    description: courseCard.description + '\n\nThis course provides comprehensive training to help you master the skills needed in this domain. Our experienced instructors will guide you through practical exercises and real-world projects.',
    instructor: {
      name: courseCard.instructor,
      title: 'Professional Instructor',
      avatar: '/avatars/institute.jpg',
      bio: `${courseCard.instructor} provides quality education with experienced instructors and comprehensive curriculum.`,
      rating: courseCard.rating,
      students: courseCard.students,
      courses: 25,
    },
    rating: courseCard.rating,
    ratingsCount: Math.floor(courseCard.students * 0.1),
    students: courseCard.students,
    duration: courseCard.duration,
    lectures: courseCard.level === 'Beginner' ? 40 : courseCard.level === 'Intermediate' ? 60 : 80,
    level: courseCard.level,
    price: courseCard.price,
    originalPrice: courseCard.originalPrice,
    discount: Math.round(((courseCard.originalPrice - courseCard.price) / courseCard.originalPrice) * 100),
    language: 'Hindi/English',
    lastUpdated: 'December 2024',
    tags: courseCard.tags,
    category: courseCard.category,
    isBestseller: courseCard.isBestseller,
    features: [
      'Comprehensive video lectures',
      'Hands-on practical exercises',
      'Real-world projects',
      'Certificate of completion',
      'Lifetime access to content',
      'Expert instructor support',
      'Study materials included',
      'Career guidance',
    ],
    whatYouWillLearn: [
      `Master ${courseCard.title} fundamentals`,
      'Understand core concepts and principles',
      'Build practical projects',
      'Gain hands-on experience',
      'Learn industry best practices',
      'Prepare for professional opportunities',
      'Get career-ready skills',
      'Build a strong portfolio',
    ],
    requirements: [
      'Basic computer knowledge',
      'Willingness to learn',
      'Regular practice and dedication',
    ],
    modules: [
      {
        id: '1',
        title: 'Introduction & Fundamentals',
        duration: courseCard.duration,
        lessons: [
          { id: '1-1', title: 'Course Introduction', duration: '10m', type: 'video', isPreview: true },
          { id: '1-2', title: 'Getting Started', duration: '20m', type: 'video', isPreview: true },
          { id: '1-3', title: 'Core Concepts', duration: '30m', type: 'video' },
          { id: '1-4', title: 'Practical Exercise', duration: '25m', type: 'exercise' },
        ],
      },
      {
        id: '2',
        title: 'Advanced Topics',
        duration: courseCard.duration,
        lessons: [
          { id: '2-1', title: 'Advanced Concepts', duration: '35m', type: 'video' },
          { id: '2-2', title: 'Real-world Applications', duration: '40m', type: 'video' },
          { id: '2-3', title: 'Final Project', duration: '60m', type: 'project' },
        ],
      },
    ],
  };
  
  return generatedCourse;
}

export function getAllCourses(): CourseCard[] {
  return coursesList;
}
