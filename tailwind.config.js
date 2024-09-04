const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Adjust the paths to include all your component and page files
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        'sm': '576px',
        'md': '1280px',
        'lg': '1440px',
        'xl': '1900px',
      },

      fontFamily: {
        OldSTT: ['Old Standard TT', 'serif'],
      },

      colors: {
        // Define your color variables here
        textColorPrimary: '#351410',
        textColorSecondary: '#3F3225',
        textColorTertiary:  '#483E37',
        backgroundColorPrimary: '#ECE9D8',
        backgroundColorSecondary: '#D9D1BB',
        backgroundColorTertiary: '#351410',
        backgroundColorQuaternary: '#F6F6EB',
      },

      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [
    addVariablesForColors,
  ],
};

// Plugin to add Tailwind color variables
function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}