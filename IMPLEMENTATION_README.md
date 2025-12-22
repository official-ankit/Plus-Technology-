# Dynamic Course Pages with Email Enrollment

## Overview

This implementation provides:
1. **Dynamic Course Pages** - Each course now has its own fully dynamic page with complete details
2. **Email Popup for Enrollment** - No payment gateway, just collects user details
3. **Email Notifications** - Sends enrollment requests to ankit@codemaya.com

## Features Implemented

### 1. Centralized Course Data (`src/lib/courses-data.ts`)
- All course data is now managed in a single, reusable file
- Supports both detailed course information and list views
- Easy to add, update, or remove courses
- Currently includes courses: basic-computer, python, cpp (with full details for demo)

### 2. Dynamic Course Detail Pages (`src/app/courses/[id]/page.tsx`)
- Pages are now fully dynamic based on the course ID in the URL
- Shows "Course Not Found" message for invalid course IDs
- Displays all course sections: Overview, Curriculum, Instructor, Reviews
- Fully responsive and complete (not just upper section)

### 3. Updated Enrollment Form (`src/components/forms/enroll-form.tsx`)
- **REMOVED**: Payment step (Step 3 with credit card fields)
- **ADDED**: Email submission functionality
- 2-step process:
  - Step 1: Personal Information (Name, Email, Phone, Education)
  - Step 2: Course Summary & Confirmation
  - Step 3: Success Message
- Shows error messages if email fails to send
- Clear user feedback throughout the process

### 4. Email API Endpoint (`src/app/api/send-enrollment-email/route.ts`)
- Sends beautifully formatted HTML emails
- Includes all user details and course information
- Uses nodemailer with SMTP
- Sends to: ankit@codemaya.com

## Setup Instructions

### Step 1: Install Dependencies (Already Done)
```bash
npm install nodemailer
npm install -D @types/nodemailer
```

### Step 2: Configure Email Settings

Create a `.env.local` file in the root directory with your SMTP credentials:

```env
# For Gmail (Recommended for testing)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Other environment variables
DATABASE_URL="postgresql://user:password@localhost:5432/database"
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
```

### Step 3: Gmail Setup (If using Gmail)

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security**
3. Enable **2-Step Verification**
4. Go to **App passwords**
5. Generate a new app password for "Mail"
6. Use this app password in `SMTP_PASSWORD` (not your regular Gmail password)

### Alternative Free SMTP Services:

#### Option 1: Gmail (Recommended)
- Free tier: 500 emails/day
- Setup: Use App Password as described above

#### Option 2: SendGrid
- Free tier: 100 emails/day
- Setup: https://sendgrid.com/
```env
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
```

#### Option 3: Mailgun
- Free tier: 100 emails/day
- Setup: https://www.mailgun.com/
```env
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=your-mailgun-smtp-username
SMTP_PASSWORD=your-mailgun-smtp-password
```

#### Option 4: Brevo (formerly Sendinblue)
- Free tier: 300 emails/day
- Setup: https://www.brevo.com/
```env
SMTP_HOST=smtp-relay.brevo.com
SMTP_PORT=587
SMTP_USER=your-brevo-login
SMTP_PASSWORD=your-brevo-smtp-key
```

## Testing the Implementation

### 1. Start the Development Server
```bash
npm run dev
```

### 2. Test Course Pages

Navigate to these URLs to test different courses:
- http://localhost:3000/courses/basic-computer
- http://localhost:3000/courses/python
- http://localhost:3000/courses/cpp
- http://localhost:3000/courses/invalid-course (should show "Course Not Found")

### 3. Test Email Enrollment

1. Go to any course page
2. Click the "Enroll Now" button
3. Fill out the form with your details
4. Submit the form
5. Check ankit@codemaya.com inbox for the enrollment email

### 4. Verify Email Content

The email should include:
- Course name and price
- Student's name, email, phone, and education level
- Submission timestamp
- Formatted HTML layout

## File Structure

```
src/
├── lib/
│   └── courses-data.ts          # Centralized course data
├── app/
│   ├── api/
│   │   └── send-enrollment-email/
│   │       └── route.ts         # Email API endpoint
│   └── courses/
│       ├── page.tsx             # Course listing page
│       └── [id]/
│           └── page.tsx         # Dynamic course detail page
└── components/
    └── forms/
        └── enroll-form.tsx      # Updated enrollment form
```

## Adding New Courses

To add a new course with full details, edit `src/lib/courses-data.ts`:

```typescript
// Add to coursesData object for full course pages
export const coursesData: Record<string, Course> = {
  'your-course-id': {
    id: 'your-course-id',
    title: 'Your Course Title',
    subtitle: 'Course subtitle',
    // ... full course details
  },
  // ... existing courses
};

// Add to coursesList array for listing page
export const coursesList: CourseCard[] = [
  {
    id: 'your-course-id',
    title: 'Your Course Title',
    // ... card details
  },
  // ... existing courses
];
```

## How It Works

### Course Detail Page Flow:
1. User navigates to `/courses/[id]`
2. Page component extracts the `id` from URL params
3. Fetches course data using `getCourseById(id)` from `courses-data.ts`
4. If course exists, displays full course details
5. If not found, shows "Course Not Found" message

### Enrollment Flow:
1. User clicks "Enroll Now" on any course page
2. Popup dialog opens with enrollment form
3. User fills personal information (Step 1)
4. Reviews course summary (Step 2)
5. Submits form
6. Frontend sends POST request to `/api/send-enrollment-email`
7. Backend validates data and sends email via nodemailer
8. Success message shown to user
9. Admin receives email at ankit@codemaya.com

### Email Template:
The email is sent in both HTML and plain text formats for compatibility. The HTML version includes:
- Professional header with course icon
- Highlighted course information section
- Organized student details
- Timestamp in Indian timezone
- Professional footer

## Troubleshooting

### Email Not Sending?

1. **Check environment variables**
   - Ensure `.env.local` file exists
   - Verify all SMTP credentials are correct

2. **Gmail specific issues**
   - Make sure 2FA is enabled
   - Use App Password, not regular password
   - Check "Less secure app access" is not required anymore with App Passwords

3. **Check console logs**
   - Open browser console (F12)
   - Look for error messages in the Network tab
   - Check terminal for server-side errors

4. **Test SMTP credentials**
   ```bash
   # You can test SMTP connection separately
   # Install: npm install -g nodemailer-test
   ```

### Course Not Loading?

1. **Check course ID**
   - Ensure the ID in URL matches an entry in `coursesData`
   - IDs are case-sensitive

2. **Add course data**
   - If you want a course to have a detail page, add it to `coursesData` in `courses-data.ts`

### Form Not Submitting?

1. **Check network requests**
   - Open browser DevTools → Network tab
   - Submit form and check for POST request to `/api/send-enrollment-email`
   - Look for error responses

2. **Validate form fields**
   - All fields are required
   - Email must be valid format
   - Phone should include country code

## Security Notes

1. **Never commit `.env.local`** - It's already in `.gitignore`
2. **Use App Passwords** - Never use your main email password
3. **Rate Limiting** - Consider adding rate limiting to prevent spam (not implemented yet)
4. **Email Validation** - Basic validation is in place, consider adding more robust checks

## Future Enhancements

Potential improvements you can add:

1. **Database Integration**
   - Store enrollment requests in database
   - Track enrollment history

2. **Email Confirmation**
   - Send confirmation email to student
   - Include course access instructions

3. **Admin Dashboard**
   - View all enrollment requests
   - Manage student communications

4. **Rate Limiting**
   - Prevent form spam
   - Add CAPTCHA verification

5. **Course Management**
   - Admin interface to add/edit courses
   - Connect to database instead of static data

## Support

For issues or questions:
- Check the troubleshooting section above
- Review error logs in browser console and terminal
- Verify environment variables are set correctly
- Test with different courses and form data

---

**Implementation Date**: December 2024
**Status**: ✅ Complete and Ready for Testing
