'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  CheckCircle,
} from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Visit Us',
    details: ['Kailsa Border', 'Manakjuri Road', 'Amroha, Uttar Pradesh 244221'],
  },
  {
    icon: Phone,
    title: 'Call Us',
    details: ['+91 8433100329', '+91 8057591702'],
  },
  {
    icon: Mail,
    title: 'Email Us',
    details: ['info@plustechnology.org', 'admissions@plustechnology.org'],
  },
  {
    icon: Clock,
    title: 'Working Hours',
    details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sunday: 10:00 AM - 2:00 PM'],
  },
];

const faqs = [
  {
    question: 'How do I enroll in a course at Plus Technology Institute?',
    answer: 'You can enroll by visiting our institute during working hours, calling our admission helpline, or filling out the enquiry form on this page. Our counselors will guide you through the admission process.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, all major debit/credit cards, UPI payments, and net banking. We also offer installment plans for diploma courses like DCA, ADCA, and PGDCA.',
  },
  {
    question: 'Do you provide certificates after course completion?',
    answer: 'Yes, all students receive a certificate upon successful completion of their course. Our certificates are recognized and valued by employers across industries.',
  },
  {
    question: 'What is the batch timing and duration?',
    answer: 'We offer flexible batch timings - morning, afternoon, and evening batches. Course duration varies from 1 month to 1 year depending on the program. Our counselors will help you choose the right batch.',
  },
  {
    question: 'Do you provide placement assistance?',
    answer: 'Yes, we provide career guidance and placement support including resume building, interview preparation, and connections with local employers and companies.',
  },
  {
    question: 'Can working professionals join your courses?',
    answer: 'Absolutely! We have weekend and evening batches specifically designed for working professionals. Our flexible timing options allow you to learn without disrupting your work schedule.',
  },
];

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-muted/50 to-background border-b py-16">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-4">
            <MessageSquare className="mr-1 h-3 w-3" />
            Get in Touch
          </Badge>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Contact Plus Technology Institute</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Have questions about our courses or admissions? We&apos;re here to help.
            Visit our institute, call us, or fill out the enquiry form below. Our counselors will guide you in choosing the right course for your career goals.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info) => (
              <Card key={info.title}>
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <CheckCircle className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-2 text-xl font-semibold">Thank You!</h3>
                    <p className="mb-4 text-muted-foreground">
                      Your message has been sent successfully. We&apos;ll get back to you soon.
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="you@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="Course Inquiry" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <textarea
                        id="message"
                        className="min-h-[120px] w-full resize-none rounded-md border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                        placeholder="Tell us how we can help you..."
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                          Sending...
                        </span>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card>
              <CardContent className="p-0">
                <div className="aspect-square w-full bg-muted flex items-center justify-center rounded-lg">
                  <div className="text-center p-8">
                    <MapPin className="mx-auto mb-4 h-12 w-12 text-muted-foreground" />
                    <h3 className="mb-2 font-semibold">Find Us on Map</h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      PlusTech Computer Institute<br />
                      Kailsa Border, Behind Kailsa Railway Station<br />
                      Amroha 244221, Uttar Pradesh
                    </p>
                    <Button variant="outline" asChild>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Open in Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-2xl font-bold md:text-3xl">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Find quick answers to common questions about our courses and services.
            </p>
          </div>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, i) => (
              <Card key={i}>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="mb-4 text-muted-foreground">
              Still have questions?
            </p>
            <Button asChild>
              <Link href="/faq">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
