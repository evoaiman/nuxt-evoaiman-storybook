/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const { mergeConfig } = require('vite');
const vue = require('@vitejs/plugin-vue');
const path = require('path'); // For resolving Tailwind paths

const config = {
  stories: [
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/vue3-vite",
    options: {},
  },
  async viteFinal(config) {
    // Add the vue plugin and ensure PostCSS is processing Tailwind
    return mergeConfig(config, {
      plugins: [vue()],
      resolve: {
        alias: {
          '@components': path.resolve(__dirname, '../src/components'),
          '@assets': path.resolve(__dirname, '../src/assets'),
          // Add more aliases as needed
        },
      },
      css: {
        postcss: {
          plugins: [
            require('tailwindcss')(path.resolve(__dirname, '../tailwind.config.js')),
            require('autoprefixer')(),
          ],
        },
      },
    });
  },
};

export default config;
