/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#2ff9e2",

          "secondary": "#3b7505",

          "accent": "#5672ff",

          "neutral": "#1C2631",

          "base-100": "#F9FAFB",

          "info": "#4977C5",

          "success": "#42E0A6",

          "warning": "#9E8110",

          "error": "#EA7361",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
