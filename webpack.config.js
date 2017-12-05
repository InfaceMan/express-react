var path = require("path");
var commonLoaders = [
  { test: /(\.jsx|\.js)$/, loader: "babel-loader" },
  { test: /\.png$/, loader: "url-loader" },
  { test: /\.jpg$/, loader: "file-loader" },
];
module.exports = [
    {
    entry: "./app/index.js",
    output: {
      path: __dirname+"/public",
      filename: "index.js",
    },
    module: {
      loaders: commonLoaders.concat([
        { test: /\.css$/,  loader: "css-loader" },
      ])
    }
  },
  {name: "server-side",
    entry: "./server/index.js",
    target: "node",
    output: {
      path: __dirname,
      filename: "index.js",
      publicPath: publicPath,
      libraryTarget: "commonjs2"
    },
    externals: /^[a-z\-0-9]+$/,
    module: {
      loaders: commonLoaders.concat([
        { test: /\.css$/,  loader: "css-loader" },
      ])
    }
  }
];
