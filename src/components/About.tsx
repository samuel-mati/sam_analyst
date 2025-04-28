'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const stats = [
    { label: 'Projects Delivered', value: '50+' },
    { label: 'Data Points Analyzed', value: '1M+' },
    { label: 'Automated Solutions', value: '100+' },
    { label: 'Happy Clients', value: '30+' },
  ];

  return (
    <section className="min-h-[85vh] py-20 bg-gray-50 dark:bg-gray-900 flex items-center font-space-grotesk">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[300px] lg:h-[400px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/about/profile.png"
              alt="Samuel Mati - Data Analyst"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div id="about">
              <h2 className="text-2xl md:text-3xl font-bold text-cool-blue mb-6">
                About Me
              </h2>
              <div className="space-y-6">
                <p className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-200">
                  I'm Samuel Mati, a Data Analyst and Web Scraper passionate about transforming raw data into clear, actionable insights.
                </p>
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-300">
                  I specialize in data analysis, web scraping, and building dynamic dashboards that help businesses make smarter decisions.
                  Constantly learning and evolving, I focus on delivering clean, efficient, and impactful solutions.
                </p>
                <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 italic">
                  Outside of data, I love exploring new tech and growing through continuous learning.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
                >
                  <div className="text-2xl font-bold text-cool-blue mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Core Skills */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-cool-blue">
                Core Skills
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-cool-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                    Data Analysis
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-cool-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                    Web Scraping
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-cool-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                    Dashboard Creation
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg
                    className="w-5 h-5 text-cool-blue"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-sm md:text-base text-gray-600 dark:text-gray-300">
                    Process Automation
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 