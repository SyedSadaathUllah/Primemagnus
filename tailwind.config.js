/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Cormorant Garamond"', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        evergreen: {
          DEFAULT: '#0F3D2E',
          light: '#185440',
          dark: '#0a291f',
        },
        gold: {
          DEFAULT: '#C9A24D',
          light: '#d8b566',
          dark: '#b38d38',
        },
        offwhite: '#F7F6F2',
        charcoal: {
          DEFAULT: '#1F2933',
          light: '#323f4b',
          muted: '#52606d',
        },
      },
      boxShadow: {
        'soft': '0 10px 30px -5px rgba(15, 61, 46, 0.08)',
        'elevated': '0 20px 40px -10px rgba(15, 61, 46, 0.12)',
      }
    },
  },
  plugins: [],
}

