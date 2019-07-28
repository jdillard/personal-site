const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin-legacy');

module.exports = merge(common, {
  plugins: [
    new TerserPlugin()
  ]
});