const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "public/dist")
  },
  resolve: {
    extensions: [".ts", ".js", ".json"]
  },
  module: {
    rules: [
        {
          test: /\.ts$/,
          loader: "awesome-typescript-loader"
        }
      ]
  }
};
