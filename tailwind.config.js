/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'beauty_women': "url('assets/Back_ground.png')",
      
      }
    },
  },
  plugins: [ 
    require('flowbite/plugin'),
  ],
};
