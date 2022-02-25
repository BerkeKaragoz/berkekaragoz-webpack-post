const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

ENTRY_PATH = path.resolve(__dirname, "src/index");
DIST_PATH = path.resolve(__dirname, "dist");
PUBLIC_PATH = path.resolve(__dirname, "public");

module.exports = {
  mode: "development", // or production
  entry: {
    // remember that we deleted the main in package.json?
    // this is where the project starts
    main: ENTRY_PATH,
  },
  output: {
    // this is where the bundled packages go
    path: DIST_PATH,
    // [name] is the name of the file and
    // [contenthash] is the hash of the bundle
    filename: "[name].[contenthash].js",
    clean: true, // remove existing previous bundles
    assetModuleFilename: "[name]-[contenthash][ext]",
  },
  module: {
    rules: [
      { test: /\.css$/, use: ["style-loader", "css-loader"] }, // have to be inorder
      { test: /\.(jpg|jpeg|png|svg|ico|webp|gif)$/, type: "asset/resource" },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  resolve: {
    // works like autocomplete for imports
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", // output
      // the one which we have created
      template: path.resolve(__dirname, "src/index.html"),
    }),
    new CopyPlugin({
      patterns: [{ from: PUBLIC_PATH, to: DIST_PATH }],
    }),
  ],
  devtool: "inline-source-map",
  devServer: {
    static: DIST_PATH,
    hot: true, // hot reload
  },
};
