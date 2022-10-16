/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ["Major Mono Display"],
        sans: ["Montserrat", "helvetica", "arial", "sans-serif"],
        serif: ["Lora"]
      }
    },
  },
  plugins: [],
}