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
        palette1: "#545957",
        palette2: "#D9CDBF",
        palette3: "#A62F24",
        palette4: "#732922",
        palette5: "#0D0D0D",
      },
    },
  },
  plugins: [],
};
