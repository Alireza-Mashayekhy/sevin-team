/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neutra-1": {
          25: "#E8E9EA",
          50: "#D1D2D4",
          100: "#BABCBF",
          200: "#A3A6A9",
          300: "#8C9094",
          400: "#75797E",
          500: "#5E6369",
          600: "#474D53",
          700: "#30373E",
          800: "#192028",
          900: "#020A13",
        },
        "neutra-2": {
          25: "#F5F6F7",
          50: "#EEEFF0",
          100: "#DCDEE2",
          200: "#C9CDD2",
          300: "#A8ADB6",
          400: "#8F95A1",
          500: "#6F7786",
          600: "#525C6C",
          700: "#3E4859",
          800: "#2B3444",
          900: "#171D29",
        },
        success: {
          25: "#E2FCEB",
          50: "#C9FBDA",
          100: "#82F5AA",
          200: "#48E780",
          300: "#21C65A",
          400: "#16AB4A",
          500: "#0D8939",
          600: "#096A2B",
          700: "#075322",
          800: "#053C18",
          900: "#04230F",
        },
        error: {
          25: "#FDF3F4",
          50: "#FDEBED",
          100: "#FAD4D8",
          200: "#F7BEC4",
          300: "#F2919B",
          400: "#ED6B79",
          500: "#E4263B",
          600: "#B51526",
          700: "#90101E",
          800: "#6B0C17",
          900: "#3F070D",
        },
        warning: {
          25: "#FEF5EC",
          50: "#FDECD9",
          100: "#FBD8B3",
          200: "#F9C287",
          300: "#F59632",
          400: "#E67700",
          500: "#B85E00",
          600: "#8E4900",
          700: "#703900",
          800: "#512900",
          900: "#2F1800",
        },
      },
    },
  },
  plugins: [],
};
