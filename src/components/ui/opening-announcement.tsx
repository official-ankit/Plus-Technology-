'use client';

import { useEffect, useState } from 'react';
import { X, Sparkles, Gift, GraduationCap, PartyPopper } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function OpeningAnnouncement() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has seen the announcement
    const hasSeenAnnouncement = localStorage.getItem('hasSeenOpeningAnnouncement');
    
    if (!hasSeenAnnouncement) {
      // Show popup after a short delay for better UX
      setTimeout(() => {
        setIsVisible(true);
      }, 1000);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenOpeningAnnouncement', 'true');
  };

  const handleGetStarted = () => {
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
        <div className="relative max-h-[85vh] overflow-hidden rounded-xl bg-gradient-to-br from-primary via-primary/95 to-primary/90 shadow-2xl">
          {/* Decorative elements */}
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

          {/* Header - Fixed */}
          <div className="relative flex items-center justify-between border-b border-white/20 bg-primary/50 px-3 py-2.5 backdrop-blur-sm md:px-4 md:py-3">
            <div className="flex items-center gap-2">
              <PartyPopper className="h-4 w-4 animate-bounce text-white md:h-5 md:w-5" />
              <h3 className="text-xs font-bold text-white md:text-sm">Grand Opening!</h3>
            </div>
            {/* Close Button - Always visible */}
            <button
              onClick={handleClose}
              className="flex-shrink-0 rounded-full bg-white/20 p-1 text-white transition-all hover:bg-white/30 hover:rotate-90 focus:outline-none focus:ring-2 focus:ring-white/50 md:p-1.5"
              aria-label="Close announcement"
              title="Close"
            >
              <X className="h-4 w-4 md:h-4 md:w-4" />
            </button>
          </div>
          
          {/* Body Content - Scrollable */}
          <div className="relative max-h-[calc(85vh-140px)] overflow-y-auto px-3 py-4 text-center text-white md:px-4 md:py-5">
            <div className="space-y-3 md:space-y-4">
              {/* Main Heading */}
              <div className="space-y-1">
                <h2 className="text-xl font-bold md:text-2xl">
                  We're Opening Soon!
                </h2>
                <p className="text-xs text-white/90">
                  🎉 Exclusive Launch Offers 🎉
                </p>
              </div>

              {/* Offers */}
              <div className="mx-auto grid max-w-xs gap-2 grid-cols-2">
                {/* Offer 1 */}
                <div className="rounded-lg bg-white/10 p-2.5 backdrop-blur transition-all hover:bg-white/20">
                  <Gift className="mx-auto mb-1 h-5 w-5 md:h-6 md:w-6" />
                  <div className="text-lg font-bold md:text-xl">₹0</div>
                  <div className="text-xs text-white/90">Admission</div>
                </div>

                {/* Offer 2 */}
                <div className="rounded-lg bg-white/10 p-2.5 backdrop-blur transition-all hover:bg-white/20">
                  <GraduationCap className="mx-auto mb-1 h-5 w-5 md:h-6 md:w-6" />
                  <div className="text-lg font-bold md:text-xl">20% OFF</div>
                  <div className="text-xs text-white/90">All Courses</div>
                </div>
              </div>

              {/* Description */}
              <div className="mx-auto max-w-xs rounded-lg bg-white/10 p-2.5 backdrop-blur">
                <p className="text-xs leading-relaxed text-white/95">
                  Start your IT career with Plus Technology Institute!
                </p>
              </div>
            </div>
          </div>

          {/* Footer - Fixed */}
          <div className="relative border-t border-white/20 bg-white/5 px-3 py-3 text-center backdrop-blur-sm md:px-4">
            {/* CTA Buttons */}
            <div className="flex flex-col gap-2 sm:flex-row sm:justify-center">
              <Button
                size="sm"
                variant="secondary"
                className="bg-white text-xs text-primary shadow-lg hover:bg-white/90 md:text-sm"
                asChild
                onClick={handleGetStarted}
              >
                <Link href="/courses">
                  Explore Courses
                </Link>
              </Button>
              <Button
                size="sm"
                variant="ghost"
                className="border border-white/30 text-xs text-white hover:bg-white/10 md:text-sm"
                asChild
                onClick={handleGetStarted}
              >
                <Link href="/contact">
                  Contact
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
