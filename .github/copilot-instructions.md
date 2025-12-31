# Plus Technology - Copilot Instructions

## Project Overview
A **Next.js 14** education platform for a computer training institute. Offers programming courses (C++, Python, etc.), handles student enrollments via email (no payment gateway), and tracks progress with certifications.

## Architecture & Key Patterns

### Tech Stack
- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **UI Components**: Radix UI primitives with `class-variance-authority` (CVA) for variants
- **Database**: PostgreSQL with Prisma ORM
- **Auth**: NextAuth.js v5 (beta)
- **State**: Zustand for client state, React Query for server state
- **Email**: Nodemailer with SMTP

### Project Structure
```
src/
├── app/              # Next.js App Router pages
│   ├── api/          # API routes (e.g., send-enrollment-email)
│   └── courses/[id]/ # Dynamic course pages
├── components/
│   ├── ui/           # Reusable primitives (Button, Card, Dialog)
│   ├── forms/        # Form components (EnrollForm)
│   └── layout/       # Navbar, Footer
└── lib/
    ├── courses-data.ts  # Centralized course data (static, no DB)
    ├── prisma.ts        # Singleton Prisma client
    └── utils.ts         # Utilities: cn(), formatPrice(), slugify()
```

### Critical Conventions

**1. Styling with `cn()` utility:**
```tsx
import { cn } from '@/lib/utils';
<div className={cn('base-classes', condition && 'conditional-class', className)} />
```

**2. UI Component Pattern (CVA + Radix):**
```tsx
// See src/components/ui/button.tsx for reference
const buttonVariants = cva('base-classes', {
  variants: { variant: {...}, size: {...} },
  defaultVariants: {...}
});
```

**3. Course Data Source:**
- Course details live in `src/lib/courses-data.ts` (static TypeScript, NOT database)
- Use `getCourseById(id)` and `getCourseCards()` from this file
- Database schema in `prisma/schema.prisma` is for future enrollment/progress tracking

**4. Form → API Pattern:**
- Forms post to `/api/*` route handlers
- Example: `EnrollForm` → `/api/send-enrollment-email` → Nodemailer

## Developer Workflows

### Commands
```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run typecheck    # TypeScript check (tsc --noEmit)
npm run db:generate  # Generate Prisma client after schema changes
npm run db:push      # Push schema to database
npm run db:studio    # Open Prisma Studio GUI
```

### Environment Variables Required
```env
DATABASE_URL="postgresql://..."
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=app-password
NEXTAUTH_SECRET=...
NEXTAUTH_URL=http://localhost:3000
```

### Adding a New Course
1. Add course object to `coursesData` in `src/lib/courses-data.ts`
2. Follow the `Course` interface structure (id, title, modules, instructor, etc.)
3. Dynamic route `/courses/[id]` will auto-render it

### Adding a New UI Component
1. Create in `src/components/ui/`
2. Use Radix primitives when possible
3. Apply CVA for variant-based styling
4. Export from component file directly (no barrel exports)

## Design System

### Color Tokens (CSS Variables)
- Primary: Deep Teal `--primary: 188 75% 24%` (#105E69)
- Background: Off-white `--background: 80 14% 97%`
- Defined in `src/app/globals.css`, consumed via Tailwind config

### Component Variants
Buttons support: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`, `success`
Sizes: `default`, `sm`, `lg`, `xl`, `icon`

## Database Schema Highlights
- **User**: Role-based (STUDENT, INSTRUCTOR, ADMIN)
- **Course**: Has modules → lessons → progress tracking
- **Enrollment**: Links users to courses with status
- **Quiz/Exam**: Supports assessments with attempts tracking
- See `prisma/schema.prisma` for full schema

## Testing Routes
- `/courses/cpp`, `/courses/python`, `/courses/basic-computer` - Valid courses
- `/courses/invalid-course` - Should show "Course Not Found"
