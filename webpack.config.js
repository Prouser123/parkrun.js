const webpack = require("webpack");

const path = require("path");

module.exports = {
  entry: [
    "./src/polyfills/btoa.js",
    "fast-text-encoding",
    "regenerator-runtime",
    "./src/classes/parkrun.js",
  ],
  output: {
    filename: "parkrun.browser.min.js",
    path: path.resolve(__dirname, "dist"),
    library: "Parkrun",
    libraryTarget: "umd",
  },
  // Loaders
  module: {
    rules: [
      // JavaScript/JSX Files (via Babel Loader)
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              [
                "@babel/preset-env",
                {
                  targets: "> 1%, not IE 11, not dead",
                  useBuiltIns: "entry",
                  corejs: "3.6.4",
                  //"modules": "umd"
                },
              ],
            ],
            plugins: ["@babel/plugin-proposal-object-rest-spread"],
          },
        },
      },
    ],
  },
  // Plugins
  plugins: [new webpack.EnvironmentPlugin({ PLATFORM: "WEB" })],
};
