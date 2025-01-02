
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs':'420px',
        'sm':'640px',
        'md':'768px',
        'lg':'1024px',
      },
      colors: {
        "primary": "#457B9D",
      },
      fontFamily:{
        "main": "Sora",
      },
      boxShadow:{
        cardShadow: "0px 2px 5px 2px #00000030"
      },
      fontSize:{
        "nr": "16px"
      }
    },
  },
  plugins: [],
};
export default config;