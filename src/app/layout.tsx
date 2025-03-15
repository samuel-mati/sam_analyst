import './globals.css';
import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import type { Metadata } from 'next';

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'Hermira Insights | Data Analytics & Business Intelligence',
  description: 'Transforming business data into actionable insights with AI-powered analytics.',
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={spaceGrotesk.variable}>
      <body className={`${spaceGrotesk.variable} font-space antialiased bg-white dark:bg-black text-black dark:text-white`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
