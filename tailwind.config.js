/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgImage':'url(../assets/pompombg.jpg)'
      },
      fontFamily: {
        mainFont: ['mainFont']
      },
      colors: {
        'textBg':'rgba(247, 234, 179, 1)',
        'getName':'rgb(120,134,107)',
        'randomBtn':'rgb(124,144,156)',
        'divColorFill':'rgba(229, 191, 172, 1)',
        'divColorBorder':'rgba(94, 0, 0, 1)'
      }
    },
  },
  plugins: [],
}

