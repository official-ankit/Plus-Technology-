'use client';

import { useEffect, useState } from 'react';
import { X, Rocket, Calendar, Sparkles, PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Launch date: January 1, 2026, 00:00:00
  const launchDate = new Date('2026-01-01T00:00:00').getTime();

  useEffect(() => {
    // Show popup after a short delay for better UX on every page load
    setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    // Update countdown every second
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleNotifyMe = () => {
    handleClose();
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Popup */}
      <div className="fixed left-1/2 top-1/2 z-50 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 animate-in zoom-in-95 duration-300">
        <div className="relative max-h-[85vh] overflow-hidden rounded-xl bg-gradient-to-br from-primary via-primary/95 to-secondary shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
          
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute right-3 top-3 z-10 rounded-full bg-white/20 p-1.5 text-white transition-all hover:bg-white/30 hover:rotate-90 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Close"
          >
            <X className="h-4 w-4 md:h-5 md:w-5" />
          </button>

          {/* Content */}
          <div className="relative px-4 py-6 text-center text-white md:px-6 md:py-8">
              {/* Icon Header */}
              <div className="mb-4 flex justify-center gap-2">
                <Rocket className="h-6 w-6 text-white animate-bounce md:h-8 md:w-8" />
                <Sparkles className="h-6 w-6 text-white/90 animate-pulse md:h-8 md:w-8" />
                <PartyPopper className="h-6 w-6 text-white animate-bounce md:h-8 md:w-8" />
              </div>

              {/* Main Heading */}
              <h2 className="mb-2 text-2xl font-bold md:text-3xl">
                We're Launching Soon!
              </h2>
              <p className="mb-6 text-sm text-white/90 md:text-base">
                🎊 Join us on <span className="font-bold">January 1st, 2026</span> 🎊
              </p>

              {/* Countdown Timer */}
              <div className="mb-6 grid grid-cols-4 gap-2 md:gap-3">
                {/* Days */}
                <div className="group overflow-hidden rounded-lg bg-white/10 p-2.5 backdrop-blur transition-all hover:bg-white/20 md:p-3">
                  <div className="text-2xl font-bold text-white md:text-3xl">
                    {String(timeLeft.days).padStart(2, '0')}
                  </div>
                  <div className="text-xs font-medium text-white/80 md:text-sm">DAYS</div>
                </div>

                {/* Hours */}
                <div className="group overflow-hidden rounded-lg bg-white/10 p-2.5 backdrop-blur transition-all hover:bg-white/20 md:p-3">
                  <div className="text-2xl font-bold text-white md:text-3xl">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </div>
                  <div className="text-xs font-medium text-white/80 md:text-sm">HOURS</div>
                </div>

                {/* Minutes */}
                <div className="group overflow-hidden rounded-lg bg-white/10 p-2.5 backdrop-blur transition-all hover:bg-white/20 md:p-3">
                  <div className="text-2xl font-bold text-white md:text-3xl">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </div>
                  <div className="text-xs font-medium text-white/80 md:text-sm">MINS</div>
                </div>

                {/* Seconds */}
                <div className="group overflow-hidden rounded-lg bg-white/10 p-2.5 backdrop-blur transition-all hover:bg-white/20 md:p-3">
                  <div className="text-2xl font-bold text-white md:text-3xl">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </div>
                  <div className="text-xs font-medium text-white/80 md:text-sm">SECS</div>
                </div>
              </div>

              {/* Offer Badge */}
              <div className="mb-4 inline-block rounded-full bg-white px-4 py-1.5 text-xs font-bold text-primary shadow-lg md:px-6 md:py-2 md:text-sm">
                🎁 Special Launch Offers Inside! 🎁
              </div>

              {/* Description */}
              <div className="mx-auto mb-6 max-w-xs rounded-lg bg-white/10 p-2.5 backdrop-blur">
                <p className="text-xs leading-relaxed text-white/95 md:text-sm">
                  Be the first to experience our <span className="font-semibold">premium courses</span> and enjoy exclusive launch discounts!
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
                <Button
                  size="sm"
                  variant="secondary"
                  className="bg-white text-xs text-primary shadow-lg hover:bg-white/90 md:text-sm"
                  asChild
                  onClick={handleNotifyMe}
                >
                  <Link href="/courses">
                    <Calendar className="mr-2 h-4 w-4" />
                    Explore Courses
                  </Link>
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="border border-white/30 text-xs text-white hover:bg-white/10 md:text-sm"
                  asChild
                  onClick={handleNotifyMe}
                >
                  <Link href="/contact">
                    Notify Me
                  </Link>
                </Button>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
