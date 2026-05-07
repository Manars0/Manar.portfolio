/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#F7F7F5',
        surface: '#FEFEFC',
        text: '#111111',
        muted: '#6B6B6B',
        accent: '#E85D2A',
        border: '#E4E2DA',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(17, 17, 17, 0.08)',
      },
      backdropBlur: {
        soft: '16px',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
