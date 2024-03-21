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
       },
       keyframes: {
         gradientChange: {
           '0%': { 'background-position': '0%' },
           '50%': { 'background-position': '100%' },
           '100%': { 'background-position': '0%' },
         },
       },
     },
  },
  plugins: [],
 }