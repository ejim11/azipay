/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,tsx}"],
  theme: {
    colors: {
      "color-green": "rgba(17, 69, 59, 1)",
      "color-light-green": "#F0F7EB",
      "color-white": "rgba(255, 255, 255, 1)",
      "color-grey": "rgba(242, 241, 241, 1)",
      "color-gold": "rgba(180, 165, 114, 1)",
      "color-red": "rgba(234, 78, 75, 1)",
      "color-black": {
        1: "rgba(81, 82, 81, 1)",
        2: "rgba(41, 42, 41, 1)",
      },
    },
    extend: {
      background: {
        "info-data":
          "radial-gradient(50% 50.00% at 50% 50.00%, rgba(217, 235, 205, 0.14) 0%, rgba(217, 235, 205, 0.03) 100%), #11453B",
      },
    },
  },
  plugins: [],
};
