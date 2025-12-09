import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PlusTec - Computer Institute',
  description:
    'Master programming and earn industry-recognized certifications. From beginner to professional, we guide your tech journey.',
  keywords: [
    'computer training',
    'programming courses',
    'C++',
    'O-Level',
    'certification',
    'coding bootcamp',
    'software development',
  ],
  authors: [{ name: 'PlusTec Institute' }],
  openGraph: {
    title: 'PlusTec - Computer Institute',
    description:
      'Master programming and earn industry-recognized certifications.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
