import Services from '@/components/Skills';
import PageLayout from '@/components/PageLayout';
import PageHeader from '@/components/PageHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services | Hermira Insights',
  description: 'Explore our range of data analytics, AI, and business intelligence services tailored to help your business grow.',
};

export default function ServicesPage() {
  return (
    <PageLayout>
      <PageHeader title="Our Services" />
      <Services />
    </PageLayout>
  );
} 