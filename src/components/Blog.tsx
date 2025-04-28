'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Define posts with direct Medium URLs for "Read more"
const blogPosts = [
  {
    id: 1,
    title: 'The Future of Data Analytics: Trends to Watch in 2024',
    excerpt: 'Exploring the latest trends in data analytics, from AI-powered insights to real-time processing and beyond.',
    date: 'March 15, 2024',
    category: 'Data Analytics',
    readTime: '5 min read',
    image: '/images/blog/data-analytics.jpg',
    url: 'https://medium.com/@sam_analyst/future-of-data-analytics-trends-to-watch-in-2024'
  },
  {
    id: 2,
    title: 'Getting Started with Python for Data Analysis',
    excerpt: 'A comprehensive guide for beginners looking to start their journey in data analysis with Python.',
    date: 'March 10, 2024',
    category: 'Python',
    readTime: '8 min read',
    image: '/images/blog/python_data_analysis.png',
    url: 'https://medium.com/@sam_analyst/getting-started-with-python-for-data-analysis'
  },
  {
    id: 3,
    title: 'Building Effective Data Visualizations with Power BI',
    excerpt: 'Learn how to create compelling and informative data visualizations that tell a story with your data.',
    date: 'March 5, 2024',
    category: 'Data Visualization',
    readTime: '6 min read',
    image: '/images/blog/powerBi-dashboard.jpg',
    url: 'https://medium.com/@sam_analyst/building-effective-data-visualizations-with-power-bi'
  },
  {
    id: 4,
    title: 'Machine Learning Basics: A Practical Approach',
    excerpt: 'Understanding the fundamentals of machine learning and how to apply them in real-world scenarios.',
    date: 'February 28, 2024',
    category: 'Machine Learning',
    readTime: '10 min read',
    image: '/images/blog/ml-basics.jpg',
    url: 'https://medium.com/@sam_analyst/machine-learning-basics-a-practical-approach'
  }
];

const Blog = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !validateEmail(email)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }
    // No subscription service configured
    setStatus('error');
    setMessage('Subscription service is not configured. Please try again later.');
  };

  const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.span
            className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-cool-blue/10 text-cool-blue dark:bg-cool-blue/20 mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            BLOG
          </motion.span>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Latest Articles
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Insights, tutorials, and thoughts on data analysis, machine learning, and technology.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <a
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block h-full"
              >
                <div className="relative h-48 w-full group-hover:scale-105 transition-transform duration-300">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-sm font-medium text-cool-blue">{post.category}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
                    <span className="text-cool-blue font-medium">Read more →</span>
                  </div>
                </div>
              </a>
            </motion.article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 bg-cool-blue rounded-lg p-8 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Follow Me on Medium</h3>
          <p className="text-white/80 mb-6 max-w-2xl mx-auto">
            Get notified of my latest posts by following me on Medium.
          </p>
          <a
            href="https://medium.com/@sam_analyst"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-cool-blue font-medium rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            Follow on Medium →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
