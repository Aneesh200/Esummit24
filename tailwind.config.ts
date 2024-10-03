import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
      },
      fontSize: {
        '9xl': '8rem', // Example custom size
        '10xl': '9rem', // Larger size
        '11xl': '10rem',
        '15xl': '15rem', // Even larger size
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        coolGray: {
          DEFAULT: '#2E4C54',},
        mainBlue:{
          DEFAULT: '#092136'
        },
        lYellow:{
          DEFAULT:"#FBF4B3"
        },
      },
    },
  },
  plugins: [],
};
export default config;
