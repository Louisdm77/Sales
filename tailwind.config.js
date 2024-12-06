/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    // extend: {
    //   animation: {
    //     "infinite-scroll": "infinite-scroll 30s linear infinite",
    //   },
    //   keyframes: {
    //     "infinite-scroll": {
    //       from: { transform: "translateX(0)" },
    //       to: { transform: "translateX(-100%)" },
    //     },
    //   },
    // },
  },
  plugins: [],
};
