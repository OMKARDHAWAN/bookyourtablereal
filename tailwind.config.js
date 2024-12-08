/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold:"#B26F41",
        creame:"#FFE09E",
        peachPuff:"#FEEAD8",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'xs':'375px',
        'sm': '425px',    // Small screens
        'md': '768px',    // Medium screens (tablets)
        'lg': '1024px',   // Large screens (desktops)
        'xl': '1440px',   // Extra large screens (large desktops)
        '2xl': '1600px',  // Custom extra-large screens (optional)
        // Custom breakpoints
        'xxl': '1920px',  // Custom breakpoint for larger screens
      },
    },
  },
  plugins: [],
};
