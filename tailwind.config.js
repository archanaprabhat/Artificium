// tailwind.config.js
export default {
  content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
     extend: {
       animation: {
         'gradient-change': 'gradientChange 4s ease infinite',
         'typing': 'typing 3.5s steps(40, end) infinite', // Add this line
       },
       keyframes: {
         gradientChange: {
           '0%': { 'background-position': '0%' },
           '50%': { 'background-position': '100%' },
           '100%': { 'background-position': '0%' },
         },
         typing: { // Add this block
           '0%': { width: '0%' },
           '100%': { width: '100%' },
         },
       },
     },
  },
  plugins: [],
 }