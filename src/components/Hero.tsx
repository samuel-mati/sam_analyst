'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowVideo(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7; // Slow down video playback
    }
  }, [videoLoaded]);

  const handleVideoLoad = () => {
    setVideoLoaded(true);
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Gradient Background - Always present but fades out when video is shown */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-teal-green to-deep-purple"
        animate={{ 
          opacity: showVideo && videoLoaded ? 0 : 1,
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      {/* Video Background - Initially hidden, fades in after site loads */}
      <AnimatePresence>
        {showVideo && (
          <motion.div 
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: videoLoaded ? 1 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
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
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/80"></div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content Container */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">

          {/* Left Column - Text Content */}
          <motion.div 
            className="w-full md:w-1/2 text-white z-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            >
              Empowering Smarter Decisions with Data
            </motion.h1>

            <motion.p 
              className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
            >
              Our AI-powered analytics platform helps businesses transform raw data into 
              actionable insights, enabling better strategic planning and operational excellence.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
            >
              <motion.button 
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.button>

              <motion.button 
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Request Demo
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Image */}
          <motion.div 
            className="w-full md:w-1/2 mt-12 md:mt-0 z-10"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative w-full aspect-square md:aspect-[4/3] max-w-lg mx-auto">
              <Image
                src="/images/hero_temp/hero1.png"
                alt="Data Analytics Dashboard"
                fill
                className="object-contain z-10 rounded-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {/* Decorative elements */}
              <motion.div 
                className="absolute -z-10 inset-0 bg-cool-blue/20 rounded-2xl blur-2xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.7, 0.5]
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
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
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <svg className="w-8 h-8 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
