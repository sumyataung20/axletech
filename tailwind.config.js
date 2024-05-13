/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "200px", // Extra small devices
        sm: "640px", // Small devices
        md: "768px", // Medium devices
        lg: "1024px", // Large devices
        xl: "1280px", // Extra large devices
      },
    },
    colors: {
      textDefault: "#ffffff",
      textSecondary: "#54C7EC",
      textSecondary1: "#e1f4fc",
      textSecondary3: "#5ccef2",
      primary: "#194276",
      secondary: "#061B35",
      black: "#000",
      fatimes: "#919191",
      borderColor: "rgba(125, 125, 125, 0.4)",
      background1: "rgba(5, 26, 53, 0.94)",
      background2: "#051A35",
      background3: "#001024",
      transparent:"rgba(0,0,0,0)",
      navHover: "rgba(208, 222, 245)",
      aboutus: "#051A35",
      aboutustext:"#D9D9D9"
    },
  },

  plugins: [],
};
