const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/spec-sheet-generator.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "spec-sheet-generator.js",
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: "base64ImageData.js", to: "base64images" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
