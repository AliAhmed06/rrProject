/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '#040404',
      'white': '#ffffff',
      'gray1': '#c1c1c1',
      'gray2': '#7a7a7a',
      'red': '#d33131',
      'golden': '#f2b600',
      'first': '#a18205',
      'second': '#b18e05',
      'bermuda': '#78dcca',
    },
    screens: {
      'xs': '380px',
      'sm': '520px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
  plugins: [],
}
