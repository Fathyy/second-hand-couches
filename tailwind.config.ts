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

      backgroundImage: {
        testimonialsImage: "url('/assets/potential-hero-image.jpg')",
        'gradient-rust-earthy': 'linear-gradient(90deg, #D97706 0%, #C7622F 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
