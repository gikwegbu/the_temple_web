module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'linear-gradient': {
          100: '#526DFF',
          DEFAULT: '#E6007E',
          500: '#4299e1',
          700: '#2b6cb0'
        },
        'primary-color': {
          100: '#301E5E',
          200: '#F2994A',
          DEFAULT: '#140432'
        },
        'secondary-color': {
          DEFAULT: '#E6007E'
        },
        'golden-color': {
          DEFAULT: '#DF7250',
          200: '#FFC700'
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
