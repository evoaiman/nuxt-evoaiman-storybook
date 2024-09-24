/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const { mergeConfig } = require('vite');
const vue = require('@vitejs/plugin-vue');

const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx|vue)", // Add support for .vue stories
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
    // Add the vue plugin to Vite's config
    return mergeConfig(config, {
      plugins: [vue()],
    });
  },
};

export default config;
