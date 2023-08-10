/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'primary': ['Poppins']
      },

      fontWeight: {
        hairline: 100,
        normal: 600,
        bold: 700,
        extraBold: 800,
      },
      
    },

    colors: {
      primary: '#3A3845',
      secondary: '#F7CCAC',
      primaryx: "#826F66",
      secondaryx: '#C69B7B'
    }
  },
  plugins: [],
}