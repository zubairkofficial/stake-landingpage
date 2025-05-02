/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#121726",
        secondary: "#f2a93e",
        accent: "#10B981", // Green color for Stake
        dark: "#0f172a", // Dark blue for buttons and banner
        "dark-light": "#1e293b",
        light: "#f8fafc",
        "gray-light": "#f1f5f9",
      },
      fontFamily: {
        sans: [
          "Plus Jakarta Sans",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        jakarta: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 15px -3px rgba(0, 0, 0, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
