'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// Testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Sarah K.',
    position: 'Senior Marketing Manager',
    image: '/images/testimonials/person1.jpeg', // Replace with real images if you want
    text: 'Working with Samuel Mati was an absolute game-changer for our marketing team. His ability to transform raw data into clear, actionable insights helped us increase our campaign ROI by over 30%. Highly analytical, detail-oriented, and easy to collaborate with.'
  },
  {
    id: 2,
    name: 'David M.',
    position: 'Head of Operations',
    image: '/images/testimonials/person2.jpeg',
    text: 'Mati consistently delivered high-quality dashboards and analyses that allowed our leadership team to make smarter, faster decisions. His work ethic, technical skills, and ability to simplify complex datasets are truly impressive.'
  },
  {
    id: 3,
    name: 'Linda P.',
    position: 'Product Manager',
    image: '/images/testimonials/person3.jpeg',
    text: 'Sam has a rare talent for telling a story through data. His reports not only presented numbers but uncovered hidden opportunities that directly influenced our product roadmap. Every team needs someone like him.'
  },
  {
    id: 4,
    name: 'James T.',
    position: 'Business Intelligence Director',
    image: '/images/testimonials/person4.jpeg',
    text: 'I was thoroughly impressed by Samuel’s knowledge of business intelligence tools and predictive analytics. He turned complex data problems into intuitive, visual solutions that empowered our entire team.'
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      (prev + 1) % testimonials.length
    );
  };

  return (
    <section className="py-10 md:py-16" id="testimonials">
      {/* Title */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-cool-blue mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            What People Say About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-cool-blue mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          />
        </div>
      </div>

      {/* Testimonials with gradient background */}
      <div className="relative overflow-hidden h-64 md:h-80">
        <div className="absolute inset-0 bg-gradient-to-r from-deep-purple to-cool-blue opacity-90" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 h-full flex items-center">
          <div className="max-w-4xl mx-auto w-full">
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
                    {/* Image */}
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

                    {/* Text */}
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

        {/* Pagination bullets */}
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

        {/* Previous/Next buttons */}
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
