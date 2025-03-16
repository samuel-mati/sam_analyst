'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '#pricing', label: 'Pricing' },
    { href: '/contact', label: 'Contact' },
  ];

  const pageDropdown = [
    { href: '/projects', label: 'Projects' },
    { href: '/team', label: 'Team' },
    { href: '/testimonials', label: 'Testimonials' },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed z-50 top-0 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white dark:bg-black shadow-md' : 'bg-transparent'
      }`}
    >
      <div
        className={`mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ease-in-out ${
          isScrolled ? 'max-w-full' : 'max-w-[80%]'
        }`}
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative w-32 h-8 md:w-40 md:h-10">
              <Image
                src="/images/logo_white_background.jpg"
                alt="Hermira Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Center Nav */}
          <div className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-cool-blue dark:text-accent'
                    : isScrolled
                    ? 'text-black dark:text-white hover:text-cool-blue dark:hover:text-accent'
                    : 'text-white hover:text-accent'
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Dropdown with animation and working hover */}
            <div
              className="relative"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <div
                role="button"
                className={`text-sm font-medium cursor-pointer transition-colors duration-200 ${
                  isScrolled
                    ? 'text-black dark:text-white hover:text-cool-blue dark:hover:text-accent'
                    : 'text-white hover:text-accent'
                }`}
              >
                More +
              </div>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-black rounded shadow-lg z-50"
                  >
                    {pageDropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block px-4 py-2 text-sm ${
                          pathname === item.href
                            ? 'text-cool-blue dark:text-accent'
                            : 'text-black dark:text-white hover:text-cool-blue dark:hover:text-accent'
                        }`}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-4 py-1.5 text-sm font-medium rounded-full bg-[#068DEA] text-white hover:bg-[#056fc2] transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors duration-200 ${
              isScrolled ? 'text-cool-blue' : 'text-white'
              } hover:text-accent focus:outline-none`}
            >
              {!isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-black">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === link.href
                  ? 'text-cool-blue dark:text-accent'
                  : 'text-black dark:text-white hover:text-cool-blue dark:hover:text-accent'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          <div className="mt-3 mb-1 px-3 text-sm font-semibold text-gray-500 dark:text-gray-400">Pages</div>
          {pageDropdown.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                pathname === item.href
                  ? 'text-cool-blue dark:text-accent'
                  : 'text-black dark:text-white hover:text-cool-blue dark:hover:text-accent'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <button className="w-full mt-4 px-4 py-2 rounded-full bg-[#068DEA] text-white hover:bg-[#056fc2] text-sm font-medium">
            Get Started
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
