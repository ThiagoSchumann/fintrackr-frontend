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
          DEFAULT: "#131920",
          lighter: "#131920",
          lightest: "#131920",
        },
        gray: {
          DEFAULT: "#6B7280",
          dark: "#4B5563",
          light: "#9CA3AF",
          lightest: "#F3F4F6", // Adding lightest gray color
        },
        primary: "#4F46E5",
        accent: "#6366F1",
        success: "#10B981",
        warning: "#F59E0B",
        error: "#EF4444",
      },
    },
  },
  plugins: [],
};
