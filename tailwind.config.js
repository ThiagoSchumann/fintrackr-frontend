// tailwind.config.js
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        dark: {
          DEFAULT: "#1C1C1E",
          lighter: "#2C2C2E",
          lightest: "#3D3D3E",
          pale: "#4D4D4E",
        },
        gray: {
          DEFAULT: "#EDF3FB",
          dark: "#4B5563",
          light: "#9CA3AF",
          lightest: "#F3F4F6",
        },
        primary: "#64B464",
        accent: "#4F894F",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
        hover: "#425163",
      },
    },
  },
  plugins: [],
};
