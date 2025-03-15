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
      github: 'https://github.com'
    }
  },
  {
    id: 2,
    name: 'Mwangi Kariuki',
    position: 'Chief Technology Officer',
    image: '/images/team/mwangi.jpg',
    bio: 'Previously leading AI research at Tech Giants, Mwangi brings cutting-edge machine learning expertise to drive innovation across our analytics platform.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      github: 'https://github.com'
    }
  },
  {
    id: 3,
    name: 'Njeri Odhiambo',
    position: 'Chief Operations Officer',
    image: '/images/team/njeri.jpg',
    bio: 'Njeri oversees all operational aspects of Hermira, ensuring seamless delivery of solutions and maintaining our high standards of client satisfaction.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 4,
    name: 'Otieno Kibet',
    position: 'Head of Data Science',
    image: '/images/team/otieno.jpg',
    bio: 'With a PhD in Statistics and experience across healthcare and finance, Otieno leads our team of data scientists in developing groundbreaking predictive models.',
    social: {
      linkedin: 'https://linkedin.com',
      github: 'https://github.com'
    }
  },
  {
    id: 5,
    name: 'Akinyi Wafula',
    position: 'Chief Product Officer',
    image: '/images/team/akinyi.jpg',
    bio: 'Akinyi translates complex technical capabilities into elegant user experiences, ensuring our products are both powerful and intuitive for our clients.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 6,
    name: 'Kipchoge Mutai',
    position: 'Chief Financial Officer',
    image: '/images/team/kipchoge.jpg',
    bio: 'Kipchoge brings 20 years of financial leadership in tech startups, overseeing Hermira\'s financial strategy and partnerships with key investors.',
    social: {
      linkedin: 'https://linkedin.com'
    }
  },
  {
    id: 7,
    name: 'Nyambura Githinji',
    position: 'Head of Client Success',
    image: '/images/team/nyambura.jpg',
    bio: 'Nyambura ensures our clients get maximum value from our solutions, leading a team dedicated to ongoing support and strategic consultancy.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 8,
    name: 'Maina Mbugua',
    position: 'Head of Marketing',
    image: '/images/team/maina.jpg',
    bio: 'Maina crafts our brand story and go-to-market strategy, communicating the complex value of data analytics in ways that resonate with business leaders.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  },
  {
    id: 9,
    name: 'Wangari Njoroge',
    position: 'Head of Business Development',
    image: '/images/team/wangari.jpg',
    bio: 'Wangari identifies strategic growth opportunities and develops key partnerships, expanding Hermira\'s presence across industries and markets.',
    social: {
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com'
    }
  }
];

// Group team members into slides of 3
const teamSlides = teamMembers.reduce((resultArray, item, index) => {
  const slideIndex = Math.floor(index / 3);
  
  if (!resultArray[slideIndex]) {
    resultArray[slideIndex] = [];
  }
  
  resultArray[slideIndex].push(item);
  return resultArray;
}, [] as typeof teamMembers[]);

const Team = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? teamSlides.length - 1 : prev - 1
    );
  };
  
  const nextSlide = () => {
    setCurrentSlide((prev) => 
      (prev + 1) % teamSlides.length
    );
  };
  
  return (
    <section className="py-8 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative px-4 md:px-10">
          {/* Carousel */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              >
                {teamSlides[currentSlide].map((member) => (
                  <motion.div 
                    key={member.id}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="relative h-64 w-full">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-deep-purple">{member.name}</h3>
                      <p className="text-cool-blue font-medium mb-3">{member.position}</p>
                      <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                      
                      <div className="flex space-x-3">
                        {member.social.linkedin && (
                          <a 
                            href={member.social.linkedin} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cool-blue transition-colors"
                            aria-label={`${member.name}'s LinkedIn`}
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                            </svg>
                          </a>
                        )}
                        
                        {member.social.twitter && (
                          <a 
                            href={member.social.twitter} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cool-blue transition-colors"
                            aria-label={`${member.name}'s Twitter`}
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.126 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 14-7.496 14-13.986 0-.21 0-.42-.015-.63A10.012 10.012 0 0024 4.59l-.047-.02z"/>
                            </svg>
                          </a>
                        )}
                        
                        {member.social.github && (
                          <a 
                            href={member.social.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-cool-blue transition-colors"
                            aria-label={`${member.name}'s GitHub`}
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
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
          
          {/* Navigation Controls */}
          {teamSlides.length > 1 && (
            <>
              {/* Navigation Dots */}
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
              
              {/* Arrow Navigation */}
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