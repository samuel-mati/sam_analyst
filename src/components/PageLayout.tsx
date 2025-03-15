'use client';

import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {children}
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default PageLayout; 