import About from '@/components/About';
import PageLayout from '@/components/PageLayout';
import PageHeader from '@/components/PageHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Hermira Insights',
  description: 'Learn about Hermira Insights - our mission, vision, and how we help businesses leverage data analytics for growth.',
};

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHeader title="About Us" />
      <About />
    </PageLayout>
  );
} 