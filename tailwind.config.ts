import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Primary Colors
        "soft-cyan": "hsl(174, 77%, 80%)",
        "strong-cyan": "hsl(174, 86%, 45%)",
        "light-grayish-red": "hsl(14, 92%, 95%)",
        "light-red": "hsl(15, 100%, 70%)",
        "pale-blue": "hsl(226, 100%, 87%)",
        // Neutral Colors
        white: "hsl(0, 0%, 100%)",
        "very-pale-blue": "hsl(230, 100%, 99%)",
        "light-grayish-blue": "hsl(224, 65%, 95%)",
        "grayish-blue": "hsl(225, 20%, 60%)",
        "dark-desaturated-blue": "hsl(227, 35%, 25%)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      fontSize: {
        body: "15px",
      },
      boxShadow: {
        custom1: "0 17px 17px 7px hsl(224, 65%, 95%)",
        custom2: "0 10px 10px 5px hsl(224, 65%, 95%)",
      },
    },
  },
  plugins: [],
};
export default config;
