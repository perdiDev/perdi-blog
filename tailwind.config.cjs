/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
	fontFamily: {
		sans: ["Loto", 'sans-serif'],
		mono: ["Roboto mono", "monospace"]
	},
    extend: {
      colors: {
        sky: {
          50: "#E7E7EF",
          100: "#B8B9D6",
          200: "#8F91BD",
          300: "#6B6FA4",
          400: "#4C518B",
          500: "#323971",
          600: "#1E2558",
          700: "#0F163F",
          800: "#050B2C",
          900: "#000519",
          950: "#00010C",
        },
      },
    },
  },
  plugins: [],
};
