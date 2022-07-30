const path = require("path");
const webpack = require("webpack");
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
    extensions: ['*', '.js', '.jsx'],
    modules: ["node_modules", path.resolve("src")]
  },
  plugins: [
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
  },
};
