/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-links': '#3b82f6',
            maxWidth: '100%',
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
