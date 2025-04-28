'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const experience = [
  {
    title: 'Data & Analytics Instructor',
    company: 'AReL: Action for Refugee Life',
    period: 'Jan 2025 - Present',
    location: 'Turkana County, Kenya',
    description: [
      'Designing and delivering a dynamic data analytics curriculum covering Python, SQL, Excel, Power BI, and Tableau, integrating AI and machine learning trends',
      'Facilitating interactive sessions, labs, and project-based learning to enhance practical skills in data analysis and visualization',
      'Providing personalized guidance to help students develop technical expertise and career readiness in data analytics',
      'Developing and implementing assessments to track learner progress and optimize teaching strategies',
      'Collaborating with colleagues to integrate cross-disciplinary knowledge and align training programs with organizational goals',
      'Engaging with the Kakuma community to identify local opportunities and challenges in implementing data analytics solutions'
    ]
  },
  {
    title: 'Data Analyst',
    company: 'Konza Technopolis Development Authority',
    period: 'Nov 2023 - Nov 2024',
    location: 'Kenya',
    description: [
      'Developed and maintained automated data pipelines using Python and SQL',
      'Created interactive dashboards in Power BI for key business metrics',
      'Conducted statistical analysis to identify trends and opportunities',
      'Collaborated with cross-functional teams to implement data-driven solutions',
      'Managed and optimized database systems for efficient data storage and retrieval'
    ]
  },
  {
    title: 'IT Support Specialist',
    company: 'Mwingi Township IT Department',
    period: 'Aug 2021 - Oct 2021',
    location: 'Mwingi, Kitui County, Kenya',
    description: [
      'Provided technical support and troubleshooting for hardware and software issues',
      'Assisted in network maintenance and security implementation',
      'Managed user accounts and access permissions',
      'Documented IT procedures and maintained system logs'
    ]
  }
];

const education = [
  {
    degree: 'Bachelor\'s degree in Computer Science',
    school: 'South Eastern Kenya University',
    period: 'Sep 2017 - Nov 2021',
    location: 'Kenya',
    details: [
      'Grade: First Class',
      'Specialized in Data Analysis and Data Science',
      'Final year project: IT Jobs Predictive Model using time series analysis'
    ]
  }
];

const certifications = [
  {
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Google',
    date: 'Dec 2023',
    skills: ['Data Analysis', 'SQL', 'R Programming', 'Tableau', 'Data Visualization']
  },
  {
    name: 'Data Science Essentials',
    issuer: 'Cisco',
    date: 'May 2024',
    skills: ['Machine Learning', 'Python', 'Data Mining', 'Statistical Analysis']
  },
  {
    name: 'ALX AICE-AI Career Essentials',
    issuer: 'alx_africa',
    date: 'Nov 2024',
    skills: ['Canva', 'Custom GPTs', 'AI Tools']
  },
  {
    name: 'Data Analytics Essentials',
    issuer: 'Cisco',
    date: 'May 2024',
    skills: ['Quantitative Analytics', 'Data Analysis']
  }
];

const skills = [
  {
    category: 'Technical Skills',
    items: [
      { name: 'Python', level: 'Advanced' },
      { name: 'SQL', level: 'Advanced' },
      { name: 'Power BI', level: 'Advanced' },
      { name: 'Tableau', level: 'Advanced' },
      { name: 'Excel', level: 'Advanced' },
      { name: 'Machine Learning', level: 'Intermediate' },
      { name: 'Data Visualization', level: 'Advanced' },
      { name: 'Web Scraping', level: 'Advanced' }
    ]
  },
  {
    category: 'Soft Skills',
    items: [
      { name: 'Problem Solving', level: 'Advanced' },
      { name: 'Communication', level: 'Advanced' },
      { name: 'Team Leadership', level: 'Advanced' },
      { name: 'Project Management', level: 'Advanced' },
      { name: 'Teaching & Mentoring', level: 'Advanced' }
    ]
  }
];

const projects = [
  {
    title: 'E-commerce Sales Performance Dashboard',
    period: 'Jun 2024 - Jul 2024',
    description: [
      'Developed an interactive dashboard for analyzing e-commerce sales performance',
      'Implemented data processing pipeline using Python and MySQL',
      'Created visualizations in Tableau for sales trends, customer insights, and inventory management',
      'Designed database schema for efficient data storage and retrieval'
    ]
  },
  {
    title: 'IT Jobs Predictive Model',
    period: 'Apr 2024 - Jul 2024',
    description: [
      'Built time series models (ARIMA, SARIMA, Exponential Smoothing) to predict IT job demand',
      'Implemented web scraping to collect job market data',
      'Analyzed historical trends and seasonal patterns in the IT job market',
      'Created visualizations to communicate findings and predictions'
    ]
  }
];

const Resume = () => {
  const generatePDF = async () => {
    const resumeElement = document.getElementById('resume-content');
    if (!resumeElement) return;

    try {
      const canvas = await html2canvas(resumeElement, {
        scale: 2,
        useCORS: true,
        logging: false,
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const imgWidth = 210; // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('samuel-mati-resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  return (
    <section id="resume" className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div id="resume-content" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.span
            className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-cool-blue/10 text-cool-blue dark:bg-cool-blue/20 mb-3"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            RESUME
          </motion.span>
        
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Samuel Mati
          </motion.h2>
          
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Data Analyst & ML Engineer
          </motion.p>
        </div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Experience</h3>
          <div className="space-y-8">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h4>
                    <p className="text-cool-blue font-medium">{job.company}</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-gray-600 dark:text-blue-300">{job.period}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{job.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {job.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h4>
                    <p className="text-cool-blue font-medium">{edu.school}</p>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-gray-600 dark:text-gray-300">{edu.period}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{edu.location}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {edu.details.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Certifications</h3>
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{cert.name}</h4>
                    <p className="text-cool-blue font-medium">{cert.issuer}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 dark:text-gray-300">Issued {cert.date}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-cool-blue/10 text-cool-blue rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Projects</h3>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{project.title}</h4>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-600 dark:text-gray-300">{project.period}</p>
                  </div>
                </div>
                <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                  {project.description.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md"
              >
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{skillGroup.category}</h4>
                <div className="grid grid-cols-1 gap-3">
                  {skillGroup.items.map((skill, idx) => (
                    <div key={idx} className="flex items-center justify-between p-2 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-gray-700 dark:text-gray-200 font-medium">{skill.name}</span>
                      <span className="px-3 py-1 bg-cool-blue/10 text-cool-blue rounded-full text-sm font-medium">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Download Resume Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <button
            onClick={generatePDF}
            className="inline-flex items-center px-6 py-3 rounded-lg bg-cool-blue text-white hover:bg-blue-600 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume; 