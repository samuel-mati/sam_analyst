import './globals.css';
import { Space_Grotesk } from 'next/font/google';
import { ThemeProvider } from '@/context/ThemeContext';
import type { Metadata } from 'next';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Sam_Analyst | Data Analyst & AI',
  description: 'Data Analyst and ML Engineer specializing in transforming raw data into actionable insights through advanced analytics, visualization, and machine learning.',
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
    <html lang="en" suppressHydrationWarning className={spaceGrotesk.className}>
      <body className={`${spaceGrotesk.className} font-space antialiased bg-white dark:bg-black text-black dark:text-white`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
