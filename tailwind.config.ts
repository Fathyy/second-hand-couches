import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-grey': '#E8ECE9',
        'medium-grey': '#818283',
        'rust-orange': '#D97706',
        'earthy-orange': '#C7622F',
        'dark-grey': '#393A47'
      },
    },
  },
  plugins: [],
} satisfies Config;
