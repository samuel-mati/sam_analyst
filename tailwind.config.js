/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        space: ['var(--font-space-grotesk)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        'teal-green': '#178582',   // Teal Green
        'deep-purple': '#512393',  // Deep Purple
        'cool-blue': '#068DEA',    // Cool Blue for main CTA
        'accent': '#4ECDC4', // Lighter teal accent
       
      }
    },
  },
  plugins: [],
} 