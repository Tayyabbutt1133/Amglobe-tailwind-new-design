export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontfamily: {
        Jakarta: ["Plus Jakarta Sans", 'sans-serif']
      }, 
      backgroundImage: {
        'nav-back': "url('../assets/Images/mainbg.svg')",
      },
      screens: {
        'xs': '430px',
      },
    },
  },
  plugins: [],
}