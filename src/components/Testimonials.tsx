'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'CTO, TechVision',
    image: '/images/testimonials/person2.jpeg',
    text: 'Hermira\'s data analytics platform has been transformative for our business. Their AI insights helped us reduce operational costs by 32% while increasing customer satisfaction scores.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Director of Analytics, GlobalRetail',
    image: '/images/testimonials/person1.jpeg',
    text: 'We\'ve worked with several analytics firms, but Hermira stands out with their attention to detail and custom solutions. Their team understood our unique challenges and delivered beyond expectations.'
  },
  {
    id: 3,
    name: 'Olivia Rodrigues',
    position: 'CEO, FinanceFirst',
    image: '/images/testimonials/person3.jpeg',
    text: 'Implementing Hermira\'s BI dashboard has given our executive team unprecedented visibility into our operations. I can confidently say it\'s been instrumental in our 40% growth this year.'
  },
  {
    id: 4,
    name: 'David Park',
    position: 'Head of Innovation, HealthPlus',
    image: '/images/testimonials/person4.jpeg',
    text: 'The predictive models developed by Hermira have revolutionized our approach to patient care. Their team\'s expertise in both healthcare and data science is unmatched in the industry.'
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000); // Change every 8 seconds
    
    return () => clearInterval(interval);
  }, []);

  // Handle manual navigation
  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  // Navigate to previous testimonial
  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Navigate to next testimonial
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      (prev + 1) % testimonials.length
    );
  };

  return (
    <section className="py-10 md:py-16">
      {/* Title outside the gradient background */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-deep-purple mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-deep-purple mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          />
        </div>
      </div>
      
      {/* Testimonials section with gradient background */}
      <div className="relative overflow-hidden h-64 md:h-80">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-deep-purple to-teal-green opacity-90" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
          <div className="max-w-4xl mx-auto w-full">
            {/* Testimonial Carousel */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 md:p-6 shadow-xl"
                >
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                    {/* Person Image */}
                    <div className="w-16 h-16 md:w-20 md:h-20 relative flex-shrink-0">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cool-blue to-teal-green opacity-50 blur-sm" />
                      <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/20">
                        <Image
                          src={testimonials[currentTestimonial].image}
                          alt={testimonials[currentTestimonial].name}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 64px, 80px"
                        />
                      </div>
                    </div>
                    
                    {/* Testimonial Content */}
                    <div className="flex-1">
                      <div className="mb-2 md:mb-3">
                        <svg className="w-6 h-6 text-white/40 mb-2" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                        </svg>
                        <p className="text-sm md:text-base text-white leading-relaxed line-clamp-3">
                          {testimonials[currentTestimonial].text}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-base md:text-lg font-bold text-white">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-sm text-white/80">
                          {testimonials[currentTestimonial].position}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        {/* Navigation Buttons - positioned at bottom */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center space-x-2 z-20">
          {testimonials.map((_, index) => (
            <button 
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentTestimonial === index ? 'bg-white scale-125' : 'bg-white/40'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Left/Right navigation buttons on sides */}
        <motion.button
          onClick={prevTestimonial}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>
        
        <motion.button
          onClick={nextTestimonial}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-colors z-20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </section>
  );
};

export default Testimonials; 