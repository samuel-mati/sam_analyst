import Contact from '@/components/Contact';
import PageLayout from '@/components/PageLayout';
import PageHeaderNew from '@/components/PageHeaderNew';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Me | Sam_Analyst',
  description: 'Get in touch with me for data analytics solutions, AI insights, and business intelligence services.',
};

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHeaderNew title="Contact Me" />
      <Contact />
    </PageLayout>
  );
} 