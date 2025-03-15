import Projects from '@/components/Projects';
import PageLayout from '@/components/PageLayout';
import PageHeader from '@/components/PageHeader';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Projects | Hermira Insights',
  description: 'Explore our portfolio of successful data analytics and AI projects that have transformed businesses.',
};

export default function ProjectsPage() {
  return (
    <PageLayout>
      <PageHeader title="Our Projects" />
      <Projects />
    </PageLayout>
  );
} 