module.exports = {
  darkMode: "class",
  purge: ["./src/**/*.tsx", "./public/index.html"],
  theme: {
    fontFamily: {
      sans: [
        "Inter",
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Roboto",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
      mono: ["Menlo", "Monaco", "Courier New", "monospace"],
    },
    fontSize: {
      tiny: "0.625rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    width: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      375: "375px",
      "1/6": "16%",
    }),

    colors: {
      white: "#fff",
      transparent: "transparent",
      primary: {
        50: "#F8FAFC",
        100: "#F1F5F9",
        200: "#E8EAED",
        300: "#CBD5E1",
        400: "#94A3B8",
        500: "#64748B",
        600: "#475569",
        700: "#334155",
        800: "#1E293B",
        900: "#0F172A",
      },
      secondary: { DEFAULT: "#55BCF6", "washed-out": "#5575e7" },
      accent: { DEFAULT: "#fd4d4d", hover: "#fd6868", disabled: "#f5bfbf" },
      black: "#000",
    },
    minWidth: {
      0: "0",
      full: "100%",
    },
    maxWidth: (theme, { breakpoints }) => ({
      none: "none",
      xs: "20rem",
      sm: "24rem",
      md: "28rem",
      lg: "32rem",
      xl: "36rem",
      "2xl": "42rem",
      "3xl": "48rem",
      "4xl": "56rem",
      "5xl": "64rem",
      "6xl": "72rem",
      full: "100%",
      ...breakpoints(theme("screens")),
    }),
    spacing: {
      0: "0px",
      0.5: "3px",
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "30px",
      6: "40px",
      7: "60px",
      8: "75px",
      9: "80px",
      "5l": "10rem",
      "n1/2": "-50%",
      24: "24px",
    },
    borderWidth: {
      none: "0px",
      default: "1px",
      2: "2px",
    },
    translate: (theme, { negative }) => ({
      ...theme("spacing"),
      ...negative(theme("spacing")),
      "-full": "-100%",
      "-1/2": "-50%",
      "1/2": "50%",
      "11/12": "91%",
      full: "100%",
    }),
    extend: {
      borderRadius: {
        // ...theme("spacing"),
        5: "5px",
        10: "10px",
      },
      outline: {
        "no-chrome": "none",
      },
    },
  },
  variants: {
    backgroundColor: ({ after }) => after(["disabled"]),
    textColor: ({ after }) => after(["disabled"]),
    scrollbar: ["rounded", "dark"],
    minWidth: ["responsive"],
  },
};
