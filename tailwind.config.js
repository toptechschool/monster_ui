// tailwind.config.js
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        spring: {
          extend: "light",
          colors: {
            background: "#efeee5",
            foreground: "#554839",
            primary: {
              50: "#f5f4ee",
              100: "#efeee5",
              200: "#dfdcc9",
              300: "#cac4a7",
              400: "#b4a883",
              500: "#a5946a",
              600: "#98835e",
              700: "#7f6b4f",
              800: "#685844",
              900: "#554839",
              950: "#2d261d",
              DEFAULT: "#554839",
              foreground: "#ffffff",
            },
            success: {
              100: "#DCFCD6",
              200: "#B2F9AE",
              300: "#82ED86",
              400: "#60DB70",
              500: "#31C453",
              600: "#23A84F",
              700: "#188D49",
              800: "#0F7142",
              900: "#095E3D",
              DEFAULT: "#0F7142",
              foreground: "#ffffff",
            },
            warning: {
              100: "#FDF9CC",
              200: "#FBF29A",
              300: "#F5E567",
              400: "#ECD541",
              500: "#E0C008",
              600: "#C0A205",
              700: "#A18504",
              800: "#816902",
              900: "#6B5501",
              DEFAULT: "#816902",
              foreground: "#ffffff",
            },
            danger: {
              100: "#FFDAD6",
              200: "#FFAEAE",
              300: "#FF8592",
              400: "#FF6785",
              500: "#FF3571",
              600: "#DB266E",
              700: "#B71A67",
              800: "#93105E",
              900: "#7A0A57",
              DEFAULT: "#93105E",
              foreground: "#ffffff",
            },
            focus: "#F182F6",
          },
        },
      },
    }),
  ],
};
