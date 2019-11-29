const webpack = require('webpack');
const path = require("path");
const ManifestPlugin = require('webpack-manifest-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");

module.exports = {
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /css$/,
          chunks: 'all',
          enforce: true
        },
        vendors: {
          filename: 'js/[name].[chunkhash].js'
        }
      }
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          autoprefixer()
        ]
      }
    }),
    new webpack.ProvidePlugin({
      moment: "moment",
      axios: "axios"
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
          handlebarsLoader: {}
      }
    }),
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
    getInvolved: "./assets/js/get-involved.js",
    trad: "./assets/js/trad.js",
    trip: "./assets/js/trip.js",
    tripArchive: "./assets/js/trip-archive.js",
    weather: "./assets/js/weather.js"
  },
  output: {
    path: path.resolve(__dirname, 'assets/dist/'),
    filename: "js/[name].[chunkhash].js"
  },
  module: {
    rules: [
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: 'url-loader?limit=100000'
      },
      {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      }
    ]
  }
};