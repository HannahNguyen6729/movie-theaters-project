/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/App.js',
    './src/pages/Checkout/Checkout.jsx',
    './src/pages/Login/Login.jsx',
    './src/templates/UserTemplate/UserTemplate.jsx',
    './src/pages/MovieDetail/MovieDetail.jsx',
    './src/pages/Home/HomeMenu/HomeMenu.jsx',
    './src/components/ReactSlick/MultipleRowSlick.jsx',
    './src/pages/Home/Home.jsx',
    './src/templates/HomeTemplate/Layout/Header/Header.jsx',
    './src/templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel.jsx',
    './src/pages/Home/HomeCard/HomeCard.jsx',
    './src/pages/Home/HomeMenu/HomeMenu.jsx',
    './src/templates/HomeTemplate/Layout/Footer/Footer.jsx',


    './node_modules/tw-elements/dist/js/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
