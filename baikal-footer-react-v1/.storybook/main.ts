const path = require("path");

module.exports = {
  stories: ["../src/stories/**/*.stories.@(ts|tsx|js|jsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],
  framework: {
    name: "@storybook/react",
    options: {}
  },
  core: {
    builder: "webpack5",
  },
  typescript: {
    reactDocgen: false,
  },
  webpackFinal: async (config) => {
    // Добавление поддержки TypeScript с babel-loader, react-app preset и preset-typescript
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [
              require.resolve("babel-preset-react-app"),
              require.resolve("@babel/preset-typescript"),
            ],
          },
        },
      ],
      exclude: /node_modules/,
    });

    // Расширяем расширения, чтобы Webpack понимал .ts и .tsx
    config.resolve.extensions.push(".ts", ".tsx");

    return config;
  },
};
