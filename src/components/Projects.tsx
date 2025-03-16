'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'E-commerce Analytics Dashboard',
    description: 'Comprehensive analytics solution for a leading e-commerce platform, providing real-time insights and predictive analytics.',
    image: '/images/projects/dashboard.jpg',
    category: 'Business Intelligence',
    impact: '30% increase in conversion rate',
  },
  {
    title: 'Supply Chain Optimization',
    description: 'AI-powered supply chain optimization system that reduced operational costs and improved delivery times.',
    image: '/images/projects/supplychain1.jpg',
    category: 'Process Automation',
    impact: '22% reduction in operational costs',
  },
  {
    title: 'Customer Behavior Analysis',
    description: 'Advanced customer segmentation and behavior analysis platform for a retail chain.',
    image: '/images/projects/customer.jpg',
    category: 'Customer Insights',
    impact: '40% improvement in customer retention',
  },
  {
    title: 'Market Research Platform',
    description: 'Automated market research and competitor analysis system using web scraping and AI.',
    image: '/images/projects/ml-forecast.jpg',
    category: 'Web Scraping',
    impact: '60% faster market research process',
  },
  {
    title: 'Financial Forecasting',
    description: 'Machine learning-based financial forecasting system for a financial services company.',
    image: '/images/projects/financial.jpg',
    category: 'AI Analytics',
    impact: '45% more accurate predictions',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-cool-blue mb-3"
          >
            Featured Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base text-gray-600 dark:text-gray-300"
          >
            Discover how we've helped businesses transform through data-driven solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden group hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-1 bg-cool-blue text-white text-xs rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cool-blue font-medium">
                    {project.impact}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm text-cool-blue font-semibold hover:text-cool-blue transition-colors duration-300"
                  >
                    Read More →
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 