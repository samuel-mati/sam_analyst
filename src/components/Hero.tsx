'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const titles = [
  'Data Analyst',
  'ML Engineer',
  'AI Solutions Architect',
  'Data Scientist',
  'Business Intelligence',
  'Web Scraper',
  'Database Administrator',
  'Data Visualization Expert'
];

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [displayedTitle, setDisplayedTitle] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, [videoLoaded]);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (currentCharIndex < titles[currentTitleIndex].length) {
        timeout = setTimeout(() => {
          setDisplayedTitle(prev => prev + titles[currentTitleIndex][currentCharIndex]);
          setCurrentCharIndex(prev => prev + 1);
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);
      }
    } else {
      if (currentCharIndex > 0) {
        timeout = setTimeout(() => {
          setDisplayedTitle(prev => prev.slice(0, -1));
          setCurrentCharIndex(prev => prev - 1);
        }, 50);
      } else {
        setCurrentTitleIndex(prev => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentCharIndex, currentTitleIndex, isTyping]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-12 sm:pt-20 pb-12 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-teal-green to-deep-purple"
        animate={{
          opacity: showVideo && videoLoaded ? 0 : 1,
        }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />

      {/* Video Background */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: videoLoaded ? 1 : 0 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          >
            <video
              ref={videoRef}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              onLoadedData={handleVideoLoad}
            >
              <source src="/videos/hero/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/80" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Main Content */}
          <motion.div
            className="w-full max-w-3xl text-white z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 font-space-grotesk [text-shadow:_2px_2px_0_rgb(0_0_0_/_90%)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
            >
              Hi, I'm Samuel Mati
            </motion.h1>

            <motion.h2
              className="text-2xl sm:text-3xl lg:text-4xl text-cool-blue mb-6 min-h-[2.5em] font-space-grotesk [text-shadow:_2px_2px_0_rgb(0_0_0_/_90%)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
            >
              <span className="inline-block">
                {displayedTitle}
                <span className="animate-blink">|</span>
              </span>
            </motion.h2>

            <motion.p
              className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
            >
              I transform complex data into actionable insights, build predictive models, and create interactive visualizations that drive business growth.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut', delay: 0.6 }}
            >
              <motion.a
                href="/projects"
                className="btn-primary px-8 py-3 text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                View My Work
              </motion.a>

              <motion.a
                href="/contact"
                className="btn-secondary px-8 py-3 text-lg hover:bg-white hover:text-deep-purple hover:outline-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
