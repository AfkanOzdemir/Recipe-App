/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: "Montserrat",
      },
      fontSize: {
        "xs": ".75rem",
        "sm": ".875rem",
        "tiny": ".875rem",
        "base": "1rem",
        "lg": "1.125rem",
        "xl": "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
    },
    colors : {
      "Transparent":"transparent",
      "white": "#ffff",
      "BrandColor": "#348756",
      "SecondBrandColor": "#2D2D2D",
      "ThirdBrandColor": "#F5F5F5",
      "BackgroundColor": "#35D498"
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
