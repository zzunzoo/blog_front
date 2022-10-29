/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bg1: "url('/assets/img/1.gif')",
        bg2: "url('/assets/img/2.gif')",
      },
    },
  },
  plugins: [],
};
