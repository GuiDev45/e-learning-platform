/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-p1)",
        secondary: "var(--color-p2)",
        tertiary: "var(--color-p3)",
        quartenary: "var(--color-p4)",
        quintary: "var(--color-p5)",
      },
    },
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
  },
  plugins: [],
};
