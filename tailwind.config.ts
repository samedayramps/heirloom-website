import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "baby-powder": "#faf9f6",
        dun: "#D5C6AD",
        feldgrau: "#3a4f41",
        beaver: "#A3876B",
        jet: "#2D2D2D",
      },
    },
  },
  plugins: [
    typography,
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3a4f41", // feldgrau
          "primary-content": "#faf9f6", // baby-powder
          secondary: "#A3876B", // beaver
          "secondary-content": "#faf9f6", // baby-powder
          accent: "#D5C6AD", // dun
          "accent-content": "#2D2D2D", // jet
          neutral: "#2D2D2D", // jet
          "neutral-content": "#faf9f6", // baby-powder
          "base-100": "#faf9f6", // baby-powder
          "base-200": "#D5C6AD", // dun
          "base-300": "#A3876B", // beaver
          "base-content": "#2D2D2D", // jet
          info: "#2563EB",
          "info-content": "#d2e2ff",
          success: "#16A34A",
          "success-content": "#000a02",
          warning: "#D97706",
          "warning-content": "#110500",
          error: "#DC2626",
          "error-content": "#ffd9d4",
        },
      },
      "dark",
    ],
    darkTheme: "dark",
  },
};

export default config;
