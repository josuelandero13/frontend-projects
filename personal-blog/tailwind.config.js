/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'purple-heart': {
          50: 'hsl(var(--purple-heart-50) / <alpha-value>)',
          100: 'hsl(var(--purple-heart-100) / <alpha-value>)',
          200: 'hsl(var(--purple-heart-200) / <alpha-value>)',
          300: 'hsl(var(--purple-heart-300) / <alpha-value>)',
          400: 'hsl(var(--purple-heart-400) / <alpha-value>)',
          500: 'hsl(var(--purple-heart-500) / <alpha-value>)',
          600: 'hsl(var(--purple-heart-600) / <alpha-value>)',
          700: 'hsl(var(--purple-heart-700) / <alpha-value>)',
          800: 'hsl(var(--purple-heart-800) / <alpha-value>)',
          900: 'hsl(var(--purple-heart-900) / <alpha-value>)',
          950: 'hsl(var(--purple-heart-950) / <alpha-value>)',
        },
      },
    },
  },
  plugins: [],
};
