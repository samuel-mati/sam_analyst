import Blog from '@/components/Blog';
import PageLayout from '@/components/PageLayout';
import PageHeaderNew from '@/components/PageHeaderNew';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | Sam_Analyst',
  description: 'Read my latest articles on data analysis, machine learning, and technology.',
};

export default function BlogPage() {
  return (
    <PageLayout>
      <PageHeaderNew title="My Blog" />
      <Blog />
    </PageLayout>
  );
} 