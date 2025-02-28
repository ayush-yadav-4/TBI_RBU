/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          spacing: {
        '80': '20rem',
      },
      animation: {
        'scroll-left-right': 'scroll-left-right 10s linear infinite',
      },
      keyframes: {
        'scroll-left-right': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },

    },
  },
  plugins: [],
}

