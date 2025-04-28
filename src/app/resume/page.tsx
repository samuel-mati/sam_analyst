import Resume from '@/components/Resume';
import PageLayout from '@/components/PageLayout';
import PageHeaderNew from '@/components/PageHeaderNew';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume | Sam_Analyst',
  description: 'Professional resume showcasing my experience in data analysis, machine learning, and data visualization.',
};

export default function ResumePage() {
  return (
    <PageLayout>
      <PageHeaderNew title="Resume" />
      <Resume />
    </PageLayout>
  );
} 