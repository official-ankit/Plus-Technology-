# Computer Institute System — Technical Architecture

## Architecture Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                                  CDN (CloudFlare/Vercel Edge)               │
│                              Static assets, SSG pages, caching              │
└─────────────────────────────────────────────────────────────────────────────┘
                                          │
                                          ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                              Frontend (Next.js)                              │
│                    React, TypeScript, Tailwind CSS, SSR/SSG                 │
└─────────────────────────────────────────────────────────────────────────────┘
                                          │
                                          ▼
┌─────────────────────────────────────────────────────────────────────────────┐
│                              API Gateway / BFF                              │
│                         Rate limiting, auth, routing                        │
└─────────────────────────────────────────────────────────────────────────────┘
                                          │
              ┌───────────────────────────┼───────────────────────────┐
              ▼                           ▼                           ▼
┌─────────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐
│    Core API         │     │    Code Runner      │     │    Assessment       │
│    (NestJS)         │     │    Service          │     │    Service          │
│                     │     │    (Isolated)       │     │                     │
└─────────────────────┘     └─────────────────────┘     └─────────────────────┘
              │                           │                           │
              └───────────────────────────┼───────────────────────────┘
                                          │
              ┌───────────────────────────┼───────────────────────────┐
              ▼                           ▼                           ▼
┌─────────────────────┐     ┌─────────────────────┐     ┌─────────────────────┐
│    PostgreSQL       │     │    Redis            │     │    Object Storage   │
│    (Primary DB)     │     │    (Cache/Queue)    │     │    (S3/R2)          │
└─────────────────────┘     └─────────────────────┘     └─────────────────────┘
```

---

## Frontend Architecture

### Tech Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Framework** | Next.js 14+ (App Router) | SSR/SSG, SEO, performance |
| **Language** | TypeScript | Type safety, IDE support |
| **Styling** | Tailwind CSS + CSS Variables | Utility-first, design tokens |
| **State** | React Query + Zustand | Server state + client state |
| **Forms** | React Hook Form + Zod | Validation, performance |
| **Components** | Radix UI primitives | Accessible, unstyled |
| **Code Editor** | Monaco Editor | VS Code experience |
| **Testing** | Vitest + Testing Library | Fast, React-focused |

### Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── (auth)/            # Auth-related routes
│   ├── (dashboard)/       # Authenticated routes
│   ├── (public)/          # Public routes
│   ├── admin/             # Admin routes
│   └── api/               # API routes (BFF)
├── components/
│   ├── ui/                # Design system primitives
│   ├── features/          # Feature-specific components
│   └── layouts/           # Layout components
├── hooks/                 # Custom React hooks
├── lib/                   # Utilities, API clients
├── stores/                # Zustand stores
├── styles/                # Global styles, tokens
└── types/                 # TypeScript types
```

### Design System Tokens

```typescript
// tokens.ts
export const tokens = {
  colors: {
    primary: {
      50: 'hsl(210, 100%, 95%)',
      500: 'hsl(210, 100%, 50%)',
      600: 'hsl(210, 100%, 45%)',
    },
    neutral: { /* ... */ },
    semantic: { success, warning, error, info },
  },
  spacing: {
    1: '4px', 2: '8px', 3: '12px', 4: '16px',
    5: '20px', 6: '24px', 8: '32px', 10: '40px',
  },
  typography: {
    fontFamily: { sans: 'Inter', mono: 'JetBrains Mono' },
    fontSize: { xs: '12px', sm: '14px', base: '16px', /* ... */ },
  },
  radii: { sm: '4px', md: '8px', lg: '12px', full: '9999px' },
  shadows: { sm, md, lg, xl },
};
```

### Performance Targets

| Metric | Target | Strategy |
|--------|--------|----------|
| **TTFB** | < 200ms | Edge caching, SSG where possible |
| **LCP** | < 2.5s | Optimize images, preload critical |
| **FID** | < 100ms | Code splitting, defer non-critical JS |
| **CLS** | < 0.1 | Skeleton loaders, reserved space |
| **Bundle** | < 200KB (initial) | Tree shaking, dynamic imports |

### SSR/SSG Strategy

| Page Type | Rendering | Cache |
|-----------|-----------|-------|
| Home, Landing | SSG | CDN, revalidate 1hr |
| Catalog | SSR + cache | Redis 5min |
| Course Detail | SSG | CDN, revalidate on publish |
| Learning Player | CSR | Authenticated, real-time |
| Dashboard | SSR | Authenticated, no CDN |
| Admin | CSR | Authenticated only |

---

## Backend Architecture

### Tech Stack

| Layer | Technology | Rationale |
|-------|------------|-----------|
| **Framework** | NestJS | Modular, TypeScript-first, enterprise-ready |
| **Runtime** | Node.js 20+ | Async I/O, ecosystem |
| **ORM** | Prisma | Type-safe, migrations, great DX |
| **Database** | PostgreSQL 15+ | ACID, JSON support, full-text search |
| **Cache** | Redis | Sessions, rate limiting, caching |
| **Queue** | BullMQ | Background jobs, reliable |
| **Storage** | S3/Cloudflare R2 | Assets, videos, submissions |
| **Search** | PostgreSQL FTS / Meilisearch | Fast search, typo-tolerant |

### API Design

#### REST API (Primary)

```
Base URL: /api/v1

Authentication:
  POST   /auth/register
  POST   /auth/login
  POST   /auth/logout
  POST   /auth/refresh
  GET    /auth/me

Courses:
  GET    /courses                    # List/search
  GET    /courses/:id                # Detail
  POST   /courses                    # Create (admin)
  PATCH  /courses/:id                # Update (admin)
  DELETE /courses/:id                # Delete (admin)

Enrollments:
  POST   /enrollments                # Enroll
  GET    /enrollments                # My enrollments
  GET    /enrollments/:id/progress   # Progress

Learning:
  GET    /courses/:id/modules        # Modules list
  GET    /modules/:id                # Module content
  POST   /modules/:id/complete       # Mark complete

Assessments:
  GET    /quizzes/:id                # Get quiz
  POST   /quizzes/:id/submit         # Submit quiz
  GET    /exams/:id                  # Get exam (proctored)
  POST   /exams/:id/start            # Start exam session
  POST   /exams/:id/submit           # Submit exam

Certifications:
  GET    /certifications             # My certs
  GET    /certifications/:id/verify  # Public verification

Code Runner:
  POST   /code/run                   # Execute code
  POST   /code/submit                # Submit for grading
```

#### GraphQL (Optional, for complex queries)

```graphql
type Query {
  courses(filter: CourseFilter, pagination: Pagination): CourseConnection!
  course(id: ID!): Course
  me: User
  myProgress: [EnrollmentProgress!]!
}

type Mutation {
  enroll(courseId: ID!): Enrollment!
  submitQuiz(quizId: ID!, answers: [AnswerInput!]!): QuizResult!
  runCode(input: CodeInput!): CodeOutput!
}
```

### API Versioning

- URL-based: `/api/v1/`, `/api/v2/`
- Sunset headers for deprecated versions
- 12-month deprecation notice

### Rate Limiting

| Endpoint Type | Limit | Window |
|---------------|-------|--------|
| Public | 60 req | 1 min |
| Authenticated | 200 req | 1 min |
| Code Runner | 20 req | 1 min |
| Auth | 10 req | 1 min |

---

## Database Schema (Core)

```prisma
// schema.prisma

model User {
  id            String   @id @default(cuid())
  email         String   @unique
  passwordHash  String
  name          String
  role          Role     @default(STUDENT)
  emailVerified Boolean  @default(false)
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  enrollments   Enrollment[]
  submissions   Submission[]
  certificates  Certificate[]
  sessions      Session[]
}

enum Role {
  STUDENT
  INSTRUCTOR
  ADMIN
}

model Course {
  id          String   @id @default(cuid())
  title       String
  slug        String   @unique
  description String
  thumbnail   String?
  level       Level
  duration    Int      // hours
  price       Decimal  @default(0)
  published   Boolean  @default(false)
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  instructorId String
  instructor   User     @relation(fields: [instructorId], references: [id])
  modules      Module[]
  enrollments  Enrollment[]
}

enum Level {
  BEGINNER
  INTERMEDIATE
  ADVANCED
}

model Module {
  id        String   @id @default(cuid())
  title     String
  order     Int
  content   Json     // Rich content
  duration  Int      // minutes
  
  courseId  String
  course    Course   @relation(fields: [courseId], references: [id])
  lessons   Lesson[]
  quiz      Quiz?
}

model Lesson {
  id        String     @id @default(cuid())
  title     String
  type      LessonType
  content   Json
  order     Int
  
  moduleId  String
  module    Module     @relation(fields: [moduleId], references: [id])
}

enum LessonType {
  VIDEO
  TEXT
  CODE_LAB
  QUIZ
}

model Enrollment {
  id        String   @id @default(cuid())
  progress  Int      @default(0) // percentage
  startedAt DateTime @default(now())
  
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  courseId  String
  course    Course   @relation(fields: [courseId], references: [id])
  
  completedLessons CompletedLesson[]
  
  @@unique([userId, courseId])
}

model Quiz {
  id        String     @id @default(cuid())
  title     String
  timeLimit Int?       // minutes
  passingScore Int     @default(60)
  
  moduleId  String     @unique
  module    Module     @relation(fields: [moduleId], references: [id])
  questions Question[]
}

model Exam {
  id           String   @id @default(cuid())
  title        String
  timeLimit    Int      // minutes
  passingScore Int
  proctored    Boolean  @default(false)
  
  courseId     String
  questions    Question[]
  attempts     ExamAttempt[]
}

model Certificate {
  id           String   @id @default(cuid())
  title        String
  issuedAt     DateTime @default(now())
  expiresAt    DateTime
  verifyCode   String   @unique
  badgeUrl     String
  
  userId       String
  user         User     @relation(fields: [userId], references: [id])
  courseId     String
}
```

---

## Code Runner Service

### Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    API Gateway                               │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                 Code Runner Service                          │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                   Job Queue (BullMQ)                 │    │
│  └─────────────────────────────────────────────────────┘    │
│                              │                               │
│              ┌───────────────┼───────────────┐               │
│              ▼               ▼               ▼               │
│  ┌───────────────┐ ┌───────────────┐ ┌───────────────┐      │
│  │   Worker 1    │ │   Worker 2    │ │   Worker N    │      │
│  │  (Container)  │ │  (Container)  │ │  (Container)  │      │
│  └───────────────┘ └───────────────┘ └───────────────┘      │
│                                                              │
│  Containers: gVisor/Firecracker microVMs                     │
│  Languages: C++, Python, Java, JavaScript, Go                │
│  Limits: 10s timeout, 256MB memory, no network               │
└─────────────────────────────────────────────────────────────┘
```

### Execution Flow

1. User submits code via API
2. Request queued in BullMQ
3. Worker picks up job, spins up isolated container
4. Code executed with resource limits
5. Output captured, tests run
6. Result returned to user (< 5s typical)

### Security Measures

| Measure | Implementation |
|---------|----------------|
| **Isolation** | gVisor/Firecracker sandboxing |
| **Resource Limits** | CPU: 1 core, Memory: 256MB, Time: 10s |
| **Network** | Disabled |
| **Filesystem** | Read-only except /tmp |
| **Syscall Filtering** | Seccomp profiles |

### Auto-Grading Pipeline

```
Submission → Parse → Compile → Run Tests → Grade → Feedback
                                    │
                                    ▼
                            ┌───────────────┐
                            │  Test Cases   │
                            │  (Unit Tests) │
                            └───────────────┘
```

---

## Authentication & Authorization

### AuthN Strategy

| Method | Use Case |
|--------|----------|
| **Email + Password** | Primary registration |
| **OAuth 2.0** | Google, GitHub login |
| **Magic Link** | Passwordless option |
| **MFA** | TOTP for sensitive accounts |

### Session Management

- JWT access tokens (15 min expiry)
- Refresh tokens (7 days, rotated on use)
- Secure, HttpOnly cookies
- Token blacklist in Redis

### Authorization (RBAC)

```typescript
// permissions.ts
export const permissions = {
  student: [
    'course:read',
    'enrollment:create',
    'enrollment:read:own',
    'submission:create',
    'certificate:read:own',
  ],
  instructor: [
    ...permissions.student,
    'course:create',
    'course:update:own',
    'module:create',
    'assessment:create',
    'student:read:own-courses',
  ],
  admin: [
    '*', // All permissions
  ],
};
```

---

## Caching Strategy

### Layers

| Layer | Tech | TTL | Use Case |
|-------|------|-----|----------|
| **CDN** | CloudFlare | 1hr - 24hr | Static assets, SSG pages |
| **API** | Redis | 5min - 1hr | Course listings, search |
| **Database** | Prisma cache | Query-level | Repeated queries |
| **Client** | React Query | 5min | API responses |

### Cache Invalidation

- Tag-based invalidation
- Publish events on mutations
- Stale-while-revalidate pattern

```typescript
// On course update
await redis.del(`course:${id}`);
await cdn.purge({ tags: [`course:${id}`] });
```

---

## Background Jobs

### Job Types

| Job | Queue | Priority | Retry |
|-----|-------|----------|-------|
| Email sending | `email` | Normal | 3x |
| Code execution | `code-runner` | High | 0 |
| Certificate generation | `certificates` | Normal | 2x |
| Video transcoding | `media` | Low | 3x |
| Analytics aggregation | `analytics` | Low | 1x |

### Implementation

```typescript
// jobs/certificate.job.ts
@Processor('certificates')
export class CertificateProcessor {
  @Process('generate')
  async generate(job: Job<CertificateData>) {
    const { userId, courseId, examScore } = job.data;
    
    // Generate badge image
    const badgeUrl = await this.badgeService.generate({ ... });
    
    // Create certificate record
    await this.prisma.certificate.create({
      data: {
        userId,
        courseId,
        badgeUrl,
        verifyCode: nanoid(12),
        expiresAt: addYears(new Date(), 3),
      },
    });
    
    // Send email
    await this.emailQueue.add('send', {
      template: 'certificate-issued',
      to: user.email,
      data: { ... },
    });
  }
}
```

---

## Monitoring & Observability

### Stack

| Layer | Tool |
|-------|------|
| **Metrics** | Prometheus + Grafana |
| **Logs** | Structured JSON → Loki/ELK |
| **Traces** | OpenTelemetry → Jaeger |
| **Errors** | Sentry |
| **Uptime** | Pingdom/UptimeRobot |
| **APM** | Datadog or self-hosted |

### Key Metrics

```yaml
# Application
- http_requests_total
- http_request_duration_seconds
- active_users_total
- enrollments_total
- quiz_submissions_total
- code_executions_total

# Business
- course_completion_rate
- certification_pass_rate
- search_to_enroll_conversion
- daily_active_users

# Infrastructure
- cpu_usage_percent
- memory_usage_bytes
- db_connections_active
- redis_memory_used_bytes
- queue_depth
```

### Alerting

| Alert | Threshold | Severity |
|-------|-----------|----------|
| Error rate | > 1% | Warning |
| Error rate | > 5% | Critical |
| Latency P99 | > 2s | Warning |
| Latency P99 | > 5s | Critical |
| Queue depth | > 1000 | Warning |
| Disk usage | > 80% | Warning |

---

## CI/CD Pipeline

```yaml
# .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pnpm install
      - run: pnpm lint
      - run: pnpm typecheck

  test:
    runs-on: ubuntu-latest
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: test
    steps:
      - uses: actions/checkout@v4
      - run: pnpm install
      - run: pnpm test:unit
      - run: pnpm test:e2e

  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pnpm install
      - run: pnpm build
      - uses: actions/upload-artifact@v4
        with:
          name: build
          path: .next/

  deploy-preview:
    needs: [lint, test, build]
    if: github.event_name == 'pull_request'
    runs-on: ubuntu-latest
    steps:
      - uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}

  deploy-production:
    needs: [lint, test, build]
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: vercel/action@v1
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-args: '--prod'
```

### Deployment Strategy

| Environment | Trigger | Strategy |
|-------------|---------|----------|
| **Preview** | PR opened | Auto-deploy unique URL |
| **Staging** | Merge to `develop` | Auto-deploy |
| **Production** | Merge to `main` | Blue-green with rollback |

---

## Security

### Input Validation

```typescript
// Using Zod schemas
const createCourseSchema = z.object({
  title: z.string().min(3).max(200),
  description: z.string().max(5000),
  level: z.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED']),
  price: z.number().min(0).max(9999),
});
```

### CSRF Protection

- SameSite cookies (Strict/Lax)
- CSRF tokens for state-changing requests
- Double-submit cookie pattern

### XSS Prevention

- React's automatic escaping
- CSP headers
- Sanitize user-generated HTML (DOMPurify)

### Security Headers

```typescript
// next.config.js
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-XSS-Protection', value: '1; mode=block' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Content-Security-Policy', value: "default-src 'self'; ..." },
];
```

### GDPR Compliance

| Requirement | Implementation |
|-------------|----------------|
| Data export | User can download all data as JSON |
| Data deletion | Soft delete → hard delete after 30 days |
| Consent | Explicit opt-in for marketing, analytics |
| Data minimization | Collect only necessary data |
| Audit logs | All data access logged |

---

## Infrastructure as Code

```hcl
# terraform/main.tf

# VPC
resource "aws_vpc" "main" {
  cidr_block = "10.0.0.0/16"
}

# Database
resource "aws_rds_cluster" "postgres" {
  cluster_identifier = "cis-prod"
  engine             = "aurora-postgresql"
  engine_version     = "15.4"
  master_username    = var.db_username
  master_password    = var.db_password
  
  serverlessv2_scaling_configuration {
    min_capacity = 0.5
    max_capacity = 16
  }
}

# Redis
resource "aws_elasticache_cluster" "redis" {
  cluster_id      = "cis-redis"
  engine          = "redis"
  node_type       = "cache.t4g.micro"
  num_cache_nodes = 1
}

# S3 for assets
resource "aws_s3_bucket" "assets" {
  bucket = "cis-assets-prod"
}
```

---

## Proctoring Integration

### Flow

1. Pre-exam system check (webcam, mic, browser)
2. ID verification (upload + face match)
3. Environment scan (360° room view)
4. Exam session with continuous monitoring
5. Activity logs sent to review queue
6. AI flags suspicious activity
7. Human review for flagged sessions

### Integration Options

| Provider | Features | Pricing |
|----------|----------|---------|
| **Proctorio** | AI proctoring, lockdown browser | Per exam |
| **ExamSoft** | Full-featured, HIPAA compliant | Enterprise |
| **Open-source** | Self-hosted, basic monitoring | Free |

### Self-Hosted Approach

```typescript
// Monitor webcam, mic, screen
const proctoringSession = {
  webcam: new MediaRecorder(webcamStream),
  screen: new MediaRecorder(screenStream),
  
  events: [
    { type: 'focus_lost', timestamp: Date.now() },
    { type: 'tab_switch', timestamp: Date.now() },
    { type: 'face_not_detected', timestamp: Date.now() },
  ],
};
```

---

## Analytics Events

```typescript
// analytics.ts
export const events = {
  // Acquisition
  'page_view': { path: string },
  'search': { query: string, results_count: number },
  
  // Activation
  'signup_started': { method: 'email' | 'google' | 'github' },
  'signup_completed': {},
  'course_viewed': { course_id: string },
  'course_enrolled': { course_id: string, price: number },
  
  // Engagement
  'lesson_started': { lesson_id: string },
  'lesson_completed': { lesson_id: string, duration: number },
  'code_executed': { language: string, success: boolean },
  'quiz_submitted': { quiz_id: string, score: number },
  
  // Retention
  'streak_updated': { days: number },
  'certificate_earned': { course_id: string },
  
  // Revenue
  'checkout_started': { amount: number },
  'purchase_completed': { amount: number, product_type: string },
};
```

---

## Rationale Summary

| Decision | Why |
|----------|-----|
| Next.js | SSR/SSG for SEO + performance, React ecosystem |
| NestJS | TypeScript-first, modular, enterprise patterns |
| PostgreSQL | Reliable, ACID, JSON support, FTS |
| Prisma | Type-safe ORM, excellent DX |
| BullMQ | Reliable queues, Redis-backed |
| gVisor | Secure code execution sandbox |
| Vercel/CloudFlare | Edge performance, easy deployment |
| OpenTelemetry | Vendor-neutral observability |
