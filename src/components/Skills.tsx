'use client';

import { motion } from 'framer-motion';

const technicalSkills = [
  { name: 'Python', proficiency: 92 },
  { name: 'SQL', proficiency: 88 },
  { name: 'Excel', proficiency: 95 },
  { name: 'Power BI', proficiency: 88 },
  { name: 'Tableau', proficiency: 85 },
  { name: 'Web Scraping', proficiency: 90 },
  { name: 'Data Analysis', proficiency: 92 },
  { name: 'Machine Learning', proficiency: 85 }
];

const softSkills = [
  { name: 'Problem Solving', proficiency: 95 },
  { name: 'Communication', proficiency: 90 },
  { name: 'Team Leadership', proficiency: 88 },
  { name: 'Project Management', proficiency: 85 },
  { name: 'Critical Thinking', proficiency: 92 },
  { name: 'Adaptability', proficiency: 90 }
];

const SkillBar = ({ name, proficiency }: { name: string; proficiency: number }) => (
  <div className="w-full mb-4">
    <div className="flex justify-between mb-1">
      <h4 className="text-base font-medium text-black">{name}</h4>
      <span className="text-sm font-semibold text-black">{proficiency}%</span>
    </div>
    <div className="w-full bg-gray-300 rounded-full h-2 overflow-hidden">
      <motion.div
        className="h-2 rounded-full bg-gradient-to-r from-deep-purple to-teal-green"
        initial={{ width: 0 }}
        whileInView={{ width: `${proficiency}%` }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
    </div>
  </div>
);

const CircularSkill = ({ name, proficiency }: { name: string; proficiency: number }) => (
  <div className="flex flex-col items-center">
    <div className="relative w-24 h-24 mb-2">
      <svg className="w-full h-full" viewBox="0 0 36 36">
        <path
          className="text-gray-300"
          stroke="currentColor"
          strokeWidth="3"
          fill="none"
          d="M18 2a16 16 0 1 1 0 32a16 16 0 1 1 0-32"
        />
        <motion.path
          stroke="url(#grad1)"
          strokeWidth="3"
          fill="none"
          strokeDasharray="100, 100"
          strokeDashoffset="100"
          animate={{ strokeDashoffset: 100 - proficiency }}
          transition={{ duration: 1 }}
          d="M18 2a16 16 0 1 1 0 32a16 16 0 1 1 0-32"
        />
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#512393" />
            <stop offset="100%" stopColor="#178582" />
          </linearGradient>
        </defs>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-black">
        {proficiency}%
      </span>
    </div>
    <h4 className="text-sm font-medium text-center text-black">{name}</h4>
  </div>
);

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-800 font-space-grotesk">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cool-blue mb-4">
            Skills & Expertise
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            A blend of technical prowess and professional competencies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-cool-blue mb-6 text-center">Technical Skills</h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <SkillBar name={skill.name} proficiency={skill.proficiency} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h3 className="text-2xl font-semibold text-cool-blue mb-6 text-center">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-8">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <CircularSkill name={skill.name} proficiency={skill.proficiency} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
