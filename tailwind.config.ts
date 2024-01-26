import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(145deg, #1678F2 3.73%, #65A8FB 132.69%)",
        "button-gradient":
          "linear-gradient(96deg, #3A8EF6 -10.84%, #6F3AFA 196.74%)",
        "custom-shadow": "0px 24px 32px -3px rgba(3, 9, 50, 0.04)",
      },
      borderRadius: {
        "custom": "32px",
      },
      padding: {
        "testimomial_padding": "18px 28px",
      },
      colors: {
        "green" : "#00BFA5"
      }
    },
  },
  plugins: [],
};

export default config;
