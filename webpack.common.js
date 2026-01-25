//process.traceDeprecation = true
const webpack = require('webpack');
const path = require("path");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
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
        defaultVendors: {
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
      moment: "moment"
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
          handlebarsLoader: {}
      }
    }),
    new WebpackManifestPlugin({
      fileName: '../../_data/asset-manifest.json'
    })
  ],
  entry: {
    archive: "./source/assets/js/archive.js",
    index: "./source/assets/js/index.js",
    post: "./source/assets/js/post.js",
    commons: "./source/assets/js/commons.js",
    avy: "./source/assets/js/avy.js",
    library: "./source/assets/js/library.js",
    logBook: "./source/assets/js/logBook.js",
    getInvolved: "./source/assets/js/get-involved.js",
    taylor: "./source/assets/js/taylor.js",
    trad: "./source/assets/js/trad.js",
    trip: "./source/assets/js/trip.js",
    gpxMap: "./source/assets/js/gpx-map.js",
    tripArchive: "./source/assets/js/trip-archive.js",
    weather: "./source/assets/js/weather.js",
    tailwind: "./source/assets/css/tailwind.css"
  },
  output: {
    path: path.resolve(__dirname, 'source/assets/dist'),
    publicPath: '',
    filename: "js/[name].[chunkhash].js",
    clean: true
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
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
        ],
      }
    ]
  }
};
