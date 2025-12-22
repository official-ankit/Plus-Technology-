import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { fullName, email, phone, education, courseName, coursePrice } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !education || !courseName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create a transporter using SMTP (Gmail example)
    // For production, use environment variables for credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER, // Your email
        pass: process.env.SMTP_PASSWORD, // Your email password or app password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'ankit@codemaya.com',
      subject: `New Course Enrollment: ${courseName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #0f766e; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
            .content { background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #0f766e; }
            .value { margin-left: 10px; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
            .highlight { background-color: #fef3c7; padding: 15px; border-left: 4px solid #f59e0b; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎓 New Course Enrollment Request</h1>
            </div>
            <div class="content">
              <p>Hello,</p>
              <p>A new student has shown interest in enrolling for a course. Here are the details:</p>
              
              <div class="highlight">
                <div class="field">
                  <span class="label">📚 Course Name:</span>
                  <span class="value">${courseName}</span>
                </div>
                <div class="field">
                  <span class="label">💰 Course Price:</span>
                  <span class="value">₹${coursePrice ? coursePrice.toLocaleString() : 'N/A'}</span>
                </div>
              </div>

              <h3 style="color: #0f766e; margin-top: 25px;">Student Details:</h3>
              
              <div class="field">
                <span class="label">👤 Full Name:</span>
                <span class="value">${fullName}</span>
              </div>
              
              <div class="field">
                <span class="label">📧 Email:</span>
                <span class="value"><a href="mailto:${email}">${email}</a></span>
              </div>
              
              <div class="field">
                <span class="label">📱 Phone:</span>
                <span class="value">${phone}</span>
              </div>
              
              <div class="field">
                <span class="label">🎓 Education Level:</span>
                <span class="value">${education}</span>
              </div>

              <div class="field" style="margin-top: 20px;">
                <span class="label">🕐 Submission Time:</span>
                <span class="value">${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</span>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from Plus Technology Courses enrollment system.</p>
              <p>&copy; ${new Date().getFullYear()} Plus Technology. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
New Course Enrollment Request

Course: ${courseName}
Price: ₹${coursePrice ? coursePrice.toLocaleString() : 'N/A'}

Student Details:
- Full Name: ${fullName}
- Email: ${email}
- Phone: ${phone}
- Education Level: ${education}
- Submission Time: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Enrollment request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send enrollment request' },
      { status: 500 }
    );
  }
}
