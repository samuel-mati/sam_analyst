import Team from '@/components/Team';
import PageLayout from '@/components/PageLayout';
import PageHeaderNew from '@/components/PageHeaderNew';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | Hermira Insights',
  description: 'Meet the leadership team at Hermira Insights - experts in data analytics, AI, and business intelligence.',
};

export default function TeamPage() {
  return (
    <PageLayout>
      <PageHeaderNew title="Our Team" />
      <Team />
    </PageLayout>
  );
} 