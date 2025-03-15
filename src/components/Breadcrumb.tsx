'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const Breadcrumb = () => {
  const pathname = usePathname();
  
  // Skip breadcrumb on homepage
  if (pathname === '/') return null;
  
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
    <div className="bg-gradient-to-r from-teal-green to-deep-purple py-4 md:py-5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="flex items-center flex-wrap">
            {breadcrumbs.map((breadcrumb, index) => (
              <li key={breadcrumb.path} className="flex items-center">
                {index > 0 && (
                  <ChevronRightIcon className="h-4 w-4 mx-2 text-white/70" aria-hidden="true" />
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
  );
};

export default Breadcrumb; 