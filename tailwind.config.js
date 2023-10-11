/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundColor: "#0A0A0A",
        textColor: "#e2e8f0",
        textColorMuted: "#8e9cb1",
      },
    },
  },
  plugins: [],
};
