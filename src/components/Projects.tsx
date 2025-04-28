'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'E-commerce Sales Analysis',
    description: 'Comprehensive analysis of e-commerce sales data using Python and SQL, identifying key trends and opportunities for revenue optimization.',
    image: '/images/projects/dashboard.jpg',
    category: 'Data Analysis',
    impact: 'Identified 25% revenue growth opportunities',
    technologies: ['Python', 'SQL', 'Pandas', 'Power BI']
  },
  {
    title: 'Customer Churn Prediction',
    description: 'Machine learning model to predict customer churn using historical data, achieving 85% accuracy in identifying at-risk customers.',
    image: '/images/projects/supplychain1.jpg',
    category: 'Machine Learning',
    impact: 'Reduced churn rate by 15%',
    technologies: ['Python', 'scikit-learn', 'Pandas', 'Matplotlib']
  },
  {
    title: 'Digital Marketing Agency Dashboard',
    description: 'Association rule mining to identify product relationships and optimize store layout, leading to improved cross-selling opportunities.',
    image: '/images/projects/customer.jpg',
    category: 'Data Visualization',
    impact: '20% increase in conversions',
    technologies: ['Power BI', 'Excel', 'DAX', 'SQL']
  },
  {
    title: 'Time Series Forecasting',
    description: 'Developed ARIMA and Prophet models to forecast sales and inventory needs, reducing stockouts by 30% and optimizing inventory levels.',
    image: '/images/projects/ml-forecast.jpg',
    category: 'Time Series Analysis',
    impact: '30% reduction in stockouts',
    technologies: ['Python', 'ARIMA', 'Prophet', 'Power BI']
  },
  {
    title: 'Interactive Sales Dashboard',
    description: 'Created interactive dashboards in Power BI and Tableau for real-time sales monitoring and performance tracking across multiple regions.',
    image: '/images/projects/financial.jpg',
    category: 'Data Visualization',
    impact: '40% faster decision-making',
    technologies: ['Power BI', 'Tableau', 'SQL', 'DAX']
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
            Portfolio Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base text-gray-600 dark:text-gray-300"
          >
            A showcase of my technical projects and expertise
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
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-2 py-1 bg-cool-blue/10 text-cool-blue text-xs rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cool-blue font-medium">
                    {project.impact}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm text-cool-blue font-semibold hover:text-cool-blue transition-colors duration-300"
                  >
                    View Project →
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