'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Team data
const teamMembers = [
  {
    id: 1,
    name: 'Mr Samuel Mati',
    position: 'Chief Executive Officer',
    image: '/images/team/samuel.jpg',
    bio: 'With over 15 years in data science and business leadership, Sam founded Hermira to bridge the gap between complex analytics and actionable business insights.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com',
    },
  },
  {
    id: 2,
    name: 'Mwangi Kariuki',
    position: 'Chief Technology Officer',
    image: '/images/team/person1.png',
    bio: 'Previously leading AI research at Tech Giants, Mwangi brings cutting-edge machine learning expertise to drive innovation across our analytics platform.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com',
    },
  },
  {
    id: 3,
    name: 'Njeri Odhiambo',
    position: 'Chief Operations Officer',
    image: '/images/team/person2.jpeg',
    bio: 'Njeri oversees all operational aspects of Hermira, ensuring seamless delivery of solutions and maintaining our high standards of client satisfaction.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 4,
    name: 'Otieno Kibet',
    position: 'Head of Data Science',
    image: '/images/team/person1.png',
    bio: 'With a PhD in Statistics and experience across healthcare and finance, Otieno leads our team of data scientists in developing groundbreaking predictive models.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com',
    },
  },
  {
    id: 5,
    name: 'Akinyi Wafula',
    position: 'Chief Product Officer',
    image: '/images/team/person2.jpeg',
    bio: 'Akinyi translates complex technical capabilities into elegant user experiences, ensuring our products are both powerful and intuitive for our clients.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 6,
    name: 'Kipchoge Mutai',
    position: 'Chief Financial Officer',
    image: '/images/team/person1.png',
    bio: "Kipchoge brings 20 years of financial leadership in tech startups, overseeing Hermira's financial strategy and partnerships with key investors.",
    social: {
      linkedin: 'https://linkedin.com',
    },
  },
  {
    id: 7,
    name: 'Nyambura Githinji',
    position: 'Head of Client Success',
    image: '/images/team/person2.jpeg',
    bio: 'Nyambura ensures our clients get maximum value from our solutions, leading a team dedicated to ongoing support and strategic consultancy.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 8,
    name: 'Maina Mbugua',
    position: 'Head of Marketing',
    image: '/images/team/person1.png',
    bio: 'Maina crafts our brand story and go-to-market strategy, communicating the complex value of data analytics in ways that resonate with business leaders.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
  {
    id: 9,
    name: 'Wangari Njoroge',
    position: 'Head of Business Development',
    image: '/images/team/person2.jpeg',
    bio: "Wangari identifies strategic growth opportunities and develops key partnerships, expanding Hermira's presence across industries and markets.",
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
  },
];

// Group members into slides of 4
const teamSlides = teamMembers.reduce((resultArray, item, index) => {
  const slideIndex = Math.floor(index / 3);
  if (!resultArray[slideIndex]) resultArray[slideIndex] = [];
  resultArray[slideIndex].push(item);
  return resultArray;
}, [] as typeof teamMembers[]);

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? teamSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamSlides.length);
  };

  return (
    <section className="py-8 md:py-16">
      <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Carousel */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {teamSlides[currentSlide].map((member) => (
                  <motion.div
                    key={member.id}
                    className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="relative aspect-[3/2] h-64 w-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-deep-purple">{member.name}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">{member.position}</p>
                      <p className="text-gray-600 text-sm mb-3">{member.bio}</p>
                      <div className="flex space-x-3">
                        {member.social.linkedin && (
                          <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cool-blue">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569..."></path>
                            </svg>
                          </a>
                        )}
                        {member.social.twitter && (
                          <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cool-blue">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825..."></path>
                            </svg>
                          </a>
                        )}
                        {member.social.github && (
                          <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cool-blue">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 .297c-6.63 0-12 5.373..."></path>
                            </svg>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Dots */}
          {teamSlides.length > 1 && (
            <div className="flex justify-center mt-8 space-x-2">
              {teamSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'bg-cool-blue scale-110' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}

          {/* Arrow Navigation */}
          {teamSlides.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors z-10"
                aria-label="Previous slide"
              >
                <svg className="w-6 h-6 text-deep-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 transition-colors z-10"
                aria-label="Next slide"
              >
                <svg className="w-6 h-6 text-deep-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Team;
