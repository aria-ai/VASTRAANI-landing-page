// Design tokens and theme configuration
export const theme = {
  colors: {
    burgundy: {
      primary: "#6b1d1d",
      secondary: "#8d2828",
      light: "#ab2e2e",
    },
    gold: {
      primary: "#d88b2f",
      secondary: "#f2c16b",
      light: "#f7d89d",
    },
    cream: {
      primary: "#f5f3eb",
      secondary: "#ebe6d6",
      dark: "#dfd7bb",
    },
  },

  spacing: {
    section: {
      sm: "3rem",
      md: "5rem",
      lg: "7rem",
      xl: "10rem",
    },
  },

  animation: {
    duration: {
      fast: 200,
      normal: 300,
      slow: 500,
    },
    easing: {
      smooth: [0.6, 0.05, 0.01, 0.9],
      spring: [0.175, 0.885, 0.32, 1.275],
    },
  },
};

export default theme;
