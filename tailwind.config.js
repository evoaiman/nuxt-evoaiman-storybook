/** @type {import('tailwindcss').Config} */
module.exports = {
  mode:'jit',
  content: [
    './components/**/*.{vue,js}',
    './pages/**/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './stories/**/*.{vue,js,mdx}',
    './.nuxt/**/*.{vue,js}',
    './.storybook/*.{js,jsx,ts,tsx,vue}' // Ensure Storybook files are included
  ],
  safelist: [
    {
      pattern: /^text-/ // Safelist all `text-` classes
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

