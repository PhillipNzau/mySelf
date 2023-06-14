/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        heading: ['WhyteInktrap-Bold', 'sans-serif'],
        poppins: ['Poppins-Regular', 'sans-serif'],
        poppinsBold: ['Poppins-SemiBold', 'sans-serif']

      }
    },
  },
 
  plugins: [
    require("daisyui"),
  ],
}

