import PageLayout from '@/components/PageLayout';

export default function PagesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PageLayout>
      {children}
    </PageLayout>
  );
} 