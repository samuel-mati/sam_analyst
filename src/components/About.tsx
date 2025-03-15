'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '10+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Client Satisfaction', value: '98%' },
    { label: 'Team Members', value: '50+' },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[350px] rounded-xl overflow-hidden"
          >
            <Image
              src="/images/about/team.jpg"
              alt="Our Team"
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
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#178582] mb-3">
                About Hermira Insights
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-300">
                We are a team of data scientists, analysts, and business strategists
                dedicated to transforming businesses through data-driven insights.
                Our mission is to empower organizations with cutting-edge analytics
                solutions that drive growth and innovation.
              </p>
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
                  <div className="text-2xl font-bold text-[#178582] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Values */}
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-[#512393]">
                Our Values
              </h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#178582] mr-2 mt-1"
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
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Innovation through data-driven insights
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#178582] mr-2 mt-1"
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
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Client-centric approach to problem-solving
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-5 h-5 text-[#178582] mr-2 mt-1"
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
                  <span className="text-sm text-gray-600 dark:text-gray-300">
                    Commitment to excellence and continuous improvement
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 