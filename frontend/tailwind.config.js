module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    height:{
      'fit-content': 'fit-content(20em)'
    }
  },
  },
  plugins: [ require('tailwindcss-filters')],
  darkMode: 'class',
}
