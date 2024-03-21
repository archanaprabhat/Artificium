// tailwind.config.js
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
        screens: {
          'xxs':'485px',
          'xs':'539px',
          'tablet': '640px',
          // => @media (min-width: 640px) { ... }

          'sm':'829px',
 
          'laptop': '1024px',
          // => @media (min-width: 1024px) { ... }
 
          'desktop': '1280px',
          // => @media (min-width: 1280px) { ... }
        },
        animation: {
          'gradient-change': 'gradientChange 4s ease infinite',
          'typing': 'typing 3.5s steps(40, end) infinite',
        },
        keyframes: {
          gradientChange: {
            '0%': { 'background-position': '0%' },
            '50%': { 'background-position': '100%' },
            '100%': { 'background-position': '0%' },
          },
          typing: {
            '0%': { width: '0%' },
            '100%': { width: '100%' },
          },
        },
      },
  },
  plugins: [],
 }