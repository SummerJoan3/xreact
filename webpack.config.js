const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.export = {
  entry: "./src/index.js",
  module: {
    loaders: [
      {
        test: /.js$/,
        include: "./src/",
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: "./dist/index.html",
    // }),
  ],
  mode: "development",
  devServer: {
    hot: true,
    publicPath: "/dist",
  },
};
