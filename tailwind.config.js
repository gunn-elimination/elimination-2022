module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        gradient: "gradient 1s cubic-bezier(.36,.07,.19,.97) infinite",
        "gradient-slow": "gradient 3s linear infinite",
      },
      keyframes: {
        gradient: {
          from: {
            "background-size": "200%",
          },
          to: {
            "background-position": "200% center",
            "background-size": "200%",
          },
        },
      },
    },
  },
  plugins: [],
};
