/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        red: "var(--color-red)",
        blue: "var(--color-blue)",
        brown: "var(--color-brown)",
      },
    },
  },
  plugins: [],
};
