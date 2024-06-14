/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  staticDirs: ['../stories/assets/'],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@whitespace/storybook-addon-html",
    "@storybook/addon-themes",
    "@storybook/addon-mdx-gfm",
    "@storybook/addon-docs"
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {},
  },
  docs: {},
};
export default config;
