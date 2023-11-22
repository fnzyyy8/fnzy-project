import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FAFF73",
        dark: "#17170A",
        darkgrey: "#BABABA",
        realgray: "#F2F2F2",
      },
    },
  },
  plugins: [],
};
export default config;
