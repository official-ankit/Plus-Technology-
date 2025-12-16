'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  CheckCircle, 
  CreditCard,
  Shield,
  ArrowRight 
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface EnrollFormProps {
  courseName: string;
  coursePrice: number;
  originalPrice?: number;
  trigger?: React.ReactNode;
}

export function EnrollForm({ courseName, coursePrice, originalPrice, trigger }: EnrollFormProps) {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    education: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const handlePrevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    setStep(4); // Success step
  };

  const resetForm = () => {
    setStep(1);
    setFormData({ fullName: '', email: '', phone: '', education: '' });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button size="lg" className="w-full">
            Enroll Now
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            Enroll in Course
          </DialogTitle>
          <DialogDescription>
            {courseName}
          </DialogDescription>
        </DialogHeader>

        {/* Progress Steps */}
        {step < 4 && (
          <div className="flex items-center justify-center gap-2 py-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                    step >= s
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {step > s ? <CheckCircle className="h-4 w-4" /> : s}
                </div>
                {s < 3 && (
                  <div
                    className={`mx-2 h-1 w-8 rounded ${
                      step > s ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <div className="space-y-4">
              <h3 className="font-semibold">Personal Information</h3>
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    className="pl-10"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="pl-10"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="education">Education Level</Label>
                <select
                  id="education"
                  name="education"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring"
                  value={formData.education}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select your education level</option>
                  <option value="10th">10th Pass</option>
                  <option value="12th">12th Pass</option>
                  <option value="graduate">Graduate</option>
                  <option value="postgraduate">Post Graduate</option>
                  <option value="working">Working Professional</option>
                </select>
              </div>
              <Button type="button" className="w-full" onClick={handleNextStep}>
                Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          )}

          {/* Step 2: Course Summary */}
          {step === 2 && (
            <div className="space-y-4">
              <h3 className="font-semibold">Course Summary</h3>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <GraduationCap className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold">{courseName}</h4>
                      <p className="text-sm text-muted-foreground">
                        Full course access with certificate
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 border-t pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Course Price</span>
                      {originalPrice && originalPrice > coursePrice ? (
                        <div className="text-right">
                          <span className="text-sm text-muted-foreground line-through">
                            ₹{originalPrice.toLocaleString()}
                          </span>
                          <span className="ml-2 font-semibold">
                            ₹{coursePrice.toLocaleString()}
                          </span>
                        </div>
                      ) : (
                        <span className="font-semibold">₹{coursePrice.toLocaleString()}</span>
                      )}
                    </div>
                    <div className="mt-2 flex items-center justify-between border-t pt-2">
                      <span className="font-semibold">Total</span>
                      <span className="text-xl font-bold text-primary">
                        ₹{coursePrice.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="flex items-center gap-2 rounded-lg bg-primary/5 p-3 text-sm">
                <Shield className="h-4 w-4 text-primary" />
                <span>30-day money-back guarantee</span>
              </div>
              <div className="flex gap-3">
                <Button type="button" variant="outline" className="flex-1" onClick={handlePrevStep}>
                  Back
                </Button>
                <Button type="button" className="flex-1" onClick={handleNextStep}>
                  Proceed to Payment
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          )}

          {/* Step 3: Payment */}
          {step === 3 && (
            <div className="space-y-4">
              <h3 className="font-semibold">Payment Details</h3>
              <div className="space-y-2">
                <Label htmlFor="cardName">Name on Card</Label>
                <Input
                  id="cardName"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="cardNumber"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    className="pl-10"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    type="text"
                    placeholder="MM/YY"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    type="text"
                    placeholder="123"
                    required
                  />
                </div>
              </div>
              <div className="rounded-lg bg-muted p-3 text-center text-sm">
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  Secure payment powered by SSL encryption
                </div>
              </div>
              <div className="flex gap-3">
                <Button type="button" variant="outline" className="flex-1" onClick={handlePrevStep}>
                  Back
                </Button>
                <Button type="submit" className="flex-1" disabled={isLoading}>
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                      Processing...
                    </span>
                  ) : (
                    <>
                      Pay ₹{coursePrice.toLocaleString()}
                    </>
                  )}
                </Button>
              </div>
            </div>
          )}

          {/* Step 4: Success */}
          {step === 4 && (
            <div className="py-6 text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Enrollment Successful!</h3>
              <p className="mb-6 text-muted-foreground">
                Welcome to {courseName}! You can now start learning.
              </p>
              <div className="space-y-3">
                <Button className="w-full" onClick={resetForm}>
                  Start Learning
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="w-full" onClick={resetForm}>
                  Back to Course
                </Button>
              </div>
            </div>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
}
