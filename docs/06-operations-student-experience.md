# Computer Institute System — Operations & Student Experience

## Onboarding Flow

### Registration Steps

```
Step 1: Sign Up
├── Email + Password / OAuth (Google, GitHub)
├── Name, country, timezone
└── Email verification

Step 2: Profile Setup (Optional)
├── Profile photo
├── Learning goals (dropdown)
├── Experience level (beginner/intermediate/advanced)
└── Preferred learning schedule

Step 3: Interest Selection
├── Select tracks of interest (C++, Python, Web Dev, etc.)
├── Take optional placement test
└── Personalized course recommendations

Step 4: First Course
├── Browse recommended courses
├── Enroll in first course
└── Begin learning immediately
```

### Welcome Sequence (Email)

| Day | Email | Content |
|-----|-------|---------|
| 0 | Welcome | Account created, verify email, first course CTA |
| 1 | Getting Started | Platform tour, keyboard shortcuts, mobile app |
| 3 | First Milestone | If enrolled: check progress. If not: recommend course |
| 7 | Community | Join Discord, forums, study groups |
| 14 | Mentor Intro | Book first mentor session |

### Orientation Materials

- **Quick Start Video** (2 min): Platform overview
- **Interactive Tour**: Highlight key features on first login
- **Keyboard Shortcuts Card**: Printable PDF
- **Sample Learning Path**: 7-day plan for first course
- **FAQ**: Common questions with answers

---

## Learning Experience

### Study Plans

| Plan Type | Description | Features |
|-----------|-------------|----------|
| **Self-Paced** | Flexible, no deadlines | Suggested milestones, reminders |
| **Guided** | 4-8 week structured path | Weekly goals, progress checks |
| **Intensive** | Accelerated, daily commitment | Daily targets, strict deadlines |

### Sample Study Plan: C++ Foundations (8 weeks)

| Week | Focus | Hours/Week | Deliverables |
|------|-------|------------|--------------|
| 1 | Syntax & Variables | 4-6 | 2 quizzes, 3 labs |
| 2 | Control Flow | 4-6 | 2 quizzes, 3 labs |
| 3 | Functions | 5-7 | 2 quizzes, 3 labs, mini-project |
| 4 | Arrays & Strings | 5-7 | 2 quizzes, 4 labs |
| 5 | Pointers | 6-8 | 3 quizzes, 5 labs |
| 6 | OOP Basics | 5-7 | 3 quizzes, 4 labs |
| 7 | OOP Advanced | 5-7 | 2 quizzes, 4 labs |
| 8 | Review & Exam | 6-8 | Practice exam, certification exam |

### Progress Tracking

#### Visual Elements
- **Overall Progress Ring**: Percentage complete
- **Module Progress Bar**: Per-module breakdown
- **Streak Calendar**: GitHub-style contribution graph
- **Skill Radar**: Spider chart of competencies
- **Time Spent**: Weekly/monthly breakdown

#### Notifications
- Course updates
- Assignment deadlines
- Quiz availability
- Certificate readiness
- Mentor session reminders

---

## Mentorship Model

### Mentor Types

| Type | Availability | Scope |
|------|--------------|-------|
| **Course Mentor** | Async (24-48h response) | Q&A, code review, guidance |
| **Career Coach** | 30-min sessions, bookable | Career advice, resume review |
| **Subject Expert** | Live sessions (scheduled) | Deep dives, advanced topics |

### Mentor Qualifications

- Minimum 3 years professional experience
- Track-specific certification (internal or recognized)
- Teaching/mentoring experience preferred
- Background check completed
- Platform onboarding (mentor training)

### Mentor-Student Ratios

| Track Type | Target Ratio | Max Students/Mentor |
|------------|--------------|---------------------|
| Self-paced | 1:100 | 150 |
| Cohort | 1:30 | 40 |
| Intensive | 1:15 | 20 |

### SLAs (Service Level Agreements)

| Interaction | Target | Maximum |
|-------------|--------|---------|
| **Forum Question** | 12 hours | 24 hours |
| **Direct Message** | 24 hours | 48 hours |
| **Code Review** | 48 hours | 72 hours |
| **Assignment Grading** | 5 business days | 7 business days |
| **Mentor Session Booking** | 48h in advance | Same-day (limited) |

---

## Support Channels

### Tiered Support

| Tier | Channel | Response Time | Scope |
|------|---------|---------------|-------|
| **Self-Service** | Help Center, FAQs | Instant | Common questions |
| **Community** | Discord, Forums | Variable | Peer support |
| **Mentor** | In-course Q&A | 24-48h | Course-specific |
| **Support Team** | Email, Chat | 4-24h | Account, technical, billing |
| **Escalation** | Phone (scheduled) | 48h | Complex issues |

### Help Center Structure

```
Help Center
├── Getting Started
│   ├── Creating an account
│   ├── Enrolling in courses
│   └── Platform tour
├── Learning
│   ├── Navigating courses
│   ├── Using code editor
│   ├── Taking quizzes
│   └── Submitting assignments
├── Certifications
│   ├── Exam preparation
│   ├── Taking proctored exams
│   ├── Viewing certificates
│   └── Sharing credentials
├── Account & Billing
│   ├── Subscription management
│   ├── Payment methods
│   ├── Refund policy
│   └── Account security
└── Troubleshooting
    ├── Video playback issues
    ├── Code editor problems
    ├── Login issues
    └── Mobile app help
```

---

## Discussion Forums

### Structure

```
Forums
├── General
│   ├── Introductions
│   ├── Study Groups
│   └── Off-Topic
├── By Track
│   ├── C++ Discussions
│   ├── Python Discussions
│   ├── Web Dev Discussions
│   └── [Other tracks]
├── Career
│   ├── Job Hunting
│   ├── Interview Prep
│   └── Resume Review
└── Feedback
    ├── Feature Requests
    └── Bug Reports
```

### Moderation

- Community guidelines enforced
- Volunteer moderators (advanced students)
- Staff moderators for escalations
- Automated spam/toxicity detection
- Report button on all posts

### Gamification

- **Reputation Points**: Earned by helping others
- **Badges**: Top Contributor, First Answer, etc.
- **Leaderboards**: Weekly/monthly top helpers
- **Perks**: Priority support, beta access

---

## Code Review Process

### Submission Flow

```
Student submits code
        │
        ▼
┌───────────────────┐
│  Auto-Checks      │
│  - Linting        │
│  - Tests          │
│  - Plagiarism     │
└───────────────────┘
        │
        ▼
┌───────────────────┐
│  Mentor Queue     │
│  (if manual       │
│   review needed)  │
└───────────────────┘
        │
        ▼
┌───────────────────┐
│  Review Completed │
│  - Score          │
│  - Comments       │
│  - Suggestions    │
└───────────────────┘
        │
        ▼
   Student notified
```

### Review Criteria

| Aspect | Weight | Evaluated |
|--------|--------|-----------|
| **Correctness** | 40% | Tests pass, expected output |
| **Code Quality** | 25% | Readability, naming, structure |
| **Efficiency** | 20% | Time/space complexity |
| **Best Practices** | 15% | Idiomatic code, patterns |

### Feedback Format

```markdown
## Code Review: Linked List Implementation

### Score: 85/100

### ✅ Strengths
- Clear variable naming
- Good use of edge case handling
- Efficient reversal algorithm

### 🔧 Improvements Needed
- Add comments explaining the logic (line 15-20)
- Consider using `nullptr` instead of `NULL` (C++11+)
- Memory leak on line 32 — missing delete

### 📚 Resources
- [Smart Pointers in C++](link)
- [Code Review Best Practices](link)

### 💬 Overall
Great work on the core logic! Focus on memory management
and you'll be ready for the next module.
```

---

## Academic Policies

### Attendance (Cohort Courses)

- **Synchronous Sessions**: 80% attendance required
- **Makeup Policy**: Recording available within 48h
- **Excused Absences**: Notify 24h in advance

### Assignment Deadlines

| Assignment Type | Late Penalty | Maximum Extension |
|-----------------|--------------|-------------------|
| Quizzes | 10% per day | 3 days |
| Labs | 5% per day | 7 days |
| Projects | 10% per day | 7 days |
| Exams | No late submissions | Reschedule with approval |

### Academic Integrity

#### Prohibited
- Copying code from others (without attribution)
- Using AI to complete assignments dishonestly
- Sharing exam questions/answers
- Plagiarism of any kind
- Impersonation during proctored exams

#### Allowed
- Using AI as a learning tool (with disclosure)
- Collaborating with attribution
- Using documentation and resources
- Peer discussion (not copying)

#### Violations & Consequences

| Severity | Examples | Consequence |
|----------|----------|-------------|
| **Minor** | Unattributed code snippet | Warning, redo assignment |
| **Moderate** | Significant plagiarism | Zero on assignment, probation |
| **Severe** | Exam cheating, impersonation | Course failure, suspension |
| **Repeat** | Multiple offenses | Account termination |

### Appeals Process

1. Student receives violation notice
2. 7 days to submit written appeal
3. Review committee evaluates
4. Decision within 14 days
5. Final appeal to Director (if needed)

---

## Platform Features (LMS Requirements)

### Core Features

| Feature | Priority | Description |
|---------|----------|-------------|
| Course Catalog | P0 | Browse, search, filter courses |
| Enrollment | P0 | Enroll, unenroll, track status |
| Content Delivery | P0 | Video, text, code, quizzes |
| Progress Tracking | P0 | Per-lesson, module, course |
| Assessment | P0 | Quizzes, exams, auto-grading |
| Certificates | P0 | Generation, verification |
| User Profiles | P0 | Settings, progress, history |
| Search | P1 | Global search across content |
| Discussion | P1 | Forums, Q&A per lesson |
| Notifications | P1 | Email, in-app alerts |
| Code Editor | P1 | Browser-based IDE |
| Mobile App | P2 | iOS, Android (React Native) |
| Offline Mode | P2 | Download for offline learning |
| Live Sessions | P2 | Zoom/Meet integration |
| Analytics | P1 | Student and admin dashboards |
| Plagiarism Check | P1 | Code similarity detection |
| Proctoring | P1 | Exam monitoring |

### Coding Environment Options

| Option | Pros | Cons |
|--------|------|------|
| **Monaco (in-browser)** | VS Code experience, fast | Limited language support |
| **CodeSandbox** | Full environment | External dependency |
| **Replit Embed** | Multi-language, collaboration | Cost, dependency |
| **Self-hosted (Docker)** | Full control, all languages | Infrastructure cost |
| **Judge0** | Open-source, many languages | Self-hosting required |

**Recommendation**: Self-hosted Judge0 + Monaco editor for optimal control and experience.

### Integrations

| Integration | Purpose |
|-------------|---------|
| **GitHub/GitLab** | Code submission, portfolio |
| **Zoom/Meet** | Live sessions |
| **Slack/Discord** | Community |
| **Calendar** (Google, Apple) | Session scheduling |
| **LinkedIn** | Badge sharing |
| **Stripe/PayPal** | Payments |
| **SendGrid/Mailgun** | Transactional email |
| **Proctoring** (Proctorio, etc.) | Exam monitoring |

---

## Quality Assurance

### Curriculum Review Cadence

| Review Type | Frequency | Responsible |
|-------------|-----------|-------------|
| Content Accuracy | Per-update | Author + reviewer |
| Technical Currency | Quarterly | Subject experts |
| Pedagogy | Semi-annually | Instructional designers |
| Full Audit | Annually | External reviewers |

### Instructor Qualifications

| Requirement | Minimum |
|-------------|---------|
| Professional Experience | 5+ years |
| Teaching Experience | 2+ years or certification |
| Subject Certification | Industry-recognized or internal |
| Platform Training | Mandatory onboarding |
| Background Check | Required |
| Student Rating | Maintain 4.0+ stars |

### Feedback Loops

```
Student Feedback
     │
     ├── End-of-lesson survey (optional)
     ├── End-of-module feedback
     ├── End-of-course review
     └── NPS survey (quarterly)
     
     │
     ▼
Aggregation & Analysis
     │
     ▼
Action Items → Curriculum Team
     │
     ▼
Improvements Deployed
```

---

## Inclusivity Guidelines

### Language

- Use gender-neutral pronouns
- Avoid jargon; explain when necessary
- Simple, clear sentences (accessible to non-native speakers)
- Provide glossary for technical terms

### Visuals

- Diverse representation in illustrations/photos
- High contrast, colorblind-friendly palettes
- Alt text for all images
- Captions/transcripts for all videos

### Pacing

- Multiple speed options for videos (0.5x - 2x)
- Estimated time per lesson
- Clear prerequisites stated
- Self-assessment checkpoints

### Time Zones

- All times shown in user's local time
- Session recordings available within 24h
- Asynchronous participation options
- Global office hours coverage

### Accommodations

| Accommodation | Implementation |
|---------------|----------------|
| Extended exam time | 1.5x - 2x standard |
| Screen reader support | ARIA labels, keyboard nav |
| Reduced motion | Respect OS preference |
| Large text | Font scaling support |
| Dyslexia-friendly | Font choice option |
| Sign language | Available for live sessions (request) |

---

## Data Privacy & Security

### Data Collected

| Data Type | Purpose | Retention |
|-----------|---------|-----------|
| Account info | Authentication, personalization | Account lifetime |
| Learning progress | Tracking, recommendations | Account lifetime |
| Submissions | Grading, plagiarism detection | 5 years |
| Proctoring data | Exam integrity | 1 year |
| Payment info | Billing (via Stripe) | Per PCI requirements |
| Analytics | Product improvement | Anonymized after 2 years |

### User Rights (GDPR)

- **Access**: Download all personal data
- **Rectification**: Update incorrect data
- **Erasure**: Request deletion (30-day processing)
- **Portability**: Export data in JSON/CSV
- **Objection**: Opt out of analytics, marketing

### Security Measures

- Encryption at rest and in transit
- SOC 2 Type II compliance (target)
- Regular security audits
- Bug bounty program
- Incident response plan

---

## Escalation Paths

```
Student Issue
     │
     ├── Self-Service (Help Center)
     │
     ├── Community (Forums, Discord)
     │
     ├── Mentor (Course-specific)
     │
     ├── Support Team (Email, Chat)
     │        └── Tier 1 → Tier 2 → Tier 3
     │
     └── Escalation Manager
              └── Director
```

### Escalation Criteria

| Issue Type | Escalate When |
|------------|---------------|
| Technical | Unresolved after 48h |
| Billing | Dispute > $100 |
| Academic | Integrity violation |
| Harassment | Any report |
| Legal | DMCA, legal requests |
