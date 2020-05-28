const path = require("path");
module.exports = ({ config }) => {
  addons: [
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {},
        sourceLoaderOptions: null,
      },
    },
  ],
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader")
      },
      {
        loader: require.resolve('react-docgen-typescript-loader'),
      },
    ]
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
