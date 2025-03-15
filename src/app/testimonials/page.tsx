import Testimonials from '@/components/Testimonials';
import PageLayout from '@/components/PageLayout';
import PageHeader from '@/components/PageHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Client Testimonials | Hermira Insights',
  description: 'Read what our clients have to say about our data analytics solutions and AI-powered business intelligence services.',
};

export default function TestimonialsPage() {
  return (
    <PageLayout>
      <PageHeader title="Testimonials" />
      <Testimonials />
    </PageLayout>
  );
} 