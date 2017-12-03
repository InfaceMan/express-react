var path = require("path");
var commonLoaders = [
  { test: /(\.jsx|\.js)$/, loader: "babel-loader" },
  { test: /\.png$/, loader: "url-loader" },
  { test: /\.jpg$/, loader: "file-loader" },
];
var assetsPath = path.join(__dirname, "public", "assets");
var publicPath = "assets/";
module.exports = [
    { name: "bw",
    entry: "./server/Greeter.js",
    target: "node",
    output: {
      path: __dirname+"/public",
      filename: "Greeter.js",
      publicPath: publicPath
    },
    externals: /^[a-z\-0-9]+$/,
    module: {
      loaders: commonLoaders.concat([
        { test: /\.css$/,  loader: path.join(__dirname, "server", "style-collector") + "!css-loader" },
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
        { test: /\.css$/,  loader: path.join(__dirname, "server", "style-collector") + "!css-loader" },
      ])
    }
  }
];
