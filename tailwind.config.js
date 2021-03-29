module.exports = {
  purge: {
    enabled: !process.env.ROLLUP_WATCH,
    mode: 'all',
    content: ['./public/index.html', './src/**/*.svelte'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'gray-lighter': '#E0E0E0',
        
      }
    },
   
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
