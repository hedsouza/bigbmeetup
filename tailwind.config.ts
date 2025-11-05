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
        // Primary brand colors
        primary: {
          maroon: "#8A1538", // Qatar Maroon
          blue: "#003366", // Deep Blue
          sand: "#EED6A0", // Warm Sand
          green: "#008060", // Emerald Green
        },
        // Pillar colors
        pillars: {
          sports: "#FF6F3C", // Coral Orange
          art: "#7B4BA0", // Royal Purple
          sustainability: "#008060", // Emerald Green
          ability: "#005C99", // Deep Blue
          animal: "#BFA48E", // Warm Taupe
        },
        // Neutral colors
        neutral: {
          offWhite: "#F7F7F7",
          charcoal: "#2C2C2C",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        subheading: ["var(--font-nunito-sans)", "sans-serif"],
        body: ["var(--font-open-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

