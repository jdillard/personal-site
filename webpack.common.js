const webpack = require('webpack');
const path = require("path");
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
//const ExtractTextPlugin = require("extract-text-webpack-plugin");

//const extractSass = new ExtractTextPlugin({
//  filename: "css/styles.[contenthash].css",
//  disable: process.env.NODE_ENV === "development"
//});

module.exports = {
  plugins: [
    new webpack.ProvidePlugin({
      moment: "moment",
      axios: "axios"
    }),
    //new ExtractTextPlugin("./assets/dist/css/styles.css"),
    new webpack.optimize.CommonsChunkPlugin({name: 'commons', filename: 'js/[name].[chunkhash].js', children: true}),
    new ManifestPlugin({
      fileName: '../../_data/asset-manifest.json'
    }),
    new WebpackCleanupPlugin()
  ],
  entry: {
    about: "./assets/js/about.js",
    archive: "./assets/js/archive.js",
    index: "./assets/js/index.js",
    post: "./assets/js/post.js",
    commons: "./assets/js/commons.js",
    library: "./assets/js/library.js",
    logBook: "./assets/js/logBook.js",
    weather: "./assets/js/weather.js"
  },
  output: {
    path: path.resolve(__dirname, 'assets/dist/'),
    filename: "js/[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/, // include .js files
        enforce: "pre", // preload the jshint loader
        exclude: /node_modules/, // exclude any and all files in the node_modules folder
        use: [
          {
            loader: "jshint-loader"
          }
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader?limit=100000'
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader',
        query: {
          helperDirs: [
            __dirname + "/assets/js/helpers"
          ]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules$/,
        query: {
          presets: ['env']
        }
      }
    ]
  }
};