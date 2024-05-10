
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], 

  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato', 'sans-serif']
      }
    }
  },

  plugins: [
    require('daisyui')
  ],

  daisyui: {
    themes: ['light', 'dark']
  }
}
