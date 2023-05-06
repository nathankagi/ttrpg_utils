/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        palette1: "#3b3c3e",
        palette2: "#8C877D",
        palette3: "#BFB3A4",
        palette4: "#98331F",
        palette5: "#0D0D0D",
      },
    },
  },
  plugins: [],
};
