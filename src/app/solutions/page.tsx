import PageLayout from '@/components/PageLayout';
import PageHeaderNew from '@/components/PageHeaderNew';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Products | Hermira Insights',
  description: 'Discover our comprehensive data analytics and AI products designed to meet the unique needs of your business.',
};

export default function ProductsPage() {
  return (
    <PageLayout>
      <PageHeaderNew title="Our Products" />
      <div className="w-[75%] mx-auto px-4 sm:px-6 py-12">
        <p className="text-gray-600 mb-8">
          At Hermira Insights, we offer tailored data analytics and AI products to help your business thrive in the digital age.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-cool-blue mb-4">Enterprise Analytics</h2>
            <p className="text-gray-600">
              Comprehensive analytics platform for large enterprises, featuring custom dashboards, 
              predictive models, and data integration from multiple sources.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-cool-blue mb-4">SMB Intelligence</h2>
            <p className="text-gray-600">
              Right-sized analytics tools for small and medium businesses, offering affordable 
              insights without the enterprise-level complexity.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-cool-blue mb-4">Healthcare Analytics</h2>
            <p className="text-gray-600">
              Specialized products for healthcare providers and organizations, with HIPAA-compliant 
              data handling and patient outcome prediction models.
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold text-cool-blue mb-4">Retail Intelligence</h2>
            <p className="text-gray-600">
              Customer behavior analysis, inventory optimization, and demand forecasting 
              tools designed specifically for retail businesses.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
} 