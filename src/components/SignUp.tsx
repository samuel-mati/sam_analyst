'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  companyName?: string;
  agreeToTerms: boolean;
}

const SignUp = () => {
  const [mode, setMode] = useState<'signup' | 'signin'>('signup');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    companyName: '',
    agreeToTerms: false,
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(mode === 'signup' ? 'Sign Up Data:' : 'Sign In Data:', formData);
    // Here you would typically send the data to your backend API
  };
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl w-full flex flex-col md:flex-row bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden max-h-[80vh]">
        {/* Left column: Form */}
        <div className="w-full md:w-1/2 p-6 md:p-8 overflow-y-auto">
          <div className="mb-6 text-center md:text-left">
            <Link href="/" className="inline-block">
              <Image 
                src="/images/logos/logo_white_background.png" 
                alt="Hermira Logo" 
                width={120} 
                height={30} 
                className="mb-4" 
              />
            </Link>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {mode === 'signup' ? 'Create your account' : 'Welcome back'}
            </h2>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
              {mode === 'signup' 
                ? 'Get started with your free account today' 
                : 'Sign in to access your account'}
            </p>
          </div>
          
          {/* Mode Toggle */}
          <div className="flex p-1 mb-6 bg-gray-100 dark:bg-gray-700 rounded-lg w-full md:w-64">
            <button
              onClick={() => setMode('signup')}
              className={`w-1/2 py-1.5 text-sm font-medium rounded-md transition ${
                mode === 'signup'
                  ? 'bg-white dark:bg-gray-600 shadow text-cool-blue dark:text-white'
                  : 'text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100'
              }`}
            >
              Sign Up
            </button>
            <button
              onClick={() => setMode('signin')}
              className={`w-1/2 py-1.5 text-sm font-medium rounded-md transition ${
                mode === 'signin'
                  ? 'bg-white dark:bg-gray-600 shadow text-cool-blue dark:text-white'
                  : 'text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-100'
              }`}
            >
              Sign In
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Form Fields */}
            <div className="space-y-4">
              {/* Name Fields - side by side */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded-md text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded-md text-sm"
                  />
                </div>
              </div>

              {/* Email and Company - side by side */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full p-2 border rounded-md text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md text-sm"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full p-2 border rounded-md text-sm"
                />
              </div>

              {/* Terms */}
              <div className="flex items-start space-x-2 mt-2">
                <input
                  type="checkbox"
                  id="terms"
                  name="agreeToTerms"
                  checked={formData.agreeToTerms}
                  onChange={handleChange}
                  required
                  className="mt-1"
                />
                <label htmlFor="terms" className="text-xs">
                  I agree to the <a href="/terms" className="text-cool-blue hover:underline">Terms of Service</a> and{" "}
                  <a href="/privacy" className="text-cool-blue hover:underline">Privacy Policy</a>
                </label>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-cool-blue hover:bg-deep-purple text-white p-2 rounded-md transition-colors mt-4"
            >
              {mode === 'signup' ? "Create Account" : "Sign In"}
            </button>

            {/* Sign in/up toggle */}
            <p className="text-center text-sm mt-4">
              {mode === 'signup' ? "Already have an account?" : "Don't have an account?"}{" "}
              <button
                type="button"
                onClick={() => setMode(mode === 'signup' ? 'signin' : 'signup')}
                className="text-cool-blue hover:underline"
              >
                {mode === 'signup' ? "Sign In" : "Sign Up"}
              </button>
            </p>
          </form>
          
          <div className="mt-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
                  Or continue with
                </span>
              </div>
            </div>
            
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="w-full inline-flex justify-center py-1.5 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.917 16.083c-2.258 0-4.083-1.825-4.083-4.083s1.825-4.083 4.083-4.083c1.103 0 2.024.402 2.735 1.067l-1.107 1.068c-.304-.292-.834-.63-1.628-.63-1.394 0-2.531 1.155-2.531 2.579 0 1.424 1.138 2.579 2.531 2.579 1.616 0 2.224-1.162 2.316-1.762h-2.316v-1.4h3.855c.036.204.064.408.064.677.001 2.332-1.563 3.988-3.919 3.988zm9.917-3.5h-1.75v1.75h-1.167v-1.75h-1.75v-1.166h1.75v-1.75h1.167v1.75h1.75v1.166z"></path>
                </svg>
                <span className="ml-2">Google</span>
              </button>
              
              <button
                type="button"
                className="w-full inline-flex justify-center py-1.5 px-4 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <svg className="w-4 h-4" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.605-3.369-1.343-3.369-1.343-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.841-2.337 4.687-4.565 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                </svg>
                <span className="ml-2">GitHub</span>
              </button>
            </div>
          </div>
        </div>
        
        {/* Right column: Image and benefits */}
        <div className="hidden md:block w-1/2 relative overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image 
              src="/images/logos/logo1.png" 
              alt="Hermira Logo" 
              fill
              className="object-contain p-8"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-cool-blue/90 to-deep-purple/90 dark:from-cool-blue/95 dark:to-deep-purple/95 z-10"></div>
          </div>
          
          <div className="h-full flex flex-col justify-between relative z-20 p-8 text-white">
            <div>
              <h3 className="text-xl font-bold mb-4">Unlock the power of data analytics</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Real-time dashboards and analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">AI-powered insights and predictions</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Custom reports and visualizations</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-white mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm">Enterprise-grade security and compliance</span>
                </li>
              </ul>
            </div>
            
            <div className="mt-auto">
              <blockquote className="italic text-white/90 border-l-4 border-white/50 pl-3 text-sm">
                "Hermira has transformed how we analyze and utilize our data. The insights we've gained have been instrumental to our growth."
              </blockquote>
              <div className="mt-3 flex items-center">
                <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-sm font-bold">JD</span>
                </div>
                <div className="ml-2">
                  <p className="text-xs font-medium">Jane Doe</p>
                  <p className="text-xs opacity-75">CEO, TechCorp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp; 