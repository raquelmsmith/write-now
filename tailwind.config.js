module.exports = {
  theme: {
    fontFamily: {
      display: ['Phosphate Inline', 'sans-serif'],
      'display-solid': ['Phosphate Solid', 'sans-serif'],
      body: ['Graphik', 'sans-serif']
    },
    colors: {
      white: '#fff',
      black: '#000',
      pink: '#ff2c85',
      'pink-transparent': 'rgba(255, 44, 133, 0.6)',
      purple: '#a74cc9',
      'purple-transparent': 'rgba(167, 76, 201, 0.6)',
      blue: '#2879d8'
    },
    extend: {
      opacity: {
        '60': '0.6'
      }
    }
  },
  variants: {
    borderWidth: ['responsive', 'hover']
  },
  plugins: []
};
