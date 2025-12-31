'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface AnimatedGradientBackgroundProps {
  className?: string;
  variant?: 'hero' | 'subtle' | 'glow' | 'meta';
}

export function AnimatedGradientBackground({ 
  className,
  variant = 'hero'
}: AnimatedGradientBackgroundProps) {
  // Meta-inspired modern gradient - clean, professional with soft movement
  if (variant === 'meta') {
    return (
      <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
        {/* Main gradient mesh - soft blue to teal */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-background to-teal-50/60" />
        
        {/* Animated orb 1 - Top left blue */}
        <motion.div
          className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        
        {/* Animated orb 2 - Top right purple/pink */}
        <motion.div
          className="absolute -top-20 right-0 h-[600px] w-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, rgba(236, 72, 153, 0.06) 40%, transparent 70%)',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.95, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        
        {/* Animated orb 3 - Bottom center teal */}
        <motion.div
          className="absolute -bottom-40 left-1/3 h-[700px] w-[700px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, rgba(16, 94, 105, 0.05) 40%, transparent 70%)',
          }}
          animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        
        {/* Subtle mesh overlay for depth */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 1px, transparent 1px),
                             radial-gradient(circle at 75% 75%, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Light grain texture for premium feel */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>
    );
  }

  if (variant === 'hero') {
    return (
      <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
        {/* Base gradient layer */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] via-transparent to-primary/[0.03]" />
        
        {/* Primary gradient blob */}
        <motion.div
          className="absolute -top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-br from-primary/10 via-primary/5 to-transparent blur-3xl"
          animate={{
            x: ['-50%', '-45%', '-55%', '-50%'],
            y: ['0%', '5%', '-5%', '0%'],
            scale: [1, 1.05, 0.95, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        
        {/* Secondary gradient blob */}
        <motion.div
          className="absolute -bottom-1/4 right-0 h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-primary/15 via-primary/5 to-transparent blur-3xl"
          animate={{
            x: ['0%', '10%', '-10%', '0%'],
            y: ['0%', '-10%', '10%', '0%'],
            scale: [1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        
        {/* Accent gradient */}
        <motion.div
          className="absolute top-1/4 left-0 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-primary/5 to-transparent blur-3xl"
          animate={{
            x: ['0%', '20%', '0%'],
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />

        {/* Grid pattern overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                             linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
    );
  }

  if (variant === 'subtle') {
    return (
      <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
        <motion.div
          className="absolute top-0 left-1/4 h-[300px] w-[300px] rounded-full bg-primary/5 blur-3xl"
          animate={{
            y: ['0%', '20%', '0%'],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 h-[250px] w-[250px] rounded-full bg-primary/5 blur-3xl"
          animate={{
            y: ['0%', '-20%', '0%'],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      </div>
    );
  }

  if (variant === 'glow') {
    return (
      <div className={cn("absolute inset-0 -z-10 overflow-hidden", className)}>
        <motion.div
          className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background: 'radial-gradient(circle, hsl(var(--primary) / 0.1) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        />
      </div>
    );
  }

  return null;
}

// ============================================
// Noise Texture Overlay
// ============================================

export function NoiseOverlay({ className }: { className?: string }) {
  return (
    <div 
      className={cn(
        "pointer-events-none absolute inset-0 -z-10 opacity-[0.02]",
        className
      )}
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />
  );
}

// ============================================
// Floating Particles
// ============================================

interface FloatingParticlesProps {
  count?: number;
  className?: string;
}

export function FloatingParticles({ count = 20, className }: FloatingParticlesProps) {
  return (
    <div className={cn("absolute inset-0 -z-10 overflow-hidden pointer-events-none", className)}>
      {Array.from({ length: count }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-1 w-1 rounded-full bg-primary/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

// ============================================
// Gradient Line
// ============================================

export function GradientLine({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn(
        "h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent",
        className
      )}
      initial={{ scaleX: 0, opacity: 0 }}
      whileInView={{ scaleX: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
    />
  );
}
