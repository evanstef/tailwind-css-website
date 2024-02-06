/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: ['index.html'],
  theme: {
    container : {
      center: true,
      padding: '16px',
    },
    extend: { 
      fontFamily : {
      poppin : ['Poppins']
    },
      colors : {
        primary : '#2dd4bf',
        dark : '#1e293b',
        secondary : '#64748b',
        modeDarkP : '#94a3b8'
      },
      screens: {
        '2xl' : '1320px',
      }
  },
},
  plugins: [],
}

