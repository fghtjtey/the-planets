/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#FFFFFF",
      black: "#000",
      primary: "#070724",
      darkGray: "#38384F",
      lightGray: "#838391",
      mercury: "#419EBB",
      venus: "#EDA249",
      earth: "#6f2ed6",
      mars: "D14C32",
      jupiter: "#D83A34",
      saturan: "#CD5120",
      urans: "#1ec2a4",
      neptun: "#2d68f0",
      white20: "rgba(255, 255, 255, 0.2)",

  },
  fontFamily: {
    spartan: ['League Spartan Variable', "Arial", "sans-serif"],
    antonio: ['Antonio Variable', "Arial", "sans-serif"],
  },

  extend: {
    fontSize: {
      "80": "5rem",
      "40": "2.5rem"
    },
  },
  },
  plugins: [],
}