const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'white': '#FFFFFF',
      'black': '#1A1A1C',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#5B616E',
      'gray-light': '#F5F6F7'
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.5rem',
      '5xl': '2.75rem',
      '6xl': '4rem',
      '7xl': '5rem',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.5xl'), color: '#1A1A1C', lineHeight: '46px', letterSpacing: '-0.035em' },
        'h2': { fontSize: '16px', color: '#1A1A1C' },
        'h3': { fontSize: theme('fontSize.tiny'), color: '#1A1A1C' },
        'h4': { fontSize: '22px', color: '#1A1A1C' },
        'h5': { fontSize: '20px', color: '#1A1A1C' },
        'h6': { fontSize: '14px', color: '#1A1A1C' },
        'p': { fontSize: theme('fontSize.lg'), color: '#1A1A1C' }
      })
    })
  ],
}
