const colors = require("tailwindcss/colors");
module.exports = {
  content: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        montserrat:
          'Montserrat, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";',
        mono: 'Source Code Pro, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      },
      colors: {
        cyan: colors.cyan,
        orange: {
          50: "#FDFAF7",
          100: "#FCEEE2",
          200: "#F9DBC1",
          300: "#F7BD8D",
          400: "#F6904D",
          500: "#FD6400",
          600: "#E05900",
          700: "#C75000",
          800: "#9E3F00",
          900: "#803300",
        },
        primary: {
          50: "#FFFCF3",
          100: "#FFD761",
          200: "#FFF3BF",
          300: "#FFEBA0",
          400: "#FFE488",
          500: "#FFD761",
          600: "#DBB146",
          700: "#B78E30",
          800: "#936D1E",
          900: "#7A5512",
        },
        secondary: {
          50: "#F6F1FD",
          100: "#E7DBFA",
          200: "#D0BAF2",
          300: "#B186EA",
          400: "#8A57DB",
          500: "#6436B0",
          600: "#4D1E9B",
          700: "#3E1A74",
          800: "#2F1457",
          900: "#28114B",
        },
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/aspect-ratio")],
};
