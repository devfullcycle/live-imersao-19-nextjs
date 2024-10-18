import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1c1c1c",
        secondary: "#454545",
      },
      textColor: {
        primary: "#f5f5f5",
        secondary: "#6f6f6f",
      },
      borderColor: {
        secondary: "#454545"
      },
    },
  },
  plugins: [],
};
export default config;
