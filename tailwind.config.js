/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "rgb(58, 150, 255)",
        darkBlue: "rgb(15, 30, 46)",
        darkBlue2: "rgb(9, 19, 29)",
      },
      colors: {
        primary: "rgb(58, 150, 255)",
      },
    },
  },
  plugins: [],
};
