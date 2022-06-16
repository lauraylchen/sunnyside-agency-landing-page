/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        'softRed': '#FE7867',
        'yellow': '#FAD400',
        'darkDesatCyan': '#25564B',
        'darkBlue': '#19536B',
        'darkModCyan': '#458C7E',
        'cyan': '#91D4C6',
        'veryDarkDesatBlue': '#23303E',
        'veryDarkGrayBlue': '#5A636C',
        'darkGrayBlue': '#818498',
        'grayBlue': '#A7ABAE',
        'white': '#FFFFFF'
      },
      fontFamily: {
        'fraunces': ['Fraunces', 'serif']
      },
      backgroundImage: {
        'hero-mobile': "url('/src/img/mobile/image-header.jpg')",
        'hero-desktop': "url('/src/img/desktop/image-header.jpg')",
      },
      spacing: {
        '80%': '80vw',
      },
      height: {
        '45%': '45vh',
        '60%': '60vh'
      }
    },
  },
  plugins: [require("daisyui")],
}
