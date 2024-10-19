/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--poppins)"],
      },
      colors: {
        "background-blue": "#1B1F24",
        "light-grey": "#D9D9D9",
        "dark-gray": "#737373",
        "salmon-pink": "#FF6F61",
        "dark-salmon": "#99433A",
      },
    },
  },
  plugins: [],
};
