/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/container-queries"),
    function ( {addComponents} ) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          margin: "auto",

          "@screen xl": {
            paddingLeft: "7rem",
            paddingRight: "7rem",
            maxWidth: "1440px",
            margin: "auto",
          },
          "@screen 2xl": {
            // paddingLeft: "7rem",
            // paddingRight: "7rem",
            maxWidth: "1536px",
            margin: "auto",
          },
        },
      })
    },
  ],  
}