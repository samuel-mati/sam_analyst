'use client';

import { useTheme } from '@/context/ThemeContext';
import { motion } from 'framer-motion';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const cycleTheme = () => {
    // Cycle through the three themes: light -> dark -> system -> light
    if (theme === 'light') {
      setTheme('dark');
    } else if (theme === 'dark') {
      setTheme('system');
    } else {
      setTheme('light');
    }
  };

  // Determine the tooltip text based on current theme
  const getTooltipText = () => {
    switch(theme) {
      case 'light':
        return 'Currently: Light mode - Click to switch to Dark mode';
      case 'dark':
        return 'Currently: Dark mode - Click to switch to System mode';
      case 'system':
        return 'Currently: System mode - Click to switch to Light mode';
      default:
        return 'Toggle theme';
    }
  };

  // Always use the moon icon for simplicity and subtlety
  return (
    <div className="relative group">
      <motion.button
        onClick={cycleTheme}
        className="text-gray-400 hover:text-gray-600 dark:text-gray-300 dark:hover:text-white focus:outline-none ml-1 relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle theme"
        title={getTooltipText()}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-4 h-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        
        {/* Small indicator dot showing current theme */}
        <span className={`absolute -top-1 -right-1 w-2 h-2 rounded-full
          ${theme === 'light' ? 'bg-theme-light' : 
            theme === 'dark' ? 'bg-theme-dark' : 
            'bg-theme-system'}`}
        />
      </motion.button>
      
      {/* Tooltip that appears on hover */}
      <div className="absolute hidden group-hover:block right-0 top-full mt-2 w-48 px-2 py-1 bg-white dark:bg-black text-xs rounded shadow-lg text-black dark:text-white z-50">
        {getTooltipText()}
      </div>
    </div>
  );
} 