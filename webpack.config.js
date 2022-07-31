const path = require("path");
const webpack = require("webpack");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
    modules: ["node_modules", path.resolve("src")],
  },
  plugins: [
    new CopyPlugin({
        patterns: [
          { from: "public", to: "." },
        ],
        options: {
          concurrency: 100,
        },
      }),

    new webpack.ProvidePlugin({
      React: "react",
    }),

    new HtmlWebPackPlugin({
      template: path.resolve(__dirname, "./src/index.html"),
      filename: "index.html",
    }),
  ],
  devServer: {
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 3000,
  },
  devtool: "source-map",
};
