'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface PageHeaderProps {
  title: string;
}

const PageHeaderNew = ({ title }: PageHeaderProps) => {
  const pathname = usePathname();
  
  // Generate breadcrumb items
  const generateBreadcrumbs = () => {
    // Remove leading slash and split by slashes
    const pathParts = pathname.split('/').filter(Boolean);
    
    // Create array of breadcrumb items
    const breadcrumbs = [
      { 
        label: 'Home',
        path: '/' 
      },
      ...pathParts.map((part, index) => {
        // Create the path up to this part
        const path = `/${pathParts.slice(0, index + 1).join('/')}`;
        
        // Special case for "solutions" path
        if (part === 'solutions') {
          return { label: 'Products', path };
        }
        
        // Format label (capitalize first letter and replace hyphens with spaces)
        const label = part
          .replace(/-/g, ' ')
          .replace(/^\w/, c => c.toUpperCase());
          
        return { label, path };
      })
    ];
    
    return breadcrumbs;
  };
  
  const breadcrumbs = generateBreadcrumbs();
  
  return (
    <div className="bg-gradient-to-r from-teal-green to-deep-purple dark:from-deep-purple/80 dark:to-teal-green/80 pt-28 pb-16 mb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-4">
        <div className="py-5 text-center">
          <motion.h1 
            className="text-white text-4xl md:text-5xl font-bold mb-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          
          <motion.hr 
            className="bg-white mx-auto mt-4 mb-6 border-0 h-1 rounded-full"
            style={{ width: '90px' }}
            initial={{ width: 0 }}
            animate={{ width: '90px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />
          
          <nav aria-label="breadcrumb">
            <ol className="flex justify-center items-center space-x-2">
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={breadcrumb.path} className="flex items-center text-white/90">
                  {index > 0 && (
                    <span className="mx-2">/</span>
                  )}
                  
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-white font-medium" aria-current="page">
                      {breadcrumb.label}
                    </span>
                  ) : (
                    <Link 
                      href={breadcrumb.path}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {breadcrumb.label}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default PageHeaderNew; 