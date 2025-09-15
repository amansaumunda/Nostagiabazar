export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: "#ff00ff",
          cyan: "#00ffff",
          purple: "#a020f0",
        },
      },
      fontFamily: {
        retro: ['"Press Start 2P"', "cursive"],
      },
    },
  },
  plugins: [],
}
